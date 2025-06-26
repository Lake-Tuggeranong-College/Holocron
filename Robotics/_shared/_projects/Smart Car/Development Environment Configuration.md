

# Authorising Arduino Devices

In order to upload code to your Arduino-based device, you will need to specifically give your user account permission to do so (even if you have root/administrator access).

To do so, open a terminal prompt and enter the following command, swapping `your_username` to the username of the computer account:

`sudo usermod -a -G dialout your_username`

For instance, if your account name was "ryancather", the command would be:

`sudo usermod -a -G dialout ryancather`

After typing the command, press enter. You may need to enter your password.

After the command completes, you will need to **log out and log back in again** for the permissions to take effect.


# Arduino IDE


For this project you will need to have the following software installed and configured.

- Arduino IDE (version 2+)

https://docs.arduino.cc/software/ide-v2/tutorials/getting-started/ide-v2-downloading-and-installing/#linux

Once installed, open the IDE.

# Arduino Hardware

This project uses specialised hardware boards which are not enabled by default in the Arduino IDE.

Open Preferences/Settings under the File menu, and tap the button next to the `Additional Boards manager URLs` box.

![[arduinoIDEAdditionBoards1.png]]

Enter the following URLs into the text box, and click Ok.

```
https://adafruit.github.io/arduino-board-index/package_adafruit_index.json
https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
```

![[arduinoIDEAdditionBoards2.png]]

Click Ok again to exit the Preferences/Settings window.

Click on the Boards tab (1) and search for `ESP32` in the search box (2). Click **Install** next to the entry supplied by **Espressif Systems** (3) as shown in the image.

![[arduinoIDEAdditionalBoardsESP32.png]]
This may take a few minutes to install. Once complete, search for **RP2040** and install the indicated Board package.

![[arduinoIDEAdditionalBoardsRP2040.png]]

# Arduino Libraries

Inside the Arduino IDE, click on the libraries button (1), and enter **Radiohead** to the search box (2). Press the **Install** button (3) to install the Lora communication library.

![[arduinoIDELibraryRadioHead.png]]


# Test the connection

Plug your Feather board into an available USB port.

Under the file menu, choose **Examples -> 1. Basics -> Blink**

