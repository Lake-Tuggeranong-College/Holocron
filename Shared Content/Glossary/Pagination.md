**Pagination** is a web development technique used to divide a large set of data into smaller, discrete, numbered pages. Instead of loading thousands of items onto a single webpage all at once—which would slow down the server and crash the browser—the website retrieves and displays only a small, manageable chunk of information at any one time.

### A Simple Example

Imagine you are building an online shoe store for your BSSS Digital Technologies project, and your database contains **100 pairs of shoes**.

If you try to load all 100 high-resolution images onto the screen at the exact same time, the website will lag, and the user will have to scroll forever. Instead, you use pagination to limit the view to **10 shoes per page**.

Behind the scenes, your code tells the database exactly what to display using two numbers: **Limit** (how many items to show) and **Offset** (how many items to skip).

- **Page 1:** The website asks the database for 10 shoes, skipping 0. You see shoes **1 to 10**.
- **Page 2:** The user clicks "Next". The website asks for 10 shoes, but tells the database to skip the first 10. You see shoes **11 to 20**.
- **Page 3:** The user clicks "Next" again. The website asks for 10 shoes, but tells the database to skip the first 20. You see shoes **21 to 30**.

By breaking the data down into these bite-sized pieces, the website stays incredibly fast, saves mobile data for the user, and keeps the user interface neat and tidy.