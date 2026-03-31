# Understanding NeoPixel RGB Values

NeoPixels (WS2812B LEDs) use **Additive Colour Theory** to create millions of different shades. By mixing three primary colours of light—**Red, Green, and Blue**—at varying intensities, you can achieve almost any colour in the visible spectrum.

## 1. The 8-Bit Limit: Why 0 to 255?

Each colour channel (Red, Green, and Blue) is controlled by a single **byte** of data.

- A byte consists of **8 bits**.
- In binary, the largest number you can represent with 8 bits is $2^8 - 1 = 255$.
- Therefore, each channel has **256 possible levels** of brightness (including 0).

|**Value**|**Meaning**|
|---|---|
|**0**|The colour is completely **OFF**.|
|**255**|The colour is at **Maximum Brightness**.|
|**127**|The colour is at roughly **50% Brightness**.|

---
## 2. Analysing the Function Call

In your specific code, the function maps to the parameters `(Red, Green, Blue)`.

```arduino
setMoodBehaviour(0, 255, 0); // Pure Green
```

- **Red:** 0 (No red light)
- **Green:** 255 (Full intensity green)
- **Blue:** 0 (No blue light)

---

## 3. Exploring Colour Combinations

By mixing these values, you can create secondary colours or specific "Moods". Since NeoPixels are exceptionally bright, even lower values (like 50) are often enough to create a distinct glow without being blinding.

### Secondary Colours (Mixed at Full Intensity)

- **Yellow:** `setMoodBehaviour(255, 255, 0);` (Red + Green)
- **Cyan:** `setMoodBehaviour(0, 255, 255);` (Green + Blue)
- **Magenta:** `setMoodBehaviour(255, 0, 255);` (Red + Blue)
- **White:** `setMoodBehaviour(255, 255, 255);` (All colours ON)

### Custom "Mood" Examples

> **Note:** Reducing all three values equally will dim the light (reducing its luminosity) without changing the actual hue.

|**Mood**|**Red**|**Green**|**Blue**|**Code Example**|
|---|---|---|---|---|
|**Warm Orange**|255|100|0|`setMoodBehaviour(255, 100, 0);`|
|**Deep Purple**|128|0|128|`setMoodBehaviour(128, 0, 128);`|
|**Soft Pink**|255|50|50|`setMoodBehaviour(255, 50, 50);`|
|**Dim Red**|50|0|0|`setMoodBehaviour(50, 0, 0);`|

---

## 4. Why 256 is not an option

If you attempt to pass a value of **256** into an 8-bit variable, a "rollover" (or overflow) occurs. Because the hardware cannot store the 9th bit, it simply discards it, and `256` effectively wraps back around to `0`. To ensure your lighting remains predictable, always stay within the $0$ to $255$ range.
