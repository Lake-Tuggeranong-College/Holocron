---
isCurrent: true
needsUpdating: false
---
>[!info] Written by Google Gemini

# Using Adafruit Feather RP2040 RFM and AirLift WiFi

## 1. Introduction

LoRa (Long Range) is a fantastic radio protocol for sending small amounts of data over miles, but it cannot talk directly to the internet. To see your data on a dashboard or smartphone, you need a **Gateway**.

In this tutorial, we will turn an **Adafruit Feather RP2040 RFM** into a "Bridge." It will listen for LoRa radio packets on one "ear" and whisper them to an MQTT Broker over WiFi with the other.

## 2. Prerequisites

### Hardware Required

- **Gateway Node:** Adafruit Feather RP2040 RFM (900MHz or 433MHz).
- **WiFi Co-Processor:** Adafruit AirLift Bitsy/FeatherWing.
- **Antenna:** A simple wire or uFL antenna tuned to your frequency.
- **MQTT Broker:** A running instance of Mosquitto, Home Assistant, or Adafruit IO.

### Software Required

Open the **Arduino IDE Library Manager** and install:

1. **RadioHead** (by Mike McCauley)
2. **WiFiNINA** (by Arduino)
3. **PubSubClient** (by Nick O'Leary)
4. **Arduino-mbed RP2040 Board Support** (via Boards Manager)

## 3. Hardware Setup (The "Stack")

The RP2040 Feather has a built-in LoRa radio. We are stacking the AirLift WiFi Wing on top. Because both devices use the **SPI Bus**, we must ensure they don't try to "talk" at the same time on the same Chip Select pin.

### The Pin Map

On the bottom of your **AirLift FeatherWing**, you must solder the jumpers to match these pins:

- **ESP32_CS:** Pin 13
- **ESP32_ACK:** Pin 12
- **ESP32_RST:** Pin 11

_Note: The onboard LoRa radio is already hardwired to pins 16 (CS), 17 (RST), and 21 (IRQ). Do not use these for the WiFi jumpers!_

## 4. The "Dual-Core" Strategy

Standard microcontrollers handle one task at a time. If the WiFi signal drops, the code might "freeze" while trying to reconnect, causing you to miss incoming LoRa packets.

We will use the **RP2040's Dual Cores**:

- **Core 0:** Manages the WiFi connection and MQTT publishing.
- **Core 1:** Sits in a tight loop, dedicated entirely to listening for Radio signals.

## 5. The Gateway Code

```
#include <SPI.h>
#include <RH_RF95.h>
#include <WiFiNINA.h>
#include <PubSubClient.h>

/* --- CONFIGURATION --- */
#define RF95_FREQ 915.0         // Change to 433.0 if using that version
const char* ssid = "YOUR_WIFI_NAME";
const char* pass = "YOUR_WIFI_PASSWORD";
const char* broker_ip = "192.168.1.50"; // Your MQTT Broker IP
const char* mqtt_topic = "lora/gateway/data";

/* --- PIN DEFINITIONS --- */
#define RFM95_CS    16
#define RFM95_INT   21
#define RFM95_RST   17
#define SPIWIFI_SS  13 
#define SPIWIFI_ACK 12
#define ESP32_RESET 11

/* --- GLOBAL OBJECTS --- */
RH_RF95 rf95(RFM95_CS, RFM95_INT);
WiFiClient wifiClient;
PubSubClient mqttClient(wifiClient);

// Shared variables for core communication
char packetBuffer[RH_RF95_MAX_MESSAGE_LEN];
volatile bool hasNewPacket = false;

// ==========================================
// CORE 0: WIFI & MQTT (The Internet Side)
// ==========================================
void setup() {
  Serial.begin(115200);
  delay(2000); // Wait for Serial to wake up

  // Configure AirLift Pins
  WiFi.setPins(SPIWIFI_SS, SPIWIFI_ACK, ESP32_RESET, -1, &SPI);
  
  connectToWiFi();
  mqttClient.setServer(broker_ip, 1883);
  Serial.println("Core 0: Network Ready.");
}

void loop() {
  // 1. Maintain Network Connection
  if (WiFi.status() != WL_CONNECTED) connectToWiFi();
  if (!mqttClient.connected()) reconnectMQTT();
  mqttClient.loop();

  // 2. Check for data from Core 1
  if (hasNewPacket) {
    Serial.print("Gateway -> Publishing: ");
    Serial.println(packetBuffer);
    
    if (mqttClient.publish(mqtt_topic, packetBuffer)) {
      hasNewPacket = false; // Successfully sent
    } else {
      Serial.println("MQTT Publish Failed!");
    }
  }
}

// ==========================================
// CORE 1: RADIO LISTENER (The Radio Side)
// ==========================================
void setup1() {
  // Manual reset of LoRa radio
  pinMode(RFM95_RST, OUTPUT);
  digitalWrite(RFM95_RST, HIGH); delay(10);
  digitalWrite(RFM95_RST, LOW);  delay(10);
  digitalWrite(RFM95_RST, HIGH); delay(10);

  if (!rf95.init()) {
    Serial.println("Core 1: LoRa init failed!");
    while (1);
  }
  
  rf95.setFrequency(RF95_FREQ);
  rf95.setTxPower(23, false);
  Serial.println("Core 1: LoRa Listening...");
}

void loop1() {
  if (rf95.available()) {
    uint8_t buf[RH_RF95_MAX_MESSAGE_LEN];
    uint8_t len = sizeof(buf);

    if (rf95.recv(buf, &len)) {
      buf[len] = 0; // Null-terminate string
      
      // Copy to shared buffer for Core 0
      if (!hasNewPacket) { // Don't overwrite if Core 0 is still busy
        strcpy(packetBuffer, (char*)buf);
        hasNewPacket = true;
      }
    }
  }
}

/* --- HELPER FUNCTIONS --- */
void connectToWiFi() {
  Serial.print("Connecting to WiFi...");
  while (WiFi.begin(ssid, pass) != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println(" Connected!");
}

void reconnectMQTT() {
  while (!mqttClient.connected()) {
    Serial.print("Connecting to MQTT...");
    if (mqttClient.connect("LoRaGateway_RP2040")) {
      Serial.println(" Connected!");
    } else {
      Serial.print(" failed, rc=");
      Serial.print(mqttClient.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}
```

## 6. Testing the System

1. **Upload the Code:** Select `Adafruit Feather RP2040` as your board.
2. **Open Serial Monitor:** You should see Core 0 connect to WiFi and Core 1 initialize the radio.
3. **Send a Packet:** Use a second LoRa Feather to send a message like `"Hello World"`.
4. **Check the Broker:** On your computer, use a tool like **MQTT Explorer**.
    You should see your radio message appear as an MQTT message!

## 7. Troubleshooting for Students

- **"LoRa init failed":** Check if you have an antenna attached. Radios can sometimes fail to initialize if they detect an impedance mismatch.
- **"WiFi failed":** Double-check your solder jumpers on the AirLift. If the pins in the code (`13, 12, 11`) don't match your solder, it won't work.
- **Data Not Appearing:** LoRa is sensitive to "Spreading Factor" and "Bandwidth." Ensure your transmitter and gateway are using the exact same RadioHead settings.

**Challenge:** Can you modify the code to include the **RSSI** (signal strength) of the LoRa packet in the MQTT message?

_Hint: Use `rf95.lastRssi()` inside the Core 1 loop._