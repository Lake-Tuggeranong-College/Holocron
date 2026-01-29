---
theme: simple
highlightTheme: zenburn
css: css/holocronSlides.css
isCurrent: true
---
# Numbering Systems

## Learning Objective

Students will understand positional numbering systems (Base-2, 8, 10, 16) and master the mathematical procedures to convert between them.

--

## Numbering Systems Summary

| Base | Name        | Digits                                         | Description                          |
| ---- | ----------- | ---------------------------------------------- | ------------------------------------ |
| 2    | Binary      | 0, 1                                           | Language of CPUs, powers of 2        |
| 8    | Octal       | 0, 1, 2, 3, 4, 5, 6, 7                         | Base-8 system                        |
| 10   | Decimal     | 0, 1, 2, 3, 4, 5, 6, 7, 8, 9                   | The standard base we use daily       |
| 16   | Hexadecimal | 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F | Used for colors and memory addresses |


---

## Positional Notation

In any base, the **position** of a digit determines its weight.

| **Base** | **Name**    | **Digits** |
| -------- | ----------- | ---------- |
| **10**   | Decimal     | 0-9        |
| **2**    | Binary      | 0-1        |
| **8**    | Octal       | 0-7        |
| **16**   | Hexadecimal | 0-9, A-F   |

---

## The Decimal Standard (Base-10)

How we count as humans.

Consider the number **345**.

| Position   | 10$^2$  | 10$^1$ | 10$^0$ |
| ---------- | ------- | ------ | ------ |
| **Weight** | 100     | 10     | 1      |
| **Digit**  | 3       | 4      | 5      |
| **Value**  | **300** | **40** | **5**  |

Total: **345**

---
## Binary (Base-2)

The language of the CPU.

Weights are powers of 2:

| 2$^7$ | 2$^6$ | 2$^5$ | 2$^4$ | 2$^3$ | 2$^2$ | 2$^1$ | 2$^0$ |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| 128   | 64    | 32    | 16    | 8     | 4     | 2     | 1     |

## Hexadecimal (Base-16)

Used for colours and memory addresses.

| Hex | Dec |
| ------- | ------- |
| **A**   | 10      |
| **B**   | 11      |
| **C**   | 12      |
| **D**   | 13      |
| **E**   | 14      |
| **F**   | 15      |

---

## Conversion: Decimal to Binary

**Method: Successive Division**

1. Divide decimal by 2.
2. Record the remainder (0 or 1).
3. Repeat until quotient is 0.
4. Read remainders **bottom-to-top**.


---
## Conversion: Binary to Decimal

**Method: Expansion**

Multiply each bit by its column weight and add them up.

**Example:** $1011_2$  
- $(1 \times 8) + (0 \times 4) + (1 \times 2) + (1 \times 1)$  
- $8 + 0 + 2 + 1$  
- **Result:** $11_{10}$  

---
## The "Binary Bridge"

Converting Hex to Octal? Use Binary as the middle-man.
- **Hex** $\rightarrow$ **Binary:** 1 Hex digit = 4 bits.
- **Binary** $\rightarrow$ **Octal:** Group bits into 3s from the right.

---

## Summary

- **Base:** Number of unique digits.
- **Bit:** A single 0 or 1.
- **Byte:** 8 bits.
- **Nibble:** 4 bits (1 Hex digit).

---
## Practice Task

1. Convert **45** to Binary.
2. Convert **F3** to Binary.
3. Check your working against the theory document!

---

# Questions?

If you have any questions, please ask!

![[contactDetails.png]]