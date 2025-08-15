---
theme: simple
highlightTheme: zenburn
css: css/holocronSlides.css
---
# 🧠 Introduction to Fundamental Programming Techniques (PHP Edition)

We’ll explore:

- **Decisions**
- **Loops**
- **Functions**
- **Commenting**
- **Comparison Operators**


---
## 🔀 Decisions (Conditionals)

Decisions let your code choose between actions.

```Php
$temperature = 32;

if ($temperature > 30) {
    echo "It's hot!";
} else {
    echo "It's cool.";
}
```

note:
What's the output?

---

## ⚖️ Comparison Operators in PHP

Comparison operators are used in conditionals to compare values.

|Operator|Meaning|Example|Result|
|---|---|---|---|
|`==`|Equal|`5 == "5"`|`true`|
|`===`|Identical (type + value)|`5 === "5"`|`false`|
|`!=`|Not equal|`5 != 3`|`true`|
|`!==`|Not identical|`5 !== "5"`|`true`|
|`<`|Less than|`3 < 5`|`true`|
|`>`|Greater than|`5 > 3`|`true`|
|`<=`|Less than or equal|`5 <= 5`|`true`|
|`>=`|Greater than or equal|`5 >= 6`|`false`|

---

## 🧪 Comparison Example

```Php
$age = 18;

if ($age &gt;= 18) {
    echo "You are an adult.";
} else {
    echo "You are a minor.";
}
```

Use `===` when you need to match both **value and type**.

---

## 🔁 Loops

Loops repeat code until a condition is met.

### For Loop:

```Php
for ($i = 0; $i &lt; 5; $i++) {
    echo $i . "\n";
}
```

### While Loop:

```Php
$count = 0;

while ($count &lt; 5) {
    echo $count . "\n";
    $count++;
}
```

---

## 🧩 Functions

Functions group code into reusable blocks.

```Php
function greet($name) {
    echo "Hello, $name!";
}

greet("Ryan");
```

---

## 💬 Commenting

Comments help explain your code.

```Php
// This function adds two numbers
function add($a, $b) {
    return $a + $b;
}
```

---

## 🧪 Practice Time!

Write a PHP script that:

1. Accepts a number
2. Checks if it’s even or odd
3. Prints numbers from 1 to that number
4. Uses a function to check even/odd
5. Includes comments

---

## 🎯 Summary

|Concept|Purpose|
|---|---|
|Decisions|Choose between actions|
|Loops|Repeat actions|
|Functions|Organize and reuse code|
|Commenting|Explain code to humans|
|Comparison|Evaluate conditions|

# Questions?

If you have any questions, please ask!

![[contactDetails.png]]