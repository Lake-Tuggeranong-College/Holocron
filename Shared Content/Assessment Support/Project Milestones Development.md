# Student Guide: Completing Your Project Management Tool Template

Welcome to your **Project Management Tool Guide**! This step-by-step tutorial will help you translate initial project ideas into clear, highly detailed technical milestones required for Year 11 and Year 12 ACT BSSS assessment.

## Why Is This Important?

- **Eliminates Scope Creep:** Vague goals make it hard to know when a feature is actually finished.
- **Prevents Integration Failures:** Detailed plans ensure hardware components, software APIs, and network protocols work together.


## 1. Template Overview

Your project management template uses a simple 4-column structure:

| Column 1: Milestone Title                 | Column 2: Status                                      | Column 3: Due Date                     | Column 4: Planned Features of Product                                                |
| --------------------------------------------- | --------------------------------------------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Core topic, sub-system, or development phase. | Choose one: `Not started`, `In progress`, or `Completed`. | Target deadline formatted as `YYYY-MM-DD`. | Technical specifications, exact parameters, hardware pins, protocols, and exact numbers. |

## 2. Scheduling Due Dates: Working Backwards

Don't guess your dates chronologically from the start! Instead, plan backwards from your deadline using this 4-step process:

```
[Current Date]  --->  [Step 3: Core Features]  --->  [Step 2: Buffer Phase]  --->  [Step 1: Final Submission Date]
```

### Step 1: Confirm Your Final Submission Date

- Check your class schedule, task sheet or with your teacher.
- Write down the final submission deadline as your fixed anchor point (e.g., `2026-10-15`).

### Step 2: Reserve a Buffer Period ($1\text{--}2\text{ Weeks}$)

- Schedule your final milestone (e.g., _System Integration_, _Security Patching_, or _Testing & Polish_) 1 to 2 weeks **before** the final submission date.
- **Why?** This gives you critical safety time to fix unexpected bugs, recover from hardware issues, and polish your portfolio documentation.

### Step 3: Schedule Earlier Sub-systems Backwards

Work backwards from your buffer period to schedule preceding technical tasks:

- **Advanced Features:** $2\text{--}3\text{ weeks}$ before buffer (e.g., LoRa telemetry, advanced movement modes, payload injection).
- **Core Functionality:** $2\text{--}3\text{ weeks}$ before advanced features (e.g., MQTT database pipeline, motor drive loops, hitscan combat).
- **Hardware & Setup Foundations:** Set for the start of the project (e.g., chassis assembly, basic IP lobbies, ESP32 board config).

### Step 4: Double-Check Formatting

- Ensure dependent sub-systems are given sequential, realistic timelines.

## 3. The Golden Rule: Specificity Over Vagueness

Column 4 (**Planned Features of Product**) must never contain generic descriptions like _"car moves forward"_, _"data gets sent to server"_, or _"guns do damage"_. You need to explain **how** each feature works using precise specs.

### Domain Checklist: What Details Must You Include?

#### Networking Projects (Year 11 & Year 12)

- **Hardware:** Microcontroller board model (e.g., Adafruit ESP32 Feather) and allocated GPIO pins.
- **Protocols:** Communication method (MQTT, HTTP `POST`/`GET`, REST API, WebSockets).
- **Network Parameters:** Broker port numbers (Port 1883 for unencrypted MQTT, 8883 for MQTTS), QoS levels, and publish/subscribe topic paths.
- **Backend & Database:** Database engines (MariaDB, MySQL, SQLite) and table schemas (field names, data types).
- **Security & Interception:** Tools used (Wireshark, Burp Suite, `mosquitto_pub`) and attack vectors (ARP spoofing, packet sniffing, parameter tampering).

#### Robotics Projects (Year 11 & Year 12)

