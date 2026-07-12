---
isCurrent: true
needsUpdating: false
tutorialIndex: 12
---
After an order is completed, the system must generate a professional, immutable receipt of the transaction. This guide covers how to build a dynamic invoice utility that pulls relational purchase details, protects personal account details through defensive design layout boundaries, and provides administrators with a secure interface to track payment states..

> [!note] Goal: Create a responsive, multi-tier invoice page that lists historic transactions for authenticated users, provides a printable order receipt, and allows administrators to safely manage payment states.

> [!important] Learning Outcome/s:
> - Compile Relational Order Reports: Design advanced multi-table SQL queries utilising database JOIN commands to combine historical transaction indexes with item details.
> - Enforce Data Ownership Boundaries: Implement structural session validations inside your query controllers to prevent standard users from guessing or viewing other clients' receipts.
> - Build State-Toggling Panels: Design targeted SQL updater interfaces that allow authorised administrators to toggle the payment statuses of customer orders safely.


## How To Guide: 


1. **Create a new file in the root directory called 'invoice.php'.**

Create a blank file named `invoice.php` inside your main project root directory. This is the master file where we will assemble all the back-end PHP logic and front-end Bootstrap layout code blocks we write in the following steps.

![[invoiceInit.png]]

2. **Start output buffering and restrict access to logged-in users.**

At the very top of `invoice.php`, you must start output buffering to prevent header redirect errors and include your template shell. We will also query our active session to verify that the visitor is authenticated, and determine whether they possess administrative privileges:

![[invoiceCodeInit.png]]

```php
<?php
// Start output buffering to handle header redirection
ob_start();

// Include template (template.php handles starting the session)
include "template.php";

/** @var PDO $db */

// Security: Block unauthenticated guest access
if (!isset($_SESSION['user_id'])) {
	$_SESSION['error_message'] = "Please log in to view invoices.";
	header("Location: login.php");
	exit();
}

$user_id = $_SESSION['user_id'];
$is_admin = (isset($_SESSION['access_level']) && $_SESSION['access_level'] >= 2);
?>
```

1. **Secure the administrative "Toggle Paid" controller.**

We want administrators to be able to toggle the payment status of an order directly from the invoice details screen. We check if the status toggle form is submitted, verify that the active session belongs to an administrator, and update the database safely:

![[invoicePaidToggle.png]]

```php
// --- ADMIN CONTROLLER: TOGGLE PAID STATUS ---
if (isset($_POST['toggle_paid']) && $is_admin) {
	$order_id = (int)$_POST['order_id'];
	$new_status = (int)$_POST['status'];

	$stmt = $db->prepare("UPDATE orders SET paid = ? WHERE order_id = ?");
	$stmt->execute([$new_status, $order_id]);

	$_SESSION['success_message'] = "Order payment status updated successfully.";
	header("Location: invoice.php?order_id=" . $order_id);
	exit();
}
```

1. **Branch the interface layout logic (Detailed Invoice vs. Order List).**

Now, we must structure our page layout. We write a PHP conditional branch that evaluates whether a specific `order_id` is passed via a GET query parameter in the URL. If a target is provided, we load the detailed invoice details; otherwise, we load the list of available orders:

![[invoiceDetailedOrList.png]]

```php
// --- INTERFACE ROUTER BRANCH ---
if (isset($_GET['order_id'])):
	$selected_id = (int)$_GET['order_id'];

	// Fetch targeted order details, applying user ownership checks for security
	if ($is_admin) {
		$stmt = $db->prepare("SELECT * FROM orders WHERE order_id = ?");
		$stmt->execute([$selected_id]);
	} else {
		$stmt = $db->prepare("SELECT * FROM orders WHERE order_id = ? AND user_id = ?");
		$stmt->execute([$selected_id, $user_id]);
	}
	$order = $stmt->fetch();

	if (!$order) {
		$_SESSION['error_message'] = "Invoice not found or access denied.";
		header("Location: invoice.php");
		exit();
	}

	// Fetch itemised order records for this specific transaction
	$item_stmt = $db->prepare("SELECT oi.*, p.name 
							   FROM order_items oi 
							   JOIN products p ON oi.product_id = p.product_id 
							   WHERE oi.order_id = ?");
	$item_stmt->execute([$selected_id]);
	$order_items = $item_stmt->fetchAll();
?>
	<!-- DETAILED_VIEW_HTML_ELEMENTS_GO_HERE -->
	
<?php endif; ?>
```

1. **Construct the Detailed Invoice card and header layout.**

