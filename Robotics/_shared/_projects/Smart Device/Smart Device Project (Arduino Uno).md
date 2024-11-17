---
tag: Robotics
tags: archived
---


Create a Google Doc to document these, and future, topics.

# Smart Device Theme

Decide on a Device that you wish to automate. Some examples could be:

- Car
- Coffee Machine
- Mouse
- Computer Mouse
- Human
- etc

## Inputs and Output Components

For your device, you will need to use the following components (at a minimum). To clarify, you need to include ALL of the inputs and outputs listed. You also need to add at least one of the “Additional” sensors.

| Inputs (ALL required) | Outputs (ALL Required) | Additional (1 minimum) |
| --- | --- | --- |
| Sonar / Distance | Traffic Light LEDs | Passive Infrared (PIR) |
| Line Sensor | Buzzer (Piezo) | Infrared Remote Control |
| Button (Crash) | DC Motor | GPS |
| Potentiometer | Servo | Bluetooth (need a MEGA) |
|  | SD Card Logging | RFID |

## Task

In a Google Doc, write the Introduction to your project, introducing the Smart Device you’re developing. Discuss *in general* the sensors you’re going to use and how they might be implemented. How they’ll fit together etc. 

The specifics will be defined later.

In your description:

- Identify each input and what it represents in your smart device.
- Identify each output and what it represents in your smart device.

Research to see if anything like your idea already exists, and include the details of the existing product into your theme.

<aside>
‼️ Keep It Simple. When defining the theme, start with :
- one input only impacting one output
- And conversely, one output being impacted by **one** input only.

</aside>

## Examples

### Example 1 - Automated Car Space & Coffee System

For my automated system, I have decided to make an **automated car space** and office. The theory is that when the car enters the **car space** and the correct **GPS coordinates**, the **coffee machine** will turn on in the person’s office and brew them a cup of coffee. The **simulation** will be using a **crash sensor**, a **line sensor**, a **sonar**, a **GPS** and an **SD card**. The different **sensors** will activate **outputs** like two **motor fans**, a **buzzer** and an **LED**. To improve upon the system, I would make the code more **complex** so that there would need to be an **interaction** between the **inputs** for certain **outputs** to be activated.

### Example 2 - Automated Car

The theme of the project was meant to be an automatic car, some automatic cars look like this:

An automatic car, actually means “A car with automatic transmission”. Most cars these days are automatic because the market has increased over the past 20 years, and at the same time, the price of electronics has decreased.  Electronics in cars have become a common occurrence. There is an argument stating that the road is safer due to the abundance of automatic checks these cars have, from anti glare mirrors to automatic brakes, these little changes over the years have decreased the danger of the roads. There are even statements that self-driving cars are the future of the road, however that only seems to be the case if the only cars on the road are self-driving (CGP Gray, 2016).

# Behaviours

## Instructions

Write the behaviours into your assessment Google Doc. This is the document you defined the Theme in.

## Define Behaviours

These are the descriptions of what should occur when the system is running, written in plain language. Keep them as simple as possible focusing on the formula:

When an Input occurs, perform an output, or to put it in more programming terms: `Input -> Processing -> Output`

<aside>
‼️ Remember to write the behaviours in context - to line up with your theme!

</aside>

## Sample Behaviour

When someone presses the dog collar (**button** is pressed), the dog barks (the buzzer is sounded).

## **Previous Examples**

**Here are a number of examples from previous years.**

![[Screen_Shot_2022-04-05_at_10.10.49_am.png|Screen Shot 2022-04-05 at 10.10.49 am.png]]

![[Screen_Shot_2022-04-05_at_10.10.20_am.png|Screen Shot 2022-04-05 at 10.10.20 am.png]]

# Wiring Diagram

## Overview

The goal of a wiring diagram is to demonstrate how the components are connected to each other. They are to be used as a **guide** to show which pins on the devices to connect to each other.

<aside>
‼️ The physical components may differ from the ones shown in a wiring digram. Always check which pins are the VIN and GND etc on your hardware.

</aside>

## Instructions

### Setup

1. First, access the `WiringStart.ckt` in the project.
2. Finally, open Cirkit Designer, go to File → Open and choose the `.ckt` file.
    1. You may find that you need to open Cirkit Designer first, then Select **Open File**.

![[Screen_Shot_2022-04-18_at_11.20.46_pm.png|Screen Shot 2022-04-18 at 11.20.46 pm.png]]

## Cirkit Designer How To

