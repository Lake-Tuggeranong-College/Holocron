This overarching stage of project development includes many different aspects of development.

# Controller
## Adding IDs to Transmission data

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

To test the code transmission and the rover accepting of commands, 

# Rover

## Comms.h Library

In the `comms.h` library for the rover, update the `waitForReply()` function to **return** the command received to the calling function.

![[roverCommsWaitForReply.png]]

## NeoPixel Library

Search and add the **Adafruit NeoPixel** library into the sketch.

## Main sketch

With the `rover.ino` sketch open, add the following code at the top of the file:

```arduino
// For use with the onboard Neopixel (RGB LED)
#include <Adafruit_NeoPixel.h>
Adafruit_NeoPixel pixels(1, PIN_NEOPIXEL, NEO_GRB + NEO_KHZ800);
```

![[roverNeoPixelLibrary.png]]

In `setup()` add code to initialise the neopixel:

```arduino
// Neopixel
// pinMode(PIN_NEOPIXEL, OUTPUT);
pixels.begin();  // INITIALIZE NeoPixel strip object (REQUIRED)
pixels.setBrightness(100); // Set brightness (0-255)
```

![[roverNeoPixelSetup.png]]

Add a new function (at the bottom of the sketch) to display colours on the NeoPixel:

```arduino
void commandTest() {
  Serial.println("Command: test");
  pixels.clear();  // Set all pixel colors to 'off'
  pixels.setPixelColor(0, pixels.Color(150, 0, 0));
  pixels.show();  // Send the updated pixel colors to the hardware.
  delay(1000);
  pixels.setPixelColor(0, pixels.Color(0, 150, 0));
  pixels.show();  // Send the updated pixel colors to the hardware.
  delay(1000);
  pixels.setPixelColor(0, pixels.Color(0, 0, 150));
  pixels.show();  // Send the updated pixel colors to the hardware.
  delay(1000);
  pixels.clear();  // Set all pixel colors to 'off'
  pixels.show();
}
```

Finally, update `loop()` to accept the command and check if it's for your rover and the command is 'test'.

```arduino
String command = waitForReply();
  Serial.println(command);
  if (command == "1,test") {
    commandTest();
  }
```

![[roverLoop.png]]

