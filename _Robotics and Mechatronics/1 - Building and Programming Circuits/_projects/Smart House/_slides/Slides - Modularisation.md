---
theme: simple
highlightTheme: zenburn
css: css/holocronSlides.css
isCurrent: true
needsUpdating: true
---
# Modularisation & Abstraction

AKA Functions, Modules, Subroutines

---
# What is Modularisation?

*   Breaking down a complex problem into smaller, manageable pieces.
*   Each piece (a module) performs a specific task.
*   Modules are then combined to achieve the overall goal.
*   Think of it like building with LEGOs – each brick has a purpose, and you combine them to create something bigger.
*   **Abstraction:** Hiding complex details and presenting a simplified interface.  Modules provide an abstraction, allowing you to focus on *what* they do, not *how* they do it.

--

# Arduino Example - LED Blink

*   Let's say we want to make an LED blink.
*   **Without Modularisation:** We might write a huge block of code to set the pin, delay, and then reset the pin. It's messy and hard to understand.
*   **With Modularisation:** We can create separate modules.

--
# Modular Code Example (Arduino)

```arduino
// Module 1: LED Control
void setupLED() {
  pinMode(LED_BUILTIN, OUTPUT);
}

// Module 2: Blink Logic
void blinkLED() {
  while (true) {
    digitalWrite(LED_BUILTIN, HIGH);
    delay(1000);
    digitalWrite(LED_BUILTIN, LOW);
    delay(1000);
  }
}

void setup() {
  setupLED();
  blinkLED();
}
```

note:
*   `setupLED()`: Sets the LED pin as output.
*   `blinkLED()`:  Controls the blinking sequence.
*   `setup()`: Calls both modules.

---

# Benefits of Modularisation

| Quality             | Description                                     | Benefits                                                    |
| ------------------- | ----------------------------------------------- | ----------------------------------------------------------- |
| **Readability**     | Easy to understand the code's logic.            | Reduced cognitive load, faster comprehension                |
| **Maintainability** | Easy to fix bugs and add new features.          | Lower long-term costs, quicker updates                      |
| **Reusability**     | Modules can be used in other projects.          | Reduced development time, consistent code                   |
| **Testability**     | Individual modules can be tested independently. | Faster bug detection, higher confidence in code             |
| **Abstraction**     | Hiding complex code.                            | Focus on *what* the code is doing, not *how* it's doing it. |

--

![[functionsDryVsWet.png]]

---

# Understanding Cohesion & Coupling

| Feature      | Description                                           | Desired Outcome | Justification                                                         |
| ------------ | ----------------------------------------------------- | --------------- | --------------------------------------------------------------------- |
| **Cohesion** | How closely related the elements within a module are. | High            | The `blinkLED()` module is solely responsible for blinking the LED.   |
| **Coupling** | How dependent modules are on each other.              | Low             | The `setupLED()` and `blinkLED()` modules are relatively independent. |

---

# Variable Scope

*   **Scope:**  The region of code where a variable is accessible.
*   **Global Scope:** Variables declared outside of any function are accessible from anywhere in the program. (Generally avoided for maintainability)
*   **Local Scope:** Variables declared inside a function are only accessible within that function.

--

# Scope Example

```arduino
void myFunction() {
  int x = 10; // Local scope - only accessible within myFunction
  Serial.println(x);
}

void setup() {
  myFunction(); // Output: 10
  // Serial.println(x); // Error: x is not defined
}
```

*   `x` is declared within `myFunction`.
*   It's only accessible inside `myFunction`.
*   Trying to access `x` outside of `myFunction` results in an error.

---

# Passing Data: Parameters and Arguments

*   **Parameters:** Variables listed in the function's definition. They act as placeholders for data that the function *expects* to receive.  Think of them as instructions for what the function needs.
*   **Arguments:** The actual values passed to the function when it's called. They are the real data that gets used inside the function.

**Difference:** Parameters are *declared*, arguments are *provided*.

--

# Passing Data Example
```arduino
void printMessage(String message) { // 'message' is a parameter
  Serial.print(message);
}

void setup() {
  String myMessage = "Hello, World!";
  printMessage(myMessage); // "myMessage" is an argument
}
```
In this example:
*   `message` is the parameter – it tells `printMessage` that it needs a string.
*   `myMessage` is the argument – it's the actual string value that's passed to the function.

--

# Returning Data

- Function can return data to where they're called from.
- Use the `return` keyword in the function
- The function declaration needs to specify the data type being returned

--

# Returning Data example

```arduino
// This function multiplies ANY number by 2 and returns it
int doubleValue(int inputNumber) {
  int result = inputNumber * 2;
  return result; 
}

void setup() {
  Serial.begin(9600);
}

void loop() {
  // REUSE: Calling the function directly inside the print statement
  Serial.println(doubleValue(10));  // Returns 20
  Serial.println(doubleValue(500)); // Returns 1000

  delay(2000);
}
```

---
# Glossary

| Concept         | Definition                                                           | Key Characteristics                                  |
| --------------- | -------------------------------------------------------------------- | ---------------------------------------------------- |
| **Abstraction** | Hiding complex details and presenting a simplified interface.        | Simplifies complexity, focuses on essential features |
| **Cohesion**    | How closely related the elements within a module are                 | Strong internal relationships, focused purpose       |
| **Coupling**    | How dependent modules are on each other                              | Weak external dependencies, promotes modularity      |
| **Parameter**   | A variable listed in a function's definition (a placeholder).        | Defines expected input for a function                |
| **Argument**    | The actual value passed to a function when it's called.              | Provides the actual data for the function            |
| **Scope**       | The region of code where a variable is accessible (global or local). | Determines variable visibility and lifetime          |

note:
The goal is to have HIGH cohesion and LOW coupling.

---

# Questions?

If you have any questions, please ask!

![[contactDetails.png]]





