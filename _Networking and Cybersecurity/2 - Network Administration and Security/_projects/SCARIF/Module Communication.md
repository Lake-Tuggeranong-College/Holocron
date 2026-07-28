# How-To Guide: Transmit Telemetry Data via MQTT on an ESP32

This guide walks you through setting up Rapid Application Development (RAD) communication code for your Adafruit Huzzah32 Feather (ESP32) microcontroller. By the end of this guide, your device will connect to Wi-Fi, join an MQTT broker, and exchange telemetry data with a server.

## Prerequisites

- PlatformIO installed within Visual Studio Code.
    
- Your project workspace open in PlatformIO.
    
- Hardware: Adafruit Huzzah32 Feather board connected via USB.
    

## Step 1: Create the Communication Module (`comms.h`)

1. Open your project in Visual Studio Code.
    
2. In the `src` folder, create a new file named `comms.h`.
    
3. Paste the following header code into `src/comms.h`:
    

```
/*
 * Communications logic for the development module, including MQTT setup, 
 * message handling, and periodic updates.
 * 
 * NOTE: Avoid modifying the core routines unless required for custom network protocols.
 */

#include <WiFi.h>
#include <PubSubClient.h>
#include "sensitiveInformation.h" // Ensure network credentials are set correctly

// MQTT client setup
WiFiClient espClient;
PubSubClient client(espClient);
String topicBuffer;

// MQTT Broker configuration (Default MQTT port is 1883)
const char* mqttServer = "192.168.68.104";  
const int mqttPort = 1883;

unsigned long lastUpdate = 0;
const unsigned long updateInterval = 5000; // Interval between periodic updates (5000 ms)

void performActionBasedOnPayload(String payload);

void wifiSetup()
{
    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED)
    {
        delay(1000);
        Serial.println("Connecting to Wi-Fi...");
    }
    Serial.println();
    Serial.print("Connected to Wi-Fi. Local IP address: ");
    Serial.println(WiFi.localIP());
}

/*
 * Helper function to publish data back to the MQTT broker.
 * Example: sendDataToServer("challenges/Status", "Task Completed");
 */
void sendDataToServer(String topic, String message)
{
    if (client.connected())
    {
        Serial.print("Sending message to topic [");
        Serial.print(topic);
        Serial.print("]: ");
        Serial.println(message);

        // Convert String to char array for the PubSubClient library
        client.publish(topic.c_str(), message.c_str());
    }
    else
    {
        Serial.println("Send failed: MQTT not connected.");
    }
}

void sendPeriodicUpdate(String topic, String dataToSend)
{
    // Timer check: verify if the interval has elapsed
    unsigned long now = millis();
    if (now - lastUpdate > updateInterval)
    {
        lastUpdate = now; // Reset timer

        // Construct unique topic: "updateChallenges/<CLIENT_NAME>"
        String updateTopic = topic + "/" + String(mqttClient);

        // Transmit payload
        sendDataToServer(updateTopic, dataToSend);
    }
}

void callback(char *topic, byte *payload, unsigned int length)
{
    String message = "";
    for (int i = 0; i < length; i++)
    {
        message += (char)payload[i];
    }

    String internalPrefix = "__INTERNAL__";
    if (message.startsWith(internalPrefix))
    {
        message = message.substring(internalPrefix.length());
    }

    Serial.print("Message arrived [");
    Serial.print(topic);
    Serial.print("] ");
    Serial.println(message);

    performActionBasedOnPayload(message);
}

void mqttConnect()
{
    while (!client.connected())
    {
        Serial.println("Connecting to MQTT...");
        if (client.connect(mqttClient))
        {
            Serial.println("Connected to MQTT broker.");
            client.subscribe(mqttTopic);
            sendDataToServer("EventLog", String(mqttClient) + " is online.");
        }
        else
        {
            Serial.print("Failed, rc=");
            Serial.print(client.state());
            Serial.println(" - retrying in 2 seconds...");
            delay(2000);
        }
    }
}

void mqttSetup()
{
    // Construct topic name dynamically
    topicBuffer = "challenges/" + String(mqttClient);
    mqttTopic = topicBuffer.c_str();

    client.setServer(mqttServer, mqttPort);
    client.setCallback(callback);
    mqttConnect();
}
```

## Step 2: Configure Credentials (`sensitiveInformation.h`)

1. Inside the `src` folder, create another file named `sensitiveInformation.h`.
    
2. Insert the credentials code below:
    

```
/*
 * Contains sensitive network parameters.
 * Note: Update these credentials if connecting to a home network or hot-spot.
 * Keep this file listed in your .gitignore to avoid pushing secrets to GitHub.
 */

// Wi-Fi Credentials
const char* ssid = "CyberRange";       // Network SSID
const char* password = "CyberRange";  // Network Password
```

## Step 3: Implement Main Application Logic (`main.cpp`)

1. Open `src/main.cpp`.
    
2. Replace its content with the code below, which handles board initialization, subscription callbacks, and main loop execution:
    

