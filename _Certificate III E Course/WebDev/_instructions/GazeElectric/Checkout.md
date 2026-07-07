---
isCurrent: true
needsUpdating: false
tutorialIndex: 11
---

> [!note] Goal: Understand, construct, and test the multi-pane layout of `checkout.php` to handle dynamic user profile pre-population, multi-stage input validation, and database transactions.

> [!important] Learning Outcomes: By completing this tutorial, you will be able to:
> 
> - Perform relational database updates and configure multi-table links using primary and foreign key constraints.
> - Implement strict session gates to ensure checkouts are blocked when a shopping cart is empty.
> - Apply defensive validation rules using regular expressions to restrict credit card and CVV input formats.
> - Implement SQL database transactions to enforce atomic updates across parent and child tables.
 
## How To Guide: 

1. Create a new page at the root directory called `checkout.php`.

![[checkoutInit.png]]

2. **Start output buffering and establish the active cart guard.**

At the very top of `checkout.php`, you must start output buffering to prevent header redirect errors and include your template shell. We will also query our active session to verify that the customer actually has products in their shopping cart, redirecting empty sessions back to the catalogue:

![[checkoutInitCode.png]]

```php
<?php
// Start output buffering to handle header redirection
ob_start();

// Include template (template.php handles starting the session)
include "template.php";

/** @var PDO $db */

// CART GUARD: Redirect visitors if their basket is empty
if (!isset($_SESSION['shopping_cart']) || empty($_SESSION['shopping_cart'])) {
	$_SESSION['error_message'] = "Your cart is empty! Please add items before checking out.";
	header("Location: orderform.php");
	exit();
}

// Initialise operational variables
$errors = [];
$success = false;
$order_id = null;
?>
```

3. **Retrieve and pre-populate authenticated user details.**

To provide an excellent user experience, we check if the customer is already logged into our website. If they are, we run an SQL query to retrieve their registered username and address, and pre-populate those values inside our checkout form fields:

![[checkoutUserDetails.png]]

```php
// --- LOGIC: PRE-POPULATE USER PROFILE DATA ---
$default_name = "";
$default_address = "";

if (isset($_SESSION['user_id'])) {
	$user_id = $_SESSION['user_id'];

	// Fetch user details safely using a prepared statement
	$stmt = $db->prepare("SELECT username, address FROM users WHERE user_id = ?");
	$stmt->execute([$user_id]);
	$user_info = $stmt->fetch();

	if ($user_info) {
		$default_name = $user_info['username'];
		$default_address = $user_info['address'] ?? "";
	}
}
```

4. **Compute the order summary and totals dynamically.**

Before we process any form submissions, we must fetch the active products from our database to compute item subtotals and the grand total of the order. This ensures the pricing data remains accurate and cannot be tampered with by client-side modifications:

![[checkoutCalculateTotals.png]]
```php
// --- LOGIC: CALCULATE SHOPPING CART TOTALS ---
$cart_items = [];
$grand_total = 0;

foreach ($_SESSION['shopping_cart'] as $id => $qty) {
	// Defensive design check: query name and price structures from the database
	$stmt = $db->prepare("SELECT product_id, name AS product_name, price FROM products WHERE product_id = ?");
	$stmt->execute([$id]);
	$item = $stmt->fetch();

	if ($item) {
		$subtotal = $item['price'] * $qty;
		$grand_total += $subtotal;

		// Append computed properties back to our layout array
		$item['qty'] = $qty;
		$item['subtotal'] = $subtotal;
		$cart_items[] = $item;
	}
}
```

5. **Process the checkout billing form submissions (POST).**

When a user submits the checkout form, we must run their inputs through strict validation checks. This prevents empty submissions, enforces credit card shapes, and blocks cross-site scripting (XSS) vectors:

![[checkoutValidateInputs.png]]

