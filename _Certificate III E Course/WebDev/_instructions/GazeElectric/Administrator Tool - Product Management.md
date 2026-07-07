---
isCurrent: true
needsUpdating: true
tutorialIndex: 7
---


> [!note] Goal: Allow administrators to add, edit or delete Products on the system

> [!important] Learning Outcomes:
> - TODO
## How To Guide: 

### Step 1 - Database Configuration

1. Log into phpMyAdmin. Click on the SQL tab.
![[prodMgmtPHPMyAdmin.png]]

2. Enter the following SQL into the query box. Click the Go button. This will create the `products` table in the database to hold the product information.
![[prodMgmtSQL.png]]

```sql
CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `category` varchar(100) NOT NULL,
  `image_path` varchar(255) DEFAULT 'placeholder.png',
  `enabled` tinyint(1) DEFAULT 1,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

```

> [!warning] If you receive an error stating there was no database selected, make sure the `shopfront` database has been selected.

3. Log out of phpMyAdmin.
#### Explanation

##### Database Design Logic (`products` Table)

Before writing any code, we must define how our database stores inventory items. The SQL structure is built with specific data types chosen for security, accuracy, and efficiency:

- **`product_id` (Integer):** A unique, automatic ID number given to each product. It ensures every single item can be uniquely identified.
- **`name` & `category` (Varchar):** Short, flexible text lines (up to 255 and 100 characters). This is ideal for names, titles, and labels.
- **`description` (Text):** A larger block of text. Unlike a `varchar`, a `text` field can hold thousands of words, making it perfect for detailed product write-ups.
    
- **`price` (Decimal):** **Crucial Software Rule:** Never store money using floating-point numbers (`float` or `double`). Computer processors struggle with binary fraction rounding, which leads to tiny, catastrophic math errors (like `$19.99` becoming `$19.9899999`). `decimal(10,2)` guarantees absolute precision for prices up to `$99,999,999.99` with exactly two decimal places.
    
- **`image_path` (Varchar):** We do **not** upload physical image files directly into the database. Doing so causes the database file to grow massive and crawl to a halt. Instead, we upload the image to the server's hard drive and save its clean, unique text filename (e.g., a UUID string) in this column. It defaults to `'placeholder.png'` if no image is uploaded.
    
- **`enabled` (Tinyint):** MySQL does not have a native "True/False" flag, so it uses `1` (Active) or `0` (Inactive) to power our soft-disable feature.
    
- **`created_at` (Timestamp):** The database automatically records the exact date and time the product was catalogued, leaving your PHP scripts with one less task to handle during an insert.

### Step 2 - Webpage Development

1. Create a new file called `admin_products.php` and include the boilerplate code.
![[prodMgmtInit.png]]
```php
<?php
ob_start();
include "template.php"; 

/** @var $db */

?>



<?php ob_end_flush(); ?>
```

2. Include the security check to confirm the user is an administrator. If they aren't redirect them to the front page.
![[prodMgmtConfirmAccessLevel.png]]
```php
// Security Check: Admin Only
if (!isset($_SESSION['access_level']) || $_SESSION['access_level'] < 2) {
    $_SESSION['error_message'] = "Access denied. Administrator privileges required.";
    header("Location: index.php");
    exit();
}
```

3. Define the location where the product images will be saved to.
![[prodMgmtImageDirectory.png]]
```php
$upload_dir = './images/product_images/';
// Ensure images directory exists
if (!is_dir($upload_dir)) {
    mkdir($upload_dir, 0777, true);
}
```

> [!note] This code also checks if the folder exists. If it doesn't, then it will create it. 

4. Include a function to generate a randomised [[Universal Unique Identifier (UUID)|UUID]]. 

![[prodMgmtUUID.png]]

```php
// Function to generate a simple UUID-like string
function generate_uuid() {
    return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
        mt_rand(0, 0xffff), mt_rand(0, 0xffff),
        mt_rand(0, 0xffff),
        mt_rand(0, 0x0fff) | 0x4000,
        mt_rand(0, 0x3fff) | 0x8000,
        mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff)
    );
}
```

