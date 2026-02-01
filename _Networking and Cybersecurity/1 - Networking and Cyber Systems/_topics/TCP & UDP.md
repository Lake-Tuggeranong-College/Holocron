---
isCurrent: true
needsUpdating: false
---
# Video/s

![](https://www.youtube.com/watch?v=qqRYkcta6IE)

## TCP vs. UDP: A Deep Dive with Examples & Wireshark

This tutorial will break down the fundamental differences between Transmission Control Protocol (TCP) and User Datagram Protocol (UDP), two of the most common protocols used for data transmission over the internet.  We’ll also show you how to use Wireshark, a powerful network packet analyzer, to observe and filter these protocols.

## Understanding the Basics

Both TCP and UDP are transport layer protocols, meaning they sit on top of the Internet Protocol (IP) and handle the delivery of data between applications. However, they approach this task in drastically different ways.

### TCP vs. UDP

| Feature                | TCP (Transmission Control Protocol)                                                                                                                                                                                     | UDP (User Datagram Protocol)                                                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Connection**         | Connection-Oriented. <br>Establishes a connection between the sender and receiver *before* any data is transmitted. This involves a "handshake" process to synchronise sequence numbers and acknowledge the connection. | Connectionless. <br>**Doesn’t** establish a connection before sending data. It simply sends packets (called datagrams) to the destination. |
| **Reliability**        | Reliable.<br>Guarantees that data will be delivered to the destination in the correct order and without errors. It uses mechanisms like acknowledgments, retransmissions, and checksums to ensure reliability.          | Unreliable.<br>Doesn’t guarantee delivery, order, or error-free transmission. Packets can be lost, duplicated, or arrive out of order.     |
| **Data Delivery**      | Guaranteed, Ordered, Error-Free                                                                                                                                                                                         | No guarantees, Out of order possible                                                                                                       |
| **Flow Control**       | Yes<br>TCP manages the rate of data transmission to prevent the receiver from being overwhelmed.                                                                                                                        | No                                                                                                                                         |
| **Congestion Control** | Yes.<br>TCP adjusts the transmission rate based on network congestion to avoid overwhelming the network.                                                                                                                | No                                                                                                                                         |
| **Speed**              | Slower (due to reliability features)                                                                                                                                                                                    | Faster                                                                                                                                     |
| **Overhead**           | Higher                                                                                                                                                                                                                  | Lower                                                                                                                                      |
| **Examples**           | Web Browsing, Email, File Transfer                                                                                                                                                                                      | Streaming, Online Gaming, DNS, VoIP                                                                                                        |


## Detailed Examples

* **Scenario 1: Downloading a File (TCP)**

   1. **Initiation:** Your computer (the client) initiates a TCP connection to the server hosting the file.
   2. **Handshake:** A three-way handshake establishes the connection.
   3. **Data Transfer:** The server sends the file data to the client in segments.
   4. **Acknowledgement:** The client acknowledges receipt of each segment.
   5. **Error Correction:** If a segment is lost or corrupted, the client requests retransmission.
   6. **Completion:** Once the entire file is received and verified, the connection is closed.

   *Why TCP is used:*  Data integrity is crucial for file downloads. You wouldn't want a partially corrupted file.

* **Scenario 2: Streaming Video (UDP)**

   1. **Packet Sending:** The video server sends video data in UDP datagrams.
   2. **No Guarantee:**  If a datagram is lost, the receiver simply requests a new one.
   3. **Real-time Adaptation:** The receiver adapts to the loss of packets, often by skipping frames or interpolating to maintain a smooth stream.

   *Why UDP is used:*  Real-time video streaming prioritizes speed over perfect delivery.  A few lost frames are tolerable to maintain a continuous stream.



## Using Wireshark to Filter by TCP and UDP

Wireshark is a network packet analyzer that allows you to capture and inspect network traffic. Here’s how to filter for TCP and UDP packets:

* **Start Wireshark:** Launch the application.
* **Select Interface:** Choose the network interface you want to monitor (e.g., Ethernet, Wi-Fi).
* **Start Capture:** Click the "Start Capture" button.
* **Filter by TCP:**
    * In the filter bar (at the top), type `tcp` and press Enter.  You'll see only TCP packets in the main window.
    * You can also filter by specific ports: `tcp port 80` (HTTP), `tcp port 443` (HTTPS), `tcp port 22` (SSH).
* **Filter by UDP:**
    * In the filter bar, type `udp` and press Enter. You'll see only UDP packets.
    * You can also filter by specific ports: `udp port 53` (DNS), `udp port 19` (TFTP).
* **Stop Capture:** Click the "Stop Capture" button.
* **Analyze Results:** Examine the captured packets to understand the protocols being used.

**Wireshark Filter Examples:**

| Filter           | Description                               |
|------------------|-------------------------------------------|
| `tcp`            | All TCP packets                           |
| `udp`            | All UDP packets                           |
| `tcp port 80`    | All TCP packets using port 80 (HTTP)       |
| `udp port 53`    | All UDP packets using port 53 (DNS)        |
| `tcp.flags.syn == 1` | TCP SYN packets (connection initiation) |
| `tcp.analysis.retransmission == 1` | TCP retransmitted packets           |



## Key Differences Summarised

| Feature           | TCP                     | UDP                    |
|--------------------|--------------------------|------------------------|
| Connection         | Connection-Oriented       | Connectionless         |
| Reliability        | Reliable (guaranteed delivery)| Unreliable (no guarantee)|
| Ordering           | Ordered                  | Unordered              |
| Speed              | Slower                   | Faster                  |
| Overhead           | Higher                   | Lower                   |
| Common Uses        | Web browsing, email, file transfer | Streaming, gaming, DNS |



## Resources:

* **Wireshark Documentation:** [https://www.wireshark.org/docs/](https://www.wireshark.org/docs/)
* **TCP/UDP Explained:** [https://www.geeksforgeeks.org/tcp-vs-udp/](https://www.geeksforgeeks.org/tcp-vs-udp/)

---


> [!important] AI was used to plan and create a draft of this item. The draft was then revised without any further AI assistance.