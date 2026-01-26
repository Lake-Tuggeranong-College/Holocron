---
isCurrent: true
---
# Objective/s

To move development from the Arduino IDE to Visual Studio Code using PlatformIO.

# Explanation

Previously, you may have developed Arduino projects using the Arduino IDE. This is fine for hobby level development, but lacks some the advanced tools for other IDEs in other development environments.

For this project, you will develop using Visual Studio Code using the PlatformIO extension.

![[vsCodePlatformIO.png]]


# Why the change?

## It Helps You Write Code Faster (Autofill)

In the Arduino IDE, you often have to memorise exact command names. PlatformIO (running inside VS Code) works like a smart assistant.

- **Autofill:** As you type, it suggests the command you want (e.g., you type `Digi` and it suggests `DigitalWrite`).
- **Error Checking:** It underlines mistakes in red _while_ you type, so you don't have to wait until you hit "compile" to find a missing semicolon.
- Copilot extension.
## Better Debugging

If you have the right hardware tools, PlatformIO lets you "pause" your code while it is running on the chip. You can go line-by-line to see exactly what is going wrong, rather than just guessing or relying on `Serial.print` messages.

## Simplified Comparison

|**Feature**|**Arduino IDE**|**PlatformIO**|
|---|---|---|
|**Best For**|Beginners & quick sketches|Complex projects & learning|
|**Code Help**|Basic highlighting|Smart autofill & live error checking|
|**Libraries**|Stored in one messy pile|Neatly separated for every project|
|**Settings**|clicked in menus|Saved in a clear text file|

# What you need to do

## Install the Extension

> [!tip] Prerequisite: You must have [Visual Studio Code](https://code.visualstudio.com/) installed first.

1. **Open VS Code.**
2. **Go to Extensions:** Click the "Extensions" icon on the left sidebar (it looks like four squares with one floating away) or press `Ctrl+Shift+X` (Windows/Linux) / `Cmd+Shift+X` (Mac).
3. **Search:** Type `PlatformIO IDE` in the search bar.
4. **Install:** Look for the one with the alien head icon (by PlatformIO) and click the blue **Install** button.

> [!warning] **Important:** The installation might take some time. You will see a "Installing PlatformIO Core" message at the bottom right. **Wait until it says it is finished** and asks you to restart VS Code.

---

## How to Open a Project

Once installed, you will see a new **Alien Head icon** on the left sidebar.
1. **Open PIO Home:**
    - Click the **Alien Head icon**.
    - In the "Quick Access" menu that appears, click **PIO Home > Open**.        
2. **Open an Existing Project:**
    - On the PIO Home screen, click **Open Project**.
    - Navigate to the folder containing your `platformio.ini` file and select it.

## Where do I write my code?

Unlike the Arduino IDE, your project is a folder with several sub-folders.
- Go to the **`src`** folder (Source).
- Open **`main.cpp`**.
- This is where you write your `void setup()` and `void loop()`.

> [!warning] Every Arduino sketch written with PlatformIO **must** start with `#include <Arduino.h>`