- **Microcontrollers & Pinouts:** Specific pin allocations for motor drivers (PWM and direction pins) and sensors.
- **Motor Drivers & Power:** Driver boards (L298N, TB6612FNG, BTS7960) and power supplies (e.g., 2S 7.4V or 3S 11.1V LiPo batteries).
- **Sensors & Loops:** Sensor models (HC-SR04 sonar, TCRT5000 IR line sensors, MPU6050 IMU), polling frequencies (e.g., 50 Hz), and cutoff thresholds (e.g., $<20\text{ cm}$).
- **Wireless Radios:** LoRa RF modules (e.g., SX1276 FeatherWing), frequencies (915 MHz), Spreading Factors (SF7–SF12), bandwidth (125 kHz), and packet sizes.

#### Game Development Projects

- **Spatial Movement:** Dimensions (2D vs. 3D), active movement axes ($X, Y, Z$), and mechanics (walk, sprint, jump, crouch, slide, crawl).
- **Combat Metrics:** Player health pools ($100\text{ HP}$), fire rates (shots/sec), exact damage values per hit, magazine capacities, and reload timers.
- **Networking:** Tick rate (e.g., 60 Hz), connection protocol (direct IPv4, port 7777), and maximum player count.
- **Skeletal Rigging:** 1st-person vs. 3rd-person mesh sync and animation state transitions.

## 4. Before & After Transformations

See how vague initial ideas transform into gold-standard technical specifications.

### Example A: Year 11 Networking (ESP32 Feather $\rightarrow$ MQTT $\rightarrow$ Database $\rightarrow$ PHP)

- ❌ **Vague:** _"Send microcontroller data to a database and make a PHP website to view it and change data."_
- ✅ **High Detail:**
    - **Hardware:** ESP32 Feather capturing ambient data via a DHT22 sensor every 2 seconds.
    - **Transport:** Connects via WPA2 Wi-Fi and publishes JSON telemetry payloads to a central Mosquitto MQTT broker on Port 1883.
    - **MQTT Topic:** `telemetry/feather_01/sensors` with QoS 0.
    - **Backend:** Server-side Python script subscribes to `telemetry/#` and writes data to a MariaDB `sensor_logs` table (`id`, `device_id`, `temperature`, `humidity`, `timestamp`).
    - **Front-end:** PHP dashboard displaying a live auto-refreshing HTML table with an administrative override form (`POST` requests).

### Example B: Year 12 Networking (Network Interception & Security)

- ❌ **Vague:** _"Set up a challenge where students intercept and change network data."_
- ✅ **High Detail:**
    - **Environment:** Central Linux VM server running unencrypted Mosquitto MQTT (Port 1883) and Nginx web portal (`192.168.10.10`).
    - **Phase 1 (Traffic Sniffing):** Capture cleartext MQTT publish topics (`telemetry/device/credentials`) and HTTP `POST` payloads using Wireshark to extract admin session tokens.
    - **Phase 2 (Payload Injection):** Perform ARP spoofing via `arpspoof`/Ettercap to intercept transit packets. Inject forged JSON telemetry frames using `mosquitto_pub` to override server records and bypass authorization.

### Example C: Year 11 Robotics (Autonomous & IR Smart Car)

- ❌ **Vague:** _"Make a smart car with sonar, IR remote, and line sensors so it can move around."_
- ✅ **High Detail:**
    - **Drive System:** 2WD chassis driven by an L298N motor driver linked to an ESP32 Feather board (7.4V LiPo power).
    - **Mode 1 (Sonar Avoidance):** HC-SR04 sonar sweeps $180^\circ$ on an SG90 servo. Halts if obstacle $<20\text{ cm}$ and pivots toward maximum clearance ($>35\text{ cm}$).
    - **Mode 2 (IR Remote):** VS1838B IR receiver decodes NEC hex signals for directional control and PWM speed scaling ($0\text{--}255$).
    - **Mode 3 (Line Following):** 3-channel TCRT5000 sensor array running a PID loop at 100 Hz to follow an 18mm black electrical tape track.

### Example D: Year 12 Robotics (6WD LoRa Telemetry Rover)

