---
isCurrent: true
needsUpdating: false
tutorialIndex: 10
---


> [!note] Goal: Understand, construct, and test the multi-pane layout of `orderform.php` to handle dynamic item selections, session-based storage, and dynamic category filters.

> [!important] Learning Outcomes:
> - Display all enabled products
> - [[Pagination]]

## How To Guide: 

Have you ever wondered how websites like Amazon or eBay remember what items are sitting in your shopping basket when you browse from page to page? Or how a site smoothly displays only nine products at a time, allowing you to click "Next" to load more without crashing the server?

This engineering guide takes a look at your product catalogue interface (`orderform.php`) and explains how to build a dynamic, state-aware store using PHP Sessions, dynamic SQL filtering, and clean pagination mathematics.

1. Create a new file called `orderform.php`.

![[orderFormInit.png]]

2. Initialise the Cart Session State

![[orderFormInitCode.png]]

```php
<?php
ob_start();
include "template.php"; 

/** @var PDO $db */

// INITIALISE STATE: If a shopping cart does not exist in the session, create a blank one
if (!isset($_SESSION['shopping_cart'])) {
    $_SESSION['shopping_cart'] = [];
}
?>
```

Because the web server forgets who we are between requests (remember, HTTP is _stateless_), we need to initialise a persistent storage area on the server. We will do this using PHP's built-in session engine.

At the very top of `orderform.php` (directly under your template include), check if a shopping cart array already exists in the active session. If it does not, initialise it as a blank array.

3. Process "Add to Cart" Form Submissions (POST)

![[orderFormAddToCart.png]]

```php
// --- LOGIC: ADD TO CART ---
if (isset($_POST['add_to_cart'])) {
    $selectedProductId = (int)$_POST['product_id'];
    $orderedQuantity   = (int)$_POST['quantity'];

    // If the item is already in the cart, add the new quantity to the existing number
    if (isset($_SESSION['shopping_cart'][$selectedProductId])) {
        $_SESSION['shopping_cart'][$selectedProductId] += $orderedQuantity;
    } else {
        $_SESSION['shopping_cart'][$selectedProductId] = $orderedQuantity;
    }
    $_SESSION['success_message'] = "Product added to cart!";
    header("Location: orderform.php");
    exit();
}
```

When a user clicks "Add" on a product card, their browser submits a POST request containing the product's unique ID and the desired quantity.

Add the form handling code block to check if the product is already in the cart, and update or add it accordingly.

4. Update the initial PHP block to process "Clear Cart" Requests (GET)

![[orderFormClearCart.png]]

```php
// --- LOGIC: CLEAR CART ---
if (isset($_GET['clear_cart'])) {
    $_SESSION['shopping_cart'] = [];
    header("Location: orderform.php");
    exit();
}
```

To allow users to empty their cart and start fresh, we listen for a specific link execution. This is triggered by a GET request containing `clear_cart` in the URL query parameters. This will be included in the code later.

Add the following GET controller right under your "Add to Cart" block.

5.  Still within the initial PHP, define the configuration for the pagination (number of products per page etc.)

![[orderFormPaginationMaths.png]]

```php
// --- PAGINATION MATH ---
$productsPerPageLimit = 9;
$currentPageNumber    = isset($_GET['page']) ? max(1, (int)$_GET['page']) : 1;

// The database offset skips older records. E.g. page 2 starts skipping the first 9 products
$databaseQueryOffset  = ($currentPageNumber - 1) * $productsPerPageLimit;
```

To prevent performance lag, we must restrict how many products load at once. We calculate a starting database "offset" dynamically based on the current page selected.

6. Load Categories from the Database for Sidebar Filtering

![[orderFormLoadCategories.png]]

```
// --- LOAD DYNAMIC CATEGORY FILTER LIST ---
$categoriesQuery = $db->query("SELECT DISTINCT category FROM products WHERE enabled = 1");
$allCategories   = $categoriesQuery->fetchAll(PDO::FETCH_COLUMN);

// Track active filter state: Default to 'All' if no specific category is selected
$selectedCategoryFilter = $_GET['cat'] ?? 'All';
```

Here, we gather our navigation options. Rather than hardcoding category buttons, we write an SQL query to look up every unique, active category present in our catalog:

7. Load the product list from the database based on the user preferences (per category, what page their own etc.).

![[orderFormLoadProducts.png]]

