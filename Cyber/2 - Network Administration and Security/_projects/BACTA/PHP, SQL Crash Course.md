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
http://localhost:8000

![[crashCourseIndexInitLaunch.png]]

Congratulations - you've written (possibly) your first PHP page!

![[commonBlocks#Commit & Push]]

To continue learning PHP, practice the coding by following video.

> [!important] Remember that the server is accessible at http://localhost:8000 not what is referenced in the video. 

![](https://www.youtube.com/watch?v=ZdP0KM49IVk&ab_channel=JakeWright)

![[commonBlocks#Commit & Push]]