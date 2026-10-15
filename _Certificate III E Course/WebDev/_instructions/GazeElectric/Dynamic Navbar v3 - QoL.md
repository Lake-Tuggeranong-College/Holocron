---
isCurrent: true
needsUpdating: false
tutorialIndex: 13
---



> [!note] Goal: Implement Quality of Life (QoL) enhancements to the navigation bar, adding dynamic links to allow logged-in users to access their order history and invoices.

> [!important] Learning Outcomes:
> * Extend dynamic navigation components based on active user session state.
> * Integrate user experience (UX) quality-of-life enhancements for authenticated routes.
> * Maintain clean conditional branching in PHP template files.
> 
> 

## How To Guide

A few minor tweaks need to be implemented to improve the Quality of Life (QoL) of the application. In this section, you'll focus on updating `template.php` to dynamically display the **Orders** link whenever a user is actively authenticated.

1. **Open `template.php`.**
2. **Locate the section of the navbar** which checks if the user is not currently logged in:
```php
if (!isset($_SESSION["username"])):
```


![[navbarNotLoggedInCheck.png]]
3. **Add an `else` clause** directly after the guest conditional block. This will execute when the user is logged in, displaying a link to `invoice.php`:
![[navbarElseShowOrders.png]]
```php
<?php else: ?>
    <li class="nav-item">
        <a class="nav-link" href="invoice.php">Orders</a>
    </li>

```


4. **Save `template.php` and test in your browser.**

### Important!
* Log out of the application and verify that the "Orders" link is hidden from guests.
* Log in with a valid account and verify that the "Orders" link appears seamlessly in the header menu.



![[commonBlocks#Commit & Push]]

## Explanation

### 1. Dynamic UI Branching

Web applications use server-side session checks (such as `$_SESSION["username"]`) to adapt the user interface based on identity. Rather than exposing navigation links that lead to restricted access errors or login walls, conditional rendering ensures users only see actions relevant to their current session state.

### 2. Quality of Life (QoL) and User Experience

Providing clear, persistent access to account history (such as invoices and past orders) directly in the main navigation reduces user friction. By embedding the link within `template.php`, every page across the entire application automatically inherits this navigational improvement without requiring redundant updates to individual script files.