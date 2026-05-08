---
isCurrent: true
needsUpdating: true
---
> [!note] This page will hold the whole tutorial for the Gaze Electric Website. The tutorial will be updated throughout the development process as the project develops.

==TODO== - db init_scripts
==TODO== - install bootstrap
==TODO== 404 page. 

# Database Configuration

In order to support the website that will be developed, some initial tables need to be configured in the database.

However, before you do that, you need to have some background knowledge on databases. See here : [[Slides - Databases]]


## Initial data

Open PHPMyAdmin, and log in with the username and password defined in the `docker-compose.yml` for the project. The ones used previously in the course are:
Username : `shopfront`
Password: `shopfront`


![[dbPHPMyAdmin.png]]

Select the `shopfront` database and then click the SQL tab.

![[dbInitialiseSQLTab.png]]

Enter the following SQL into the text box and press **Go**.

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

The SQL will be processed and you'll be presented with message of success. Afterwards, select the shopfront database again, and the **users** table will appear. Click on the **Structure** tab to see the table definition.

![[dbInitialiseUserTableComplete.png]]

Notice the 🔑 icon next to `user_id` which indicates that it is a **primary key**.

# `config.php`


# User Management

# Administrator Access

# Product Management

# Order Form

## Shopping Cart

# Invoicing



