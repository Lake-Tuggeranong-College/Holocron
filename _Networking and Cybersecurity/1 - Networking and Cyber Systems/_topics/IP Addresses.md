---
isCurrent: true
---
Network and Host IDs
![[ipAddress.png]]

![[ipAddressClasses.png]]
# Understanding IP Addresses and Subnet Masks

## Objective

By the end of this lesson, students will be able to:

- Define the structure of an IPv4 address.
- Distinguish between the **Network ID** and **Host ID**.
- Categorize addresses into **Classes A, B, C, D, and E**.
- Explain the difference between **Public** and **Private** IP addresses.
- Relate subnet masks to network sizing and device capacity.

## 1. The Structure of an IP Address

An IPv4 address is a string of **32 bits**, visually represented as four decimal numbers (octets) separated by dots.

### The Octet System

In binary, each bit has a value based on its position, represented by powers of 2:

| Power of 2 | 2$^7$ | 2$^6$ | 2$^5$ | 2$^4$ | 2$^3$ | 2$^2$ | 2$^1$ | 2$^1$ |
| ---------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| Value      | 128   | 64    | 32    | 16    | 8     | 4     | 2     | 1     |

**Example Conversion: 192** 

| Place Value    |  128  |  64   |  32   |  16   |   8   |   4   |   2   |   1   |
| :------------- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Binary Bit** | **1** | **1** | **0** | **0** | **0** | **0** | **0** | **0** |

## 2. IP Address Classes

Historically, IP addresses were divided into five classes to help manage the size of different networks. The first few bits of the first octet determine the class.

| **Class** | **First Octet Range** | **Default Subnet Mask** | **Network/Host Split** | **Purpose**                       |
| --------- | --------------------- | ----------------------- | ---------------------- | --------------------------------- |
| **A**     | 1 – 126               | 255.0.0.0               | N.H.H.H                | Massive networks (16M+ hosts)     |
| **B**     | 128 – 191             | 255.255.0.0             | N.N.H.H                | Medium/Large networks (65k hosts) |
| **C**     | 192 – 223             | 255.255.255.0           | N.N.N.H                | Small networks (254 hosts)        |
| **D**     | 224 – 239             | N/A                     | Multicast              | Reserved for Multicasting         |
| **E**     | 240 – 255             | N/A                     | Experimental           | Reserved for research/future use  |

_Note: 127.x.x.x is reserved for **Loopback** (testing your own machine)._

## 3. Network ID vs. Host ID

The **Subnet Mask** defines the boundary between the Network and the Host.

- **Network ID:** The portion of the address that identifies the specific network.
- **Host ID:** The portion that identifies the specific device on that network.

### How it works (Binary Visualization)

Let's look at the IP `192.168.10.15` (Class C) with a Subnet Mask of `255.255.255.0`.

**Bitwise Animation:**

| **Part**            | **Octet 1**      | **Octet 2** | **Octet 3** | **Octet 4** |
| ------------------- | ---------------- | ----------- | ----------- | ----------- |
| **IP (Decimal)**    | 192              | 168         | 10          | 15          |
| **IP (Binary)**     | `11000000`       | `10101000`  | `00001010`  | `00001111`  |
| **Mask (Binary)**   | `11111111`       | `11111111`  | `11111111`  | `00000000`  |
| **Result (Net ID)** | **192.168.10.0** |             |             |             |

## 4. Public vs. Private Addresses

Not all IP addresses are the same. Some are reachable via the global internet, while others are restricted to local networks.

### Public IP Addresses

- Assigned by ISPs (Internet Service Providers).
- Globally unique; no two devices on the internet can have the same public IP.
- Required to access the World Wide Web directly.

### Private IP Addresses

- Used within a local network (Home, School, Office).
- Not routable on the global internet.
- **Private Ranges (RFC 1918):**
    - **Class A:** 10.0.0.0 – 10.255.255.255
    - **Class B:** 172.16.0.0 – 172.31.255.255
    - **Class C:** 192.168.0.0 – 192.168.255.255

> **Why use Private IPs?** We have a limited supply of IPv4 addresses. Private ranges allow thousands of devices to share a single Public IP through a process called **NAT (Network Address Translation)**.

## Summary

- **Classes A, B, C:** Define network size based on the first octet.
- **Network ID:** The "Street Address" of the network.
- **Host ID:** The "House Number" of the device.
- **Public IP:** Your identity on the global internet.
- **Private IP:** Your identity inside your local LAN (Local Area Network).

## Checklist for Understanding

- [ ] Can I identify a Class B address just by looking at the first octet?
- [ ] Do I know the three main Private IP ranges?
- [ ] Can I explain why the Host ID cannot be all binary 1s?
- [ ] Do I understand that a Class A network has fewer networks but more hosts per network?

