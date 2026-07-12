---
isCurrent: true
needsUpdating: false
tutorialIndex: 9
---
When users experience issues on your web application, they need a clean, reliable way to send inquiries to your support team. This page serves as a dual-purpose support portal: it acts as a clean, public inquiry form for guests and pre-populated form for logged-in users, while dynamically rendering an inbox dashboard exclusively for authorized administrators to review and manage incoming communications.

> [!note] Goal: Create a responsive, dual-purpose contact page that securely captures public messages and provides an authorised area for administrators to mark messages as read.

> [!important] Learning Outcome/s:
> - Establish a relational database table using structured schema constraints such as primary keys and auto-increment rules.
> - Implement backend form validation and defensive sanitisation to handle public user submissions securely.
> - Construct a split-pane interface that dynamically routes content based on active session authorisation credentials.
> - Defend against Cross-Site Scripting (XSS) attacks in administrative panels using standard output escaping techniques.
## How To Guide: 

When users experience issues on your web application, they need a clean, reliable way to send inquiries to your support team. A professional contact form must allow the public to securely submit messages, write those records to a database table, and present an exclusive review screen for administrators to read and manage them.

This guide details how to build a secure, database-driven contact page (`contact.php`) that serves regular users as an inquiry form, and serves administrators as an interactive support dashboard.


1. **Initialise the database table inside phpMyAdmin.**

Before writing any PHP code, you must establish the structural table that will store incoming support messages. Open phpMyAdmin, select your development database, click on the SQL tab, and execute the following queries to create the table, assign its primary key, and enable auto-increment numbering:

```sql
CREATE TABLE `contact_messages` (
  `message_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `subject` varchar(200) NOT NULL,
  `message` text NOT NULL,
  `is_read` tinyint(1) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

ALTER TABLE `contact_messages`
  ADD PRIMARY KEY (`message_id`);

ALTER TABLE `contact_messages`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
```

> [!note] Remember to save these SQL commands inside your local `_init_scripts/` directory. You should append this code to your structural SQL script or save it as a new file (e.g., `03_contact_schema.sql`) to ensure that this table is dynamically provisioned if you rebuild your containers.

2. **Create a new file in the root directory called 'contact.php'.**

![[contactInit.png]]

Create a blank file named `contact.php` inside your main project root directory. This is the master file where we will assemble all the back-end PHP logic and front-end Bootstrap layout code blocks we write in the following steps.

3. **Start output buffering and establish database access.**

At the very top of `contact.php`, you must start output buffering to prevent header redirect errors and include your template shell. We will also query our active session to determine whether the visitor possesses administrative rights:

![[contactInitCode.png]]

```php
<?php
// Start output buffering to handle header redirection
ob_start();

// Include template (template.php handles starting the session)
include "template.php"; 

/** @var PDO $db */