- ❌ **Vague:** _"Build a 6WD car that uses LoRa to send telemetry and receive controls over long distances."_
- ✅ **High Detail:**
    - **Drivetrain:** 6WD aluminium chassis powered by 6x 12V DC motors via dual BTS7960 43A motor drivers and 3S 11.1V LiPo pack.
    - **RF Transceiver:** SX1276 LoRa FeatherWing on ESP32 Feather (SPI bus) configured at 915 MHz, Spreading Factor 7, 125 kHz bandwidth.
    - **Telemetry Payload:** 16-byte compressed binary frame `[Header | Speed | Voltage | Pitch/Roll | Checksum]` transmitted at 10 Hz over a 1 km line-of-sight link.
    - **Failsafe:** Auto-shutdown trigger if signal connection drops for $>1500\text{ ms}$.

### Example E: 3D Game Development (Multiplayer FPS)

- ❌ **Vague:** _"Players can join games, walk around, shoot each other, and respawn when they die."_
- ✅ **High Detail:**
    - **Lobby & Networking:** Direct IPv4 connection (Port 7777), max 8 players, 60 Hz network tick rate.
    - **Combat & Ballistics:** Hitscan raycasting, $100\text{ HP}$ base health.
    - **Weapons Balance:**
        - _Pistol:_ 35 DMG/shot, 1.5 shots/sec, 12-round mag.
        - _Assault Rifle:_ 18 DMG/shot, 10 shots/sec, 30-round mag.
    - **Respawn Loop:** Instant death state $\rightarrow$ 5-second countdown spectate screen $\rightarrow$ respawn at 1 of 4 set spawn points with 2-second invulnerability bubble.

## 5. Exemplar Milestone Tables

Use these completed exemplars as benchmarks for your own project documentation.

### Exemplar 1: Year 11 Networking (IoT MQTT Transmitter & Dashboard)

| Milestone Title                              | Status      | Due Date   | Planned Features of Product                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------- | ----------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ESP32 Feather Data Capture & MQTT Client** | Completed   | 2025-07-25 | • Program ESP32 Feather microcontrollers in C++ (Arduino IDE) with `PubSubClient`.<br>• Query DHT22 sensor every 2000ms for temperature and humidity.<br>• Connect to WPA2 Wi-Fi and publish JSON string `{"device_id": "FEATHER_01", "temp": 24.5, "humidity": 60}` to Mosquitto broker on Port 1883.<br>• Target topic: `telemetry/feather_01/data` (QoS 0). |
| **Central MQTT Worker & Database Schema**    | Completed   | 2025-07-31 | • Provision MariaDB database on central Linux server.<br>• Define `readings` table (`id`, `device_name`, `temp_val`, `humidity_val`, `created_at`).<br>• Write Python daemon script that subscribes to `telemetry/#`, parses incoming MQTT payloads, sanitises input, and inserts SQL records.                                                                 |
| **Web Dashboard & Manual Control**           | In progress | 2025-08-15 | • Build PHP 8.x web dashboard displaying the 20 most recent database entries in a dynamic table (5s JS fetch auto-refresh).<br>• Create administrative interface (`edit.php`) allowing logged-in users to update database records or publish override commands back to topic `commands/feather_01/override`.                                                   |
| **MQTT Interception & Tampering Test**       | Not started | 2025-08-30 | • Attach a network packet analyser (Wireshark) to monitor subnet traffic on Port 1883.<br>• Sniff unencrypted MQTT JSON payloads in transit.<br>• Perform payload injection using `mosquitto_pub` (e.g., sending `{"temp": 99.9}`) to test database validation vulnerabilities.                                                                                |

### Exemplar 2: Year 12 Networking (Security & Interception Challenge)

