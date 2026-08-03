---
theme: simple
highlightTheme: zenburn
css: css/holocronSlides.css
isCurrent: true
needsUpdating: true
---

# Complete Introduction to PHP Programming

Mastering the Engine of the Dynamic Web

---

# What is PHP?

PHP (Hypertext Preprocessor) is a **server-side scripting language** designed for web development but also used as a general-purpose language.

--

### Key Features:

- Runs on the server
- Embeds easily in HTML
- Powers over **75% to 79% of websites**, including WordPress, Facebook, and Wikipedia

```php
<?php
echo "Hello, world!";
?>
```

note:
https://www.cybersecurityintelligence.com/blog/what-every-php-developer-needs-to-know-about-cyber-security-6004.html

---

## 🌐 Why Learn PHP?

PHP is:

- **Widely used**: Millions of websites and web apps rely on PHP
- **Easy to learn**: Great for beginners
- **Flexible**: Works with many databases and platforms
- **Open-source**: Free and supported by a large community

---

# PHP & Cybersecurity

Learning PHP is especially valuable for cybersecurity.

--

## Understanding Web Vulnerabilities

PHP developers often deal with:

- SQL Injection
- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)
- File inclusion vulnerabilities

--

## Securing Web Applications

Knowing PHP helps you:

- Audit and secure PHP-based apps
- Implement secure coding practices
- Understand how attackers exploit web apps

--

## 🔐 PHP Security Practices

### Key Techniques:

- Input validation (`filter_var()`)
- Output encoding (`htmlspecialchars()`)
- Secure password handling (`password_hash()`)
- HTTPS and secure headers
- Safe file uploads and session management

note:

Research & Resources:

- [Building Secure PHP Applications (SpringerLink)](https://link.springer.com/book/10.1007/979-8-8688-0932-3)
- [PHP and Cybersecurity Guide (WPWebInfotech)](https://wpwebinfotech.com/blog/php-and-cybersecurity/)
- [PHP Security Best Practices (CloudDevs)](https://clouddevs.com/php/security-best-practices/)
- [Cybersecurity Intelligence Blog](https://www.cybersecurityintelligence.com/blog/what-every-php-developer-needs-to-know-about-cyber-security-6004.html)

---

# Basic Syntax & Structure

## How PHP Lives inside Files

- PHP scripts are wrapped inside special tags: `<?php` and `?>`.
- Every statement must end with a semicolon (`;`).
- Files containing PHP must have a `.php` extension.

--

## Commenting Code

Comments help explain your code to humans.

- Single-line comments use `//` or `#`.
- Multi-line comments use `/* ... */`.

```php
<?php
// This is a single-line comment
echo "Hello, World!"; 

/* This is a 
   multi-line comment */
?>
```

💡 **Try This:** Create a new file called `phpPractice.php`, type the code above, and load it in your browser. Change "Hello, World!" to your own name.

---

# PHP Meets HTML

## Combining Logic with Presentation

- Unlike static HTML files, `.php` files allow you to weave programming logic right inside HTML elements.
- When a user requests the page, the server processes the PHP code and replaces it with standard HTML output.

--

# Practice

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
    <title>My First PHP Page</title>
</head>
<body>
    <h1 style="color: darkslateblue;">Welcome to My Website</h1>
    <p>Today's date is: <?php echo date('d-m-Y'); ?></p>
</body>
</html>
```

🧠 **Extend Your Thinking:** Look closely at the `date()` function above. What happens if you change `'d-m-Y'` to `'l, jS F Y'`? Try it out and observe how the output format switches to a classic British date style.

---

# Declaring Variables

## Storing Data for Later Use

- In PHP, all variables must begin with a dollar sign (`$`).
- Variable names are **case-sensitive** (`$colour` and `$Colour` are completely different!).
- PHP is *loosely typed*—you do not need to declare what type of data a variable holds before using it.

--

# Practice

```php
<?php
$greeting = "Welcome back";
$userCount = 150;
$price = 19.99;
$isLoggedIn = true;
?>
```

🧠 **Extend Your Thinking:** What happens if you try to create a variable name that starts with a number (e.g. `$1stPlace = "Gold";`)? Test it on your server to see what error message PHP gives you.

---

# Outputting Variables

## Putting Variables into Action

- You use the `echo` statement to output data to the screen.
- **Double quotes (`"`)** process variables inside them (Interpolation/Parsing behavior).
- **Single quotes (`'`)** treat everything as a literal string.

--

# Practice

```php
<?php
$favouriteColour = "green";

// Outputs: My favourite colour is green!
echo "My favourite colour is $favouriteColour!"; 

// Outputs: My favourite colour is $favouriteColour!
echo 'My favourite colour is $favouriteColour!'; 
?>
```

💡 **Try This:** Create two variables: `$firstName` and `$lastName`. Use `echo` to print a sentence that combines them into a full name using double quotes and a space.

---

# Comparison Operators

Comparison operators are used in conditionals to evaluate conditions.

![[comparisonOperatorsPHP.png]]

--

## Comparison Example

```php
$age = 18;

if ($age >= 18) {
    echo "You are an adult.";
} else {
    echo "You are a minor.";
}
```

Use `===` when you need to match both **value and type**.

---

# Decisions: Conditional Statements

## Controlling the Flow of Your App

- Decisions let your code choose between actions.
- Control the behavior of your application using `if`, `elseif`, and `else` statements.

--

# Practice: Conditionals

```php
<?php
$hour = date('H'); // Gets current 24-hour time

if ($hour < 12) {
    echo "Good morning!";
} elseif ($hour < 18) {
    echo "Good afternoon!";
} else {
    echo "Good evening!";
}
?>
```

🧠 **Extend Your Thinking:** Hardcode a new variable `$temperature = 18;`. Write an `if/else` statement that outputs "It's a warm British summer!" if the temperature is 20 or above, and "Bring a jumper!" otherwise.

---

# Loops: Doing Repeated Work

Loops repeat code until a condition is met.

--

## Standard Loops: `while` & `for`

- **`while` loop:** Keeps running *as long as* a specific condition remains true.
- **`for` loop:** Runs code a *set number of times* using a built-in counter.

```php
<?php
// While Loop Example
$counter = 1;
while ($counter <= 3) {
    echo "Count is $counter <br>";
    $counter++;
}

// For Loop Example
for ($i = 1; $i <= 3; $i++) {
    echo "Iteration $i <br>";
}
?>
```

💡 **Try This:** Write a loop that counts down from 10 to 1, followed by outputting the word "Blastoff!" to the screen.

--

## The Post-Test Loop: `do...while`

- The `do...while` loop executes its body *before* it checks the condition.
- Even if the initial condition is `false`, the code inside the `do{}` block will run at least once.
- **Use Case:** Perfect for input validation or generating initial setup messages.

```php
$count = 5;

do {
    echo "Executing iteration...
";
} while ($count-- > 0);
```

--

## The Array Specialist: `foreach`

When working with PHP arrays or objects, `foreach` is the cleanest and most memory-efficient loop structure.

- **Value Only:** Used when you only need the value.
- **Key & Value:** Used when you need both the index/key and the content.

```php
// Value Only Example
$colors = ['Red', 'Blue', 'Green'];
foreach ($colors as $color) {
    echo "Color: " . $color . "
";
}

// Key & Value Example
$user = ['name' => 'Alice', 'age' => 30];
foreach ($user as $key => $value) {
    echo "$key is " . $value . "
";
}
```

note:
PHP's preferred way to iterate over arrays/objects.

---

# Functions

Functions group code into reusable blocks designed to perform one specific task.

```php
function greet($name) {
    echo "Hello, $name!";
}

greet("Ryan");
```

note:
Remember the **DRY Principle**: Don't Repeat Yourself.

--

# Parameters vs. Arguments

## Parameter (The Definition)
- A placeholder variable listed inside the function definition parentheses.
- Tells PHP what type of data the function expects.
- Example: `function greet($name)` $\rightarrow$ `$name` is a **parameter**.

## Argument (The Usage)
- The actual value passed into the function when called.
- Example: `greet("Ryan")` $\rightarrow$ `"Ryan"` is an **argument**.

--

# Return Values vs. `echo`

## Why Use `return` Instead of `echo`?

- Using `echo` displays text directly to the browser, which cannot be saved or used later in complex applications.
- A returned value allows your function to *calculate* a result that can be saved to a variable or passed elsewhere.

```php
// BAD (Echoes directly, cannot save result)
function calculateArea($length, $width) {
    echo "The area is: ", $length * $width; 
}

// GOOD (Returns value to be used later)
function calculateArea($length, $width) {
    return $length * $width; 
}

$area = calculateArea(10, 5); // $area holds 50
```

note:
🔑 Key Takeaway: If you want to use the result after the function finishes, you must `return` it.

---

# Putting It Together: Dynamic Content

## Building Tables with PHP Loops

Embed complex loop logic right inside HTML layouts to build dynamic structures.

--

# Practice

```html
<!DOCTYPE html>
<html lang="en-GB">
<body>
    <h3>Multiplication Table for 5</h3>
    <table border="1" cellpadding="5" style="border-collapse: collapse; text-align: centre;">
        <?php
        for ($i = 1; $i <= 10; $i++) {
            $result = 5 * $i;
            echo "<tr><td>5 x $i</td><td>=</td><td>$result</td></tr>";
        }
        ?>
    </table>
</body>
</html>
```

🚀 **Grand Challenge:** Modify this structure to build a dynamic HTML unordered list (`<ul>`) that prints out the square values of numbers 1 through 12 (e.g., "1 squared is 1", "2 squared is 4", etc.). Organize your code neatly!

---

# Summary

| Concept | Purpose |
| --- | --- |
| **Decisions** | Choose between actions |
| **Comparison Operators** | Evaluate conditions |
| **Loops** | Repeat actions (`while`, `for`, `do...while`, `foreach`) |
| **Functions** | Organize and reuse code |
| **Commenting** | Explain code to humans |

---

# Questions?

If you have any questions, please ask!

![[contactDetails.png]]