// Capture user authorisation level (default to 0 if they are a guest)
$user_access = $_SESSION['access_level'] ?? 0;
?>
```

4. **Secure the administrative "Mark as Read" controller.**

We want administrators to be able to flag incoming support inquiries as resolved. We check if a message ID is sent via a GET request in the URL, verify that the logged-in session actually belongs to an administrator, and update the row safely:

![[contactMarkAsRead.png]]

```php
// --- ADMIN CONTROLLER: MARK MESSAGE AS READ ---
if (isset($_GET['read']) && $user_access >= 2) {
	$message_id = (int)$_GET['read'];

	// Update the read status flag inside our database table
	$stmt = $db->prepare("UPDATE contact_messages SET is_read = 1 WHERE message_id = ?");
	$stmt->execute([$message_id]);

	$_SESSION['success_message'] = "Message marked as read successfully.";
	header("Location: contact.php");
	exit();
}
```

5. **Handle secure public message submissions (POST).**

When a visitor submits an inquiry, we capture the data securely. To protect against malicious actions, we run the text inputs through our `sanitiseData()` function and insert them into the database using parameterised prepared statement placeholders:

![[contactMessageSubmission.png]]

```php
// --- PUBLIC CONTROLLER: SUBMIT SUPPORT MESSAGE ---
if (isset($_POST['send_message'])) {
	$v_name    = sanitiseData($_POST['name']);
	$v_email   = sanitiseData($_POST['email']);
	$v_subject = sanitiseData($_POST['subject']);
	$v_message = sanitiseData($_POST['message']);

	try {
		// Prepare our insert statement to guard against SQL Injection
		$stmt = $db->prepare("INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)");
		$stmt->execute([$v_name, $v_email, $v_subject, $v_message]);

		$_SESSION['success_message'] = "Your message has been sent successfully!";
		header("Location: contact.php");
		exit();
	} catch (PDOException $e) {
		$_SESSION['error_message'] = "Failed to submit your message: " . $e->getMessage();
		header("Location: contact.php");
		exit();
	}
}
```

6. **Fetch active database records for administrative display.**

If the visitor has an administrator clearance of `2` or higher, we query our table to load all unread messages. Regular users will bypass this loader entirely:

![[contactLoadMessages.png]]

```php
// --- DATA LOADER: ADMIN ONLY ---
$unread_messages = [];
if ($user_access >= 2) {
	// Gather unread support inquiries, sorting the newest submissions to the top
	$unread_messages = $db->query("SELECT * FROM contact_messages WHERE is_read = 0 ORDER BY created_at DESC")->fetchAll();
}
```

7. **Construct the split-pane user interface skeleton.**

Now, we build our visual layout grid. We will use a standard responsive container and branch our user interface so that administrators see a review panel, while regular customers and guests see the clear contact form:

![[contactUIInit.png]]

```php
<div class="container py-5" style="max-width: 1200px;">
	<div class="row justify-content-center">
		<?php if ($user_access >= 2): ?>
			<!-- Admin View: Display dynamic list of support messages -->
			<div class="col-lg-10">
				<!-- Nest Steps 8 to 11 elements here -->
			</div>
		<?php else: ?>
			<!-- Public View: Display clean Bootstrap contact form -->
			<div class="col-lg-6">
				<!-- Nest Step 12 elements here -->
			</div>
		<?php endif; ?>
	</div>
</div>
```

8. **Create the administrative inbox container and header structure.**

Within the administrative column block, we establish the visual layout framework. We use a high-contrast card style and implement a PHP conditional check that evaluates whether the retrieved messages array is empty, showing a clean fallback text container if no alerts are active:

![[contactAdminInbox.png]]

```php
<!-- Support Inbox Card Framework (Nest inside col-lg-10) -->
<div class="card shadow border-0 rounded-3 p-4">
	<h3 class="fw-bold mb-4 text-danger">Support Messages Inbox</h3>
	<hr>

	<?php if (empty($unread_messages)): ?>
		<!-- Fallback UI displayed when database array is empty -->
		<p class="text-muted text-center py-4">No unread support messages found.</p>
	<?php else: ?>
		<!-- Step 9 responsive data table goes here -->
	<?php endif; ?>
</div>
```

9. **Construct the responsive table UI for support inquiries.**

If the database has active messages, we build our responsive data layout. Inside the `else` branch of our framework, we define a scrollable table shell and establish clear column header labels mapping our required message attributes:

![[contactSupportInquiries.png]]

```php
<!-- Scrollable Table Wrapper (Nest inside the 'else' branch of Step 8) -->
<div class="table-responsive">
	<table class="table table-hover align-middle">
		<thead class="table-dark">
			<tr>
				<th>Sender</th>
				<th>Subject</th>
				<th>Message Details</th>
				<th class="text-center">Action</th>
			</tr>
		</thead>
		<tbody>
			<!-- Step 10 data rows and Step 11 buttons go here inside the body -->
		</tbody>
	</table>
