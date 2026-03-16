---
isCurrent: true
softwareVersion:
  - PlatformIO
needsUpdating: true
---
> [!important] Prerequisite - Before starting this process, you must clone the repository to your computer.



This project focuses on designing and simulating a smart house system using robotics principles using the physical House environment. You will explore how various sensors, actuators, and microcontroller programming can be integrated to create an automated and intelligent living space

![[smartHousePromo.jpg]]

# Required Theory

In order to continue with the project, there are some theory topics that you will need to know:

- [[_Robotics and Mechatronics/1 - Building and Programming Circuits/_projects/Smart House/_topics/Variables and Data Types|Variables and Data Types]]
- [[_Robotics and Mechatronics/1 - Building and Programming Circuits/_projects/Smart House/_topics/Style Guide|Style Guide]]
- [[_Robotics and Mechatronics/1 - Building and Programming Circuits/_projects/Smart House/_topics/Algorithm Design - Sequence|Sequences]]
- [[_Robotics and Mechatronics/1 - Building and Programming Circuits/_projects/Smart House/_topics/Algorithm Design - Decisions|Decisions]]
- [[_Robotics and Mechatronics/1 - Building and Programming Circuits/_projects/Smart House/_topics/Algorithm Design - Loops|Loops]]
- [[_Robotics and Mechatronics/1 - Building and Programming Circuits/_projects/Smart House/_topics/Data Structures|Data Structures]]

# Code Design

Let's assume you've got 5 [[robotic behaviours]] that you wish to implement. For instance:
1) When the motion sensor detects movement in a room, the light bulb turns on. If no movement is detected for a specified period, the light bulb turns off to save energy.
2) When the temperature sensor detects that the room temperature has fallen below a set threshold, the smart thermostat activates the heater. Conversely, it activates the air conditioner if the temperature exceeds the threshold.
3) When the motion sensors detect movement and door/window sensors register unauthorized entry, the alarm system is triggered. Simultaneously, smart lights turn on in specific areas to deter intruders, and security cameras start recording. Door locks automatically engage to secure all entry points.
4) When the light sensor detects excessive sunlight, the motorised blinds lower automatically to reduce glare and heat. Conversely, they raise to allow more natural light when the sunlight is insufficient.
5) When the soil moisture sensor detects that the soil in the garden is too dry, the smart sprinkler system activates, watering the garden. It turns off automatically once the desired moisture level is achieved.

## Code Design Organisation

The code design should follow the features discussed in [[_Robotics and Mechatronics/1 - Building and Programming Circuits/_projects/Smart House/_topics/Algorithm Design - Modularisation|Modularisation]]. Therefore the high-level view of the code would appear to be something similar to this:

![[smartHouseHighLevelCode.png]]

> [!note] In this flowchart you should be able to see that `loop()` has only got minimal amount of code in it, just calls to the other functions. 
> This allows the loop function to focus on the high-level logic (what order the functionality is in). 
> The low-level code is implemented in the specific functions. 
> This benefits the code to make it easier for the programmer to know where the code is located for each part of the project.


# Approach to coding

With the initial setup complete, it's time to add addition components, both input and output.