[https://youtu.be/LhXv9ngXCCU](https://youtu.be/LhXv9ngXCCU)

## Steps to complete wiring diagram

### Power

1. If not done already, wire the GND pins from the Arduino to the Ground rail (indicated in green in Cirkit Designer). 
2. If not done already, wire the 5V pin from the Arduino to the positive rails on the breadboard (indicated in red)
    
    ![[wiring1.png]]
    
3. Wire all the Ground pins of all devices that you’ll be using to one of the ground rails.
4. Next, wire the relevant power pins from the Battery pack to the 12V and Ground pins on the motor controller.
    
    ![[wiring2.png]]
    
5. Finally identify the power pins for each of the devices and connect each of them to the positive power rail. Power pins could be labeled differently. Some common labels are 5V, 3V3, VCC, etc.
6. Finally, press the Autoroute all wires button to clean up the organisation of the wires.

![[wiringAutoRoute.png]]

After this process, you should have a diagram appearing similar to the one shown here.

![[wiring3.png]]

### Device Pins

Devices have different number and purpose of pins, making simple instructions difficult, however not impossible.

Some of the devices are listed below, showing the pins identified on the device and which Arduino pin it should be connected to.

SD Card

![[SCR-20230425-rskw-2.png]]

| Device Pin | Arduino Pin |
| --- | --- |
| MISO | 12 |
| MOSI | 11 |
| SCK | 13 |
| CS | 10 |

Servo

![[SCR-20230425-rslw-2.png]]

| Device Pin | Arduino Pin |
| --- | --- |
| Pulse | 9 |

Motor Module

![[SCR-20230425-rscr-2.png]]

| Device Pin | Arduino Pin |
| --- | --- |
| IN3 | 6 |
| IN4 | 5 |

Piezo / Buzzer

![[SCR-20230425-rsfq-2.png]]

| Device Pin | Arduino Pin |
| --- | --- |
| Pin2 | 8 |

Button Sensor

![[SCR-20230425-rsir-2.png]]

| Device Pin | Arduino Pin |
| --- | --- |
| Signal | 7 |

IR Receiver

![[SCR-20230425-rsht-2.png]]

| Device Pin | Arduino Pin |
| --- | --- |
| Data | 4 |

Line Tracker Sensor

![[SCR-20230425-rsgn-2.png]]

| Device Pin | Arduino Pin |
| --- | --- |
| Out | 3 |

Sonar / HCSR04

![[SCR-20230425-rshe-2.png]]

| Device Pin | Arduino Pin |
| --- | --- |
| Trig | 2 |
| Echo | A4 |

Traffic Lights

![[SCR-20230425-rsed-2.png]]

| Device Pin | Arduino Pin |
| --- | --- |
| Red | A0 |
| Yellow | A1 |
| Green | A2 |

Potentiometer

![[SCR-20230425-rsjo-2.png]]

| Device Pin | Arduino Pin |
| --- | --- |
| Leg1 | Ground |
| Wiper | A3 |
| Leg2 | 5V |

<aside>
‼️ Don’t forget to Autoroute all the wires!

</aside>

At the end of the wiring process, you should have a digram that appears similar to this.

![[final.png]]

# Code - Configuration and Initialisation

## Explanation Video

[Made for Semester 1, 2023](https://www.youtube.com/watch?v=vquMYicwrso)

Made for Semester 1, 2023

In this stage you will be “converting” your behaviours and flowcharts into code. As you’ve already done the planning for this, it is best to keep your flowcharts on hand to refer to.

Start by creating a new Arduino sketch in the IDE, naming it after you project - such as SmartHouse. Save this sketch in your Github directory.

![[Screen_Shot_2022-05-20_at_2.55.05_pm.png|Screen Shot 2022-05-20 at 2.55.05 pm.png]]

![[commonBlocks#Commit & Push]]

## Coding

To code this project, you’ll be approaching each section at a time, starting with Includes and Variable Configuration, shown in this image.

Afterwards, then it’s the setup() function, then loop() then finally the Custom Functions.

![[Structure_of_an_Arduino_Sketch_example_with_code.png]]

<aside>
‼️ The pin numbers listed in this section must be individually confirmed to ensure they match your wiring diagram and other requirements.

</aside>

If you need to install an external library, please see this guide.

[Installing an Arduino Library](https://learn.sparkfun.com/tutorials/installing-an-arduino-library/all)

## Common Code for All Projects

- SD and Real Time Clock
    
    
    You will need to install the `RTCLib` (by Adafruit) library. Follow the instructions above.
    
    ![[Screen_Shot_2022-05-20_at_3.59.18_pm.png|Screen Shot 2022-05-20 at 3.59.18 pm.png]]
    
    Once the library has been installed, add the code shown here before the setup() function.
    
    This code will enable reading and writing to the SD card through the module. The RTC library is needed to store the current date and time.
    
    ```arduino
    // SD Card Module
    #include <SPI.h>
    #include <SD.h>
    
    // Real Time Clock (RTC)
    #include "RTClib.h"
    RTC_Millis rtc;     // Software Real Time Clock (RTC)
    DateTime rightNow;  // used to store the current time.
    ```
    

It’s time to configure the modules that you will be using. Depending on the module, there may be more complex code to create “objects” that can be accessed.

## Common `Setup()` code

Copy the following code and replace the contents of the default `setup()` function code.

```arduino
Serial.begin(9600);           // Open serial communications and wait for port to open:
  while (!Serial) {
    delay(1);                   // wait for serial port to connect. Needed for native USB port only
  }

// SD Card initialisation
  Serial.print("Initializing SD card...");
  if (!SD.begin(10)) {
    Serial.println("initialization failed!");
    while (1);
  }
// Real Time Clock (RTC)
rtc.begin(DateTime(F(__DATE__), F(__TIME__)));
Serial.println("initialization done.");
logEvent("System Initialisation...");
```

### LogEvent() Function - don’t do this (2023).

The following function writes events to the SD card attached to your Arduino. Copy and Paste into your sketch at the bottom (after `loop()`)

- Code
    
    ```arduino
    void logEvent(String dataToLog) {
      /*
         Log entries to a file on an SD card.
      */
      // Get the updated/current time
      DateTime rightNow = rtc.now();
    
      // Open the log file
      File logFile = SD.open("events.csv", FILE_WRITE);
      if (!logFile) {
        Serial.print("Couldn't create log file");
        abort();
      }
    
      // Log the event with the date, time and data
      logFile.print(rightNow.year(), DEC);
      logFile.print(",");
      logFile.print(rightNow.month(), DEC);
      logFile.print(",");
      logFile.print(rightNow.day(), DEC);
      logFile.print(",");
      logFile.print(rightNow.hour(), DEC);
      logFile.print(",");
      logFile.print(rightNow.minute(), DEC);
      logFile.print(",");
      logFile.print(rightNow.second(), DEC);
      logFile.print(",");
      logFile.print(dataToLog);
    
      // End the line with a return character.
      logFile.println();
      logFile.close();
      Serial.print("Event Logged: ");
      Serial.print(rightNow.year(), DEC);
      Serial.print(",");
      Serial.print(rightNow.month(), DEC);
      Serial.print(",");
      Serial.print(rightNow.day(), DEC);
      Serial.print(",");
      Serial.print(rightNow.hour(), DEC);
      Serial.print(",");
      Serial.print(rightNow.minute(), DEC);
      Serial.print(",");
      Serial.print(rightNow.second(), DEC);
      Serial.print(",");
      Serial.println(dataToLog);
    }
    ```
    

### !!Quick Check!!

At this stage, your code should appear **similar** to this.

![[Screen_Shot_2022-05-20_at_5.05.31_pm.png|Screen Shot 2022-05-20 at 5.05.31 pm.png]]

## Module Specific Code

By choosing the modules you require, add the following code after the import statements. Change the pin numbers as necessary.

These code snippets go **above** the setup() function in your sketch.

After adding each code snippet, compile the code to ensure it is working correctly.

<aside>
‼️ The following code snippets may include some or all of the following:
- Pin Definitions
- “Object” configuration
- Low Level Function code.

</aside>

## “Includes and Variable” Configuration

The following code snippets are to be included at the top of the code, above any functions.

- Bluetooth
    
    ```arduino
    // Adafruit nRF8001 Module
    #include <SPI.h>
    #include "Adafruit_BLE_UART.h"
    
    // Connect CLK/MISO/MOSI to hardware SPI
    // e.g. On UNO & compatible: CLK = 13, MISO = 12, MOSI = 11
    #define ADAFRUITBLE_REQ 40
    #define ADAFRUITBLE_RDY 2     // This should be an interrupt pin, on Uno thats #2 or #3
    #define ADAFRUITBLE_RST 41
    Adafruit_BLE_UART BTLEserial = Adafruit_BLE_UART(ADAFRUITBLE_REQ, ADAFRUITBLE_RDY, ADAFRUITBLE_RST);
    aci_evt_opcode_t laststatus = ACI_EVT_DISCONNECTED;
    
    void bluetoothCommandReceived(String bleCommand) {
      bleCommand.trim();
      int bleCommandInt = bleCommand.toInt();
    
      // TODO: Add responses to commands here.
      // These two can be used for testing purposes.
      switch (bleCommandInt) {
        case 1:
          digitalWrite(13, HIGH);
          logEvent("BLE - LED Off");
          break;
        case 0:
          digitalWrite(13, LOW);
          logEvent("BLE - LED On");
          break;
      }
    }
    void bluetoothConnectivity() {
      BTLEserial.pollACI();
    
      // Ask what is our current status
      aci_evt_opcode_t status = BTLEserial.getState();
      // If the status changed....
      if (status != laststatus) {
        // print it out!
        if (status == ACI_EVT_DEVICE_STARTED) {
          Serial.println(F("* Advertising started"));
        }
        if (status == ACI_EVT_CONNECTED) {
          Serial.println(F("* Connected!"));
        }
        if (status == ACI_EVT_DISCONNECTED) {
          Serial.println(F("* Disconnected or advertising timed out"));
        }
        // OK set the last status change to this one
        laststatus = status;
      }
    
      if (status == ACI_EVT_CONNECTED) {
        // Lets see if there's any data for us!
        if (BTLEserial.available()) {
          Serial.print("* "); Serial.print(BTLEserial.available()); Serial.println(F(" bytes available from BTLE"));
        }
        String command = "";
        // OK while we still have something to read, get a character and print it out
        while (BTLEserial.available()) {
          char c = BTLEserial.read();
          //      Serial.print(c);
          command += c;
        }
    
        if (command != "") {
          bluetoothCommandReceived(command);
        }
    
        // Next up, see if we have any data to get from the Serial console
    
        if (Serial.available()) {
          // Read a line from Serial
          Serial.setTimeout(100); // 100 millisecond timeout
          String s = Serial.readString();
    
          // We need to convert the line to bytes, no more than 20 at this time
          uint8_t sendbuffer[20];
          s.getBytes(sendbuffer, 20);
          char sendbuffersize = min(20, s.length());
    
          Serial.print(F("\n* Sending -> \"")); Serial.print((char *)sendbuffer); Serial.println("\"");
    
          // write the data
          BTLEserial.write(sendbuffer, sendbuffersize);
        }
      }
    }
    ```
    
    <aside>
    ‼️ You may find you need to install a library called `Adafruit nRF8001`. Follow the instructions for using the Library Manager.
    
    </aside>
    
    It’s important to check to make sure it works - follow instructions on this page: 
    
    [Getting Started with the nRF8001 Bluefruit LE Breakout](https://learn.adafruit.com/getting-started-with-the-nrf8001-bluefruit-le-breakout/testing-uart)
    
- GPS
    
    <aside>
    ‼️ The GPS unit works MUCH better when run outside. If run inside, put it near a window, and it may take a minute or two to find a GPS location. Outside, it can work instantaneously.
    
    </aside>
    
    ```arduino
    // GPS
    /* RXPin & TXPin
     * If a Uno, then 4 and 3
     * If a Mega/Leonardo, then 10 and 11.
     * Check the software Serial documentation for change interrupts
     * https://www.arduino.cc/en/Reference/SoftwareSerial
     */
    static const int RXPin = 10, TXPin = 11;
    static const uint32_t GPSBaud = 9600;
    
    #include <SoftwareSerial.h>
    #include <TinyGPS++.h>
    
    TinyGPSPlus gps; // The TinyGPS++ object
    SoftwareSerial ss(RXPin, TXPin);// The serial connection to the GPS device
    ```
    
    <aside>
    ‼️ You may find you need to install a library called `TinyGPSPlus`. Follow the instructions for using the Library Manager.
    
    </aside>
    
- Infrared Remote
    
    ```arduino
    // IR Remote
    #include <IRremote.h>
    #define IR_INPUT_PIN    2
    IRrecv irrecv(IR_INPUT_PIN);
    decode_results results;
    ```
    
    <aside>
    ‼️ You may find you need to install a library called `IRRemote`. Choose the one developed by **Armin Joachimsmeyer** Follow the instructions linked above for  installing a library.
    
    </aside>
    
- Traffic Light Module
    
    ```arduino
    // Traffic Lights - LED Outputs
    #define ledRed A0
    #define ledYellow A1 
    #define ledGreen A2
    ```
    
- DC Motor (Blue Button version)
    
    <aside>
    ‼️ This code works for the Motor Controller with the blue press button (on/off) on the board.
    
    </aside>
    
    ```arduino
    // DC Motor & Motor Module - L298N
    #include <L298N.h>
    
    // Pin definition
    const unsigned int IN1 = 7;
    const unsigned int IN2 = 8;
    const unsigned int EN = 9;
    
    // Create one motor instance
    L298N motor(EN, IN1, IN2);
    ```
    
    <aside>
    ‼️ You may find you need to install a library called `L298N`. Follow the instructions for using the Library Manager.
    
    </aside>
    
- DC Motor (DFRobot)
    
    <aside>
    ‼️ This code works for the Motor module labelled DFRobot
    
    </aside>
    
    ```arduino
    int E1 = 6;
    int M1 = 7;
    ```
    
- Servo
    
    ```arduino
    // Servo
    #include <Servo.h>
    Servo myservo;
    ```
    
- Moisture Sensor
    
    ```arduino
    // Moisture Sensor
    #define moisturePin A5
    ```
    
- Potentiometer
    
    ```arduino
    //Potentiometer
    #define pot A3
    ```
    
- Piezo
    
    ```arduino
    // Piezo Buzzer
    #define piezoPin 8
    ```
    
- Sonar
    
    ```arduino
    // Sonar - HC-SR04
    #define echoPin 6 // attach pin D2 Arduino to pin Echo of HC-SR04
    #define trigPin A4 //attach pin D3 Arduino to pin Trig of HC-SR04
    ```
    
- Line Sensor
    
    ```arduino
    // Line Sensor
    #define lineSensorPin 3
    ```
    
- Crash Sensor (button)
    
    ```arduino
    // Crash Sensor / Button
    #define crashSensor 7
    ```
    
- RFID
    
    <aside>
    ‼️ The **MFRC522** library needs to be installed through the library manager.
    
    </aside>
    
    ```arduino
    // RFID Start
    
    #include <SPI.h>
    #include <MFRC522.h>
    
    #define SS_PIN  21  // ES32 Feather
    #define RST_PIN 17 // esp32 Feather - SCL pin. Could be others.
    
    MFRC522 rfid(SS_PIN, RST_PIN);
    ```
    

## Module Specific Setup() Code

The following code snippets should be included in the setup() function.

- Bluetooth
    
    ```arduino
    // Bluetooth - nRF8001
    uart.setRXcallback(rxCallback);
    uart.setACIcallback(aciCallback);
    uart.setDeviceName("BLEName"); /* 7 characters max! */
    uart.begin();
    ```
    
- GPS
    
    ```arduino
    // GPS
      ss.begin(GPSBaud);
    ```
    
- Infrared Remote
    
    ```arduino
    // IR Remote
    irrecv.enableIRIn();
    ```
    
- Traffic Light Module
    
    ```arduino
    // Traffic Lights - LED Outputs
    pinMode(ledRed, OUTPUT);
    pinMode(ledYellow, OUTPUT);
    pinMode(ledGreen, OUTPUT);
    ```
    
- DC Motor (Blue Button version)
    
    ```arduino
    // DC Motor & Motor Module - L298N
    motor.setSpeed(70);
    ```
    
- DC Motor (DFRobot)
    
    <aside>
    ‼️ This code works for the Motor module labelled DFRobot
    
    </aside>
    
    ```arduino
    pinMode(M1, OUTPUT);
    ```
    
- Servo
    
    ```arduino
    // Servo
      myservo.attach(9);  // attaches the servo on pin 9 to the servo object
    ```
    
- Moisture Sensor
    
    ```arduino
    // Moisture Sensor
    pinMode(moisturePin, INPUT);
    ```
    
- Potentiometer
    
    ```arduino
    //Potentiometer
    pinMode(pot, INPUT);
    ```
    
- Piezo
    
    ```arduino
    // Piezo Buzzer
    pinMode(piezoPin,OUTPUT);
    ```
    
- Sonar
    
    ```arduino
    // Sonar - HC-SR04
    pinMode(trigPin, OUTPUT); // Sets the trigPin as an OUTPUT
    pinMode(echoPin, INPUT); // Sets the echoPin as an INPUT
    ```
    
- Line Sensor
    
    ```arduino
    // Line Sensor
    pinMode(lineSensorPin, OUTPUT);
    ```
    
- Crash Sensor (button)
    
    ```arduino
    // Crash Sensor / Button
    pinMode(crashSensor, INPUT);
    ```
    
- RFID
    
    ```arduino
    // RFID Start
      SPI.begin(); // init SPI bus
      rfid.PCD_Init(); // init MFRC522
      // RFID End
    ```
    

# Stub Implementation

## Explanation Video

[Made for Semester 1, 2023](https://www.youtube.com/watch?v=QRXc9KyWyz8)

Made for Semester 1, 2023

## Instructions

Using your flowcharts created in the Programming Logic stage, complete the implementation for each function stub of your project.

At the end of the process, you should have a partially or fully working implementation of your project.

- Example Code
    
    ```arduino
    #include <SPI.h>
    #include <SD.h>
    #include "RTClib.h"
    #include <L298N.h>                // Motor Controller
    
    #include "pitches.h" // Buzzer tones
    
    // notes in the melody:
    int melody[] = {
      NOTE_C4, NOTE_G3, NOTE_G3, NOTE_A3, NOTE_G3, 0, NOTE_B3, NOTE_C4
    };
    
    // note durations: 4 = quarter note, 8 = eighth note, etc.:
    int noteDurations[] = {
      4, 8, 8, 4, 4, 4, 4, 4
    };
    
    // Output
    int redPin   = A0;   // Red LED,   connected to digital pin 6
    int greenPin = A2;  // Green LED, connected to digital pin 10
    int yellowPin  = A1;  // Blue LED,  connected to digital pin 11
    int piezoPin = 6;
    
    // Input pins
    int crashSensorPin = 8;   // Crash Sensor (button). HIGH or LOW values.
    int lineSensorPin = 2;    // Line Sensor (light). HIGH or LOW values.
    int echoPin = A3;
    int trigPin = A4;
    
    #define IR_INPUT_PIN    7
    #include "TinyIRReceiver.cpp.h"
    #define STR_HELPER(x) #x
    #define STR(x) STR_HELPER(x)
    
    // Control booleans
    boolean isLogged = false;
    boolean engineOn = false;
    boolean motorOn = false;
    boolean keyState = false;
    boolean lastKeyState = false;
    
    // Motor Pin definition
    const unsigned int IN1 = 3;
    const unsigned int IN2 = 4;
    
    // Create one motor instance
    L298N engine(IN1, IN2);
    // Create a IR Receiver instancce
    //Adafruit_NECremote remote(IRpin);
    
    RTC_Millis rtc;     // Software Real Time Clock (RTC)
    DateTime rightNow;  // used to store the current time.
    
    void setup() {
      Serial.begin(9600);           // Open serial communications and wait for port to open:
      while (!Serial) {
        delay(1);                   // wait for serial port to connect. Needed for native USB port only
      }
    
      // SD Card initialisation
      Serial.print("Initializing SD card...");
      if (!SD.begin(10)) {
        Serial.println("initialization failed!");
        while (1);
      }
      Serial.println("initialization done.");
    
      // LED Outputs
      pinMode(redPin,   OUTPUT);   // sets the pins as output
      pinMode(greenPin, OUTPUT);
      pinMode(yellowPin,  OUTPUT);
    
      //Sonar Pins
      pinMode(trigPin, OUTPUT);
      pinMode(echoPin, INPUT);
    
      // Get the time of the Computer at compile time and store it on Arduino.
      rtc.begin(DateTime(F(__DATE__), F(__TIME__)));
      logEvent("System Initialisation...");
      logEvent("Infrared Subsystem enabled");
      logEvent("Motor Subsystem enabled");
      pinMode(lineSensorPin, INPUT_PULLUP);
      attachInterrupt(digitalPinToInterrupt(lineSensorPin), engineOnOff, FALLING);
    
      // IR Configuration
      initPCIInterruptForTinyReceiver();
      Serial.println(F("Ready to receive NEC IR signals at pin " STR(IR_INPUT_PIN)));
    }
    
    void loop() {
      carMotorAndBrake();
      detectAuthorisedAccessInRadius(5);
      delay(100);
    }
    
    void detectAuthorisedAccessInRadius(int distanceThreshold) {
      /*
         Uses the sonar to detect distance to object. When object is within a given distance, it triggers the alarm (buzzer).
         @param distanceThreshold: Integer to determine at what distance to trigger alarm.
      */
      long duration, distance;
      digitalWrite(trigPin, LOW);
      delayMicroseconds(2);
      digitalWrite(trigPin, HIGH);
      delayMicroseconds(10);
      digitalWrite(trigPin, LOW);
      duration = pulseIn(echoPin, HIGH);
      distance = (duration / 2) / 29.1;
      //  Serial.print(distance);
      //  Serial.println(" cm");
      if (distance < 10) {
        logEvent("Alarm");
    
        for (int thisNote = 0; thisNote < 8; thisNote++) {
    
          // This sends a PWM signal to the pieze, and uses the melody array to pick the note to play.
          // This could be done another way by ....  
    
          // to calculate the note duration, take one second divided by the note type.
          //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
          int noteDuration = 1000 / noteDurations[thisNote];
          tone(piezoPin, melody[thisNote], noteDuration);
    
          // to distinguish the notes, set a minimum time between them.
          // the note's duration + 30% seems to work well:
          int pauseBetweenNotes = noteDuration * 1.30;
          delay(pauseBetweenNotes);
          // stop the tone playing:
          noTone(piezoPin);
        }
      }
      delay(50);
    
    }
    
    void handleReceivedTinyIRData(uint16_t aAddress, uint8_t aCommand, bool isRepeat) {
      logEvent("Infrared Code received: " + aCommand);
      if (aCommand == 70) {
        logEvent("IR Command - Up Pressed - Light Off");
        digitalWrite(redPin, HIGH);
    
      }
      if (aCommand == 21) {
        logEvent("IR Command - Down Pressed - Light Off");
        digitalWrite(redPin, LOW);
      }
      if (aCommand == 68) {
        Serial.println("Left");
      }
      if (aCommand == 67) {
        Serial.println("Right");
      }
    }
    
    void engineOnOff() {
      engineOn = !engineOn;
      digitalWrite(13, engineOn);
    }
    
    void carMotorAndBrake() {
      if (engineOn) {
        boolean brakeState = digitalRead(crashSensorPin);
        digitalWrite(greenPin, HIGH);
        if (!brakeState) {   // if the crash sensor is pushed in
          digitalWrite(yellowPin, HIGH);
          motorOn = false;
        } else {
          digitalWrite(yellowPin, LOW);
          motorOn = true;
        }
      } else {
        digitalWrite(greenPin, LOW);
      }
    
      if (engineOn && motorOn) {
        engine.forward();
        engine.setSpeed(70);
        if (!isLogged) {
          logEvent("Motor On");
          isLogged = true;
        }
    
      } else {
        engine.stop();
        isLogged = false;
      }
    
      //debugMotor();
    
    }
    
    void debugMotor() {
      Serial.print("Engine State :");
      if (engineOn) {
        Serial.print("On");
      } else {
        Serial.print("Off");
      }
    
      Serial.print("   Key State :");
      if (keyState) {
        Serial.print("On");
      } else {
        Serial.print("Off");
      }
    
      Serial.print("   Motor State :");
      if (motorOn) {
        Serial.print("On");
      } else {
        Serial.print("Off");
      }
      Serial.println();
    }
    
    void motorOnOff() {
      boolean buttonState = digitalRead(crashSensorPin);
      if (buttonState == LOW) {
        logEvent("Motor On");
        engine.forward();
        engine.setSpeed(70);
    
        delay(1000);
        engine.stop();
        logEvent("Motor Off");
      }
    
    }
    
    void logEvent(String dataToLog) {
      /*
         Log entries to a file on an SD card.
      */
      // Get the updated/current time
      rightNow = rtc.now();
    
      // Open the log file
      File logFile = SD.open("events.csv", FILE_WRITE);
      if (!logFile) {
        Serial.print("Couldn't create log file");
        abort();
      }
    
      // Log the event with the date, time and data
      logFile.print(rightNow.year(), DEC);
      logFile.print(",");
      logFile.print(rightNow.month(), DEC);
      logFile.print(",");
      logFile.print(rightNow.day(), DEC);
      logFile.print(",");
      logFile.print(rightNow.hour(), DEC);
      logFile.print(",");
      logFile.print(rightNow.minute(), DEC);
      logFile.print(",");
      logFile.print(rightNow.second(), DEC);
      logFile.print(",");
      logFile.print(dataToLog);
    
      // End the line with a return character.
      logFile.println();
      logFile.close();
      Serial.print("Event Logged: ");
      Serial.print(rightNow.year(), DEC);
      Serial.print(",");
      Serial.print(rightNow.month(), DEC);
      Serial.print(",");
      Serial.print(rightNow.day(), DEC);
      Serial.print(",");
      Serial.print(rightNow.hour(), DEC);
      Serial.print(",");
      Serial.print(rightNow.minute(), DEC);
      Serial.print(",");
      Serial.print(rightNow.second(), DEC);
      Serial.print(",");
      Serial.println(dataToLog);
    }
    ```
    

## Module Specific Instructions and Code

- GPS
    
    ```arduino
    /*
       Gets the GPS coords and tests whether it's in "bounds"
    
       @params: none
       @return: void
    */
    void locationBarrier() {
      while (ss.available() > 0)
        if (gps.encode(ss.read()))
          getGPSInfo();
    }
    
    void getGPSInfo()
    {
      Serial.print(F("Location: "));
      if (gps.location.isValid())
      {
        Serial.print(gps.location.lat(), 6);
        Serial.print(F(","));
        Serial.print(gps.location.lng(), 6);
      }
      else
      {
        Serial.println(F("INVALID"));
      }
    }
    ```
    
- Infrared Remote
    
    ```arduino
    /*
       Gets the value given by the Keyes IR remote.
       Code values are:
    
       Up     : 25245
       Down   : -22441
       Left   : 8925
       Right  : -15811
       Ok     : 765
       1      : 26775
       2      : -26521
       3      : -20401
       4      : 12495
       5      : 6375
       6      : 31365
       7      : 4335
       8      : 14535
       9      : 23205
       0      : 19125
       #      : 21165
       *      : 17085
    
       Test against each code and perform required action. See example in code.
    
       @params: None
       @return: void
    */
    void remoteDecode() {
    
      if (irrecv.decode(&results)) {
    
        int code = results.value;
        //    Serial.println(code);
        if (code == 25245) {  // Up
          Serial.println("Up");
        }
        irrecv.resume();
      }
    }
    ```
    
- Traffic Light Module
    
    When needed On, write HIGH to the pin (change led pin to relevant colour.
    
    ```arduino
    digitalWrite(ledRed, HIGH);
    ```
    
    When needed Off, write LOW to the pin (change led pin to relevant colour.
    
    ```arduino
    digitalWrite(ledRed, LOW);
    ```
    
- DC Motor
    
    ```arduino
    motor.forward();
    delay(1000);
    motor.stop();
    delay(1000);
    motor.backward();
    delay(1000);
    ```
    
- DC Motor (DFRobot)
    
    ```arduino
    int speedValue = 255; // Can be 0-255.
    digitalWrite(M1,HIGH);
    analogWrite(E1, speedValue);   //PWM Speed Control
    ```
    
- Servo
    
    ```arduino
    // Servo position values range from 0-180
    int servoPos = 100;
    myservo.write(servoPos);
    ```
    
- Moisture Sensor
    
    ```arduino
    int moistureValue = analogRead(moisturePin);
    ```
    
- Potentiometer
    
    ```arduino
    int potValue = analogRead(pot);            // reads the value of the potentiometer (value between 0 and 1023)
    ```
    
- Piezo
    
    ```arduino
    tone(piezoPin, 1000); // Send 1KHz sound signal...
    delay(100);
    noTone(piezoPin);
    ```
    
- Sonar
    
    ```arduino
    digitalWrite(trigPin, LOW);
    delayMicroseconds(2);
    // Sets the trigPin HIGH (ACTIVE) for 10 microseconds
    digitalWrite(trigPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigPin, LOW);
    // Reads the echoPin, returns the sound wave travel time in microseconds
    long duration = pulseIn(echoPin, HIGH);
    // Calculating the distance
    int distance = duration * 0.034 / 2; // Speed of sound wave divided by 2 (go and back)
    ```
    
- Line Sensor
    
    ```arduino
    int lineSensorValue = digitalRead(lineSensorPin);
    ```
    
- Crash Sensor (button)
    
    ```arduino
    int crashSensorValue = digitalRead(crashSensor);
    ```
    
- PIR Sensor
    
    ```arduino
    int pirValue = digitalRead(pirSensor);
    ```
    
- RFID
    
    ```arduino
    void readRFID() {
    
      String uidOfCardRead = "";
      String validCardUIDWork = "198 128 61 43";  // Change this as needed
      String validCardUIDHome = "00 232 81 25";   // Change this as needed.
    
      if (rfid.PICC_IsNewCardPresent()) { // new tag is available
        if (rfid.PICC_ReadCardSerial()) { // NUID has been readed
          MFRC522::PICC_Type piccType = rfid.PICC_GetType(rfid.uid.sak);
    
          for (int i = 0; i < rfid.uid.size; i++) {
            uidOfCardRead += rfid.uid.uidByte[i] < 0x10 ? " 0" : " ";
            uidOfCardRead += rfid.uid.uidByte[i];
          }
          //Serial.println(uidOfCardRead);
    
          rfid.PICC_HaltA(); // halt PICC
          rfid.PCD_StopCrypto1(); // stop encryption on PCD
          uidOfCardRead.trim();
          if (uidOfCardRead == validCardUIDWork || uidOfCardRead == validCardUIDHome) {
            return true;
          } else {
            return false;
          }
        }
      }
    }
    ```
    

# Banner

## Instructions

Using the template provided, or your own version, create a banner to demonstrate your project.

The banner should have:

- A title
- Images
- Description of functionality
- Any other information.

<aside>
❓ The banner needs to be an A5 landscape image.

</aside>

[Smart Device Project Banner Template](https://docs.google.com/drawings/d/1EFGiqYEbIj3BVJ_kU0cloBdFmk7fIWt3SMMJDB5X1O4/edit?usp=drivesdk)

## Examples

![[Kyle_Brogden_semester_2_2021.png|Kyle Brogden semester 2 2021.png]]

![[Smart_Coffee_Banner.jpg|Smart Coffee Banner.jpg]]

# Logic and Method Stubs

In this stage, you’ll develop the overall logic required for the smart device, without the specific code implementation.  This stage focuses on the sequence of steps in the loop() function and ‘method stubs’. 

Stubs are functions that in effect “empty” that will be developed at a later stage.

[Method stub - Wikipedia](https://en.wikipedia.org/wiki/Method_stub)

In essence, the goal is to write the outline of the functionality of the code. The functions should have no implementation in them *at this stage*.

---

## Custom Functions - Stubs

So, you create the code which defines the function name, any parameters and any return type, but leave the implementation blank.

<aside>
‼️ Naming Conventions! Your functions should describe the purpose of the function.

</aside>

Using the flowcharts you created previously, create the functions in Arduino. At the current state, leave the implementation blank. 

This example shows the type of code you should have after this process.

```arduino
void readSensor() {
	
}

boolean isObjectTooClose(int distance) {

  return true;
}
```

At this stage, add the function comments.

Function comments are to appear before the function declaration, and have three sections:

1. A brief description of the goal of the function.
2. A description of any parameters. `None` if no parameters
3. A description of any return type. `Null` if none.

```arduino
/**
  Indicates whether the object is too close to the sensor.

  @param distance value read from the distance sensor
  @return true if object is too close, false otherwise.
*/
boolean isObjectTooClose(int distance) {

  return true;
}
```

## Example of final product

The goal is to have your code (without the initialisation and `setup()` function) looking something similar to this at the end of the process:

```arduino
void loop() {
  bluetoothConnectivity();
  motorDC();
  doorAlarm();
}

/*
  Reads distance value from Sonar (HC-SR04). 
  If less than threshold, activate Piezo buzzer
  @param None
  @return void
*/
void doorAlarm() {

}

/*
  Test Code for DC Motor Usage
  @param None
  @return void
*/
void motorDC() {

}

/*
  Print some information on the motor state in Serial Monitor
  @param None
  @return void
*/
void printSomeInfo()
{

}

/*
    Takes command entered from Bluetooth connection and executes functionality
    E.g. "1" - Write HIGH to builtin LED
    "0" - Write LOW to builtin LED
    @param bleCommand - string accepted from BLE Uart Connection
    @return void
*/
void bluetoothCommandReceived(String bleCommand) {

}

/*
    Handles BLE connectivity.
    Taken from library functionality.
    @param None
    @return void
*/
void bluetoothConnectivity() {

}

/*
    Log entries to a file on an SD card, and outputs to Serial Monitor
    @param dataToLog - string to save on SD card, timestamped.
    @return void
*/
void logEvent(String dataToLog) {

}
```