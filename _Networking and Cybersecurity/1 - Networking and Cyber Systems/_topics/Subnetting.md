---
isCurrent: true
needsUpdating: false
---


> [!info] AI was used to plan and create a draft of this item. The draft was then revised without any further AI assistance.


## **Subnetting: Dividing the Digital Neighborhood**

Subnetting takes the concept of network and host sections in IP addresses a step further. It allows you to **subdivide a larger network into smaller, logical subnetworks**, much like dividing a large apartment building into separate floors or wings. Here's how it works:

**Imagine:**

- You have a large office building with hundreds of employees.
- Instead of everyone sharing the same "building address," you want to create separate networks for different departments (e.g., marketing, HR, IT).

**Subnetting lets you achieve this by:**

1. **Borrowing bits:** You take some bits from the **host section** of the IP address and use them to define the subnetwork address. This effectively reduces the number of available host addresses within each subnet.
2. **Subnet mask:** A special 32-bit number (for IPv4) or 128-bit number (for IPv6) acts like a mask. It defines which bits belong to the network, subnet, and host sections. Devices use this mask to understand how to interpret IP addresses and route data correctly.

**Benefits of Subnetting:**

- **Improved security:** Separating departments into subnetworks restricts communication flow and reduces the risk of unauthorised access across the entire network.
- **Enhanced efficiency:** Smaller subnetworks experience less broadcast traffic, leading to better network performance and reduced congestion.
- **Flexible addressing:** You can create subnetworks with the exact number of devices each department needs, avoiding wasted IP addresses.

**Things to Consider:**

- **Planning:** Choosing the right subnet mask and network size requires careful planning based on the number of devices and security requirements.
- **Complexity:** Subnetting can become complex, especially for large networks. You need proper tools and understanding to configure and manage it effectively.

**Analogy:**

Think of subnetting like creating virtual floors within a large building. Each floor has its own set of residents (devices) with controlled access, improving organisation, security, and overall network health.


# Subnet Simulator

https://sites.google.com/ed.act.edu.au/ltcit/network-simulator

# Packet Tracer Tutorial - Home vs. Business Network Segmentation


We will simulate a modern SOHO (Small Office/Home Office) environment using subnetting to separate "Home" devices from "Secure Business" devices, and implement DHCP servers to automate IP assignment.

## 1. The Scenario

A consultant works from home and needs to separate their work infrastructure (Business) from their personal devices (Home). This ensures that unsecured home devices cannot interact with sensitive business data.

- **Subnet A (Business/Work):** `192.168.0.x`
- **Subnet B (Home/Personal):** `192.168.68.x`
- **Infrastructure:** Each subnet has its own dedicated server providing DHCP services.

## 2. Technical Breakdown

| Segment         | Network ID | Subnet Mask | Gateway IP | DHCP Range |
| ------------------- | -------------- | --------------- | -------------- | -------------- |
| **Business Subnet** | `192.168.0.0`  | `255.255.255.0` | `192.168.0.1`  | `.50 - .100`   |
| **Home Network**    | `192.168.68.0` | `255.255.255.0` | `192.168.68.1` | `.50 - .100`   |
| **Internet (ISP)**  | `8.8.8.8`      | `255.255.255.0` | `8.8.8.1`      | Static         |

## 3. Packet Tracer Setup

### Step A: Place the Hardware

1. **Router:** Place a **2911 Router** named `Home-Gateway`.
2. **Switches:** Place two **2960 Switches** named `Home-Switch` and `Business-Switch`.
3. **Servers:**
    - Place one Server on the `Business-Switch` named `Business-Server`.
    - Place one Server on the `Home-Switch` named `Home-Server`.
    - Place a Server named `Web-Server` at the top of the workspace to represent the **Internet**.
4. **End Devices:**
    - **Home:** Place a Laptop and a PC.
    - **Business:** Place a high-end Desktop.

### Step B: Wiring

- **Business Network:**
    - Connect Business devices and `Business-Server` to `Business-Switch`.
    - Connect `Business-Switch` to Router **Gig 0/0**.