Within our detailed view branch, we design the printable invoice card. We use a high-contrast container, display the unique order ID, and output the customer billing details:

![[invoiceDetailedInvoiceCard.png]]

```php
<!-- Detailed Invoice View (Nest inside the Detailed Invoice template layout condition branch) -->
<div class="container py-5" style="max-width: 900px;">
	<div class="mb-4">
		<a href="invoice.php" class="btn btn-outline-secondary">
			<i class="fas fa-arrow-left me-2"></i>Back to Orders
		</a>
	</div>

	<div class="card shadow border-0 rounded-3 p-5 bg-white">
		<div class="row mb-4">
			<div class="col-sm-6">
				<h2 class="fw-bold text-primary">INVOICE</h2>
				<p class="text-muted mb-0">Order Reference: <strong>#<?= $order['order_id'] ?></strong></p>
				<p class="text-muted">Date: <?= date('d M Y', strtotime($order['order_date'] ?? $order['created_at'] ?? 'now')) ?></p>
			</div>
			<div class="col-sm-6 text-sm-end">
				<h5 class="fw-bold">Payment Status</h5>
				<?php if ($order['paid']): ?>
					<span class="badge bg-success fs-6 rounded-pill px-3">Paid</span>
				<?php else: ?>
					<span class="badge bg-warning text-dark fs-6 rounded-pill px-3">Pending</span>
				<?php endif; ?>
			</div>
		</div>

		<hr class="my-4">

		<div class="row mb-4">
			<div class="col-sm-12">
				<h6 class="text-muted fw-bold">Billed To:</h6>
				<p class="mb-0 fw-bold"><?= htmlspecialchars($order['customer_name'] ?? $order['full_name'] ?? '') ?></p>
				<p class="text-muted small text-wrap" style="max-width: 450px;"><?= nl2br(htmlspecialchars($order['address'] ?? '')) ?></p>
			</div>
		</div>
```

1. **Construct the itemised order transaction table framework.**

Beneath the billing details, we construct a structured, responsive HTML data table shell to define the boundaries of our transaction receipt. We outline the scrollable card wrapper, establish table grid headings, and leave the table body ready for our dynamic dynamic iteration:

![[invoiceItemTable.png]]

```php
<!-- Scrollable Table Wrapper (Nest inside the Detailed Invoice card wrapper) -->
<div class="table-responsive">
	<table class="table table-hover align-middle">
		<thead class="table-dark">
			<tr>
				<th>Item Details</th>
				<th class="text-center">Quantity</th>
				<th class="text-end">Unit Price</th>
				<th class="text-end">Subtotal</th>
			</tr>
		</thead>
		<tbody>
			<!-- LINE_ITEM_LOOP_AND_RECORDS_GO_HERE -->
		</tbody>
	</table>
</div>
```

1. **Implement the PHP loop to render itemised transaction details.**

With our structural table shell established, we add the functionality to populate the transaction rows dynamically. We write a `foreach` loop to process each purchased item, outputting the name, quantity, unit price, and calculated subtotal, followed by the calculated order grand total:

![[invoiceItemisedList.png]]

```php
<!-- Dynamic Line-Item Record Generation (Nest inside the Table Body of the Itemised Table Wrapper) -->
<?php foreach ($order_items as $item): ?>
	<tr>
		<td>
			<strong class="text-dark"><?= htmlspecialchars($item['name']) ?></strong>
		</td>
		<td class="text-center"><?= $item['quantity'] ?></td>
		<td class="text-end">$<?= number_format($item['price_at_time'] ?? $item['price'] ?? 0, 2) ?></td>
		<td class="text-end fw-bold">$<?= number_format(($item['price_at_time'] ?? $item['price'] ?? 0) * $item['quantity'], 2) ?></td>
	</tr>
<?php endforeach; ?>

<!-- Grand Total Row (Nest inside the Itemised Table Wrapper, below the loop) -->
<tr class="border-top">
	<td colspan="2"></td>
	<td class="text-end text-muted fw-bold py-3">Total (AUD)</td>
	<td class="text-end text-primary fw-bold h4 py-3">$<?= number_format($order['total_price'] ?? 0, 2) ?></td>
</tr>
```

1. **Embed the administrative payment toggle form controls.**

Below the itemised table inside our invoice card wrapper, we implement the interactive payment status toggle controls. This form only compiles if the logged-in user possesses administrative credentials:

![[invoiceAdminControls.png]]

