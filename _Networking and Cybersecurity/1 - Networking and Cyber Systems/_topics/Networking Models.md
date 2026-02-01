---
isCurrent: true
needsUpdating: false
---
# Open Systems Interconnection (OSI) Model
## Video

![https://youtu.be/0y6FtKsg6J4?si=kLRTPD3CrMlT0ulG](https://youtu.be/0y6FtKsg6J4?si=kLRTPD3CrMlT0ulG)

## Layers

The OSI model is a conceptual framework that describes how network communication occurs. It is a seven-layer model, with each layer providing a specific set of functions. The layers are:

1. **Physical Layer:** Transmits raw data bits over a physical medium (e.g., copper wire, fiber optic cable).
2. **Data Link Layer:** Encapsulates data into frames and provides error control.
3. **Network Layer:** Routes data packets between different networks.
4. **Transport Layer:** Ensures reliable data delivery between end-to-end hosts.
5. **Session Layer:** Establishes, manages, and terminates sessions between applications.
6. **Presentation Layer:** Translates data between different formats and encodings.
7. **Application Layer:** Provides application-specific services (e.g., file transfer, email, web browsing).

### Examples of Each Layer

- **Physical Layer:** Ethernet, Wi-Fi, Bluetooth
- **Data Link Layer:** MAC addresses, Ethernet frames
- **Network Layer:** IP addresses, routing protocols
- **Transport Layer:** TCP (Transmission Control Protocol), UDP (User Datagram Protocol)
- **Session Layer:** HTTP (Hypertext Transfer Protocol), FTP (File Transfer Protocol)
- **Presentation Layer:** JSON (JavaScript Object Notation), XML (Extensible Markup Language)
- **Application Layer:** Web browsers, email clients, file sharing applications

### Further Information

- [OSI Model Explained](https://www.cisco.com/c/en/us/support/docs/ip/network-address-translation-nat/13781-32.html#anc1)
- [OSI Model Layers and Protocols](https://www.geeksforgeeks.org/osi-model-layers-and-protocols/)
- [OSI Model Tutorial](https://www.tutorialspoint.com/data_communication/osi_model.htm)

## How the OSI Model Works

Data is passed down the OSI stack from the application layer to the physical layer. At each layer, data is encapsulated with additional information (e.g., headers, trailers). When data reaches the physical layer, it is transmitted over the network.

At the receiving end, data is passed up the OSI stack from the physical layer to the application layer. At each layer, the additional information is removed, and the data is processed by the appropriate application.

## Benefits of the OSI Model

- Provides a common framework for understanding network communication.
- Helps in troubleshooting network issues by isolating problems to specific layers.
- Facilitates the development of interoperable networking devices and protocols.

## Troubleshooting Each Layer of the OSI Model

**Physical Layer:**

- **Noise:** Interference on the physical medium can corrupt data.
- **Attenuation:** Signal strength decreases over distance, which can lead to data loss.
- **Hardware failures:** Faulty network cards, cables, or other hardware can disrupt communication.

**Data Link Layer:**

- **Frame errors:** Data corruption can occur during frame transmission.
- **Collisions:** Multiple devices attempting to transmit simultaneously on a shared medium can cause collisions.
- **MAC address conflicts:** Two devices with the same MAC address can cause network confusion.

**Network Layer:**

- **Routing loops:** Incorrect routing information can cause data to loop indefinitely.
- **Congestion:** Excessive traffic can overwhelm network devices, leading to delays and packet loss.
- **IP address conflicts:** Multiple devices with the same IP address can cause network conflicts.

**Transport Layer:**

- **Connection failures:** TCP connections can fail due to timeouts, resets, or other errors.
- **Packet loss:** Data packets can be lost due to network congestion or other factors.
- **Port conflicts:** Two applications attempting to use the same port can cause conflicts.

**Session Layer:**

- **Session establishment failures:** Sessions may fail to be established due to incorrect session parameters or other errors.
- **Session termination failures:** Sessions may not be terminated properly, leaving resources tied up.
- **Session hijacking:** Attackers may gain control of existing sessions.

**Presentation Layer:**

- **Data format errors:** Data may be corrupted or misinterpreted due to incompatible data formats.
- **Encryption failures:** Encryption algorithms may fail or be compromised, exposing sensitive data.
- **Compression errors:** Data compression algorithms may fail or introduce errors.

**Application Layer:**

- **Application crashes:** Applications may crash or malfunction, disrupting communication.
- **Protocol errors:** Application protocols may contain errors or be incompatible, causing communication failures.
- **Security vulnerabilities:** Applications may contain security vulnerabilities that can be exploited by attackers.

**Troubleshooting OSI Model Problems**

To troubleshoot problems at specific OSI layers, you can use tools such as:

- **Ping:** Tests connectivity at the Network Layer (ICMP).
- **Traceroute:** Traces the path of data packets across the network (Network Layer).
- **Wireshark:** Captures and analyses network traffic at all layers.
- **Network monitoring tools:** Monitor network performance and identify potential issues.

## Postal Service Analogy

Okay, let's use the postal service as an analogy to illustrate the OSI model.  Imagine sending a letter from your house to your friend's house.

**1. Physical Layer:** This is the physical delivery of the letter. It's the actual *movement* of the letter.
   * **Analogy:** The truck, the postal worker, the road, and the physical mailbag are all part of the Physical Layer. It's the raw, tangible transport of the letter.

**2. Data Link Layer:** This layer is about getting the letter to the correct local post office. It's about the immediate delivery within a local area.
   * **Analogy:** The local post office sorting the letter by address, and the mail carrier delivering it to the specific street.  The address label is like a frame containing the data.

**3. Network Layer:** This layer is about routing the letter across different postal regions. It’s about getting the letter to the correct central sorting facility.
   * **Analogy:** The regional postal sorting center that directs the letter to the destination state based on the address.  The postal codes are like IP addresses, directing the letter to the correct area.

**4. Transport Layer:** This layer ensures the letter arrives complete and in the right order. It handles error checking and reassembly if needed.
   * **Analogy:** The tracking number on the envelope.  It allows the postal service to confirm the letter was delivered and to re-route if necessary.  It also ensures all the pages of a multi-page letter arrive in the correct order.

**5. Session Layer:** This layer manages the communication between you and the recipient. It establishes and terminates the "conversation" of sending and receiving.
   * **Analogy:**  The postal service’s system for handling returned mail or forwarding addresses.  It manages the ongoing process of sending and receiving.

**6. Presentation Layer:** This layer ensures the letter is in a format the recipient can understand. It handles encoding and decoding of the letter.
   * **Analogy:**  The letter itself – the language, the formatting, the content. It’s the actual data being conveyed.  If you wrote the letter in French, this layer would handle the translation to English for the recipient.

**7. Application Layer:** This is the highest layer – it’s *you* writing the letter and *your friend* receiving it. It’s the application that initiated the communication.
   * **Analogy:** You writing the letter and your friend reading it.  It's the purpose of the communication – to send a message.


---

## Wireshark: Unpacking Network Communication

**What is Wireshark?**

Wireshark is a powerful, free, and open-source network packet analyser. It lets you capture and examine network traffic in real-time, giving you a detailed look at how data is transmitted across a network. Think of it as a microscope for your network.

**Why Use Wireshark?**

* **Visualise the OSI Model:**  You can see how data is encapsulated at each layer of the OSI model as it travels across the network.
* **Troubleshooting:** Identify network problems by examining packet loss, retransmissions, and other anomalies.
* **Learning:** Understand how protocols work by observing their behavior.

**Getting Started with Wireshark**

1. **Download and Install:** Download Wireshark from [https://www.wireshark.org/](https://www.wireshark.org/) and install it on your computer.
2. **Choose an Interface:** When Wireshark starts, it will list available network interfaces (e.g., Ethernet, Wi-Fi). Select the interface you want to monitor.  Typically, your primary network connection will be the one you want to analyse.
3. **Start Capturing:** Click the "Start" button (the blue shark fin icon) to begin capturing network traffic.

**Capturing a Simple HTTP Request**

Let's capture a simple HTTP request to Google.

1. **Open a Web Browser:** Open your web browser and navigate to [https://www.google.com](https://www.google.com).
2. **Start Wireshark:** Make sure Wireshark is running and capturing traffic.
3. **Observe the Capture:**  You'll see a lot of packets appearing in the Wireshark window.  Look for packets with the following characteristics:
   * **Protocol:**  HTTP
   * **Source:** Your computer's IP address
   * **Destination:** Google's IP address (you can find this by searching "Google IP address" online)
   * **Length:**  These packets will be relatively small, containing the HTTP request.

> [!tip] To filter the results by destination (www.google.com), enter `ip.dst == 8.8.8.8` into the Display Filter field.

**Analysing the Packets – The OSI Model in Action**

Now, let's break down what you're seeing and relate it to the OSI model:

* **Layer 7 (Application Layer):** This is the HTTP request itself – the text you typed into the browser.  Wireshark shows you the data being exchanged at this level.
* **Layer 6 (Presentation Layer):**  This layer handles data formatting and encryption (if used). You might see data encoded in formats like Base64.
* **Layer 5 (Session Layer):** This layer manages the connection between your browser and Google's server.
* **Layer 4 (Transport Layer):**  You’ll see TCP or UDP packets. TCP provides reliable, connection-oriented communication, while UDP is faster but less reliable.  The Transport Layer adds port numbers to identify the application.
* **Layer 3 (Network Layer):**  This is where IP addresses are used to route the packets across the internet. You'll see IP packets with source and destination addresses.
* **Layer 2 (Data Link Layer):**  This layer uses MAC addresses to identify devices on the local network. You'll see Ethernet frames containing MAC addresses.
* **Layer 1 (Physical Layer):**  This layer deals with the physical transmission of bits over the network cable or wireless connection.

**Encapsulation – Adding Layers**

Notice how each packet has a header.  This is *encapsulation*.  Each layer adds its own header to the data from the layer below it.  This process continues all the way down to the physical layer.

* **Example:**  A TCP packet contains a UDP packet, which contains an IP packet, which contains a MAC packet.  Each layer adds its own information, creating a nested structure.

**The Postal Service Analogy Revisited**

Let's revisit the postal service analogy:

* **Wireshark:** The postal worker sorting mail.
* **Packets:** Individual letters.
* **Headers:** The address label and tracking number.
* **Encapsulation:**  Each postal worker adding information to the letter as it moves through the system.

**Tips for Using Wireshark**

* **Filters:** Use filters to narrow down the captured traffic.  For example:
    * `http`:  Show only HTTP traffic.
    * `ip.addr == 192.168.1.1`: Show traffic to or from a specific IP address.
* **Display Filters:**  Wireshark has powerful display filters that let you filter packets based on various criteria.
* **Follow TCP Stream:**  This option allows you to see the entire conversation between two hosts, from the beginning to the end.


# TCP Model

## Understanding Network Communication: The TCP Model

## What is the TCP Model?

The TCP model is a simplified version of the more complex OSI model. It focuses specifically on how applications communicate over a network, particularly the internet. Instead of seven layers, it has just four, making it easier to grasp the core concepts.

## The Four Layers of TCP:

1. **Application Layer:** This is the layer you interact with directly. It provides the interface for applications like web browsers, email clients, and file transfer programs. *Think of it as the user-facing part of the communication.*
   * **Examples:** HTTP, FTP, SMTP, DNS
2. **Transport Layer:** This layer is responsible for reliable data delivery between applications. It uses a protocol called TCP (Transmission Control Protocol) to ensure that data arrives in the correct order and without errors. It also manages the flow of data.
   * **Key Protocol:** TCP – guarantees reliable, ordered delivery.  It also uses ports to identify specific applications.
3. **Network Layer:** This layer handles the routing of data packets across networks. It uses IP addresses to identify devices and determine the best path for data to travel.
   * **Key Protocol:** IP (Internet Protocol) – responsible for addressing and routing.
4. **Link Layer:** This layer handles the physical transmission of data over the network medium (e.g., Ethernet cable, Wi-Fi). It deals with hardware addressing (MAC addresses) and error detection at the physical level.

## The TCP Model in Action: The Web Browser Example

Let’s say you’re browsing a website:

1. **Application Layer:** Your web browser (using HTTP) sends a request to the web server.
2. **Transport Layer:** TCP ensures that the request is broken down into packets, numbered, and sent reliably to the server.
3. **Network Layer:** IP addresses are used to route the packets across the internet to the web server.
4. **Link Layer:** The packets are transmitted over the physical network connection (e.g., Ethernet cable or Wi-Fi).

The web server then repeats this process to send the website’s content back to your browser.

**Why is the TCP Model Important?**

* **Simplicity:** It’s easier to understand than the OSI model.
* **Practicality:** It’s the model used in most modern network applications.
* **Focus on Communication:** It emphasizes the core goal of network communication – getting data from one application to another reliably.

**Resources for Further Learning:**

* [https://www.geeksforgeeks.org/tcp-vs-osi-model/](https://www.geeksforgeeks.org/tcp-vs-osi-model/)
* [https://www.tutorialspoint.com/tcp_ip/index.htm](https://www.tutorialspoint.com/tcp_ip/index.htm)


# TCP vs OSI model

![[OSIvsTCP.png]]


**TCP vs. OSI: A Comparison**

| Feature    | TCP Model                 | OSI Model                           |
| ---------- | ------------------------- | ----------------------------------- |
| Layers     | 4                         | 7                                   |
| Focus      | Application Communication | Comprehensive Network Communication |
| Complexity | Simpler                   | More Detailed                       |

---

> [!important] AI was used to plan and create a draft of this item. The draft was then revised without any further AI assistance.