```php
// --- COMPILE DYNAMIC PRODUCT QUERIES ---
if ($selectedCategoryFilter !== 'All') {
    // Branch A: Filtered by Category
    $totalCountStatement = $db->prepare("SELECT COUNT(*) FROM products WHERE enabled = 1 AND category = ?");
    $totalCountStatement->execute([$selectedCategoryFilter]);
    
    // Fetch a limited subset of items matching the chosen category
    $productsStatement = $db->prepare("SELECT * FROM products WHERE enabled = 1 AND category = ? LIMIT $productsPerPageLimit OFFSET $databaseQueryOffset");
    $productsStatement->execute([$selectedCategoryFilter]);
} else {
    // Branch B: Display All Products
    $totalCountStatement = $db->query("SELECT COUNT(*) FROM products WHERE enabled = 1");
    
    // Fetch a limited subset of all available products
    $productsStatement = $db->query("SELECT * FROM products WHERE enabled = 1 LIMIT $productsPerPageLimit OFFSET $databaseQueryOffset");
}

// Store results into active arrays for our HTML rendering block
$totalProductsCount = $totalCountStatement->fetchColumn();
$totalPagesCount    = ceil($totalProductsCount / $productsPerPageLimit);
$productsList       = $productsStatement->fetchAll();
```

Now we compile our products database statement. We branch our logic based on whether the user clicked a specific category or wants to view "All" products.

Note that we dynamically fetch the count of items first to know how many page buttons to render.

8. Starting on the UI, construct the layout for the whole page, separating the categories list from the products. 

**Note:** This UI code is done after the end of the initial PHP block.

![[orderFormUIInit.png]]

```php
<div class="container-fluid py-5 px-4">
    <div class="row">
        <!-- Sidebar Column (col-lg-3): Category Filters & Basket Summary -->
        <div class="col-lg-3">
            <div class="cart-sticky">
                <!-- Categories and Shopping Cart Summary will be nested inside here! -->
            </div>
        </div>

        <!-- Catalog Workspace Column (col-lg-9): Product Listing Grid -->
        <div class="col-lg-9">
            <!-- Product list (grid) elements will be nested inside here! -->
        </div>
    </div>
</div>
```

We divide our page space using Bootstrap's responsive 12-column grid system. To build our storefront interface, we divide our row container into a **1/4 sidebar pane (Column Grid Span 3)** and a **3/4 main product display area (Column Grid Span 9)**.

You may notice that this is done in a similar style as some other pages in the system to keep a consistent interface.

9.  Build the Dynamic Categories Sidebar Filter (HTML/PHP)

![[orderFormCategoryList.png]]

```php
<!-- Categories Filtering Card (Nest inside col-lg-3) -->
<div class="card shadow-sm mb-4 border-0 rounded-3">
    <div class="card-body">
        <h5 class="fw-bold mb-3">Categories</h5>
        <div class="list-group list-group-flush">
            <!-- Default "All Products" filter link -->
            <a href="orderform.php?cat=All" class="list-group-item list-group-item-action <?= $selectedCategoryFilter == 'All' ? 'active' : '' ?>">
                All Products
            </a>
            
            <!-- Dynamic loop rendering categories from Step 5 -->
            <?php foreach ($allCategories as $categoryName): ?>
                <a href="orderform.php?cat=<?= urlencode($categoryName) ?>" class="list-group-item list-group-item-action <?= $selectedCategoryFilter == $categoryName ? 'active' : '' ?>">
                    <?= htmlspecialchars($categoryName) ?>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
</div>
```

Within our sidebar container (`col-lg-3`), we nest an interactive category list group. This list dynamically renders all category labels extracted from the database in Step 5 and decorates the currently selected active category filter.

10. Build the Session-Based Shopping Basket Summary Card (PHP Loop)

![[orderFormSidebar.png]]

```php
<!-- Shopping Cart Summary Card (Nest inside col-lg-3 below the category filter) -->
<div class="card shadow-sm border-0 rounded-3 bg-light">
    <div class="card-body">
        <h5 class="fw-bold mb-3 d-flex justify-content-between">
            <span>Your Cart</span>
            <i class="fas fa-shopping-cart text-primary"></i>
        </h5>
        <hr>
        
        <?php if (empty($_SESSION['shopping_cart'])): ?>
            <p class="text-muted text-center py-3">Your cart is empty.</p>
        <?php else: 
            $cartGrandTotal = 0;
            
            // Loop through our associative session array (Key: Product ID => Value: Quantity)
            foreach ($_SESSION['shopping_cart'] as $productIdKey => $itemQuantity): 
                // Fetch name and price from products matching the selected ID
                $cartItemQuery = $db->prepare("SELECT name, price FROM products WHERE product_id = ?");
                $cartItemQuery->execute([$productIdKey]);
                $cartItemDetails = $cartItemQuery->fetch();
                
                // Math computation stage
                $itemSubtotal = $cartItemDetails['price'] * $itemQuantity;
                $cartGrandTotal += $itemSubtotal;
            ?>
                <div class="d-flex justify-content-between mb-2 small">
                    <span><?= $itemQuantity ?>x <?= htmlspecialchars($cartItemDetails['name']) ?></span>
                    <span class="fw-bold">$<?= number_format($itemSubtotal, 2) ?></span>
                </div>
            <?php endforeach; ?>
            
            <hr>
            <div class="d-flex justify-content-between fw-bold mb-3">
                <span>Total:</span>
                <span class="text-primary h5">$<?= number_format($cartGrandTotal, 2) ?></span>
            </div>
            
            <div class="d-grid gap-2">
                <a href="checkout.php" class="btn btn-success">Checkout</a>
                <a href="orderform.php?clear_cart=1" class="btn btn-link btn-sm text-danger text-decoration-none">Clear Cart</a>
            </div>
        <?php endif; ?>
    </div>
</div>
```

