---
isCurrent: false
softwareVersion:
  - TinkerCAD
needsUpdating: true
---
# Objective

Create a circuit that flashes an LED light on and off using code.

Platform: Autodesk Tinkercad (Web-based Simulator)

# Project: The "Hello World" of Electronics


In the programming world, the first thing you learn is how to print "Hello, World" on a screen. in Robotics and Engineering, the equivalent is the **Blink Sketch**—making a light flash. It proves you have control over the hardware.

## Part 1: The Setup

Before we code, we need to build our virtual machine.

1. **Log in:** Go to [tinkercad.com](https://www.tinkercad.com/) and sign in. Sign in with Google, using your schoolsnet account.
2. **Create:** On the dashboard, click **+ Create** and select **Circuit**.
3. **The Workspace:** You will see a blank workspace with a component menu on the right.

## Part 2: Building the Circuit

We could use the tiny light attached to the board (Pin 13), but real engineers build their own circuits. We are going to wire an external LED.

### 1. Gather your Components

Drag the following parts from the right-hand menu into the main workspace:

- **1 x Arduino Uno R3** (The brain)
- **1 x Breadboard Small** ( The prototyping area)
- **1 x LED** (The output)
- **1 x Resistor** (To protect the LED)

### 2. Wiring It Up

Follow these connections carefully. In Tinkercad, you "wire" by clicking one pin and clicking the destination pin.

1. **Grounding:** Click the **GND** pin on the Arduino and connect it to the **Negative (-)** rail (the blue line) on the Breadboard. Change the wire color to **Black** (standard for ground).
2. **Placing the LED:** Plug the LED into the main area of the breadboard.
    - _Note:_ The **Anode** (bent leg) is Positive (+). The **Cathode** (straight leg) is Negative (-).
3. **The Resistor:** Connect the Resistor to the **Cathode** (straight leg) of the LED, and plug the other end into the **Negative (-)** rail.
    - _Why?_ An LED has almost zero resistance. If you plug it directly into power, it will burn out. The resistor limits the flow of electricity.
    - _Value:_ Click the resistor and change the resistance to **220 ohms** ($\Omega$).
4. **The Signal:** Connect the **Anode** (bent leg) of the LED to **Pin 13** on the Arduino. Change this wire color to **Red**.

---

## Part 3: The Code

Now that the hardware is ready, we need to tell the "Brain" what to do.

1. Click the **Code** button in the top right corner.
2. By default, it shows "Blocks." Click the dropdown and select **Text**.
3. Click **Continue** when the warning pops up. You are now programming in **C++**.

Delete the default code and type (or copy) this exactly. Pay attention to capitalization and semi-colons!

```arduino
// The Setup function runs once when you turn the board on
void setup() {
  // We are telling the Arduino that Pin 13 is for OUTPUT (sending power out)
  pinMode(13, OUTPUT);
}

// The Loop function runs over and over again forever
void loop() {
  digitalWrite(13, HIGH);  // Turn the LED ON (HIGH voltage level)
  delay(1000);             // Wait for 1000 milliseconds (1 second)
  digitalWrite(13, LOW);   // Turn the LED OFF (LOW voltage level)
  delay(1000);             // Wait for 1000 milliseconds (1 second)
}
```

---

## Part 4: Run the Simulation

1. Click the green **Start Simulation** button in the top right.
2. Look at your breadboard. If you wired it correctly, the red LED should be flashing on and off every second!
3. Click **Stop Simulation** to make changes.

---

## Part 5: Understanding the Logic

As an engineer, you need to know _why_ it works. Here is the breakdown:

- **`void setup()`**: This is your initialisation. Just like checking your mirrors before driving a car, this sets the conditions before the machine starts running.
- **`pinMode(13, OUTPUT)`**: This opens the gate. It tells the Arduino, "Hey, we are going to send electricity _out_ of Pin 13, not read information _in_."
- **`void loop()`**: This is the heartbeat of the Arduino. It executes the commands inside top-to-bottom, then immediately jumps back to the top and starts again.
- **`digitalWrite(13, HIGH)`**: This sends 5 Volts of power to Pin 13.
- **`delay(1000)`**: The Arduino is incredibly fast. Without this pause, it would turn the light on and off so fast your eyes couldn't see it blinking. Note: $1000 \text{ milliseconds} = 1 \text{ second}$.
    

---

## Challenge: Make it an S.O.S.

Now that you have the basics, try to hack the code to signal S.O.S. (Save Our Souls).
**The Pattern:** 3 short blinks, 3 long blinks, 3 short blinks.

**Hint:**
- Short blink: `delay(200)`
- Long blink: `delay(1000)`