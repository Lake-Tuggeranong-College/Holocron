Here is an educational overview of **SQL Injection (SQLi)**, covering its underlying mechanics, theoretical code examples, potential impacts, and strategies for prevention.

  

## What is SQL Injection?

**SQL Injection (SQLi)** is a cybersecurity vulnerability that occurs when untrusted user input is directly concatenated or inserted into a database query string instead of being treated strictly as data.

  

When an application fails to separate data from code, an attacker can input special SQL characters (such as single quotes `'`, semicolons `;`, or comments `--`) to alter the logic of the original query. The database engine, unable to distinguish between the developer’s original command and the attacker's added input, executes the combined text as valid SQL code.

  

## Theoretical Examples

To understand how SQL injection works, consider an application handling user authentication or data lookup.

  

### 1. The Vulnerable Code Pattern

Imagine a backend server processing a login request using dynamic string formatting:

  



```Python
# VULNERABLE: Direct string concatenation
username = get_user_input()
password = get_user_input()

# Constructing the SQL string directly with input values
query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "';"
cursor.execute(query)
```

### 2. Bypassing Authentication (Logic Alteration)

If an attacker enters the following string into the `username` field:

  



```SQL
admin' OR '1'='1
```

The resulting query built by the application becomes:

  



```SQL
SELECT * FROM users WHERE username = 'admin' OR '1'='1' AND password = '...';
```

**How it works:**

  

1. The `admin'` portion completes the intended `username = 'admin'` comparison.
    
      
    
2. The `OR '1'='1'` clause introduces a condition that is always true (`TRUE`).
    
      
    
3. Because an `OR TRUE` condition evaluates to true regardless of the password check, the database returns the `admin` account record, bypassing authentication entirely.
    
      
    

### 3. Modifying or Destroying Data (Stacked Queries)

If the underlying database driver supports executing multiple SQL statements separated by a semicolon (known as stacked queries), an attacker might input:

  



```SQL
1'); DROP TABLE sensor_readings; --
```

Given an application query designed to insert data:

  



```Python
# VULNERABLE: Inserting raw text
query = f"INSERT INTO sensor_readings (value) VALUES ('{user_input}')"
```

The combined SQL sent to the database becomes:

  



```SQL
INSERT INTO sensor_readings (value) VALUES ('1'); DROP TABLE sensor_readings; --');
```

**How it works:**

  

1. `1')` completes the original `INSERT` statement.
    
      
    
2. `;` terminates the first command.
    
      
    
3. `DROP TABLE sensor_readings;` executes a distinct, second command.
    
      
    
4. `--` comments out the trailing closing parenthesis and quotes, preventing a syntax error from halting execution.
    
      
    

## What Could a Bad Actor Do with SQL Injection?

Depending on the database engine, user privileges, and the specific application structure, an attacker exploiting a SQL injection vulnerability could:

  

- **Bypass Authentication:** Log into accounts without valid credentials (including administrator accounts).
    
      
    
- **Extract Sensitive Data (Data Exfiltration):** Read unauthorized data across the entire database, including PII (Personally Identifiable Information), passwords, financial records, or internal logs.
    
      
    
- **Tamper with Data:** Modify, corrupt, or insert arbitrary records (e.g., changing account balances, modifying inventory, or inserting unauthorized admin accounts).
    
      
    
- **Destroy Data:** Permanently delete specific tables or entire databases using commands like `DROP` or `TRUNCATE`.
    
      
    
- **Administrative Takeover:** In databases where the application connects as a superuser (e.g., `root` or `sa`), an attacker might create new database users or alter administrative permissions.
    
      
    
- **Remote Code Execution (RCE):** In certain legacy configurations or specific database software (such as SQL Server's `xp_cmdshell` or MySQL's `INTO OUTFILE`), an attacker can write files to the host filesystem or execute system commands on the underlying operating system.
    
      
    

## How to Prevent SQL Injection

SQL injection is entirely preventable by adopting secure coding practices that strictly separate user input from database commands.

  

### 1. Use Parameterized Queries (Prepared Statements)

Parameterized queries ensure that the database driver treats user input strictly as a literal value (a string, integer, etc.), never as executable code. Even if the input contains SQL syntax like `' OR '1'='1`, it is stored safely as a literal string.

  



```Python
# SECURE: Using parameterized placeholders (%s)
query = "SELECT * FROM users WHERE username = %s AND password = %s"
cursor.execute(query, (username, password))
```

### 2. Use Object-Relational Mappers (ORMs)

Modern ORMs (such as SQLAlchemy, Django ORM, Entity Framework, or Prisma) use parameterized queries under the hood by default when handling data operations.

  

### 3. Enforce the Principle of Least Privilege

Configure database user accounts with only the permissions necessary for their specific function:

  

- An application that only needs to read telemetry should connect using a database role with read-only permissions (`SELECT`).
    
      
    
- Ingestion services should generally not have administrative permissions such as `DROP TABLE`, `ALTER`, or file-system access.
    
      
    

### 4. Input Validation and Type Casting

Enforce strict type checks before processing input. If an application expects an integer or a floating-point number (e.g., a temperature reading), explicit type conversion should occur prior to database interaction:



```Python
# Cast input to expected numeric type
try:
    sensor_value = float(raw_input)
except ValueError:
    # Reject or log invalid payload
    return
```




# MQTT Attack Vector



Update `loop()` in `main.cpp` to attempt an SQL injection via MQTT

```arduino
String payload = "100'); TRUNCATE TABLE sensor_readings; -- ";
sendPeriodicUpdate("sensorData", payload);
```