---
isCurrent: true
needsUpdating: true
tutorialIndex: 1
---

## How To Guide: Creating the `config.php` File

> [!note] Goal: To build the bridge between the website and the database.

> [!important] Learning Outcomes:
> - How to create a PHP Page
> - PHP syntax fundamentals
> - PHP code to connect to the database

Follow these steps to establish the "handshake" between your PHP code and the MariaDB database.

### Step 1: Create the File

1. Open **Visual Studio Code**.
2. In the **root directory** of your project, create a new file named `config.php`.

![[configInit.png]]

### Step 2: Add the Connection Logic

Copy and paste the following code into `config.php`:

![[configCodeEntered.png]]

```php
<?php
$host = 'certIII_db';
$port = 3306;
$dbname = 'shopfront'; 
$username = 'shopfront';
$password = 'shopfront';
try {
    $connectionString = "mysql:host=$host;port=$port;dbname=$dbname;charset=utf8mb4";
    $db = new PDO($connectionString, $username, $password);
    // Set error mode to exception
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Connection successful
} catch (PDOException $e) {
    // Catch the PDOException and get the detailed error message
        echo "Database Error: " . $e->getMessage();
        echo "<br>Error Code: " . $e->getCode();
        echo "<br>File: " . $e->getFile();
        echo "<br>Line: " . $e->getLine() . "<br>";
        // For even more detail, you can use errorInfo()
        // echo "<br>PDO Error Info: ";
        // print_r($pdo->errorInfo(), true);
}

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>
```

To understand this code snippet, it helps to think of it as the "handshake" between your website and your database server.

![[commonBlocks#Commit & Push]]
## Explanation

In web development, we can use a `config.php` file to centralise database credentials and session management.

### Why centralise configuration?

- **Maintainability:** If your database password changes, you only update one file instead of hunting through dozens of pages.
- **Consistency:** It ensures every page on your site uses the same connection settings and character encoding (`utf8mb4`).
- **State Management:** By including `session_start()` here, you ensure the server remembers user data (like login status or shopping carts) across the entire application.

### Database Connection Variables

|**Variable**|**Purpose**|**Value/Default**|
|---|---|---|
|`$host`|The network location of the DB server.|`certIII-RnD_db` (Docker service name)|
|`$port`|The communication port for MariaDB/MySQL.|`3306`|
|`$dbname`|The specific schema/database to use.|`shopfront`|
|`$db`|The PDO instance used for SQL queries.|N/A|

### Core Functions & Structures

- **`try...catch`**: A control structure that "tries" to run code. If a `PDOException` occurs (e.g., wrong password), the `catch` block intercepts it to prevent a full system crash.
- **`PDO` (PHP Data Objects)**: A database access layer providing a uniform method of access to multiple databases.
- **`session_start()`**: Initialises or resumes a session. This allows the server to track a user's "Session ID" via a browser cookie, enabling persistence across different pages.
- **`session_status()` check**: Verifies if a session is already active to prevent "headers already sent" errors.
