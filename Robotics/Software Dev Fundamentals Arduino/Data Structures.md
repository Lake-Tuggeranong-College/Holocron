---
tag: Robotics
---

![[Theory#Data Structures]]


# Arduino Implementation

## Arrays

Arrays in Arduino are treated as standard variables, made up of other types. It’s important to note that in Arduino, the arrays are declared with a single data type, meaning that you cannot mix data types within the elements.

<aside>
💡 In Arduino, Array indexes start at 0. If your array has 5 elements, the maximum index is 4.

</aside>

### Declaring Arrays

Declaring arrays can be declared in a number of approaches in Arduino, much like other C-based languages. 

Here are the options you have:

```arduino
int myInts[6];                          // 6 Element array, with null as each element. 5 is maximum index. 
int myPins[] = {2, 4, 8, 3, 6};         // 5 Element array, initialised with indicated values
int mySensVals[5] = {2, 4, -8, 3, 2};   // Mixture of the two previous options.
char message[6] = "hello";              // An array of chars, similar to a string.
```

If you know how many elements you will need, you can declare an empty array of *n* elements. When an array is declared without the initial values, each element is `null`.

### Accessing Array Elements

After declaring arrays, you can access individual elements by indicating the array by using its name, and then indicating the index within square brackets - `[]`. For example: `myInts[0] = 5;`

### Array Example

```arduino
int arrayExample[10];

void setup() {
  Serial.begin(9600);
  delay(100);
  for (int index = 0; index < 10; index++) {
	arrayExample[index] = index * 10;           // populates the array with 0, 10, 20, 30 etc.
  }
  delay(100);

  for (int index = 0; index < 10; index++) {
	Serial.println(arrayExample[index]);
  }
}

void loop() {
  // Nothing to see here...
  return;
}
```

![[Screen_Shot_2022-01-08_at_10.15.29_pm.png|Screen Shot 2022-01-08 at 10.15.29 pm.png]]

## Key Value Pair

Unlike C++, Arduino does not have the native ability to implement dictionaries. C++ refers to these structures as *maps*, although they are the same thing. This is due to the processing power and memory requirements for this structure, and the Arduino board does not have enough resources.

# Practical Exercises

<aside>
🏁 **Goal**

In this task, you’ll simplify the logic of the bank alarm by utilising the strength of arrays. The functionality of the circuit will not change much at this stage, however the code will be arguably more efficient.

</aside>

## `readPotentiometer()`

In order to allow the array modifications to function correctly, a small modification of the readPotentiometer function is required. So far, the other sensor functions return `true` or `false`, whereas this function returns an integer value. To standardise the functions return data types, this function needs to be modified to return a boolean.

Change the return type to boolean.

![[Untitled 55.png|Untitled]]

Add a `if` statement which will decide to return `true` if the potentiometer value is > 511 or `false` if the value is ≤ 511.

![[Untitled 56.png|Untitled]]

```arduino
if (potValue > 511) {
  return true;
} else {
  return false;
}
```

## `triggerAlarm()`

Open the circuit. In `triggerAlarm()`, define an array to hold the sensor data in an array. Call this variable `alarmSensors`. As this array will hold 3 values of sensor data, then declare it as having 3 elements.

![[Untitled 57.png|Untitled]]

```arduino
boolean alarmSensors[3]; // storage of sensor data
```

Continue to modify the `triggerAlarm()` function to use this array. Instead of storing the responses to the various functions into separate variables - `potTrigger`, `pirTrigger`, and `sonarTrigger` - the responses can be stored in the array.

![[Untitled 58.png|Untitled]]

### Interlude - `debugSensors()`

As the storage of sensor data has changed, this will necessitate the changing of `debugSensors()` to use the `alarmSensors`array instead of individual variables.

![[Untitled 59.png|Untitled]]

```arduino
void debugSensors(boolean sensorData[3]) {
  Serial.print("The potentiometer value is :"); 
  Serial.print(sensorData[0]);
  Serial.print(". The PIR Reads:");
  Serial.print(sensorData[1]);
  Serial.print(". The Sonar Reads:");
  Serial.println(sensorData[2]);
}
```

### Continuation of `triggerAlarm()`

Update the function call to `debugSensors()` to pass the array. 

![[Untitled 60.png|Untitled]]

```arduino
debugSensors(alarmSensors);
```

To future-proof the code for this section, use a loop to add all the elements, without knowing how long the array is.

To do this, iterate over the array elements, adding onto the `arraySum`. 

<aside>
‼️ `sizeof()` returns the number of bytes of memory that the array takes, which is why the size of the array has to be divided by how much space the individual elements take up.
For a simplistic view of it, let’s say the array is taking 6 bytes of memory. The size of the first individual (and therefore every other) element is 2 bytes. 
6/2 = 3, therefore the array is 3 elements long.

</aside>

![[Untitled 61.png|Untitled]]

```arduino
int arraySum=0;
int lengthOfArray = sizeof(alarmSensors)/sizeof(alarmSensors[0]);

for (int index =0; index < lengthOfArray; index++) {
	arraySum += alarmSensors[index]; 
}
```

Finally, update the decision whether or not to sound the alarm by checking if the sum of the values is greater than the length of the array.

For example, if the array is 3 elements long, the decision would be if the sum is equal to that.

![[Untitled 62.png|Untitled]]

```arduino
if (arraySum == lengthOfArray) {
...
}
```

## How about only 2 out of the 3 sensors?

To update the system now to sound the alarm if 2 out of the 3 sensors are triggered, the only change that is needed is the decision.

```arduino
if (arraySum >= lengthOfArray-1) {
```

# Extension Exercises

## Bank alarm: More Sensors!

Add additional sensors to the bank alarm. If the code has been designed correctly, the `triggerAlarm()` function will require minimal modification.

## LED Arrays


> [!info] 💁 **Problem:** Create an Array of integers, representing pins 2-12. Attach LEDs to each of these pins. In your loop(), write a loop (`for`/`while`) to iterate over each pin, generating a random number between 0-255, and then set that as the brightness/strength of the LED.
> Use [`random()`](Arduino - Software Development Fundamentals cc4eab9811e94d60a4e3a154d8e47870.md) to generate the random number. Hint: You will need to generate a new “seed” for each time you generate a random number. 


![[2022-01-08_09-00-35.2022-01-08_09_01_23.gif|2022-01-08 09-00-35.2022-01-08 09_01_23.gif]]

### Copy Starting Project

Open this project, and click on Copy and Tinker. This will give you the circuit to build from.

[Tinkercad | From mind to design in minutes](https://www.tinkercad.com/things/4zdB1jGJSFy-led-array/editel)

![[Screen_Shot_2022-02-26_at_9.16.31_pm.png|Screen Shot 2022-02-26 at 9.16.31 pm.png]]

<aside>
💁 This project could be done without using an array. The code could create 11 different variables for each pin, however it can be more efficient to use arrays and loops to iterate over the pins. As always, this is only one approach to solve this problem.

</aside>

Replace the default code with this bare bones code base.

```arduino
void setup()
{

}

void loop()
{

}
```

### Define the Array

Prior to the `setup()`, the global variables need to be defined. As the array of pin numbers is going to be used throughout the code, this means that the array needs to be defined outside of any function. 

<aside>
💁 See Variable Scope for more details.

</aside>

Add the array definition before `setup()`.

![[Screen_Shot_2022-02-26_at_9.25.04_pm.png|Screen Shot 2022-02-26 at 9.25.04 pm.png]]

- Code
	
	```arduino
	int ledPins[] = {2,3,4,5,6,7,8,9,10,11,12};
	```
	

Before the array can be iterated over, the size of the array needs to be stored. 

It may seem obvious, however the code doesn’t automatically know how many elements are in the array, so it needs to be calculated.

Inside setup() define a new array called `arraySize` and calculate the length of the array by calculating the amount of bytes the array takes up in memory and dividing it by the size of an individual integer variable.

`arraySize` can be printed to the Serial Monitor to confirm that the value is correct.

<aside>
💁 Calculating the size of the array and storing it in a variable in code is future-proofing your code. If the number of pins changes (for instance only using pins 2-10) only the ledPins definition needs to be updated then the remainder of the code remains unchanged.

</aside>

![[Screen_Shot_2022-02-26_at_9.43.42_pm.png|Screen Shot 2022-02-26 at 9.43.42 pm.png]]

- Code
	
	```arduino
	Serial.begin(9600);
	int arraySize = sizeof(ledPins) / sizeof(int);
		Serial.println(arraySize);
	```
	

### Configure the pins for Output

This is where arrays can be used efficiently with loops. 

Using a for loop, iterate over each pin (from 2 to 13 inclusive) and set each pin to output.

First, inside `setup()`, define the for loop to iterate over the correct pins.

![[Screen_Shot_2022-02-26_at_9.44.16_pm.png|Screen Shot 2022-02-26 at 9.44.16 pm.png]]

- Code
	
	```arduino
	for (int individualPin=2; individualPin < arraySize; individualPin++) {
		
	}
	```
	

Inside the for loop, set each pin to OUTPUT by utilising the `ledPins` array and `individualPins` Loop Control Variable which updates each iteration.

![[Screen_Shot_2022-02-26_at_9.44.22_pm.png|Screen Shot 2022-02-26 at 9.44.22 pm.png]]

- Code
	
	```arduino
	pinMode(ledPins[individualPin], OUTPUT);
	```
	

That’s all that’s needed for configuration and setup. Now it’s time to write the code for the main loop.

### Coding `loop()`

Inside `loop()`, create another for loop, exactly the same configuration as the one in `setup()`.

![[Screen_Shot_2022-02-26_at_9.48.10_pm.png|Screen Shot 2022-02-26 at 9.48.10 pm.png]]

- Code
	
	```arduino
	for (int individualPin=2; individualPin < arraySize; individualPin++) {
		
	}
	```
	

Generate a random number. This number will be generated between 0 and 255 to correlate with the possible strengths of the LEDs.

<aside>
💁 [[255)`](https://www.arduino.cc/reference/en/language/functions/random-numbers/random/|`random(255)`]] generates a Pseudo Random Number between 0 and 255;

</aside>

![[Screen_Shot_2022-02-26_at_9.49.59_pm.png|Screen Shot 2022-02-26 at 9.49.59 pm.png]]

- Code
	
	```arduino
	int randomStrength = random(255);
	```
	

Using the number generated, write the randomStrength value to the pin using analogWrite. Additionally, put a short delay so it’s possible to see the LEDs before they change too quickly.

![[Screen_Shot_2022-02-26_at_9.54.11_pm.png|Screen Shot 2022-02-26 at 9.54.11 pm.png]]

- Code
	
	```arduino
	analogWrite(ledPins[individualPin], randStrength);
	delay(50);
	```
	

### AnalogWrite and Pulse Width Modulation

This code uses [`analogWrite()`](https://www.arduino.cc/reference/en/language/functions/analog-io/analogwrite/) which writes an analog value to a pin, using Pulse Width Modulation (PWM). This is a fantastic tutorial on the details of PWM.

The short version of PWM is that the Arduino, whilst a digital device, can simulate analog data. Instead of writing simply `HIGH` or `LOW` , analogWrite can write values between 0 and 255. In this case, 0 would be the equivalent of `LOW` and 255 would be the equivalent of `HIGH`.

[Pulse Width Modulation](https://learn.sparkfun.com/tutorials/pulse-width-modulation/all)

### Run the Code

Run the simulation and watch the randomness unfold.

![[2022-02-26_22-00-05.2022-02-26_22_00_13.gif|2022-02-26 22-00-05.2022-02-26 22_00_13.gif]]

## Sensor Input Storage

<aside>
💁 Problem: Create and code a circuit which reads 5 sensor values from separate potentiometers and stores them in an array. Each loop(), output the raw values and then the average. For instance: `45, 565, 23, 54, 1. Average: 137.6`

</aside>

Open this Circuit which has the wiring completed for the potentiometers.

Click the Copy and Tinker button to open your own version.

[Circuit design Sensor Input Storage Starter | Tinkercad](https://www.tinkercad.com/things/crk5oZw4Pv0-sensor-input-storage-starter)

![[Spectacular_Krunk-Bombul.png|Spectacular Krunk-Bombul.png]]

### Configure the global variables

Similar to the previous project, configure an array with the pins being used - A0 to A4. Additionally calculate and store the size of the array to be used later in loops.

![[Screen_Shot_2022-02-26_at_11.03.25_pm.png|Screen Shot 2022-02-26 at 11.03.25 pm.png]]

- Code
	
	```arduino
	int potPins[] = {A0, A1, A2, A3, A4};
	int arraySize = sizeof(potPins) / sizeof(int);
	```
	

Declare another array to store the values read for each potentiometer. At the beginning of the code, the values are unknown, and therefore shouldn’t be set. Arduino can declare an array of a specific size without any values.

![[Screen_Shot_2022-02-26_at_11.07.59_pm.png|Screen Shot 2022-02-26 at 11.07.59 pm.png]]

- Code
	
	```arduino
	int potValues[5];
	```
	

### Configure the pins as inputs

As before, define all the pins used as input pins. As the pins are stored in `potPins`, a for loop can be used to iterate over the pins and configure each to INPUT.

Also configure the Serial monitor by running the `begin()` function.

The configuration is now complete. It’s time to focus on `loop()`.

![[Screen_Shot_2022-02-26_at_11.14.31_pm.png|Screen Shot 2022-02-26 at 11.14.31 pm.png]]

- Code
	
	```arduino
	Serial.begin(9600);
	
	for (int individualPot = 0; individualPot < arraySize; individualPot++) {
	  pinMode(individualPot, INPUT);
	}
	```
	

### Read values from Each Potentiometer

The code will read each value, store them in an array, print out each element in the array and then show the average. To start this, declare an integer variable called total which will store the addition of all the values read from the sensors.

<aside>
💁 The `total` variable is reset to 0 each time the loop function runs so as to not carry any values over from the previous loop.

</aside>

![[Screen_Shot_2022-02-26_at_11.20.08_pm.png|Screen Shot 2022-02-26 at 11.20.08 pm.png]]

- Code
	
	```arduino
	int total = 0;
	```
	

Create a for loop which iterates over each analog pin.

This is done in a very similar way to done previously. 

<aside>
💁 Note: `individualPot` is just an integer, which will go from 0 to 4. This will be used to access the pins that the potentiometers are attached to, and also the index of the `potValues` array to store the values in.

</aside>

![[Screen_Shot_2022-02-26_at_11.21.37_pm.png|Screen Shot 2022-02-26 at 11.21.37 pm.png]]

- Code
	
	```arduino
	for (int individualPot = 0; individualPot < arraySize; individualPot++) {
		
	}
	```
	

Read the values for the pin and store the value in the correct index in potValues.

This may seem a complex line of code, so let’s break it down a bit, starting with the right-hand side of the `=`. 

`analogRead(potPins[individualPot])` . This part of the code runs `analogRead()` which reads the value sent to the Arduino from the sensor. The data in between the `()` refers to the particular pin. 

In this case, the pin being referenced is `potPins[individualPot]`. The first time the loop runs, individualPot will be 0. `potPins[0]` is A0. 

Therefore the first time the loop runs, this will read the value of the sensor attached to A0.

The left-hand side of the = is `potValues[individualPot]`. On the first iteration of the loop, `individualPot` is 0 (as it is above), which will write the value to `potValues[0]`.

![[Screen_Shot_2022-02-26_at_11.25.05_pm.png|Screen Shot 2022-02-26 at 11.25.05 pm.png]]

- Code
	
	```arduino
	potValues[individualPot] = analogRead(potPins[individualPot]);
	```
	

### Outputting the values

The values have been stored, now it’s time to output.

Create another for loop with the same configuration as previously done.

![[Screen_Shot_2022-02-26_at_11.33.34_pm.png|Screen Shot 2022-02-26 at 11.33.34 pm.png]]

- Code
	
	```arduino
	for (int individualPot = 0; individualPot < arraySize; individualPot++) {
		
	  }
	```
	

Inside the new loop, calculate the total value of the individual potentiometers. This will be used later to calculate the average.

![[Screen_Shot_2022-02-26_at_11.35.06_pm.png|Screen Shot 2022-02-26 at 11.35.06 pm.png]]

- Code
	
	```arduino
	total = total + potValues[individualPot];
	```
	

Output the element of `potValues` for this iteration. The index used is `individualPot`.

Also output a comma to the Serial Monitor to separate the values to make it more readable.

![[Screen_Shot_2022-02-26_at_11.37.19_pm.png|Screen Shot 2022-02-26 at 11.37.19 pm.png]]

- Code
	
	```arduino
	Serial.print(potValues[individualPot]);
	Serial.print(",");
	```
	

<aside>
💁 Notice the use of `Serial.print()` instead of `Serial.println()` used elsewhere. Serial.print() still outputs to the Serial Monitor, however does **not** add a return or new line character at the end of the print command. `Serial.println()` will output the data and follow it automatically with a newline character.

</aside>

### Calculate and output the Average

After the total has been calculated and the values outputted, its time to calculate the average and output that value.

After the second for loop, calculate the average using the following equation.

In this code, this can be calculated as `average = total / arraySize`.

$$
average = \frac{total sum}{number of items in set}
$$

As the average will most likely be a decimal point value, this average variable will need to be declared as a `float` rather than an `int`.

![[Screen_Shot_2022-02-26_at_11.47.18_pm.png|Screen Shot 2022-02-26 at 11.47.18 pm.png]]

- Code
	
	```arduino
	Serial.print("The average is : ");
	float average = total / arraySize;
	Serial.println(average);
	delay(100);
	```
	

### Run the Simulation

Start the Simulation and change the values of the Potentiometers. Make sure to expand the Serial Monitor to see the output.

![[2022-02-26_23-48-59.2022-02-26_23_49_21.gif|2022-02-26 23-48-59.2022-02-26 23_49_21.gif]]

# Review

1. What are the main differences between an Array and a Key Value Pair.
2. Research other data structures available in Arduino and other languages, such as linked lists. For each:
	1. Describe how they operate
	2. What situations you may wish to use them
	3. Code samples
3. Practical - Write code to generate 1000 random numbers (between 0 and 10000) and store them in an array. Sort the array (research required) so that the numbers are in ascending order. 
4. What are multidimensional dimensional arrays? Describe them and show code examples for what they are and what they can do. What situations would you use a multidimensional array over other data structures?