> [!note] This UUID will be used later in the code to generate unique names for uploaded product images. See below for details.

#### Explanation

##### UUIDs

If two administrators upload different product images named `photo.jpg`, the second upload will overwrite and corrupt the first. To prevent this, the code implements a **Universally Unique Identifier (UUID)** generator:

```php
function generate_uuid() {
    return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
        mt_rand(0, 0xffff), mt_rand(0, 0xffff),
        mt_rand(0, 0xffff),
        mt_rand(0, 0x0fff) | 0x4000,
        mt_rand(0, 0x3fff) | 0x8000,
        mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff)
    );
}
```

This function compiles random hexadecimal strings to generate a virtually guaranteed, collision-free unique identifier (e.g., `4a2f89c1-8d2b-4029-a1b3-cf8a29104b2a.jpg`). The database stores this clean, unique name string in the `image_path` column, while the actual file is renamed accordingly and stored on disk.
### Step 3 - User Interface

> [!note] The User Interface for the admin_products page is designed to be very similar to the admin_users page.
> ![[prodMgmtUILayoutWireframe.png]]

1. Create the `container-fluid` layout and two columns. This uses the same column ratio as with the User Management page. Note that the HTML starts *after* the `?>` ending the initial PHP block.

![[prodMgmtUILayout.png]]

```html
<div class="container-fluid py-4" style="max-width: 1200px;">
    <h2 class="mb-4"><i class="fas fa-boxes me-2"></i>Inventory Management</h2>

    <div class="row">
        <!-- FORM COLUMN: Add/Edit -->
        <div class="col-lg-4 mb-4">

        </div>

        <!-- LIST COLUMN: View/Manage -->
        <div class="col-lg-8">

        </div>
    </div>
</div>
```
2. Add the HTML & PHP code to display all the current products in the `products` table.

![[prodMgmtListProducts.png]]
```php
<div class="card shadow-sm border-0">
	<div class="card-body">
		<div class="table-responsive">
			<table class="table table-hover align-middle">
				<thead class="table-light">
					<tr>
						<th>Image</th>
						<th>Product</th>
						<th>Price</th>
						<th>Status</th>
						<th class="text-end">Actions</th>
					</tr>
				</thead>
				<tbody>
					<?php
					$products = $db->query("SELECT * FROM products ORDER BY product_id DESC")->fetchAll();
					foreach ($products as $p):
					?>
					<tr>
						<td>
							<img src="<?= $upload_dir . $p['image_path'] ?>" style="width: 40px; height: 40px; object-fit: cover;" class="rounded" onerror="this.src='https://via.placeholder.com/40'">
						</td>
						<td>
							<strong><?= htmlspecialchars($p['name']) ?></strong><br>
							<small class="text-muted"><?= $p['category'] ?></small>
						</td>
						<td>$<?= number_format($p['price'], 2) ?></td>
						<td>
							<a href="admin_products.php?toggle=<?= $p['product_id'] ?>" class="text-decoration-none">
								<?php if ($p['enabled']): ?>
									<span class="badge bg-success">Enabled</span>
								<?php else: ?>
									<span class="badge bg-secondary">Disabled</span>
								<?php endif; ?>
							</a>
						</td>
						<td class="text-end">
							<a href="admin_products.php?edit=<?= $p['product_id'] ?>" class="btn btn-sm btn-info text-white"><i class="fas fa-edit"></i></a>
							<a href="admin_products.php?delete=<?= $p['product_id'] ?>" class="btn btn-sm btn-danger" onclick="return confirm('Delete this product?')"><i class="fas fa-trash"></i></a>
						</td>
					</tr>
					<?php endforeach; ?>
				</tbody>
			</table>
		</div>
	</div>
</div>
```

> [!note] Make sure the code is placed in the indicated position.

3. Add the HTML and PHP code to allow the administrator to:
	1. Create new product listings,
	2. Edit products listings

![[prodMgmtAddEditProducts.png]]

