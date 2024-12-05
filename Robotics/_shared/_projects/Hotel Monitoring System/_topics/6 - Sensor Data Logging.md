

<aside>
‼️ This process is extremely similar to Event Logging performed previously. The difference in this process is:
- A different URL
- More dynamic data (sensor data)
- More security issues
- Formatting the data into a JSON format.

</aside>

![[Robotics/_shared/_projects/Hotel Monitoring System/_images/Untitled 2.png|Untitled]]

[https://www.w3schools.com/js/js_json_intro.asp](https://www.w3schools.com/js/js_json_intro.asp)

## Temperature Sensor

Add the following to the include block of code at the very top of your `main.cpp`.

![[Robotics/_shared/_projects/Hotel Monitoring System/_images/Untitled 3.png|Untitled]]

```arduino
#include "Adafruit_ADT7410.h"
// Create the ADT7410 temperature sensor object
Adafruit_ADT7410 tempsensor = Adafruit_ADT7410();
```

Initialise the temperature sensor in `setup()`. 

![[Robotics/_shared/_projects/Hotel Monitoring System/_images/Untitled 4.png|Untitled]]

```arduino
if (!tempsensor.begin())
  {
	Serial.println("Couldn't find ADT7410!");
	while (1)
	  ;
  }
```

After the include statements at the top of the file, add this new function to get and return the temperature recorded by the temperature sensor.

![[Robotics/_shared/_projects/Hotel Monitoring System/_images/Untitled 5.png|Untitled]]

```arduino
float getTemperature()
{
  float temperatureValue;
  temperatureValue = tempsensor.readTempC();

  return temperatureValue;
}
```

---

To complete this process, the code needs to be updated to include a new function - `dataTransfer()` - which will take sensor data from any source (temperature, button etc) and upload it to the server. 

Copy the function into your code, placing it **above** `setup()`.

This code appears to be similar to previous code, however the major difference is the following

```arduino
http.addHeader("Content-Type", "application/json");
String postJSONString = "{\"api_key\":\""+apiKeyValue+"\",\"userName\":\""+userName+"\",\"moduleName\":\""+moduleName+"\",\"moduleData\":\""+dataToPost+"\"}";
```

This formats the data into a JSON structure, which essentially is a dictionary or key-value pair.

Why do this?

This allows the text to be uploaded in a single structure, and will eventually enable the server to respond in kind, by returning a JSON structure with information for the Arduino.

![[Robotics/_shared/_projects/Hotel Monitoring System/_images/Untitled 6.png|Untitled]]

```arduino
String dataTransfer(String apiKeyValue, String userName, String moduleName, String dataToPost)
{
  String serverResponse;
  if (WiFi.status() == WL_CONNECTED)
  {
	WiFiClient client;
	HTTPClient http;

	// Your Domain name with URL path or IP address with path
	http.begin(client, serverURL);

	// Specify content-type header
	http.addHeader("Content-Type", "application/x-www-form-urlencoded");

	// Send HTTP POST request, and store response code
	http.addHeader("Content-Type", "application/json");
	String postJSONString = "{\"api_key\":\""+apiKeyValue+"\",\"userName\":\""+userName+"\",\"moduleName\":\""+moduleName+"\",\"moduleData\":\""+dataToPost+"\"}";
	Serial.print("Debug JSON String: ");
	Serial.println(postJSONString);
	int httpResponseCode = http.POST(postJSONString);

	// Get the HTML response from the server.
	serverResponse = http.getString();
 
	if (httpResponseCode > 0)
	{
	  Serial.print("HTTP Response code: ");
	  Serial.println(httpResponseCode);
	}
	else
	{
	  Serial.print("Error code: ");
	  Serial.println(httpResponseCode);
	}
	// Free resources
	http.end();
  }
  else
  {
	Serial.println("WiFi Disconnected");
  }
  // Send an HTTP POST request every 30 seconds
  return serverResponse;
}
```

Call `dataTransfer()` with the results from the getTemperature function.

![[Robotics/_shared/_projects/Hotel Monitoring System/_images/Untitled 7.png|Untitled]]

```arduino
dataTransfer(apiKeyValue, userName, "Temperature", String(getTemperature()));
```
