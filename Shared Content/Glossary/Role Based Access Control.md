---
isCurrent: true
needsUpdating: false
---
# What is it? (The Simple Idea)

RBAC is a key security rule that controls who can see or do what inside a computer system or website.

Instead of giving special permissions to every single user one by one (which is messy and risky), RBAC groups those permissions into categories, called Roles.

Think of it like this:

- Bad way (No RBAC): Giving the "key to the server room," the "cash register key," and the "filing cabinet key" to every single person working at the school.
- Good way (With RBAC): Defining specific roles: Teacher, Librarian, Student, Custodian. Each role gets only the keys and access necessary for their job.

---

# How Does It Work? (The Tech Concept)

The core idea of RBAC is to make sure that users only get the access they _need_, and nothing more. This is called the Principle of Least Privilege (PoLP).

When an organisation uses RBAC, they do three things:

1. Create Roles: They decide what jobs exist (e.g., `Marketing Staff`, `Finance Manager`, `System Administrator`).
2. Assign Permissions to Roles: They list all the necessary actions for that job. _(Example: The `Finance Manager` role gets "Read" access to salaries and "Write" access to invoices.)_
3. Assign Roles to People: They assign the user to the role that matches their job.

💡 The result? If a user logs in, the system checks their Role first, and only lets them access the things connected to that Role.

---

# Why Is RBAC Important for Security? (The "Why")

1. Security: It limits the damage. If a hacker steals a login for the `Student` role, they cannot access the payroll system because the `Student` role doesn't have those permissions.
2. Organisation: It is much easier for IT staff to manage. If an employee changes jobs, you don't have to un-grant 30 individual permissions—you just remove their old Role and give them the new one.
3. Compliance: Many laws (like handling medical or financial data) require companies to prove they are keeping data secure. RBAC is a primary way to prove this.

---

# Examples

|Scenario|Role Assigned|Access Granted (Can Do)|Access Restricted (Cannot Do)|Security Reason|
|---|---|---|---|---|
|School Website Backend|`Teacher`|Upload lesson plans; Grade student assignments.|Change the school's annual budget; Delete the entire student record database.|Keeps high-level financial data away from teaching staff.|
|Social Media Platform|`Guest User`|View public profiles; Send messages to friends.|Change system settings; Delete other users’ accounts; Access admin dashboards.|Prevents general users from sabotaging or controlling the site.|
|Library System|`Patron Member`|Search for books; Check out items; Renew loans.|Add new books to the collection; Delete entire record sets.|Limits physical or digital changes to trained staff members only.|