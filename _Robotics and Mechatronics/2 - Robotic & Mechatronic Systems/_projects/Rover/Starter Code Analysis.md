---
isCurrent: false
---
The initial codebase for the Rover project is split into two sketches:
1. The Controller
2. The Rover

![[boilerplateSketches.png]]

Initially both sketches are very similar, and contain much of the [[Boilerplate code]] for the different components of the system.

Both sketches include a `comms.h` which contains all the configuration and code required to manage the Lora communication. The file can be found as a tab when opening the sketch:

![[boilerplateCommsFile.png]]
In this file, the two functions that you should be mostly aware of are:
- `void transmitData(const char* radioPacket)`, and
- `void waitForReply()`
which are the two functions that you will need to call in the main sketch to manage the transmission of data.
# Controller

This sketch is focused on sending commands (which haven't been defined as yet) over Lora to the Rover. The main sketch:

```arduino
// Feather9x_TX
// -*- mode: C++ -*-
// Example sketch showing how to create a simple messaging client (transmitter)
// with the RH_RF95 class. RH_RF95 class does not provide for addressing or
// reliability, so you should only use RH_RF95 if you do not need the higher
// level messaging abilities.
// It is designed to work with the other example Feather9x_RX


// Board Libraries:
// https://adafruit.github.io/arduino-board-index/package_adafruit_index.json
// https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json

#include "comms.h"

// Setup function runs once at startup
void setup() {
  initialiseLoraPins();      // Configure LoRa module pins
  initialiseSerial();        // Start serial communication
  resetRadio();              // Reset the LoRa radio module
  initialiseRadio();         // Initialise radio settings
  setRadioFrequency();       // Set operating frequency
  setRadioPower();           // Set transmission power
  pinMode(LED_BUILTIN, OUTPUT); // Set built-in LED pin as output
}

// Main loop runs repeatedly after setup
void loop() {
  // Uncomment one of the following for debugging transmission

  debugTransmissionSimple();  // Send a test message
  // debugTransmissionButton();    // Send message when button is pressed

  delay(1000); // Wait 1 second before next loop iteration
}

// Initialises the Serial Monitor
// Waits for Serial to be ready before continuing
void initialiseSerial() {
  Serial.begin(9600);           // Start serial at 9600 baud
  while (!Serial) delay(1);     // Wait for Serial to be ready
  delay(100);                   // Short delay for stability
  Serial.println("Feather LoRa TX!"); // Print startup message
}

// Sends a message only when the Feather's BOOT button is pressed
void debugTransmissionButton() {
  pinMode(7, INPUT);            // Set pin 7 as input (BOOT button)
  if (!digitalRead(7)) {       // Check if button is pressed
    transmitData("Button Press"); // Send message
    waitForReply();               // Wait for response
  }
}

// Sends a test message and waits for a reply
// Useful for basic transmission debugging
void debugTransmissionSimple() {
  transmitData("test");         // Send test message
  waitForReply();               // Wait for response
}


```