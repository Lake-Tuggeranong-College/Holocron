---
Tutorial Currency Status:
  - Current
isCurrent: true
---
The website being developed is an ecommerce site to sell products. Users will be able to select products and add them to a shopping cart and confirm the orders. Administrators will be able to see open orders and mark as completed.

![[overviewOrderForm.png]]


There will need to be a number of subsystems within the site:
- User Management
	- Registration
	- Login
	- Logout
	- Password Reset
- Shopping Cart
	- Adding to Cart
	- Cart Ordering
	- Invoice
- Administrator level access


The site will be developed within the Docker Container created in the previous phase of the project.
# Shopping Cart Overview

The shopping cart functionality, or subsystem, is broken up into two pages - `orderForm.php` and `cart.php`. The Order form is responsible for displaying the products, allowing the user to select items to purchase. The Cart page displays the selected item/s and calculates the sub totals and total, and allows the user to ‘make’ a purchase.

[Example](https://drive.google.com/file/d/1pcbU9X2vxiTqaxBkXhadTkw6CL3NHcSS/view?usp=drive_web)
