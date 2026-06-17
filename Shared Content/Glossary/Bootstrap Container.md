![[commonBlocks#^genAIverified]]

A **Bootstrap container** as a virtual boundary box that neatly houses, centres, and aligns your website's content—much like the margins on a page in a printed textbook.

Here is what you need to know about how they work:
### 1. The Two Types of Containers

- **`.container` (Responsive Fixed Width):** This creates a centered box with empty margins on either side. As you resize the browser window (from a mobile screen to an ultra-wide desktop monitor), the container automatically snaps to optimal widths (break-points) to ensure your content always looks balanced.
- **`.container-fluid` (Full Width):** This stretches to cover **100%** of the screen's width, from the left edge to the right edge, regardless of device size. It is perfect for full-width maps, dashboards, or expansive navigation bars.

### 2. Why Do We Use Them?

- **Prevents "Infinite Stretch":** On ultra-wide monitors, text lines can stretch so far across the screen that they become exhausting to read. Containers keep your page structure compact and readable.
- **Prerequisite for the Grid System:** Bootstrap’s grid system—which uses rows (`.row`) and columns (`.col-*`) to make layouts responsive—**must** be placed inside a container to calculate horizontal spacing and margins correctly.