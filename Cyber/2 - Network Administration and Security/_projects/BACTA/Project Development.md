
# Complete the User Management files

So far, `login.php` and `register.php` have been created. In order to round off the remaining user management sub system, create the following files and copy the contents.

## `logout.php`

```php
<?php
session_start();
session_unset();
session_destroy();
header("Location: login.php");
exit;

```

## `passwordreset.php`

```php
<?php
include "template.php";
// Check if user is logged in
if (!isset($_SESSION['email_address'])) {
    header("Location: login.php");
    exit;
}

$email = $_SESSION['email_address'];
$message = "";

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $new_password = $_POST['new_password'];
    $confirm_password = $_POST['confirm_password'];

    if ($new_password !== $confirm_password) {
        $message = "Passwords do not match.";
    } elseif (strlen($new_password) < 6) {
        $message = "Password must be at least 6 characters.";
    } else {
        // Hash the new password
        $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);

        try {
            // Assuming $pdo is your PDO connection
            $stmt = $pdo->prepare("UPDATE users SET password = :password WHERE email_address = :email");
            $stmt->execute([
                ':password' => $hashed_password,
                ':email' => $email
            ]);

            $message = "Password updated successfully.";
        } catch (PDOException $e) {
            $message = "Error updating password: " . $e->getMessage();
        }


        $stmt->close();
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Reset Password</title>
</head>

<body>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h2 class="mb-4 text-center">Reset Your Password</h2>

                <?php if ($message): ?>
                    <div class="alert alert-info"><?php echo htmlspecialchars($message); ?></div>
                <?php endif; ?>

                <form method="post" action="">
                    <div class="mb-3">
                        <label for="new_password" class="form-label">New Password</label>
                        <input type="password" class="form-control" id="new_password" name="new_password" required>
                    </div>

                    <div class="mb-3">
                        <label for="confirm_password" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="confirm_password" name="confirm_password"
                            required>
                    </div>

                    <button type="submit" class="btn btn-primary w-100">Reset Password</button>
                </form>
            </div>
        </div>
    </div>
</body>

</html>
```

## Update `template.php`

First, fix the boostrap library import and some css, as indicated here:

![[bsTemplateUpdate.png]]

```php
<!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet"
        crossorigin="anonymous">
    <!-- You can change the title to reflect the page contents. -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"></script>
```

and

```php
data-bs-toggle
```
and finally,
```php
data-bs-target
```
