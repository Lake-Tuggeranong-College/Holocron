# Objective

In this initial step, your task is to define the project and what it aims to achieve. 

> [!note] This is to finalised as a group

The results of this will be documented so it can be referred to at a later stage.

The scope of the project should define what is in the project and what is **not in** the project goals (at this stage). For instance, if you are defining a robotic car system, you could define the following:


| Within Scope                                                                            | Outside of scope                             |
| --------------------------------------------------------------------------------------- | -------------------------------------------- |
| 6 Wheel drive car                                                                       | Flying                                       |
| Remote controlled                                                                       | Multiple Remote controllers for a single car |
| Car drives forwards, backwards, veers left and right.                                   | Website dashboard for viewing                |
| Car transmits the following telemetry to 'server' - GPS, Temperature, crash statistics. |                                              |
etc.

# Project Details

The SITH year-long project aim is to develop a series of 6 wheel drive rovers which can be remote-controlled, or behave autonomously.

![[rover6WD.jpg|500]]
# Goals

Some of the goals of the project are:
- LoRa communication between two [Adafruit Feather RP2040 RFM95](https://www.adafruit.com/product/5714)
- One Feather ("Controller") can send commands to the other feather ("Rover") via LoRa.
- The Rovers will transmit data back to the controller with telemetry data.
- Each Rover/Controller combination will have an ID to distinguish the data transmitted.
- A Centralised Feather will collect data from all Rovers, storing it in a database.
- Data transmission will be standardised for all data transmitted from/to feather devices.
- A website will display live data for the various rovers.

# Action Item List

Some of the high-level action items for this project are:

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


# Deliverable

The document is to be written in markdown and included in the Holocron repository/website.

It can be co-developed using Google Docs (for example), however the final version needs to be converted to markdown.

> [!important]- Google Docs can export to Markdown (.md) files.
> ![[docsMarkdownExport.png]]