</div>
```

10. **Implement the PHP loop to render unread message details.**

Now, we add the functionality to output database rows dynamically. Inside the table body (`<tbody>`), we write a `foreach` loop to process each message record and safely output the fields, using defensive styling and character escaping to block security threats:

![[contactUnreadMessages.png]]

```php
<!-- Dynamic Message Record Iteration (Nest inside the tbody of Step 9) -->
<?php foreach ($unread_messages as $msg): ?>
	<tr>
		<!-- Output sender identification details -->
		<td>
			<strong class="d-block"><?= htmlspecialchars($msg['name']) ?></strong>
			<small class="text-muted"><?= htmlspecialchars($msg['email']) ?></small>
		</td>

		<!-- Output categorized message subject badge -->
		<td>
			<span class="badge bg-secondary"><?= htmlspecialchars($msg['subject']) ?></span>
		</td>

		<!-- Output sanitized text block, preserving line breaks -->
		<td class="small text-wrap" style="max-width: 300px;">
			<?= nl2br(htmlspecialchars($msg['message'])) ?>
		</td>

		<!-- Step 11 action column cell goes here -->
	</tr>
<?php endforeach; ?>
```

11. **Embed the action triggers to mark messages as read.**

Finally, we implement the interactive resolution controls. Inside the last table column cell (`<td>`) of our message iteration loop, we compile an anchor button targeting our GET route parameters, passing the specific message ID back to the controller defined in Step 4:

![[contactMarkAsReadTrigger.png]]

```php
<!-- State Mutation Action Button (Nest inside the final column of Step 10) -->
<td class="text-center">
	<a href="contact.php?read=<?= $msg['message_id'] ?>" class="btn btn-sm btn-success">
		<i class="fas fa-check me-1"></i> Mark as Read
	</a>
</td>
```

12. **Construct the public support inquiry form.**

Inside our public column block, we compile our form fields. To provide an excellent user experience, if a student is already logged into our website, we pre-populate the "Full Name" input field automatically with their active session username:

![[contactForm.png]]

```php
<!-- Public Contact Form (Nest inside col-lg-6 when user_access < 2) -->
<div class="card shadow-lg border-0 rounded-4 p-4">
    <div class="card-body">
       <h3 class="text-center fw-bold mb-4">Contact Our Support Team</h3>
       <p class="text-center text-muted mb-4">Have an inquiry? Fill in the details below and we will get back to you shortly.</p>

       <form action="contact.php" method="post" autocomplete="off">
           <div class="mb-3">
               <label class="form-label fw-bold">Full Name</label>
               <input type="text" name="name" class="form-control" required 
                      value="<?= isset($_SESSION['username']) ? htmlspecialchars($_SESSION['username']) : '' ?>">
           </div>

           <div class="mb-3">
               <label class="form-label fw-bold">Email Address</label>
               <input type="email" name="email" class="form-control" required placeholder="name@example.com">
           </div>

           <div class="mb-3">
               <label class="form-label fw-bold">Subject</label>
               <input type="text" name="subject" class="form-control" required placeholder="e.g. Account Help">
           </div>

           <div class="mb-4">
               <label class="form-label fw-bold">Message</label>
               <textarea name="message" class="form-control" rows="5" required placeholder="Write your inquiry details here..."></textarea>
           </div>

           <div class="d-grid">
               <button type="submit" name="send_message" class="btn btn-primary btn-lg shadow">
                   <i class="fas fa-paper-plane me-2"></i>Send Message
               </button>
           </div>
       </form>
    </div>
