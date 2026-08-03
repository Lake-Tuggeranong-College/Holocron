---
theme: simple
highlightTheme: zenburn
css: css/holocronSlides.css
isCurrent: true
needsUpdating: true
---
# Introduction to Programming Techniques

We’ll explore:

- **Decisions**
- **Loops**
- **Functions**
- **Commenting**
- **Comparison Operators**


---
## Decisions (Conditionals)

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

## Comparison Operators in PHP

Comparison operators are used in conditionals to compare values.

--

| Operator | Meaning                  | Example     | Result  |
| -------- | ------------------------ | ----------- | ------- |
| `==`     | Equal                    | `5 == "5"`  | `true`  |
| `===`    | Identical (type + value) | `5 === "5"` | `false` |
| `!=`     | Not equal                | `5 != 3`    | `true`  |
| `!==`    | Not identical            | `5 !== "5"` | `true`  |


--

| Operator | Meaning                  | Example     | Result  |
| -------- | ------------------------ | ----------- | ------- |
| `<`      | Less than                | `3 < 5`     | `true`  |
| `>`      | Greater than             | `5 > 3`     | `true`  |
| `<=`     | Less than or equal       | `5 <= 5`    | `true`  |
| `>=`     | Greater than or equal    | `5 >= 6`    | `false` |

--

## Comparison Example

```Php
$age = 18;

if ($age >= 18) {
    echo "You are an adult.";
} else {
    echo "You are a minor.";
}
```

Use `===` when you need to match both **value and type**.

---

## Loops

Loops repeat code until a condition is met.

--
### For Loop:

```Php
for ($i = 0; $i < 5; $i++) {
    echo $i . "\n";
}
```

### While Loop:

```Php
$count = 0;

while ($count < 5) {
    echo $count . "\n";
    $count++;
}
```

--
# The Post-Test Loop: do...while

### 💡 Syntax Example (The Greeting Card):
```php
$count = 5;

do {
    echo "Executing iteration...\n";
    // Code that must run regardless of conditions
} while ($count-- > 0);
````

--
## When Execution Guarantee Matters

The `do...while` loop is a **post-test** loop. This means it executes its body *before* it checks the condition.

### Key Difference:
Even if the initial condition is `false`, the code inside the `do{}` block will run at least once.

**Use Case:** Perfect for input validation or generating initial setup messages.

--

# The Array Specialist (`foreach`)

## The Standard Way to Handle Collections

When working with PHP arrays or objects, `foreach` is the cleanest and most memory-efficient loop structure. It eliminates the need for manual indexing (`$i`, `$items[$i]`).

### Structure Breakdown:

1. **Value Only:** If you only need the value (e.g., listing names).
2. **Key & Value:** If you need both the index/key and the content.


note:
*(PHP's preferred way to iterate over arrays/objects.)*

--

### Code Example: Values Only
```php
$colors = ['Red', 'Blue', 'Green'];

foreach ($colors as $color) {
    echo "Color: " . $color . "\n";
}
// Output: Red, Blue, Green (with automatic iteration)
```

--

### Code Example: Key and Value

```php
$user = [
    'name' => 'Alice', 
    'age' => 30
];

foreach ($user as $key => $value) {
    echo "$key is " . $value . "\n";
}
// Output: name is Alice, age is 30
```

---

## Functions

Functions group code into reusable blocks.

```Php
function greet($name) {
    echo "Hello, $name!";
}

greet("Ryan");
```

--
# What is a Function?
A function is a self-contained block of code designed to perform one specific task. It allows you to write code once and reuse it many times throughout your application.

## The Goal Today: Code Reusability & Standardisation
We are moving beyond simple scripting into writing professional, maintainable PHP that can be used site-wide (like utility functions).

note:
*Remember the **DRY Principle**: Don't Repeat Yourself.*

--
# Parameters vs. Arguments (The Inputs)

## Parameter (The Definition)
*   A placeholder variable listed inside the function definition parentheses. It tells PHP *what* type of data the function expects.
    *   Example: `function greet($name)` $\rightarrow$ `$name` is a **parameter**.

## Argument (The Usage)
*   The actual value you pass into the function when you call it. This is the specific piece of data being used in that run.
    *   Example: `greet("Ryan")` $\rightarrow$ `"Ryan"` is an **argument**.

--

**Analogy:** Think of a coffee machine.
*   The instructions say: `makeCoffee($beans, $milk)` (Parameters).
*   When you use it, you put in: (`Espresso beans`, `Oat milk`) (Arguments).

note:
It's crucial to understand that these terms mean the same thing conceptually, but PHP uses them formally.

--

# The Power of Return Values

## Why Use `return` Instead of `echo`?

When you use `echo`, the function performs an action and displays text directly to the browser. This is fine for simple scripts, but often useless in complex applications.

--
###  Using `return`:
A returned value means your function *calculates* a result that can be saved to a variable or passed to another part of your code.

```php
// BAD (Echoes directly, cannot save the result)
function calculateArea($length, $width) {
    echo "The area is: ", $length * $width; 
}

// GOOD (Returns the value so it can be used later)
function calculateArea($length, $width) {
    return $length * $width; // <--- We are returning a number!
}

// Usage:
$area = calculateArea(10, 5); // $area now holds the integer 50
echo "The calculated area is: " . $area; 

```

note:
🔑 Key Takeaway: If you want to use the result _after_ the function finishes, you must `return`it.

---

# Commenting

Comments help explain your code.

```Php
// This function adds two numbers
function add($a, $b) {
    return $a + $b;
}
```


---

# Summary

|Concept| Purpose                 |
| ---------- | ----------------------- |
|Decisions| Choose between actions  |
|Loops| Repeat actions          |
|Functions| Organise and reuse code |
|Commenting| Explain code to humans  |
|Comparison| Evaluate conditions     |

---
# Questions?

If you have any questions, please ask!

![[contactDetails.png]]