---
isCurrent: true
needsUpdating: false
---
# Introduction
This phase of the project transitions from infrastructure setup to the development of a fully functional e-commerce storefront. Utilising the Docker container environment established in the previous phase, students will engineer a dynamic web application that facilitates end-to-end product transactions. 

The primary objective is to build a professional shopfront to sell products of your choice. While the underlying functional requirements are standardised, the branding, inventory selection, and aesthetic direction are entirely at your discretion.

![[overviewOrderForm.png]]

# Technical Stack & Frameworks

| Component             | Technology         | Purpose                                                                    |
| --------------------- | ------------------ | -------------------------------------------------------------------------- |
| **Server-Side Logic** | PHP                | Processing form data, session management, and database interaction.        |
| **Structure**         | HTML5              | Defining the semantic layout and content of the web pages.                 |
| **Styling**           | CSS3 / Bootstrap 5 | Ensuring a modern, responsive UI with a mobile-first approach.             |
| **Environment**       | Docker             | Hosting the application within the pre-configured containers from Phase 1. |

# System Architecture & Subsystems
The final website is comprised of three primary architectural components, each essential for a complete e-commerce experience:

## User Management
A secure module to handle user identity and access control:
* **Registration:** New user account creation.
* **Authentication:** Secure Login and Logout protocols.
* **Account Recovery:** Password reset functionality.

## Shopping Cart Ecosystem
The core transactional engine of the site, split into two primary interfaces:
* **Order Form (`orderForm.php`):** A customer-facing catalog responsible for displaying products and allowing users to select items for purchase.
* **Cart Management (`cart.php`):** A functional checkout interface that aggregates selected items, calculates sub-totals and grand totals, and processes the final purchase.
* **Invoicing:** Generation of post-purchase records for the customer.

## Administrative Command Center
A restricted-access area designed for site management:
* **Order Oversight:** Administrators can view all open orders.
* **Order Fulfilment:** Capabilities to mark pending orders as completed.
# Security Considerations

As you develop the application, the following security protocols must be planned for to ensure the integrity of user data and commercial transactions:

- **Password Security:** To protect user credentials, all passwords must be stored using industry-standard hashing algorithms (e.g., `password_hash()` in PHP). Plain-text storage is strictly prohibited.
- **Transaction Integrity:** The communication between `orderForm.php` and `cart.php` must be secured to prevent "Man-in-the-Middle" (MitM) attacks or data tampering. This involves ensuring that product IDs, prices, and quantities cannot be intercepted or modified by the user or third parties during the transition to the cart.
- **Data Sanitisation:** All user inputs must be sanitised and validated to protect the server and database from common vulnerabilities such as SQL Injection and Cross-Site Scripting (XSS).

# Project Goals

By the conclusion of this phase, you will have a working e-commerce platform that demonstrates proficiency in server-side scripting, database interaction (via PHP), and responsive front-end design. Success is measured by the seamless integration of these subsystems into a cohesive, user-friendly shopping experience.
