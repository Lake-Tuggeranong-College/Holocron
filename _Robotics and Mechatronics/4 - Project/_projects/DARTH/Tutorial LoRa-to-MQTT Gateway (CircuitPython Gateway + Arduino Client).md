
Using Adafruit Feather RP2040 RFM and AirLift WiFi

## 1. System Overview

This tutorial covers a complete end-to-end LoRa pipeline:
1. **Transmitter Node (Arduino C++):** Runs on a Feather RP2040 RFM. Generates a random number every 1 second, flashes the onboard LED, and transmits the payload via LoRa.
2. **Gateway Node (CircuitPython 10.x):** Runs on a Feather RP2040 RFM stacked with an AirLift FeatherWing. It listens for incoming LoRa packets and bridges them over WiFi to an MQTT broker on topic `lora/gateway/data`.
3. **Bi-Directional Downlink:** Supports receiving command payloads from an MQTT broker on topic `modules/client` and transmitting them back via LoRa to control hardware (such as toggling an onboard LED on the client node).

![[gatewayLoraMQTT.excalidraw.png]]


---

## 2. Hardware Connections & Pinout Summary

The **Feather RP2040 RFM** and **AirLift FeatherWing** are designed to be stackable. **No manual soldering or jumper wires are required** when stacking the boards directly via headers.

| Component | Pin Function | Feather RP2040 Board Alias | Notes |
| :--- | :--- | :--- | :--- |
| **LoRa (RFM9x)** | Chip Select (`CS`) | `board.RFM_CS` | Onboard hardwired (GPIO 16) |
| **LoRa (RFM9x)** | Reset (`RST`) | `board.RFM_RST` | Onboard hardwired (GPIO 17) |
| **LoRa (RFM9x)** | Interrupt (`IRQ`) | `GPIO 21` | Onboard hardwired |
| **AirLift WiFi** | Chip Select (`CS`) | `board.D13` | Stacked Header |
| **AirLift WiFi** | BUSY / Ready (`ACK`)| `board.D11` | Stacked Header |
| **AirLift WiFi** | Reset (`RESETN`) | `board.D12` | Stacked Header |

> **Note on WiFi Security:** The AirLift FeatherWing supports 2.4GHz WiFi networks using **WPA/WPA2**. It does **not** support WPA3-Only networks or 5GHz bands.

---

## 3. Section A: Arduino-Based Client Node (Transmitter)

This code programs a Feather RP2040 RFM in C++/Arduino to transmit a random number string over LoRa once every second and flashes the built-in LED during transmission.

### Software Prerequisites (Arduino IDE)
Install the **RadioHead** library by Mike McCauley via the Arduino Library Manager.

### Client Code (`lora_client_tx.ino`)

```cpp
#include <SPI.h>
#include <RH_RF95.h>

// --- CONFIGURATION ---
#define RF95_FREQ 915.0

// Hardwired LoRa pins on Feather RP2040 RFM
#define RFM95_CS      16
#define RFM95_RST     17
#define RFM95_INT     21

// Initialize RadioHead driver
RH_RF95 rf95(RFM95_CS, RFM95_INT);

int packetNum = 0;

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LOW);

  Serial.begin(115200);
  while (!Serial && millis() < 3000); // Wait up to 3s for Serial Monitor

  Serial.println("Initializing Arduino LoRa Client Node...");

  // Manual Reset of RFM95 LoRa Module
  pinMode(RFM95_RST, OUTPUT);
  digitalWrite(RFM95_RST, HIGH);
  delay(10);
  digitalWrite(RFM95_RST, LOW);
  delay(10);
  digitalWrite(RFM95_RST, HIGH);
  delay(10);

  // Initialize RFM95 Radio
  if (!rf95.init()) {
    Serial.println("LoRa radio init failed! Check hardware.");
    while (1);
  }
  
  rf95.setFrequency(RF95_FREQ);
  rf95.setTxPower(23, false); // Maximum transmit power (23 dBm)
  
  // Seed random generator with floating analog reading
  randomSeed(analogRead(A0));
  Serial.println("LoRa Client Ready. Transmitting every 1 second...");
}

void loop() {
  // Generate random number
  long randomNumber = random(1000, 9999);
  
  // Format payload buffer
  char radiopacket[32];
  snprintf(radiopacket, sizeof(radiopacket), "Value: %ld", randomNumber);

  Serial.print("Sending packet #");
  Serial.print(packetNum++);
  Serial.print(" -> Payload: ");
  Serial.println(radiopacket);

  // Visual LED indicator (Turn ON during transmit)
  digitalWrite(LED_BUILTIN, HIGH);

  // Transmit via LoRa
  rf95.send((uint8_t *)radiopacket, strlen(radiopacket));
  rf95.waitPacketSent();

  // Turn OFF LED
  digitalWrite(LED_BUILTIN, LOW);

  // Wait 1 second before next transmission
  delay(1000);
}
```