```php
<!-- Administrative Payment Status Actions (Nest inside the Detailed Invoice card footer) -->
<?php if ($is_admin): ?>
	<div class="card-footer bg-light border-0 rounded-3 p-4 mt-5">
		<h5 class="fw-bold text-secondary mb-3">Administrator Actions</h5>
		<form action="invoice.php" method="post" class="row g-3 align-items-center">
			<input type="hidden" name="order_id" value="<?= $order['order_id'] ?>">
			<div class="col-auto">
				<select name="status" class="form-select">
					<option value="0" <?= !$order['paid'] ? 'selected' : '' ?>>0 - Pending Payment</option>
					<option value="1" <?= $order['paid'] ? 'selected' : '' ?>>1 - Paid / Complete</option>
				</select>
			</div>
			<div class="col-auto">
				<button type="submit" name="toggle_paid" class="btn btn-primary">
					<i class="fas fa-sync-alt me-2"></i>Update Status
				</button>
			</div>
		</form>
	</div>
<?php endif; ?>
</div> <!-- Close card div -->
</div> <!-- Close container div -->
```

1. **Implement the order list router branch and directory data loading.**

If no specific `order_id` parameter has been passed through the active URL query parameters, our system executes an `else` routing fallback. Within this code block, we execute an SQL query to retrieve relevant historical records. If an administrator is logged in, we fetch all purchases registered in our catalog, whereas regular customers are restricted to querying their own transactions:

![[invoiceLoadOrderDetailsForUserOrAdmin.png]]

```php
<?php else: 
	// Load orders list based on active credentials check
	if ($is_admin) {
		$order_list_stmt = $db->query("SELECT * FROM orders ORDER BY order_id DESC");
	} else {
		$order_list_stmt = $db->prepare("SELECT * FROM orders WHERE user_id = ? ORDER BY order_id DESC");
		$order_list_stmt->execute([$user_id]);
	}
	$all_orders = $order_list_stmt->fetchAll();
?>
```

1. **Construct the global System Orders Directory table layout framework.**

Beneath our PHP router initialisation, we build our visual structural container. We establish a responsive container card, display a dynamic section title depending on the visitor's authentication role, and construct a conditional check that renders a clean empty-state fallback message if no transaction rows are returned:

![[invoiceUIStructure.png]]

```php
<!-- Global Orders Container and Card Framework (Nest inside the Directory View else branch) -->
<div class="container py-5" style="max-width: 1200px;">
	<div class="card shadow border-0 rounded-3 p-4">
		<h3 class="fw-bold mb-4">
			<i class="fas fa-file-invoice-dollar me-2 text-primary"></i>
			<?= $is_admin ? 'Global Systems Order Registry' : 'My Order History' ?>
		</h3>
		<hr>

		<?php if (empty($all_orders)): ?>
			<!-- Fallback notification shown when database array is empty -->
			<p class="text-muted text-center py-4">No order records found in the directory.</p>
		<?php else: ?>
			<!-- RESPONSIVE_ORDERS_TABLE_GOES_HERE -->
		<?php endif; ?>
	 </div>
 </div>
```

1. **Implement the PHP loop to populate the orders directory list.**

Inside our active conditional framework block, we establish our structured table shell and loop through the compiled records. We dynamically render row indicators for each transaction, apply security output escaping, display color-coded payment badges, and construct an interactive action link to let the user view targeted invoice details:

![[invoicePopulateTable.png]]

```php
<!-- Scrollable Table Wrapper (Nest inside the Orders Directory Card conditional branch) -->
<div class="table-responsive">
	<table class="table table-hover align-middle">
		<thead class="table-dark">
			<tr>
				<th>Order ID</th>
				<th>Customer Name</th>
				<th>Order Date</th>
				<th>Total Amount</th>
				<th>Payment Status</th>
				<th class="text-end pe-4">Action</th>
			</tr>
		</thead>
		<tbody>
			<?php foreach ($all_orders as $o): ?>
				<tr>
					<td>#<?= $o['order_id'] ?></td>
					<td>
						<strong><?= htmlspecialchars($o['customer_name'] ?? $o['full_name'] ?? 'Guest Customer') ?></strong>
						<?php if ($is_admin && isset($o['user_id'])): ?>
							<br><small class="text-muted">User ID: <?= $o['user_id'] ?></small>
						<?php endif; ?>
					</td>
					<td><?= date('d M Y', strtotime($o['order_date'] ?? $o['created_at'] ?? 'now')) ?></td>
					<td class="fw-bold">$<?= number_format($o['total_price'] ?? 0, 2) ?></td>
					<td>
						<?php if ($o['paid']): ?>
							<span class="badge rounded-pill bg-success-subtle text-success px-3 py-2">Paid</span>
						<?php else: ?>
							<span class="badge rounded-pill bg-warning-subtle text-warning px-3 py-2">Pending</span>
						<?php endif; ?>
					</td>
					<td class="text-end pe-4">
						<a href="invoice.php?order_id=<?= $o['order_id'] ?>" class="btn btn-sm btn-dark px-3">
							View Details
						</a>
					</td>
				</tr>
			<?php endforeach; ?>
		</tbody>
	</table>
</div>
```

