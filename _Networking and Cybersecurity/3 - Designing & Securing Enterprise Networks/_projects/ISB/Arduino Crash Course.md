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