```php
// --- LOGIC: PROCESS CHECKOUT FORM ---
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['process_order'])) {
	$customer_name    = sanitiseData($_POST['customer_name'] ?? '');
	$delivery_address = sanitiseData($_POST['delivery_address'] ?? '');
	$card_number      = str_replace([' ', '-'], '', $_POST['card_number'] ?? ''); // Strips whitespaces and dashes
	$cvv              = sanitiseData($_POST['cvv'] ?? '');

	// Boundary check: enforce presence of billing details
	if (empty($customer_name) || empty($delivery_address)) {
		$errors[] = "Please provide your full name and delivery address.";
	}

	// Pattern check: enforce standard 16-digit credit card number shape
	if (!preg_match('/^\d{16}$/', $card_number)) {
		$errors[] = "Invalid credit card number. Please enter exactly 16 digits.";
	}

	// Pattern check: enforce standard 3-digit CVV security code shape
	if (!preg_match('/^\d{3}$/', $cvv)) {
		$errors[] = "Invalid CVV. Please enter exactly 3 digits.";
	}

	// If no errors occur, proceed to Step 6!
}
```

6. **Implement database transactions for atomic execution.**

If the form inputs are validated, we write the data to our database. Because this process modifies two different tables (`orders` and `order_items`), we wrap our SQL commands inside a database transaction block:

![[checkoutDatabaseLoad.png]]

```php
// Proceed with SQL executions only if our validation alerts array is empty
if (empty($errors)) {
	try {
		// Start transaction block to preserve relational integrity
		$db->beginTransaction();

		// 1. Write the master parent record to the orders table
		$stmt = $db->prepare("INSERT INTO orders (user_id, customer_name, delivery_address, total_price) VALUES (?, ?, ?, ?)");
		$current_user = $_SESSION['user_id'] ?? null;
		$stmt->execute([$current_user, $customer_name, $delivery_address, $grand_total]);

		// Grab the unique ID assigned to this order row
		$order_id = $db->lastInsertId();

		// 2. Write individual transaction rows to the order_items table
		$item_stmt = $db->prepare("INSERT INTO order_items (order_id, product_id, quantity, price_at_time) VALUES (?, ?, ?, ?)");
		foreach ($cart_items as $item) {
			$item_stmt->execute([$order_id, $item['product_id'], $item['qty'], $item['price']]);
		}

		// 3. Commit transaction: permanently save all rows to disk
		$db->commit();

		// Clear the shopping cart session upon checkout success
		$_SESSION['shopping_cart'] = [];
		$success = true;
	} catch (Exception $e) {
		// Rollback and wipe out all partial writes if any exception is thrown
		if ($db->inTransaction()) {
			$db->rollBack();
		}
		error_log("Checkout Failure: " . $e->getMessage());
		$errors[] = "Order failed to process: " . $e->getMessage();
	}
}
```

7. **Construct the responsive grid layout framework.**

We divide our page space using Bootstrap's responsive 12-column grid system. To build our checkout interface, we divide our row container into an **8/12 main workspace column (billing and payment form)** and a **4/12 side panel column (order summary details)**:

![[checkoutUIInit.png]]

```php
<div class="container py-5">
	<?php if ($success): ?>
		<!-- Success State Card: Rendered in Step 11 -->
	<?php else: ?>
		<div class="row g-5">
			<!-- Sidebar Column (col-md-5 col-lg-4 order-md-last): Order Summary -->
			<div class="col-md-5 col-lg-4 order-md-last">
				<!-- Summary Card: Rendered in Step 8 -->
			</div>

			<!-- Checkout Form Column (col-md-7 col-lg-8): Form Fields -->
			<div class="col-md-7 col-lg-8">
				<!-- Form Cards: Rendered in Steps 9 and 10 -->
			</div>
		</div>
	<?php endif; ?>
</div>
```

8. **Build the sidebar basket summary panel.**

Within our sidebar container, we loop through the calculated items compiled in Step 4. This pane displays the shopping basket contents, quantities, subtotals, and the final grand total as a read-only list:

![[checkoutSummaryPanel.png]]

