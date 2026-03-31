> [!important] Prerequisite - Before starting this process, you must [[_Robotics and Mechatronics/1 - Building and Programming Circuits/_ap/2026S1/Accept Assignment|clone the repository]] to your computer.

This project explores the design and programming of an intelligent living space. You will use an ESP32 microcontroller, sensors (inputs), and actuators (outputs) to automate a physical model house.

![[smartHousePromo.jpg]]
## 🤖 Understanding Robotic Behaviours

In robotics, a **Behaviour** is a specific way an entity (like your house) reacts to its environment. Instead of thinking of your code as one long list of instructions, we think of it as a collection of independent behaviours—such as "Regulate Temperature" or "Secure the Entryway"—that run simultaneously to make the house seem "smart."

## 🛠 Quick Reference: Pin Map

_The house is already pre-wired for you. Use this table to understand which pins are connected to which devices before you begin programming._

|Pin|Device|Type|Logic / Signal|
|---|---|---|---|
|**IO12**|Yellow LED|Output|Digital (High/Low)|
|**IO18/19**|Fan (DC Motor)|Output|PWM (Speed)|
|**IO26**|NeoPixel Square|Output|Serial Data|
|**IO5**|Window Servo|Output|PWM (Angle)|
|**IO13**|Door Servo|Output|PWM (Angle)|
|**IO25**|Buzzer|Output|Frequency|
|**IO27**|Right Button|Input|Digital (PULLUP)|
|**IO16**|Left Button|Input|Digital (PULLUP)|
|**IO14**|PIR (Motion)|Input|Digital|
|**IO34**|Steam (Rain)|Input|Analogue (0-4095)|
|**IO17**|DHT11 (Temp)|Input|OneWire Data|

> [!TIP] **Pre-Programming Checklist:**
> 
> 1. **Visual Audit:** Check that the physical components match the pins listed above.
>     
> 2. **Common Ground:** Ensure the ESP32 and the house power supply share a common **GND**.
>     
> 3. **Library Check:** Ensure your environment has the required libraries (NeoPixel, ESP32Servo) installed before deploying code.

## Code Design Organisation

The code design should follow the features discussed in [[_Robotics and Mechatronics/1 - Building and Programming Circuits/_projects/Smart House/_topics/Algorithm Design - Modularisation|Modularisation]]. Therefore the high-level view of the code would appear to be something similar to this:

![[smartHouseHighLevelCode.png]]

> [!note] In this flowchart you should be able to see that `loop()` has only got minimal amount of code in it, just calls to the other functions. 
> This allows the loop function to focus on the high-level logic (what order the functionality is in). 
> The low-level code is implemented in the specific functions. 
> This benefits the code to make it easier for the programmer to know where the code is located for each part of the project.
## 1. Tutorial: Manual Lighting Behaviour

_Learning-oriented: A guided start to get your first system running._

In this tutorial, we will create a **Manual Lighting Behaviour**. When you press a button, a yellow LED will turn on and stay on until you press the button again.

### Step 1: The Basic Skeleton

Every PlatformIO project needs a basic structure. Open `main.cpp` and add this setup:

```
#include <Arduino.h> 

// 1. Define our physical "addresses" (Pins)
#define yellowLedPin 12
#define rightButtonPin 27

// 2. Global variables to remember the "State" of the house
bool ledState = LOW;
bool lastButtonState = HIGH; // Standard buttons are HIGH when not pressed

void setup() {
  Serial.begin(9600);
  pinMode(yellowLedPin, OUTPUT);
  pinMode(rightButtonPin, INPUT_PULLUP); // Uses internal resistor for stability
}

void loop() {
  // We call our behaviour here so it runs repeatedly
  delay(100);
}
```

![[smartHouseBasicSkeleton.png]]

> [!IMPORTANT] **Why include `Arduino.h`?** Unlike the standard Arduino IDE which adds this automatically behind the scenes, **PlatformIO** requires you to explicitly include this header file. It tells the compiler how to understand standard commands like `digitalWrite`, `pinMode`, and `delay`.

### Step 2: Coding the Behaviour

We need a function that checks if the button was _just_ pressed. We call this **State Tracking**.

Add the function for the new behaviour:

```arduino
void handleManualLighting() {
  int currentButtonReading = digitalRead(rightButtonPin);

  // If the button is pressed (LOW) AND it was released (HIGH) last time we checked
  if (currentButtonReading == LOW && lastButtonState == HIGH) {
    ledState = !ledState; // Flip the state
    digitalWrite(yellowLedPin, ledState);
    Serial.println(ledState ? "Light ON" : "Light OFF");
    delay(50); // Small delay to prevent "bouncing"
  }

  lastButtonState = currentButtonReading; 
}
```

Add the function call to `loop()`:

