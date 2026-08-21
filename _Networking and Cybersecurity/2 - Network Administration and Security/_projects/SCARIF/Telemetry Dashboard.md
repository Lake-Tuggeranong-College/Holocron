

This document is structured using the **Diátaxis framework**:

1. **How-To Guide**: Step-by-step practical instructions to build a web-based IoT telemetry dashboard (`index.php`).
2. **Technical Reference & Component Explanation**: In-depth technical breakdowns of relational database operations, security protocols, and state management, paired with student-friendly plain English explanations.

# Prerequisites

Before beginning this tutorial, ensure you have the following components configured:

- An active **IoT module** (such as an ESP32 micro-controller) programmed and actively publishing telemetry readings and event logs to an **MQTT broker**.
- A running **MySQL/MariaDB database server** populated with `devices`, `sensor_readings`, and `event_logs` tables.
- A local or containerised web server running **PHP 8.x** with the `pdo_mysql` extension enabled.

# How-To Guide — Building the Dashboard (`index.php`)

Follow these sequential steps to assemble the complete PHP web interface.

## docker compose

Update `docker-compose.yml` to connect to the database with the correct values.

```yml
services:
  web:
    image: php:8.5-apache
    build: .
    container_name: scarif_dev
    ports:
      - "5080:80"
    volumes:
      - ./:/var/www/html
    environment:
      # Direct connections over the network to the central server
      # Instruct students to adjust this to the teacher's static classroom server IP
      - DB_HOST=10.177.206.126
      - DB_PORT=5306
      - DB_NAME=telemetry_db
      - DB_USER=student_user
      - DB_PASSWORD=Password123!
    restart: unless-stopped
```

## Correct values for Index.php

The initial code for `index.php` is as follows:

```php
<?php
// Extrapolate environment configurations assigned via Docker Compose
$host = getenv('DB_HOST') ?: 'localhost';
$port = getenv('DB_PORT') ?: '3306';
$db   = getenv('DB_NAME') ?: 'telemetry_db';
$user = getenv('DB_USER') ?: 'student_user';
$pass = getenv('DB_PASSWORD') ?: 'Password123!';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;port=$port;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

$connected = false;
$errorMsg = "";
$readings = [];

try {
    // Attempt PDO connection configuration
    $pdo = new PDO($dsn, $user, $pass, $options);
    $connected = true;

    // Fetch the 10 most recent telemetry records
    $stmt = $pdo->query("SELECT * FROM sensor_readings ORDER BY received_at DESC LIMIT 10");
    $readings = $stmt->fetchAll();

} catch (\PDOException $e) {
    $errorMsg = $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>IoT Live Telemetry Dashboard</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #f4f6f9; color: #333; margin: 40px; }
        .container { max-width: 900px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        h1 { color: #2c3e50; border-bottom: 2px solid #ecf0f1; padding-bottom: 15px; }
        .status { padding: 15px; border-radius: 6px; margin-bottom: 20px; font-weight: bold; }
        .status.success { background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .status.danger { background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background-color: #f8f9fa; color: #2c3e50; }
        tr:hover { background-color: #f1f1f1; }
    </style>
</head>
<body>
<div class="container">
    <h1>Live Telemetry Dashboard</h1>
    
    <!-- Connectivity Diagnostics Display -->
    <?php if ($connected): ?>
        <div class="status success">
            ✓ Successfully connected to Centralised Database on host: <?= htmlspecialchars($host) ?>
        </div>
    <?php else: ?>
        <div class="status danger">
            ✗ Database Connection Failed!<br>
            <small>Error: <?= htmlspecialchars($errorMsg) ?></small>
        </div>
    <?php endif; ?>

    <h2>Recent Sensor Readings</h2>
    <?php if (empty($readings)): ?>
        <p>No telemetry data found in the database. Ensure the ESP32 is actively publishing data.</p>
    <?php else: ?>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Device ID</th>
                    <th>Sequence</th>
                    <th>Temperature (°C)</th>
                    <th>Humidity (%)</th>
                    <th>Received At</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($readings as $row): ?>
                    <tr>
                        <td><?= htmlspecialchars($row['id']) ?></td>
                        <td><?= htmlspecialchars($row['device_id']) ?></td>
                        <td><?= htmlspecialchars($row['sequence']) ?></td>
                        <td><?= htmlspecialchars(number_format($row['temperature'], 1)) ?></td>
                        <td><?= htmlspecialchars(number_format($row['humidity'], 1)) ?></td>
                        <td><?= htmlspecialchars($row['received_at']) ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php endif; ?>
</div>
</body>
</html>
```

