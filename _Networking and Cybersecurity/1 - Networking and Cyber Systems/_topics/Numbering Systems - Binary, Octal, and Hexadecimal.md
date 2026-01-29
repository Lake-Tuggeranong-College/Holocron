---
isCurrent: true
---
## Objective

Students will understand the structure of positional numbering systems (Base-2, Base-8, Base-10, and Base-16) and demonstrate the ability to convert values between these systems using mathematical procedures.

## 1. Introduction to Positional Notation

In any numbering system, the position of a digit determines its value. This is known as **positional notation**. We use **Base-10 (Decimal)** in daily life, but computers use different bases because of their hardware architecture.

The "weight" of each position is a power of the base. For example, in the decimal number $345$, the $5$ is in the ones place ($10^0$), the $4$ is in the tens place ($10^1$), and the $3$ is in the hundreds place ($10^2$). This same logic applies to Binary (Base-2), Octal (Base-8), and Hexadecimal (Base-16). Understanding this structure is the key to converting between systems, as you are simply swapping the "base" while keeping the "positional" logic the same.

### Decimal Place Values (Base-10)

| **Position (from right)** | **3**  | **2**  | **1**  | **0**  |
| ------------------------- | ------ | ------ | ------ | ------ |
| **Power of 10**           | $10^3$ | $10^2$ | $10^1$ | $10^0$ |
| **Weight**                | 1000   | 100    | 10     | 1      |
| **Example Digit**         | 5      | 3      | 4      | 2      |
| **Value**                 | 5000   | 300    | 40     | 2      |

### Key Concepts

- **Base (Radix):** The number of unique digits available.
- **Place Value:** Calculated as $Base^{position}$.
- **Bit:** A single Binary digit (0 or 1).
- **Nibble:** 4 bits.
- **Byte:** 8 bits.

## 2. The Systems

| **System**      | **Base** | **Digits Used** | **Purpose**                        |
| --------------- | -------- | --------------- | ---------------------------------- |
| **Binary**      | 2        | 0, 1            | Low-level hardware state (On/Off)  |
| **Octal**       | 8        | 0-7             | Legacy systems, file permissions   |
| **Decimal**     | 10       | 0-9             | Human-standard counting            |
| **Hexadecimal** | 16       | 0-9, A-F        | Memory addresses, Web colors (CSS) |

> [!IMPORTANT]
> 
> In Hexadecimal, letters represent values beyond 9. This ensures each position is represented by a single character.
> 
> |   |   |
> |---|---|
> |**Hex Digit**|**Decimal Value**|
> |A|10|
> |B|11|
> |C|12|
> |D|13|
> |E|14|
> |F|15|

## 3. Detailed Conversion Examples with Step-by-Step Tables

### A. Decimal to Octal (Successive Division)

To convert a Decimal number to Octal, we divide by **8** and track the remainders.

**Example: Convert** $156_{10}$ **to Octal**

| **Division Step** | **Quotient** | **Remainder** | **Significance**              |
| ----------------- | ------------ | ------------- | ----------------------------- |
| $156 \div 8$      | 19           | **4**         | Least Significant Digit (LSD) |
| $19 \div 8$       | 2            | **3**         |                               |
| $2 \div 8$        | 0            | **2**         | Most Significant Digit (MSD)  |

**Result:** Reading remainders from bottom to top, $156_{10} = 234_8$.

### B. Octal to Decimal (Expansion Method)

To convert Octal back to Decimal, we multiply digits by the powers of 8.

**Example: Convert** $75_8$ **to Decimal**

| **Digit** | **Position** | **Weight (8pos)** | **Product**        |
| --------- | ------------ | ----------------- | ------------------ |
| 7         | 1            | $8^1 = 8$         | $7 \times 8 = 56$  |
| 5         | 0            | $8^0 = 1$         | $5 \times 1 = 5$   |
| **Total** |              |                   | $56 + 5 = 61_{10}$ |

**Result:** $75_8 = 61_{10}$.

### C. Hexadecimal to Decimal (Expansion Method)

This follows the same logic as Binary or Octal, but we must substitute letters for numbers first.

**Example: Convert** $1CF_{16}$ **to Decimal**

| **Hex Digit** | **Numerical Value** | **Position** | **Weight (16pos)** | **Product**                 |
| ------------- | ------------------- | ------------ | ------------------ | --------------------------- |
| 1             | 1                   | 2            | $16^2 = 256$       | $1 \times 256 = 256$        |
| C             | 12                  | 1            | $16^1 = 16$        | $12 \times 16 = 192$        |
| F             | 15                  | 0            | $16^0 = 1$         | $15 \times 1 = 15$          |
| **Total**     |                     |              |                    | $256 + 192 + 15 = 463_{10}$ |

**Result:** $1CF_{16} = 463_{10}$.

### D. Hexadecimal to Octal (The "Binary Bridge")

The easiest way to go between Hex and Octal is to convert to Binary first.

**Example: Convert** $B2_{16}$ **to Octal**

1. **Step 1: Hex to Binary (4-bit groups)**
    - B = $1011$  
    - 2 = $0010$  
    - Binary = $10110010_2$  
2. **Step 2: Binary to Octal (Regroup into 3-bit groups from right)**
    - `010` (Right) = 2
    - `110` (Middle) = 6
    - `010` (Left, padded with 0) = 2

**Result:** $B2_{16} = 262_8$.

## 4. Student Practice Exercises

Try these exercises to test your understanding. Detailed solutions are provided below.

### Exercise 1: Binary to Decimal

Convert $11001010_2$ to Decimal.

### Exercise 2: Decimal to Binary

Convert $45_{10}$ to Binary.

### Exercise 3: Hexadecimal to Binary

Convert $F3_{16}$ to Binary.

### Exercise 4: Binary to Hexadecimal

Convert $11100111_2$ to Hexadecimal.

> [!bug]- Detailed Solutions
> 
> **Solution 1: Binary to Decimal**
> 
> Using the Power Table:
> 
$(1 \times 128) + (1 \times 64) + (0 \times 32) + (0 \times 16) + (1 \times 8) + (0 \times 4) + (1 \times 2) + (0 \times 1)$
> 
$128 + 64 + 0 + 0 + 8 + 0 + 2 + 0 = 202_{10}$  
> **Solution 2: Decimal to Binary**
> 
Successive Division:
> 
$45 \div 2 = 22$ rem **1**
> 
$22 \div 2 = 11$ rem **0**
> 
$11 \div 2 = 5$ rem **1**
> 
$5 \div 2 = 2$ rem **1**
> 
$2 \div 2 = 1$ rem **0**
> 
$1 \div 2 = 0$ rem **1**
> 
**Result:** $101101_2$  
> **Solution 3: Hexadecimal to Binary**
> 
$F = 1111$
> 
$3 = 0011$ (Must be 4 bits!)
> 
> **Result:** $11110011_2$  
> **Solution 4: Binary to Hexadecimal**
> 
Group into nibbles (4 bits): `1110` and `0111`
$1110 = 14 = E$
> $0111 = 7 = 7$
> **Result:** $E7_{16}$  

## Summary

- **Binary** is the language of circuits.
- **Octal** uses 3-bit groupings.
- **Hexadecimal** is a shorthand for binary (1 Hex digit = 4 bits).
- **Conversion** requires either dividing by the target base or multiplying by the powers of the source base.

## Checklist for Mastery

- [ ] Can list the 16 digits of Hexadecimal (0-F).
- [ ] Can convert a decimal number under 255 to Binary.
- [ ] Understands why Hexadecimal is used to represent colors or MAC addresses.
- [ ] Can explain the difference between a bit and a byte.