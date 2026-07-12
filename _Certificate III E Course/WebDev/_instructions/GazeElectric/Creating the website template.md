---
isCurrent: true
needsUpdating: false
tutorialIndex: 2
---
The template is the common code that will be used by almost all pages on the site. `template.php` will contain the single connection to `config.php` and define the standard user interface for the site. This includes the navigation, flash messages positioning and formatting, and any common php code.
## How To Guide: Creating the standard interface

> [!note] Goal: Create the initial version of `template.php` which defines a standard interface to the whole site.

> [!important] Learning Outcomes:
> - Standardising User Interface (UI) across the whole site
> - Navigation throughout the site
 
### Step 1: Create the file

Create a new file, called `template.php` in the root directory of the project.

![[templateInit.png]]

Ensure it's in the root directory (not in any folders/directories)

### Step 2: Standard Header HTML

Add a PHP block at the top of the new file.

```php
<?php 
// Ensure config.php starts the session with session_start()
require_once 'config.php'; 
?>
```

![[templateImportsConfig.png]]

Now enter the HTML `<header>` section of the page.

```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <style>
        /* Floating container for flash messages in the top right */
        .flash-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            min-width: 320px;
        }
        /* Custom spacing for the logo */
        .navbar-brand img {
            transition: transform 0.3s ease;
        }
        .navbar-brand img:hover {
            transform: scale(1.05);
        }
    </style>
</head>
```

![[templateHeader.png]]



### Step 3: Navigation Bar

Add the following code after the HTML header code.

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.php">
            <img src="images/logo.png" alt="Blocks" width="80" height="80">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="index.php"><i class="fas fa-home me-1"></i> Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.php"><i class="fas fa-envelope me-1"></i> Contact us</a>
                </li>

                    <li class="nav-item">
                        <a class="nav-link" href="register.php">Registration</a>
                    </li>
            </ul>

            <div class="d-flex align-items-center">
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-success fw-bold" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-user-circle me-1"></i> 
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="userDropdown">
                            <li><a class="dropdown-item" href="profile.php"><i class="fas fa-user-cog me-2"></i>Profile Settings</a></li>
                            <li><a class="dropdown-item" href="order_form
                            .php"><i class="fas fa-shopping-bag me-2"></i>My Orders</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li>
                                <a class="dropdown-item text-danger fw-bold" href="logout.php">
                                    <i class="fas fa-sign-out-alt me-2"></i>Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a class="btn btn-primary px-4" href="login.php">
                        <i class="fas fa-sign-in-alt me-1"></i> Login
                    </a>
            </div>
        </div>
    </div>
</nav>
```

![[templateNavbar.png]]

### Step 4: *Footer* Code

Add the following code to the **end** of the file.

```php
<div class="flash-container">
    <?php
    $flashes = [
        'success_message' => 'alert-success',
        'error_message'   => 'alert-danger',
        'info_message'    => 'alert-info',
        'logout_message'  => 'alert-info'
    ];

    foreach ($flashes as $key => $class) {
        if (isset($_SESSION[$key])) {
            $icon = 'fa-info-circle';
            if ($class == 'alert-success') $icon = 'fa-check-circle';
            if ($class == 'alert-danger')  $icon = 'fa-exclamation-triangle';

            echo "<div class='alert $class alert-dismissible fade show shadow-lg flash-msg' role='alert'>
                    <i class='fas $icon me-2'></i> " . htmlspecialchars($_SESSION[$key]) . "
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                  </div>";
            
            // Crucial: Clear the message so it doesn't show on next refresh
            unset($_SESSION[$key]);
        }
    }
    ?>
</div>
<?php
/**
 * Utility function to clean user input
 */
function sanitiseData($data)
{
    return htmlspecialchars(stripslashes(trim($data)));
}
?>

<script src="js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Find all alerts with the 'flash-message' class
        const alerts = document.querySelectorAll('.flash-message');
        
        alerts.forEach(function(alertElement) {
            // Set a timer for 10,000 milliseconds (10 seconds)
            setTimeout(function() {
                // Use Bootstrap's built-in alert close method
                const bsAlert = new bootstrap.Alert(alertElement);
                bsAlert.close();
            }, 10000);
        });
    });
</script>

</body>
</html>
```

![[templateFooterCode.png]]

Whilst not strictly footer code as such, it is placed at the end of the file as it is processed after all other HTML and PHP has been rendered and executed.

### Step 5: Logo

Create a `/images` directory in the root directory of the project.

![[templateImagesDirectory.png]]

Find a logo online (make sure it's licsenced as Creative Commons), generate one, or use this provided logo.

![[_Certificate III E Course/WebDev/_instructions/GazeElectric/_images/logo.png]]

Save the file as `logo.png` into the images folder.

![[templateLogoSaved.png]]

Refresh the website and the logo should now appear.

![[templateLogoDisplayed.png]]



![[commonBlocks#Commit & Push]]

## Explanation

In modern web development, we rarely write the same HTML header or navigation code on every single page. Instead, we use a **template**.

### 1. The Power of `require_once`

By including `config.php` at the very top of our template, we ensure that every page on our site inherits the same core settings.

- **Session Management:** This is where `session_start()` usually lives, allowing the website to "remember" if a user is logged in as they click from page to page.
- **Consistency:** If you ever change your database password or site name, you change it in one config file, and it updates everywhere instantly.

### 2. Why use a Template?

A template acts as a "wrapper" for your content.

- **Maintenance:** Without a template, if you wanted to add a "About Us" link to your navbar, you would have to edit `index.php`, `contact.php`, `login.php`, etc. With a template, you edit **one** file.
- **Visual Identity:** It ensures that the CSS (Bootstrap) and JavaScript libraries are loaded in the same order on every page, preventing layout "flickers" or broken menus.

### 3. Responsive Navigation

The code in **Step 3** uses Bootstrap’s "Navbar-Toggler."

- **The Logic:** On a desktop, the menu is visible. On a mobile device, the menu "collapses" into a hamburger icon.
- **User Experience:** By including the Login and Profile buttons in the template, the user always has a clear "exit" or "entry" point regardless of where they are in the shop.

