---
theme: simple
highlightTheme: zenburn
css: css/holocronSlides.css
isCurrent: true
needsUpdating: false
---
# Introduction to Databases

Goals:
- What is a database?
- Database terms

---

## What is MariaDB?

![[dbMariadb.png|200]]

You might hear the term **MySQL**, but we are using **MariaDB**.

- **The History:** When MySQL was bought by a big corporation (Oracle), the original creators "forked" the code to keep it truly open-source and community-driven.
- **Compatibility:** It is a "drop-in replacement." This means all your PHP code and phpMyAdmin tools work exactly the same way.

---
## What is a Database?

In simple terms, a database is an **organised collection of structured information**.

Think of it like a digital filing cabinet. Instead of paper folders, we use **Tables**.

**Example:** An E-commerce website stores products, customer details, and order history in a database so it can quickly find "All orders from User #105."

---
## Why not just use Excel?

Spreadsheets are for people; Databases are for **applications**.

- **Relationships:** Easily link a 'Customer' to their 'Orders'.
- **Security:** Control who can see or edit specific data (e.g., hiding passwords).
- **Concurrency:** Hundreds of people can buy items on a website at the exact same second without the file "locking."

---

## Key Terms: The Hierarchy

1. **Database:** The container for the whole project (e.g., `school_website`).
2. **Table:** A specific category (e.g., `students`).
3. **Row (Record):** A single entry (e.g., "John Smith").
4. **Column (Field):** An attribute (e.g., `email_address`).

---
# Anatomy of a Table

| student_id (PK) | Student Name | Major            | Enrollment Year |
| --------------- | ------------ | ---------------- | --------------- |
| 2026-001    | Alex Smith   | Computer Science | 2026            |
| 2026-002    | Jordan Lee   | Biology          | 2026            |
| 2026-003    | Alex Smith   | Art History      | 2026            |

- **Columns:** The "headers" that define what data we store.
- **Rows:** The actual data entries.

---
## Data Types

In MariaDB, every column must have a "Type." This helps the computer save space and prevent errors.

- **INT:** Whole numbers (ID numbers, quantities).
- **VARCHAR(length):** Short text like names or emails (Variable Character).
- **DECIMAL(10,2):** Perfect for money/prices.
- **TEXT:** For long descriptions or blog posts.
- **DATE:** For birthdays or "joined on" dates.

---

# Introducing Keys

There are a number of special columns that can be utilised in databases for different reasons. 

There are two main ones - **primary** and **foreign** keys.


--

# Primary Keys (PK)

Every table **must** have a Primary Key.

- It is a **unique identifier** for every row.
- **Pro Tip:** We usually set this to **Auto Increment (A_I)** so MariaDB gives every new entry the next number (1, 2, 3...) automatically.

**Example:** Even if two students are both named "Alex Smith," they will have different `student_id` values.

--

# Primary Key example
| **student_id (PK)** | **Student Name** | **Major**        | **Enrollment Year** |
| ------------------- | ---------------- | ---------------- | ------------------- |
| **2026-001**        | Alex Smith       | Computer Science | 2026                |
| **2026-002**        | Jordan Lee       | Biology          | 2026                |
| **2026-003**        | Alex Smith       | Art History      | 2026                |


--
# Foreign Keys - Establishing Relationships

**What are Foreign Keys?**

*   A foreign key is a column (or set of columns) in one database table that refers to the primary key in another table.
*   It establishes a link or relationship between the two tables.
*   It enforces *referential integrity*, ensuring that relationships between data remain consistent.  You can't insert a value into a foreign key column if that value doesn't exist in the primary key column of the related table.

--

# How Foreign Keys Work:

1.  **Primary Key:** The primary key uniquely identifies each row in a table.
2.  **Foreign Key:**  A foreign key in another table points to the primary key of the first table.
3.  **Relationship:** This creates a relationship where data in one table is connected to data in another.

--
# Foreign Key Example:

Let's say we have two tables:

*   **Customers:** (CustomerID, Name, Address) - `CustomerID` is the primary key.
*   **Orders:** (OrderID, CustomerID, OrderDate) - `CustomerID` is a foreign key referencing `Customers`.

This means each order is associated with a specific customer.  The `CustomerID` in the `Orders` table tells us which customer placed that order.

--
![[dbERD.png]]
note:

**Explanation of the Mermaid Diagram:**

*   `Customers { ... }`: Defines the `Customers` table.
*   `Orders { ... }`: Defines the `Orders` table.
*   `int CustomerID PK`:  Specifies that `CustomerID` is an integer and the primary key (PK) in the `Customers` table.
*   `int OrderID PK`: Specifies that `OrderID` is an integer and the primary key (PK) in the `Orders` table.
*   `int CustomerID FK`: Specifies that `CustomerID` is an integer and a foreign key (FK) in the `Orders` table.
*   `date OrderDate`:  Specifies the `OrderDate` column.
*   `Customers ||--o{ Orders : places`: This is the relationship line.
    *   `||--o{`:  Represents a one-to-many relationship (one customer can have many orders).
    *   `places`:  This is the label for the relationship, indicating the connection.

