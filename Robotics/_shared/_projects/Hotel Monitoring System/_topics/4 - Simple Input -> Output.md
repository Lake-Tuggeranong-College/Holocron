

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


> [!info] You may need to change the function to “upload” instead of build.



![[_images/upload.gif|upload.gif]]

In the terminal window, you will see the code compiling and then uploading to the board.

![[_images/uploading.gif|uploading.gif]]

The onboard red LED will quickly flash to indicate the code and uploading is working.
