---
isCurrent: true
---
Prior to any website development coding can be commenced, the database must be configured and have the necessary fields in order to facilitate the websites functionality.

> [!important] The database *should* have been configured in the previous project. The MariaDB server should be running in the docker container.

To be able to interact with a database, the website needs to be configured to the particular database and provide the correct credentials. To do this, one page will be written with those details and used throughout the site.

# `config.php`


Create a new file in the root directory of the project, named `config.php`

```php
<?php
$host = 'certIII_db';
$port = 3306;
$dbname = 'shopfront'; 
$username = 'shopfront';
$password = 'shopfront';
try {
    $dsn = "mysql:host=$host;port=$port;dbname=$dbname;charset=utf8mb4";
    $pdo = new PDO($dsn, $username, $password);
    // Set error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
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

session_start();
?>

```

> [!important] `$host`, `$port`, `$dbname`, `$username` and `$password` values need to match the container details you defined in `docker-compose.yml` for the container hosting the database.



![[commonBlocks#Commit & Push]]

