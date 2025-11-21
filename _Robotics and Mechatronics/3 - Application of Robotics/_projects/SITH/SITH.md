The SITH year-long project aim is to develop a series of 6 wheel drive rovers which can be remote-controlled, or behave autonomously.

![[rover6WD.jpg|500]]
# Goals

The goals of the project are:
- LoRa communication between two [Adafruit Feather RP2040 RFM95](https://www.adafruit.com/product/5714)
- One Feather ("Controller") can send commands to the other feather ("Rover") via LoRa.
- The Rovers will transmit data back to the controller with telemetry data.
- Each Rover/Controller combination will have an ID to distinguish the data transmitted.
- A Centralised Feather will collect data from all Rovers, storing it in a database.
- Data transmission will be standardised for all data transmitted from/to feather devices.
- A website will display live data for the various rovers.

# Action Item List

- [ ] Develop a diagram to describe the information exchange within the system. Include the 5 rovers and controllers, the database and the PHP website.
- [ ] Define the IDs for each Rover/Controller Combination
- [ ] Define the format of the [[#Data Transfers]].
	- [ ] Controller → Rover
	- [ ] Rover → Controller
	- [ ] Rover → Central Controller
	- [ ] Central Controller → MQTT
	- [ ] MQTT → Database 
	- [ ] etc.
- [ ] Sketch the UI for the Webpage to display data.
- [ ] [[#Build the Rovers]]


# Data Transfers

Consider all the data that needs to be transmitted across the SITH system. Draw on your previous knowledge of the data requirements from previous projects and consider what data needs to be stored in the database.

'Follow' the data throughout the system - plan what data needs to be transmitted between each device.

Using the database information provided, create the tables and fields required to store the data.


# Build the Rovers

![](https://www.youtube.com/watch?v=Ll2Du7q0W_U)