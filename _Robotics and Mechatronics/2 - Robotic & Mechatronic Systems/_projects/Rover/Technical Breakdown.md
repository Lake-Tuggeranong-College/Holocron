> [!note] This page discusses the technical specifics of the project at the beginning of the project.

# Introduction

The objective of this project is to build a **Remote Control Car** using two Arduino-compatible devices. One device will function as the **Remote Controller**, while the other will serve as the **Car (Rover)**.

This setup is designed to simulate a Mars Rover, enabling remote command transmission and data reception—mimicking real-world space exploration scenarios.

# Communication Overview

The system is designed so that the controller captures user input—potentially via buttons or a joystick—and transmits commands to the rover. The rover then interprets these commands and performs the corresponding actions.

For example, pressing the left button on the controller will cause the car to turn left.

![[technicalCommunications.png]]



# Adafruit Feather RP2040 RFM95

![[technicalBoard.jpg]]

The **Adafruit Feather RP2040 RFM95** is an `Arduino-compatible` microcontroller, allowing it to be programmed using standard Arduino code and the Arduino IDE.

> [!note] This board can also be programmed with a language called CircuitPython if required, however this won't be used at this stage.

Adafruit Feather RP2040 RFM95 Guide - https://learn.adafruit.com/feather-rp2040-rfm95/overview


## Pinout

This diagram contains the relevant details of the pins that may be required throughout the project.


![[technicalPinout.png]]This page has specific details on the functions of each pin - https://learn.adafruit.com/feather-rp2040-rfm95/pinouts