```arduino
  handleManualLighting();
```

![[smartHouseCodingBehaviour.png]]
### Explanation

This code demonstrates a **State Toggle** logic combined with **Edge Detection**. Instead of the light being on only while the button is held down, this code allows a single press to flip the light from OFF to ON (and vice versa).

#### 1. Tracking State (The "Memory")

- **`ledState = !ledState;`**: This is the core logic. The `!` (NOT) operator takes the current boolean value (True or False) and flips it. This allows the Arduino to "remember" whether the light should be on or off even after the user lets go of the button.
- **`lastButtonState`**: This variable is crucial for **Edge Detection**. By comparing the `currentButtonReading` to the `lastButtonState`, the code can identify the exact moment the button transitions from "not pressed" to "pressed." Without this, the `loop()` would run so fast that a single finger press would flip the light state thousands of times per second.

#### 2. The Conditional Logic (`if` statement)

The `if` statement uses a **Logical AND (`&&`)** to check for two conditions simultaneously:

1. **`currentButtonReading == LOW`**: The button is currently being pulled to ground (pressed).
2. **`lastButtonState == HIGH`**: In the _previous_ frame of the loop, the button was not pressed.
- **Result:** The code inside the `{}` only runs once per click.

#### 3. Handling Hardware Noise (Debouncing)

- **`delay(50);`**: Real mechanical buttons are "noisy." When you press them, the metal contacts literally bounce against each other for a few milliseconds, sending dozens of ON/OFF signals to the Arduino. This small delay tells the processor to "ignore" those micro-bounces and wait for the signal to stabilize.

#### 4. The `loop()` and Function Structure

- **Encapsulation:** By placing the logic inside `handleManualLighting()`, the code follows good software engineering practices. It keeps the `loop()` clean and allows you to easily add other "robotic behaviours" (like sensors or motors) without cluttering the main execution path.
## 2. How-To Guides: Advanced Behaviours

_Task-oriented: Recipes for specific house features._

### Ambient Mood Behaviour (NeoPixels)

This behaviour allows the house to change its internal atmosphere using addressable LEDs.

**Requirements:** `#include <Adafruit_NeoPixel.h>`

Add the following code to the start of `main.cpp` to define the pins and NeoPixel object:
```arduino
#define NEOPIXEL_PIN 26
#define NUM_PIXELS 4

Adafruit_NeoPixel strip(NUM_PIXELS, NEOPIXEL_PIN, NEO_GRB + NEO_KHZ800);
```

![[smartHouseBehaviourAmbientMood1.png]]

Update `setup()` to configure the NeoPixel strip to initialise:

```arduino
strip.begin();
strip.show(); 
```

![[smartHouseBehaviourAmbientMood2.png]]

Include the behaviour to set the colours of the individual pixels.

```arduino
void setMoodBehaviour(int r, int g, int b) {
  for(int i=0; i<NUM_PIXELS; i++) {
    strip.setPixelColor(i, strip.Color(r, g, b));
  }
  strip.show();
}
```

> [!IMPORTANT] **Understanding the Buffer (`setPixelColor` vs `show`)** When you call `strip.setPixelColor()`, you aren't talking to the LED yet. You are updating a **"Buffer"** (a temporary list in the ESP32's memory). Think of it like painting a picture behind a curtain. The house only "sees" the changes when you call `strip.show()`, which pulls back the curtain and sends the whole buffer to the LEDs at once.

![[smartHouseBehaviourAmbientMood3.png]]

Update `loop()` to call the new function.

```arduino
setMoodBehaviour(0, 255, 0); // Set the NeoPixels to Green
```

![[smartHouseBehaviourAmbientMood4.png]]

#### Understanding RGB Values

See this page for more details: [[RGB Values]]

### Environmental Ventilation Behaviour (Servo Motor)

This behaviour automates the window to respond to internal conditions.

First, include the library required for servo motors on an ESP32 microcontroller.

```arduino
#include <ESP32Servo.h>
```

![[smartHouseBehaviourVentilation1.png]]

Update `setup()` to initialise the servo.

```arduino
void setup() {
  ESP32PWM::allocateTimer(0); 
  windowServo.attach(WINDOW_SERVO_PIN);
  windowServo.write(0); 
}
```


```
#define WINDOW_SERVO_PIN 5
Servo windowServo;

void windowBehaviour(bool open) {
  if (open) windowServo.write(90); 
  else windowServo.write(0);
}




```

#### Explanation: windowBehaviour()

This provides a breakdown of how the function operates, specifically focusing on the logic within the conditional block and the role of its input parameter.

##### 1. The Parameter

The **parameter** acts as a placeholder for the data that the function needs to perform its task.

