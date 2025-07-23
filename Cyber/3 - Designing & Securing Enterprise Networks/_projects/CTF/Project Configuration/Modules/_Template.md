This shows the default code needed to create a new module using MQTT.

To implement a new module, create a new project using PlatformIO (extension within VSCode). 
Then:
1) replace the contents of `src/main.cpp` with the code shown,
2) add a new file called `sensitiveInformation.h` in the same `src` folder and replace contents with code shown.
3) Replace contents of `platform.ini` with the code shown.

After these steps, your project should appear similar to this:

![[moduleTemplate.png]]

# Next steps

Once the template is built and running on the ESP32, confirm it's reading updates from the subscribed mqttTopic. You will need to open the Serial Monitor for this.

After confirming that it works, add code in to read the sensor (if reuiqred) and to act on the updated data from the server (`(char)payload[i]`)

# Code 
## `sensitiveInformation.h`

```cpp
/*
 * Contains any sensitive Infomration that you do not want published to Github.
 * 
 * The SSID and Password variables will need to be changed if you’re connecting to another Wireless Access Point (such as at home).
 *
 * This file is supposed to be in the .gitignore
 * 
 */


// Wifi network
const char* ssid = "CyberRange";       // Wifi Network Name
const char* password = "CyberRange";  // Wifi Password

// MQTT client name
const char* mqttClient = "ESP32";

// MQTT Topic
const char* mqttTopic = "RegisteredModules/Servo"; // It's worth noting that an ESP32 can subscribe to more than 1 topic

// Replace with the MQTT broker IP address and port (default port for MQTT is 1883)
const char* mqttServer = "192.168.1.10";  
const int mqttPort = 1883;

```


## `main.cpp`

```cpp
/*
  This is a template for all ESP32's using MQTT within the CyberRange.
  Read through the steps and ensure everything is setup correctly.
  This is made such that programming physical functions is as easy as possible.
  Old CyberCitySharedFunctionality stuff has been removed.
*/

/*
  This works using the MQTT broker (mosquitto, installed on the CyberRange server), in combination with the database,
  and the databaseToMQTT.py script, setup as a service on the CyberRange server. The script detects any changes to the 
  'RegisteredModules/CurrentOutput' column, and sends them to the broker, using the information from the row of the change
  in order to send it to the associated topic (RegisteredModules/Module).

  This means that, if you register a module on the website with the 'Module' set as 'AnnoyingPeizo'. And write '4' to the
  'CurrentOutput' of the 'AnnoyingPeizo' row, the script will send to the topic: 
  
  'RegisteredModules/AnnoyingPeizo'

  The message: 
  
  '4'

  That message is sent to the ESP32 subscribed to that topic.

  that topic, is what needs to be put into the 'mqttTopic' const char* inside of sensitiveInformation.h, in order to associate
  the ESP32 with its respective database row within RegisteredModules.

  Example inside of sensitveInformation.h:

  const char* mqttTopic = "RegisteredModules/Servo";
  
  Additionally, its worth knowing: 
  
  The number in CurrentOutput is incrimented for each completion of the challenge, allowing for the ESP32 connected to
  that topic to activate. However, it is worth noting that strings can be put in the CurrentOutput, and be sent to the
  ESP32.
*/

// REQUIRED LIBRARIES, DONT REMOVE
#include <Arduino.h>
#include <WiFi.h>
#include <PubSubClient.h>
#include "sensitiveInformation.h" //ENSURE WIFI & MQTT IS CONFIGURED CORRECTLY

// ANY MISSING LIBRARIES SHOULD BE ADDED TO THIS PLATFORMIO PROJECT USING: PLATFORMIO HOME > LIBRARIES

//Follow the steps:

/*
  STEP 1. 
  DECLARE REQUIRED LIBRARIES, e.g:

  #include <ESP32Servo.h> // For servos.

  Do it below this comment
*/ 



/*
  STEP 2. 
  DECLARE REQUIRED PINS, e.g:

  int redLEDPin = 17; // Red LED pin.

  Do it below this comment
*/



/*
  STEP 2.1.
  SET pinMode() FOR DECLARED PINS IN setup() OR callback() FUNCTION.
  setup() is probably better, but callback() should work too.
  
  Go to the setup() function for additional instructions (Examples).
*/

/*
  STEP 3.
  PROGRAM THE callback() FUNCTION TO USE THE WIRED UP COMPONENTS AS DESIRED.

  callback() is below.
*/

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();

  // Example: turn on/off an LED based on the message received (this is specialised, if you dont need it dont use it.)
  //
  // if ((char)payload[0] == '1') {
  //   Serial.println("LED ON");
  //   digitalWrite(redLEDPin, HIGH);
  // } else {
  //   Serial.println("LED OFF");
  //   digitalWrite(redLEDPin, LOW);
  // }

  // Example: turn on/off an LED based on ANY message received (this is how this is intended to work, activating when this ESP32's respective
  // challenge is completed)
  //
  // if ((char)payload[0]) {
  //   Serial.println("LED ON");
  //   digitalWrite(redLEDPin, HIGH);
  //   delay(250);
  //   Serial.println("LED OFF");
  //   digitalWrite(redLEDPin, LOW);
  // }
}





// Declare the callback function prototype before setup()
void callback(char* topic, byte* payload, unsigned int length);

// MQTT client setup
WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  /*
    STEP 3. CONTINUED.
    DECLARE YOUR pinMode()'s below, e.g:
  
    pinMode(redLEDPin, OUTPUT);s
  */




  Serial.begin(9600);
  while (!Serial) {
    delay(10);
  }
  delay(1000);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi..");
  }
  Serial.println();
  Serial.print("Connected to WiFI");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
  
  // Setting up MQTT
  client.setServer(mqttServer, mqttPort);
  client.setCallback(callback);  // Set the callback function to handle incoming messages

  // Connecting to MQTT Broker
  while (!client.connected()) {
    Serial.println("Connecting to MQTT...");
    if (client.connect(mqttClient)) {
      Serial.println("Connected to MQTT");
      client.subscribe(mqttTopic);  // Subscribe to the control topic
      Serial.println("Connected to topic");
    } else {
      Serial.print("Failed with state ");
      Serial.print(client.state());
      delay(2000);
    }
  }
}

void loop() { // The loop function likely does not require change in the majority of circumstances.
    if (!client.connected()) {
      while (!client.connected()) {
        Serial.println("Reconnecting to MQTT...");
      if (client.connect(mqttClient)) {
        Serial.println("Reconnected to MQTT");
        client.subscribe(mqttTopic);
        Serial.println("Connected to topic");
      } else {
        Serial.print("Failed to reconnect, state ");
        Serial.print(client.state());
        delay(2000);
      }
    }
  }
  client.loop();  // Check for incoming messages and keep the connection alive
}
```

## `platformio.ini`

```
; PlatformIO Project Configuration File
;
;   Build options: build flags, source filter
;   Upload options: custom upload port, speed and extra flags
;   Library options: dependencies, extra library storages
;   Advanced options: extra scripting
;
; Please visit documentation for the other options and examples
; https://docs.platformio.org/page/projectconf.html

[env:featheresp32]
platform = espressif32
board = featheresp32
framework = arduino
lib_extra_dirs = ~/Documents/Arduino/libraries
lib_deps = 
	knolleary/PubSubClient@^2.8

```