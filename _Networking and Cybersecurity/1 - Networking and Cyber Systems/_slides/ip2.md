# IPv4 Addressing (Cont.)

# Unit 1: Networking and Cyber Security
2022 Semester 1

# Network, Host, and Broadcast Addresses

Within each network are  __three __ types of IP addresses:

Network address

Host addresses

Broadcast address

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_0.png)

Within each network are  __three __ types of IP addresses:

Network address

Host addresses

Broadcast address

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_1.png)

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_2.png)

# Network address

__A network address is an address that __  __represents a specific network__  __\. A device belongs to this network if it meets three criteria:__

It has the  __same subnet mask__  as the network address\.

It has the same network bits as the network address\, as indicated by the subnet mask\.

It is located on the same broadcast domain as other hosts with the same network address\.

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_3.png)

# Host addresses

Host addresses are addresses that can be assigned to a device such as a host computer\, laptop\, smart phone\, web camera\, printer\, router\, etc\.

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_4.png)

# Host addresses (cont.)

__First usable host address__

This first host within a network has all 0 bits with the last \(right\-most\) bit as a 1 bit\. In this example it is  _192\.168\.10\._  <span style="color:#ff0000"> _1 _ </span>  _/24\._

__Last usable host address __

This last host within a network has all 1 bits with the last \(right\-most\) bit as a 0 bit\. In this example it is  _192\.168\.10\._  <span style="color:#ff0000"> _254 _ </span>  _/24\._

Any addresses between and including\,  __192\.168\.10\.__  <span style="color:#ff0000"> __1__ </span>  __/24__  through  __92\.168\.10\.__  <span style="color:#ff0000"> __254__ </span>  __/24__  can be assigned to a device on the network\.

# Broadcast address

A broadcast address is an address that is used when it is required to reach all devices on the IPv4 network\. The network broadcast address has all 1 bits in the host portion\, as determined by the subnet mask\. In this example\, the network address is _ _  _192\.168\.10\._  <span style="color:#ff0000"> _255_ </span>  _ /_  _24_ \. A broadcast address cannot be assigned to a device\.

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_5.png)

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_6.png)

# Q: Host-A has the IPv4 address and subnet mask 10.5.4.100  and 255.255.255.0. 

What is the network address of Host-A?

What is the reserved broadcast address in the network?

# Q: Host-A has the IPv4 address and subnet mask 10.5.4.100  and 255.255.255.0. 

What is the network address of Host-A? 10.5.4.0
What is the first usable host address in the network?
10.5.4.1
What is the last usable host address in the network?
10.5.4.254
What is the reserved broadcast address in the network? 10.5.4.255

# Q: Host-A has the IPv4 address and subnet mask  192.168.1.50  and 255.255.255.0. 

What is the network address of Host-A?
What is the first usable host address in the network?
What is the last usable host address in the network?
What is the reserved broadcast address in the network?

# Q: Host-A has the IPv4 address and subnet mask  192.168.1.50  and 255.255.255.0. 

What is the network address of Host-A?
192.168.1.0
What is the first usable host address in the network?
192.168.1.1
What is the last usable host address in the network?
192.168.1.254
What is the reserved broadcast address in the network? 192.168.1.255

# Q: Host-A has the IPv4 address and subnet mask  172.16.4.100  and 255.255.0.0. 

What is the network address of Host-A?
What is the first usable host address in the network?
What is the last usable host address in the network?
What is the reserved broadcast address in the network?

# Q: Host-A has the IPv4 address and subnet mask  172.16.4.100  and 255.255.0.0. 

What is the network address of Host-A?
172.16.0.0
What is the first usable host address in the network?
172.16.0.1
What is the last usable host address in the network?
172.16.255.254
What is the reserved broadcast address in the network? 172.16.255.255

# Why do we need to reserve a broadcast address in a network?

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_7.png)

# Unicast, Broadcast, and Multicast

There are different ways to send a packet from a source device\, and these different transmissions affect the destination IPv4 addresses\.

__Unicast __ transmission refers to one device sending a message to one other device in  <span style="color:#ff0000">one\-to\-one</span>  communications\.

__Broadcast __ transmission refers to a device sending a message to all the devices on a network in  <span style="color:#ff0000">one\-to\-all</span>  communications\.

__Multicast __ transmission reduces traffic by allowing a host to send a single packet to  <span style="color:#ff0000">a selected set of hosts</span>  that subscribe to a multicast group\.

# Unicast

Unicast transmission is sending a packet to one destination IP address\.

For example\, the PC at 172\.16\.4\.1 sends a unicast packet to the printer at 172\.16\.4\.253\.

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_8.png)

# Broadcast

Broadcast transmission is sending a packet to all other destination IP addresses\.

For example\, the PC at 172\.16\.4\.1 sends a broadcast packet to all IPv4 hosts\.

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_9.png)

# Multicast

