This overarching stage of project development includes many different aspects of development.

# Hardware

The antenna used in the proejct, for both the Controller and the Rover is the https://core-electronics.com.au/915mhz-lora-antenna-rp-sma-1-2-wave-2dbi.html

# Adding IDs to Transmission data

In `comms.h` modify the `transmitData()` function to prefix all communication with an ID for the rover to receive.

Also, modify the code to transmit the newly created `packetToTx` instead of `radioPacket`.

![[transmitDataID.png]]

```arduino
const char* roverID = "1";

char packetToTx[strlen(roverID)+strlen(radioPacket)+2];
strcpy(packetToTx, roverID);
strcat(packetToTx, ",");
strcat(packetToTx, radioPacket);

// radioPacket = roverID + radioPacket;
Serial.println(packetToTx);      // Print message to Serial Monitor
```


# Cycle Through Basic Commands

To test code transmission and the rover's ability to receive commands, create a new function that sends basic commands for the rover to process.

```arduino
void cycleBasicCommands() {
  transmitData("test");
  waitForReply();
  transmitData("forward");
  waitForReply();
  transmitData("backward");
  waitForReply();
  transmitData("left");
  waitForReply();
  transmitData("right");
  waitForReply();
  transmitData("stop");
  waitForReply();
  transmitData("start");
  waitForReply();
}
```

![[controllerCycleCommands.png]]


# Update `loop()`

Modify the main `loop()` to call the new function, and comment out or remove any debug functions currently being called.

![[controllerLoopCycleCommands.png]]

# TFT Joystick code updates

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

#include <Adafruit_GFX.h>
#include <Adafruit_ST7735.h>
#include "Adafruit_miniTFTWing.h"

Adafruit_miniTFTWing ss;
#define TFT_RST -1  // we use the seesaw for resetting to save a pin
#define TFT_CS 5
#define TFT_DC 6
Adafruit_ST7735 tft_7735 = Adafruit_ST7735(TFT_CS, TFT_DC, TFT_RST);
Adafruit_ST77xx *tft = NULL;


#include "comms.h"

// Setup function runs once at startup
void setup() {
  initialiseLoraPins();  // Configure LoRa module pins
  initialiseSerial();    // Start serial communication
  resetRadio();          // Reset the LoRa radio module
  initialiseRadio();     // Initialise radio settings
  setRadioFrequency();   // Set operating frequency
  setRadioPower();       // Set transmission power
  initialiseTFT();
  pinMode(LED_BUILTIN, OUTPUT);  // Set built-in LED pin as output
}

void initialiseTFT() {
  if (!ss.begin()) {
    Serial.println("seesaw couldn't be found!");
    while (1)
      ;
  }

  ss.tftReset();                          // reset the display
  ss.setBacklight(TFTWING_BACKLIGHT_ON);  // turn off the backlight
  tft_7735.initR(INITR_MINI160x80);       // initialize a ST7735S chip, mini display
  tft = &tft_7735;
  tft->setRotation(1);
  Serial.println("TFT initialized");
}

// Main loop runs repeatedly after setup
void loop() {
  // Uncomment one of the following for debugging transmission

  // debugTransmissionSimple();  // Send a test message
  // debugTransmissionButton();    // Send message when button is pressed
  // cycleBasicCommands();
  transmitButtonCommands();
  delay(1000);  // Wait 1 second before next loop iteration
}

// Initialises the Serial Monitor
// Waits for Serial to be ready before continuing
void initialiseSerial() {
  Serial.begin(9600);                  // Start serial at 9600 baud
  while (!Serial) delay(1);            // Wait for Serial to be ready
  delay(100);                          // Short delay for stability
  Serial.println("Feather LoRa TX!");  // Print startup message
}

// Sends a message only when the Feather's BOOT button is pressed
void debugTransmissionButton() {
  pinMode(7, INPUT);               // Set pin 7 as input (BOOT button)
  if (!digitalRead(7)) {           // Check if button is pressed
    transmitData("Button Press");  // Send message
    waitForReply();                // Wait for response
  }
}

// Sends a test message and waits for a reply
// Useful for basic transmission debugging
void debugTransmissionSimple() {
  transmitData("Ryan");  // Send test message
  waitForReply();        // Wait for response
}

void cycleBasicCommands() {
  transmitData("test");
  waitForReply();
  transmitData("forward");
  waitForReply();
  transmitData("backward");
  waitForReply();
  transmitData("left");
  waitForReply();
  transmitData("right");
  waitForReply();
  transmitData("stop");
  waitForReply();
  transmitData("start");
  waitForReply();
}

void transmitButtonCommands() {
  uint32_t buttons = ss.readButtons();

  uint16_t color;

  color = ST77XX_BLACK;
  if (!(buttons & TFTWING_BUTTON_LEFT)) {
    Serial.println("LEFT");
    color = ST77XX_WHITE;
  }

  tft->fillTriangle(150, 30, 150, 50, 160, 40, color);


  color = ST77XX_BLACK;
  if (!(buttons & TFTWING_BUTTON_RIGHT)) {
    Serial.println("RIGHT");
    color = ST77XX_WHITE;
  }

  tft->fillTriangle(120, 30, 120, 50, 110, 40, color);


  color = ST77XX_BLACK;
  if (!(buttons & TFTWING_BUTTON_DOWN)) {
    Serial.println("DOWN");
    color = ST77XX_WHITE;
  }

  tft->fillTriangle(125, 26, 145, 26, 135, 16, color);


  color = ST77XX_BLACK;
  if (!(buttons & TFTWING_BUTTON_UP)) {
    Serial.println("UP");
    color = ST77XX_WHITE;
  }

  tft->fillTriangle(125, 53, 145, 53, 135, 63, color);


  color = ST77XX_BLACK;
  if (!(buttons & TFTWING_BUTTON_A)) {
    Serial.println("A");
    color = ST7735_GREEN;
  }

  tft->fillCircle(30, 57, 10, color);


  color = ST77XX_BLACK;
  if (!(buttons & TFTWING_BUTTON_B)) {
    Serial.println("B");
    color = ST77XX_YELLOW;
  }

  tft->fillCircle(30, 18, 10, color);


  color = ST77XX_BLACK;
  if (!(buttons & TFTWING_BUTTON_SELECT)) {
    Serial.println("SELECT");
    color = ST77XX_RED;
  }

  tft->fillCircle(80, 40, 7, color);
}

```