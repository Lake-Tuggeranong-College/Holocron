---
isCurrent: true
needsUpdating: false
---

# 🧑‍💻 Getting Started with PHP in Visual Studio Code

Welcome to the exciting world of **PHP and Web Development**! Developing inside a **Docker container** with **Visual Studio Code (VS Code)** provides a consistent and powerful environment.

This guide will help you:

- Set up PHP in VS Code
- Write and run basic PHP scripts
- Practice core programming concepts: `echo`, variables, conditionals, loops, and functions


## 1. Essential VS Code Extensions

To connect to your already configured Docker container and enhance your PHP coding experience, you'll need a few key VS Code extensions.

### A. Core Remote Development Extensions

1. **Container Tools** (Microsoft)
	- This pack includes the **Dev Containers** extension, which is essential. It's what allows VS Code to run its full feature set _inside_ your container, letting you code and debug within the isolated Docker environment.
2. **PHP Intelephense** (Ben Mewburn)
       - This is a highly recommended extension for robust **IntelliSense** (smart code completion), code navigation, syntax error checking, and signature help for PHP. It will drastically improve your coding speed and quality.
3. **PHP Debug** (Felix Becker)
	- Essential for **debugging** your PHP code using Xdebug, which is likely already configured in your Docker container. This lets you step through your code line by line to understand exactly how it works.  
4. **Docker** (Microsoft)
    - A useful extension for viewing and managing your running containers, images, and Docker Compose files directly from the VS Code sidebar.

### 💡 How to Install Extensions in VS Code

1. Open VS Code.
    
2. Click the **Extensions icon** on the sidebar (it looks like four squares, or press `Ctrl+Shift+X`).
    
3. In the search bar, type the name of the extension (e.g., `Dev Containers`).
    
4. Click the extension in the results and press the **Install** button.
    
5. Install the four extensions listed above.
    

---

## 2. Connect VS Code to Your Docker Container

Since your Docker container is already configured, you'll use the **Dev Containers** extension to connect your VS Code window to it.

1. Click the **Remote Indicator** in the lower-left corner of the VS Code window. It looks like a green or blue `<>`.
    
2. A command palette will open at the top. Select **Dev Containers: Attach to Running Container...**
    
3. VS Code will show a list of running containers. Select your PHP development container from the list.
    
4. The VS Code window will reload and connect to the container. The Remote Indicator in the bottom-left will now show the name of your container, confirming the connection.
    
5. If you open the VS Code integrated **Terminal** (`Ctrl+` ˋ), you will be _inside_ the Linux environment of your Docker container. This is where you will run your PHP code!
    

---

## 3. Practice Basic PHP Concepts

Now that you're connected, let's practice the fundamentals of PHP.

### A. Your First PHP File

1. In the VS Code Explorer, create a new file named `basics.php`.
    
2. All executable PHP code must be contained within the PHP tags: `<?php` and `?>`.
    

### B. Echo and Comments

The **`echo`** statement is used to output data to the screen (or, in this case, the terminal).

PHP

```
<?php
// This is a single-line comment (good for quick notes)

/*
    This is a multi-line comment,
    useful for longer explanations.
*/

// 1. Output a simple string
echo "Hello, world! I'm learning PHP.\n"; // The \n adds a new line in the terminal

// 2. Output HTML (you'll use this a lot in web development)
echo "<h1>This is HTML output!</h1>\n";

?>
```

**To Run:** Open the VS Code terminal and run the command:

Bash

```
php basics.php
```

### C. Variables and Data Types

**Variables** start with the `$` sign in PHP. PHP is loosely typed, meaning you don't explicitly declare the variable type.

PHP

```
<?php

// Variables
$name = "Alice";    // String
$age = 25;          // Integer
$price = 19.99;     // Float/Double
$is_student = true; // Boolean (true or false)

// Outputting variables (string concatenation uses the '.' operator)
echo "Hello, my name is " . $name . " and I am " . $age . " years old.\n";

// A simpler way to output variables: string interpolation (inside double quotes)
echo "The product price is $$price.\n";

// Variable reassignment
$age = $age + 1; // Increment age
echo "$name is now $age years old.\n";

?>
```

### D. Conditional Statements (`if`/`else`)

Conditional statements execute different blocks of code based on a condition being true or false.

PHP

```
<?php

$score = 85;

if ($score >= 90) {
    echo "Excellent! You got an A.\n";
} elseif ($score >= 80) {
    echo "Good job! You got a B.\n";
} else {
    echo "Keep practicing!\n";
}

// Logical operators: AND (&&), OR (||), NOT (!)
$is_sunny = true;
$is_weekend = false;

if ($is_sunny && !$is_weekend) {
    echo "It's a sunny weekday, time to work.\n";
}

?>
```

### E. Loops (`for`/`while`)

**Loops** allow you to execute a block of code repeatedly.

PHP

```
<?php

// For Loop: Repeats a block of code a specified number of times.
echo "--- For Loop ---\n";
for ($i = 1; $i <= 5; $i++) {
    echo "Count: $i\n";
}

// While Loop: Repeats a block of code as long as a specified condition is true.
echo "--- While Loop ---\n";
$j = 0;
while ($j < 3) {
    echo "Loop iteration $j\n";
    $j++; // Don't forget to increment the counter, or you'll get an infinite loop!
}

?>
```

### F. Functions

**Functions** are blocks of code that can be called repeatedly to perform a specific task.

PHP

```
<?php

// Defining a function
function greet($person_name) {
    return "Welcome, $person_name, to PHP!\n";
}

// Calling the function and echoing the returned value
echo greet("Student");
echo greet("Developer");

// Function with type hinting (good practice for clearer code)
function calculate_area(float $width, float $height): float {
    return $width * $height;
}

$area = calculate_area(5.5, 10.0);
echo "The area is: $area\n";

?>
```

---

You now have a solid environment and a grasp of PHP's most fundamental building blocks! Which basic programming concept do you want to practice next, like **Arrays** or **Classes**?