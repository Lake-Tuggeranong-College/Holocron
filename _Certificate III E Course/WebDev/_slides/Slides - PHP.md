---
theme: simple
highlightTheme: zenburn
css: css/holocronSlides.css
isCurrent: true
needsUpdating: true
---

#  What is PHP?

PHP (Hypertext Preprocessor) is a **server-side scripting language** designed for web development but also used as a general-purpose language.

--
### Key Features:

- Runs on the server
- Embeds easily in HTML
- Powers over **79% of websites**, including WordPress, Facebook, and Wikipedia

```Php
<?php
echo "Hello, world!";
?>;
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

Learning PHP is valuable for cybersecurity because:

--
## Understanding Web Vulnerabilities

PHP developers often deal with:

- SQL Injection
- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)
- File inclusion vulnerabilities(https://clouddevs.com/php/security-best-practices/)

--
## Securing Web Applications

Knowing PHP helps you:

- Audit and secure PHP-based apps
- Implement secure coding practices
- Understand how attackers exploit web apps(https://wpwebinfotech.com/blog/php-and-cybersecurity/)

--

## 🔐 PHP Security Practices

### Key Techniques:

- Input validation (`filter_var()`)
- Output encoding (`htmlspecialchars()`)
- Secure password handling (`password_hash()`)
- HTTPS and secure headers
- Safe file uploads and session management(https://clouddevs.com/php/security-best-practices/)

---

## 📚 Research & Resources

Explore these resources to dive deeper:

- [Building Secure PHP Applications (SpringerLink)](https://link.springer.com/book/10.1007/979-8-8688-0932-3)(https://link.springer.com/book/10.1007/979-8-8688-0932-3)
- [PHP and Cybersecurity Guide (WPWebInfotech)](https://wpwebinfotech.com/blog/php-and-cybersecurity/)(https://wpwebinfotech.com/blog/php-and-cybersecurity/)
- [PHP Security Best Practices (CloudDevs)](https://clouddevs.com/php/security-best-practices/)(https://clouddevs.com/php/security-best-practices/)
- [Cybersecurity Intelligence Blog](https://www.cybersecurityintelligence.com/blog/what-every-php-developer-needs-to-know-about-cyber-security-6004.html)(https://www.cybersecurityintelligence.com/blog/what-every-php-developer-needs-to-know-about-cyber-security-6004.html)

---

# References

[1] [What Every PHP Developer Needs to Know About Cyber Security](https://www.cybersecurityintelligence.com/blog/what-every-php-developer-needs-to-know-about-cyber-security-6004.html)

[2] [Understanding PHP Security: Best Practices for Developers - CloudDevs](https://clouddevs.com/php/security-best-practices/)

[3] [PHP And Cybersecurity - Shielding Your Web Applications](https://wpwebinfotech.com/blog/php-and-cybersecurity/)

[4] [Building Secure PHP Applications: A Comprehensive Guide to Protecting ...](https://link.springer.com/book/10.1007/979-8-8688-0932-3)

---

# Introduction to PHP Programming

---

# Welcome to PHP

## The Engine of the Dynamic Web

- **P**HP: **H**ypertext **P**reprocessor.
    
- A server-side scripting language executed entirely on the web server.
    
- Generates dynamic HTML content on the fly before delivering it to the client's browser.
    
- Powering over 75% of websites with known server-side languages (including WordPress).
    
---
# Basic Syntax & Structure

## How PHP Lives inside Files

- PHP scripts are wrapped inside special tags: `<?php` and `?>`.
    
- Every statement must end with a semicolon (`;`).
    
- Files containing PHP must have a `.php` extension.
    
- Single-line comments use `//` or `#`. Multi-line comments use `/* ... */`.

--

# Practice


```
<?php
// This is a single-line comment
echo "Hello, World!"; 
/* This is a 
   multi-line comment */
?>
```


💡 **Try This:** Create a new file called `phpPractice.php`, type the code above, and load it in your browser. 

Change "Hello, World!" to your own name.

---
# PHP meets HTML

## Combining Logic with Presentation

- Unlike static HTML files, `.php` files allow you to weave programming logic right inside HTML elements.
    
- When a user requests the page, the server processes the PHP code and replaces it with standard HTML output.
    
--

# Practice


```
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

🧠 **Extend Your Thinking:** Look closely at the `date()` function above. 

What happens if you change `'d-m-Y'` to `'l, jS F Y'`? 

Try it out and observe how the output format switches to a classic British date style.

---

# Declaring Variables

## Storing Data for Later Use

- In PHP, all variables must begin with a dollar sign (`$`).
    
- Variable names are **case-sensitive** (`$colour` and `$Colour` are completely different!).
    
- PHP is _loosely typed_—you do not need to declare what type of data a variable holds before using it.


--

# Practice


```
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
    
- **Double quotes (`"`)** process variables inside them (Interpolation/Parsing behaviour).
    
- **Single quotes (`'`)** treat everything as a literal string.
    

--

# Practice

```
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
# Decisions: Conditional Statements

## Controlling the Flow of Your App

- Control the behaviour of your application using `if`, `elseif`, and `else` statements.
    
- Uses comparison operators like `==` (equal), `===` (identical in value & type), `>`, `<`, `!=` (not equal).
    

--

# Practice

```
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

## Repeating Instructions Automatically

- **`while` loop:** Keeps running _as long as_ a specific condition remains true.
    
- **`for` loop:** Runs code a _set number of times_ using a built-in counter.
    

--

# Practice

```
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

---
# Putting it Together: Dynamic Content

## Building Tables with PHP Loops

- You can embed complex loop logic right inside HTML layouts to build dynamic visual structures.
    

--

# Practice

```
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


🚀 **Grand Challenge:** Modify this structure to build a dynamic HTML unordered list (`<ul>`) that prints out the square values of numbers 1 through 12 (e.g. "1 squared is 1", "2 squared is 4", etc.). Organize your code neatly!

---

# Questions?

If you have any questions, please ask!

![[contactDetails.png]]

