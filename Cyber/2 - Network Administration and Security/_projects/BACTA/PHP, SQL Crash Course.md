> [!important] Prior to beginning, ensure that 
> 1. Docker is running, and
> 2. Visual Studio Code is connected to the Docker container.  ![[crashCourseContainerConnected.png]]
> 3. The website can launch when the container opens.
> 

# Background Information
## PHP

PHP stands for **P**HP **H**ypertext **P**reProcessor and is an open-source, server-side scripting language. It is used to develop dynamic web applications, as well as create interactive and responsive websites. Due to its versatility, it has become one of the most widely-used programming languages on the web. It is well-known for its easy syntax, allowing both novice and experienced coders to write web applications quickly and effectively. In essence, PHP is an invaluable tool for web developers, providing them with the power to create robust, dynamic and interactive web applications.




You can read more on CRUD by accessing [this page](https://www.humio.com/glossary/crud/).

## SQL

SQL (Structured Query Language) is a powerful language used to manage and manipulate relational databases. One of the best ways to understand SQL is through the concept of **CRUD**, which stands for **Create, Read, Update, and Delete**—the four basic operations you can perform on data in a database.


![[WebDev/_projects/Flask-Ngunnawal/_images/CRUD.jpeg|[https://www.atatus.com/glossary/crud/]]

Here’s a breakdown of each CRUD operation with SQL examples:

---

### **1. Create** – _Adding new data to the database_

This operation inserts new records into a table.

**SQL Example:**

```Sql
INSERT INTO Employees (EmployeeID, FirstName, LastName, Department)
VALUES (101, 'Alice', 'Smith', 'IT');
```

This adds a new employee named Alice Smith to the "Employees" table.

---

### **2. Read** – _Retrieving data from the database_

This operation queries the database to fetch data.

**SQL Example:**

```Sql
SELECT FirstName, LastName FROM Employees WHERE Department = 'IT';
```

This retrieves the names of all employees who work in the IT department.

---

### **3. Update** – _Modifying existing data_

This operation changes data that’s already in the database.

**SQL Example:**

```Sql
UPDATE Employees
SET Department = 'HR'
WHERE EmployeeID = 101;
```

This updates Alice Smith’s department from IT to HR.

---

### **4. Delete** – _Removing data from the database_

This operation deletes records from a table.

**SQL Example:**

```Sql
DELETE FROM Employees WHERE EmployeeID = 101;
```

This removes Alice Smith’s record from the "Employees" table.

---

## SQLite
SQLite is a lightweight, self-contained, serverless relational database engine that is widely used for embedded systems and applications where simplicity and minimal setup are key. Unlike traditional database management systems, SQLite stores the entire database as a single file on disk, making it easy to deploy and manage. It supports most of the SQL standard and is highly efficient for read-heavy operations, making it ideal for mobile apps, desktop software, and small-scale web applications. Because it doesn't require a separate server process, it's often used for local data storage and prototyping.

# Site Development

To make use of the containers, you will be developing a website using PHP, HTML, and SQL and other technologies.

In the project root folder, create a new file:`index.php`.

## `index.php` 
This file is being used as the front page of the website running in the container. It will be developed further into the project, however it will start quite simplistic.

As is custom, start by creating a page which states "Hello World". Place the following code in `index.php`.

```php
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <?php
        echo "Hello, World!";
    ?>
</body>
</html>
```

Launch the website to test the website:
[http://localhost:8000](http://localhost:8000)

![[crashCourseIndexInitLaunch.png]]

Congratulations - you've written (possibly) your first PHP page!

![[commonBlocks#Commit & Push]]

To continue learning PHP, practice the coding by following video.

> [!important] Remember that the server is accessible at http://localhost:8000 not what is referenced in the video. 

![](https://www.youtube.com/watch?v=ZdP0KM49IVk&ab_channel=JakeWright)

![[commonBlocks#Commit & Push]]

## New Files

Start by creating new files in the root directory of the project:
1. config.php
2. template.php
3. login.php
4. logout.php
5. register.php


Update the following files according to the instructions below.

### `config.php`

This configuration file is extremely important for the whole project as it connects the PHP code to the database.

It connects and maintains the connection to the database using PDO, which provides a standard interface between PHP and many different types of database types (e.g. MySQL, and SQLite).

![[crashCoursePDO.png]]

> [!note]- Why use PDO?
> You can write PHP code to connect to a database without using PDO code, however code will need to be written for each type of database. If the website migrated from SQLite to MySQL for instance, most of the database code would need to be rewritten. Using PDO allows for the database specific code to be abstracted (*hidden*) behind standardised code.


Create a new file in the root directory of the project, renaming it `config.php` and add the following code to the file. 
```php
<?php
// config.php

// Path to the SQLite database file in the root directory
define('DB_PATH', './site.db');

try {
    // Create (connect to) SQLite database in file
    $pdo = new PDO('sqlite:' . DB_PATH);
    // Set error mode to exceptions
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('Connection failed: ' . $e->getMessage());
}
?>
```

![[crashCourseConfig.png]]

Save the file.



### `template.php`

This page will be used to contain the common code used throughout the website that you're developing.

```php
<?php require_once 'config.php'; 
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
    <!-- You can change the title to reflect the page contents. -->
</head>
<body>

<!-- Navigation Bar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Blocks logo button goes to index.php -->

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="index.php">Home</a>
            </li>
            <?php if (!isset($_SESSION["email_address"])) : ?>
                <li class="nav-item">
                    <a class="nav-link" href="register.php">Registration</a>
                </li>
            <?php endif; ?>
            <?php if (isset($_SESSION["email_address"])) : ?>
                <li class="nav-item">
                    <a class="nav-link" href="logout.php">Logout</a>
                </li>

            <?php endif; ?>
          
            <?php if (isset($_SESSION["email_address"])) : ?>
                <li class="nav-item">
                    <a class="nav-link" href="logout.php" title="Logout">Logout</a>
                </li>
            <?php endif; ?>
        </ul>
        <?php if (isset($_SESSION['name'])) : ?>
            <span class="navbar-text text-success">Welcome, <?php echo $_SESSION['name']; ?></span>
        <?php else : ?>
            <a class="nav-link text-danger" href="login.php">Log In</a>
        <?php endif; ?>
    </div>
</nav>
```


### `register.php`

```php
<?php include "template.php"; 
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration</title>
</head>

<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email_address'];
    $password = $_POST['password'];

    $stmt = $pdo->prepare("INSERT INTO users (name, email_address, password) VALUES (?, ?, ?)");
    $stmt->execute([$name, $email, $password]);

    echo "<div class='alert alert-success'>User registered successfully!</div>";
}
?>
<div class="container mt-5">
    <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">Register</div>
        <div class="card-body">
            <form method="POST" action="">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" required>
                </div>
                <div class="mb-3">
                    <label for="email_address" class="form-label">Email address</label>
                    <input type="email" class="form-control" name="email_address" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" required>
                </div>
                <button type="submit" class="btn btn-success">Register</button>
            </form>
        </div>
    </div>
</div>
</body>
</html>

```

### `login.php`

```php
<?php
include "template.php"; 


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email_address'];
    $password = $_POST['password'];

    $stmt = $pdo->prepare("SELECT * FROM users WHERE email_address = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user && $password === $user['password']) { // Assuming passwords are stored in plain text for simplicity
        $_SESSION['email_address'] = $user['email_address'];
        $_SESSION['name'] = $user['name']; // Store the user's name in the session
        header("Location: index.php"); // Redirect to a protected page
        exit;
    } else {
        $error = "Invalid email or password.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>

</head>
<body class="bg-light">
<div class="container mt-5">
    <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">Login</div>
        <div class="card-body">
            <?php if ($error): ?>
                <div class="alert alert-danger"><?= $error ?></div>
            <?php endif; ?>
            <form method="POST" action="">
                <div class="mb-3">
                    <label for="email_address" class="form-label">Email address</label>
                    <input type="email" class="form-control" name="email_address" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" required>
                </div>
                <button type="submit" class="btn btn-success">Login</button>
            </form>
        </div>
    </div>
</div>
</body>
</html>

```


### `logout.php`

```php
<?php
session_start();
session_unset();
session_destroy();
header("Location: login.php");
exit;

```

Go to the website now and try to register a user, then login and log out!


### `index.php`

Update `index.php` to include template.php

```php
<?php include "template.php"; ?>
```

![[crashCourseIndexUpdate.png]]


![[commonBlocks#Commit & Push]]


## Is this site Secure? 

Not on your life.

After successfully demonstrating that the user management subsystem works (Register, login, logout), attempt to log in again with the following credentials:

email_address: `' OR 1=1 --`
password: anything at all


![[crashCourseSQLInjection.png]]

When the login button is pressed, the SQL in the login page gets converted to:

`SELECT * FROM users WHERE email_address = '' OR 1=1 --' AND password = 'fake password'`

With the system as it's currently coded, you will be able to successfully log in to the first user account, even though you haven't provided correct credentials. This is an example of an **SQL Injection**.

![[crashCourseLittleBobbyTables.png]]
https://xkcd.com/327/

