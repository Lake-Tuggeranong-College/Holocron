---
isCurrent: true
needsUpdating: true
---
# Hardware

The hardware being used for this crash course are Arduino-based devices, meaning they can be programmed using the Arduino IDE and the Arduino language, but may not be specifically Arduino devices.

> [!info]- The 'main' Arduino devices is the Arduino Uno.
> ![[arduinoUno.webp]]

In this project, however, you will be using one of the following devices as required:

| Devices                     | Product Page                          | Tutorial                                                   | Highlights                                             |                           |
| --------------------------- | ------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------ | ------------------------- |
| Adafruit Feather Huzzah32   | https://www.adafruit.com/product/3405 | https://learn.adafruit.com/adafruit-huzzah32-esp32-feather | Wifi. Data communication using MQTT protocol.          | ![[featherHuzzah32.jpg]]  |
| Adafruit Feather RP2040 RFM | https://www.adafruit.com/product/5714 | https://learn.adafruit.com/feather-rp2040-rfm95            | Lora (**Lo**ng **Ra**nge)- Line of sight communication | ![[featherRP2040FRM.jpg]] |

![[IoT & Security Breaches (ISB) Project Overview#Project Infrastructure]]

The Feather devices will need to receive and transmit data, and translate that into something physical occurring in the Lego City.
# Arduino Language

The Arduino programming language is a simplified version of C++. While it is often referred to as its own "language," it is actually a set of C/C++ functions that can be compiled by a standard compiler.

## Example Code

Comparing Arduino to other languages, such as PHP, python etc. is interesting because they can live on opposite ends of the programming world. For instance, PHP is a **server-side scripting language** meant for handling data and generating web pages; Arduino is a **low-level language** meant for controlling physical electrons.

Here is how the "Blink" logic compares to the PHP concepts you already know.

### 1. The Execution Model (Loop vs. Request)

In PHP, your script typically runs when a user makes an **HTTP request**, executes from top to bottom, and then **dies** (terminates) once the page is served.

In Arduino, the code never stops.

- **PHP:** `Request -> Script Runs -> Script Ends`.
- **Arduino:** `Power On -> Setup Runs Once -> Loop Runs Forever`.

### 2. Variables vs. Physical Pins

In another language, such as PHP, you might define a variable like `$status = "active";` to track data. In Arduino, variables are often used to "nick-name" physical ports on the chip. You can also use variables to track data as required.


```c++
// PHP: $ledPin = 13;
int ledPin = 13; 
```

In Arduino, you don't use the `$` sign for variables, and you **must** declare the data type (like `int`, `float`, or `boolean`) because the Arduino has very limited memory compared to a web server.

### 3. Output: `echo` vs. `digitalWrite`

When you want to see a result in PHP, you `echo` or `print` string data to a browser. In Arduino, "output" means sending voltage to a wire.

- **PHP:** `echo "The light is on";` (Sends text to a screen)
- **Arduino:** `digitalWrite(ledPin, HIGH);` (Sends 5 volts to a physical pin)

### 4. The "Blink" Code: A PHP Mental Model

If we were to write the Arduino **Blink** logic in a PHP-style pseudo-code, it would look like this:

```php
<?php
// setup() equivalent
pinMode(13, 'OUTPUT');

// loop() equivalent
while (true) {
    send_voltage(13, '5V'); // digitalWrite(13, HIGH)
    sleep(1);               // delay(1000)
    
    send_voltage(13, '0V'); // digitalWrite(13, LOW)
    sleep(1);               // delay(1000)
}
?>
```

### Key Syntax Shifts for PHP Devs

|**Feature**|**PHP**|**Arduino (C++)**|
|---|---|---|
|**Variables**|`$name = "Gemini";`|`String name = "Gemini";`|
|**Concatenation**|`echo "Value: " . $val;`|`Serial.print("Value: "); Serial.print(val);`|
|**Arrays**|`$colors = ["red", "blue"];`|`String colors[] = {"red", "blue"};`|
|**End of Line**|Semicolon `;`|Semicolon `;` (Same!)|
# Transmitting Data from Module to MQTT Server

## Why use separate functions?

As you add more features to your ESP32 (like sensors, displays, and buttons), your `loop()` function can become very long and hard to read. By moving logic into a custom function like `sendPeriodicUpdate()`, you make your code:

- **Easier to debug:** You know exactly where the "sending" logic lives.
- **Reusable:** You can call that logic from different parts of your program if needed.

## Step-by-Step: Adding the Transmission Logic

Follow these steps to build the periodic update logic piece by piece. We will create a dedicated function above `void setup()` to handle this.

Two functions are to be created:

| Function               | Purpose                                                    |
| ---------------------- | ---------------------------------------------------------- |
| `sendPeriodicUpdate()` | Prepares data                                              |
| `sendDataToServer()`   | Accepts the data and transmits the data to the MQTT server |

### `sendPeriodicUpdate()`

#### Start with the Timer

First, we create the function and add the timing logic. Using `millis()` allows the ESP32 to keep running other tasks (like checking for messages) without pausing the whole program.

```arduino
void sendPeriodicUpdate()
{
  // 1. Timer: Check if 5 seconds (updateInterval) have passed since the last update
  unsigned long now = millis();
  if (now - lastUpdate > updateInterval)
  {
    lastUpdate = now; // Reset the timer
    
    // --- Next steps will go here ---
  }
}
```

#### Generate the Data

Now, inside that `if` statement, we generate the data we want to send. In this example, we are simulating a sensor by generating a random number.

```arduino
    // 2. Data: Generate a random "sensor" value between 0 and 100,000
    long randomNumber = random(0, 100001);
```

#### Define the Topic and Send

Finally, we tell the ESP32 where to send that number. This is where we use the specific "update" topic prefix.

```arduino
    // 3. Topic: Construct the special update topic
    // We use "updateChallenges/" so the server knows this is incoming data
    String updateTopic = "updateChallenges/" + String(mqttClient);
    
    // 4. Transmit: Use the helper function to send the data to the broker
    sendDataToServer(updateTopic, String(randomNumber));
```

### `sendDataToServer()`

In Step C, we called a function named `sendDataToServer()`. This is a helper function included in your template that handles the technical details of MQTT. Let's break down how this function is developed:

#### The Safety Connection Check

The first step is to ensure we are actually connected to the MQTT broker. If we try to send data while disconnected, the program might crash or behave unexpectedly.

```arduino
void sendDataToServer(String topic, String message)
{
  // 1. Connection Check: Only proceed if the MQTT client is connected
  if (client.connected())
  {
    // --- Logic for sending goes here ---
  }
  else
  {
    Serial.println("Send failed: MQTT not connected.");
  }
}
```

#### Debugging and Serial Feedback

Before sending the data over the air, we print the information to the Serial Monitor. This is crucial for debugging so you can see exactly what your ESP32 is attempting to send.

```arduino
    // 2. Debug: Print the topic and message to the Serial Monitor
    Serial.print("Sending message to topic [");
    Serial.print(topic);
    Serial.print("]: ");
    Serial.println(message);
```

#### Publishing the Data

The final step uses the `client.publish()` command. However, the library we use (PubSubClient) requires data in a format called a `char array` (or C-string). Since we used `String` objects for convenience, we use `.c_str()` to convert them right before sending.

```arduino
    // 3. Publishing: Convert Strings to C-strings and send to the broker
    client.publish(topic.c_str(), message.c_str());
```

### The Completed Functions

Once you put it all together, `sendPeriodicUpdate()` and `sendDataToServer()` should look like this:

![[mqttTransmitCode.png]]
### Call the function in `loop()`

Now, navigate to your `loop()`. We need to tell the Arduino to actually run the code we just wrote. Find the section for periodic updates and call your function there.

```
void loop()
{ 
  // 1. Handle Connection Persistence (Keep this part!)
  if (!client.connected())
  {
    // ... reconnection logic ...
  }

  // 2. Handle periodic data transmission
  // We call our function here so it checks the timer every single loop
  sendPeriodicUpdate(); 

  client.loop(); // Check for incoming messages and keep the connection alive
}
```

### Understanding the Update Topic

The most important part of this function is the **topic** we send the data to:

`"updateChallenges/" + String(mqttClient)`

### How the Server Works

We use this specific naming convention because the backend server is programmed with a "wildcard" listener.

- **The Rule:** The server accepts any topic that starts with `updateChallenges/`.
- **The Action:** When the server receives data on this topic, it immediately updates its database for that specific module (using the `mqttClient` name).
- **The Result:** The corresponding "output" topic (e.g., `challenges/Windmill`) will then automatically reflect this new value. Any device subscribed to the `challenges/` topic will see the update immediately.

### Summary Checklist

1. **Timer:** Does your function check `millis()` so it doesn't send data too fast?
2. **Data:** Are you generating or reading the value you want to share?
3. **Topic:** Does your topic start with `updateChallenges/`?
4. **Loop:** Did you remember to call `sendPeriodicUpdate();` inside your `loop()`?

## Next Steps: Real World Data

Generating random numbers is a great way to prove that your code works, but the real power of the ESP32 is connecting to the physical world.

**Your Challenge:** Replace the `randomNumber` logic with real temperature data using your **Adafruit Temperature & Motion FeatherWing**.

### Hints to get started:

1. **Include the Library:** You will need to add `#include "Adafruit_ADT7410.h"` at the top of your code.
2. **Initialise the Sensor:** Create an object for the sensor (e.g., `Adafruit_ADT7410 adt = Adafruit_ADT7410();`) and initialise it in `setup()` using `adt.begin()`.
3. **Read the Value:** Inside your `sendPeriodicUpdate()` function, replace the `random()` line with a call to read the temperature: `float temp = adt.readTempC();`.
4. **Convert to String:** Since `sendDataToServer` expects a `String`, you can convert your float like this: `String(temp)`.

### Resources:
- [Adafruit FeatherWing Guide](https://learn.adafruit.com/adxl343-adt7410-sensor-featherwing "null") - Learn how to wire and code the temperature and motion sensor.
- [Official Arduino String Reference](https://www.google.com/search?q=https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/ "null") - Learn more about converting different data types to Strings.
