---
tag: Robotics
tags: archived
---
# ESP32 Feather Project

[[Featherwings|Featherwings]]


## Software installation

### Jetbrains

#### Create Jetbrains Educational Account

Go to the following site and create a Jetbrains account **using your school Google Account.**

[Jetbrains](https://account.jetbrains.com/)

Once done, visit the following page and apply for a free educational account. 

[Jetbrains Education](https://www.jetbrains.com/community/education/#students)

#### Install Jetbrains Toolbox

After creating the Jetbrains account, download and install the Toolbox App. This tool manages the installation and configuration of the Jetbrains tool.

![[Untitled 26.png|Untitled]]

#### Install PHPStorm

Using the Jetbrains toolbox, Install PHPStorm. 

You can follow the video, here, but install PHPStorm instead.

[2020 07 19 - Install Pycharm Final.mp4](https://drive.google.com/file/d/1-2Z0MS-TXCvL807bcc8l4oCGx6GzIKd6/view?usp=drivesdk)

#### Clone Project

Open PHPStorm, and click the open for Version Control (or VCS). You will be required to sign into Github, then choose your repository from the list and press **Clone**.

This will open the project in PHPStorm.

![[Untitled 27.png|Untitled]]

### Visual Studio Code

If Visual Studio Code (VSCode) is not installed on your operating system, install it using the instructions here:

Window

[](https://code.visualstudio.com/download)

Installing it on Linux may be more complicated and particular to the specific installation of Linux. Some instructions can be found here

[](https://code.visualstudio.com/docs/setup/linux)

#### Install Extensions

Open VSCode and open the Extensions tab.

![[Untitled 25.png|Untitled]]

Search for **PlatformIO** and click on the Install button.

# PHP / MySQL Crash Course
    

# PHP, MySQL Crash Course

## Background Information

### PHP

PHP stands for **P**HP **H**ypertext **P**reProcessor and is an open-source, server-side scripting language. It is used to develop dynamic web applications, as well as create interactive and responsive websites. Due to its versatility, it has become one of the most widely-used programming languages on the web. It is well-known for its easy syntax, allowing both novice and experienced coders to write web applications quickly and effectively. In essence, PHP is an invaluable tool for web developers, providing them with the power to create robust, dynamic and interactive web applications.

In this project, you will be developing PHP page/s to interface between the Adafruit Feather and the MySQL database.

### MySQL

MySQL is a powerful and widely used **database management system**, designed to store and manage large amounts of data in an efficient and secure manner. It provides a range of features and tools that allows users to create, manage and maintain databases with ease, making it an ideal choice for businesses and organisations of all sizes. As it is open-source, it is highly customisable, allowing users to tailor the system to their specific needs and requirements. With its robust security and scalability, MySQL is an excellent choice for managing large-scale databases. 

You will be given a login to the database on the server. 

This login is shared by all users of the system, so be careful if you change anything!!

### CRUD

![[CRUD.jpeg|[https://www.atatus.com/glossary/crud/]]

[https://www.atatus.com/glossary/crud/](https://www.atatus.com/glossary/crud/)

**Create**, **Read**, **Update** & **Delete** (CRUD) are the standard operations for use with databases, especially with SQL statements using a relational data system such as SQLite or MySQL. 

You can read more on CRUD by accessing [this page](https://www.humio.com/glossary/crud/).

## System Overview

[https://docs.google.com/drawings/d/e/2PACX-1vQghkYq2rMikuPfnL4HrByHcnjMhT4yYoMRNa9HB2P7C-2QKNloAkr7s8ITbW-b6ZSIfvbpKvVkrOaT/pub?w=1440&amp;h=1080](https://docs.google.com/drawings/d/e/2PACX-1vQghkYq2rMikuPfnL4HrByHcnjMhT4yYoMRNa9HB2P7C-2QKNloAkr7s8ITbW-b6ZSIfvbpKvVkrOaT/pub?w=1440&amp;h=1080)

## Connect PHPStorm to the database

Open the project in PHPStorm and open the database tab.

![[Untitled 8.png|Untitled]]

Click the + icon to add a new database source. Select MariaDB from the dropdown list.

![[Untitled 9.png|Untitled]]

Enter the IP Address of the database server in the Host text box.

Enter the Username and password.

If the message appears to Download or upgrade drivers, Click that.

Click Test Connection.

Click Ok.

![[Untitled 10.png|Untitled]]

Once the connection has been established, click on the `1 of 3` status next to the database connection and then select **All Schemas**. 

![[Untitled 11.png|Untitled]]

You should then be able to view the databases associated with your logon.

## `config.php`

In order to manage the connection to the MySQL database, it makes sense to keep the details in one single location rather than in various files across the system.

Create a new PHP file called `config.php` in the root of the project.

![[SCR-20221128-taa.png]]

Copy this code into config.php.

You will need to change the values of the following variables:

`servername`

`username`

`password`

`dbname`

You will be given these details in class.

![[SCR-20221128-uvo-2.png]]

```php
<?php
session_start();

$servername = "10.76.43.63";
$username = "RC";
$password = "RC";
$dbname = "RC";
$errorCaught = false;

try {
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
	$errorCaught = true;
	echo "Error: " . $e->getMessage();
}

if (!$errorCaught) {
	echo "Database connection configured correctly, and database connection good.";
}

$conn = null;
?>
```

## `template.php`

`template.php` is the file that contains the HTML, PHP and any other information that is required for all pages throughout the site. 

This page will contain the code for the loading of `config.php`, the navigation bar, bootstrap etc.

Create a new PHP file called `template.php`. Replace the contents with this code.

The first line of this file loads the config.php code created earlier to establish the connection to the database.

```php
<?php require_once 'config.php'; ?>
<html>
<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
<!-- Navigation Bar -->
<nav class="navbar navbar-expand-sm navbar-light bg-light">
	<div class="container-fluid">
		<a class="navbar-brand" href="index.php">
			<img src="images/logo.png" alt="" width="80" height="80">
		</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
				aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="index.php">Home</a>
				</li>
			</ul>
			<?php if (isset($_SESSION["name"])) {
				echo "<div class='alert alert-success d-flex'><span>Welcome, " . $_SESSION["name"] . "<br><a href='logout.php'>Logout</a></span></div>";
			} else {
				echo "<div class='alert alert-info d-flex'><a href='index.php'>Sign In</a>";
			}
			?>
		</div>
	</div>
</nav>

<script src="js/bootstrap.bundle.js"></script>

<?php
function sanitise_data($data)
{
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

function outputFooter()
{
	date_default_timezone_set('Australia/Canberra');
	echo "<footer>This page was last modified: " . date("F d Y H:i:s.", filemtime("index.php")) . "</footer>";
}

?>
```

If you launch the page in the browser, you’ll see something like this.

![[SCR-20221128-tjf.png]]

### Explanation

The template page is complex because it covers a number of base tasks.

| 1 | Loads and executes code in `config.php` |
| --- | --- |
| 2 | Loads and enables access to the bootstrap CSS library (more later) |
| 3 | Bootstrap Navbar code. Currently only showing the link to the homepage. |
| 4 | Dynamic content in the navbar - if the user is not logged in the navbar shows a link to log in. If already logged in, the navbar welcomes that user. |
| 5 | Loads and enables access to the bootstrap javascript library. Primarily used for the automatic dropdown link for small screens. |
| 6 | Site-wide function to sanitise data. More later. |
| 7 | Site-wide function to output a standardised footer across pages. |

![[SCR-20221128-tl2-2.png]]

## `index.php`

The Index page will be the homepage that the users see when they first access your section of the site.

Create a new PHP file called `index.php`. Replace the contents with this.

```php
<?php include "template.php"; ?>
<title>Cyber City</title>

<h1 class='text-primary'>Welcome to our The Cyber City</h1>
```

Launch the page and you should see something similar to this:

![[SCR-20221128-ts2.png]]

## `registration.php`

The form code

```php
<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" enctype="multipart/form-data">
	<div class="container-fluid">
		<div class="row">
			<!--Customer Details-->

			<div class="col-md-12">
				<h2>Account Details</h2>
				<p>Please enter wanted username and password:</p>
				<p>User Name<input type="text" name="username" class="form-control" required="required"></p>
				<p>Password<input type="password" name="password" class="form-control" required="required"></p>

			</div>
		</div>
	</div>
	<input type="submit" name="formSubmit" value="Submit">
</form>
```

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$username = sanitise_data($_POST['username']);
	$password = sanitise_data($_POST['password']);
	$hashed_password = password_hash($password, PASSWORD_DEFAULT);
	//echo $username;
	//echo $hashed_password;

$sql = "INSERT INTO user (username, hashed_password, access_level) VALUES (:newUsername, :newPassword, 1)";
	$stmt = $conn->prepare($sql);
	$stmt->bindValue(':newUsername', $username);
	$stmt->bindValue(':newPassword', $hashed_password);
	$stmt->execute();
}
?>
```

## `login.php`

The login page will visually be very similar to the registration page, at this stage. The first part of the page can just be duplicated from `registration.php`. 

![[Untitled 12.png|Untitled]]

```php
<?php include "template.php"; ?>
<title>Cyber City - Login</title>

<h1 class='text-primary'>Login</h1>

<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" enctype="multipart/form-data">
	<div class="container-fluid">
		<div class="row">
			<!--Customer Details-->

			<div class="col-md-12">
				<h2>Account Details</h2>
				<p>Please enter wanted username and password:</p>
				<p>User Name<input type="text" name="username" class="form-control" required="required"></p>
				<p>Password<input type="password" name="password" class="form-control" required="required"></p>

			</div>
		</div>
	</div>
	<input type="submit" name="formSubmit" value="Submit">
</form>
```

And again, the first part of the PHP code from registration will be the same, namely collecting and sanitising the form data and searching for how many users of that user name are found in the database.

![[Untitled 13.png|Untitled]]

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$username = sanitise_data($_POST['username']);
	$password = sanitise_data($_POST['password']);

	$query = $conn->query("SELECT COUNT(*) as count FROM `user` WHERE `username`='$username'");
	$row = $query->fetch();
	$count = $row[0];

		if ($count > 0) {

		}

}
```

If a user has be found (i.e. if `$count > 0`) then the code will want to load all the details of that users record.

<aside>
‼️ A **record** in a database is a collection of data which is organised into fields and is stored within a table. Each record contains values which correspond to the fields in the table. These records are used to store and retrieve information, such as a user's name, address, and other personal data. Records are usually identified by a unique key or identifier, such as an ID number.

![[_images/Untitled 14.png|Untitled]]

</aside>

```php
$query = $conn->query("SELECT * FROM `user` WHERE `username`='$username'");
$row = $query->fetch();
```

![[_images/Untitled 15.png|Untitled]]

---

When this code is executed, `$row` will contain the record as an array and each field (or column) will be stored in the different elements in order. 

So, in this specific case, the fields will equate to these *indexes*.

![[_images/Untitled 16.png|Untitled]]

---

At this stage, the username is correct and valid, but the system still needs to confirm the password, which is hashed in the database. Luckily PHP has a helper function to compare a password in plain text with the hashed password. This function - `password_verify()` - will return `true` if the passwords match and `false` if not. 

<aside>
‼️ Note that the clear text password is being compared to `row[2]` which is the hashed_password field from the database.

</aside>

![[_images/Untitled 17.png|Untitled]]

```php
if (password_verify($password, $row[2])) {
}
```

If `password_verify()` returns true then the user has successfully logged on. Before proceeding with any other part of the process, you need to set some **session** variables.

<aside>
‼️ Session variables in PHP are variables that store user information for a specific session. They are stored in the server's memory for a certain amount of time and are used to track user activities during that session. Session variables can be used to store user-specific data, such as their name, preferences, or cart contents. They allow a website to remember user-specific data across multiple pages and even after a user has left the website and returned.

</aside>

For the purposes of this project, the only sessions variables needed (at this stage) are the `user_id`, `username` and `access_level`.

![[_images/Untitled 18.png|Untitled]]

```php
$_SESSION["user_id"] = $row[0];
$_SESSION["username"] = $row[1];
$_SESSION['access_level'] = $row[3];
```

Finally, add a catch for if the logon was unsuccessful.

![[_images/Untitled 19.png|Untitled]]

```php
else {
	// unsuccessful log on.
	echo "<div class='alert alert-danger'>Invalid username or password</div>";
}
```

Try it out!
![[commonBlocks#Commit & Push]]

## `logout.php`

Create a new page named `logout.php`. All this page needs to do at this stage is to clear all session variables from memory so that the user is now no longer logged in.

![[_images/Untitled 20.png|Untitled]]

```php
<?php
session_start();
session_destroy();
?>
```

The final line of code for the log out process should be to redirect the browser to another page.

![[_images/Untitled 21.png|Untitled]]

```php
header("Location:index.php");
```

## Template Update

Open `template.php` as a few changes need to be made due to a change in the project. 

In the nav bar, there are references to the session variable name, however this has not been set in the project so far. Change both instances of `name` to `username`. 

![[_images/Untitled 22.png|Untitled]]

Save and reload the login page in the browser and the navbar should now display the successfully logged in users username.

![[_images/Untitled 23.png|Untitled]]

Update the link for Sign in `template.php` to link to the correct page for login. 

![[_images/Untitled 24.png|Untitled]]

- Adafruit Feather Ecosystem


# Adafruit Feather & Featherwings

For this project you will be using, as a foundation, the following pieces of hardware

At the end of the process, you should have the following pieces of hardware

- Adafruit ESP32 Feather
- Digi-Key Temperatuire & Motion Wing
- Adalogger Featherwing
- DC Motor Featherwing
- MiniTFT Featherwing
- Battery Pack

You may use additional hardware for your specific implementation. This may include

- DC Motor / Pump
- Servo Motor
- LED Traffic Lights
- RGB LEDs
- etc.

![[IMG_4999.heic|IMG_4999.HEIC]]

- Processing Input and Output


# Simple Input → Output

In this example, you’ll be shown how to code a simple circuit to read a button press and turn an LED on.

<aside>
‼️ Your project requirements may be different, however the process of collecting the input and causing an output will be similar. You will need to research your input and output devices and how they are wired on the ESP32 Feather.

</aside>

## Button Press → LED

### Reading Button Press

### Turning the LED on and off

## Additional Modules

### Temperature

### DC Motor/s

### Real Time Clock (RTC)

### LCD Screen

### E-Paper / E-Ink Display

- Wiring Diagram


# ESP32 Feather Wiring Diagram

The starting wiring diagram, shown below, is included in the repository - `esp32.ckt`.

![[esp32.png]]

- Clone Project


# Join Github Classroom

Join the classroom via the supplied link.

Clone and Open the project.

Open PIO Home. Click on Libraries.

![[Untitled 44.png|Untitled]]

Search for and install the following libraries:

- **Adafruit BusIO** by Adafruit
- **Adafruit ST7735 and ST7789 Library** by Adafruit
- **RTCLib** by Adafruit
- **Adafruit Motor Shield V2 Library** by Adafruit
- **Adafruit ADT7410 Library** by Adafruit

For each library, choose the project and click Add.

![[Untitled 45.png|Untitled]]

![[Untitled 46.png|Untitled]]

Connect the Adafruit board to the computer via USB and upload the code to the board. 

<aside>
‼️ You may need to change the function to “upload” instead of build.

</aside>

![[_images/upload.gif|upload.gif]]

In the terminal window, you will see the code compiling and then uploading to the board.

![[_images/uploading.gif|uploading.gif]]

The onboard red LED will quickly flash to indicate the code and uploading is working.

- Network Access


# Network Access

## `sensitiveInformation.h`

First, open `sensitiveInformation.h` and confirm that the Settings are correct.

The Host, SSID and password should be configured for the classroom’s RoboRange network.

```arduino
const char* host = "RMS";
const char* ssid = "RoboRange";       // Wifi Network Name
const char* password = "Password01";  // Wifi Password
```

The serverURL variable should be set to the subject specific URL.

```arduino
String serverURL = "http://10.177.200.71/JEDI2023/dataTransfer.php";
```

Add a new URL called `eventLogURL` to direct the code to the url to store event data, such as “Door Open” etc.

```arduino
String eventLogURL = "http://10.177.200.71/JEDI2023/eventLog.php";
```

The last block of code should change to be specific to your module.

At this stage, leave the `apiKeyValue` and `moduleName` as is. Set the `user` variable to be your name.

```arduino
String apiKeyValue = "api";
String moduleName = "Temperature";
String user = "Ryan Cather";
```

At this end of the process, your `sensitiveInformation.h` file should appear similar to this.

![[Untitled 38.png|Untitled]]

$$
\utilde {\color{black} \fcolorbox{darkorange}{darkorange}  {Commit and Push to Github}}
$$

## Connecting to the network

Add the following additional include statements at the top of your code, *after* `#include <Arduino.h>`

```arduino
#include "WiFi.h"
#include <HTTPClient.h>
```

![[Untitled 39.png|Untitled]]

Add the following block of code to the `setup()` function.

This code will attempt to connect to the Wifi network with the credentials defined in `sensitiveInformation.h`. IT will then output the IP address to the Serial Monitor.

```arduino
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
  Serial.print("Connected to the Internet");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
```

![[Untitled 40.png|Untitled]]

- Event Logging to the Database


# Event Logging to the Database

Instead of logging events locally (to a SD card or similar), the Arduino can log events to a remote server through the PHP server.

Open `main.cpp` and add the following function near the top of the code.

<aside>
‼️ It needs to be stored *after* the include statements and  *prior* to `setup()`

![[_images/Untitled 41.png|Untitled]]

</aside>

```arduino
void logEvent(String eventData)
{
  if (WiFi.status() == WL_CONNECTED)
  {
	WiFiClient client;
	HTTPClient http;
	Serial.println("Before");
	// Your Domain name with URL path or IP address with path
	http.begin(client, eventLogURL);

	// Specify content-type header
	http.addHeader("Content-Type", "application/x-www-form-urlencoded");

	// Send HTTP POST request, and store response code
	http.addHeader("Content-Type", "application/json");
	String postJSONString = "{\"userName\":\"" + userName + "\",\"eventData\":\"" + eventData + "\"}";

	Serial.print("Debug JSON String: ");
	Serial.println(postJSONString);
	int httpResponseCode = http.POST(postJSONString);

	if (httpResponseCode > 0)
	{
	  Serial.print("HTTP Response code: ");
	  Serial.print(httpResponseCode);
	  Serial.println(".");
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
}
```

Add two events that are logged. The first in `setup()` to indicate the system has initialised. The second include in the main `loop()` as a test post.

```arduino
logEvent("System Initalised");
```

![[_images/Untitled 42.png|Untitled]]

Upload the code to the Adafruit ESP32 Feather and check the database to ensure that it’s being stored correctly.

![[_images/Untitled 43.png|Untitled]]

$$
\utilde {\color{black} \fcolorbox{darkorange}{darkorange}  {Commit and Push to Github}}
$$

- Sensor Data Logging to the Database


# Sensor Data Logging

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

![[_images/Untitled 3.png|Untitled]]

```arduino
#include "Adafruit_ADT7410.h"
// Create the ADT7410 temperature sensor object
Adafruit_ADT7410 tempsensor = Adafruit_ADT7410();
```

Initialise the temperature sensor in `setup()`. 

![[_images/Untitled 4.png|Untitled]]

```arduino
if (!tempsensor.begin())
  {
	Serial.println("Couldn't find ADT7410!");
	while (1)
	  ;
  }
```

After the include statements at the top of the file, add this new function to get and return the temperature recorded by the temperature sensor.

![[_images/Untitled 5.png|Untitled]]

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

![[_images/Untitled 6.png|Untitled]]

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

![[_images/Untitled 7.png|Untitled]]

```arduino
dataTransfer(apiKeyValue, userName, "Temperature", String(getTemperature()));
```

- Reading Data from the Server


# Reading Data From The Server

## Database Information

The project up to this point involves uploading data from the ESP32 to the PHP server and then stored in the database. 

The database tables are shown here for the project so far.

![[eventLog.png]]

A new table needs to be added which will store a command (LED on, LED off etc) as well as the module information.

This table needs to be created so that the ESP32’s can connect to the server to retrieve the correct data, with the PHP page confirming that the ESP32 is attempting to access the correct data.

Each ESP32 should only be able to access the specific command, and be denied access to another other ESP32’s data.

The new table - `moduleCommands` - will contain the fields to store data, so that ESPs must submit the correct actuator name and associated password before receiving the command. The PHP files will handle the logic of the process, the database tables simply stores the data.

The password is stored in `hashedPassword` . Passwords should never be stored in plain text in a database in case unauthorised users (bad actors) get access to the database. Hashing passwords involves encrypting the password prior to storing the password in the database. 

![[moduleCommands.png]]

# PHP Site

PHP is a **server side** scripting language. This means that PHP code runs on the server (not the client/browser) and delivers the necessary code to the client to display. 

For example, the server loads user information from the database and checks the username and password. If the password is correct, the browser is to display a message “login successful”. 

PHP co-exists with HTML and other Web Technologies. Unlike standard HTML, PHP requires a server to be running to process the PHP code.

PHP was created in 1994, so in terms of Programming Languages it is quite old, but it is very powerful and widespread.

PHP is used by itself but is also the main language in many other frameworks available, such as Wordpress and Laravel.

## Bootstrap

[Download Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/download/) and unzip the folder.

Copy the CSS and JS folder into the project.

![[Untitled 28.png|Untitled]]

## Site Configuration

Create a new php file in the project, named `config.php`. 

![[Untitled 29.png|Untitled]]

![[Untitled 30.png|Untitled]]

Replace the contents with the code shown.

This page will not be shown to the user at any stage, however contains all the details that are required to connect to the database. 

```php
<?php
session_start();
$servername = "10.177.200.71";
$username = "JEDI2023";
$password = "JEDI2023";
$dbname = "JEDI2023";
$errorCaught = false;

try {
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
	$errorCaught = true;
	$_SESSION['flash_message'] = "<div class='bg-danger'>The Database cannot be found: " . $servername . ". ".$e."</div>";
}
if (!$errorCaught) {
	//echo "Database connection configured correctly, and database connection good.";
}

//$conn = null;
?>
```

## Site Template

Create a new file `template.php`.

This php page will be used by all other PHP pages that are created for the website to offer a similar interface. 

![[Untitled 31.png|Untitled]]

```php
<?php require_once 'config.php'; ?>
<html>

<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
<!-- Navigation Bar -->
<nav class="navbar navbar-expand-sm navbar-light bg-light">
	<div class="container-fluid">
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
				aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item"><a class="nav-link" href="index.php">Home</a></li>
				<li class="nav-item"><a class="nav-link" href="moduleRegister.php">Register</a></li>
				<li class="nav-item"><a class="nav-link" href="moduleData.php">Module Data</a></li>
			</ul>
		</div>
		<?php
		if (isset($_SESSION["username"])) {
			echo "<div class='alert alert-success d-flex'><span>Welcome, " . $_SESSION["username"] . "<br><a href='logout.php'>Logout</a></span></div>";
		}
		?>
	</div>
</nav>
<?php
if (isset($_SESSION['flash_message'])) {
	$message = $_SESSION['flash_message'];
	unset($_SESSION['flash_message']);
	?>
	<div class="position-absolute bottom-0 end-0">
		<?= $message ?>

	</div>

	<?php
}
?>
<script src="js/bootstrap.bundle.js"></script>
<?php
function sanitise_data($data)
{
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

?>
```

## Registering Modules

Create a new PHP file - `moduleRegister.php` - and replace the contents with the code shown.

The code will create a new entry in the database table 

```php
<?php include "template.php";
/** @var $conn */

?>

<title>Module Register</title>

<h1 class='text-primary'>Please register a module</h1>
<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" enctype="multipart/form-data">
	<div class="container-fluid">

			<form>

				<div class="form-group">
					<label for="inputActuator">Actuator</label>
					<input type="text" class="form-control" name="inputActuator" id="inputActuator" aria-describedby="actuatorHelp" placeholder="Enter your module actuator.">
					<small id="actuatorHelp" class="form-text text-muted">This will be the output device (LED etc).</small>
				</div>
				<div class="form-group">
					<label for="inputCommand">Command</label>
					<input type="text" class="form-control" name="inputCommand" id="inputCommand" aria-describedby="commandHelp" placeholder="Enter starting command">
					<small id="commandHelp" class="form-text text-muted">This will be sent to the ESP32. Start simple, such as 0 or 1. </small>
				</div>
				<div class="form-group">
					<label for="inputPassword">Password</label>
					<input type="password" class="form-control" name="inputPassword" id="inputPassword" placeholder="Password">
				</div>

				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
	</div>
</form>

<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$password = sanitise_data($_POST['inputPassword']);
	$actuator = sanitise_data($_POST['inputActuator']);
	$command = sanitise_data($_POST['inputCommand']);
	$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// check username in database
	$query = $conn->query("SELECT COUNT(*) FROM moduleCommands WHERE actuator='$actuator'");
	$data = $query->fetch();
	$numberOfActuatorsWithThatName = (int)$data[0];

	if ($numberOfActuatorsWithThatName > 0) {
		$_SESSION['flash_message'] = "This actuator name has already been taken.";
	} else {
		$sql = "INSERT INTO moduleCommands (actuator, command, hashedPassword) VALUES (:newActuator, :newCommand, :newPassword)";
		$stmt = $conn->prepare($sql);
		$stmt->bindValue(':newActuator', $actuator);
		$stmt->bindValue(':newCommand', $command);
		$stmt->bindValue(':newPassword', $hashed_password);
		$stmt->execute();
		$_SESSION["flash_message"] = "Module Created";
		header("Location:index.php");

	}

}
?>
```

## Testing

Load the page in the browser and it should appear similar to the one shown. Enter some data and press submit.

![[Untitled 32.png|Untitled]]

Open the database table view in PHPstorm by opening the database tab and then double-clicking on `moduleCommands`. 

Ideally, if the files are all programmed correctly, the new module data should appear.

![[Untitled 33.png|Untitled]]

## JSON

JSON is a data format that is similar to a dictionary or key-value pair structure.

![[Untitled 34.png|Untitled]]

JSON, which stands for "JavaScript Object Notation," is like a special language that helps you organise and describe this data in a way that computers can easily understand.

Think of JSON as a recipe for computers. Just like a recipe lists ingredients and instructions for making a yummy dish, JSON lists pieces of information and how they relate to each other. These pieces of information are called "objects." Each object is like a container that holds different types of data, like text, numbers, or even more objects.

JSON is simple and easy to read, both for humans and computers. It's kind of like writing a story with different characters and their attributes. For example, if you're describing a person, you might use JSON like this:

```json
{
  "name": "Alice",
  "age": 16,
  "city": "New York",
  "hobbies": ["reading", "painting", "playing guitar"]
}

```

Here, we have an object that describes Alice. It includes her name, age, city, and hobbies. Her hobbies are stored as a list of activities.

This JSON "recipe" can be shared with other programs or even other people, and they can understand how the data is structured and use it for different purposes. It's like passing around the recipe for a cake so that anyone can bake the same delicious cake!

So, JSON is a way for computers to organise and talk about different pieces of information, just like you would when telling a story or following a recipe.

### Update the Arduino Code to use `ArduinoJSON` Library.

In your project, open the `platformio.ini` file and add the following to the bottom of the list of libraries - `bblanchon/ArduinoJson@^6.21.3`

This will allow the PHP site to return a JSON object to the ESP32 and have it extract the data.

Save the file. The project may have to load the library, which may take a minute or two.

![[Untitled 35.png|Untitled]]

Open `main.cpp`. Add the following include directive to load the library.

```cpp
#include "ArduinoJson.h"
```

![[Untitled 36.png|Untitled]]

The `dataTransfer()` function currently uploads data and receives a response, however the code doesn’t use that response at this stage. To change this, go do the `loop()` function and add `String payload` to the start of the dataTransfer function call.

![[Untitled 37.png|Untitled]]

Add the code shown to the end of `loop()` to extract and output the command data. This command variable will be sent back by the PHP server in JSON format, extracted from the database table.

```cpp
Serial.print("Payload from server:");
Serial.println(payload);
DynamicJsonDocument doc(1024);
//  Serial.println(deserializeJson(doc, payload));
DeserializationError error = deserializeJson(doc, payload);
if (error)
{
  Serial.print(F("deserializeJson() failed: "));
  Serial.println(error.f_str());
  return;
}
const char *command = doc["command"];
Serial.print("Command: ");
Serial.print(command);
```

$$
\utilde {\color{black} \fcolorbox{darkorange}{darkorange}  {Commit and Push to Github}}
$$

- Code Refactoring


# Code Refactoring

---

**What is code refactoring?**

Refactoring is making changes to the internal structure of code without changing its external behavior. This can make the code easier to read, understand, maintain, and extend.

Here are some examples of refactoring:

- Rename a variable to make its meaning clearer.
- Move a block of code to a separate method so that it can be reused.
- Split a large method into smaller methods so that it is easier to understand.
- Replace a complex expression with a simpler one.

Refactoring is a good practice to follow when you are developing code. It can help to improve the quality of your code and make it easier to work with in the future.

Here are some tips for refactoring code:

- Start small. Don't try to refactor too much code at once.
- Test your code after each change.
- Get feedback from other developers.

Refactoring is an ongoing process. As your code changes, you should periodically refactor it to keep it up to date.

*Generated by Google Bard.*

---

To allow the project to scale up, and add functionality easily, it’s time to move the temperature and LED functionality into it’s own function and have the loop() call it.

To easily do this, rename the loop function to `temperatureAndLED()` and then create a new `loop()` that calls it.

![[Robotics/_shared/_projects/Hotel Monitoring System/_images/Untitled.png]]

Add a short delay into `loop()`. This will give the ESP32 a regular amount of time where it is idle, allowing new code to be uploaded to it.

<aside>
‼️ A rule of thumb is to always add a short delay in the loop function. Otherwise the Arduino/ESP may be too ‘busy’ to allow the IDE to upload new code.

</aside>

![[Robotics/_shared/_projects/Hotel Monitoring System/_images/Untitled 1.png|Untitled]]

- Adding New Functionality


# Adding New Functionality

## Video Demonstration

<aside>
‼️ The exact process and code you’ll need to implement will depend on your specific requirements.

</aside>

[https://youtu.be/rPDmzrNgSn4](https://youtu.be/rPDmzrNgSn4)

## Step 1: Define function

Create a new function for the new functionality. 

In this example, the status of a button will be uploaded to the server, and the response will determine whether the fan will be turned on or not.

Decide the input sensor and the output actuator. 

![[_images/Untitled 47.png|Untitled]]

## Step 2: Libraries

Import the necessary libraries for your sensor and actuator. This will require researching the sensor and module you are attempting to use. 

Import the library/ies required using the Library option in the Platform IO home.

![[_images/Untitled 48.png|Untitled]]

### Alternatively…

Open `platformio.ini` and add the following libraries to the end of the list.

![[_images/Untitled 49.png|Untitled]]

```cpp

adafruit/Adafruit ST7735 and ST7789 Library@^1.10.3
adafruit/Adafruit seesaw Library@^1.7.3
adafruit/Adafruit GFX Library@^1.11.7
adafruit/Adafruit SSD1306@^2.5.7
adafruit/Adafruit Motor Shield V2 Library@^1.1.1
```

Step 3: Collect Input

## Step 4: Send Data to the Server and Receive Response

Reuse (copy) the code from `temperatureAndLED()` to upload the sensor data to the server and receive a response.

## Step 5: Affect Actuator

## Step 6: Test and test again

# Add new Local Functionality

Repeat the process above, however skip the step to upload the sensor data to the server and wait for a response.