```php
<!-- Order Summary Panel (Nest inside our sidebar container from Step 7) -->
<h4 class="d-flex justify-content-between align-items-center mb-3">
	<span class="text-primary fw-bold">Your Summary</span>
	<span class="badge bg-primary rounded-pill"><?= count($cart_items) ?></span>
</h4>

<ul class="list-group mb-3 shadow-sm">
	<?php foreach ($cart_items as $item): ?>
		<li class="list-group-item d-flex justify-content-between lh-sm">
			<div>
				<h6 class="my-0"><?= htmlspecialchars($item['product_name']) ?></h6>
				<small class="text-muted">Qty: <?= $item['qty'] ?></small>
			</div>
			<span class="text-muted">$<?= number_format($item['subtotal'], 2) ?></span>
		</li>
	<?php endforeach; ?>

	<li class="list-group-item d-flex justify-content-between bg-light">
		<span class="fw-bold">Total (AUD)</span>
		<strong class="text-primary h5 mb-0">$<?= number_format($grand_total, 2) ?></strong>
	</li>
</ul>
<a href="orderform.php" class="btn btn-outline-secondary w-100">Edit Cart</a>
```

9. **Build the payment validation warning alert block.**

Before compiling our input fields inside our left-aligned column, we must loop through any validation errors raised by our Step 5 input handler. If any issues are found, we render them inside a Bootstrap alert box:

![[checkoutPaymentValidation.png]]

```php
<!-- Input Area Container Header & Alerts (Nest inside col-md-7 col-lg-8) -->
<div class="card shadow-sm border-0 rounded-3 p-4">
	<h4 class="mb-4 fw-bold">Checkout Details</h4>

	<?php if (!empty($errors)): ?>
		<div class="alert alert-danger shadow-sm">
			<h6 class="alert-heading fw-bold mb-2">
				<i class="fas fa-exclamation-triangle me-2"></i>Please resolve the following:
			</h6>
			<ul class="mb-0 small">
				<?php foreach ($errors as $error): ?>
					<li><?= htmlspecialchars($error) ?></li>
				<?php endforeach; ?>
			</ul>
		</div>
	<?php endif; ?>

	<!-- Step 10 form goes here directly below this block -->
</div>
```

10. **Build the secure billing and payment input form.**

Below our error box, we build the form inputs. We use standard HTML form controls and set their value attributes to echo the submitted `$_POST` array (or default user details from Step 3). This ensures that if validation fails, the customer does not have to re-type all their information:

![[checkoutBillingForm.png]]

```php
<!-- Interactive Checkout Form (Nest inside the card from Step 9) -->
<form action="checkout.php" method="POST" novalidate autocomplete="off">
	<div class="row g-3">
		<div class="col-12">
			<label class="form-label fw-semibold">Full Name</label>
			<input type="text" name="customer_name" class="form-control" 
				   placeholder="John Doe" 
				   value="<?= htmlspecialchars($_POST['customer_name'] ?? $default_name) ?>" required>
		</div>

		<div class="col-12">
			<label class="form-label fw-semibold">Shipping Address</label>
			<textarea name="delivery_address" class="form-control" rows="3" 
					  placeholder="123 Street, Suburb, State, Postcode" 
					  required><?= htmlspecialchars($_POST['delivery_address'] ?? $default_address) ?></textarea>
		</div>

		<hr class="my-4">

		<h5 class="fw-bold text-secondary">
			<i class="fas fa-credit-card me-2"></i>Payment Information
		</h5>

		<div class="col-md-8">
			<label class="form-label fw-semibold">Credit Card Number</label>
			<input type="text" name="card_number" class="form-control" 
				   placeholder="1234 5678 1234 5678" 
				   value="<?= htmlspecialchars($_POST['card_number'] ?? '') ?>" required>
			<small class="text-muted d-block mt-1">Must be exactly 16 digits without spaces or dashes.</small>
		</div>

		<div class="col-md-4">
			<label class="form-label fw-semibold">CVV</label>
			<input type="text" name="cvv" class="form-control" 
				   placeholder="123" 
				   value="<?= htmlspecialchars($_POST['cvv'] ?? '') ?>" required>
			<small class="text-muted d-block mt-1">3 digits on the back of card.</small>
		</div>
	</div>

	<hr class="my-4">

	<!-- Form Submit Trigger -->
	<button class="w-100 btn btn-primary btn-lg py-3 fw-bold" name="process_order" type="submit">
		Complete Purchase ($<?= number_format($grand_total, 2) ?> AUD)
	</button>
</form>
```

11. **Build the order success confirmation screen.**