```php
<div class="card shadow-sm border-0">
	<div class="card-header bg-dark text-white">
		<h5 class="mb-0"><?= $edit_item ? 'Edit Product' : 'Add New Product' ?></h5>
	</div>
	<div class="card-body">
		<form action="admin_products.php" method="post" enctype="multipart/form-data">
			<input type="hidden" name="product_id" value="<?= $edit_item['product_id'] ?? '' ?>">
			<input type="hidden" name="current_image" value="<?= $edit_item['image_path'] ?? 'placeholder.png' ?>">
			
			<div class="mb-3 text-center">
				<?php 
					$img_src = $upload_dir . ($edit_item['image_path'] ?? 'placeholder.png');
					if (!file_exists($img_src)) $img_src = 'https://via.placeholder.com/150';
				?>
				<img src="<?= $img_src ?>" class="img-thumbnail mb-2" style="height: 120px; width: 120px; object-fit: cover;">
				<input type="file" name="product_image" class="form-control form-control-sm" accept="image/*">
			</div>

			<div class="mb-3">
				<label class="form-label fw-bold">Product Name</label>
				<input type="text" name="name" class="form-control" value="<?= $edit_item['name'] ?? '' ?>" required>
			</div>

			<div class="mb-3">
				<label class="form-label fw-bold">Category</label>
				<select name="category" class="form-select" required>
					<?php 
					$cats = ['Electronics', 'Home & Garden', 'Clothing', 'Toys', 'Health'];
					foreach($cats as $c) {
						$sel = (isset($edit_item['category']) && $edit_item['category'] == $c) ? 'selected' : '';
						echo "<option value='$c' $sel>$c</option>";
					}
					?>
				</select>
			</div>

			<div class="mb-3">
				<label class="form-label fw-bold">Price ($)</label>
				<input type="number" step="0.01" name="price" class="form-control" value="<?= $edit_item['price'] ?? '' ?>" required>
			</div>

			<div class="mb-3">
				<label class="form-label fw-bold">Description</label>
				<textarea name="description" class="form-control" rows="3"><?= $edit_item['description'] ?? '' ?></textarea>
			</div>

			<div class="form-check form-switch mb-4">
				<input class="form-check-input" type="checkbox" name="enabled" id="p_enabled" <?= (!isset($edit_item) || $edit_item['enabled']) ? 'checked' : '' ?>>
				<label class="form-check-label" for="p_enabled">Visible to Customers</label>
			</div>

			<div class="d-grid gap-2">
				<button type="submit" name="save_product" class="btn btn-primary">Save Product</button>
				<?php if ($edit_item): ?>
					<a href="admin_products.php" class="btn btn-outline-secondary">Cancel Edit</a>
				<?php endif; ?>
			</div>
		</form>
	</div>
</div>
```

4. Add the code allowing the administrator to delete a product from the `products` table. Place this function in the initial PHP block under `generate_uuid()`.

![[prodMgmtFunctionDelete.png]]

```php
// --- LOGIC: DELETE PRODUCT ---
if (isset($_GET['delete'])) {
    $id = (int)$_GET['delete'];
    
    // Optional: Delete physical image file
    $stmt = $db->prepare("SELECT image_path FROM products WHERE product_id = ?");
    $stmt->execute([$id]);
    $img = $stmt->fetchColumn();
    if ($img && $img != 'placeholder.png' && file_exists($upload_dir . $img)) {
        unlink($upload_dir . $img);
    }

    $db->prepare("DELETE FROM products WHERE product_id = ?")->execute([$id]);
    $_SESSION['success_message'] = "Product removed successfully.";
    header("Location: admin_products.php");
    exit();
}
```

> [!note] This function will be executed when the administrator clicks the 🗑️ button for a particular product.
> ![[prodMgmtDeleteIcon.png]]
> The code that makes this possible is:
> `<a href="admin_products.php?delete=<?= $p['product_id'] ?>" class="btn btn-sm btn-danger" onclick="return confirm('Delete this product?')"><i class="fas fa-trash"></i></a>`
> This operates in the same manner as with User Management. See that page for details on GET vs. POST.

5. Add the code to allow the administrator to *toggle* a product. This will enable or disable the product listing in the site.

