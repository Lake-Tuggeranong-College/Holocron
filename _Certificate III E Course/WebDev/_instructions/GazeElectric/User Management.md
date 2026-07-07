---
isCurrent: true
needsUpdating: true
tutorialIndex: 3
---

> [!note] Goal: To develop the pages and logic required to allow users to register, login, logout and edit their profiles.

## Create the Registration Page (`register.php`)


> [!note] Goal: Develop a page to allow users to register an account on the website.

> [!important] Learning Outcomes:
> - Further PHP development skills
> - Building from the template
> - HTML form development
> - Embedding SQL into PHP to execute commands on the database

### How To Guide

This file handles the creation of new user accounts.

1. **Create `register.php`** and include `template.php` at the top.

```php
<?php
// Start output buffering to handle header redirection
ob_start();

// Include template (config.php inside template.php handles session_start)
include "template.php"; 

/** @var $db */
?>
```

![[userMgmtRegisterInit.png]]

2. Set the Page Title. Add a `<title>` tag to identify the page for the browser tab. For register.php: `<title>Register | Create Your Account</title>`
3. For the Registration Page: Add styles for a softer background (#f8f9fa) and defined section titles to organise the long form.
```css
<style>
    body { background-color: #f8f9fa; }
    .card-registration { border-radius: 15px; border: none; }
    .form-section-title { 
        font-size: 1.1rem; 
        font-weight: bold; 
        color: #495057; 
        border-bottom: 2px solid #e9ecef; 
        padding-bottom: 10px; 
        margin-bottom: 20px; 
    }
</style>
```

![[userMgmtRegisterTitleStyle.png]]


3. **Add the HTML Form:** Use `method="post"` and ensure each input name (`username`, `password`, `first_name`, etc.) matches the keys used in your PHP logic.


```php

<section class="py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card card-registration shadow-lg">
          <div class="card-body p-5">
            <h2 class="text-center fw-bold mb-5">Create Your Account</h2>

            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
              
              <div class="form-section-title"><i class="fas fa-lock me-2"></i>Account Security</div>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <label class="form-label">Email / Username</label>
                  <input type="email" name="username" class="form-control" placeholder="name@example.com" required />
                </div>
                <div class="col-md-6 mb-4">
                  <label class="form-label">Password</label>
                  <input type="password" name="password" class="form-control" required />
                </div>
              </div>

              <div class="form-section-title"><i class="fas fa-user me-2"></i>Personal Information</div>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <label class="form-label">First Name</label>
                  <input type="text" name="first_name" class="form-control" required />
                </div>
                <div class="col-md-6 mb-4">
                  <label class="form-label">Second Name</label> <input type="text" name="second_name" class="form-control" required />
                </div>
              </div>

              <div class="form-section-title"><i class="fas fa-address-book me-2"></i>Contact & Shipping</div>
              <div class="mb-4">
                <label class="form-label">Address</label> <textarea name="address" class="form-control" rows="2" required></textarea>
              </div>
              <div class="mb-4">
                <label class="form-label">Phone Number</label>
                <input type="tel" name="phone_number" class="form-control" placeholder="e.g., +1234567890" required />
              </div>

              <div class="form-check mb-4">
                <input class="form-check-input" type="checkbox" id="terms" required />
                <label class="form-check-label" for="terms">I agree to the terms and conditions</label>
              </div>

              <div class="d-grid">
                <button type="submit" name="register" class="btn btn-primary btn-lg shadow-sm">Complete Registration</button>
              </div>
              
              <p class="text-center mt-4">Already have an account? <a href="login.php">Login here</a></p>
            </form>
```

![[userMgmtRegisterFormCode.png]]

4. **Insert the Logic:**
	- Sanitise the data.
    - Check for existing users.
    - Hash the password using `password_hash()`.
    - Execute the `INSERT` query and redirect to `login.php` on success.

```php
            <?php
            if (isset($_POST['register'])) {
                // Sanitise all inputs
                $v_username    = sanitiseData($_POST['username']);
                $v_password    = $_POST['password']; 
                $v_first_name  = sanitiseData($_POST['first_name']);
                $v_second_name = sanitiseData($_POST['second_name']); // Updated variable name
                $v_address     = sanitiseData($_POST['address']);     // Updated variable name
                $v_phone       = sanitiseData($_POST['phone_number']);
                
                $hashed_password = password_hash($v_password, PASSWORD_DEFAULT);

                // Check if username exists
                $query = $db->prepare("SELECT COUNT(*) FROM users WHERE username = :username");
                $query->execute([':username' => $v_username]);
                
                if ($query->fetchColumn() > 0) {
                    $_SESSION['error_message'] = "This email is already registered.";
                    header("Location: register.php");
                    exit();
                } else {
                    // Updated SQL query to use second_name and address columns
                    $sql = "INSERT INTO users (username, password_hash, first_name, second_name, address, phone_number, access_level) 
                            VALUES (:username, :password, :fname, :sname, :address, :phone, 1)";
                    
                    $stmt = $db->prepare($sql);
                    $success = $stmt->execute([
                        ':username' => $v_username,
                        ':password' => $hashed_password,
                        ':fname'    => $v_first_name,
                        ':sname'    => $v_second_name,
                        ':address'  => $v_address,
                        ':phone'    => $v_phone
                    ]);

                    if ($success) {
                        $_SESSION['success_message'] = "Registration successful! Welcome to the Widget Shop.";
                        header("Location: login.php");
                        exit();
                    } else {
                        $_SESSION['error_message'] = "An error occurred. Please try again.";
                        header("Location: register.php");
                        exit();
                    }
                }
            }
            ?>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

![[userMgmtRegisterFormLogic.png]]

5. End the output buffer.

```php

<?php
ob_end_flush();
?>

```

![[userMgmtRegisterOBEnd.png]]

### Explanation

- **Password Hashing:** We never store passwords as plain text. The `password_hash()` function creates a secure, one-way cryptographic string. Even if your database is stolen, the passwords remain unreadable.
- **Validation Logic:** Before saving a new user, the script checks if the username is already taken. This maintains the **Unique Constraint** of your database.

##### Why use Output Buffering?

In the provided scripts for `login.php`, `register.php`, and `profile.php`, you will notice the functions `ob_start()` at the very top and `ob_end_flush()` at the very bottom.

##### The "Headers Already Sent" Problem

Web servers send information to your browser in two parts: **Headers** (metadata like "redirect to this page") and the **Body** (the HTML you see).

- **The Rule:** Once the server starts sending the Body (even a single empty space outside of PHP tags), it can no longer send Headers.
- **The Conflict:** Because our scripts include `template.php` (which contains HTML) before our logic determines if a user should be redirected, we would normally trigger an error when calling `header("Location: ...")`.
    

##### The Solution: `ob_start()`

- **The Buffer:** `ob_start()` tells PHP to hold all generated HTML in a "buffer" (internal memory) instead of sending it to the browser immediately.
- **Flexibility:** This allows the script to process all logic—including redirects—at any point.
- **Final Delivery:** `ob_end_flush()` releases the stored HTML to the browser only after the script has finished its logic.

## Create the first version of the Login Page (`login.php`)


> [!note] Goal: Develop a page to allow users to login to their account.

> [!important] Learning Outcomes:
> - Further PHP development skills
> - Security issues with PHP development

### How To Guide

This file authenticates existing users and starts their session.

1. **Create `login.php`**.
![[userMgmtLoginInit.png]]
2. Create the UI for the login page.

![[userMgmtLoginUI.png]]

```php
<?php
// Start output buffering to handle header redirection
ob_start();

// Include template (config.php inside template.php should have session_start())
include "template.php";


/** @var $db */
?>
<title>Login | Access Your Account</title>

<style>
    body {
        background-color: #eee;
    }

    .card-login {
        border-radius: 25px;
    }

    .form-icon {
        color: #aaa;
        margin-right: 10px;
    }

    .vh-100 {
        min-height: 100vh;
    }
</style>

<section class="vh-100 py-5">
    <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
                <div class="card text-black card-login shadow-lg">
                    <div class="card-body p-md-5">
                        <div class="row justify-content-center">

                            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-2 order-lg-1">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                    class="img-fluid" alt="Login illustration">
                            </div>

                            <div class="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-2">
                                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                                <form class="mx-1 mx-md-4"
                                    action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-envelope fa-lg me-3 fa-fw form-icon"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="username">Email Address</label>
                                            <input type="email" id="username" name="username"
                                                class="form-control form-control-lg" required />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-lock fa-lg me-3 fa-fw form-icon"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="password">Password</label>
                                            <input type="password" id="password" name="password"
                                                class="form-control form-control-lg" required />
                                        </div>
                                    </div>

                                    <div class="text-center text-lg-start mt-4 pt-2">
                                        <button type="submit" name="login"
                                            class="btn btn-primary btn-lg px-5 shadow w-100">Login</button>
                                        <p class="small fw-bold mt-3 pt-1 mb-0">Don't have an account?
                                            <a href="register.php" class="link-danger text-decoration-none">Register</a>
                                        </p>
                                    </div>

                                </form>

                                <div class="mt-4">
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php
ob_end_flush();
?>

```


3. **Verify** the username and password entered against the database.

![[userMgmtLoginVerifyV1.png]]

```php
<?php
	if (isset($_POST['login'])) {
		$v_input_user = $_POST['username'];
		$v_input_pass = $_POST['password'];
		
		$sql = "SELECT * FROM users WHERE email_address = '$v_input_user' AND password = '$v_input_pass'";
		$stmt = $pdo->query($sql);
		$user = $stmt->fetch();
	}
?>
```
> [!note] The verification code needs to be placed in the correct place within the HTML. Ensure that the code gets entered **after** the `</form>` and before the `</div>` as shown in the screenshot.

4. Finalise the authentication of the user (if the username and password match) or inform the user that there was an error

![[userMgmtLoginUserFoundV1.png]]

```php
if ($user) {
	// User is found and authenticated correctly.
	$_SESSION['user_id'] = $user['user_id'];
	$_SESSION['username'] = $user['username'];
	$_SESSION['first_name'] = $user['first_name'];
	$_SESSION['access_level'] = $user['access_level'];

	$_SESSION['success_message'] = "Welcome back, " . htmlspecialchars($user['first_name']) . "!";
} else {
	// Username and/or password is incorrect.
	$_SESSION['error_message'] = "Invalid email/username or password.";
	header("Location: index.php");
}
```

5. Test the login process by logging in with a previously created account. 

>[!note]- There is an issue with the authentication. Do you know what it is?
>The passwords are **hashed** prior to being stored in the database during registration. If the user enters the password as `password` it is stored in database as `$2y$12$FlcnjrEWjyLWoXrjd1pV8uIUbVq6wMyIetARNRkG/A6Qd6D0ysvyi` or similar. 
>So, when the user attempts to log in, the system won't be able to successfully compare `password` to `$2y$12$FlcnjrEWjyLWoXrjd1pV8uIUbVq6wMyIetARNRkG/A6Qd6D0ysvyi` as the code is attempting to do so.
>To solve this, the code will need to hash what the user has entered into the login form and then compare that hash against what's stored in the database. Therefore it will compare `$2y$12$FlcnjrEWjyLWoXrjd1pV8uIUbVq6wMyIetARNRkG/A6Qd6D0ysvyi` to `$2y$12$FlcnjrEWjyLWoXrjd1pV8uIUbVq6wMyIetARNRkG/A6Qd6D0ysvyi` and determine the password is correct.

6.  Update the login process to first find if the user exists and *then* compare the hashed password.

![[userMgmtLoginPasswordHashV1.png]]

```php
  $sql = "SELECT * FROM users WHERE email_address = '$v_input_user'";
```

and

```php
if ($user && password_verify($v_input_pass, $user['password_hash'])) {
```

7. Test the Login process now. You should find it successful.
### Explanation

In a relational database system, the login process isn't just about checking a password; it’s about **Identity Management**.

##### 1. The HTML Form Structure (`POST` Method)

The form uses `method="post"`.

- **Security:** Unlike `GET` (which puts your password in the URL bar), `POST` sends the data inside the body of the HTTP request, keeping sensitive information hidden from browser history.
- **The `name` Attribute:** This is the most important part of your HTML. When you write `<input name="username">`, PHP creates a key in the `$_POST` array called `['username']`. Without the `name` attribute, PHP cannot "see" what the user typed.

##### 2. The Logic Flow: Fetch, then Verify

The PHP logic follows a specific "if-then" architecture:

- **The Fetch:** First, we ask the database: _"Does this username exist?"_ We use a Prepared Statement (`$db->prepare`) to prevent SQL injection.
- **The Verification:** If the user exists, we get the hashed password from the database. We then use `password_verify()`. This function takes the plain-text password from the form, hashes it using the same algorithm used during registration, and checks if the results match.
- **The Result:** If they match, we "set the session"—this is like giving the user a VIP wristband that they wear as they browse the rest of your shop.
- Once verified, you must store data that the template.php can use to update the navbar.
```php
$_SESSION['user_id']: Used for database queries on the profile page.
$_SESSION['first_name']: Used to say "Welcome, [Name]" in the header.
$_SESSION['access_level']: Used to hide or show "Admin" buttons.
```


## Resolve the Security Issues in Login Page (`login.php`)


> [!note] Goal: Attempt to resolve the security issue with the existing login script.
> Identify the structural flaw in your current login script and rewrite it using defensive coding practices to ensure user input cannot be executed as database commands.

> [!important] LEARNING OUTCOME/S: 
> - SQL Injections
> - How to mitigate the risk or SQL Injections
> - Using PDO Prepared statements 

Many web applications appear secure on the outside, but underneath their login forms lies a critical vulnerability: **SQL Injection (SQLi)**. If a login script is built by directly gluing user inputs into an SQL command, an attacker can bypass authentication entirely without needing a valid password.

This guide takes your existing login form (`login.php`) and teaches you how to identify this major security vulnerability, exploit it in a safe testing environment, and then completely secure it using **SQL Prepared Statements**.

### How To Guide

1.  Open your existing `login.php` file. Look closely at the inline processing block located near the bottom of the file. Notice how the raw `$v_input_user` variable is concatenated (glued) directly inside the SQL string:
![[userMgmtLoginIdIssue.png]]

2.  Test the Exploit (Safe Penetration Testing), to prove that your original script is vulnerable execute a classic SQL Injection bypass attack.
	1. Open your browser and navigate to your local login page.
	2. In the **Email Address** field, enter the following payload exactly:
    ```
    admin@admin.com' OR '1'='1
    ```
    3. Type any random letters into the **Password** field (e.g., `invalid_password`) and click **Login**.
    4. **The Result:** The SQL interpreter evaluates the condition `'1'='1'` as `true`. This causes the database to return the administrator account and log you in _without_ requiring a valid cryptographic password match!
    
3. Secure the Script Using Prepared Statements

To eliminate this risk, we must separate the SQL commands (the structural query) from the user-supplied data variables. We do this by replacing the concatenated variables with **named parameters** (`:username` or `:email`) and letting PDO compile them separately.

Replace the contents of your `login.php` with this secure, updated implementation. This script integrates your original Bootstrap template and styling with defensive filtering, session regeneration, and secure parameter binding:

![[userMgmtLoginV2Resolved.png]]

```php
 <?php
if (isset($_POST['login'])) {
	// 1. Trim and sanitise input to eliminate accidental whitespace or tags
	$v_input_user = sanitiseData($_POST['username'] ?? '');
	$v_input_pass = $_POST['password'] ?? '';

	if (empty($v_input_user) || empty($v_input_pass)) {
		$_SESSION['error_message'] = "Please fill in all authentication fields.";
	} else {
		try {
			// 2. DEFENSIVE FIX: Use a named placeholder (:username) instead of string concatenation
			// (Note: we use 'username' as the database email column matching Unit 3 guidelines)
			$sql = "SELECT user_id, username, password_hash, first_name, access_level 
					FROM users 
					WHERE username = :username";

			// 3. Prepare the statement with the database engine
			$stmt = $db->prepare($sql);

			// 4. Execute the query, binding our sanitised input variable to the placeholder
			$stmt->execute(['username' => $v_input_user]);
			$user = $stmt->fetch();

			if ($user && password_verify($v_input_pass, $user['password_hash'])) {
				// User is found and authenticated correctly.
				$_SESSION['user_id'] = $user['user_id'];
				$_SESSION['username'] = $user['username'];
				$_SESSION['first_name'] = $user['first_name'];
				$_SESSION['access_level'] = $user['access_level'];

				$_SESSION['success_message'] = "Welcome back, " . htmlspecialchars($user['first_name']) . "!";

			} else {
				// Username and/or password is incorrect.
				$_SESSION['error_message'] = "Invalid email/username or password.";
			}
		} catch (PDOException $e) {
			// Log errors internally; hide raw database errors from the client
			error_log("Secure Database Exception: " . $e->getMessage());
			$_SESSION['error_message'] = "A secure authentication error occurred. Please try again later.";
		}
	}
}
?>
```

4. Verification & Testing Protocol (Docker Desktop & phpMyAdmin)

To document your defensive programming evidence:

1. Open **Docker Desktop** and verify your container stack is active.
2. Open your website in your browser and click on the "Login" page.
3. Attempt to run the exact same SQL Injection bypass payload from Step 2:
    - **Email Address:** `admin@admin.com' OR '1'='1`
    - **Password:** `any_invalid_password`
4. **Expected Outcome:** The login attempt must fail immediately, redirecting you back to the login screen with the error banner: _"Invalid email/username or password credentials."_
5. Log into **phpMyAdmin**, browse to your `users` table, and verify that no tables or data rows were exposed, modified, or altered by the attack payload.



![[commonBlocks#Commit & Push]]
### Explanation

Let's break down the system security architecture of how an SQL Injection attack manipulates database engines and how prepared statements block them.

#### 1. How String Concatenation Causes SQL Injection

When the server processes your vulnerable `v1` script, it takes whatever string the user inputs and glues it directly inside the single quotes of your query:

```sql
SELECT * FROM users WHERE email_address = '[USER_INPUT]'
```

When an attacker inputs the payload `admin@admin.com' OR '1'='1`, the raw query processed by the database engine changes structurally to this:

```sql
SELECT * FROM users WHERE email_address = 'admin@admin.com' OR '1'='1'
```

- **The Breakout:** The single quote inside our payload closes the SQL string literal early.
- **The Injection:** The `OR` operator injected by the attacker appends a secondary conditional test.
- **The Logic Flaw:** Because `'1'='1'` is **always true**, the database engine ignores the email check completely and returns every single row in the `users` table. The PHP script simply selects the first row returned (typically the administrator), completely bypassing password validation.

#### 2. How Prepared Statements Save the Day

A **Prepared Statement** (also known as a parameterised query) changes how the web application communicates with the database server:

1. **Pre-compilation (The Blueprint):** The application sends the template query containing parameter placeholders to the database server first:

```sql
SELECT * FROM users WHERE username = :username
```

The database server analyses this structure, compiles the query blueprint, and plans the physical lookup execution.
2. **Parameter Binding (The Passenger):** The application then sends the raw user input parameters separately. The database server treats the incoming parameter as a strictly **literal text value**, placing it directly into the placeholder box.

Even if the user input contains SQL syntax like `' OR '1'='1`, the database server will not run it as an executable command. Instead, it literally searches your database for a user whose exact username matches the literal string `"' OR '1'='1"`.

```
Secure Prepared Statement:
SQL Query:   SELECT * FROM users WHERE username = :username
User Input:  admin@admin.com' OR '1'='1
Result Query: SELECT * FROM users WHERE username = "admin@admin.com' OR '1'='1"  <-- INTERPRETED AS PURE STRING!
```

#### 3. Cryptographic Defences: `password_verify()`

In addition to blocking SQL Injections, secure login scripts must handle password checking correctly:

- **The Danger of Plaintext:** Storing passwords in clear text is a fatal vulnerability.
- **Salt and Hash:** Our database uses `password_hash()` to convert plaintext passwords into a unique 60-character cryptographic signature using the bcrypt algorithm. This adds a unique salt string automatically to protect against lookup tables or dictionary attacks.
- **Verification:** The `password_verify($passwordInput, $user['password_hash'])` function takes the incoming user password, applies the same bcrypt algorithm alongside the stored salt, and returns `true` only if the resulting signature matches the database hash fingerprint.

#### 4. Preventing Session Fixation

A session fixation attack occurs when an attacker steals or sets a victim's Session ID before they log in. Once the victim logs in, the attacker can hijack their active session.

Our secure script implements:

```
session_regenerate_id(true);
```

This forces PHP to issue a brand-new, randomised Session ID cookie upon successful authentication and deletes the old session file on the server, completely neutralising session hijacking vectors.

## Create the Logout Script (`logout.php`)


> [!note] Goal: Develop a page to allow users to logout of their account.

> [!important] Learning Outcomes:
> - Simple, effective and secure logging out of account.


### How To Guide

This file ends the user's authenticated state.

1. **Create `logout.php`**.
![[userMgmtLogoutInit.png]]

2. Clear Browser Cache Data: Use `unset()` for `$_SESSION['user_id']` and other user-specific data.

![[userMgmtLogoutUnset.png]]

```php
<?php
session_start();

// Instead of destroying the whole session, just clear the user data
// This is more reliable for "Flash Messages"
unset($_SESSION['user_id']);
unset($_SESSION['username']);
unset($_SESSION['access_level']);
?>
```
This will clear the browser's memory of any private user data.

3. Notify the user of the successful action: Set a `logout_message` in the session and redirect the user back to the homepage.

![[userMgmtLogoutFlash.png]]

```php
// Set the flash message
$_SESSION['logout_message'] = "You have successfully logged out.";
```

4. Redirect the user to the home page.

![[userMgmtLogoutRedirect.png]]

```php
header("Location: index.php");
exit();
```

### Explanation

The logout process seems simple on the surface, but it represents an architectural decision regarding how user state and temporary application notifications interact.

#### 1. `session_start()` and the Session Lifecycle

Every PHP file that needs to read or write session data must invoke `session_start()` before any output is generated.

- **The Connection:** This function tells PHP to look for a unique session identifier cookie (usually called `PHPSESSID`) sent by the user's browser.
- **The Retrieval:** If it finds it, PHP reconstructs the `$_SESSION` global array with the data stored on the server for that specific user. Without this call, `$_SESSION` remains empty and unlinked.

#### 2. Selective Destruction: `unset()` vs. `session_destroy()`

A common approach to logging out a user is calling `session_destroy()`. However, the provided code purposefully takes a different approach:

```PHP
unset($_SESSION['user_id']);
unset($_SESSION['username']);
unset($_SESSION['access_level']);
```

- Calling `session_destroy()` deletes the entire session file on the server. While this completely logs out the user, it immediately wipes out any ability to carry information forward to the next page layout.
- By using `unset()`, you surgically remove only the identity indicators (`user_id`, `username`, `access_level`) that grant authenticated access. The session container itself remains alive.
	- **This will leave any other session variables in memory!**

#### 3. The Mechanics of Flash Messages

Because `unset()` leaves the session container intact, you can store temporary data right before the user leaves the page:

```PHP
$_SESSION['logout_message'] = "You have successfully logged out.";
```

- **Persistence across Redirects:** This creates a **Flash Message**. When the user is redirected to the home page, the homepage logic can read `$_SESSION['logout_message']`, render a clean Bootstrap notification alert, and then immediately run `unset($_SESSION['logout_message'])` so it never displays again on a refresh.

#### 4. Network Clean Exit (`header` and `exit`)

The final two lines manage server-to-browser network communication.

- **`header("Location: index.php")`:** This sends a raw HTTP `302 Redirect` header back to the browser, instructing it to immediately load `index.php`.
- **`exit()`:** **Crucial Security Element.** The `header()` function does not stop PHP from executing the rest of the script. If there were malicious code underneath a header redirect, a hacker could ignore the redirect and execute the downstream code. `exit()` halts script execution instantly on the server.

## Create the Profile Management Page (`profile.php`)


> [!note] Goal: Allow users to edit their details in the database

> [!important] Learning Outcomes:
> - Preloading user details
> - Allowing Update of data.

### How To Guide

This file allows logged-in users to update their information.

1. **Create `profile.php`**.
![[userMgmtProfileInit.png]]

2. Include the default output buffering, used throughout the site - [[#Why use Output Buffering?|Click Here for details.]]  Import `template.php` to standardise the UI of the site.
![[userMgmtProfileInclude.png]]

```php
<?php
// Start output buffering to handle header redirection
ob_start();

// Include template (config.php inside template.php handles session_start)
include "template.php"; 

/** @var $db */
?>


<?php
ob_end_flush();
?>
```
2. Add a check at the top: if `$_SESSION['user_id']` is not set, redirect the user to the login page. After that, set the `user_id` variable to the used later in the code.
![[userMgmtProfileCheckUser.png]]

```php
// Redirect to login if not logged in
if (!isset($_SESSION['user_id'])) {
    $_SESSION['error_message'] = "Please log in to view your profile.";
    header("Location: login.php");
    exit();
}

$user_id = $_SESSION['user_id'];
```


3. Include custom CSS to improve the User Interface (UI) for the user. 

![[userMgmtProfileStyle.png]]

```css
<style>
    body { background-color: #f0f2f5; }
    .profile-card {
        background-color: #ffffff;
        max-width: 800px;
        margin: 40px auto;
        padding: 40px;
        border-radius: 15px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        border: 1px solid #dee2e6;
    }
    .form-label { fw-bold; color: #495057; }
</style>
```

> [!note] Notice that the `<style>...</style>` block is located *in between* the PHP blocks. This means that it is treated as HTML code.


4. Create the form using HTML, with Bootstrap styles.
![[userMgmtProfileForm.png]]

```html
<div class="container">
    <div class="profile-card">
        <div class="text-center mb-4">
            <i class="fas fa-user-circle fa-4x text-primary mb-3"></i>
            <h2 class="fw-bold">My Profile</h2>
            <p class="text-muted">Manage your personal information and account settings</p>
        </div>

        <form action="profile.php" method="post">
            <div class="row">
                <div class="col-12 mb-4 border-bottom pb-2">
                    <h5 class="text-primary"><i class="fas fa-lock me-2"></i>Account Details</h5>
                </div>
                
                <div class="col-md-12 mb-3">
                    <label class="form-label">Email / Username</label>
                    <input type="email" name="username" class="form-control" value="<?= htmlspecialchars($user['username']) ?>" required>
                </div>

                <div class="col-12 mb-4 mt-3 border-bottom pb-2">
                    <h5 class="text-primary"><i class="fas fa-id-card me-2"></i>Personal Information</h5>
                </div>

                <div class="col-md-6 mb-3">
                    <label class="form-label">First Name</label>
                    <input type="text" name="first_name" class="form-control" value="<?= htmlspecialchars($user['first_name']) ?>" required>
                </div>

                <div class="col-md-6 mb-3">
                    <label class="form-label">Second Name</label>
                    <input type="text" name="second_name" class="form-control" value="<?= htmlspecialchars($user['second_name']) ?>" required>
                </div>

                <div class="col-md-6 mb-3">
                    <label class="form-label">Phone Number</label>
                    <input type="tel" name="phone_number" class="form-control" value="<?= htmlspecialchars($user['phone_number']) ?>" required>
                </div>

                <div class="col-md-12 mb-3">
                    <label class="form-label">Address</label>
                    <textarea name="address" class="form-control" rows="3" required><?= htmlspecialchars($user['address']) ?></textarea>
                </div>
            </div>

            <div class="d-grid gap-2 mt-4">
                <button type="submit" name="update_profile" class="btn btn-primary btn-lg">
                    <i class="fas fa-save me-2"></i>Save Changes
                </button>
                <a href="index.php" class="btn btn-outline-secondary">Cancel</a>
            </div>
        </form>
    </div>
</div>
```

This code will be rendered by the browser to show the following form.

![[userMgmtProfileRendered.png]]

5.  Focusing on the functionality, now that the UI has been completed, sanitise the form data by calling `sanitiseData()` for each form input box. 
![[userMgmtProfileSanitiseFormData.png]]

```php
// 1. Handle Form Submission (Update Data)
if (isset($_POST['update_profile'])) {
    $v_first_name  = sanitiseData($_POST['first_name']);
    $v_second_name = sanitiseData($_POST['second_name']);
    $v_address     = sanitiseData($_POST['address']);
    $v_phone       = sanitiseData($_POST['phone_number']);
    $v_username    = sanitiseData($_POST['username']);

}
```

>[!note] Each form element has a `name` attribute set. Use this name to retrieve the data for `sanitiseData()`.
>![[userMgmtProfileNameAttribute.png]]

>[!note] `isset($_POST['update_profile'])` will be `true` after the user has pressed the **Save Changes** button in the form, identified by the `name` attribute.
>![[userMgmtProfileNameAttributeSubmit.png]]

6. Build the structure to update the database with the new data previously collected.

![[userMgmtProfileTryCatch.png]]

```php
try {
       

        $_SESSION['success_message'] = "Profile updated successfully!";
        header("Location: profile.php");
        exit();
    } catch (PDOException $e) {
        $_SESSION['error_message'] = "Failed to update profile. Please try again.";
        header("Location: profile.php");
        exit();
    }

```

7. Include the code to configure the SQL to update the `users` table with the updated data for the current user.

![[userMgmtProfileSQL.png]]

```php
        $sql = "UPDATE users 
                SET username = :username, 
                    first_name = :fname, 
                    second_name = :sname, 
                    address = :address, 
                    phone_number = :phone 
                WHERE user_id = :id";
        
        $stmt = $db->prepare($sql);
        $stmt->execute([
            ':username' => $v_username,
            ':fname'    => $v_first_name,
            ':sname'    => $v_second_name,
            ':address'  => $v_address,
            ':phone'    => $v_phone,
            ':id'       => $user_id
        ]);
        
        // Update session username in case they changed their email
		$_SESSION['username'] = $v_username;
```
8. Finally, retrieve the user details for the current user from the database.

![[userMgmtProfileRetrieveUser.png]]
```php
// 2. Fetch Current User Data
$query = $db->prepare("SELECT username, first_name, second_name, address, phone_number FROM users WHERE user_id = :id");
$query->execute([':id' => $user_id]);
$user = $query->fetch();

if (!$user) {
    die("User not found.");
}
```

![[commonBlocks#Commit & Push]]

### Explanation

The `profile.php` file manages a fundamental CRUD operation: **U**pdating existing database records. Unlike registration, this file requires an active authentication state and robust defence mechanics against web vulnerabilities.

#### 1. Access Control (The Gatekeeper)

Before rendering any HTML or executing queries, the script evaluates the application state:

```PHP
if (!isset($_SESSION['user_id'])) { ... }
```

Because HTTP is inherently [[Stateless Protocol (HTTP)|stateless]], the server relies on the active session array to check if a user is logged in. If `$_SESSION['user_id']` is absent, execution is blocked immediately, and the client is forced to `login.php`. This acts as an access barrier to protect user data from unauthorised manipulation.

In a [[Stateless Protocol (HTTP)|stateless]] protocol, the web server treats every single incoming request as an entirely new, isolated event. The server has total amnesia. It retains zero context or memory of what happened a fraction of a second ago.

#### 2. Form Architecture and Superglobals (`$_POST`)

When an individual alters their account information and submits the form, the web browser builds an HTTP request container using the `POST` method. On the server side, PHP instantly parses this payload into the **`$_POST` superglobal array**.

- **Scope and Access:** `$_POST` is an associative array containing keys that identically match the `name=""` attribute values assigned to the HTML form elements (e.g., `$_POST['first_name']`).
- **State Mutation:** We leverage the `POST` method over `GET` for processing actions that write or modify database records. `GET` exposes submitted parameters inside the URL query string, making it highly unsafe and easily cached by web proxies.

#### 3. Prepared Statements vs. SQL Injection

The profile update script communicates with the relational database system through a parameterised query:

```PHP
$sql = "UPDATE users SET username = :username ... WHERE user_id = :id";
$stmt = $db->prepare($sql);
```

> [!warning]- SQL Injections
> The SQL can be coded in one step, without the preparation or binding of variables to the SQL.  An example of this method could be:
>
> ```php
// INSECURE: Building the SQL query by directly embedding variables into the string
$sql = "SELECT * FROM users WHERE username = '" . $v_input_user . "'";
>
// Execution happens immediately without separating code from data
$result = $db->query($sql);
$user = $result->fetch();
>```
>**Scenario A: Normal Input**
User inputs: john@example.com
> 
> Resulting SQL string: 
> ```sql
> SELECT * FROM users WHERE username = 'john@example.com'
> ```
> 
> Outcome: The query executes perfectly, searching safely for John's profile.
> 
> **Scenario B: The Exploitation Input (Bypassing Authentication)**
> User inputs: ' OR '1'='1
> 
> Resulting SQL string: 
> ```sql
> SELECT * FROM users WHERE username = '' OR '1'='1'
> ```
> 
> Outcome: Because `'1'='1'` is always true, the database completely ignores the username requirement and returns the very first record in your database (which is almost always the Administrator account), logging the attacker in without a valid password!
> 
> **Scenario C: The Destructive Input**
> User inputs: admin@example.com'; DROP TABLE users; --
> 
> Resulting SQL string: ```sql
> SELECT * FROM users WHERE username = 'admin@example.com'; DROP TABLE users; --'
> 
> Outcome: The semicolon instructs the database engine that the first command is finished, and it immediately executes the next command: DROP TABLE users;. The trailing dashes (--) turn the rest of your original query code into a comment, preventing a syntax error. Your user table is instantly deleted.


Constructing SQL strings by directly interpolating data from a form payload (e.g., `"SET username = " . $_POST['username']`) introduces a fatal security vulnerability known as **SQL Injection (SQLi)**.

Prepared statements completely mitigate this risk by executing the query engine in a two-step handshake:

1. **Compilation Phase:** The database compiles the SQL query structure using literal placeholders (`:username`, `:fname`). The template architecture is locked in place.
    
2. **Binding Phase:** The raw strings provided inside the `$_POST` array are sent separately and bound strictly as _data payloads_. Even if an attacker passes a string loaded with SQL commands (like `'; DROP TABLE users;--`), the database treat it purely as text data, neutralizing malicious executions.
