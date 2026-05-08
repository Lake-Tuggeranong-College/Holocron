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


# User Management

# Administrator Access

# Product Management

# Order Form

## Shopping Cart

# Invoicing



