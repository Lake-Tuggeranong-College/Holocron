---
isCurrent: true
needsUpdating: false
tutorialIndex: 8
---
A great user interface should adapt to whoever is using it. In this tutorial, you will enhance your website's main navigation menu to dynamically display administrative tools only when a user with administrator privileges logs in. This ensures your store remains neat and intuitive for regular customers while keeping sensitive management links hidden from public view.

> [!note] Goal: To add a dropdown menu that is only accessible for administrators

> [!important] Learning Outcome/s:
> - Implement Role-Based Access Control (RBAC): Construct dynamic layout menus that automatically adapt their links based on active user privileges.
> - Verify Session State Clearance: Use saved session access values to distinguish between standard customer accounts and administrative accounts.
> - Apply UI Masking Safeguards: Design clean, high-contrast layouts that keep sensitive back-end management portals hidden from general public access.
## How To Guide

1. Open `template.php`.
2. Find the code that displays links if the user is logged in. 
![[navbarFindCode.png]]

3. Directly after checking if the user is logged in, add a secondary check to see if the user is an administrator (`access_level` = 2)
![[navbarAdminCheck.png]]

```php
<?php if (isset($_SESSION['access_level']) && $_SESSION['access_level'] == 2) : ?>

<?php endif; ?>
```

4. Add the HTML code to display a dropdown menu, using Bootstrap CSS, to display links to admin pages.

![[navbarAdminDropdown.png]]

```php
<!-- Exclusive Admin Panel Dropdown -->
<div class="nav-item dropdown me-3">
	<a class="nav-link dropdown-toggle text-danger fw-bold" href="#" id="adminDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
		<i class="fas fa-user-shield me-1"></i> Admin Panel
	</a>
	<ul class="dropdown-menu dropdown-menu-end shadow border-danger" aria-labelledby="adminDropdown">
		<li>
			<a class="dropdown-item" href="admin_products.php">
				<i class="fas fa-boxes me-2 text-danger"></i>Manage Products
			</a>
		</li>
		<li>
			<a class="dropdown-item" href="admin_users.php">
				<i class="fas fa-users-cog me-2 text-danger"></i>Manage Users
			</a>
		</li>
	</ul>
</div>
```

5. Log in as an administrator (or refresh the page) and an Admin menu will appear.

![[navbarAdminLoggedIn.png]]

![[commonBlocks#Commit & Push]]