- **Input:** When the function is "called," you pass an actual value (an argument) into this parameter.
- **Scope:** This variable exists only inside the function. It allows the function to be dynamic—instead of doing the same thing every time, it can process different data depending on what is passed in.

##### 2. The `if` Statement

The `if` statement is the "decision-maker" of the function. It evaluates a specific condition to determine which path the code should take.

##### How it Works:

1. **Evaluation:** The code inside the parentheses of the `if` statement is checked. It results in either `true` or `false`.
2. **The Branch:**
    - **If True:** The block of code immediately following (inside the curly braces `{}`) is executed.
    - **If False:** The computer skips that block entirely. If there is an `else` block, it runs that instead; otherwise, it simply moves to the next line of code after the function.

### Purpose in this Context:

In this specific function, the `if` statement likely guards against invalid data (like checking if the parameter is empty) or checks if a certain threshold has been met before proceeding with the main logic.

### Summary

By combining a **parameter** (the data) with an **if statement** (the logic), the function becomes a reusable tool that can intelligently handle different scenarios based on the input it receives.


## 3. Explanation: Managing Multiple Behaviours

_Understanding-oriented: The "Why" and the "How it works"._

### Modular Code Design

As your house gets smarter, your `loop()` function will become messy.

- **The Loop:** Should only contain high-level "orders" (e.g., `checkTemperature()`).
- **Custom Functions:** Contain the "low-level" details (e.g., exactly how many volts to send to the motor).

## 4. Style Guide & Standards

_Information-oriented: Keeping your code professional._

- **Variables/Functions:** `lowerCamelCase` (e.g., `isWindowOpen`)
- **Constants/Pins:** `UPPERCASE` (e.g., `FAN_PIN`)
- **Comments:** Every function must have a one-line comment explaining its purpose.
### Required Theory Links

- [[_Robotics and Mechatronics/1 - Building and Programming Circuits/_projects/Smart House/_topics/Variables and Data Types|Variables and Data Types]]
- [[_Robotics and Mechatronics/1 - Building and Programming Circuits/_projects/Smart House/_topics/Style Guide|Style Guide]]
- [[_Robotics and Mechatronics/1 - Building and Programming Circuits/_projects/Smart House/_topics/Algorithm Design - Sequence|Sequences]]
- [[_Robotics and Mechatronics/1 - Building and Programming Circuits/_projects/Smart House/_topics/Algorithm Design - Decisions|Decisions]]
- [[_Robotics and Mechatronics/1 - Building and Programming Circuits/_projects/Smart House/_topics/Algorithm Design - Loops|Loops]]
- [[_Robotics and Mechatronics/1 - Building and Programming Circuits/_projects/Smart House/_topics/Data Structures|Data Structures]]

# Level Up: Robotic Behaviours

Now that you have the basic smart home system running, it is time to expand its capabilities! A truly "smart" house doesn't just turn on a light; it exhibits **robotic behaviours**—reacting to its environment autonomously to keep its occupants safe and comfortable.

Use the additional sensors and actuators in your kit to programmed the following behaviours:

## The Sentinel Behaviour (Motion Sensor + Buzzer)

**The Goal:** Program a security behaviour that allows the house to "guard" itself, sounding an alarm if movement is detected while the system is armed.
- **Sensor:** PIR Motion Sensor.
- **Actuator:** Active Buzzer.
- **The Logic:** Use an `if` statement to check if the motion sensor pin reads `HIGH`. If it does, trigger the buzzer to beep in a pattern.

## The Homeostatic Behaviour (Temperature Sensor + DC Motor)

**The Goal:** Program a self-regulating behaviour to prevent the house from overheating. If the temperature rises above a certain threshold, a cooling fan should activate automatically to restore balance.
- **Sensor:** DHT11 Temperature Sensor.
- **Actuator:** DC Motor (with a fan blade).
- **The Logic:** Define a variable for your "Max Temperature" (e.g., 27°C). Use the `if` statement to compare the current sensor reading to that variable.

## The Phototactic Behaviour (Photoresistor + LED)

**The Goal:** Program a light-sensitive behaviour so the house "senses" the transition from day to night, activating porch lights only when it detects a lack of ambient light.
- **Sensor:** Photoresistor (LDR).
- **Actuator:** LED.
- **The Logic:** Read the analog value of the light sensor. If the value drops below a certain number (indicating darkness), enable the LED.

##  Programming Reflection

When you add these robotic behaviours, ask yourself:
1. **Variables:** What new names do I need to give these pins?
2. **Thresholds:** How do I decide what "too hot" or "too dark" looks like in code?
3. **Efficiency:** Can I use one `if` statement to check two conditions at once (like "if it is dark AND I am home")?

**Share your creation:** Once you've added a new behaviour, demonstrate it to a classmate and explain exactly how your `if` statement handles the new sensor data!