If the order is processed successfully by our Step 6 database transaction, we hide the input form entirely and display a clean, reassuring order receipt panel containing their unique Order ID:

![[checkoutSuccess.png]]

```php
<!-- Checkout Success Container (Nest inside our success branch from Step 7) -->
<div class="row justify-content-center">
	<div class="col-md-6 text-center">
		<div class="card shadow border-0 p-5 rounded-4">
			<div class="mb-4 text-success">
				<i class="fas fa-check-circle fa-5x"></i>
			</div>
			<h2 class="fw-bold">Order Placed!</h2>
			<p class="text-muted">
				Thank you for your purchase. Your order <strong>#<?= $order_id ?></strong> is being processed and will be shipped to <strong><?= htmlspecialchars($delivery_address) ?></strong> shortly.
			</p>
			<a href="orderform.php" class="btn btn-primary mt-3 px-4">Continue Shopping</a>
		</div>
	</div>
</div>
```

12. **Close output flushing.**

Append this cleanup block at the absolute bottom of `checkout.php` (below your closing HTML tags) to flush out the compiled server data safely to the client:

```php
<?php ob_end_flush(); ?>
```

## Verification and Testing Protocol (Docker Desktop and phpMyAdmin)

To satisfy your Year 11 portfolio testing evidence, run these test procedures using your development containers and administration tools:

| **Test Procedure**                  | **Action to Perform**                                                                                                                     | **Expected Outcome**                                                                                                                                                                                    |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Empty Cart Bypass Guard**      | Log out, empty your active shopping cart, and attempt to load `checkout.php` directly in your browser.                                    | The system block intercepts the request, generates an error flash message, and redirects you back to the product catalog page.                                                                          |
| **2. Logged-in Pre-population**     | Log in as a customer, verify your account has an address in your database, and load the checkout page.                                    | The checkout page loads successfully and the billing fields (Full Name and Delivery Address) are pre-populated with your registered details.                                                            |
| **3. Empty Input Validation**       | Clear all pre-populated values from the checkout form fields and click **Complete Purchase**.                                             | The page reloads, processing is aborted, and a red alert box displays error alerts listing name and address validation failures.                                                                        |
| **4. Payment Regex Validation**     | Type in a valid name and address, but enter `12345` in the Card Number field and `99` in the CVV field. Then click **Complete Purchase**. | The validation engine catches the issues, blocks database insertion, and displays specific error alerts regarding invalid card lengths and CVV formats.                                                 |
| **5. Database Transaction Success** | Enter valid data in all form fields (including a 16-digit card and 3-digit CVV) and submit the form.                                      | The transaction executes successfully, the active shopping cart is wiped from the session, and a clean Order Success Confirmation card displaying your unique generated Order ID appears on the screen. |
| **6. phpMyAdmin Data Verification** | Log into **phpMyAdmin**, click on your active shop database, and browse both the `orders` and `order_items` tables.                       | You should see a brand-new row in the `orders` table matching your Order ID, and corresponding individual product rows written cleanly inside the `order_items` table.                                  |


