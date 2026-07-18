---
theme: simple
highlightTheme: zenburn
css: css/holocronSlides.css
isCurrent: true
needsUpdating: false
---
# **Secure IoT Network**


## **Project Architecture Overview**

* ESP32 edge sensors collect telemetry.  
* Centralised database stores incoming data.  
* Local PHP container renders dashboards.  
* Three-tier architecture bridges network layers.

---
## **Threat Modeling Shared Databases**

* Multiple local clients connect remotely.  
* Database credentials traverse the network.  
* Unsecured queries expose sensitive structures.  
* Vulnerabilities threaten database operational integrity.
---
## **Intercepting Network Database Traffic**

* Wireshark intercepts active local interfaces.  
* Switched networks isolate peer connections.  
* Arp spoofing bypasses default isolation.  
* Local hosts see all departures.
---
## **Plaintext Vulnerabilities Exposed**

* Default database connections transmit cleartext.  
* Target database schemas are mapped.  
* SQL commands sent in UTF-8.  
* Raw queries reveal customer databases.
---
## **Phase 1: Analysis & Design**

* Fork and clone template repository.  
* Map physical and logical topologies.  
* Perform threat modeling using STRIDE.  
* Submit portfolio design proposal milestone.
---
## **Phase 2: Baseline Pipeline**

* Connect microcontrollers to Wi-Fi.  
* Spin up local PHP containers.  
* Transmit telemetry via HTTP MQTT.  
* Establish remote SQL database connections.
---
## **Phase 3: Security Hardening**

* Isolate database using network segmentation.  
* Implement payload encryption and verification.  
* Test network security with Wireshark.  
* Apply least privilege access policies.
---
## **Phase 4: Expo & Defense**

* Prepare live dashboard visual assets.  
* Present system design at Expo.  
* Submit repository final snapshots portfolio.  
* Defend architecture in technical vivas.
---
## **Core Learning Objectives**

* Master containerised host system management.  
* Build functional secure IoT telemetry.  
* Analyse live network data flows.  
* Harden distributed production architectures.

---

# Questions?

If you have any questions, please ask!

![[contactDetails.png]]