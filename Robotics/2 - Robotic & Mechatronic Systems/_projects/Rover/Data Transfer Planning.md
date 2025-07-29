In preparation for the assessment task, you are to prepare and plan for future development. **The information you produce can be used in your first assessment task.**

You are to create a plan for the data being communicated between your Controller and Rover devices. This has already been started by indicating our ‘test’ commands:

- Test
- Forwards
- Backwards
- Left
- Right
- Start
- Stop

Create a Google Doc, and list all the commands you imagine you will need to remote control your rover. Add them to the list above.

For each of the commands, indicate what the intended behaviour will be of the Rover. Be as specific as possible - imaging you are writing the logic to be used within a function but written in a human-readable format.

The end result could be similar to this:

| Command   | Rover - Intended behaviour                                                                                                                                                                                                                | Arduino Function Name |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| Test      | Turn the onboard Neopixel RGB LED to Red.<br>Wait 1 second.<br>Turn the onboard Neopixel RGB LED to Green.<br>Wait 1 second.<br>Turn the onboard Neopixel RGB LED to Blue.<br>Wait 1 second.<br>Turn the onboard Neopixel RGB LED to Off. | `commandTest()`       |
| Forwards  | Turn motor Left to forwards<br>Turn motor Right to forwards<br>Wait 1 second.                                                                                                                                                             | `commandForward()`    |
| Backwards | etc                                                                                                                                                                                                                                       |                       |
| Left      | etc                                                                                                                                                                                                                                       |                       |
| Right     |                                                                                                                                                                                                                                           |                       |
| Start     |                                                                                                                                                                                                                                           |                       |
| Stop      |                                                                                                                                                                                                                                           |                       |
Next, perform the same process, this time in reverse.

What data, and how often, will be sent back from the Rover to the Controller? This is referred to as “telemetry”.

>[!note] The data transmitted back to the controller will be stored in a database (to be determined later).

| Telemetry Data       | Frequency                            |
| -------------------- | ------------------------------------ |
| GPS Location         | Once per minute.                     |
| Temperature          | Once per minute.                     |
| Battery Charge Level | Once per day.                        |
| Crash Sensor         | Each time a crash has been detected. |

Consider the sensors used in previous projects and what sensors are available to you in the classroom.