This page, currently aims to display the following data from the `sensor_readings` table in the database:
- `device_id`
- `sequence`
- `temperature
- `humidity`
- `received_at`

## The issue?

The sensor_readings table currently is:

`id`
`device_id`
`sensor_value`
`recorded_at`

The first stage of changes is modifying the table output to show the correct data fields:

```html
<table>
	<thead>
		<tr>
			<th>ID</th>
			<th>Device ID</th>
			<th>Sensor Value</th>
			<th>Recorded At</th>
		</tr>
	</thead>
	<tbody>
		<?php foreach ($readings as $row): ?>
			<tr>
				<td><?= htmlspecialchars($row['id']) ?></td>
				<td><?= htmlspecialchars($row['device_id']) ?></td>
				<td><?= htmlspecialchars($row['sensor_value']) ?></td>
				<td><?= htmlspecialchars($row['recorded_at']) ?></td>
			</tr>
		<?php endforeach; ?>
	</tbody>
</table>
```

## Update Styles

Update the CSS style tag to improve the readability of the site.

```css
<style>
        body { font-family: system-ui, -apple-system, sans-serif; margin: 2rem; background: #f4f4f9; color: #333; }
        .header-container { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
        h1, h2 { color: #333; margin: 0 0 0.5rem 0; }
        .alert { padding: 12px 16px; border-radius: 6px; margin-bottom: 1.5rem; font-weight: 500; }
        .alert-success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .alert-error { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        .card { background: #fff; padding: 1.25rem 1.5rem; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 2rem; }
        .form-row { display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; margin-top: 0.75rem; }
        .form-row input[type="text"], .form-row select { padding: 8px 12px; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; }
        .btn-submit { background: #0056b3; color: white; border: none; padding: 9px 18px; border-radius: 4px; font-weight: bold; cursor: pointer; }
        .btn-submit:hover { background: #004085; }
        .badge { display: inline-block; padding: 4px 10px; border-radius: 12px; font-weight: bold; font-size: 0.85rem; }
        .badge-on { background: #28a745; color: white; }
        .badge-off { background: #6c757d; color: white; }
        table { border-collapse: collapse; width: 100%; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 1rem; }
        th, td { padding: 12px 15px; border: 1px solid #e0e0e0; text-align: left; }
        th { background: #0056b3; color: white; }
        tr:nth-child(even) { background-color: #f9f9f9; }
        code { background: #eef2f7; padding: 3px 6px; border-radius: 4px; font-family: monospace; color: #0056b3; }
        .empty-row { text-align: center; color: #666; font-style: italic; }
        .pagination { display: flex; gap: 6px; align-items: center; justify-content: flex-end; margin-top: 0.75rem; }
        .pagination a, .pagination span { padding: 6px 12px; border: 1px solid #ccc; background: #fff; text-decoration: none; color: #333; border-radius: 4px; font-size: 0.9rem; }
        .pagination .active { background: #0056b3; color: white; font-weight: bold; }
        .pagination .disabled { color: #aaa; pointer-events: none; background: #f0f0f0; }
        .page-meta { font-size: 0.85rem; color: #666; margin-right: auto; }
    </style>
```

## Dynamic Device ID

One of the goals of the page is to display only a specific device's data (filtering the table by the device_id). In order to achieve this, the page will use a URL parameter. This is any variable defined after a `?` in the URL. For instance:

`http://10.177.206.126:5080/index.php?device_id=ESP32-Ryan`

Add the following code to load the `device_id` URL parameter:

![[telemetryDeviceIDURLParameter.png]]

```php
$selectedDevice = isset($_GET['device_id']) ? trim($_GET['device_id']) : 'ALL';
$itemsPerPage = 10;
```

Update the SQL to only show the relevant Device ID and limit by the itemsPerPage.

![[telemetryUpdatedSQL.png]]

## Show list of unique Devices

The page needs to allow the user to select the device that they wish to view. When the user selects the device, the page will reload with a specified device_id in the URL Parameter.

Start by collecting a list of unique `device_id`s from the table.

![[telemetryUniqueDeviceIDs.png]]

```php
$deviceStatesStmt = $pdo->query("SELECT DISTINCT device_id FROM sensor_readings");
$availableDevices = $deviceStatesStmt->fetchAll(PDO::FETCH_COLUMN);
```

To test to see if the process is working at this point, use `print_r()` to dump the data in the browser. 

![[telemetryPrintDevices.png]]

Save the page and launch/refresh the page in the browser.

The output of this command would be similar to this:

![[telemetryPrintOutput.png]]

The next step is to convert this data to a dropdown list.

## Updated SQL for specific Device IDs

To accommodate the URL parameter more robustly, the SQL to load the sensor data needs to be updated. Replace `$stmt = $pdo->query("SELECT * FROM sensor_readings WHERE device_id = $selectedDevice ORDER BY recorded_at DESC LIMIT $itemsPerPage");` with the following code.

![[telemetryUpdatedSQLParameter.png]]

```php
if ($selectedDevice !== 'ALL' && !empty($selectedDevice)) {
        // Single quotes allow standard device IDs (e.g. ESP32-01) to work normally,
        // while remaining vulnerable to SQLi string breaking payloads (e.g., ' OR '1'='1)
        $stmt = $pdo->query("SELECT * FROM sensor_readings WHERE device_id = '$selectedDevice' ORDER BY recorded_at DESC LIMIT $itemsPerPage");
    } else {
        // Handles the default 'ALL' case so the page loads normally on initial view
        $stmt = $pdo->query("SELECT * FROM sensor_readings ORDER BY recorded_at DESC LIMIT $itemsPerPage");
    }
```

## Filter by device

Create a drop down list to choose from the unique devices. When a device is chosen, it will reload the page.

![[telemetryFilterByDevice.png]]


```html
 <!-- Filter Control -->
    <div class="card filter-card">
        <label for="deviceFilter">Filter Telemetry by Device:</label>
        <form method="GET" action="index.php" id="filterForm">
            <select name="device_id" id="deviceFilter" onchange="document.getElementById('filterForm').submit();">
                <option value="ALL" <?= $selectedDevice === 'ALL' ? 'selected' : '' ?>>-- All Devices --</option>
                <?php foreach ($availableDevices as $dev): ?>
                    <option value="<?= htmlspecialchars($dev) ?>" <?= $selectedDevice === $dev ? 'selected' : '' ?>>
                        <?= htmlspecialchars($dev) ?>
                    </option>
                <?php endforeach; ?>
            </select>
        </form>
        <?php if ($selectedDevice !== 'ALL'): ?>
            <a href="index.php" class="reset-link">&times; Clear Filter</a>
        <?php endif; ?>
    </div>
```

## Update State

Add the code to create a drop down list of the unique device IDs and allow the user to change the state (`0` or `1`).

![[telemetryDropDownList.png]]

```html
<!-- Device State Control Form -->
<div class="card">
	<h2>Device State Controller</h2>
	<form method="POST" action="index.php">
		<input type="hidden" name="action" value="update_state">
		<div class="form-row">
			<div>
				<label for="target_device_id" style="font-weight: bold; display: block;">Device ID:</label>
				<input type="text" name="target_device_id" id="target_device_id" placeholder="e.g. ESP32-01" required list="device-list">
				<datalist id="device-list">
					<?php foreach ($availableDevices as $dev): ?>
						<option value="<?= htmlspecialchars($dev) ?>">
					<?php endforeach; ?>
				</datalist>
			</div>
			<div>
				<label for="state_value" style="font-weight: bold; display: block;">State Value:</label>
				<select name="state_value" id="state_value">
					<option value="1">1 (ON / Active)</option>
					<option value="0">0 (OFF / Inactive)</option>
				</select>
			</div>
			<div>
				<button type="submit" class="btn-submit">Update State</button>
			</div>
		</div>
	</form>
</div>
```

## Event Logs

Before querying the database, initialise a variable to hold the retrieved event log records.

### Step 1: Initialise the Logs Variable

#### Code Cahnges

Locate the variable initialisation section at the top of your file:

```php
// BEFORE
$connected = false;
$errorMsg = "";
$readings = [];
```

Update it to include `$logs`:

![[telemetryInitialiseLogs.png]]

```php
// AFTER
$connected = false;
$errorMsg = "";
$readings = [];
$logs = []; // Initialise array for event logs
```

#### Explanation

Initialising `$logs` as an empty array ensures that the variable exists even if the database query fails or returns no records, preventing PHP "Undefined variable" notices in the HTML view.

### Step 2: Query the `event_logs` Table with Device Filtering

Add database logic inside the `try` block to query the `event_logs` table (`id`, `device_id`, `event_message`, `logged_at`), mirroring the filtering pattern used for `sensor_readings`.

#### Code Changes

Locate the database query section inside the `try` block:

```php
// BEFORE
// Fetch the 10 most recent telemetry records
if ($selectedDevice !== 'ALL' && !empty($selectedDevice)) {
	$stmt = $pdo->query("SELECT * FROM sensor_readings WHERE device_id = '$selectedDevice' ORDER BY recorded_at DESC LIMIT $itemsPerPage");
} else {
	$stmt = $pdo->query("SELECT * FROM sensor_readings ORDER BY recorded_at DESC LIMIT $itemsPerPage");
}
$readings = $stmt->fetchAll();
```

Update it to query both tables:

![[telemetryRetrieveEventLogs.png]]

```php
// AFTER
// 1. Fetch the 10 most recent telemetry records
if ($selectedDevice !== 'ALL' && !empty($selectedDevice)) {
	$stmt = $pdo->query("SELECT * FROM sensor_readings WHERE device_id = '$selectedDevice' ORDER BY recorded_at DESC LIMIT $itemsPerPage");
} else {
	$stmt = $pdo->query("SELECT * FROM sensor_readings ORDER BY recorded_at DESC LIMIT $itemsPerPage");
}
$readings = $stmt->fetchAll();

// 2. Fetch the 10 most recent event logs using the same device filter
if ($selectedDevice !== 'ALL' && !empty($selectedDevice)) {
	$eventStmt = $pdo->query("SELECT * FROM event_logs WHERE device_id = '$selectedDevice' ORDER BY logged_at DESC LIMIT $itemsPerPage");
} else {
	$eventStmt = $pdo->query("SELECT * FROM event_logs ORDER BY logged_at DESC LIMIT $itemsPerPage");
}
$logs = $eventStmt->fetchAll();
```

#### Explanation

- This reads from `event_logs` ordering by `logged_at DESC` to ensure the newest entries appear first.
- It reuses `$selectedDevice` so selecting a device from the filter dropdown updates both the sensor readings table and the event log table simultaneously.

### Step 3: Populate Available Devices from All Tables

Currently, `$availableDevices` is only populated from `sensor_readings`. Devices that have logged events or state updates—but no sensor readings—would be missing from the filter dropdown.

#### Code Changes

Locate the dropdown population query:

```php
// BEFORE
$deviceStatesStmt = $pdo->query("SELECT DISTINCT device_id FROM sensor_readings");
$availableDevices = $deviceStatesStmt->fetchAll(PDO::FETCH_COLUMN);
```

Replace it with a `UNION` query:

![[telemetryUniqueDevicesUnion.png]]

```php
// AFTER
$deviceStatesStmt = $pdo->query("
    SELECT DISTINCT device_id FROM (
        SELECT device_id FROM sensor_readings
        UNION
        SELECT device_id FROM event_logs
        UNION
        SELECT device_id FROM devices
    ) AS combined_devices ORDER BY device_id ASC
");
$availableDevices = $deviceStatesStmt->fetchAll(PDO::FETCH_COLUMN);
```

#### Explanation

Using `UNION` combines device IDs across `sensor_readings`, `event_logs`, and `devices` tables while stripping duplicate values. This guarantees all registered or active devices appear in the selection controls.

### Step 4: Render the Event Logs Table in HTML

Add a section near the bottom of the page to display the `event_logs` results in a table structure.

#### Code Changes

Locate the end of the `Recent Sensor Readings` section:

```HTML
<!-- BEFORE -->
        </table>
    <?php endif; ?>
</div>
</body>
```

Add the **Recent Event Logs** section directly below the sensor table:

![[telemtryEventLogHTMLTable.png]]

```html
<!-- AFTER -->
        </table>
    <?php endif; ?>

    <!-- Recent Event Logs Table -->
    <h2>Recent Event Logs</h2>
    <?php if (empty($logs)): ?>
        <p>No event logs found for the selected criteria.</p>
    <?php else: ?>
        <table>
            <thead>
                <tr>
                    <th style="width: 10%;">ID</th>
                    <th style="width: 25%;">Device ID</th>
                    <th style="width: 40%;">Event Message</th>
                    <th style="width: 25%;">Logged At</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($logs as $log): ?>
                    <tr>
                        <td><?= htmlspecialchars($log['id']) ?></td>
                        <td><code><?= htmlspecialchars($log['device_id']) ?></code></td>
                        <td><?= htmlspecialchars($log['event_message']) ?></td>
                        <td><?= htmlspecialchars($log['logged_at']) ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php endif; ?>
</div>
</body>
```

#### Explanation

- Uses `htmlspecialchars()` on all output data (`id`, `device_id`, `event_message`, `logged_at`) to defend against Cross-Site Scripting (XSS) when displaying logs sent by external hardware/devices.
- Checks `if (empty($logs))` so a friendly notification is rendered if no entries match the filter criteria.

## Pagination

Pagination requires calculating three key values:

1. **Items Per Page (`$itemsPerPage`)**: The number of records displayed at a time.
2. **Current Page (`$page`)**: Which page the user is currently viewing (read from `$_GET['page']`).
3. **Database Offset (`$offset`)**: The starting row index for SQL, calculated as $(\text{Page} - 1) \times \text{ItemsPerPage}$.

### Step 1: Capture Parameters & Calculate Offset

At the top of your PHP file, update how `$itemsPerPage` and `$page` are captured. We will check `$_GET['limit']` to allow the user to change how many items to display per page.

Replace lines 21–22 in your starting code:



```PHP
// BEFORE
$selectedDevice = isset($_GET['device_id']) ? trim($_GET['device_id']) : 'ALL';
$itemsPerPage = 10;
```

With the following logic:


```PHP
// AFTER
$selectedDevice = isset($_GET['device_id']) ? trim($_GET['device_id']) : 'ALL';

// 1. Dynamic Items Per Page selection (Default: 10)
$itemsPerPage = isset($_GET['limit']) && is_numeric($_GET['limit']) ? (int)$_GET['limit'] : 10;
if ($itemsPerPage < 1) $itemsPerPage = 10; // Prevent invalid limits

// 2. Capture Current Page (Default: Page 1)
$sensorPage = isset($_GET['page']) && is_numeric($_GET['page']) ? (int)$_GET['page'] : 1;
if ($sensorPage < 1) $sensorPage = 1;

// 3. Calculate SQL OFFSET
$offset = ($sensorPage - 1) * $itemsPerPage;
```

### Step 2: Query Total Count & Apply `OFFSET` in SQL

To know how many page links to display, you must first execute a `COUNT(*)` query. Then, append `LIMIT $itemsPerPage OFFSET $offset` to your record fetch query.

Replace block **1. Fetch the 10 most recent telemetry records** (lines 53–60):


```PHP
// 1. Get Total Record Count for Pagination Calculations
if ($selectedDevice !== 'ALL' && !empty($selectedDevice)) {
    $countStmt = $pdo->query("SELECT COUNT(*) FROM sensor_readings WHERE device_id = '$selectedDevice'");
} else {
    $countStmt = $pdo->query("SELECT COUNT(*) FROM sensor_readings");
}
$totalReadings = (int)$countStmt->fetchColumn();

// Calculate Total Pages
$totalPages = ceil($totalReadings / $itemsPerPage) ?: 1;

// 2. Fetch Sensor Readings using LIMIT and OFFSET
if ($selectedDevice !== 'ALL' && !empty($selectedDevice)) {
    $stmt = $pdo->query("SELECT * FROM sensor_readings WHERE device_id = '$selectedDevice' ORDER BY recorded_at DESC LIMIT $itemsPerPage OFFSET $offset");
} else {
    $stmt = $pdo->query("SELECT * FROM sensor_readings ORDER BY recorded_at DESC LIMIT $itemsPerPage OFFSET $offset");
}
$readings = $stmt->fetchAll();
```

### Step 3: Add a Helper Function for Link Generation

Place a helper function right before your `?>` closing tag at the top of the file. This preserves existing GET parameters (like `device_id`) when clicking page links or changing the items per page dropdown.

```PHP
// Helper to build URL query strings while preserving existing parameters
function buildUrl($overrides = []) {
    $params = $_GET;
    foreach ($overrides as $key => $val) {
        $params[$key] = $val;
    }
    return 'index.php?' . http_build_query($params);
}
```

### Step 4: Add Controls & Pagination Links to the HTML

Add the HTML controls below the **Filter Control** card and right after the **Sensor Readings** `<table>`.

#### A. Add "Items Per Page" Selector (Above or Inside Filter Card)

Find your filter `<form>` and add a dropdown selector for `$itemsPerPage`:



```html
<!-- Items Per Page Selector -->
<div style="margin-top: 10px;">
    <label for="limitSelect"><strong>Show per page:</strong></label>
    <select id="limitSelect" onchange="location = this.value;">
        <?php foreach ([5, 10, 25, 50] as $limitOption): ?>
            <option value="<?= buildUrl(['limit' => $limitOption, 'page' => 1]) ?>" <?= $itemsPerPage === $limitOption ? 'selected' : '' ?>>
                <?= $limitOption ?> rows
            </option>
        <?php endforeach; ?>
    </select>
</div>
```

#### B. Add Pagination Controls Below the Table

Directly under `</table>` for **Recent Sensor Readings**[cite: 5], insert this pagination navigation bar:



```HTML
<!-- Pagination Navigation -->
<?php if ($totalPages > 1): ?>
<div class="pagination">
    <span class="page-meta">
        Showing <?= min($offset + 1, $totalReadings) ?>–<?= min($offset + $itemsPerPage, $totalReadings) ?> of <?= $totalReadings ?>
    </span>

    <!-- Previous Page Link -->
    <?php if ($sensorPage > 1): ?>
        <a href="<?= buildUrl(['page' => $sensorPage - 1]) ?>">&laquo; Prev</a>
    <?php else: ?>
        <span class="disabled">&laquo; Prev</span>
    <?php endif; ?>

    <!-- Page Number Links -->
    <?php for ($i = 1; $i <= $totalPages; $i++): ?>
        <?php if ($i == $sensorPage): ?>
            <span class="active"><?= $i ?></span>
        <?php else: ?>
            <a href="<?= buildUrl(['page' => $i]) ?>"><?= $i ?></a>
        <?php endif; ?>
    <?php endfor; ?>

    <!-- Next Page Link -->
    <?php if ($sensorPage < $totalPages): ?>
        <a href="<?= buildUrl(['page' => $sensorPage + 1]) ?>">Next &raquo;</a>
    <?php else: ?>
        <span class="disabled">Next &raquo;</span>
    <?php endif; ?>
</div>
<?php endif; ?>
```

## Device State

To integrate the `devices` table into your dashboard, we need to:

1. **Query `devices` in PHP**: Apply the active `$selectedDevice` filter to the `devices` table.
    
2. **Handle the 'ALL' Filter Condition**: Fetch all registered device states when no filter is selected, or target a specific `device_id` when filtered.
    
3. **Render UI Badges**: Map `state_value` (`1` or `0`) to visual status badges (`ON` / `OFF`).
    
4. **Position in HTML**: Place the new section above the Sensor Readings and Event Logs sections.
    

### Step 1: Add the PHP Logic to Fetch Device States

In the `try` block of your PHP script, initialize an empty array `$deviceStates = [];` alongside your other variables. Then, add the SQL query logic directly before your sensor readings query.

Add the following block inside your `try { ... }` block:



```PHP
    // ------------------------------------------------------------------
    // Fetch Filtered Device States (devices table)
    // ------------------------------------------------------------------
    if ($selectedDevice !== 'ALL' && !empty($selectedDevice)) {
        // Intentionally unescaped query to maintain SQLi lab behavior
        $deviceStatesStmt = $pdo->query("SELECT device_id, state_value, updated_at FROM devices WHERE device_id = '$selectedDevice' ORDER BY device_id ASC");
    } else {
        $deviceStatesStmt = $pdo->query("SELECT device_id, state_value, updated_at FROM devices ORDER BY device_id ASC");
    }
    $deviceStates = $deviceStatesStmt->fetchAll();
```

### Step 2: Render the Devices Table in the HTML

Locate the `filter-card` `<div>` in your HTML markup. Place the **Active Device States** table immediately below the filter card so that it displays **above** the Sensor Readings section.

Insert this block directly above `<h2>Recent Sensor Readings</h2>`:



```HTML
        <!-- Active Device States Table -->
        <div class="table-section" style="margin-top: 2rem;">
            <h2>Active Device States <?= $selectedDevice !== 'ALL' ? "for <code>" . htmlspecialchars($selectedDevice) . "</code>" : "" ?></h2>
            <table>
                <thead>
                    <tr>
                        <th style="width: 40%;">Device ID</th>
                        <th style="width: 30%;">Current State</th>
                        <th style="width: 30%;">Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if (empty($deviceStates)): ?>
                    <tr>
                        <td colspan="3" class="empty-row">No device state records found for the selected filter.</td>
                    </tr>
                    <?php else: ?>
                        <?php foreach ($deviceStates as $st): ?>
                        <tr>
                            <td><code><?= htmlspecialchars($st['device_id']) ?></code></td>
                            <td>
                                <?php if ($st['state_value'] == 1): ?>
                                    <span class="badge badge-on">1 (ON)</span>
                                <?php else: ?>
                                    <span class="badge badge-off">0 (OFF)</span>
                                <?php endif; ?>
                            </td>
                            <td><?= htmlspecialchars($st['updated_at']) ?></td>
                        </tr>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
```

### Step 3: Verify CSS Badges (Optional Check)

Your starting file already contains the CSS rules for `.badge`, `.badge-on`, and `.badge-off` inside `<style>`:



```CSS
.badge { display: inline-block; padding: 4px 10px; border-radius: 12px; font-weight: bold; font-size: 0.85rem; }
.badge-on { background: #28a745; color: white; }
.badge-off { background: #6c757d; color: white; }
```

These styles will automatically color code active states green for **`1 (ON)`** and gray for **`0 (OFF)`**.

### How it Works

1. **Uniform Filtering**: Selecting a device from the filter dropdown reloads the page with `?device_id=ESP32-01`.
    
2. **Synchronized Querying**: The SQL query filters the `devices` table using the same `$selectedDevice` variable as the sensor telemetry and event logs sections.
    
3. **Responsive Display**: Selecting `-- All Devices --` resets `$selectedDevice` to `'ALL'`, rendering all registered devices across all three tables seamlessly.


---
# Part 2: Technical Reference & Component Explanations

This section breaks down the foundational technical concepts used throughout this application. Each concept features a technical description followed by a plain English explanation designed for ACT BSSS Digital Technologies studies.

## 1. Database Connections via PDO & Container Environment Variables

### Technical Description

PHP Data Objects (PDO) provides an object-oriented database abstraction layer. The `getenv()` function reads system-level environment variables supplied by container orchestration files (such as `docker-compose.yml`). Fallback operators (`?:`) supply default strings if environment variables are unassigned.

### Plain English Explanation

Think of `getenv()` as asking the underlying operating system: _"What address and password should I use to connect to the database?"_

Instead of typing secret database passwords directly into your source code—which creates security risks if uploaded to GitHub—the code retrieves settings from the environment. PDO acts like a universal adapter, translating PHP instructions into commands MySQL understands.

## 2. SQL Prepared Statements & Injection Mitigation

### Technical Description

Prepared statements separate SQL code execution from dynamic user data. `PDO::prepare()` sends the SQL statement template to the database server to be pre-compiled. Parameters bound via `bindValue()` or `execute()` are treated strictly as literal data rather than executable SQL code, preventing SQL Injection (SQLi) attacks.

```
// Binding parameters explicitly ensures secure typing
$sensorStmt->bindValue(':limit', $itemsPerPage, PDO::PARAM_INT);
$sensorStmt->bindValue(':offset', $sensorOffset, PDO::PARAM_INT);
```

### Plain English Explanation

Imagine submitting a blank official form. The database inspects and accepts the structure of the form first. Then, you fill in the blank spaces with your specific variables (such as a device name or page number).

Because the database already compiled the form's structure, any malicious SQL commands typed into those blank spaces are treated purely as harmless text strings rather than commands.

## 3. Deep-Dive: The Atomic UPSERT Statement

```
INSERT INTO devices (device_id, state_value)
VALUES (:dev, :state)
ON DUPLICATE KEY UPDATE state_value = VALUES(state_value);
```

### Technical Breakdown

- `INSERT INTO devices`: Instructs MySQL to attempt writing a new row containing `device_id` and `state_value`.
    
- `ON DUPLICATE KEY UPDATE`: A conditional clause triggered when a `PRIMARY KEY` or `UNIQUE` constraint violation occurs (i.e. the `device_id` already exists).
    
- `state_value = VALUES(state_value)`: Updates the existing row's state column using the new parameter value passed in the execution payload.
    

### Plain English Explanation

Imagine adding a name to a signup sheet:

1. You look for a person's name on the sheet.
    
2. If their name is not there, you write it down on a new line (`INSERT`).
    
3. If their name is already on the sheet, you overwrite their status next to their existing entry (`UPDATE`).
    

An UPSERT performs both checks in a single database operation, saving your server from running separate query commands.

## 4. Deep-Dive: Multi-Table Consolidation (`UNION`)

```
SELECT DISTINCT device_id FROM (
    SELECT device_id FROM sensor_readings
    UNION
    SELECT device_id FROM event_logs
    UNION
    SELECT device_id FROM devices
) AS combined_devices ORDER BY device_id ASC;
```

### Technical Breakdown

- `UNION`: Merges the output rows of multiple independent `SELECT` queries into a single combined dataset.
    
- Subquery `(...) AS combined_devices`: Wraps the stacked query results into an intermediate virtual table.
    
- `SELECT DISTINCT ... ORDER BY device_id ASC`: Removes duplicate string rows from the virtual table and sorts the final list alphabetically.
    

### Plain English Explanation

Suppose three separate teachers keep attendance sheets for robotics, programming, and networking clubs. To build a master roster of all participating students:

1. You stack all three attendance sheets on top of each other (`UNION`).
    
2. You cross off duplicate names (`DISTINCT`).
    
3. You sort the unique names from A to Z (`ORDER BY`).
    

This guarantees your HTML dropdown displays every micro-controller active in the database.

## 5. Deep-Dive: Pagination with `LIMIT` and `OFFSET`

```
SELECT * FROM sensor_readings 
ORDER BY recorded_at DESC 
LIMIT :limit OFFSET :offset;
```

### Technical Breakdown

- `ORDER BY recorded_at DESC`: Sorts telemetry data so the newest entries appear first.
    
- `LIMIT :limit`: Defines the maximum number of rows returned per database query (e.g. 10 rows).
    
- `OFFSET :offset`: Specifies the starting row index MySQL skips before collecting matching records.
    

### Plain English Explanation

Think of reading a 50-page notebook where each page holds 10 lines of notes:

- **Page 1**: Retrieve 10 lines starting from index 0 (`LIMIT 10 OFFSET 0`).
    
- **Page 2**: Retrieve 10 lines skipping the first 10 lines (`LIMIT 10 OFFSET 10`).
    
- **Page 3**: Retrieve 10 lines skipping the first 20 lines (`LIMIT 10 OFFSET 20`).
    

## 6. Sanitisation & Cross-Site Scripting (XSS) Prevention

### Technical Description

The `htmlspecialchars()` function converts reserved HTML characters (`<`, `>`, `&`, `"`) into safely displayable HTML entity codes (such as `&lt;` and `&gt;`).

### Plain English Explanation

If a hacker sends telemetry data named `<script>alert('Hacked!');</script>`, displaying that string directly in a browser could cause the browser to execute the code.

Passing text through `htmlspecialchars()` converts the `<` and `>` symbols into plain text markers, ensuring the browser displays the harmless code text on screen instead of running it.

## 7. Query Parameter State Preservation (`buildUrl()`)

### Technical Description

The `buildUrl()` function clones the global `$_GET` array and merges any key updates passed into the function array. It returns an updated query string using `http_build_query()`.

```
function buildUrl($overrides = []) {
    $params = $_GET; // Duplicate current query string parameters
    foreach ($overrides as $key => $val) {
        $params[$key] = $val; // Override targeted parameter key
    }
    return 'index.php?' . http_build_query($params);
}
```

### Plain English Explanation

When browsing a web page with multiple controls (such as a device filter drop-down and pagination links), clicking to page 2 of a table can accidentally clear the currently filtered device name.

`buildUrl()` keeps track of all your active settings (like your device filter) and updates only the page number link you clicked, preventing your filter settings from disappearing.