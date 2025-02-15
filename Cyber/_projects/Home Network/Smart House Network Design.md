> [!info] This is phase 1 of the project. The deadline for this phase is Week 7.

# Home network design

In packet tracer, you'll develop a home network to support a smart house, with computing devices (PCs, laptops, tablets etc) as well as 'smart' devices such as a system to monitor and control the temperature in the house.

## Step 1 - Computing Devices

Add the following devices to the network:


| Device                    | Amount | Notes                                                  |
| ------------------------- | ------ | ------------------------------------------------------ |
| WRT300N (wireless router) | 1      |                                                        |
| PC                        | 3      | Each `FastEthernet0` interface should be set to DHCP   |
| Wireless                  | 3      | Remove existing card, and add `WPC300N`to each laptop. |
 The network should appear similar to this:
 ![[homeNetworkStep1.png]]
Check the network by running a ping command from one device to another, such as from a laptop to a PC.

![[step1Ping.png]]


## Simple 'Smart' Lamp

In this first stage, this lamp is not 'smart' or automated in any way. It will simply be a lamp attached to a switch through a microcontroller.

### Wiring Components


First, add the Lamp to the network. You'll find a prebuilt lamp 'thing' in `End Drives` -> `Home` as shown below.

![[smartLightsFindLamp.png]]

Next, add in a Microcontroller Unit (MCU), found in `Components` -> `Boards`:

![[smartLightsFindMCU.png]]

The last component to add for this system is the on/off switch. This component can be found under `Component`-> `Sensors`.

![[smartLightsFindSwitch.png]]

Now it's time to connect the components. Use the `Connections` -> `Connections` -> `IoT Custom Cable` to connect the devices.

![[smartLightsFindIoTCable.png]]

When connecting the devices, connect `D0` on the lamp to `D1` on the MCU. Connect the MCU `D0` to pin `D0` on the switch, as shown below.

![[smartLightsPins.png]]


### Programming the MCU

Click on the MCU and change to the Programming tab. Select the default `Blink (Javascript)` file and choose delete. When asked if you are sure you want to delete click Yes.
![[smartLightsDeleteBlink.png]]
Create a new script by clicking the `New` button. Give the project a name, such as `Smart Light` and set the Template to `Empty - Python`. 

![[smartLightsNewProject.png]]

Click Create.

Double click `main.py` to open the file, which will be blank. Replace the contents with the following code.

```python
from gpio import * # imports all modules in the GPIO library
from time import * # imports all modules in the time library

switchValue = 0 # initialize Switch sensor value global variable to 0

def readFromSensors():
	global switchValue # declare switchValue as global
	global speakerValue # declare potentiometerValue as global
	switchValue = digitalRead(0) # read Switch sensor value

def writeToActuators():
	if (switchValue == HIGH): # evaluates to True if the Switch sensor value is digital HIGH, otherwise false
		customWrite(1, "2") # turn on the Light
	else:
		customWrite(1, "0") # turn off the Light

def main(): # defines the main function
	pinMode(0, IN) # sets digital slot 0 (Switch) to input
	pinMode(1, OUT) # sets digital slot 1 (Light) to output

	while True: # loop indefinitely
		readFromSensors() # call the readFromSensors function
		writeToActuators() # call the writeToActuators function
		delay(1000) # delay script execution for 1000 ms

if __name__ == "__main__": # Evaluates to True if this module is the script being executed, otherwise False if this module is being imported into another module
	main() # call the main function
```

![[smartLightsCodeIncluded.png]]

Save the file.

Press the Run button to execute the script.

![[smartLightsRunScript.png]]

Close the window.

Holding ALT key, click on the switch to turn it On. After a brief pause, the lamp will turn on.

![[smartLightsWorking.gif]]

# Automating Devices

Packet Tracer, along with networking devices, can also simulate IoT devices, such as Arduinos and Raspberry Pis.

https://www.packettracernetwork.com/internet-of-things/pt7-iot-devices-configuration.html

