To simplify and standardise the look and feel to the website, you will create a php page which contains all the common code for all pages. Notably, this page will:
- Load the Bootstrap libraries
- Define the navigation bar (navbar)
- Load any standard functions that will be required throughout the site.

# Logo

Create a directory in the project called `images`.

![[templateCreateImagesDirectory.png]]

Download the logo, or use your own, and save it in this directory as `logo.png`.

![[E Course/WebDev/_images/logo.png]]



# Template.php

Create a new file in the root directory, naming it `template.php` and copy the following code into the file. 

---

## 🧩 Step-by-Step Breakdown

### 1. **Include Configuration File**

```Php
&lt;?php require_once 'config.php'; ?&gt;
```

- This line includes `config.php`, which typically contains database connection settings and session initialization.

---

### 2. **HTML Structure and Bootstrap Integration**

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAAKCAYAAAAnx3TwAAABBklEQVR4AezXMQqAMBAEQPH/jxabNIIixOTWjCCIQtybq3bfXAQIECBAgAABAgQIECBAgMB0gY8L+vT5BCBAgAABAgQIECBAgAABAhEC2QU9glhIAgQIECBAgAABAgQIECDwLKCg3xj5RIAAAQIECBAgQIAAAQIERgko6KOkr//xhgABAgQIECBAgAABAgQINAEFvVH87cE8BAgQIECAAAECBAgQIJAkoKAnbatSVlkIECBAgAABAgQIECBAoKuAgt6V02G9BJxDgAABAgQIECBAgACB1QQU9NU2bt5TwE2AAAECBAgQIECAAIFyAgp6uZUIlC9gAgIECBAgQIAAAQIECLwXOAAAAP//9cOhhAAAAAZJREFUAwBT4QAVqieVXgAAAABJRU5ErkJggg==)

- This sets up the page with responsive design using Bootstrap.

---

### 3. **Navigation Bar with PHP Logic**

```Php
&lt;nav class="navbar navbar-expand-lg navbar-light bg-light"&gt;
    &lt;div class="container-fluid"&gt;
        &lt;a class="navbar-brand" href="index.php"&gt;
            &lt;img src="images/logo.png" alt="Blocks" width="80" height="80"&gt;
        &lt;/a&gt;
        ...
        &lt;ul class="navbar-nav me-auto mb-2 mb&gt;
            &lt;li class="nav-item"&gt;&lt;a class="nav-link" href="contact.php"&gt;Contact us&lt;/a&gt;&lt;/li&gt;

            &lt;?php if (!isset($_SESSION["username"])) : ?&gt;
                &lt;li class="nav-item"&gt;&lt;a class="nav-link" href="registration.php"&gt;Registration&lt;/a&gt;&lt;/li&gt;
            &lt;?php endif; ?&gt;

            &lt;?php if (isset($_SESSION["username"])) : ?&gt;
                &lt;li class="nav-item"&gt;&lt;a class="nav-link" href="logout.php" title="Logout"&gt;Logout&lt;/a&gt;&lt;/li&gt;
            &lt;?php endif; ?&gt;
        &lt;/ &lt;span class="navbar-text text-success"&gt;Welcome, &lt;?= htmlspecialchars($_SESSION['name']) ?&gt;&lt;/span&gt;
        &lt;?php else : ?&gt;
            &lt;a class="nav-link text-danger" href="index.php"&gt;Sign In&lt;/a&gt;
        &lt;?php endif; ?&gt;
    &lt;/div&gt;
&lt;/nav&gt;
```

- This dynamic navbar shows different links based on the user's login status.
- `$_SESSION['username']` and `$_SESSION['name']` are used to track login state and display a welcome message.

---

**Sanitisation Function**

```Php
&lt;?php
function sanitise_data($data)
{
    return htmlspecialchars(stripslashes(trim($data)));
}
?&gt;
```

- This function helps clean user input to prevent XSS and other injection attacks.

---

### 5. **Bootstrap JS Bundle**

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAAKCAYAAAAnx3TwAAABBklEQVR4AezXMQqAMBAEQPH/jxabNIIixOTWjCCIQtybq3bfXAQIECBAgAABAgQIECBAgMB0gY8L+vT5BCBAgAABAgQIECBAgAABAhEC2QU9glhIAgQIECBAgAABAgQIECDwLKCg3xj5RIAAAQIECBAgQIAAAQIERgko6KOkr//xhgABAgQIECBAgAABAgQINAEFvVH87cE8BAgQIECAAAECBAgQIJAkoKAnbatSVlkIECBAgAABAgQIECBAoKuAgt6V02G9BJxDgAABAgQIECBAgACB1QQU9NU2bt5TwE2AAAECBAgQIECAAIFyAgp6uZUIlC9gAgIECBAgQIAAAQIECLwXOAAAAP//9cOhhAAAAAZJREFUAwBT4QAVqieVXgAAAABJRU5ErkJggg==)

- This includes Bootstrap's JavaScript features like dropdowns and modals.

---

## ✅ Implementation Tips

- **Session Management**: Always start sessions in `config.php` or at the top of each PHP file.
- **Security**: Use `htmlspecialchars()` and `mysqli_real_escape_string()` for sanitizing inputs.
- **Modularity**: Keep reusable components like headers and footers in separate files and include them using `require_once`.

---

## 🧪 Testing

1. Place all files in your web server directory.
2. Start your server and navigate to `index.php`.
3. Test login/logout functionality and navigation visibility.
4. Ensure Bootstrap styles and scripts load correctly.

---

Would you like help building the `registration.php` or `logout.php` functionality next?


```php
<?php require_once 'config.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Your Page Title</title>

    <!-- Bootstrap CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

<!-- Navigation Bar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
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
                <li class="nav-item"><a class="nav-link" href="index.php">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="contact.php">Contact us</a></li>

                <?php if (!isset($_SESSION["username"])) : ?>
                    <li class="nav-item"><a class="nav-link" href="registration.php">Registration</a></li>
                <?php endif; ?>


                <?php if (isset($_SESSION["username"])) : ?>
                    <li class="nav-item"><a class="nav-link" href="logout.php" title="Logout">Logout</a></li>
                <?php endif; ?>
            </ul>

            <?php if (isset($_SESSION['name'])) : ?>
                <span class="navbar-text text-success">Welcome, <?= htmlspecialchars($_SESSION['name']) ?></span>
            <?php else : ?>
                <a class="nav-link text-danger" href="index.php">Sign In</a>
            <?php endif; ?>
        </div>
    </div>
</nav>

<?php
function sanitise_data($data)
{
    return htmlspecialchars(stripslashes(trim($data)));
}

?>

<!-- Bootstrap Bundle JS (includes Popper) -->
<script src="js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>


```

# Index page

To test the configuration, create a new file called `index.php` and copy the following code into it.

```php
<?php include 'template.php'; ?>
```

When you launch the site at http://127.0.0.1:8080/ the page should render similar to this:

![[templateBlankIndex.png]]


![[commonBlocks#Commit & Push]]