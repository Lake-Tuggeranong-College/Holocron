Open TinkerCAD and create the following circuit.

![[tinkerCADStarterCircuit.png]]

# Code

```arduino
// C++ code
//
/*
  This program blinks pin 8 of the Arduino (the
  built-in LED)
*/

#define greenLED 12
#define redLED 7
#define buttonPin 2
#define button2Pin 3
#define pirPin 4

int buttonState = 0;

void setup()
{
  Serial.begin(9600);
  pinMode(greenLED, OUTPUT);
  pinMode(redLED, OUTPUT);
  pinMode(buttonPin, INPUT);
  pinMode(button2Pin, INPUT);
  pinMode(pirPin, INPUT);
}

void loop()
{
  buttonRead();
  button2Read();
  spotlight();
  delay(100);
}

void LEDFlash() {
  // turn the LED on (HIGH is the voltage level)
  digitalWrite(greenLED, HIGH);
  digitalWrite(redLED, LOW);

  delay(1000); // Wait for 1000 millisecond(s)
  // turn the LED off by making the voltage LOW
  digitalWrite(greenLED, LOW);
  digitalWrite(redLED, HIGH);

  delay(1000); // Wait for 1000 millisecond(s)
}


void buttonRead() {
  buttonState = digitalRead(buttonPin);
  
  if (buttonState == HIGH) {
    digitalWrite(greenLED, HIGH);
    
  } else {
    digitalWrite(greenLED, LOW);
  	digitalWrite(redLED, LOW);
  }
}


void button2Read() {
  buttonState = digitalRead(button2Pin);
  
  if (buttonState == HIGH) {
    digitalWrite(redLED, HIGH);
    
  } else {
    digitalWrite(greenLED, LOW);
  	digitalWrite(redLED, LOW);
  }
}

void spotlight() {
  int pirState = digitalRead(pirPin);
  Serial.println(pirState);
}




```

# Arduino Programming Tutorial: Understanding Inputs and Outputs

This tutorial explores a C++ Arduino sketch designed to control LEDs using buttons and a PIR (Motion) sensor. Understanding this code is the first step in mastering **Embedded Systems**—where software meets physical hardware.

## Pre-processor Directives (`#define`)

At the very top of the code, you see several lines starting with `#define`.

```
#define greenLED 12
#define redLED 7
#define buttonPin 2
```

In programming, these are called **Macros** or **Pre-processor Directives**. Before the code is even compiled, the computer goes through and replaces every instance of the word `greenLED` with the number `12`.
- **Why use this?** It makes the code **readable**. Instead of remembering that the green LED is on Pin 12, you can just use its name. Furthermore, it makes **refactoring** much easier. If you decide to move the green LED to Pin 13, you only have to change the number in one place (the `#define` line) rather than searching through hundreds of lines of code to update every instance of the number 12.

## Variables and State

```
int buttonState = 0;
```

An `int` (Integer) is a **Data Type** used to store whole numbers. In this code, `buttonState` acts as a "memory slot" to keep track of whether a button is currently being pressed (1/HIGH) or not (0/LOW).

To understand variables in more depth, consider these three concepts:

| Concept          | Explanation                                                                                                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Declaration**  | When you write `int buttonState`, you are telling the Arduino to set aside a small piece of its RAM (Random Access Memory) to hold a number.                                        |
| **Assignment**   | The `=` symbol is the **Assignment Operator**. It doesn't mean "equals" in the mathematical sense; it means "take the value on the right and store it in the variable on the left." |
| **Global Scope** | Because `buttonState` is defined at the very top (outside of any curly braces), it has **Global Scope**. This means every function in your programme can see it and change it.      |

## The Bare Minimum: `setup()` and `loop()`

Every Arduino programme (often called a **sketch**) must have two specific functions to function correctly: `setup()` and `loop()`. Even if you don't have any code to put inside one of them, the function itself must exist in the file.

1. **setup()**: This is where you prepare the board.
2. **loop()**: This is where the main action happens.

If you delete one of these, the **Compiler** will give you an error because it doesn't know how to start or run the programme.

## The `setup()` Function