![[prodMgmtToggleCode.png]]

```php
// --- LOGIC: TOGGLE STATUS ---
if (isset($_GET['toggle'])) {
    $id = (int)$_GET['toggle'];
    $db->prepare("UPDATE products SET enabled = NOT enabled WHERE product_id = ?")->execute([$id]);
    $_SESSION['success_message'] = "Product status updated.";
    header("Location: admin_products.php");
    exit();
}
```

> [!note] This functionality was not included for User accounts. How could you update that page to include it?

6. Start the function to save a new product.

![[prodMgmtSave1.png]]

```php
// --- LOGIC: ADD/EDIT PRODUCT ---
if (isset($_POST['save_product'])) {
    $p_id      = $_POST['product_id'] ?? null;
    $p_name    = sanitiseData($_POST['name']);
    $p_cat     = sanitiseData($_POST['category']);
    $p_price   = (float)$_POST['price'];
    $p_desc    = sanitiseData($_POST['description']);
    $p_enabled = isset($_POST['enabled']) ? 1 : 0;
    
}
```

>[!note] Note the use of `$_POST` in this function. This is because the code will be uploading data and files to the webserver.

7. Handle the image upload functionality.
![[prodMgmtSave2.png]]
```php
// Handle Image Upload
$image_name = $_POST['current_image'] ?? 'placeholder.png';
if (isset($_FILES['product_image']) && $_FILES['product_image']['error'] === UPLOAD_ERR_OK) {
	$file_tmp = $_FILES['product_image']['tmp_name'];
	$file_ext = pathinfo($_FILES['product_image']['name'], PATHINFO_EXTENSION);
	$new_name = generate_uuid() . '.' . $file_ext;
	
	if (move_uploaded_file($file_tmp, $upload_dir . $new_name)) {
		// Delete old image if updating and it's not the placeholder
		if ($p_id && $image_name != 'placeholder.png' && file_exists($upload_dir . $image_name)) {
			unlink($upload_dir . $image_name);
		}
		$image_name = $new_name;
	}
}
```

> [!note] The code is fairly complex for a 'simple' process of uploading a image. See below for a detailed explanation. Also note how this function uses the `generate_uuid()` function to rename the image.

8. Write the product data to the database. This collects all the required fields and executes SQL to write the changes to the database.
![[prodMgmtSave3.png]]
```php
if ($p_id) {
	$sql = "UPDATE products SET name=?, category=?, price=?, description=?, enabled=?, image_path=? WHERE product_id=?";
	$db->prepare($sql)->execute([$p_name, $p_cat, $p_price, $p_desc, $p_enabled, $image_name, $p_id]);
	$_SESSION['success_message'] = "Product updated.";
} else {
	$sql = "INSERT INTO products (name, category, price, description, enabled, image_path) VALUES (?, ?, ?, ?, ?, ?)";
	$db->prepare($sql)->execute([$p_name, $p_cat, $p_price, $p_desc, $p_enabled, $image_name]);
	$_SESSION['success_message'] = "New product added.";
}
header("Location: admin_products.php");
exit();
```

> [!note] Depending on whether the `p_id` variable is set, this code either 
> - creates a new product entry (`INSERT`), or
> - updates an existing entry (`UPDATE`).

9. Set the `edit_item` variable if the administrator wishes to edit an existing entry.
![[prodMgmtSave4.png]]
```php
$edit_item = null;
if (isset($_GET['edit'])) {
    $stmt = $db->prepare("SELECT * FROM products WHERE product_id = ?");
    $stmt->execute([(int)$_GET['edit']]);
    $edit_item = $stmt->fetch();
}
```

10. Save the file. 
11. Launch the page in the browser to test the process. You will need to test:
	1. Adding a new product
	2. Editing a product.
	3. Toggling a product (set enabled to disabled and vice versa)
	4. Deleting a product.

![[prodMgmtTestFunctionality.png]]

