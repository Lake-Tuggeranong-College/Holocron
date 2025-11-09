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

# Feature Implementation

The process above needs to be repeated for each feature being implemented.  For instance, create a new function called `commandForward()` and then update loop, so that if `command == "1,forward"` it will call that function.

For example:

![[roverCommandsExample.png]]

## Motor Usage

Before implementation into your code, it's advisable to check whether the modules have been wired and powered correctly. Luckily the library includes some example code. Open the **DCMotorTest** example code.

![[roverDCMotorTest.png]]

Change the motor number to one that matches where you wired your motors.

![[roverDCMotorNumber.png]]

Upload the code to the Feather and the motor hopefully will move. After confirmation that it works, change the motor number to the other motor, upload and test that motor.

> [!warning]- Troubleshooting: Motors Don't work?
> Check the wiring of the motors, are they connected to the motor number you expect? Check the bottom of the Motor featherwing to confirm.
> Is the power light turned on, on the Motor featherwing?
> Do the motors work if powered directly? (only do so with teachers supervision).


### Implementing Motors into the Rover code

Assuming the motors work correctly with the example code, it's time to integrate the required code into the rover sketch. Luckily the example code used above is helpful with that and the code can be largely copied, with slight modifications.

First, you'll need to import the library and define the two motors.

> [!important] Obviously, the motor numbers will need to match the wiring on your robot.

![[roverMotorDefinition.png]]

```arduino
#include <Adafruit_MotorShield.h>
Adafruit_MotorShield AFMS = Adafruit_MotorShield();
// Select which 'port' M1, M2, M3 or M4. In this case, M1
Adafruit_DCMotor *motorLeft = AFMS.getMotor(1);
Adafruit_DCMotor *motorRight = AFMS.getMotor(2);
```

Create a new function `initialiseMotorShield()` which runs the initialisation code.

![[roverInitialiseMotor.png]]

```arduino
if (!AFMS.begin()) {         // create with the default frequency 1.6KHz
	// if (!AFMS.begin(1000)) {  // OR with a different frequency, say 1KHz
	Serial.println("Could not find Motor Shield. Check wiring.");
	while (1);
}
Serial.println("Motor Shield found.");
```

Update `setup()` to call the function:

![[roverSetupMotor.png]]



Finally, update `commandForward()` to turn both motors forward.

![[roverCommandForward.png]]


```arduino
void commandForward() {
  motorLeft->setSpeed(150);
  motorRight->setSpeed(150);

  motorLeft->run(FORWARD);
  motorRight->run(FORWARD);
  delay(1000); // Runs the motors for 1 second

  // Stops the motors
  motorLeft->run(RELEASE);
  motorRight->run(RELEASE);
}
```

This is a extremely simple implementation of the functionality, and it just serves to test the process. You may wish to consider how to program the robot to continue to move forward until another command is received.

> [!warning]- Troubleshooting - Robot spinning or moving backwards?
> If your robot is not moving forwards as intended, and either is spinning or moving backwards, there's a few ways to fix it.
> Change the code so that the `commandforward()` function actually makes the motors run `BACKWARDS`, although this may be confusing when reading code.
> The other (more preferred) option is to swap the two motor cables around where they are connected to the motor terminal.


### Other motor functions

Now that you've completed the forward command, repeat the process for the different Motor commands, changing the `FORWARD` commands for `leftMotor` and `rightMotor`.


**Sample Code:**

```arduino


void loop() {
  // readGPS();
  // transmitData("test");
  String command = waitForReply();
  Serial.println(command);
  if (command == "1,test") {
    commandTest();
  }
  if (command == "1,forward") {
    commandForward();
  }
  if (command == "1,right") {
    commandRight();
  }
  if (command == "1,start") {
    commandStart();
  }
  if (command == "1,left") {
    commandLeft();
  }
  if (command == "1,stop") {
    commandStop();
  }
  if (command == "1,backward") {
    commandBackward();
  }
  delay(1000);
}

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



void commandForward() {
  motorLeft->setSpeed(150);
  motorRight->setSpeed(150);

  motorLeft->run(FORWARD);
  motorRight->run(FORWARD);
  delay(1000);  // Runs the motors for 1 second

  // Stops the motors
  motorLeft->run(RELEASE);
  motorRight->run(RELEASE);
}

void commandBackward() {
  motorLeft->setSpeed(150);
  motorRight->setSpeed(150);

  motorLeft->run(BACKWARD);
  motorRight->run(BACKWARD);
  delay(1000);  // Runs the motors for 1 second

  // Stops the motors
  motorLeft->run(RELEASE);
  motorRight->run(RELEASE);
}


void commandRight() {
  motorLeft->setSpeed(150);
  motorRight->setSpeed(150);

  motorLeft->run(FORWARD);
  motorRight->run(BACKWARD);
  delay(1000);  // Runs the motors for 1 second

  // Stops the motors
  motorLeft->run(RELEASE);
  motorRight->run(RELEASE);
}


void commandLeft() {
  motorLeft->setSpeed(150);
  motorRight->setSpeed(150);

  motorLeft->run(BACKWARD);
  motorRight->run(FORWARD);
  delay(1000);  // Runs the motors for 1 second

  // Stops the motors
  motorLeft->run(RELEASE);
  motorRight->run(RELEASE);
}

void commandStop() {
  // Stops the motors
  motorLeft->run(RELEASE);
  motorRight->run(RELEASE);
}

void commandStart() {
  // to be implemented later.
}
```


# Crash Sensor

Attach the pins:
- + -> VCC
- - -> GND
- OUT -> D12

## Sample Code

```arduino
const int crashSensorPin = 12;  // Pin connected to the crash sensor
int sensorState = 0;            // Variable to store the sensor state

void setup() {
  pinMode(crashSensorPin, INPUT);  // Set pin 12 as input
  Serial.begin(9600);              // Start serial communication
}

void loop() {
  sensorState = digitalRead(crashSensorPin);  // Read the sensor state

  if (sensorState == HIGH) {
    Serial.println("Crash detected!");
  } else {
    Serial.println("No crash.");
  }

  delay(500);  // Delay for readability
}

```


# Piezo 

- + -> VCC
- - -> GND
- S -> D10

## Sample Code

```arduino
#define buzzerPin 10

// Notes in the melody:
int melody[] = {
  262, 262, 0, 262, 0, 208, 262, 0, 311, 0, 262
};

// Note durations: 4 = quarter note, 8 = eighth note, etc.
int noteDurations[] = {
  8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 4
};

void setup() {
  // No setup needed for piezo
}

void loop() {
  for (int i = 0; i < 11; i++) {
    int noteDuration = 1000 / noteDurations[i];
    if (melody[i] != 0) {
      tone(buzzerPin, melody[i], noteDuration);
    }
    delay(noteDuration * 1.3); // Slight pause between notes
    noTone(buzzerPin);         // Stop the tone
  }

  delay(2000); // Wait before repeating the tune
}

```