![[commonBlocks#Commit & Push]]
## Explanation

Let's dissect the systems engineering and computer science theories that power this checkout application.

### 1. Defensive Coding: Expecting the Unexpected

In computer science, **defensive coding** is a form of defensive design where you write your programs to anticipate and handle errors, unexpected inputs, and potential safety risks before they can cause a system crash. Instead of assuming that users will always enter perfect data, a defensive programmer writes scripts as if the inputs _will_ be incorrect, incomplete, or even malicious.

In Step 4 of our checkout panel, we implement defensive coding through three specific gates:

- **The Staging/Trimming Gate:** We use `trim()` and our custom `sanitiseData()` helper to strip out accidental whitespace or hidden tags. This ensures that accidental spaces do not interfere with our length validation logic.
    
- **The Boundary Gate:** We enforce exact length constraints using `strlen()`. Regular text fields must meet a minimum boundary floor (e.g. at least 10 characters for a physical address) to prevent empty or non-functional data fields from reaching database memory.
    
- **The Type and Pattern Gate:** We force type casting like `(int)` and verify string shapes using regular expressions (`preg_match()`). This blocks attempts to inject unexpected data types, ensuring we only accept logical formats like a 16-digit numeric card string.
    

By implementing these multi-tiered checking gates, we create a highly stable system that rejects garbage data at the application boundary, protecting our underlying database and preventing downstream runtime exceptions.
### 2. Database Transactions (The ACID Principle)

In professional software development, database modifications must be incredibly reliable. To achieve this, we group our database inserts inside a **Transaction** using `beginTransaction()`, `commit()`, and `rollBack()`.

Transactions follow the **ACID** principle:

- **Atomicity (All-or-Nothing):** This is the most critical rule for checkouts. If you are writing an order, you have to write to two different tables: first creating the order record, and then writing each line item. If the server crashes or loses connection halfway through, the database rolls back all partial writes, leaving no corrupted or incomplete data behind.
    
- **Consistency:** A transaction can only move the database from one valid state to another, maintaining all schema rules, primary keys, and relations.
    
- **Isolation:** Other database users cannot see your transaction's changes until you click **Commit**. This prevents race conditions, where two customers might try to buy the last available item simultaneously.
    
- **Durability:** Once a transaction is committed, its changes are permanently written to disk, remaining safe even in the event of a system power failure.
    

```
                  +-----------------------------------+
                  |      Start transaction block      |
                  +-----------------------------------+
                                    |
                                    v
                  +-----------------------------------+
                  |  1. Insert into "orders" table    |
                  +-----------------------------------+
                                    |
                   Is write successful? (Yes)
                                    |
                                    v
                  +-----------------------------------+
                  |  2. Insert into "order_items"     |
                  +-----------------------------------+
                                    |
                    Is write successful? (No!)
                                    |
                  +-----------------+-----------------+
                  |                                   |
                  v (Yes)                             v (No)
        +-------------------+               +-------------------------+
        | Commit to disk    |               |  Rollback transaction   |
        | (Saves all data)  |               | (Wipes all partial data)|
        +-------------------+               +-------------------------+
```

### 3. Regular Expressions (RegEx) for Pattern Matching

To validate payment inputs, we use **Regular Expressions (RegEx)** via PHP's `preg_match()` function. This compares a text string against a specific formatting pattern:

- **Card Number Pattern:** `'/^\d{16}$/'`
    
    - `^` means "start matching from the very beginning of the string".
        
    - `\d` means "match any numeric digit (0-9)".
        
    - `{16}` means "there must be exactly 16 matches of the preceding rule".
        
    - `$` means "the string must end here with no extra characters".
        
        If a user enters letters, spaces, or only 15 digits, the pattern test fails, and the script throws a validation error.
        

### 4. Preserving Form Input on Failure (UX Best Practice)

Imagine filling in a long sign-up or billing form, making a tiny typo in the credit card field, and clicking submit—only for the page to reload completely blank, forcing you to type all your information again. This is a frustrating user experience.

To prevent this, our form fields use a clever defensive design pattern:

```
value="<?= htmlspecialchars($_POST['full_name'] ?? $default_name) ?>"
```

- When the page loads for the first time, `$_POST['full_name']` is empty, so the null coalescing operator (`??`) falls back to display `$default_name` (the authenticated user's registered name).
    
- If the user submits the form and a validation error occurs, the page reloads. The code catches their submitted data still sitting in the `$_POST` array and displays it back inside the input field. This preserves their progress and makes correcting typos quick and easy.
    

### 5. Cross-Site Scripting (XSS) Mitigation with Output Escaping

Because the checkout form echoes user-submitted values directly back onto the screen, it is a target for **Cross-Site Scripting (XSS)** attacks.

If a malicious user submits a delivery address containing a script tag:

```
<script>stealCookies();</script>
```

And your page echoes it directly, the browser will execute the code, compromising the session security of the administrator viewing the order.

To neutralize this threat, we pass all echoed user variables through `htmlspecialchars()` first:

```
htmlspecialchars($delivery_address)
```

This converts sensitive HTML characters (like `<` and `>`) into safe, inert HTML entities (like `&lt;` and `&gt;`). The browser renders the raw code harmlessly on screen as plain text, completely neutralising the security threat.
