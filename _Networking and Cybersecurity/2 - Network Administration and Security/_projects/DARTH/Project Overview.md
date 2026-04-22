# Database Application for Remote Telemetry Hosting (DARTH)

### Executive Summary

Project **D.A.R.T.H.** is a comprehensive full-stack engineering initiative designed to bridge the gap between physical hardware and modern web-based data management. By integrating low-level **Arduino** hardware with a containerised **PHP**, **Python**, and **MariaDB** backend, the project establishes a robust, bidirectional communication pipeline for real-time data acquisition and remote system control.

### System Architecture Diagram

The following diagram illustrates the interaction between the physical hardware and the dockerised infrastructure:

![[system_architecture.png]]



### Project Objective

The primary goal is to develop a secure, scalable, and portable system for **Remote Telemetry Hosting**. In this ecosystem, remote hardware nodes (Arduinos) collect environmental or system data and "uplink" it to a centralised server. This server manages the data through a dockerised architecture, allowing for seamless deployment, real-time monitoring, and the ability to send remote command execution signals back to the hardware nodes.

### The Tech Stack (The "Sith" Core)

- **Hardware (The Apprentice):** **Adafruit Feather HUZZAH32** microcontrollers utilizing WiFi to communicate across a dedicated **air-gapped WiFi network**. These act as the "boots on the ground", gathering raw sensor telemetry.
- **Containerised Infrastructure:** The entire backend is orchestrated using **Docker**, ensuring a consistent environment across development and production.
    - **The Master (PHP):** A dockerised **PHP** container serving as the web dashboard and command interface.
    - **The Inquisitor (Python Integration Engine):** A single, multi-threaded **Python** container that handles all backend logic, acting as the MQTT subscriber for incoming data and the Binlog monitor for outgoing synchronisation.
    - **The Archive (Database):** A separate, linked **MariaDB** container for persistent, high-performance telemetry storage.
    - **The Broker:** A dockerised **MQTT Broker** (such as Mosquitto) to handle asynchronous messaging between hardware and the backend.
- **The Interface:** A responsive **HTML5/Tailwind CSS** dashboard that allows users to visualise data and transmit "Force commands" (control signals) back to the Arduino.

### System Architecture

1. **Data Acquisition:** The Arduino reads digital or analogue signals from connected sensors.
2. **The Uplink:** The Arduino publishes this data as an MQTT message to a specific topic on the dockerised broker.
3. **Containerised Processing:** The **Docker Network** facilitates secure, private communication between the MQTT broker, the unified Python engine, the PHP engine, and the MariaDB instance.
4. **Data Persistence:** The Python Integration Engine receives the incoming telemetry and commits it directly to the database archive.
5. **State Synchronisation:** The same Python container monitors the MariaDB binary logs. Upon detecting changes to device states or settings in the database (modified via the PHP dashboard), it publishes the updated values back to the MQTT broker to ensure the hardware remains in sync.
6. **Telemetry Feedback Loop:** The Arduino, subscribed to a command topic on the broker, receives updated instructions (e.g. "Switch on LED" or "Adjust sensor threshold") and executes them immediately.

### Cyber & Networking Security Features

To ensure the **D.A.R.T.H.** system remains impenetrable from Rebel interference, the project focuses on:

- **Container Isolation:** Using Docker to isolate the database from the public internet, allowing access only through the internal backend services.
- **Sanitisation:** Strict prevention of SQL injection and Cross-Site Scripting (XSS) within the PHP and Python logic.
- **Security Auditing & Monitoring:** Active monitoring of all system traffic and application logic using **Burp Suite** and other professional cyber security tools to identify and mitigate vulnerabilities.
- **Vulnerability Analysis:** Ongoing assessment of the MQTT broker and web interface to ensure the "Empire's" data remains confidential and integral.

### Expected Outcome

By the end of the project, the team will have a fully functioning, **dockerised Command & Control (C2)** centre. The use of containers ensures that the entire "Empire" can be redeployed on any server in seconds. Users will be able to observe telemetry from a device miles away via a browser, proving that while the hardware may be remote, the "Force" of the data is always with them.