Follow these steps to implement code (if you're unsure):

1. Components
	1. Pins, find out what each of then pins are on the components (VCC, GND, signal etc)
	2. Wire the pins to the Arduino. Find out where each pin needs to be connected to.
2. Code
	1. Configuration, define the pins and variables.
	2. `setup()` - add the required code to the setup function.
	3. Custom Function - use one of the functions created previously, or create a new one.
		1. Input - test the input for the input device
		2. Output - the the code for the output device
		3. Processing - write the logic for how the input device impacts the output device.

All these steps require research. You will need to google each component and specifically the options available in TinkerCad. 

> [!important] Every component is different and requires different code.


# Tutorial: Building the Smart House

In this tutorial, we will learn how to build a dual-lighting system for a Smart House. We will progress through three stages: setting up basic digital outputs, handling user input with buttons, and finally controlling an addressable RGB NeoPixel square.

> [!NOTE]
> 
> **Developing in the Arduino IDE?** > If you are using the Arduino IDE instead of PlatformIO, you need to manually install the library. Go to `Sketch` -> `Include Library` -> `Manage Libraries...` and search for **"Adafruit NeoPixel"**. In PlatformIO, this is handled automatically via the configuration file.

## Stage 1: Basic Pin Definitions and Setup

Every project starts by telling the Arduino which physical pins we are using. We use `#define` to give these pins friendly names.

### Key Concepts

- **Pin Definitions:** Mapping software variables to physical hardware pins.
- **Pin Mode:** Configuring a pin to either send power (OUTPUT) or listen for signals (INPUT).

> [!TIP]
> 
> **The Arduino Header** > Notice the `#include <Arduino.h>` at the top. In PlatformIO, this is **required** to use standard functions like `digitalRead`. In the Arduino IDE, this line is optional as the IDE adds it for you automatically.

```
#include <Arduino.h>
#include <Adafruit_NeoPixel.h>

// Pin Definitions
#define yellowLedPin 27
#define rightButtonPin 5
#define neopixelPin 26
#define PIXEL_COUNT 4

// Initialize the NeoPixel Object
Adafruit_NeoPixel neoPixelSquare(PIXEL_COUNT, neopixelPin, NEO_GRB + NEO_KHZ800);

void setup() {
  Serial.begin(9600); // Start the serial monitor for debugging
  
  // Configure the LED as an output
  pinMode(yellowLedPin, OUTPUT);
  
  // Configure the button as an input
  pinMode(rightButtonPin, INPUT);

  // Initialize NeoPixels
  neoPixelSquare.begin();
  neoPixelSquare.show(); // Initialize all pixels to 'off'
}

void loop() {
  // We will fill this in next!
}
```

## Stage 2: Creating a Toggle Switch (The Automatic Light)

In this stage, we want the yellow LED to turn on and off when we press the button. We use "State Tracking" to ensure the LED only changes once per press.

### The Logic

We compare the `buttonState` with the `lastButtonState`. If the button is currently pressed (`LOW`) and it wasn't pressed before, we flip the `ledState`.

```
bool ledState = LOW;
bool lastButtonState = LOW;

void automaticLightSystem() {
  // Read the current physical state of the button
  int buttonState = digitalRead(rightButtonPin);

  // Check if the button is pressed (LOW) 
  // and check if it was released (LOW) in the previous loop
  if (buttonState == LOW && lastButtonState == LOW) {
    ledState = !ledState; // Invert the state (High becomes Low, Low becomes High)
    digitalWrite(yellowLedPin, ledState);
  } 

  // Print state to Serial Monitor to "see" what's happening
  Serial.println(ledState);
  
  // Save the current state for the next loop iteration
  lastButtonState = buttonState;
}
```

## Stage 3: Adding the Atmosphere (NeoPixel System)

NeoPixels are different from standard LEDs. They require a data signal to tell them exactly which color and brightness to display.

### The Logic

We use `.setPixelColor(index, R, G, B, White)`. In this code, we are targeting the second pixel (index 1) and setting its "White" channel to 127 (half brightness).

```
void neopixelLightSystem() {
  // Parameters: (Pixel Index, Red, Green, Blue, White)
  // Here we set the 2nd pixel (index 1) to a neutral white light
  neoPixelSquare.setPixelColor(1, 0, 0, 0, 127);
  
  // You MUST call .show() to push the data to the hardware
  neoPixelSquare.show();
}
```

## Stage 4: Putting it All Together

Now we combine these functions into the main `loop`. We also add a small `delay(100)` to "debounce" the button, preventing it from registering multiple clicks from a single physical press.

```
void loop() {
  // Run our light system logic
  automaticLightSystem();
  
  // Run our NeoPixel logic
  neopixelLightSystem();  
  
  // Wait 100 milliseconds before repeating
  delay(100);
}
```

## Exercises for Students

1. **Change the Colour:** Modify `neopixelLightSystem` to make the LED Red (e.g., `255, 0, 0, 0`).
2. **All Pixels:** Use a `for` loop inside `neopixelLightSystem` to turn on all 4 pixels.
3. **Brightness Control:** Try changing the `127` value in the NeoPixel command to `255` (Full) or `20` (Dim).


## Servo and Steam Sensor

This stage is a continuation of our previous guide and explains other components your Smart Farm project: the **Steam Sensor** (moisture detection) and the **Servo Motor** (automated window).

## Components

### The Steam Sensor (Moisture Detection)

The steam sensor is an **Analogue Sensor**. It works by measuring the resistance between a series of parallel exposed traces.

- **How it works:** When water or moisture touches the traces, it completes a circuit more easily, lowering the resistance.
- **In the code:** We use `analogRead(steamSensorPin)`. This returns a value between **0** (completely dry) and **4095** (saturated, for ESP32). We use a `moistureThreshold` of 500 to decide when the environment is "wet" enough to trigger an action.

### The Servo Motor (The Gate)

A servo motor is an **Actuator** that can be commanded to move to a specific position. Unlike a standard motor that just spins, a servo uses "feedback" to know its exact angle.

#### Standard (180°) vs. Continuous (360°) Servos

It is vital to understand which servo you are using, as they behave very differently in code:

| **Feature**           | **Standard Servo (Used Here)**                                                      | **Continuous (360°) Servo**                                                                            |
| --------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Range**             | Usually 0 to 180 degrees.                                                           | Infinite rotation (spins like a wheel).                                                                |
| **`write()` command** | Commands the servo to a **specific angle** (e.g., `write(90)` moves to the middle). | Commands the **speed and direction** (e.g., `write(90)` stops it, `write(180)` is full speed forward). |
| **Use Case**          | Steering, robotic arms, or **gates/latches**.                                       | Driving wheels on a robot.                                                                             |

**In this project:** We use a standard servo because we want to open a gate to a specific angle (90°) and hold it there, then return it to exactly 0° when dry.

## How the Code Works

### 1. Setup and Attachment

Before we can use the servo, we must "attach" it to a pin. This is done inside the `setup()` function because it only needs to happen once when the board first starts.

```arduino
gateServo.attach(servoPin); // Connects the software object to Pin 5
gateServo.write(0);         // Initialises the gate to the closed position
```

### 2. The Logic Loop: Technical Breakdown

The `moistureDetectionSystem()` function handles the core decision-making of the programme. Here is the technical breakdown of how that logic is processed:

- **Analogue-to-Digital Conversion (ADC):** The ESP32 micro-controller uses an onboard ADC to convert the physical voltage from the steam sensor into a digital integer. Because the ESP32 has 12-bit resolution, the range is $0$ to $2^{12}-1$ (or 4095).
- **Threshold Comparison:** The code uses a **Conditional Statement** (`if...else`) to compare the sampled value against our constant `moistureThreshold`.
- **Pulse Width Modulation (PWM):** When you call `gateServo.write(90)`, the library calculates the specific **Duty Cycle** of a PWM signal required to hold that physical angle. The micro-controller sends this high-speed pulse train to the servo to maintain its position against mechanical resistance.

```arduino
void moistureDetectionSystem() {
  // Step 1: Sample the analogue voltage and store as an integer
  int steamValue = analogRead(steamSensorPin); 

  // Step 2: Binary decision based on threshold
  if (steamValue > moistureThreshold) {
    // Step 3a: Update PWM signal for 90-degree position
    gateServo.write(90); 
  } else {
    // Step 3b: Update PWM signal for 0-degree position
    gateServo.write(0);  
  }
}
```

## Summary

| **Category**          | t**Description**                                                                                                             |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Input (Sensor)**    | The Steam Sensor gathers analogue data from the environment.                                                                 |
| **Processing (Code)** | The ESP32 compares that data to a pre-defined threshold.                                                                     |
| **Output (Actuator)** | The Servo Motor performs a physical action based on the result.                                                              |
| **Best Practice**     | By using a specific function for the moisture system, we keep the code **Modular**, making it much easier to test and debug. |

# Style Guide

Naming variables, functions, constants etc are important when writing code. Follow the Style Guide below to assist you with naming.

```
// Code Design
// 1. naming conventions
// variables & functions - lowerCamelCase
// Constants - UPPERCASE

// kebab-case X
// snake_case X
// UpperCamelCase X
// Hungarian Notation - first three letters indicate the type Y
 
// 2. Modular
// Each subsystem has its own function.
// loop() only has function calls (and delay).

// 3. Internal Documentation (Comments)
// Explain logic / complex code
// Explain the purpose and goals of functions
```

Look here for more information : [[Style Guide - Arduino]]


## Smart House Pins

| pin  | Device              |
| ---- | ------------------- |
| io18 | Fan/DC Motor IN-    |
| io19 | Fan/DC Motor IN+    |
| io23 | Gas Sensor          |
| io5  | Window servo        |
| io13 | Rotating door servo |
| io12 | Yellow LED          |
| io14 | PIR                 |
| io27 | Right Button        |
| io16 | Left Button         |
| io17 | Temperature Sensor  |
| io25 | Buzzer              |
| io26 | Neopixel            |
| i2c  | RFID                |
| i2c  | LCD                 |
| io34 | Steam Sensor        |

![[esp32DevBoardPins1.jpeg]]

![[esp32DevBoardPins2.jpeg]]

![[esp32DevBoardPins3.jpeg]]