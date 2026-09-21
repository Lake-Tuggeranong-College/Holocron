---
isCurrent: true
needsUpdating: false
---
> [!important] Prerequisites: The Registration and Login functionality needs to be fully implemented prior to attempting this.
> 


**The Issue:** Currently there is no security on the system at all. Anyone can load the index page, see all the data that is being published, and update a devices payload. There are a number of attack vectors that a bad actor could exploit to impact the system.

**A solution:** The 'close' one of these attack vectors, user authentication will be used to lock down access to the data on the website. This is an implementaiton of [[Role Based Access Control]].



# Defined Roles

In the database, there are a number of predefined roles for users. They are:

| **Name**      | **Email Address**   | **Role** |
| ------------- | ------------------- | -------- |
| Alice (Admin) | admin@school.com    | admin    |
| Bob (Teacher) | teacher@school.com  | staff    |
| Charlie       | student1@school.com | student  |
| Diana         | student2@school.com | student  |
| Eve           | guest@school.com    | guest    |

With a focus on security, you need to decide which roles get access to what data.


| Data/Page        | Role/s |
| ---------------- | ------ |
| index.php        | ?      |
| login.php        | ?      |
| registration.php | ?      |
| errorlog.php     | ?      |
| data.php         | ?      |

Use a document to track what you intend the access level is for each page and role. After [[#Implementing RBAC]] then test each page with an account with that level of access to see what the actual security is.

You can create your own, or make a copy of this spreadsheet:

[![[rbacSecurityAudit.png]]](https://docs.google.com/spreadsheets/d/1ZcEig42v3VWMtYUBYE8Hw4d4lTRX2nlfLknGVlf-Blo/edit?usp=sharing)


# Implementing RBAC

Create a new file called `auth.php` which will host the code to provide authorisation to particular roles. This file will not be accessed directly, however will be included by all the other files. If the user is authorised, then the page will be loaded. If the user is not authorised, then `auth.php` will display an error message.

![[rbacForbidden.png]]

```php
<?php
// src/auth.php - Session Management & Role-Based Access Control (RBAC)

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

/**
 * Enforces access control based on user authentication status and allowed roles.
 *
 * @param array $allowedRoles List of roles permitted to view the page (e.g., ['admin', 'staff'])
 * @return void
 */
function authorise(array $allowedRoles = []): void 
{
    // 1. Check if user is logged in
    if (!isset($_SESSION['user_id'])) {
        header('Location: login.php?error=unauthenticated');
        exit();
    }

    // 2. Fetch current user role from session (default to 'guest' if not set)
    $userRole = $_SESSION['access_level'] ?? 'guest';

    // 3. If allowedRoles is specified, verify user has access
    if (!empty($allowedRoles) && !in_array($userRole, $allowedRoles, true)) {
        renderUnauthorisedPage($userRole);
        exit();
    }
}

/**
 * Helper function to output an HTTP 403 response and display an unauthorised error page.
 *
 * @param string $userRole The role of the currently logged-in user
 * @return void
 */
function renderUnauthorisedPage(string $userRole): void 
{
    http_response_code(403);
    ?>
    <!DOCTYPE html>
    <html lang="en-AU">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>403 Access Forbidden</title>
        <style>
            body {
                font-family: system-ui, -apple-system, sans-serif;
                background: #f4f6f9;
                color: #2c3e50;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                margin: 0;
            }
            .error-card {
                background: #ffffff;
                padding: 2.5rem;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                max-width: 500px;
                width: 90%;
                text-align: center;
                border-top: 6px solid #dc3545;
            }
            h1 { color: #dc3545; margin-top: 0; font-size: 2rem; }
            p { font-size: 1rem; color: #555; line-height: 1.5; }
            .role-badge {
                display: inline-block;
                background: #eef2f7;
                color: #0056b3;
                padding: 4px 10px;
                border-radius: 4px;
                font-family: monospace;
                font-weight: bold;
            }
            .btn {
                display: inline-block;
                margin-top: 1.5rem;
                background: #0056b3;
                color: #fff;
                text-decoration: none;
                padding: 10px 20px;
                border-radius: 5px;
                font-weight: 600;
            }
            .btn:hover { background: #004085; }
        </style>
    </head>
    <body>
        <div class="error-card">
            <h1>403 - Access Forbidden</h1>
            <p>You do not have permission to access this page.</p>
            <p>Your current role is <span class="role-badge"><?= htmlspecialchars($userRole) ?></span>.</p>
            <a href="index.php" class="btn">&larr; Return to Central Hub</a>
        </div>
    </body>
    </html>
    <?php
}
```


## Updating pages

On each of the page - `index.php`, `login.php` etc, add the following lines of code **at the very top** of the code.

```php
<?php
require_once 'auth.php';

// Enforce admin-only access
authorise(['admin']);
?>

// Page code continues below...
```

You can implement a page that can be accessed by multiple roles:

```php
<?php
require_once 'auth.php';

// Pass an array of all roles allowed to view this page
authorise(['admin', 'staff']);
?>

// Page code continues below...
```


Continue to define the roles that can access each of the pages. **TEST** each page after implementation.
