---
isCurrent: true
needsUpdating: true
softwareVersion:
  - PlatformIO
---
> [!important] Prerequisite - [[Smart House Simulation Project - Behaviours]]

Phase 2: Connectivity elevates your smart home from an isolated controller to a fully networked IoT system by integrating your ESP32 with the **Cyber Range** network. Building on the foundational logic of Phase 1, you will implement Wi-Fi capabilities to enable a seamless two-way flow of information: streaming real-time sensor **telemetry** for remote monitoring and receiving external commands to trigger actuators. This transition transforms your hardware into a sophisticated digital node, allowing you to explore the complexities of data exchange and remote command-and-control within a live, integrated environment.

---

In Phase 1, you built the 'brain' of your house. In **Phase 2**, you will build the 'nervous system'. You will connect your ESP32 to the Cyber Range network to share live data and receive remote commands.

# 1. Tutorial: Your First Connection

_Learning-oriented: A hands-on exercise to get your house online._

In this exercise, you will modify your project to establish a connection to a Wi-Fi network and verify it via the Serial Monitor and the LCD screen.

## Organising Your Code

To keep your project tidy, we will move the connectivity logic into a separate file. In your PlatformIO project, create a new file in the `include` folder named `connectivity.h`.

1. **In `connectivity.h`**, add the following code:
    

```arduino
#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "CyberRange_SSID"; 
const char* password = "YourPasswordHere";
WebServer server(80); 

void setupWiFi(LiquidCrystal_I2C &lcd) {
  WiFi.begin(ssid, password);
  lcd.clear();
  lcd.print("Connecting...");
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Connected!");
  lcd.setCursor(0, 1);
  lcd.print(WiFi.localIP()); 
  
  Serial.println("");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());
}
```

2. **In `main.cpp`**, include your new file at the top:
    

```arduino
#include "connectivity.h"
```

3. **Initialise in `void setup()`**: Call the function you just created:
    

```arduino
void setup() {
  Serial.begin(115200);
  lcdScreen.init();
  lcdScreen.backlight();
  
  setupWiFi(lcdScreen); // Call the function from connectivity.h
}
```

# 2. How-to Guide: Hosting a Local Website

_Task-oriented: Displaying your telemetry on a webpage hosted on the device._

Now that the device is connected, we can create a simple webpage. Add this function to your `connectivity.h` file:

```arduino
void handleRoot() {
  // Note: You may need to pass sensor data as arguments to this function
  String html = "<html><body><h1>Smart House Telemetry</h1>";
  html += "<p>The system is online and monitored.</p>";
  html += "</body></html>";
  
  server.send(200, "text/html", html);
}
```

# 3. Advanced: Separate Webpages for Behaviours

As your smart house grows, a single page might become cluttered. You can create separate 'endpoints' (URLs) for specific behaviours.

## Example 1: Security Dashboard

Add this to `connectivity.h`:

```arduino
void handleSecurity() {
  String html = "<html><body><h1>Security Status</h1>";
  html += "<p>System Armed</p>";
  html += "<a href='/'>Back to Home</a>";
  html += "</body></html>";
  server.send(200, "text/html", html);
}
```

## Example 2: Environment Controls

Add this to `connectivity.h`:

```arduino
void handleEnvironment() {
  String html = "<html><body><h1>Climate Control</h1>";
  html += "<p>Monitoring Temperature...</p>";
  html += "<a href='/'>Back to Home</a>";
  html += "</body></html>";
  server.send(200, "text/html", html);
}
```

# 4. Manual Control: Overriding Automated Features

You can trigger actuators (like LEDs or motors) directly from your browser by creating control URLs.

## Example: Controlling the LED

Add these functions to `connectivity.h`:

```arduino
void handleLedOn() {
  digitalWrite(ledPin, HIGH); 
  server.send(200, "text/html", "<html><body><h1>LED ON</h1><a href='/'>Back</a></body></html>");
}

void handleLedOff() {
  digitalWrite(ledPin, LOW); 
  server.send(200, "text/html", "<html><body><h1>LED OFF</h1><a href='/'>Back</a></body></html>");
}
```

# 5. Registering Routes and Handling Clients

To make everything work, you must link the URLs to the functions and keep the server running.

**In `void setup()` (within `main.cpp`):**

```arduino
server.on("/", handleRoot);
server.on("/security", handleSecurity);
server.on("/climate", handleEnvironment);
server.on("/led/on", handleLedOn);
server.on("/led/off", handleLedOff);
server.begin();
```

**In `void loop()` (within `main.cpp`):**

```arduino
void loop() {
  server.handleClient(); // Essential: processes web requests
}
```

## Important Note on Logic

If you have code in your `loop()` that automatically turns the LED off based on a sensor, your manual override might be immediately undone. You may need to implement a "Manual Mode" variable to tell the ESP32 to ignore sensor data while you are in control.