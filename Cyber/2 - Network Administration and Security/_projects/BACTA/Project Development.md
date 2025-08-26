
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

With the new pages, some links need to be added to the navbar. First, remove the duplicated **Logout** link by deleteing the code indicated.

![[templateUpdateRemoveDuplicate.png]]

Add a new link to the password reset page, but only display it when the user has logged in.

![[templateUpdatePasswordLink.png]]

```php
<li class="nav-item">
	<a class="nav-link" href="passwordreset.php">Reset Password</a>
</li>
```

# Database Updates


The following tables need to be created so that data can be added.

Click on the plus nex to **Tables** in the database. 

![[dbUpdatesAddSQL.png]]

Replace the default SQL with the following and execute it.

```sql
CREATE TABLE medical_information (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    current_medication TEXT,
    conditions TEXT,
    history TEXT,
    family_history TEXT,
    GP VARCHAR(100),
    blood_type VARCHAR(5),
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);


CREATE TABLE patient_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    medicate_number VARCHAR(50),
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE staff_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    bank_details TEXT,
    pay_rate DECIMAL(10,2),
    roster TEXT,
    position VARCHAR(100),
    work_history TEXT,
    leave_balance DECIMAL(5,2),
    super_details TEXT,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);



```


# New pages

# `register_patient.php`

Create a new file to register patients

```php
<?php
require_once 'template.php'; // Your PDO connection setup
session_start();

$message = "";

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $medicate_number = $_POST['medicate_number'];
    $current_medication = $_POST['current_medication'];
    $conditions = $_POST['conditions'];
    $history = $_POST['history'];
    $family_history = $_POST['family_history'];
    $GP = $_POST['GP'];
    $blood_type = $_POST['blood_type'];

    try {
        // Insert into users table first (if needed), or assume user already exists
        // For this example, we assume user is already created and logged in
        $userId = $_SESSION['user_id']; // Make sure this is set during login

        // Insert into patient_data
        $stmt1 = $pdo->prepare("INSERT INTO patient_data (medicate_number, userId) VALUES (:medicate_number, :userId)");
        $stmt1->execute([
            ':medicate_number' => $medicate_number,
            ':userId' => $userId
        ]);

        // Insert into medical_information
        $stmt2 = $pdo->prepare("INSERT INTO medical_information (userId, current_medication, conditions, history, family_history, GP, blood_type)
                                VALUES (:userId, :current_medication, :conditions, :history, :family_history, :GP, :blood_type)");
        $stmt2->execute([
            ':userId' => $userId,
            ':current_medication' => $current_medication,
            ':conditions' => $conditions,
            ':history' => $history,
            ':family_history' => $family_history,
            ':GP' => $GP,
            ':blood_type' => $blood_type
        ]);

        $message = "Patient registered successfully.";
    } catch (PDOException $e) {
        $message = "Error: " . $e->getMessage();
    }
}
?>

<div class="container mt-5">
    <h2 class="mb-4 text-center">Register Patient</h2>

    <?php if ($message): ?>
        <div class="alert alert-info"><?php echo htmlspecialchars($message); ?></div>
    <?php endif; ?>

    <form method="post" novalidate>
        <!-- Patient Data Section -->
        <fieldset class="border p-3 mb-4 rounded">
            <legend class="float-none w-auto px-2">Patient Data</legend>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="medicate_number" name="medicate_number" placeholder="Medicate Number" required>
                <label for="medicate_number">Medicate Number</label>
            </div>
        </fieldset>

        <!-- Medical Information Section -->
        <fieldset class="border p-3 mb-4 rounded">
            <legend class="float-none w-auto px-2">Medical Information</legend>

            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Current Medication" id="current_medication" name="current_medication" style="height: 100px"></textarea>
                <label for="current_medication">Current Medication</label>
            </div>

            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Conditions" id="conditions" name="conditions" style="height: 100px"></textarea>
                <label for="conditions">Conditions</label>
            </div>

            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Medical History" id="history" name="history" style="height: 100px"></textarea>
                <label for="history">Medical History</label>
            </div>

            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Family History" id="family_history" name="family_history" style="height: 100px"></textarea>
                <label for="family_history">Family History</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="GP" name="GP" placeholder="General Practitioner">
                <label for="GP">General Practitioner (GP)</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="blood_type" name="blood_type" placeholder="Blood Type">
                <label for="blood_type">Blood Type</label>
            </div>
        </fieldset>

        <button type="submit" class="btn btn-success w-100">Register Patient</button>
    </form>
</div>


```

# Patients

One of the major sections of the project is to store the patient data. In order to do this, we need a process to create new patients in the system.