Below the category list inside our sidebar, we display the active contents of the shopping basket. This module checks if the user's active session is empty. If it contains items, the code loops through the session keys, prepares queries to pull pricing details, computes item subtotals, and tallies the grand total on the fly.

11.  Build the Dynamic Product Grid Card Loop (HTML/PHP)

![[orderFormProductList.png]]

```php
<!-- Catalog Workspace Header & Card Grid (Nest inside col-lg-9) -->
<div class="d-flex justify-content-between align-items-center mb-4">
    <h2 class="fw-bold">Browse Products</h2>
    <span class="text-muted">Showing <?= count($productsList) ?> of <?= $totalProductsCount ?> items</span>
</div>

<div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
    <?php foreach ($productsList as $singleProduct): ?>
        <div class="col">
            <div class="card h-100 shadow-sm product-card">
                <!-- Defensive Asset Guard: Fallback placeholder handles missing local files -->
                <img src="./images/product_images/<?= htmlspecialchars($singleProduct['image_path']) ?>" 
                     class="card-img-top product-img" 
                     alt="<?= htmlspecialchars($singleProduct['name']) ?>"
                     onerror="this.src='[https://via.placeholder.com/300x200?text=No+Image](https://via.placeholder.com/300x200?text=No+Image)'">
                
                <div class="card-body d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="card-title fw-bold mb-0"><?= htmlspecialchars($singleProduct['name']) ?></h5>
                        <span class="badge bg-primary rounded-pill badge-price">$<?= number_format($singleProduct['price'], 2) ?></span>
                    </div>
                    <p class="card-text text-muted small flex-grow-1">
                        <?= htmlspecialchars(substr($singleProduct['description'], 0, 100)) ?>...
                    </p>
                    
                    <!-- Step 11: Action Form goes here nested inside card-body -->
                </div>
            </div>
        </div>
    <?php endforeach; ?>
</div>
```

Inside the main workspace column (`col-lg-9`), we loop through the active segment of products compiled in Step 6. Each product renders as a card decorated with dynamic titles, prices, descriptions, and a robust fallback handler to manage missing product images cleanly.

12. Add the Quantity Selector & Add Action Form

![[orderFormActionForm.png]]

```php
<!-- Interactive Order Form (Nest inside the product card-body in Step 10) -->
<form action="orderform.php?cat=<?= urlencode($selectedCategoryFilter) ?>&page=<?= $currentPageNumber ?>" method="post" class="mt-3">
    <!-- Hidden input contains our database identifier key -->
    <input type="hidden" name="product_id" value="<?= $singleProduct['product_id'] ?>">
    
    <div class="input-group input-group-sm mb-3">
        <span class="input-group-text">Qty</span>
        <!-- Numeric selector restricts quantity input range -->
        <input type="number" name="quantity" class="form-control" value="1" min="1" max="10">
        
        <button type="submit" name="add_to_cart" class="btn btn-outline-primary">
            <i class="fas fa-plus me-1"></i>Add
        </button>
    </div>
</form>
```

Finally, to link our card UI to our Step 2 form post-handler, we embed a form inside the `card-body` of each item. This form bundles a hidden parameter containing the specific product ID alongside a numeric input field restricting selected quantities between `1` and `10` items.

### Testing

Run the following test procedures using your development containers and administration tools:

| Test Procedure                | Action to Perform                                                                                  | Expected Outcome                                                                                                                                                                             |
| ----------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Clean State Boot**       | Open **Docker Desktop** and restart your container group.                                          | The local development server restarts fresh with all configurations reloaded.                                                                                                                |
| **2. Category Filter Check**  | Open your website's catalogue page and click on the "Hardware" filter link in the sidebar.         | The list dynamically reduces to display only products categorized as Hardware, and the browser URL query string changes to include `?cat=Hardware`.                                          |
| **3. Add to Cart Test**       | Locate an item on the shop page, select `2` in the quantity field, and click **Add**.              | The page reloads, and your "Your Cart" sidebar box immediately updates to show the correct quantity, product title, calculated subtotal, and running grand total.                            |
| **4. State Persistence Test** | Click on a different category filter, or change the page using the pagination navigation controls. | The shopping cart contents remain saved. The items do not vanish because your browser automatically passes the Session ID cookie with every click, preserving your cart state on the server. |
| **5. Clear Cart Test**        | Click the red **Clear Cart** link located inside the sidebar shopping cart card.                   | The sidebar cart updates immediately, clearing all session variables inside the array and displaying the text: "Your cart is empty."                                                         |