Multicast transmission is sending a packet to a multicast address group\.

For example\, the PC at 172\.16\.4\.1 sends a multicast packet to the multicast group address 224\.10\.10\.5\.

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_10.png)

# IP Directed Broadcasts

In addition to the  __255\.255\.255\.255__  broadcast address\, there is a broadcast IPv4 address for each network\. Called a directed broadcast\, this address uses  __the highest address__  in the network\, which is the address where all the host bits are 1s\.

For example\, the directed broadcast address for 192\.168\.1\.0/24 is 192\.168\.1\. __255__ \. This address allows communication to __ all the hosts__  in that network\. To send data to all the hosts in a network\, a host can send a single packet that is addressed to the broadcast address of the network\.

# Classwork - Unicast, Broadcast, or Multicast

Go to __ Classwork \- Unicast\, Broadcast\, or Multicast__ \. Click Start to view the Destination IP Address\. Next\, click the host\(s\) which will receive a packet based on the address type \(Unicast\, Broadcast or Multicast\)\.formats\)\.  _[http://cisco\.num\.edu\.mn/CCNA\_R&S1/course/module8/8\.1\.3\.6/8\.1\.3\.6\.html](http://cisco.num.edu.mn/CCNA_R&S1/course/module8/8.1.3.6/8.1.3.6.html)_

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_11.png)

# Types of IPv4 Addresses

As defined in in RFC 1918\,  <span style="color:#ff0000"> __public IPv4 addresses__ </span>  are globally routed between internet service provider \(ISP\) routers\.

<span style="color:#ff0000"> __Private addresses__ </span>  __ are common blocks of addresses used by most organizations to assign IPv4 addresses to__  __ __  __internal hosts__  __\.__

__Private IPv4 addresses are __  __not unique__  __ and can be used internally within any network\.__

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_12.png)

__However\, private addresses are __  __NOT __  __globally routable\.__

# Routing to the Internet

__Network Address Translation \(NAT\)__  translates  <span style="color:#ff0000"> __private IPv4 addresses __ </span> to public IPv4 addresses\.

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_13.png)

__NAT is typically enabled on the edge router connecting to the internet\.__

__It translates the internal private address to a public global IP address\.__

# Special Use IPv4 Addresses

Loopback addresses

__127\.0\.0\.0__  /8 \(127\.0\.0\.1 to 127\.255\.255\.254\)

Commonly identified as only 127\.0\.0\.1

Used on a host to test if TCP/IP is operational\.

Link\-Local addresses

__169\.254\.0\.0 __ /16 \(169\.254\.0\.1 to 169\.254\.255\.254\)

Commonly known as the Automatic Private IP Addressing \(APIPA\) addresses or self assigned addresses\.

Used by Windows DHCP clients to self\-configure when no DHCP servers are available\.

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_14.png)

# Legacy Classful Addressing

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_15.png)

RFC 790 \(1981\) allocated IPv4 addresses in classes

Class A \(0\.0\.0\.0/8 to 127\.0\.0\.0/8\)

Class B \(128\.0\.0\.0 /16 – 191\.255\.0\.0 /16\)

Class C \(192\.0\.0\.0 /24 – 223\.255\.255\.0 /24\)

Class D \(224\.0\.0\.0 to 239\.0\.0\.0\)

Class E \(240\.0\.0\.0 – 255\.0\.0\.0\)

Classful addressing wasted many IPv4 addresses\.

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_16.png)

# Assignment of IP Addresses

The Internet Assigned Numbers Authority \(IANA\) manages and allocates blocks of IPv4 and IPv6 addresses to five Regional Internet Registries \(RIRs\)\.

RIRs are responsible for allocating IP addresses to ISPs who provide IPv4 address blocks to smaller ISPs and organizations\.

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_17.png)

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_18.png)

# Classless Addressing

In the mid\-1990s\, with the introduction of the World Wide Web \(WWW\)\, classful address allocation was replaced with classless addressing\, which is used today\.

Classless addressing ignores the rules of classes \(A\, B\, C\)\. Public IPv4 network addresses \(network addresses and subnet masks\) are allocated based on the number of addresses that can be justified\.

Nowadays\, classful address allocation was replaced with  __classless addressing__  which ignores the rules of classes \(A\, B\, C\)\.

# Classwork - Private or public address

Go to __ Classwork \- Public or Private IPv4 Address__ \. Drag each IP address to the correct category: Public or Private\.  _[https://tkj\.smkn4padalarang\.sch\.id/cisco/RS5/course/module7/7\.1\.4\.7/7\.1\.4\.7\.html](https://tkj.smkn4padalarang.sch.id/cisco/RS5/course/module7/7.1.4.7/7.1.4.7.html)_

![](Copy%20of%2013%20IPv4%20Addressing%20(Cont)_19.png)

# Classwork - Network Address Task

Complete this week’s  __Classwork \- Network Address Task__  in the Google Classroom\.