| Milestone Title                        | Status      | Due Date   | Planned Features of Product                                                                                                                                                                                                                                        |
| -------------------------------------- | ----------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Central Server & Application Setup** | Completed   | 2025-07-20 | • Deploy Mosquitto MQTT broker and Nginx web server on Ubuntu VM (`192.168.10.10`).<br>• Build vulnerable telemetry dashboard API endpoint (`/transfer.php`).<br>• Leave MQTT Port 1883 unencrypted (no TLS/auth) to allow packet interception challenges.         |
| **Traffic Sniffing Challenge Phase**   | Completed   | 2025-08-02 | • Formulate challenge specifications for users to capture cleartext network traffic.<br>• Use Wireshark filters (`mqtt` or `http.request.method == "POST"`).<br>• Extract plain-text session keys, monitor telemetry topics, and reconstruct JSON packet payloads. |
| **MitM & Payload Injection Pipeline**  | In progress | 2025-08-20 | • Configure ARP spoofing attacks using `arpspoof` or Ettercap to position an attacker node inline.<br>• Intercept transit MQTT publish frames.<br>• Spoof sender topics and inject modified payload parameters directly into central database.                     |
| **Security Patching & Remediation**    | Not started | 2025-09-10 | • Remediate identified vulnerabilities across server and client nodes.<br>• Enforce MQTTS (MQTT over TLS 1.3 on Port 8883) with X.509 certificates.<br>• Implement HMAC-SHA256 message authentication codes to verify payload integrity.                           |

### Exemplar 3: Year 11 Robotics (Autonomous & IR Smart Car)

| Milestone Title                    | Status      | Due Date   | Planned Features of Product                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------- | ----------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Chassis Assembly & Motor Logic** | Completed   | 2025-07-22 | • Assemble 2WD acrylic chassis with 2x 6V DC motors and L298N driver.<br>• Map ESP32 Feather GPIO Pins: PWM (14 & 32), Direction (15, 33, 27, 12).<br>• Implement software functions for `forward()`, `reverse()`, `spinLeft()`, and `spinRight()` with PWM speed control ($0\text{--}255$).                                                        |
| **IR Remote Control Integration**  | Completed   | 2025-08-01 | • Connect 38kHz VS1838B IR receiver to ESP32 Feather GPIO Pin 21.<br>• Decode NEC hex button codes using `IRremote` library.<br>• Map remote actions: UP = Forward, DOWN = Reverse, LEFT/RIGHT = Turn, OK = Emergency Stop.                                                                                                                         |
| **Sonar Obstacle Avoidance**       | In progress | 2025-08-18 | • Mount HC-SR04 sonar module on an SG90 micro servo (GPIO Pin 13).<br>• Program pulse loop: Trigger Pin 25, Echo Pin 26 (50ms polling rate).<br>• If obstacle $<20\text{ cm}$, stop vehicle, sweep servo to $45^\circ$ and $135^\circ$, and turn towards wider opening ($>35\text{ cm}$).                                                           |
| **Line Tracking Sensor Array**     | Not started | 2025-09-05 | • Mount 3-channel TCRT5000 IR sensor array ($5\text{ mm}$ ground clearance).<br>• Connect analog outputs to ESP32 Feather ADC Pins (GPIO 34, 39, 36).<br>• Run power-on calibration loop to set black vs. white thresholds.<br>• Code PID loop ($P=1.2, I=0.0, D=0.5$) updating motor speeds at 100 Hz to track an 18mm black electrical tape line. |

### Exemplar 4: Year 12 Robotics (6WD LoRa Telemetry Rover)

| Milestone Title                         | Status      | Due Date   | Planned Features of Product                                                                                                                                                                                                                                                                                           |
| --------------------------------------- | ----------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **6WD Drivetrain & High-Current Power** | Completed   | 2025-07-28 | • Build 6WD aluminium chassis with 6x 12V 300RPM gear motors.<br>• Wire motor banks to dual BTS7960 43A motor drivers controlled by ESP32 Feather.<br>• Power circuit: 3S 11.1V 5000mAh LiPo battery, 20A inline fuse, step-down 5V/5A UBEC for logic power.                                                          |
| **LoRa RF Link & Emergency Failsafe**   | Completed   | 2025-08-10 | • Mount SX1276 LoRa FeatherWing modules on SPI bus (MOSI: 18, MISO: 19, SCK: 5, CS: 14, RST: 32, IRQ: 33).<br>• RF Settings: 915 MHz band, Spreading Factor 7 (SF7), 125 kHz bandwidth.<br>• Program bidirectional link with automatic emergency motor shutdown if signal drop exceeds 1500ms.                        |
| **IMU Telemetry & Sensor Suite**        | In progress | 2025-08-30 | • Connect MPU6050 6-axis IMU via I2C (SDA: 23, SCL: 22) and INA219 battery voltage monitor.<br>• Sample sensors at 50 Hz on the ESP32 Feather.<br>• Pack outputs into a compressed 16-byte telemetry frame sent back to ground station over LoRa.                                                                     |
| **Ground Station HUD Controller**       | Not started | 2025-09-20 | • Construct handheld transmitter unit with dual joysticks, ESP32 Feather, LoRa radio, and 3.5" TFT display.<br>• Parse incoming telemetry frames at 10 Hz to display real-time roll, pitch, battery voltage, and RSSI (dBm).<br>• Translate analog joystick values into differential steering commands sent to rover. |