- **Home Network:**
    - Connect Home devices and `Home-Server` to `Home-Switch`.
    - Connect `Home-Switch` to Router **Gig 0/1**.
- **Internet:**
    - Connect Router **Gig 0/2** to the `Web-Server`.

## 4. Configuration Steps

### Step 1: Configure the Gateway (Router)

You can configure the router interfaces using either the Graphical User Interface (GUI) or the Command Line Interface (CLI).

#### Option 1: Using the GUI (Config Tab)

1. Click on the `Home-Gateway` router and select the **Config** tab.
2. Under **INTERFACE**, select **GigabitEthernet0/0**:
    - Check the **On** box (Port Status).
    - Enter IP Address: `192.168.0.1`
    - Enter Subnet Mask: `255.255.255.0`
3. Select **GigabitEthernet0/1**:
    - Check the **On** box.
    - Enter IP Address: `192.168.68.1`
    - Enter Subnet Mask: `255.255.255.0`
4. Select **GigabitEthernet0/2**:
    - Check the **On** box.
    - Enter IP Address: `8.8.8.1`
    - Enter Subnet Mask: `255.255.255.0`

#### Option 2: Using the CLI

Click `Home-Gateway` -> **CLI** and enter:

```
Router> enable
Router# configure terminal

# Business Subnet Gateway
Router(config)# interface GigabitEthernet 0/0
Router(config-if)# ip address 192.168.0.1 255.255.255.0
Router(config-if)# no shutdown
Router(config-if)# exit

# Home Subnet Gateway
Router(config)# interface GigabitEthernet 0/1
Router(config-if)# ip address 192.168.68.1 255.255.255.0
Router(config-if)# no shutdown
Router(config-if)# exit

# ISP Connection
Router(config)# interface GigabitEthernet 0/2
Router(config-if)# ip address 8.8.8.1 255.255.255.0
Router(config-if)# no shutdown
```

### Step 2: Configure DHCP Servers

Each server needs a static IP before it can hand out addresses to others.

**A. Business-Server:**
1. **Desktop -> IP Configuration:** Set IP `192.168.0.2`, Mask `255.255.255.0`, Gateway `192.168.0.1`.
2. **Services -> DHCP:**
    - Turn Service **ON**.
    - Default Gateway: `192.168.0.1`
    - Start IP Address: `192.168.0.50`
    - Click **Save**.

**B. Home-Server:**
1. **Desktop -> IP Configuration:** Set IP `192.168.68.2`, Mask `255.255.255.0`, Gateway `192.168.68.1`.
2. **Services -> DHCP:**
    - Turn Service **ON**.
    - Default Gateway: `192.168.68.1`
    - Start IP Address: `192.168.68.50`
    - Click **Save**.

### Step 3: Activate DHCP on End Devices

On every PC and Laptop:
1. Go to **Desktop -> IP Configuration**.
2. Select the **DHCP** radio button.
3. Wait for "DHCP request successful." You should see an IP in the correct range (e.g., `192.168.68.50`).

## 5. Verification & Testing

### The "D.O.R.A" Observation

Switch to **Simulation Mode**.

1. Filter traffic to only show **DHCP**.
2. Go to a new PC and toggle DHCP on.
3. Watch the 4-step process: **D**iscover, **O**ffer, **R**equest, **A**cknowledge.
4. **Note:** Notice that the "Discover" broadcast from the Home PC stays within the Home Switch and never bothers the Business devices.

### Connectivity Check

- Ping from a Home Laptop to the Business Server (`192.168.0.2`).
- Ping from any device to the Internet (`8.8.8.8`).

## 6. Discussion Questions for Students

1. **DHCP Boundaries:** Why doesn't the Home PC get an IP address from the Business DHCP server?
2. **Static vs Dynamic:** Why did we give the Servers static IPs but the Laptops dynamic (DHCP) IPs?
3. **Security:** In this setup, can a device in the Home network ping a device in the Business network? Is this "Secure" yet? What extra device or configuration is needed to block that traffic?