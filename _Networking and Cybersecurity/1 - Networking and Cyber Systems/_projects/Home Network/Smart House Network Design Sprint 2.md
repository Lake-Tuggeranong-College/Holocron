---
isCurrent: false
softwareVersion: Packet Tracer 8.2.2
needsUpdating: false
---
> [!info] This is sprint 2 of the project. The deadline for this sprint is Week 15.


In this sprint you will be integrating the IoT Devices into the network.


# MCU Code

The version of this code is the result of the video showing live development

```python
from gpio import *
from time import *
from ioeclient import *

IoEClient.setup({
	"type": "Microcontroller",
	"states": [
		{
			"id": "switch_state",
			"name": "Light Switch",
			"type": "bool"
		},
		{
			"id": "temp_reading",
			"name": "Temperature Sensor",
			"type": "number"
		},
		{
			"id": "fan_state",
			"name": "Fan",
			"type": "bool"
		}
	]
})

# Pin Constants
SWITCH_PIN = 0
LAMP_PIN = 1
TEMP_PIN = A0
FAN_PIN = 2

def lamp_switch_control():
    """Reads the switch state and updates the lamp."""
    switch_value = digitalRead(SWITCH_PIN)
    # Packet Tracer customWrite often uses "2" for On and "0" for Off
    state = "2" if switch_value == HIGH else "0"
    customWrite(LAMP_PIN, state)
    return state

def automatic_fan():
    """Calculates temperature and toggles the fan based on a threshold."""
    val = analogRead(TEMP_PIN)
    # Formula: (((Reading - MinIn) * (MaxOut - MinOut)) / (MaxIn - MinIn)) + MinOut
    temperature = (((val - 0) * (100 - -100)) / (1023 - 0)) + -100
    # print (type(temperature))
    # Threshold check: turn fan on if temperature is above -2
    state = "2" if temperature >0 else "0"
    customWrite(FAN_PIN, state)
    return state, temperature

def main():
    # Setup Pin Modes
    pinMode(SWITCH_PIN, IN)
    pinMode(LAMP_PIN, OUT)
    pinMode(TEMP_PIN, IN)
    pinMode(FAN_PIN, OUT)


    while True:
        lamp_state = lamp_switch_control()
        fan_state, temperature = automatic_fan()
        lamp_state = int(lamp_state)
        #print (type(lamp_state))
        
        IoEClient.reportStates([lamp_state, temperature, fan_state])
        # Delay to prevent CPU spikes and server flooding
        delay(100)

if __name__ == "__main__":
    main()
```