**Key takeaways from the diagram:**

*   The `Orders` table has a `CustomerID` column that is a foreign key referencing the `Customers` table.
*   The `CustomerID` in the `Orders` table is linked to the `CustomerID` in the `Customers` table.
*   The relationship is represented by the line connecting the tables, with the label "places" indicating the nature of the relationship.


--


# Other Key Types

* **Unique Keys:** Similar to primary keys, but can allow NULL values in some database systems.
* **Composite Keys:**  A primary key made up of two or more columns.

note:
“There are other types of keys, but we’ve focused on the most important ones.  Unique keys enforce uniqueness, and composite keys combine multiple columns to create a unique identifier.”*


---

# Data vs. Information 

## Data

*   **Definition:** Raw, unorganised facts and figures.  It represents observations or measurements.
*   **Characteristics:**
    *   Unprocessed
    *   Lacks context
    *   Can be ambiguous
    *   Often quantitative (numbers) or qualitative (descriptions)

--

# Data Examples 

*   `123` (a number)
*   `"John Doe"` (a name)
*   `"Red"` (a color)
*   A single temperature reading: `25°C`
*   A list of customer IDs: `CustomerID1, CustomerID2, CustomerID3`

--

# Information

*   **Definition:** Data that has been processed, organised, and given context, making it meaningful and useful.
*   **Characteristics:**
    *   Processed Data
    *   Contextualised
    *   Reduces Ambiguity
    *   Often qualitative (insights, conclusions)

--
# Information Examples

*   "Sales increased by 15% last quarter." (Based on sales data)
*   "The average customer age is 32." (Based on customer data)
*   "Customers prefer blue products." (Based on product sales data and customer feedback)
*   A sales report showing monthly revenue trends.

---

# phpMyAdmin: Your Control Panel

We use **phpMyAdmin** to talk to MariaDB without writing raw code yet.

- **Structure Tab:** Where you define your columns and data types.
- **Browse Tab:** Where you see the rows of data you've entered.
- **Insert Tab:** A simple form to add new data to a table.
- **SQL Tab:** Where you can type manual commands to the database.

--

![[dbPHPMyAdmin.png]]

---

# Introduction to SQL

 **SQL** (Structured Query Language) is the standard language for interacting with relational databases.  

```sql
SELECT * FROM Customers;
```

note:
SQL can be written directly into phpmyadmin, however the majority of SQL written for this project will be embedded in PHP


--

# CRUD - The Core of SQL

* **What is CRUD?**
    * **C**reate: Adding new data to the database.
    * **R**ead: Retrieving data from the database.
    * **U**pdate: Modifying existing data in the database.
    * **D**elete: Removing data from the database.

--

![[dbCRUD.jpeg]]


--

# CREATE - Adding Data

* **Command:** `CREATE TABLE`
* **Example:**
```sql
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    City VARCHAR(255)
);
```

This creates a table named "Customers" with four columns. 

`PRIMARY KEY` designates the `CustomerID` as the unique identifier for each row.



--


# READ - Retrieving Data

* **Command:** `SELECT`
* **Example:**
```sql
SELECT * FROM Customers;
```
This retrieves *all* columns (`*`) and *all* rows from the "Customers" table.
* **More Complex Queries:**
```sql
SELECT FirstName, LastName FROM Customers WHERE City = 'London';
```

(Selects only first and last names from customers in London)


--

# UPDATE - Modifying Data

* **Command:** `UPDATE`
* **Example:**
```sql
UPDATE Customers
SET City = 'New York'
WHERE CustomerID = 1;
```
* **Explanation:** This changes the "City" column to "New York" for the customer with `CustomerID` equal to 1.
* **Important:**  Always use a `WHERE` clause to specify *which* rows to update!  Otherwise, you'll update *all* rows.



--

# DELETE - Removing Data

* **Command:** `DELETE`
* **Example:**
```sql
DELETE FROM Customers
WHERE CustomerID = 5;
```
* **Explanation:** This deletes the row from the "Customers" table where `CustomerID` is equal to 5.
* **Important:**  Use with caution!  Deleting data is permanent.  Always double-check your `WHERE` clause.

--

# SQL in PHP

```php
$sql = "SELECT name, email FROM users WHERE id = :id";
$stmt = $pdo->prepare($sql);

// Execute with data binding (prevents SQL injection)
$stmt->execute(['id' => 1]);

// Fetch and display results
$user = $stmt->fetch();
```

--

# Summary & Next Steps

* **Recap:**
    * SQL is the language for interacting with relational databases.
    * CRUD (Create, Read, Update, Delete) is the fundamental process.
    * `CREATE`, `SELECT`, `UPDATE`, and `DELETE` are the core commands.

---

# Questions?

If you have any questions, please ask!

![[contactDetails.png]]