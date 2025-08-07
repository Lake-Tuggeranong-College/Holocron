This overarching stage of project development includes many different aspects of development.

# Additional Libraries

As the rover will be using some specialised Featherwings, some libraries will need to be added to the Arduino IDE. Search and add the following libraries into your Arduino IDE:

> [!note] When installing these libraries you may be asked if you wish to install dependencies. Click **Install All** on those popups.

- Adafruit NeoPixel 
- Adafruit Motor Shield V2
- Adafruit ADT7410
- Adafruit ADXL343

![[roverLibraries.png]]

# `Comms.h` Library

In the `comms.h` library for the rover, update the `waitForReply()` function to **return** the command received to the calling function.

![[roverCommsWaitForReply.png]]



# Main sketch

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

