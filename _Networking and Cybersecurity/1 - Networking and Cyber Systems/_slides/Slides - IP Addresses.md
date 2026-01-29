---
theme: simple
highlightTheme: zenburn
css: css/holocronSlides.css
isCurrent: true
---
# Internet Protocol (IP) 

The Internet Protocol (IP) address is a unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. Think of it like a postal address for your device, allowing data to be sent to the correct location. Without IP addresses, devices wouldn't be able to find each other and exchange information.

---

# Types of IP Addresses

Here's a summary of the information in dot points:

*   **IPv4:**
    *   32-bit address format.
    *   Represented in dotted decimal notation (e.g., 192.168.1.1).
*   **IPv6:**
    *   128-bit address format.
    *   Represented in hexadecimal notation (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).
*   **Purpose of IPv6:** Developed to solve the problem of IPv4 address exhaustion.

note:   
IPv4 is the older, more widely deployed standard.
*   IPv6 is the newer standard, designed to provide a vastly larger address space.
*   Understanding both is crucial for network troubleshooting and design.

---

## Global IPv4 Address Usage: A Snapshot (2024)


**Estimated IPv4 Address Allocation & Usage (as of late 2023/early 2024):**

| Category                   | Estimated Number of Addresses | Percentage of Total | Primary Users                                                             |
| -------------------------- | ----------------------------- | ------------------- | ------------------------------------------------------------------------- |
| **RIR Assignments**        | ~ 4.5 Billion                 | 35%                 | Internet Service Providers (ISPs), Large Enterprises, Government Agencies |
| **Private Networks**       | ~ 2.2 Billion                 | 16%                 | Home Networks, Small Businesses, Internal Corporate Networks              |
| **Reserved/Unallocated**   | ~ 1.8 Billion                 | 13%                 | Future Use,  Security,  Transition Mechanisms                             |
| **Dual Stack (IPv4/IPv6)** | ~ 6.0 Billion                 | 44%                 | A mix of legacy and modern systems.                                       |

--


**Key Observations:**

*   **RIR Dominance:**  The vast majority of IPv4 addresses are managed by the Regional Internet Registries.
*   **Private Network Growth:**  Private network usage continues to expand, driven by the proliferation of IoT devices and remote work.
*   **Dual Stack Remains Prevalent:**  Despite the push for IPv6, IPv4 remains the dominant protocol, with most systems running both versions.

note:
**Source Data & References:**

*   **IANA (Internet Assigned Numbers Authority):** [https://www.iana.org/ipv6/ipv4-address-space](https://www.iana.org/ipv6/ipv4-address-space) – This is the primary source for IPv4 address allocation statistics.  IANA tracks the number of addresses assigned by Regional Internet Registries (RIRs).
*   **RIR Reports:**  The five Regional Internet Registries (RIRs) – ARIN, RIPE NCC, APNIC, LACNIC, and AfriNIC – publish regular reports detailing their address allocations.  These reports are crucial for understanding regional usage patterns.  (Example: [https://www.arin.net/stats/](https://www.arin.net/stats/))
*   **Cloudflare’s State of the Internet Report:** [https://stateoftheinternet.report/](https://stateoftheinternet.report/) – Cloudflare’s annual report provides insights into internet traffic and IPv4/IPv6 trends.  While not a precise allocation count, it highlights the continued reliance on IPv4.
*   **Radware’s IPv4 Address Report:** [https://www.radware.com/blog/ipv4-address-report-2023](https://www.radware.com/blog/ipv4-address-report-2023) - This report provides a good overview of IPv4 address usage.



---


# IP Address Classes (IPv4)

Historically, IPv4 addresses were divided into classes (A, B, and C) based on their network and host portions. While less commonly used now due to CIDR (Classless Inter-Domain Routing), it’s important to recognise their legacy:

*   **Class A:** Largest network address range, typically used for large organisations. (e.g., 10.0.0.0 – 10.255.255.255)
*   **Class B:** Medium network address range, often used for universities and large businesses. (e.g., 172.16.0.0 – 172.31.255.255)
*   **Class C:** Smallest network address range, commonly used for small businesses and home networks. (e.g., 192.168.0.0 – 192.168.255.255)

---

# IP Address Allocation

IP addresses are allocated through various methods:

*   **Public IP Addresses:** Assigned to devices that need to be accessible from the internet (e.g., web servers, email servers). These are globally unique.
*   **Private IP Addresses:** Used within private networks (e.g., your home network) and are not routable on the public internet. Common ranges include 192.168.x.x and 10.x.x.x.
*   **Dynamic IP Addresses:** Assigned automatically by a DHCP (Dynamic Host Configuration Protocol) server.
*   **Static IP Addresses:** Manually configured and remain constant.

---



---

# IP Address Resolution

**Bullet Points:**

*   **What is IP Address Resolution?** – Translating a human-readable domain name (like google.com) into a numerical IP address.
*   **Why is it Important?** – Without it, we couldn’t access websites or online services using their names!
*   **The Key Player: DNS** – The Domain Name System is the system responsible for this translation.


note:

DNS
When you type ‘google.com’ into your browser, your computer doesn’t directly know Google’s IP address. Instead, it asks a DNS server, which then looks up the corresponding IP address and provides it to your browser.  We’ll delve deeper into how DNS works later.”


---

# Troubleshooting IP Addresses

Common issues related to IP addresses include:

*   **No Internet Connection:**  Often caused by a misconfigured IP address, DNS issues, or a problem with the network connection itself.
*   **IP Address Conflict:** Two devices using the same IP address can cause network problems.
*   **Incorrect Gateway:** The gateway is the device that forwards traffic between your network and the internet.  An incorrect gateway setting will prevent internet access.

note: 
Tools like `ping`, `tracert` (Windows) or `traceroute` (macOS/Linux) are invaluable for troubleshooting IP address-related problems.
*   Understanding network configuration is fundamental to resolving these issues.

---

# Questions?

If you have any questions, please ask!

![[contactDetails.png]]