![[commonBlocks#Commit & Push]]
## Explanation

### Demystifying our Custom Logic Routes

Our admin interface triggers backend scripts using specific combinations of GET and POST parameters. Understanding how these parameters operate is crucial for software engineering portfolios.

#### Route A: `$_GET['delete']` (Permanent Deletion)

- **How it is triggered:** The administrator clicks a red delete trash button, which is an HTML anchor link:
    
    ```php
    <a href="admin_products.php?delete=15">Delete</a>
    ```
    
- **URL Transformation:** * Original URL: `admin_products.php`
    
    - Action URL: `admin_products.php?delete=15`
        
- **Why we use GET here:** Standard hyperlinks can only send GET requests. By appending `?delete=15` to the query string, we inform our PHP script to immediately identify the targeted `product_id` (15), fetch its image path to purge the file from disk, and then permanently execute the SQL `DELETE` query.
    

#### Route B: `$_GET['toggle']` (Soft-Disable Visibility)

- **How it is triggered:** The administrator clicks the visibility eyeball icon link:
    
    ```php
    <a href="admin_products.php?toggle=15&state=0">Toggle</a>
    ```
    
- **URL Transformation:** * Original URL: `admin_products.php`
    
    - Action URL: `admin_products.php?toggle=15&state=0`
        
- **Why we use GET here:** Like the delete operation, this quick-toggle action is triggered directly from a table row hyperlink. By sending both `toggle` (the product ID) and `state` (the desired active/inactive value) via the URL query string, the PHP backend can instantly determine how to update the `enabled` column without forcing the administrator to load an entire editing form.
    

#### Route C: `$_POST['save_product']` (Saving/Editing Products)

- **How it is triggered:** The administrator clicks the "Save Product Record" button inside an HTML form:
    
    ```php
    <form action="admin_products.php" method="post" enctype="multipart/form-data">
    ```
    
- **URL Transformation:** * Original URL: `admin_products.php`
    
    - Submitting URL: `admin_products.php` (The URL remains **unchanged** in the address bar)
        
- **Why we use POST here:** 
1. **Data Size:** Product descriptions can contain thousands of words, easily exceeding the character limits of GET. 
2. **File Uploads:** We are transmitting binary data (the image file). GET requests cannot handle raw binary streams, making POST with `enctype="multipart/form-data"` an absolute technical requirement. 
3. **Security and Cleanliness:** It prevents sensitive or bulky details (like long description text blocks) from cluttering the address bar or appearing in browser history logs.

### The Mechanics of File Uploading in HTML & PHP

To transmit a physical file (like an image) from a user's machine to our server, standard text forms are insufficient. We must adjust both the client and server setups:

- **`enctype="multipart/form-data"`:** This attribute is mandatory on the `<form>` element. It tells the browser to split the form submission into multiple parts, sending the input strings as normal text but packaging the image file as a stream of raw binary data.
    
- **The `$_FILES` Superglobal:** When the server receives a file, PHP intercepts it and places it in a temporary staging directory on the server. The metadata (file name, temp location, size, and errors) is populated into `$_FILES['product_image']`. We must write code to validate this file and move it to its permanent location.

### Mitigating Upload Vector Exploits (Defensive Verification)

Allowing file uploads is one of the most high-risk vectors in web development. An attacker might attempt to upload a file named `shell.php` masked with an image extension. If the web server runs this file, they gain terminal access to your system. To prevent this, we implement two defensive check gates:

1. **MIME-Type Verification:** We do not rely on the user's file extension. Instead, we inspect the file's binary signature on the server to verify it is genuinely a `image/jpeg`, `image/png`, or `image/webp`.
    
2. **File Size Constraints:** We enforce a strict size ceiling (e.g., maximum 2MB) to prevent Denial of Service (DoS) attacks aimed at filling the server's hard drive space.

### Dynamic Product Visibility (Toggling States)

The database contains an `enabled` boolean field (storing `1` for active or `0` for inactive). This provides a defensive design feature known as a **soft-disable**:

- Rather than permanently deleting a product from the database (which would corrupt historic sales records or order invoices linked to that product ID), administrators can simply toggle its visibility.
    
- Products with `enabled = 0` are dynamically excluded from customer-facing catalog pages while remaining fully preserved inside the admin inventory panel for accounting and auditing purposes.