---

## 4. Section B: CircuitPython Gateway Node (Receiver & MQTT Bridge)

### CircuitPython Installation Instructions
1. Download the latest **CircuitPython 10.x `.uf2` file** for the Adafruit Feather RP2040 RFM from [circuitpython.org](https://circuitpython.org/).
2. Connect the RP2040 Feather to your computer via USB.
3. Hold down the **BOOT** button, press and release the **RESET** button, then release the **BOOT** button to enter the bootloader.
4. A drive named `RPI-RP2` will appear on your computer.
5. Drag and drop the downloaded `.uf2` file onto the `RPI-RP2` drive.
6. The board will reboot automatically and mount as a drive named **`CIRCUITPY`**.

### CircuitPython Dependencies
Download the **Version 10.x Adafruit CircuitPython Bundle** and copy these to `CIRCUITPY/lib`:
* `adafruit_rfm9x.mpy`
* `adafruit_esp32spi/` (Folder containing `adafruit_esp32spi_socketpool.mpy`)
* `adafruit_connection_manager.mpy`
* `adafruit_requests.mpy`
* `adafruit_minimqtt/` (Folder)
* `adafruit_bus_device/` (Folder)

### Required User Configuration

Before uploading the CircuitPython script to your board, update the following parameters in the code to match your network and MQTT broker settings:

| Parameter Name | Data Type | Description | Example Value |
| :--- | :--- | :--- | :--- |
| `WIFI_SSID` | `String` | Name of your 2.4GHz WiFi network | `"YOUR_WIFI_SSID"` |
| `WIFI_PASS` | `String` | Password for your WiFi network | `"YOUR_WIFI_PASSWORD"` |
| `MQTT_BROKER` | `String` | IP address or hostname of your MQTT broker | `"192.168.1.50"` |
| `MQTT_PORT` | `Integer` | Port number configured on your MQTT broker | `1883` (or custom port like `6683`) |
| `MQTT_TOPIC` | `String` | MQTT topic where received LoRa data is published | `"lora/gateway/data"` |
| `RADIO_FREQ_MHZ` | `Float` | Operating frequency of your LoRa modules | `915.0` (or `868.0` / `433.0`) |

### Gateway Code (`code.py`)

```python
import time
import board
import busio
import digitalio
import adafruit_connection_manager
import adafruit_minimqtt.adafruit_minimqtt as MQTT
import adafruit_rfm9x
from adafruit_esp32spi import adafruit_esp32spi

# --- SOCKET IMPORT FOR CIRCUITPYTHON 9.x/10.x ---
try:
    from adafruit_esp32spi import adafruit_esp32spi_socketpool as socket_pool
except ImportError:
    from adafruit_esp32spi import adafruit_esp32spi_socket as socket_pool

# --- CONFIGURATION ---
WIFI_SSID = "YOUR_WIFI_SSID"
WIFI_PASS = "YOUR_WIFI_PASSWORD"
MQTT_BROKER = "192.168.1.50"
MQTT_PORT = 1883
MQTT_TOPIC = "lora/gateway/data"
RADIO_FREQ_MHZ = 915.0

# --- HARDWARE INITIALIZATION ---
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)

# AirLift Wing SPI Pinout (D13 = CS, D11 = ACK, D12 = RST)
esp32_cs = digitalio.DigitalInOut(board.D13)
esp32_ready = digitalio.DigitalInOut(board.D11)
esp32_reset = digitalio.DigitalInOut(board.D12)
esp = adafruit_esp32spi.ESP_SPIcontrol(spi, esp32_cs, esp32_ready, esp32_reset)

# RFM9x LoRa Setup using built-in board aliases
rfm9x_cs = digitalio.DigitalInOut(board.RFM_CS)
rfm9x_reset = digitalio.DigitalInOut(board.RFM_RST)
rfm9x = adafruit_rfm9x.RFM9x(spi, rfm9x_cs, rfm9x_reset, RADIO_FREQ_MHZ)
rfm9x.tx_power = 23

# --- NETWORK CONNECTION ---
print("Connecting to WiFi...")
while not esp.is_connected:
    try:
        esp.connect_AP(WIFI_SSID, WIFI_PASS)
    except Exception as e:
        print("WiFi connection failed, retrying...", e)
        esp32_reset.value = False
        time.sleep(0.1)
        esp32_reset.value = True
        time.sleep(1)
        continue
print("Connected to WiFi!")

# --- MQTT SETUP ---
pool = adafruit_connection_manager.get_radio_socketpool(esp)
ssl_context = adafruit_connection_manager.get_radio_ssl_context(esp)

mqtt_client = MQTT.MQTT(
    broker=MQTT_BROKER,
    port=MQTT_PORT,
    client_id="LoRaGateway_CircuitPython",
    socket_pool=pool,
    ssl_context=ssl_context
)

def connect_mqtt():
    if mqtt_client.is_connected():
        return True
    
    print("Connecting to MQTT broker...")
    try:
        mqtt_client.connect()
        print("Connected to MQTT!")
        return True
    except Exception as e:
        print("MQTT connection failed:", e)
        return False

# Initial connection attempt
connect_mqtt()

# --- MAIN GATEWAY LOOP ---
print("Gateway active. Listening for LoRa packets...")

while True:
    try:
        # 1. Maintain connection and process MQTT keepalives
        if not mqtt_client.is_connected():
            if not connect_mqtt():
                time.sleep(2)
                continue

        try:
            mqtt_client.loop()
        except Exception as loop_err:
            print("MQTT loop ping error:", loop_err)

        # 2. Check for incoming LoRa packets
        packet = rfm9x.receive(timeout=0.5)
        
        if packet is not None:
            try:
                packet_text = str(packet, "utf-8")
                rssi = rfm9x.last_rssi
                print(f"[LoRa RX] RSSI {rssi} dBm | Data: {packet_text}")
                
                # 3. Publish to MQTT only when connected
                if mqtt_client.is_connected():
                    mqtt_client.publish(MQTT_TOPIC, packet_text)
                    print(f"[MQTT TX] Published to topic '{MQTT_TOPIC}'")
                else:
                    print("[MQTT Error] Connection lost before publish could execute.")
            except (UnicodeError, ValueError):
                print("Garbled packet received (decoding error)")

    except Exception as e:
        print("Main loop error:", e)
        time.sleep(2)
```

---

## 5. Troubleshooting Checklist

* **Transmitter Visual Status:** The built-in LED on the transmitter node should flash briefly every 1 second when a LoRa packet is being sent out.
* **Pin Aliasing:** The RP2040 RFM board uses specific aliases (`board.RFM_CS` and `board.RFM_RST`) for its built-in LoRa module. Avoid using raw `board.D16` or `board.GP16` identifiers.
* **MiniMQTT and CircuitPython 10.x:** Use `adafruit_connection_manager` rather than calling `MQTT.set_socket()` to manage socket pools.
* **MQTT Loop Timeouts:** Do not pass small timeout values (such as `timeout=0.05`) to `mqtt_client.loop()`, as it must be greater than or equal to the default socket timeout (1.0s).

---

## 6. Section C: Bi-Directional Communication (MQTT Downlink to LoRa Client)

This section demonstrates how to extend both nodes to support two-way communication. Downlink messages published to the MQTT broker on topic `modules/client` are captured by the gateway and retransmitted over LoRa to the client node. If the payload is `"1"`, the client turns its built-in LED **ON**; if `"0"` (or any other value), the LED turns **OFF**.

### 6.1 Bi-Directional CircuitPython Gateway Code (`code_bidirectional.py`)

In this script, the gateway subscribes to `modules/client`. When a message arrives, the `message_callback` function triggers a LoRa packet transmission containing the payload text.

```python
import time
import board
import busio
import digitalio
import adafruit_connection_manager
import adafruit_minimqtt.adafruit_minimqtt as MQTT
import adafruit_rfm9x
from adafruit_esp32spi import adafruit_esp32spi

# --- SOCKET IMPORT FOR CIRCUITPYTHON 9.x/10.x ---
try:
    from adafruit_esp32spi import adafruit_esp32spi_socketpool as socket_pool
except ImportError:
    from adafruit_esp32spi import adafruit_esp32spi_socket as socket_pool

# --- CONFIGURATION ---
WIFI_SSID = "YOUR_WIFI_SSID"
WIFI_PASS = "YOUR_WIFI_PASSWORD"
MQTT_BROKER = "192.168.1.50"
MQTT_PORT = 1883
UPLINK_TOPIC = "lora/gateway/data"
DOWNLINK_TOPIC = "modules/client"
RADIO_FREQ_MHZ = 915.0

# --- HARDWARE INITIALIZATION ---
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)

# AirLift Wing SPI Pinout
esp32_cs = digitalio.DigitalInOut(board.D13)
esp32_ready = digitalio.DigitalInOut(board.D11)
esp32_reset = digitalio.DigitalInOut(board.D12)
esp = adafruit_esp32spi.ESP_SPIcontrol(spi, esp32_cs, esp32_ready, esp32_reset)

# RFM9x LoRa Setup
rfm9x_cs = digitalio.DigitalInOut(board.RFM_CS)
rfm9x_reset = digitalio.DigitalInOut(board.RFM_RST)
rfm9x = adafruit_rfm9x.RFM9x(spi, rfm9x_cs, rfm9x_reset, RADIO_FREQ_MHZ)
rfm9x.tx_power = 23

# --- NETWORK CONNECTION ---
print("Connecting to WiFi...")
while not esp.is_connected:
    try:
        esp.connect_AP(WIFI_SSID, WIFI_PASS)
    except Exception as e:
        print("WiFi connection failed, retrying...", e)
        esp32_reset.value = False
        time.sleep(0.1)
        esp32_reset.value = True
        time.sleep(1)
        continue
print("Connected to WiFi!")

# --- MQTT SETUP ---
pool = adafruit_connection_manager.get_radio_socketpool(esp)
ssl_context = adafruit_connection_manager.get_radio_ssl_context(esp)

mqtt_client = MQTT.MQTT(
    broker=MQTT_BROKER,
    port=MQTT_PORT,
    client_id="LoRaGateway_BiDirectional",
    socket_pool=pool,
    ssl_context=ssl_context
)

def message_callback(client, topic, message):
    print(f"[MQTT RX] Topic: '{topic}' | Message: '{message}'")
    print(f"[LoRa TX] Forwarding command over LoRa: '{message}'")
    rfm9x.send(bytes(message, "utf-8"))
    print("[LoRa TX] Downlink packet sent successfully.")

mqtt_client.on_message = message_callback

def connect_mqtt():
    if mqtt_client.is_connected():
        return True
    
    print("Connecting to MQTT broker...")
    try:
        mqtt_client.connect()
        mqtt_client.subscribe(DOWNLINK_TOPIC)
        print(f"Connected to MQTT and subscribed to '{DOWNLINK_TOPIC}'!")
        return True
    except Exception as e:
        print("MQTT connection failed:", e)
        return False

# Initial connection attempt
connect_mqtt()

# --- MAIN GATEWAY LOOP ---
print("Bi-directional Gateway Active. Processing Uplinks & Downlinks...")

while True:
    try:
        # 1. Maintain connection and process MQTT keepalives & incoming commands
        if not mqtt_client.is_connected():
            if not connect_mqtt():
                time.sleep(2)
                continue

        try:
            mqtt_client.loop()
        except Exception as loop_err:
            print("MQTT loop ping error:", loop_err)

        # 2. Check for incoming LoRa uplink packets from client nodes
        packet = rfm9x.receive(timeout=0.5)
        
        if packet is not None:
            try:
                packet_text = str(packet, "utf-8")
                rssi = rfm9x.last_rssi
                print(f"[LoRa RX] RSSI {rssi} dBm | Data: {packet_text}")
                
                # Publish uplink packet to MQTT
                if mqtt_client.is_connected():
                    mqtt_client.publish(UPLINK_TOPIC, packet_text)
                    print(f"[MQTT TX] Published uplink to '{UPLINK_TOPIC}'")
                else:
                    print("[MQTT Error] Connection lost before publish could execute.")
            except (UnicodeError, ValueError):
                print("Garbled packet received (decoding error)")

    except Exception as e:
        print("Main loop error:", e)
        time.sleep(2)
```

---

### 6.2 Bi-Directional Arduino Client Code (`lora_client_bidirectional.ino`)

The client continuously listens for LoRa downlink packets between transmission cycles. If a packet matches `"1"`, `LED_BUILTIN` is turned **ON**; if `"0"`, it turns **OFF**.

```cpp
#include <SPI.h>
#include <RH_RF95.h>

// --- CONFIGURATION ---
#define RF95_FREQ 915.0

#define RFM95_CS      16
#define RFM95_RST     17
#define RFM95_INT     21

RH_RF95 rf95(RFM95_CS, RFM95_INT);

unsigned long lastTxTime = 0;
const unsigned long txInterval = 3000; // Transmit uplink every 3 seconds
int packetNum = 0;
bool ledState = false;

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LOW);

  Serial.begin(115200);
  while (!Serial && millis() < 3000);

  Serial.println("Initializing Bi-Directional Arduino LoRa Client Node...");

  // Manual Reset of RFM95
  pinMode(RFM95_RST, OUTPUT);
  digitalWrite(RFM95_RST, HIGH);
  delay(10);
  digitalWrite(RFM95_RST, LOW);
  delay(10);
  digitalWrite(RFM95_RST, HIGH);
  delay(10);

  if (!rf95.init()) {
    Serial.println("LoRa radio init failed!");
    while (1);
  }
  
  rf95.setFrequency(RF95_FREQ);
  rf95.setTxPower(23, false);
  
  randomSeed(analogRead(A0));
  Serial.println("Client node ready. Listening for downlink commands...");
}

void loop() {
  // 1. Check for incoming LoRa downlink commands
  if (rf95.available()) {
    uint8_t buf[RH_RF95_MAX_MESSAGE_LEN];
    uint8_t len = sizeof(buf);
    
    if (rf95.recv(buf, &len)) {
      buf[len] = 0; // Null-terminate received string
      String command = String((char*)buf);
      command.trim(); // Clean trailing whitespace / newlines
      
      Serial.print("[LoRa Downlink RX] Command received: '");
      Serial.print(command);
      Serial.println("'");

      // Execute action based on payload value
      if (command == "1") {
        ledState = true;
        digitalWrite(LED_BUILTIN, HIGH);
        Serial.println("-> Action executed: Onboard LED turned ON");
      } else if (command == "0") {
        ledState = false;
        digitalWrite(LED_BUILTIN, LOW);
        Serial.println("-> Action executed: Onboard LED turned OFF");
      } else {
        Serial.print("-> Unknown command payload: ");
        Serial.println(command);
      }
    }
  }

  // 2. Non-blocking periodic uplink transmission
  unsigned long currentMillis = millis();
  if (currentMillis - lastTxTime >= txInterval) {
    lastTxTime = currentMillis;

    long randomNumber = random(1000, 9999);
    char radiopacket[32];
    snprintf(radiopacket, sizeof(radiopacket), "Val: %ld | LED: %s", randomNumber, ledState ? "ON" : "OFF");

    Serial.print("Sending uplink packet #");
    Serial.print(packetNum++);
    Serial.print(" -> ");
    Serial.println(radiopacket);

    rf95.send((uint8_t *)radiopacket, strlen(radiopacket));
    rf95.waitPacketSent();
  }
}
```

---

### 6.3 Testing Downlink Commands via MQTT

To send commands back to the client node, publish a payload of `"1"` or `"0"` to the MQTT topic `modules/client`.

#### Option A: Using MQTT Explorer (GUI Method)

1. **Connect:** Open **MQTT Explorer** and fill in your connection details (Broker IP `192.168.1.50`, Port `1883` or `6683`), then click **Connect**.
2. **Publish Panel:** On the right panel, set the **Topic** to:
   ```text
   modules/client
   ```
3. **Turn LED ON:**
   - Set the raw payload to: `1`
   - Click **Publish**.
4. **Turn LED OFF:**
   - Set the raw payload to: `0`
   - Click **Publish**.

#### Option B: Using Command Line (`mosquitto_pub`)

**Turn Onboard LED ON:**
```bash
mosquitto_pub -h 192.168.1.50 -p 1883 -t "modules/client" -m "1"
```

**Turn Onboard LED OFF:**
```bash
mosquitto_pub -h 192.168.1.50 -p 1883 -t "modules/client" -m "0"
```

#### Expected Serial Output (Arduino Client Node):
```text
[LoRa Downlink RX] Command received: '1'
-> Action executed: Onboard LED turned ON
```
