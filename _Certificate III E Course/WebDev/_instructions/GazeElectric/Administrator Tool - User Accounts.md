---
isCurrent: true
needsUpdating: true
tutorialIndex: 6
---

> [!note] Goal: Create a unified management terminal (`admin_users.php`) that allows authorised staff to list, provision, edit, and safely deprecate application user accounts.

> [!important] Learning Outcomes:
> - TODO

This stage of development relies heavily on the `access_level` field in the `users` table in the database.

**Recall** that the `access_level` value is retrieved from the database when the user successfully logs in to the site and is stored in a session variable.

![[adminSessionVariable.png]]

> [!important] **Prerequisite** You will need an account that has been registered, and then you will need to manually change the access level to 2 through PHPMyAdmin.
> ![[adminUsersAdminAccount.png]]


## How To Guide

1. Create a new file in the root directory of the project, named `admin_users.php`.
![[adminUsersNewFile.png]]

2. Start the file with the following code:
![[adminUsersInit.png]]

```php
<?php
ob_start();
include "template.php"; 

/** @var $db */

?>
```

>[!note] As with most other files, this starter code loads first creates a buffer to load all rendered code and applies the template code.

3. Insert the following code immediately after the `$db` comment:
![[adminUsersAccessLevelCheck.png]]

```php
// Security Check: Administrator Access Only (access_level >= 2)
if (!isset($_SESSION['access_level']) || $_SESSION['access_level'] < 2) {
    $_SESSION['error_message'] = "Access denied. Administrator privileges required.";
    header("Location: index.php");
    exit();
}
```

> [!note] This standard code should appear on any page that's required by administrators. If the user (authenticated or not) does not have an `access_level` of 2 or higher, the site will redirect them to the homepage then show them an error.
> This requires testing!

4. Get the current User ID
![[adminUsersAdminID.png]]
```php
$current_admin_id = $_SESSION['user_id'];
```

5. Write a helper block of code to allow the administrator edit a user's details. Place the code at the end of the initial php block.

![[adminUsersEditUserCode.png]]

```php
// Fetch single user for editing
$edit_user = null;
if (isset($_GET['edit'])) {
    $stmt = $db->prepare("SELECT * FROM users WHERE user_id = ?");
    $stmt->execute([(int)$_GET['edit']]);
    $edit_user = $stmt->fetch();
}
```

6. Start defining the UI for the page.
![[adminUsersUILayout.png]]

```html
<div class="container-fluid py-4" style="max-width: 1400px;">
    <h2 class="mb-4"><i class="fas fa-users-cog me-2"></i>User Account Management</h2>

    <div class="row">
        <!-- FORM COLUMN: Add / Edit User -->
        <div class="col-lg-4 mb-4">

        </div>


        <!-- LIST COLUMN: View / Manage Users -->
        <div class="col-lg-8">

        </div>
    </div>
</div>
```

