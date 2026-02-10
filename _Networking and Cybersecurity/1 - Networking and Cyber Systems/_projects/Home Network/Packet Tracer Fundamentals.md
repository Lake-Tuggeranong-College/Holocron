---
isCurrent: true
needsUpdating: false
softwareVersion:
  - Packet Tracer 8.2.2
  - Packet Tracer 9.0
---
# Objective

The goal of this tutorial is to build a working simulation of a network in Packet Tracer. 
- The network will include a small 'home' network that is connected to the internet. 
- Devices on the home network will be able to access a website running on the server.

# Network Devices

Create the following network:
![[packetTracerFundamentals.png]]

The devices being used are:
- PC
- Laptop
- HomeRouter
- Cable Modem PT
- Cloud-PT
- Server-PT

Connect all the network devices with appropriate network cables as shown above.

> [!note] When connecting the PC to the Wireless Router, you will need to use Copper Straight through cables (not the lightning bolt) and choose Ethernet ports on both ends.

# Configure Laptop

When you first add the laptop, you will not have a connection (as is shown above) that's because by default the laptop does not have a wireless card included.

To add the wireless card, 
1. Click on the laptop to configure it. 
2. If not already, change to the Physical tab.
3. Turn the laptop off with the power button.
4. Remove the network card.
5. Drag WPC200N to the empty slot
6. Turn the laptop back on.

![[laptopConfigWirelessCard.gif]]

# Configure the PC

Click on `PC0` and then the `config` tab. Select the `FastEthernet0` interface.

Select DHCP. After a short moment, the system should update with an IP address from the DHCP server.

Make a note of the IP address received.

![[pcIPConfig.png]]

> [!tip] The specific IP address received may not be exactly the same as shown. As long as the first three octets in the IP address are as shown - `192.168.0.x`


# Check connection

Close the PC0 window and click on Laptop0. 
Click the `Desktop` tab, then `Command Prompt`.

![[laptopCommandPromptFind.png]]


Enter the following command:

`ping <IP Address of PC0>`

For example:

`ping 192.168.0.102`

![[laptopPingPC.png]]


If the output received is similar to what is shown, then your home network is working correctly.

> [!question] If you receive `Request timed out`, then there is a problem somewhere with the connection. Confirm the IP address is correct.

# Server Configuration

Before any communication with the server can be achieved, the DHCP server must be enabled and configured.

Click on Server0. On the `Services` tab, click `DHCP` and select the **On** option.

Then enter the IP address `209.165.200.225` for both the Default Gateway and the DNS Server. 

Confirm the **Start IP** IP address ends in `226`.

![[serverDHCPConfiguration.png]]

Press **Save**.

# Router Configuration

Open the Wireless Router, click on the GUI tab, then Status.
Press the **IP Address Renew**.

![[routerIPRenew.png]]

This should receive an IP address from the server's DHCP service.

# Test full network connection

Now that the Router has an external IP address, your laptop and PC can communicate with the server. Confirm this is the case by choosing one of the devices and entering:

`ping 209.165.200.225`

![[laptopPingServer.png]]

---
