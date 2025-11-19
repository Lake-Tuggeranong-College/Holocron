The SITH year-long project aim is to develop a series of 6 wheel drive rovers which can be remote-controlled, or behave autonomously.

![[rover6WD.jpg|500]]

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
- [ ] Define the format of the data transfers
- [ ] Sketch the UI for the Webpage to display data.