> [!note] This code establishes a responsive [[Bootstrap container]] with a maximum width of 1400px and vertical padding to structure the page layout. 
> See the explanation on [[#Bootstrap Columns]] for details.
> Inside, it renders a styled second-level heading complete with a FontAwesome "users-cog" settings icon and margin spacing, serving as the main visual title for the user management dashboard.
> 
> The page will be designed as shown:
> ![[adminUsersUILayoutWireframe.png]]
7. Add the code to display a list of all the users:
![[adminUsersListUsers.png]]

```php
<div class="card shadow-sm border-0">
	<div class="card-body p-0">
		<div class="table-responsive">
			<table class="table table-hover align-middle mb-0">
				<thead class="table-light">
					<tr>
						<th class="ps-3">ID</th>
						<th>Full Name</th>
						<th>Username (Email)</th>
						<th>Phone</th>
						<th>Access</th>
						<th class="text-end pe-3">Actions</th>
					</tr>
				</thead>
				<tbody>
					<?php
					$users = $db->query("SELECT * FROM users ORDER BY user_id ASC")->fetchAll();
					foreach ($users as $u):
						$is_current_self = ($u['user_id'] === $current_admin_id);
					?>
					<tr class="<?= $is_current_self ? 'table-primary-subtle' : '' ?>">
						<td class="ps-3">#<?= $u['user_id'] ?></td>
						<td>
							<strong><?= htmlspecialchars($u['first_name'] . ' ' . $u['second_name']) ?></strong>
							<?php if ($is_current_self): ?>
								<span class="badge bg-primary ms-1">You</span>
							<?php endif; ?>
						</td>
						<td><?= htmlspecialchars($u['username']) ?></td>
						<td><?= htmlspecialchars($u['phone_number']) ?></td>
						<td>
							<?php if ($u['access_level'] >= 2): ?>
								<span class="badge bg-danger"><i class="fas fa-shield-alt me-1"></i> Admin</span>
							<?php else: ?>
								<span class="badge bg-secondary"><i class="fas fa-user me-1"></i> Customer</span>
							<?php endif; ?>
						</td>
						<td class="text-end pe-3">
							<a href="admin_users.php?edit=<?= $u['user_id'] ?>" class="btn btn-sm btn-info text-white me-1" title="Edit account">
								<i class="fas fa-edit"></i>
							</a>
							<?php if (!$is_current_self): ?>
								<a href="admin_users.php?delete=<?= $u['user_id'] ?>" 
								   class="btn btn-sm btn-danger" 
								   onclick="return confirm('Are you sure you want to permanently delete this user? This cannot be undone.')" 
								   title="Delete account">
									<i class="fas fa-trash"></i>
								</a>
							<?php else: ?>
								<button class="btn btn-sm btn-secondary" disabled title="Cannot delete yourself">
									<i class="fas fa-trash"></i>
								</button>
							<?php endif; ?>
						</td>
					</tr>
					<?php endforeach; ?>
				</tbody>
			</table>
		</div>
	</div>
</div>
```

> [!note]- Code Explanation
> This looks like, and is, complex code. However it can be broken down into a few key areas.
> # Code Explanation: Dynamic Administration Grid (`admin_users.php`)
> 
> This technical reference document provides a deep-dive line-by-line explanation of the dynamic user listing table. For ACT BSSS Software Development students, understanding how these components process data is key to demonstrating mastery in data persistence and defensive programming.
> 
> ## 1. Data Retrieval and the Loop Structure
> 
> The listing interface relies on a robust database-to-HTML mapping structure to display accounts dynamically:
> 
> ```
> $users = $db->query("SELECT * FROM users ORDER BY user_id ASC")->fetchAll();
> foreach ($users as $u):
>     $is_current_self = ($u['user_id'] === $current_admin_id);
> ?>
> ```
> I.e. The code loops over as many user accounts that are in the `users` table.
> 
> ### Key Technical Concepts:
> 
> - **`$db->query(...)`:** This directly executes a standard SQL `SELECT` statement on your relational database. We sort the output using `ORDER BY user_id ASC` so that accounts are presented sequentially from oldest to newest.    
> - **`fetchAll()`:** This method retrieves all matching rows returned by the query and packages them into a structured PHP array.
> - **`foreach ($users as $u):`** This loop iterates through the list of users. In each cycle, the variable `$u` represents a single user record (an associative array where keys match database column headers like `username`, `first_name`, etc.).
> - **State Identification (`$is_current_self`):** The boolean expression checks if the database ID of the row being rendered (`$u['user_id']`) matches the ID of the administrator currently logged in (`$current_admin_id`).
> 
> ## 2. Dynamic Style Binding & Self-Identity Highlights
> 
> To prevent administrators from losing track of their own accounts, the UI dynamically changes row styles based on who is logged in:
> 
> ```
> <tr class="<?= $is_current_self ? 'table-primary-subtle' : '' ?>">
> ```
> 
> ### Key Technical Concepts:
> 
> - **Ternary Operator (`? :`):** This is a shorthand `if-else` statement. If `$is_current_self` evaluates to `true`, PHP outputs the class name `'table-primary-subtle'`. This tells Bootstrap to apply a soft blue background to the row. If it is `false`, it outputs an empty string, keeping the default white background.
> - **Short Echo Tag (`<?= ... ?>`):** This shorthand is equivalent to `<?php echo ... ?>`, instantly outputting the evaluated string directly into the HTML markup.
> ## 3. Mitigating Cross-Site Scripting (XSS)
> 
> To protect the system from malicious script injections, all user-submitted text must be cleaned before rendering:
> 
> ```
> <strong><?= htmlspecialchars($u['first_name'] . ' ' . $u['second_name']) ?></strong>
> ```
> 
> ### Key Technical Concepts:
> 
> - **String Concatenation (`.`):** PHP joins the `first_name` and `second_name` strings together with a space character in between.
> - **`htmlspecialchars()`:** This is a vital security function. It intercepts special characters (such as `<`, `>`, and `&`) and converts them into harmless HTML entity equivalents (like `&lt;` and `&gt;`). If a malicious user sets their name to `<script>exploit()</script>`, this function ensures the browser renders the code safely as flat text rather than executing it as a script.
> 
> ## 4. Conditional Badges & Access Level Display
> 
> The interface renders distinct role indicators to help administrators quickly identify account types:
> 
> ```
> <?php if ($u['access_level'] >= 2): ?>
>     <span class="badge bg-danger"><i class="fas fa-shield-alt me-1"></i> Admin</span>
> <?php else: ?>
>     <span class="badge bg-secondary"><i class="fas fa-user me-1"></i> Customer</span>
> <?php endif; ?>
> ```
> 
> ### Key Technical Concepts:
> 
> - **Control Flow Separation:** PHP evaluates the integer value in the database's `access_level` column.
> - **Level 2 (Admin):** Users with an access level of 2 or higher are given a red badge (`bg-danger`) with a shield icon.
> - **Level 1 (Customer):** Standard users are given a neutral grey badge (`bg-secondary`) with a user icon.
> 
> ## 5. Defensive UX: Preventing Self-Deletion
> 
> To prevent an administrator from accidentally deleting their own account and locking themselves out of the system, the actions column implements a strict logical gate:
> 
> ```
> <?php if (!$is_current_self): ?>
>     <a href="admin_users.php?delete=<?= $u['user_id'] ?>" 
>        class="btn btn-sm btn-danger" 
>        onclick="return confirm('Are you sure...')" 
>        title="Delete account">
>         <i class="fas fa-trash"></i>
>     </a>
> <?php else: ?>
>    <button class="btn btn-sm btn-secondary" disabled title="Cannot delete yourself">
>         <i class="fas fa-trash"></i>
>    </button>
> <?php endif; ?>
> ```
> 
> ### Key Technical Concepts:
> 
> - **The Logical NOT (`!$is_current_self`):** If the row does _not_ belong to the logged-in administrator, the system renders an active deletion link.
> - **JavaScript Intercept (`onclick`):** The inline JS helper `confirm('...')` pops up a modal asking the user to confirm the deletion. Returning `false` from this intercept halts the browser's redirect, preventing accidental deletions.
> - **Disabled Element (`disabled`):** If the row _does_ belong to the active administrator, the system renders a disabled gray button (`.btn-secondary`). Because this is a static button and not a link (`<a>`), it cannot trigger a GET request, effectively blocking self-deletion at both the UI and backend layers.

8. Confirm the page is working correctly. Launch the site, and manually enter the `admin_users.php` page:

![[adminUsersListUsersConfirm.png]]

9. Enter the code in the first column. This code will allow the administrator to create a new user, or edit the selected user.

![[adminUsersEditUserPanel.png]]
```php
<div class="card shadow-sm border-0">
	<div class="card-header bg-dark text-white">
		<h5 class="mb-0"><?= $edit_user ? 'Edit User Details' : 'Create New Account' ?></h5>
	</div>
	<div class="card-body">
		<form action="admin_users.php" method="POST" autocomplete="off">
			<input type="hidden" name="user_id" value="<?= $edit_user['user_id'] ?? '' ?>">
			
			<div class="mb-3">
				<label class="form-label fw-bold">Email (Username)</label>
				<input type="email" name="username" class="form-control" value="<?= htmlspecialchars($edit_user['username'] ?? '') ?>" required>
			</div>

			<div class="row">
				<div class="col-md-6 mb-3">
					<label class="form-label fw-bold">First Name</label>
					<input type="text" name="first_name" class="form-control" value="<?= htmlspecialchars($edit_user['first_name'] ?? '') ?>" required>
				</div>
				<div class="col-md-6 mb-3">
					<label class="form-label fw-bold">Second Name</label>
					<input type="text" name="second_name" class="form-control" value="<?= htmlspecialchars($edit_user['second_name'] ?? '') ?>" required>
				</div>
			</div>

			<div class="mb-3">
				<label class="form-label fw-bold">Phone Number</label>
				<input type="tel" name="phone_number" class="form-control" value="<?= htmlspecialchars($edit_user['phone_number'] ?? '') ?>" required>
			</div>

			<div class="mb-3">
				<label class="form-label fw-bold">Address</label>
				<textarea name="address" class="form-control" rows="2" required><?= htmlspecialchars($edit_user['address'] ?? '') ?></textarea>
			</div>

			<div class="mb-3">
				<label class="form-label fw-bold">Access Level</label>
				<select name="access_level" class="form-select" required>
					<option value="1" <?= (isset($edit_user) && $edit_user['access_level'] == 1) ? 'selected' : '' ?>>1 - Customer</option>
					<option value="2" <?= (isset($edit_user) && $edit_user['access_level'] == 2) ? 'selected' : '' ?>>2 - Administrator</option>
				</select>
			</div>

			<div class="mb-4">
				<label class="form-label fw-bold"><?= $edit_user ? 'Reset Password' : 'Password' ?></label>
				<input type="password" name="password" class="form-control" placeholder="<?= $edit_user ? 'Leave blank to keep unchanged' : 'Enter account password' ?>" <?= $edit_user ? '' : 'required' ?>>
			</div>

			<div class="d-grid gap-2">
				<button type="submit" name="save_user" class="btn btn-primary">Save Changes</button>
				<?php if ($edit_user): ?>
					<a href="admin_users.php" class="btn btn-outline-secondary">Cancel Edit</a>
				<?php endif; ?>
			</div>
		</form>
	</div>
</div>
```

> [!note] Simply, this code displays either 
> - an empty form, allowing the administrator to add a new user, or 
> - loads the data for a particular user (`edit_user`) if the administrator has clicked the edit button.

> [!note]- Complex Code Explanation
> 
> The configuration form panel dynamically changes the display based on the action being performed
> 
> ```
> <div class="card shadow-sm border-0">
>     <div class="card-header bg-dark text-white">
>         <h5 class="mb-0"><?= $edit_user ? 'Edit User Details' : 'Create New Account' ?></h5>
>     </div>
>     ...
> ```
> 
> ### Key Technical Concepts:
> 
> - **Dynamic Header Rendering (The Ternary Operator):** The header element evaluates whether the `$edit_user` variable holds an active database record. If `$edit_user` is populated (`true`), the heading outputs **'Edit User Details'**. If it evaluates to empty or null (`false`), it defaults to **'Create New Account'** to keep the user interface contextually accurate.    
> - **Hidden State Tracker (`type="hidden"`):** 
>  ```html
> <input type="hidden" name="user_id" value="<?= $edit_user['user_id'] ?? '' ?>">
> ```
 >    This invisible input is crucial for backend processing. It uses the PHP **Null Coalescing Operator** (`??`) to echo the target user's primary key if it exists, defaulting to an empty string (`''`) if starting a fresh registration. Upon form submission, the backend checks this parameter: an empty field triggers an `INSERT` statement, while a populated field directs the query engine to execute a targeted `UPDATE`.
> - **Value Pre-population and XSS Mitigation:**
>     
>     ```html
>     value="<?= htmlspecialchars($edit_user['username'] ?? '') ?>"
>     ```
>  
>     
>     To maintain a professional user experience, inputs are pre-populated with existing records during edit mode. To prevent **Cross-Site Scripting >(XSS)** vulnerabilities, all values are parsed through `htmlspecialchars()` to neutralise script components. 
> - **Dynamic Dropdown Selection:**
 >    
>     ```php
>     <option value="2" <?= (isset($edit_user) && $edit_user['access_level'] == 2) ? 'selected' : '' ?>>2 - Administrator</option>
>     ```
>     
>     The dropdown component automatically marks the active database value as `selected` during edit mode, using inline PHP evaluations to match the form selection state with current table values.
>     
> - **Conditional Password Field Validation Rules:**
>     
>     ```
>     <input type="password" name="password" ... <?= $edit_user ? '' : 'required' ?>>
>     ```
>     
>     Password requirements shift dynamically depending on state. For a new account, a password is strictly mandatory (`required`). When modifying an existing account, the validation is removed and the placeholder text displays _'Leave blank to keep unchanged'_. This allows administrators to update other fields (like a telephone number) without being forced to modify or re-enter secure credential strings.
>     
> - **Contextual Action Buttons and Operations Cancellation:**
>     
>     ```
>     <?php if ($edit_user): ?>
>         <a href="admin_users.php" class="btn btn-outline-secondary">Cancel Edit</a>
>     <?php endif; ?>
>     ```
>    
>     If in edit mode, the UI dynamically adds a **"Cancel Edit"** button. Clicking this redirects the administrator back to a clean page instance, purging the `$edit_user` query parameters from the URL and resetting the card to its default empty state.

10. Confirm that the panel is loading correctly. Refresh the `admin_users.php` page.

![[adminUsersEditUserPanelConfirm.png]]

11. Include the code which will delete the user if the administrator chooses the delete button for an individual user. Place this code in between capturing the `user_id` session variable and the edit user code added earlier.

![[adminUsersDeleteUser.png]]

```php
// --- LOGIC: DELETE USER ---
if (isset($_GET['delete'])) {
    $delete_id = (int)$_GET['delete'];
    
    // Prevent self-deletion
    if ($delete_id === $current_admin_id) {
        $_SESSION['error_message'] = "Security protection: You cannot delete your own administrative account.";
    } else {
        $stmt = $db->prepare("DELETE FROM users WHERE user_id = ?");
        $stmt->execute([$delete_id]);
        $_SESSION['success_message'] = "User account deleted successfully.";
    }
    header("Location: admin_users.php");
    exit();
}
```

12. Implement the initial code to add or edit a user. Implement it after the delete user logic.
![[adminUsersSaveUserInit.png]]

```php
// --- LOGIC: ADD/EDIT USER ---
if (isset($_POST['save_user'])) {
    $u_id          = $_POST['user_id'] ?? null;
    $u_username    = sanitiseData($_POST['username']);
    $u_first_name  = sanitiseData($_POST['first_name']);
    $u_second_name = sanitiseData($_POST['second_name']);
    $u_address     = sanitiseData($_POST['address']);
    $u_phone       = sanitiseData($_POST['phone_number']);
    $u_access      = (int)$_POST['access_level'];
    $u_password    = $_POST['password'] ?? '';

    // Prevent administrative self-demotion
    if ($u_id == $current_admin_id && $u_access < 2) {
        $_SESSION['error_message'] = "Security protection: You cannot downgrade your own access level.";
        header("Location: admin_users.php");
        exit();
    }
}
```

> [!note] This code is executed if the user presses the **Save Changes** button at the end of the form in the Add/Edit User panel.
> Each of the fields in the form is sanitised and stored into individual variables.
> It also collects the `user_id` from the URL (if exists) or sets `$u_id` to null.
> `$_POST['password'] ?? ''` collects the password from the password field in the form, or sets it to null. This allows the administrator to edit the user details, without reseting the user's password (if the field is blank).
> 
> ![[adminUsersSaveChangesButton.png]]

13. Implement error checking on database updates. This will catch any database access errors and avoid the site crashing.

![[adminUsersTryCatch.png]]
```php
try {

} catch (PDOException $e) {
	$_SESSION['error_message'] = "Database error: " . $e->getMessage();
}
```

14. Check if the administrator is either updating a user or creating a new user. This is done in the `try` block.
![[adminUsersCheckEditAdd.png]]
```php
if (!empty($u_id)) {
	// Update Existing User
} else {
	// Create New User
}
```

> [!note] The logic that this is implementing is:
> - If the `$u_id` variable is not null, then the form would have had data loaded, meaning the administrator wanted to edit the user details. 
> - If `$u_id` is null, then nothing had been loaded yet, meaning the administrator had entered new user data into the form.

15. Implement the Update Existing User code.

![[adminUsersUpdateUser.png]]
```php
if (!empty($u_password)) {
	// If a new password was provided, update it as well
	$hashed_password = password_hash($u_password, PASSWORD_DEFAULT);
	$sql = "UPDATE users SET username=?, first_name=?, second_name=?, address=?, phone_number=?, access_level=?, password_hash=? WHERE user_id=?";
	$params = [$u_username, $u_first_name, $u_second_name, $u_address, $u_phone, $u_access, $hashed_password, $u_id];
} else {
	// Keep current password
	$sql = "UPDATE users SET username=?, first_name=?, second_name=?, address=?, phone_number=?, access_level=? WHERE user_id=?";
	$params = [$u_username, $u_first_name, $u_second_name, $u_address, $u_phone, $u_access, $u_id];
}
$db->prepare($sql)->execute($params);
$_SESSION['success_message'] = "User account updated successfully.";
```

> [!note] This code will update the user account, with or without updating the password. Whichever path is taken, the SQL is defined and then the parameters are set first.
> 
> ```mermaid
> graph TD
>     C{Is password empty?} -- No (New Password) --> D[Hash new password]
>     D --> E["UPDATE users SET ... password_hash = ? WHERE user_id = ?"]
>     C -- Yes (Unchanged) --> F["UPDATE users SET ... (Omit password_hash) WHERE user_id = ?"]
>     E --> G[Execute Statement]
>     F --> G
> ```

16. Create the logic for Creating a new user. This code is placed in the `else` block.

```php
if (empty($u_password)) {
	$_SESSION['error_message'] = "Password is required for new user accounts.";
	header("Location: admin_users.php");
	exit();
}

// Check if username already exists
$check = $db->prepare("SELECT COUNT(*) FROM users WHERE username = ?");
$check->execute([$u_username]);
if ($check->fetchColumn() > 0) {
	$_SESSION['error_message'] = "A user with that email already exists.";
	header("Location: admin_users.php");
	exit();
}

$hashed_password = password_hash($u_password, PASSWORD_DEFAULT);
$sql = "INSERT INTO users (username, first_name, second_name, address, phone_number, access_level, password_hash) VALUES (?, ?, ?, ?, ?, ?, ?)";
$db->prepare($sql)->execute([$u_username, $u_first_name, $u_second_name, $u_address, $u_phone, $u_access, $hashed_password]);
$_SESSION['success_message'] = "New user account created.";
```

> [!note]- Code explanation
> This code runs if the form was empty to start with (the administrator hadn't clicked an edit button). It performs a few actions:
> 1. First it confirms that a password has been entered in the form. Without one it won't create an account.
> 2. Then, it confirms that the username (email address) is unique.
> 3. Hashes the enters password
> 4. Defines the SQL and parameters with the form field data.
> 5. Executes the SQL (runs it on the database).
> 6. Sets a flash message to alert the user of the successful creation of the account.

17. Save the file.
18. Confirm the file is fully functional. You will need to test the following actions:
	1. Create a new user
	2. Edit the new user's details, without changing the password.
	3. Edit the new user's details, changing the password.
	4. Deleting the new user.
	5. Attempting to delete the account you're currently logged in as.

![[commonBlocks#Commit & Push]]
## Explanation

### Bootstrap Columns

- **The 12-Column Grid:** Bootstrap divides horizontal viewport space into 12 virtual grid units. This column is designated as `8` units wide (`col-*-8`).
- **The Breakpoint (`lg`):** The `lg` prefix stands for "large screens" (typically viewports with a width of $992\text{px}$ or greater). This means that on a standard desktop monitor, the column will occupy exactly two-thirds ($\frac{8}{12}$) of the screen's available width, sitting perfectly side-by-side with the left-hand form column which occupies the remaining one-third ($\frac{4}{12}$).
- **Responsive Stacking Behaviour:** Because there are no smaller breakpoint classes defined (such as `col-md-` or `col-sm-`), Bootstrap defaults to a stacked full-width layout (`col-12`) on any screens smaller than $992\text{px}$ (tablets and mobile phones).

This layout choice ensures that the administrative dashboard remains readable and clean, preventing data truncation when viewing dense directory tables on smaller screens.

#### The Six Bootstrap Breakpoint Tiers

|Breakpoint Abbreviation|Class Infix|Viewport Width Criteria|Targeted Physical Hardware|
|---|---|---|---|
|**Extra Small**|_None_ (e.g., `col-12`)|`< 576px`|Portrait mobile phones, compact hand-held devices.|
|**Small**|`sm`|`>= 576px`|Landscape mobile devices, large phablets.|
|**Medium**|`md`|`>= 768px`|Portrait tablets (e.g., Apple iPad).|
|**Large**|`lg`|`>= 992px`|Landscape tablets, standard laptops, and desktop monitors.|
|**Extra Large**|`xl`|`>= 1200px`|Mid-sized desktop monitors and widescreen workstations.|
|**Extra Extra Large**|`xxl`|`>= 1400px`|Ultra-wide monitors and high-resolution displays.|

### HTTP Methods: GET vs. POST

When building web applications, browsers communicate with servers using HTTP requests. The two most common request methods are **GET** and **POST**. Choosing the correct method is a fundamental design decision.

|Feature|GET Method (`$_GET`)|POST Method (`$_POST`)|
|---|---|---|
|**Primary Purpose**|Retrieving or fetching data from the server.|Submitting data to be processed or stored.|
|**URL Behaviour**|Appends parameters to the URL string.|Keeps the URL clean; data is sent in the request body.|
|**Data Visibility**|**Highly Visible:** Exposed in the address bar and browser history.|**Hidden:** Not visible in the address bar or browser history.|
|**Data Size Limit**|Restrictive (usually limited to around 2,000 characters).|Virtually unlimited (governed only by server configuration).|
|**Binary/File Support**|No support for binary files.|Full support (essential for uploading images/documents).|
#### The Deletion Route: `$_GET['delete']`

- **How it is triggered:** This is fired when an administrator clicks the red "Delete" trash icon in the directory table. This button is a standard HTML link (`<a>` tag) that appends the target user's ID to the URL:    
    ```php
    <a href="admin_users.php?delete=5">Delete</a>
    ```
    
- **How the logic works:** 
1. The browser sends a `GET` request, and the page reloads with `?delete=5` in the address bar. 
2. The PHP backend detects this using `if (isset($_GET['delete']))` and captures the ID. 
3. **The Defensive Gate:** The script immediately checks if the ID to be deleted matches the logged-in administrator's active session ID (`$delete_id === $current_admin_id`).

- If they match, the system blocks the request with an error message to prevent accidental self-deletion.
- If they do not match, the database securely executes the prepared SQL statement:

	
	```sql
	DELETE FROM users WHERE user_id = ?
	```
	

1. The user is redirected back to a clean `admin_users.php` page, clearing the `?delete` variable from the URL.
	

#### 2. The Save & Modify Route: `$_POST['save_user']`

- **How it is triggered:** This is fired when the administrator clicks the primary **"Save Account Record"** button inside the left-hand form.
    
- **How the logic works:** Unlike the delete link, the form sends data securely in the background (hidden from the URL bar) using the `POST` method. Once PHP detects `if (isset($_POST['save_user']))`, it performs a dual-path check:
    
    - **Path A (Create Mode):** If the hidden `user_id` input field is completely empty, the script knows this is a brand-new registration. It hashes the required password and executes an `INSERT` statement:
    
        ```sql
        INSERT INTO users (username, first_name, second_name, phone_number, address, access_level, password_hash) VALUES (?, ?, ?, ?, ?, ?, ?)
        ```
        
    - **Path B (Edit Mode):** If the hidden `user_id` contains a value, the script knows it is modifying an existing profile. It checks if the password field was left blank:
        
        - _If blank:_ It updates the text details (address, phone, name) but **omits** the password column so the user's existing password hash remains completely untouched.
            
        - _If filled:_ It hashes the new password and runs an `UPDATE` query that includes the new `password_hash` column.
            
        
        In both update scenarios, the targeted SQL statement is safely executed using prepared statements:
        
        ```sql
        UPDATE users SET username=?, first_name=?, second_name=?, ... WHERE user_id=?
        ```