</div>
```

13. **Close output flushing.**

Append this clean-up command at the absolute bottom of `contact.php` (below your closing HTML tags) to flush out the compiled server data safely to the client:

![[contactCloseOutputBuffering.png]]

```php
<?php
ob_end_flush();
?>
```

## Verification and Testing Protocol (Docker Desktop and phpMyAdmin)

To satisfy your Year 11 portfolio testing evidence, run these test procedures using your development containers and administration tools:

| **Test Procedure**               | **Action to Perform**                                                                                                    | **Expected Outcome**                                                                                                                         |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Database Configuration**    | Open **phpMyAdmin**, inspect your database structure, and select the `contact_messages` table.                           | Confirm that the table is present and configured with `message_id` as the primary, auto-incrementing key.                                    |
| **2. Physical Workspace Setup**  | Verify that `contact.php` has been successfully created in your project's root folder.                                   | The file structure is clean, and the server does not return 404 errors when navigating to the page.                                          |
| **3. Public Form Submission**    | Load the website contact page as a guest, fill in valid test details across all form fields, and click **Send Message**. | The script processes successfully, returns a success alert banner, and writes a new row containing your messages directly to the database.   |
| **4. Logged-in Pre-population**  | Log in as a customer, navigate to the contact form, and observe the "Full Name" input field.                             | The field is pre-populated automatically with your active session username, while the other fields remain empty.                             |
| **5. Basic XSS Defences**        | Submit a message containing HTML or JavaScript (e.g. `<script>alert('test')</script>`).                                  | The system sanitises the input and saves it. When viewed by an administrator, the script renders safely as plain text rather than executing. |
| **6. Authorisation Gate**        | Attempt to pass a mock read query in your URL while logged out (e.g. `contact.php?read=1`).                              | The authorisation gate intercepts the query, ignores the database update, and prevents administrative changes.                               |
| **7. Administrative Resolution** | Log in as an administrator (access level 2), open the contact page, and click **Mark as Read** on a message.             | The database row updates `is_read` to 1, the page reloads cleanly with a success alert, and the message disappears from the unread inbox.    |


![[commonBlocks#Commit & Push]]
## Explanation


Let's dissect the systems engineering and computer science theories that power this support message application.

### 1. Database Schema Constraints

When you set up your database using phpMyAdmin in Step 1, you configure strict database rules (constraints) to ensure the data stays structured and reliable:

- **Primary Key:** The `message_id` column is designated as a Primary Key. This means every submitted message gets a unique ID number. No two messages can share the same ID.
    
- **Auto-Increment:** The `AUTO_INCREMENT` rule tells the database to assign new numbers automatically. When a user submits a message, the database finds the highest ID used so far (such as `15`) and assigns `16` to the new entry, removing the need for PHP to manually calculate IDs.
    
- **TINYINT Boolean Flag:** Because SQL engines do not have a native True/False data type, we use a `tinyint(1)` column called `is_read`. It defaults to `0` (Unread/False) and mutates to `1` (Read/True) when an administrator archives the inquiry.
    

### 2. Role-Based Interface Routing

Instead of creating two separate web files—one for the contact form and one for the admin inbox—our script uses a single file (`contact.php`) that displays different interfaces based on session values:

- **UI Branching:** The template inspects the active session:
    
    ```
    if ($user_access >= 2)
    ```
    
- **Dynamic Loading:** If an administrator logs in, the engine renders an interactive inbox to manage inquiries. If a guest or standard customer visits the page, the engine hides the administrative controls and displays the clean submission form, preventing unauthorised users from knowing that an inbox exists.
    

### 3. Defensive Sanitisation and Escaping

Support forms are highly vulnerable because they allow anonymous visitors to write text directly to your database. We implement two defences to secure our workflow:

- **Backend Sanitisation:** During a POST request, inputs pass through `sanitiseData()`. This helper removes extra whitespaces and slashes, preparing clean strings before they reach our database transaction handler.
    
- **Output Escaping:** When rendering messages inside the administrator support dashboard, the code passes variables through `htmlspecialchars()` first. This escapes special characters (such as `<` and `>`), rendering them as harmless text strings. This stops Cross-Site Scripting (XSS) attacks from executing code in the admin's browser.