### Exemplar 5: 3D Multiplayer FPS Game Development

| Milestone Title               | Status      | Due Date   | Planned Features of Product                                                                                                                                                                                                                                                             |
| ----------------------------- | ----------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Multiplayer Lobbies**       | Completed   | 2025-07-25 | • Connect via direct IPv4 input (Port 7777), max 8 concurrent players.<br>• Synchronise 3D position ($X, Y, Z$) at 60 Hz network tick rate.<br>• Position/rotation smoothing and dynamic nameplates visible within 50m.                                                                 |
| **Multiplayer Combat**        | Completed   | 2025-07-31 | • Real-time hitscan ballistics with $100\text{ HP}$ base health pool.<br>• **Pistol:** 35 DMG/shot, 1.5 shots/sec, 12-round mag.<br>• **Assault Rifle:** 18 DMG/shot, 10 shots/sec, 30-round mag.<br>• Network health sync instantly updates all connected clients on hit confirmation. |
| **Respawn System**            | Completed   | 2025-08-05 | • Death state triggers instant camera shift to a 5-second spectate countdown timer.<br>• Respawn player at 1 of 4 fixed spawn points.<br>• Grant 2-second invulnerability bubble upon spawning to block spawn camping.                                                                  |
| **MP Player Model & Rigging** | In progress | 2025-08-29 | • Replace temporary floating arm meshes with full 3D humanoid models.<br>• Link 1st-person arms and 3rd-person full body to an animation state machine (Idle, Walk, Sprint, Fire, Reload, Crouch).                                                                                      |
| **Advanced Combat Mechanics** | Not started | 2025-09-15 | • **Combat Knife:** Melee attack (100 DMG for rear backstabs, 40 DMG for front swings, 0.8s attack cooldown).<br>• **Frag Grenades:** Throwable projectile, 3.5s fuse timer, max 100 splash DMG scaling down to 0 at a 3m radius (max loadout: 2 grenades).                             |
| **Advanced Movement Suite**   | Not started | 2025-10-05 | • **Power Slide:** Press crouch while sprinting to execute a 1.5x speed slide decaying over 1.2s (2s cooldown).<br>• **Prone Crawl:** Reduce capsule height by 70%, lower speed by 60%, and shrink hitboxes to crawl through low cover.                                                 |
| **Map Cover Environment**     | Not started | 2025-10-07 | • Add physical cover obstacles across the arena map.<br>• **High Cover:** 1.2m steel crates and concrete pillars blocking line-of-sight.<br>• **Low Cover:** 0.8m terminals and desk barriers for crouching gameplay.<br>• All props feature colliders and bullet occlusion layers.     |

## 6. Pre-Submission Self-Audit Checklist

Before handing in your milestone documentation for ACT BSSS assessment, verify the following:

- [ ] **Confirmed Submission Target:** Have you confirmed your final project submission date with your teacher and worked your milestone due dates backwards?
- [ ] **Updated Status:** Is every milestone marked as `Not started`, `In progress`, or `Completed`?
- [ ] **Hardware Pins & Protocols:** Did you specify exact microcontrollers (ESP32 Feather), GPIO pins, motor drivers, and broker ports (1883/8883)?
- [ ] **Quantifiable Values:** Have you included exact numerical metrics (speeds, voltage, damage, range, timers, refresh rates)?
- [ ] **No Fuzzy Language:** Have you removed vague terms like _"make it work"_, _"move around"_, _"send data"_, or _"add detail"_?