![[commonBlocks#Commit & Push]]

## Explanation: State Persistence, Pagination Math, and Category Filtering

Let's dissect the systems engineering and computer science theories that power this application.

### 1. State Management: Why We Use Sessions

As discussed in our lessons, HTTP is a **stateless** protocol. Without session files, clicking a page or category would completely wipe your shopping basket.

- **The Metaphor:** Imagine walking around a retail shop. If you had no short-term memory, every time you looked at a new shelf, you would forget what you were holding in your hands. A **Session** is like a temporary shopping basket.
    
- **The Cookie Hook:** When you load your website, PHP hands your browser a tiny cookie containing a randomised key called a **Session ID** (e.g., `PHPSESSID`).
    
- **Server-Side File storage:** Every time you click an item or filter, your browser automatically hands this key back to the server. PHP reads the key, opens the matching file in its server directory, and loads your `$_SESSION['shopping_cart']` data back into active memory.
    

```
+-------------+                    +---------------------+                    +---------------------+
|   Client    |                    |     Web Server      |                    | Server Hard Drive   |
|  (Browser)  |                    |        (PHP)        |                    |  (Session Storage)  |
+-------------+                    +---------------------+                    +---------------------+
       |                                      |                                          |
       | ---- GET /orderform.php ---------->  |                                          |
       |      Cookie: PHPSESSID=abc1234       |                                          |
       |                                      | ---- Lookup session data "abc1234" ----> |
       |                                      | <--- Return Array ['shopping_cart' => [...]] ---- |
       |                                      |                                          |
       |                                      | (Compiles database values + cart totals) |
       | <--- Renders Dynamic HTML Page ----- |                                          |
```

### 2. The Mathematics of Pagination

If your database has 1,000 products, loading them all simultaneously would crash your visitor's browser and slow down your server's database connection. To solve this, we split the data using **Pagination**.

Our calculation code uses a simple formula to tell the database exactly which subset of rows to fetch:

$$Offset = (Current\ Page - 1) \times Items\ Per\ Page$$

Let's say we set `$productsPerPageLimit = 9`:

- **On Page 1:** $Offset = (1 - 1) \times 9 = 0$. The SQL runs `LIMIT 9 OFFSET 0` (fetches products 1 to 9).
    
- **On Page 2:** $Offset = (2 - 1) \times 9 = 9$. The SQL runs `LIMIT 9 OFFSET 9` (skips the first 9 products and fetches products 10 to 18).
    
- **On Page 3:** $Offset = (3 - 1) \times 9 = 18$. The SQL runs `LIMIT 9 OFFSET 18` (skips the first 18 and fetches products 19 to 27).
    

### 3. Dynamic Category Filtering and Defensive Binding

To let users filter products, our PHP script dynamically changes the structure of our SQL query:

- **Scenario A (Viewing All Products):** If `$selectedCategoryFilter` is set to `'All'`, the script executes a general, non-parameterised query:
    
    ```
    SELECT * FROM products WHERE enabled = 1 LIMIT 9 OFFSET 0
    ```
    
- **Scenario B (Viewing a Specific Category):** If a user filters by a category, the query changes to target that specific group:
    
    ```
    SELECT * FROM products WHERE enabled = 1 AND category = ? LIMIT 9 OFFSET 0
    ```
    
    **Defensive Design Check:** Notice how the category value is passed to the database engine using a **prepared statement** placeholder (`?` or `:category`). We never concatenate `$_GET['cat']` directly into the SQL string. This prevents attackers from executing an SQL Injection attack via your filter links.
    

### 4. Preventing Broken Image Layouts: The `onerror` Event

A common issue in student projects is a broken layout when an image is missing on the server. If a product points to `keyboard.png`, but the file was deleted or never uploaded, the page will render a broken image icon:

```html
<img src="./images/product_images/keyboard.png" alt="...">
```

To protect our User Experience (UX), your script implements a clever fallback strategy using the inline JavaScript `onerror` attribute:

```js
onerror="this.src='[https://via.placeholder.com/300x200?text=No+Image](https://via.placeholder.com/300x200?text=No+Image)'"
```

If the browser tries to fetch the local file and gets a `404 Not Found` error, the `onerror` event triggers immediately. It replaces the broken source link with a placeholder image, keeping your shop looking completely professional.

