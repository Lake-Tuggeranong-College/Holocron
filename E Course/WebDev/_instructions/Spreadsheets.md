A timesheet is an excellent tool for tracking your study or work hours. Here is a comprehensive tutorial on how to design one, including formulas for calculating time and totals.

This tutorial shows you how to design and create your own timesheet, to be delivered to the client to invoice them for the work provided in Project 1.

The template will start like this:

![[invoiceInitial.png]]

Over the course of this tutorial, you will update the whole spreadsheet by:
- Including your own details in yellow highlighted sections
- Tasks completed, including the following detail for each task:
	- Description of the work completed
	- Quantity
	- Unit Price (hourly rate)
	- Total price
- The subtotal
- GST component
- Total Invoice Price

The cells highlighted blue are to be calculated (formula).


# Personalising the invoice

Personalising the invoice for this task involves updating the following pieces of data:

1. Company Name and address (B3:E7)
2. Invoice Submitted date (B9)
3. Invoice for (B12:C15)
4. Payable to (D12)
5. Invoice # (F12)
6. Project (D15)
7. Due Date (F15)

Set these to <u>appropriate</u> data.

# Tasks Completed

In cells B19:B22 you need to enter the Descriptions of the tasks completed. These would need to be separated into specific tasks, such as:

- Docker Installation and Configuration
- Installation Report
- Administration 
- etc.

For each of the tasks, enter the quantity. The quantity would be the **number of hours worked** for each task.

Under **Unit Price** enter your hourly rate for each task. The hourly rate for technical work could be different from the hourly rate for technical report writing.

## Calculated Fields

It's now time to enter formula for the calculated fields.

The total price column for each task is coluaclted by : `Qty * Unit Price`. 

In Cell G19, enter the formula `=E19*F19`

To simplify the calculation for the remainder of the **Total Price** cells, you can select the cell and drag the circle in the bottom right down the column of cells. This will copy the formula, updating it the cells in that row.

![[invoiceAutoFill.gif]]

# Finalising the Invoice

The final three fields that need to be filled are the subtotal, the calculation of GST and then the final total.

The subtotal is the addition of the total prices for each task completed.
GST is calculated at 10% of the subtotal.
The final price is the subtotal plus GST.

Select cell G24 and enter the formula to add the total prices. Hint: use SUM.

In Cell G25, enter the formula to calculate 10% of cell G24.

Finally, in cell F26, enter the formula to add the sub total and the GST.

# Submitting the invoice

Once you've completed creating the invoice, you will need to download the invoice both as a Excel (.XLSX) and a PDF.

Under the file menu, Choose Download and then Excel

![[invoiceDownloadExcel.png]]

This will automatically download to your local device.

Download the file again, this time choosing PDF.

![[invoiceDownloadPDF.png]]

To download the file as a PDF, you will need to set a few options first. Make sure the paper size is set to **A4**, and the orientation is **Portrait**.

![[invoiceDownloadPDFOptions.png]]

Then click **Export**.

This will download the invoice as a PDF.

## GitHub Repository

Move both the Excel and PDF versions of the invoice into the **_tasks/task1.3** directory in your GitHub Repository.

![[commonBlocks#Commit & Push]]

