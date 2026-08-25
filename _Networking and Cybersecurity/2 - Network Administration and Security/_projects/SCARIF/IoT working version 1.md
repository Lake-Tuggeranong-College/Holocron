# Main.cpp

```
// MQTT client name
// TODO - Change the name to the specific module name.
const char *mqttClient = "ESP32-Ryan2"; // This should be unique for each ESP32, e.g: "ESP32_Servo", "ESP32_Piezo", etc

// MQTT Topic
const char *mqttTopic;

#include <Arduino.h>
#include "comms.h"

#include <Wire.h>
#include "Adafruit_ADT7410.h"

// Create the ADT7410 temperature sensor object
Adafruit_ADT7410 tempsensor = Adafruit_ADT7410();

void performActionBasedOnPayload(String payload)
{
    Serial.print("Payload: ");
    Serial.println(payload);
    if ((char)payload[0] == '1')
    {
        Serial.println("LED ON");
        digitalWrite(LED_BUILTIN, HIGH);
    }
    else
    {
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

    randomSeed(analogRead(A0)); // Seed using an unconnected analog pin for real randomness
    
    // Make sure the sensor is found, you can also pass in a different i2c
    // address with tempsensor.begin(0x49) for example
    if (!tempsensor.begin())
    {
        Serial.println("Couldn't find ADT7410!");
        while (1);
    }
}

void loop()
{
    // 1. Handle Connection Persistence
    mqttConnect(); // Ensure we are connected to the MQTT broker. If not, this will attempt to reconnect.

    // 2. Generate and send a random number periodically
    int randomNumber = random(1, 100001);

    float tempInC = tempsensor.readTempC();
    //Serial.println(tempInC);
    sendPeriodicUpdate("sensorData", String(tempInC));

    client.loop(); // Check for incoming messages and keep the connection alive
    delay(100);
}
```


# comms.h

```
/*
This file contains the communication logic for the development module, including MQTT setup, message handling, and periodic updates.

DO NO CHANGE ANYTHING IN THIS FILE UNLESS YOU KNOW WHAT YOU ARE DOING, AS THIS FILE CONTAINS THE CORE COMMUNICATION LOGIC FOR THE MODULE.

*/

#include <WiFi.h>
#include <PubSubClient.h>
#include "sensitiveInformation.h" // ENSURE WIFI & MQTT IS CONFIGURED CORRECTLY

// MQTT client setup
WiFiClient espClient;
PubSubClient client(espClient);
String topicBuffer;


// Replace with the MQTT broker IP address and port (default port for MQTT is 1883)
const char* mqttServer = "192.168.1.116";  
const int mqttPort = 5883;


unsigned long lastUpdate = 0;
const unsigned long updateInterval = 5000; // Time between random number updates (5 seconds)

void performActionBasedOnPayload(String payload);

void wifiSetup()
{

    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED)
    {
        delay(1000);
        Serial.println("Connecting to WiFi..");
    }
    Serial.println();
    Serial.print("Connected to WiFI. IP address: ");
    Serial.println(WiFi.localIP());
}



/*
  Use this to send data back to the MQTT broker.
  Example usage: sendDataToServer("challenges/Status", "Task Completed");
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
    // 1. Timer: Check if 5 seconds (updateInterval) have passed since the last update
    unsigned long now = millis();
    if (now - lastUpdate > updateInterval)
    {
        lastUpdate = now; // Reset the timer

        // --- Next steps will go here ---

        // 3. Topic: Construct the special update topic
        // We use "updateChallenges/" so the server knows this is incoming data
        String updateTopic = topic + "/" + String(mqttClient);

        // 4. Transmit: Use the helper function to send the data to the broker
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
            Serial.println("Connected to MQTT");
            // mqttTopic is "challenges/ESP32_Ryan"
            client.subscribe(mqttTopic);
            topicBuffer = "EventLog/" + String(mqttClient);
            mqttTopic = topicBuffer.c_str();
            sendDataToServer(mqttTopic, String(mqttClient) + " is online.");
        }
        else
        {
            Serial.print("Failed with state ");
            Serial.print(client.state());
            delay(2000);
        }
    }
}

void mqttSetup()
{
    // Construct the MQTT topic dynamically
    topicBuffer = "devicePayload/" + String(mqttClient);
    mqttTopic = topicBuffer.c_str();

    client.setServer(mqttServer, mqttPort);
    client.setCallback(callback);
    mqttConnect();
}


```


# SensitiveInformation.

```
/*
 * Contains any sensitive Infomration that you do not want published to Github.
 * 
 * The SSID and Password variables will need to be changed if you’re connecting to another Wireless Access Point (such as at home).
 *
 * This file is supposed to be in the .gitignore
 * 
 */


// Wifi network
const char* ssid = "CyberRange";       // Wifi Network Name
const char* password = "CyberRange";  // Wifi Password


```