```
#include <Arduino.h>

// Set a unique identifier for your device before importing comms.h
const char *mqttClient = "ESP32_StudentName"; // EDIT THIS FIELD

const char *mqttTopic;

#include "comms.h"

void performActionBasedOnPayload(String payload)
{
    Serial.print("Payload received: ");
    Serial.println(payload);

    // Turn built-in LED ON if payload starts with '1', else OFF
    if (payload.length() > 0 && payload[0] == '1')
    {
        Serial.println("Action: LED ON");
        digitalWrite(LED_BUILTIN, HIGH);
    }
    else
    {
        Serial.println("Action: LED OFF");
        digitalWrite(LED_BUILTIN, LOW);
    }
}

void setup()
{
    pinMode(LED_BUILTIN, OUTPUT);
    Serial.begin(9600);
    
    wifiSetup();
    mqttSetup();

    while (!Serial)
    {
        delay(10);
    }
    delay(1000);
}

void loop()
{
    // 1. Maintain connection to the broker
    mqttConnect();

    // 2. Transmit periodic telemetry (if required by design specification)
    unsigned long now = millis();
    if (now - lastUpdate > updateInterval)
    {
        lastUpdate = now;
        // TODO: Insert customized sendDataToServer() calls here.
    }

    // 3. Yield execution time for PubSubClient processing
    client.loop();
    delay(100);
}
```

## Step 4: Personalise Board Identifier

1. Locate line 4 in `src/main.cpp`:
    
    ```
    const char *mqttClient = "ESP32_StudentName";
    ```
    
2. Update `"ESP32_StudentName"` to a unique name following standard naming conventions (e.g., `"ESP32_Alex_M"`).
    

> **Important:** Duplicate client identifiers will cause the MQTT broker to repeatedly disconnect both devices.

## Step 5: Build, Test, and Version Control

1. Click **File -> Save All** (`Ctrl + K, S`).
    
2. Click the **PlatformIO: Build** checkmark button ($\checkmark$) in the status bar to compile the code.
![[moduleRADBuild.png]]
3. Upload the firmware to your Adafruit Huzzah32 Feather and open the **Serial Monitor** at 9600 baud to observe telemetry logs.
    
4. Stage, commit, and push your changes to your Git repository using your standard course workflow:
    
    ```
    git add .
    git commit -m "feat: added RAD MQTT communication modules"
    git push origin main
    ```
    

# Explanation: Telemetry & Rapid Application Development Architecture

Understanding the architectural decisions behind this template is key to meeting ACT BSSS Digital Technologies outcomes regarding embedded systems, data protocols, and cyber security principles.

### Rapid Application Development (RAD)

In engineering, **RAD** prioritises iterative prototyping and reusable code components over lengthy initial planning. By modularising network logic into header files (`comms.h`) and separating configuration variables (`sensitiveInformation.h`), you can rapidly adapt your project to control different sensors or actuators without rewriting communication protocols.

```
┌────────────────────────────────────────────────────────┐
│                        main.cpp                        │
│   (Application Logic & Custom Payload Action Routines)  │
└───────────┬────────────────────────────────┬───────────┘
            │                                │
            ▼                                ▼
┌──────────────────────────┐    ┌─────────────────────────┐
│         comms.h          │    │ sensitiveInformation.h  │
│ (Wi-Fi & MQTT Transport) │    │  (Network Credentials)  │
└──────────────────────────┘    └─────────────────────────┘
```

### Publish-Subscribe Pattern with MQTT

Unlike HTTP, which uses a traditional **client-server (request-response)** model, **MQTT (Message Queuing Telemetry Transport)** relies on a **Publish-Subscribe architecture** managed by a central **broker**:

- **Publishers** send messages tagged with a specific string known as a **topic** (e.g., `challenges/ESP32_Alex_M`).
    
- **Subscribers** register interest in specific topics. Whenever a publisher posts to that topic, the broker forwards the payload to all subscribers.
    
- **Lightweight Header Overhead:** MQTT headers are minimal (as small as 2 bytes), making it ideal for low-power IoT microcontrollers like the ESP32.
    

### Non-Blocking Timers (`millis()` vs `delay()`)

Notice how periodic message execution is handled using time comparisons rather than the `delay()` function:

```
unsigned long now = millis();
if (now - lastUpdate > updateInterval) { ... }
```

Using `delay(5000)` pauses CPU execution entirely, preventing the device from processing incoming MQTT messages via `client.loop()`. Using `millis()` keeps the device responsive while maintaining fixed intervals for telemetry transmission.

### Cyber Security & Credential Hygiene

Hardcoding passwords into source code tracked by Git repository histories is a major vulnerability.

- `sensitiveInformation.h` isolates Wi-Fi keys from implementation logic.
    
- In production workflows, this file is excluded via `.gitignore` to ensure credentials remain on the local hardware development system and are never exposed publicly.
    

# Summary & Key Takeaways

This tutorial establishes a foundational IoT pipeline connecting embedded hardware to a central broker using industry-standard development techniques:

| Focus Area              | Key Takeaway                                                                                                       | Context                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| **System Architecture** | Modular design (`comms.h` separated from `main.cpp`) accelerates Rapid Application Development (RAD).              | Evaluates software design principles and code reusability.              |
| **Network Protocol**    | MQTT publish-subscribe mechanism lowers packet overhead compared to HTTP.                                          | Demonstrates understanding of lightweight telemetry protocols.          |
| **Execution Control**   | Non-blocking timing using `millis()` keeps `client.loop()` responsive.                                             | Applies efficient real-time microcontroller memory & loop control.      |
| **Cyber Security**      | Isolating Wi-Fi credentials into `sensitiveInformation.h` prevents secret leaks via Version Control Systems (Git). | Highlights standard industry security practices and credential hygiene. |