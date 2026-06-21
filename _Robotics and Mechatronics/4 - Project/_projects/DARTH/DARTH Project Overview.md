# Data Acquisition for Real-time Telemetry Handler

### Executive Summary

Project **D.A.R.T.H.** is a specialised robotics and hardware-routing initiative designed to act as a universal telemetry gateway. Built on the powerful **Adafruit Feather RP2040** platform featuring both LoRa and WiFi capabilities, this standalone unit intercepts high-speed serial data from various automated robotic subsystems, packages the payload, and securely transmits it to the central **S.C.A.R.I.F.** (Secure Containerised Archive for Remote Interface Feedback) server.

### System Architecture Diagram

The following diagram illustrates how the DARTH standalone module bridges external robotic systems with the central SCARIF dockerised network:

![[projectArchitectureDARTH.png]]
### Project Objective

The primary objective of Project DARTH is to create a robust, plug-and-play transceiver unit that offloads network communication from primary robotic controllers. By providing standard physical serial interfaces and lightweight software libraries (written in both Arduino C++ and Python), other project groups can instantly gain wireless telemetry capabilities without needing to configure complex network stacks or WiFi credentials on their primary control units.

### The Tech Stack (The DARTH Core)

- **Gateway Hardware:** **Adafruit Feather RP2040** microcontroller equipped with:
    
    - **WiFi Transceiver:** For high-bandwidth, local transmissions within the air-gapped facility.
        
    - **LoRa Radio Module:** For long-range, low-power telemetry transmission in RF-congested or physically shielded environments.
        
    - **Hardware UART (Serial Pins):** Dedicated physical pins for receiving incoming stream data from host controllers.
        
- **Software Libraries (Publishing SDKs):**
    
    - **Arduino C++ Library:** A lightweight, non-blocking library for microcontrollers to package and stream variables over serial.
        
    - **Python Library:** A robust serial-wrapper module for microprocessor-based systems (such as Raspberry Pi) to push structured JSON packets over serial.
        

### System Architecture

1. **Serial Interception:** An external subsystem (running either the DARTH Arduino or Python library) packages its internal state data.
    
2. **Local Transmission:** The subsystem transmits this structured payload over physical TX/RX serial pins to the DARTH hardware unit.
    
3. **Packet Processing:** The Adafruit Feather RP2040 reads the serial buffer, validates the packet structure, and prepares it for wireless transmission.
    
4. **Network Uplink:** Depending on range requirements and environmental constraints, the DARTH module publishes the data to the SCARIF MQTT broker over the air-gapped WiFi network or long-range LoRa link.
    
5. **Broker Relay:** The SCARIF Python Integration Engine receives the relayed message from the broker and commits the state changes to the MariaDB database.
    

### Cyber & Networking Security Features

Because DARTH acts as a physical bridge to the air-gapped network, it incorporates strict perimeter protections:

- **Hardware Isolation:** Isolates the main robotic controller completely from the network, preventing any potential network-based exploitation of primary flight or drive controllers.
    
- **Input Validation:** The RP2040 enforces a strict serial packet schema, immediately discarding malformed serial inputs to prevent buffer overflow attacks or command injection.
    
- **Air-Gap Integrity:** Ensures WiFi credentials and network configurations are stored exclusively on the DARTH module, hidden away from the connected client subsystems.
    
- **Monitoring & Penetration Testing:** The serial interface and wireless endpoints will be rigorously monitored and audited using **Burp Suite** and logic analysers to ensure no unauthorised control signals can bypass the serial gateway.
    

### Expected Outcome

By the end of this project, the team will deliver a fully standalone, physical **DARTH gateway enclosure**, complete with an auto-switching WiFi/LoRa fallback system. Additionally, the team will deliver fully documented, open-source **Arduino and Python client libraries** that allow other engineering teams to integrate real-time SCARIF telemetry logging into their own systems with less than five lines of code.