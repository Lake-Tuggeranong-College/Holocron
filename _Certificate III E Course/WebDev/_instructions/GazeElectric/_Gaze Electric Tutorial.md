---
isCurrent: true
needsUpdating: true
---
> [!note] This page will hold the whole tutorial for the Gaze Electric Website. The tutorial will be updated throughout the development process as the project develops.

==TODO== - db init_scripts
==TODO== - install bootstrap
==TODO== 404 page. 

# Database Configuration

Before executing commands, it is essential to understand the structure of relational databases. This background knowledge ensures you understand why tables are structured with specific data types and constraints.

See here : [[Slides - Databases]]


## Create your first table

> [!note] This guide will walk you through setting up the initial database infrastructure required for the shopfront web application.

### Step 1: Accessing the Database Manager

1. Open **PHPMyAdmin** in your browser.
2. Log in using the credentials defined in your `docker-compose.yml` file.
    - **Username:** `shopfront`
    - **Password:** `shopfront`

![[dbPHPMyAdmin.png]]

### Step 2: Selecting the Database

Once logged in, locate the sidebar and select the **shopfront** database. This ensures your commands are executed in the correct context.

![[dbInitialiseSQLTab.png]]

### Step 3: Executing the SQL Command

1. Click on the **SQL** tab in the top navigation bar.
2. Copy and paste the following code into the query box:

![[dbInitialiseUserTable.png]]

```sql
CREATE TABLE users (
  user_id int(11) NOT NULL AUTO_INCREMENT, 
  username text NOT NULL,
  password_hash text NOT NULL,
  first_name text NOT NULL,
  second_name text NOT NULL,
  address text NOT NULL,
  phone_number text NOT NULL,
  PRIMARY KEY (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
```

3. Press **Go** to execute the command.

#### Reference: The `users` Table Schema

After execution, you can verify the structure by clicking the **Structure** tab.

|**Field**|**Type**|**Attributes**|**Description**|
|---|---|---|---|
|**user_id**|`int`|Primary Key, Auto Increment|Unique identifier for every user.|
|**username**|`text`|NOT NULL|The user's login handle.|
|**password_hash**|`text`|NOT NULL|Securely hashed password string.|
|**first_name**|`text`|NOT NULL|User's legal first name.|
|**second_name**|`text`|NOT NULL|User's legal surname.|


![[dbInitialiseUserTableComplete.png]]

**Key Indicator:** The 🔑 icon next to `user_id` confirms it is the **Primary Key**, ensuring no two users share the same ID.

### Step 4. How-To: Next Steps

Now that your database is initialised, you are ready to begin the application development phase. Your next task is to connect your web server to this database using the credentials provided in the login step.

# `config.php`

## 1. Explanation: The Configuration Centralisation

In web development, we use a `config.php` file to centralise database credentials and session management.

### Why centralise configuration?

- **Maintainability:** If your database password changes, you only update one file instead of hunting through dozens of pages.
- **Consistency:** It ensures every page on your site uses the same connection settings and character encoding (`utf8mb4`).
- **State Management:** By including `session_start()` here, you ensure the server remembers user data (like login status or shopping carts) across the entire application.

## 2. Tutorial: Creating the `config.php` File

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

## Explanation
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

Save the file.

![[commonBlocks#Commit & Push]]
# User Management

# Administrator Access

# Product Management

# Order Form

## Shopping Cart

# Invoicing