1. **Close output flushing.**

Append this clean-up command at the absolute bottom of `invoice.php` (below your closing HTML tags) to flush out the compiled server data safely to the client:

```php
<?php
ob_end_flush();
?>
```



## Verification and Testing Protocol (Docker Desktop and phpMyAdmin)

To satisfy your Year 11 portfolio testing evidence, run these test procedures using your development containers and administration tools:

| Test Procedure                      | Action to Perform                                                                                                                        | Expected Outcome                                                                                                                                                                            |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Empty Cart Bypass Guard**      | Empty your active shopping cart, log out of your session, and attempt to load `checkout.php` directly in your browser address bar.       | The cart guard intercepts the request, generates an error flash message, and redirects you back to `orderform.php`.                                                                         |
| **2. Authenticated Pre-population** | Log in as a customer account, verify an address is registered in your database, add products to your cart, and navigate to the checkout. | The page loads successfully and pre-populates the "Full Name" and "Shipping Address" input fields with your profile records.                                                                |
| **3. Empty Field Validation**       | Clear all values from the checkout form input fields and click the **Complete Purchase** button.                                         | The form is aborted, the database remains unmodified, and a red alert box displays error messages detailing missing billing details.                                                        |
| **4. Payment Format Validation**    | Type in a valid name and address, but enter `12345` in the Card Number field and `99` in the CVV field, then submit the form.            | The validation engine blocks database insertion and generates error alerts specifying that card numbers must be 16 digits and CVV must be 3 digits.                                         |
| **5. Database Transaction Success** | Fill in valid details across all form fields (including a 16-digit card and 3-digit CVV) and submit the form.                            | The database transaction executes successfully, the shopping cart is wiped from the session, and a clean Order Success Confirmation card displaying your unique generated Order ID appears. |
| **6. phpMyAdmin Data Verification** | Log into **phpMyAdmin**, select your web shop database, and browse both the `orders` and `order_items` tables.                           | A brand-new order row is recorded inside the `orders` table matching your Order ID, and corresponding itemised rows are written safely inside the `order_items` table.                      |



![[commonBlocks#Commit & Push]]
## Explanation


Let's dissect the systems engineering and computer science theories that power this transaction message application.

### 1. Relational Schema Mutations and Status Flags

When developing secure e-commerce environments, applications must evolve over time to handle new operational requirements. Mutating your database structure using SQL command modifiers like `ALTER TABLE` is an industry-standard engineering practice:

- **Database Mutation:** By adding the `paid` column, we expand our table's structural fields without deleting or altering existing order columns.
    
- **TINYINT Boolean Storage:** Since relational engines do not store actual 'true' or 'false' words, we utilise a tiny integer memory block `TINYINT(1)` using `0` for pending transactions and `1` for verified, complete payments.
    

### 2. Multi-Tier Routing and Session Validation

A common security mistake is creating different invoice pages for standard users and administrators. This script consolidates layouts inside a single master template file (`invoice.php`), managing interface controls securely on the backend:

- **The Access Gate:** At page execution, the script inspects the active session state `$_SESSION['user_id']`. If it is absent, it aborts processing entirely.
    
- **The Ownership Boundary:** Standard users are restricted to database queries that contain their exact user ID:
    
    ```
    SELECT * FROM orders WHERE order_id = ? AND user_id = ?
    ```
    
    Even if a malicious customer enters another user's invoice ID into the URL bar, the parameterised query returns zero rows, preventing unauthorised account leaks.
    

### 3. Defensive Data Masking

Storing full credit card details on screen violates safety practices and compromises customer data. We implement dynamic masking at the layout boundary:

- **Literal Text Safety:** The database contains the raw 16-digit billing string. However, our custom PHP helper function intercepts and obfuscates the credit card values before compiling the HTML output:
    
    ```
    "**** **** **** " . substr($cleanedCard, -4)
    ```
    
- **UX Benefits:** This approach provides a great user experience by showing clients which credit card was used to make the purchase, while ensuring that shoulder-surfers or screen-scrapers cannot capture active credit card details.
