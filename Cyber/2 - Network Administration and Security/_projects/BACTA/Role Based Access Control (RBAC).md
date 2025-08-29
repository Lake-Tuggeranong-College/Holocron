
To standardise the Role Based Access Control (RBAC) across the whole site, we're updating the database and implementing a function in `template.php` to manage the granting permission or disallowing access.

## Database Tables

Run the following SQL on the users table:

```sql
ALTER TABLE users 
    ADD COLUMN isPatient BOOLEAN;
ALTER TABLE users 
    ADD COLUMN isStaff BOOLEAN;
```

## Test Accounts

Register three new accounts on the system, through the register page:


| Account Role | Email address                 | Password     |
| ------------ | ----------------------------- | ------------ |
| Staff        | staff@staff.com               | staff        |
| Patient      | patient@patient.com           | patient      |
| StaffPatient | staffpatient@staffpatient.com | staffpatient |


As there is no method to change a users role at this stage, you will then need to go into the `users` table and manually set the values for the three accounts. Make sure you save the changes back to the database!

![[rbacNewUserAccounts.png]]

## Template function

Open `template.php` and add this function to the top of the code:

```php
function authorisedAccess(bool $allow_unauth, bool $allow_staff, bool $allow_patients){
    if (!isset($_SESSION['email_address'])) {
        header('Location: login.php');
        exit;
    }

    if (!$allow_unauth && !isset($_SESSION['email_address'])) {
        header('Location: login.php');
        exit;
    }

    if ($allow_staff && isset($_SESSION['isStaff'])) {
        return true;
    }

    if ($allow_patients && isset($_SESSION['isPatient'])) {
        return true;
    }

    // If we reach this point, the user is not authorized
    header('Location: login.php');
    exit;
}
```

![[templateAuthorisedAccess.png]]

# Update Permissions

Using `register_patients.php` as the test page, add the following check at the top of the page:

```php
if (!authorisedAccess(false,true,false)) {
    // If the user is not authorized, redirect to login
     header('Location: login.php');
        exit;
}
```

![[registerPatientsAuthorisationCheck.png]]


## Test Security Access

After implementing the RBAC system, it's now time to test it. Before testing it, you need to decide what is the *intended* vs *actual* behaviour.

Before rolling it out to the whole site, let's focus on `register_patients.php` and decide what the behaviour is for each role (if not already defined):

| Role                           | Intended Behaviour      | Actual Behaviour |
| ------------------------------ | ----------------------- | ---------------- |
| Unauthorised (unauth)          | Redirect to `login.php` | ?                |
| Patient (patient)              | Redirect to `login.php  | ?                |
| Staff & Patient (staffpatient) | Allow access            | ?                |
| Staff (staff)                  | Allow access            | ?                |
Test the behaviour under each role and as an unauthorised user: http://localhost:8000/register_patient.php



# Debugging

If you're unsure what data is being stored in the `$_SESSION` variables, you can add this code to `template.php` to show all data:

```php
 <?php 
echo '<pre>';
var_dump($_SESSION);
echo '</pre>';
?>
```

![[rbacVarDump.png]]

This outputs data similar to the output shown below, and you can use this to confirm if `isPatient` and `isStaff` are set correctly. If the roles are set correctly, it will appear as `int(1)`. In the example below the **patient** account has the role **isPatient** set, but **isStaff** is not set.

![[rbacVarDumpOutput.png]]