The `setup()` function is a **Built-in Function** that runs exactly **once** when the Arduino is powered on or reset.

- **Serial.begin(9600):** This initializes **Serial Communication**. It opens a data "pipeline" between the Arduino and your computer at a speed of 9600 bits per second (baud rate), allowing you to see sensor data on your screen.
- **pinMode():** This configures a specific pin to behave either as an **INPUT** (receiving data, like a sensor) or an **OUTPUT** (sending power, like an LED).

## The `loop()` Function

The `loop()` is the "heart" of the programme. It is an **Infinite Loop**, meaning it executes the functions inside it over and over again until the power is disconnected.

Inside this loop, we see **Function Calls**:

```
buttonRead();
button2Read();
spotlight();
delay(100);
```

Rather than writing all the logic in one place, we call separate functions to keep the code organised and modular.

### Why is Modularity a Best Practice?

Breaking your code into smaller functions (Modularity) is a fundamental concept in software engineering for several reasons:

- **Abstractions:** In the `loop()`, you can see exactly what the programme does (reads buttons, runs a spotlight) without getting distracted by the "how." It creates a high-level "To-Do" list.
- **Easier Debugging:** If the green LED isn't working, you know exactly which function to check (`buttonRead`) rather than scanning one giant list of code.
- **Reusability:** If you wanted to check the button ten different times, you just call the function name again instead of re-typing the logic.
- **Collaboration:** In professional environments, different programmers can work on different functions simultaneously without interfering with each other's work.

## Custom Functions & Logic

Let’s look at how the code makes decisions.

### Digital Reading and Writing

Inside `buttonRead()`, we see:

```
buttonState = digitalRead(buttonPin);
```

- **digitalRead:** This checks for a **Binary State**. Since it is "Digital," it can only be `HIGH` (5 Volts) or `LOW` (0 Volts).
- **digitalWrite:** This command tells the Arduino to send power (`HIGH`) or cut power (`LOW`) to a pin.

### Conditional Logic (If/Else)

The code uses **Selection Statements** to decide what to do:

```
if (buttonState == HIGH) {
    digitalWrite(greenLED, HIGH); // Turn on LED if button is pressed
} else {
    digitalWrite(greenLED, LOW);  // Turn off LED if button is released
}
```

The `==` is a **Comparison Operator**. It checks if the current state of the button matches the value "HIGH".

## The PIR Sensor (`spotlight`)

The `spotlight()` function introduces **Debugging**:

```
void spotlight() {
  int pirState = digitalRead(pirPin);
  Serial.println(pirState);
}
```

- **Local Variable:** `pirState` is created inside this function, meaning it only exists while this function is running. This is different from the global `buttonState`. Once the function finishes, `pirState` is erased from memory.
- **Serial.println:** This sends the sensor's value to the **Serial Monitor** on your computer. This is essential for troubleshooting (debugging) to see if your motion sensor is actually detecting anything    

## Timing (`delay`)

You will notice `delay(1000)` or `delay(100)`.

- **Units:** The value is in **milliseconds** (1000ms = 1 second).
- **Blocking Code:** Note that `delay()` "freezes" the processor. While the Arduino is delaying, it cannot read buttons or sensors. In professional programming, we eventually move away from `delay()` to allow for "multitasking."

## Technical Summary

| **Term**        | **Meaning**                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Syntax**      | The set of rules (like semicolons and braces) that define a correctly structured programme.                                                     |
| **Logic Level** | Refers to `HIGH` or `LOW` signals in digital electronics.                                                                                       |
| **Function**    | A named block of code that performs a specific task.                                                                                            |
| **Parameter**   | The information you pass into a function (e.g., the `12` in `pinMode(12, OUTPUT)`).                                                             |
| **Refactoring** | The process of restructuring existing computer code without changing its external behaviour, usually to improve readability or maintainability. |
| **Scope**       | The region of a programme where a variable is defined and accessible (e.g., Global vs. Local).                                                  |
| **Compiler**    | Software that translates your C++ code into machine code that the Arduino hardware can understand.                                              |
| **Modularity**  | The practice of dividing a programme into separate, independent sub-programmes (functions).                                                     |