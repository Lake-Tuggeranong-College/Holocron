
# auth.php

```php
<?php
// src/auth.php - Session Management & Role-Based Access Control (RBAC)

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

/**
 * Enforces access control based on user authentication status and allowed roles.
 *
 * @param array $allowedRoles List of roles permitted to view the page (e.g., ['admin', 'staff'])
 * @return void
 */
function authorise(array $allowedRoles = []): void
{
    // // 1. Check if user is logged in
    // if (!isset($_SESSION['user_id'])) {
    //     header('Location: login.php?error=unauthenticated');
    //     exit();
    // }

    // 2. Fetch current user role from session (default to 'guest' if not set)
    $userRole = $_SESSION['user_role'] ?? 'unauth';

    // 3. If allowedRoles is specified, verify user has access
    if (!empty($allowedRoles) && !in_array($userRole, $allowedRoles, true)) {
        renderUnauthorisedPage($userRole);
        exit();
    }
}

/**
 * Helper function to output an HTTP 403 response and display an unauthorised error page.
 *
 * @param string $userRole The role of the currently logged-in user
 * @return void
 */
function renderUnauthorisedPage(string $userRole): void
{
    http_response_code(403);
?>
    <!DOCTYPE html>
    <html lang="en-AU">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>403 Access Forbidden</title>
        <style>
            body {
                font-family: system-ui, -apple-system, sans-serif;
                background: #f4f6f9;
                color: #2c3e50;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                margin: 0;
            }

            .error-card {
                background: #ffffff;
                padding: 2.5rem;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                max-width: 500px;
                width: 90%;
                text-align: center;
                border-top: 6px solid #dc3545;
            }

            h1 {
                color: #dc3545;
                margin-top: 0;
                font-size: 2rem;
            }

            p {
                font-size: 1rem;
                color: #555;
                line-height: 1.5;
            }

            .role-badge {
                display: inline-block;
                background: #eef2f7;
                color: #0056b3;
                padding: 4px 10px;
                border-radius: 4px;
                font-family: monospace;
                font-weight: bold;
            }

            .btn {
                display: inline-block;
                margin-top: 1.5rem;
                background: #0056b3;
                color: #fff;
                text-decoration: none;
                padding: 10px 20px;
                border-radius: 5px;
                font-weight: 600;
            }

            .btn:hover {
                background: #004085;
            }
        </style>
    </head>

    <body>
        <div class="error-card">
            <h1>403 - Access Forbidden</h1>
            <p>You do not have permission to access this page.</p>
            <p>Your current role is <span class="role-badge"><?= htmlspecialchars($userRole) ?></span>.</p>
            <a href="index.php" class="btn">&larr; Return to Central Hub</a>
        </div>
    </body>

    </html>
<?php
}

```


# data.php

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
// Check if the modern Pdo\Mysql class exists (PHP 8.4+), otherwise use legacy constant
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,

    // Modern PHP syntax for enabling multi-statements
    \Pdo\Mysql::ATTR_MULTI_STATEMENTS => true,
];

$connected = false;
$errorMsg = "";
$readings = [];
$logs = [];

$selectedDevice = isset($_GET['device_id']) ? trim($_GET['device_id']) : 'ALL';
$itemsPerPage = 10;


try {
    // Attempt PDO connection configuration
    $pdo = new PDO($dsn, $user, $pass, $options);
    $connected = true;
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


    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'update_state') {
        $inputDeviceId = isset($_POST['target_device_id']) ? trim($_POST['target_device_id']) : '';
        $inputState    = isset($_POST['state_value']) ? trim($_POST['state_value']) : '';

        if (empty($inputDeviceId)) {
            $flashMessage = 'Device ID cannot be empty.';
            $flashType = 'error';
        } elseif ($inputState !== '0' && $inputState !== '1') {
            $flashMessage = 'Invalid state value. Must be 0 or 1.';
            $flashType = 'error';
        } else {
            $updateStmt = $pdo->prepare("
                INSERT INTO devices (device_id, state_value)
                VALUES (:dev, :state)
                ON DUPLICATE KEY UPDATE state_value = VALUES(state_value)
            ");
            $updateStmt->execute([
                ':dev'   => $inputDeviceId,
                ':state' => (int)$inputState
            ]);
            $flashMessage = "Successfully updated state for <code>" . htmlspecialchars($inputDeviceId) . "</code> to <strong>" . $inputState . "</strong>.";
            $flashType = 'success';
        }
    }

    // 1. Fetch the 10 most recent telemetry records
    if ($selectedDevice !== 'ALL' && !empty($selectedDevice)) {
        $stmt = $pdo->query("SELECT * FROM sensor_readings WHERE device_id = '$selectedDevice' ORDER BY recorded_at DESC LIMIT $itemsPerPage");
    } else {
        $stmt = $pdo->query("SELECT * FROM sensor_readings ORDER BY recorded_at DESC LIMIT $itemsPerPage");
    }
    $readings = $stmt->fetchAll();
    while ($stmt->nextRowset()) {
        // Clears secondary result sets (like the status from INSERT/DELETE)
    }

    // 2. Fetch the 10 most recent event logs using the same device filter
    if ($selectedDevice !== 'ALL' && !empty($selectedDevice)) {
        $eventStmt = $pdo->query("SELECT * FROM event_logs WHERE device_id = '$selectedDevice' ORDER BY logged_at DESC LIMIT $itemsPerPage");
    } else {
        $eventStmt = $pdo->query("SELECT * FROM event_logs ORDER BY logged_at DESC LIMIT $itemsPerPage");
    }
    $logs = $eventStmt->fetchAll();
} catch (\PDOException $e) {
    $errorMsg = $e->getMessage();
    print_r($errorMsg);
}


// print_r($availableDevices);

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>IoT Live Telemetry Dashboard</title>
    <style>
        body {
            font-family: system-ui, -apple-system, sans-serif;
            margin: 2rem;
            background: #f4f4f9;
            color: #333;
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        h1,
        h2 {
            color: #333;
            margin: 0 0 0.5rem 0;
        }

        .alert {
            padding: 12px 16px;
            border-radius: 6px;
            margin-bottom: 1.5rem;
            font-weight: 500;
        }

        .alert-success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        .alert-error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }

        .card {
            background: #fff;
            padding: 1.25rem 1.5rem;
            border-radius: 6px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
        }

        .form-row {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            align-items: center;
            margin-top: 0.75rem;
        }

        .form-row input[type="text"],
        .form-row select {
            padding: 8px 12px;
            border-radius: 4px;
            border: 1px solid #ccc;
            font-size: 1rem;
        }

        .btn-submit {
            background: #0056b3;
            color: white;
            border: none;
            padding: 9px 18px;
            border-radius: 4px;
            font-weight: bold;
            cursor: pointer;
        }

        .btn-submit:hover {
            background: #004085;
        }

        .badge {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 12px;
            font-weight: bold;
            font-size: 0.85rem;
        }

        .badge-on {
            background: #28a745;
            color: white;
        }

        .badge-off {
            background: #6c757d;
            color: white;
        }

        table {
            border-collapse: collapse;
            width: 100%;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            margin-bottom: 1rem;
        }

        th,
        td {
            padding: 12px 15px;
            border: 1px solid #e0e0e0;
            text-align: left;
        }

        th {
            background: #0056b3;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        code {
            background: #eef2f7;
            padding: 3px 6px;
            border-radius: 4px;
            font-family: monospace;
            color: #0056b3;
        }

        .empty-row {
            text-align: center;
            color: #666;
            font-style: italic;
        }

        .pagination {
            display: flex;
            gap: 6px;
            align-items: center;
            justify-content: flex-end;
            margin-top: 0.75rem;
        }

        .pagination a,
        .pagination span {
            padding: 6px 12px;
            border: 1px solid #ccc;
            background: #fff;
            text-decoration: none;
            color: #333;
            border-radius: 4px;
            font-size: 0.9rem;
        }

        .pagination .active {
            background: #0056b3;
            color: white;
            font-weight: bold;
        }

        .pagination .disabled {
            color: #aaa;
            pointer-events: none;
            background: #f0f0f0;
        }

        .page-meta {
            font-size: 0.85rem;
            color: #666;
            margin-right: auto;
        }
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

        <!-- Device State Control Form -->
        <div class="card">
            <h2>Device State Controller</h2>
            <form method="POST" action="data.php">
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

        <!-- Filter Control -->
        <div class="card filter-card">
            <label for="deviceFilter">Filter Telemetry by Device:</label>
            <form method="GET" action="data.php" id="filterForm">
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
                <a href="data.php" class="reset-link">&times; Clear Filter</a>
            <?php endif; ?>
        </div>


        <h2>Recent Sensor Readings</h2>
        <?php if (empty($readings)): ?>
            <p>No telemetry data found in the database. Ensure the ESP32 is actively publishing data.</p>
        <?php else: ?>
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

</html>
```

# docker-compose.yml

```
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
      - DB_HOST=10.177.203.103
      - DB_PORT=5306
      - DB_NAME=telemetry_db
      - DB_USER=student_user
      - DB_PASSWORD=Password123!
    restart: unless-stopped
```


# Dockerfile

```
FROM php:8.5-apache

# Install and configure missing system database dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && docker-php-ext-install pdo pdo_mysql \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Enforce system module configurations
RUN a2enmod rewrite

# Setup appropriate document permissions
WORKDIR /var/www/html
```

# errorlog.php

```php
<?php
require_once 'auth.php';

// Enforce admin-only access
authorise(['admin']);
?>


<?php
// src/errorlog.php - Displays all records from the error_log table
$host = getenv('DB_HOST') ?: '10.0.0.100';
$port = getenv('DB_PORT') ?: '3306';
$db   = getenv('DB_NAME') ?: 'iot_telemetry';
$user = getenv('DB_USER') ?: 'iot_user';
$pass = getenv('DB_PASSWORD') ?: 'iot_password';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;port=$port;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

// Pagination Settings
$itemsPerPage = 15;
$currentPage  = isset($_GET['page']) && is_numeric($_GET['page']) ? (int)$_GET['page'] : 1;
if ($currentPage < 1) $currentPage = 1;
$offset = ($currentPage - 1) * $itemsPerPage;

$flashMessage = '';
$flashType = 'success';

try {
    $pdo = new PDO($dsn, $user, $pass, $options);

    // Optional: Action to clear all error logs from error_log
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'clear_logs') {
        $pdo->exec("TRUNCATE TABLE error_log");
        $flashMessage = "All records in error_log have been cleared successfully.";
        $flashType = "success";
        $currentPage = 1;
        $offset = 0;
    }

    // Get Total Error Count for Pagination from error_log
    $countStmt = $pdo->query("SELECT COUNT(*) FROM `error_log`");
    $totalErrors = (int)$countStmt->fetchColumn();

    // Fetch Paginated Records using explicit schema columns
    $stmt = $pdo->prepare("SELECT `id`, `topic`, `raw_payload`, `error_message`, `logged_at` FROM `error_log` ORDER BY `logged_at` DESC LIMIT :limit OFFSET :offset");
    $stmt->bindValue(':limit', $itemsPerPage, PDO::PARAM_INT);
    $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
    $stmt->execute();
    $errorLogs = $stmt->fetchAll();

    $totalPages = ceil($totalErrors / $itemsPerPage) ?: 1;
} catch (\PDOException $e) {
    die("Database Connection Error: " . htmlspecialchars($e->getMessage()));
}

// Helper function to keep pagination parameters intact
function buildPageUrl($page)
{
    $params = $_GET;
    $params['page'] = $page;
    return 'errorlog.php?' . http_build_query($params);
}
?>
<!DOCTYPE html>
<html lang="en-AU">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Error Logs - IoT Central</title>
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            margin: 0;
            padding: 2rem;
            background: #f4f6f9;
            color: #2c3e50;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
            gap: 1rem;
        }

        h1 {
            margin: 0;
            color: #8b0000;
            font-size: 1.8rem;
        }

        .nav-btn {
            display: inline-block;
            background: #0056b3;
            color: white;
            padding: 10px 16px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: bold;
            transition: background 0.2s ease;
        }

        .nav-btn:hover {
            background: #004085;
        }

        /* Flash Alerts */
        .alert {
            padding: 12px 16px;
            border-radius: 6px;
            margin-bottom: 1.5rem;
            font-weight: 500;
        }

        .alert-success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        /* Card Frame */
        .card {
            background: #ffffff;
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
            margin-bottom: 2rem;
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .card-header h2 {
            margin: 0;
            font-size: 1.25rem;
            color: #333;
        }

        /* Buttons */
        .btn-clear {
            background: #dc3545;
            color: white;
            border: none;
            padding: 8px 14px;
            border-radius: 4px;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.2s ease;
        }

        .btn-clear:hover {
            background: #bd2130;
        }

        /* Table Styling */
        table {
            border-collapse: collapse;
            width: 100%;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
            border-radius: 6px;
            overflow: hidden;
        }

        th,
        td {
            padding: 12px 15px;
            border: 1px solid #e0e0e0;
            text-align: left;
            vertical-align: top;
            word-break: break-word;
        }

        th {
            background: #8b0000;
            color: white;
            font-weight: 600;
        }

        tr:nth-child(even) {
            background-color: #fcfcfc;
        }

        .empty-row {
            text-align: center;
            color: #666;
            font-style: italic;
            padding: 24px;
        }

        code.topic-tag {
            background: #eef2f7;
            color: #0056b3;
            padding: 3px 6px;
            border-radius: 4px;
            font-family: monospace;
            font-size: 0.9em;
        }

        code.payload-tag {
            background: #f8f9fa;
            color: #333;
            padding: 3px 6px;
            border-radius: 4px;
            font-family: monospace;
            font-size: 0.85em;
            display: block;
            max-height: 100px;
            overflow-y: auto;
            white-space: pre-wrap;
        }

        .error-text {
            color: #721c24;
            font-weight: 500;
        }

        /* Pagination */
        .pagination {
            display: flex;
            gap: 6px;
            align-items: center;
            justify-content: flex-end;
            margin-top: 1rem;
        }

        .pagination a,
        .pagination span {
            padding: 6px 12px;
            border: 1px solid #ccc;
            background: #fff;
            text-decoration: none;
            color: #333;
            border-radius: 4px;
            font-size: 0.9rem;
        }

        .pagination a:hover {
            background: #eee;
        }

        .pagination .active {
            background: #8b0000;
            color: white;
            border-color: #8b0000;
            font-weight: bold;
        }

        .pagination .disabled {
            color: #aaa;
            pointer-events: none;
            background: #f0f0f0;
        }

        .page-meta {
            font-size: 0.85rem;
            color: #666;
            margin-right: auto;
        }
    </style>
</head>

<body>

    <div class="container">
        <div class="header-container">
            <div>
                <h1>System Error Logs</h1>
                <p style="color: #666; margin: 0.25rem 0 0 0;">Audit trail from table <code>error_log</code></p>
            </div>
            <a href="index.php" class="nav-btn">&larr; Return to System Overview</a>
        </div>

        <?php if (!empty($flashMessage)): ?>
            <div class="alert alert-<?= $flashType ?>">
                <?= $flashMessage ?>
            </div>
        <?php endif; ?>

        <div class="card">
            <div class="card-header">
                <h2>Recorded Exceptions (Total: <?= $totalErrors ?>)</h2>
                <?php if ($totalErrors > 0): ?>
                    <form method="POST" action="errorlog.php" onsubmit="return confirm('Are you sure you want to permanently clear all error logs?');">
                        <input type="hidden" name="action" value="clear_logs">
                        <button type="submit" class="btn-clear">Clear All Logs</button>
                    </form>
                <?php endif; ?>
            </div>

            <table>
                <thead>
                    <tr>
                        <th style="width: 6%;">ID</th>
                        <th style="width: 22%;">MQTT Topic</th>
                        <th style="width: 28%;">Raw Payload</th>
                        <th style="width: 26%;">Error Message</th>
                        <th style="width: 18%;">Logged At</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if (empty($errorLogs)): ?>
                        <tr>
                            <td colspan="5" class="empty-row">No records found in error_log table.</td>
                        </tr>
                    <?php else: ?>
                        <?php foreach ($errorLogs as $log): ?>
                            <tr>
                                <td><?= htmlspecialchars($log['id']) ?></td>
                                <td><code class="topic-tag"><?= htmlspecialchars($log['topic'] ?? 'N/A') ?></code></td>
                                <td>
                                    <?php if (!empty($log['raw_payload'])): ?>
                                        <code class="payload-tag"><?= htmlspecialchars($log['raw_payload']) ?></code>
                                    <?php else: ?>
                                        <span style="color: #999; font-style: italic;">None</span>
                                    <?php endif; ?>
                                </td>
                                <td class="error-text"><?= htmlspecialchars($log['error_message'] ?? 'No message specified') ?></td>
                                <td><?= htmlspecialchars($log['logged_at']) ?></td>
                            </tr>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </tbody>
            </table>

            <!-- Pagination Bar -->
            <?php if ($totalPages > 1): ?>
                <div class="pagination">
                    <span class="page-meta">Showing <?= min($offset + 1, $totalErrors) ?>–<?= min($offset + $itemsPerPage, $totalErrors) ?> of <?= $totalErrors ?></span>

                    <?php if ($currentPage > 1): ?>
                        <a href="<?= buildPageUrl($currentPage - 1) ?>">&laquo; Prev</a>
                    <?php else: ?>
                        <span class="disabled">&laquo; Prev</span>
                    <?php endif; ?>

                    <?php for ($i = 1; $i <= $totalPages; $i++): ?>
                        <?php if ($i == $currentPage): ?>
                            <span class="active"><?= $i ?></span>
                        <?php elseif ($i == 1 || $i == $totalPages || ($i >= $currentPage - 2 && $i <= $currentPage + 2)): ?>
                            <a href="<?= buildPageUrl($i) ?>"><?= $i ?></a>
                        <?php elseif ($i == 2 || $i == $totalPages - 1): ?>
                            <span>...</span>
                        <?php endif; ?>
                    <?php endfor; ?>

                    <?php if ($currentPage < $totalPages): ?>
                        <a href="<?= buildPageUrl($currentPage + 1) ?>">Next &raquo;</a>
                    <?php else: ?>
                        <span class="disabled">Next &raquo;</span>
                    <?php endif; ?>
                </div>
            <?php endif; ?>
        </div>
    </div>

</body>

</html>
```

# index.php

```php
<?php
// src/index.php - System Landing Page & Navigation Hub
require_once 'auth.php';

authorise(['admin', 'guest', 'student', 'staff', 'unauth']);


session_start();



$isLoggedIn = isset($_SESSION['user_id']);
$firstName  = $isLoggedIn ? ($_SESSION['first_name'] ?? 'User') : '';
?>
<!DOCTYPE html>
<html lang="en-AU">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IoT Central System - Overview</title>
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            margin: 0;
            padding: 2rem;
            background: #f4f6f9;
            color: #2c3e50;
            line-height: 1.6;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
        }

        header {
            background: #ffffff;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
            margin-bottom: 2rem;
            border-left: 6px solid #0056b3;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .header-title h1 {
            margin: 0 0 0.5rem 0;
            color: #1a252f;
            font-size: 2rem;
        }

        .header-title .lead {
            font-size: 1.1rem;
            color: #555;
            margin: 0;
        }

        .user-greeting {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .welcome-text {
            font-weight: 600;
            color: #1a252f;
        }

        .auth-buttons {
            display: flex;
            gap: 0.75rem;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .card {
            background: #ffffff;
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .card h2 {
            margin: 0 0 0.75rem 0;
            font-size: 1.3rem;
            color: #0056b3;
        }

        .card p {
            margin: 0 0 1.25rem 0;
            color: #666;
            font-size: 0.95rem;
            flex-grow: 1;
        }

        .btn {
            display: inline-block;
            background: #0056b3;
            color: #ffffff;
            text-decoration: none;
            padding: 10px 18px;
            border-radius: 5px;
            font-weight: 600;
            text-align: center;
            transition: background 0.2s ease;
        }

        .btn:hover {
            background: #004085;
        }

        .btn-outline {
            background: transparent;
            color: #0056b3;
            border: 2px solid #0056b3;
        }

        .btn-outline:hover {
            background: #0056b3;
            color: #ffffff;
        }

        .btn-danger {
            background: #8b0000;
            color: #ffffff;
        }

        .btn-danger:hover {
            background: #a00000;
        }

        .btn-secondary {
            background: #6c757d;
            color: #ffffff;
        }

        .btn-secondary:hover {
            background: #5a6268;
        }

        .info-panel {
            background: #ffffff;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .info-panel h3 {
            margin-top: 0;
            color: #1a252f;
        }

        .info-panel ul {
            margin: 0;
            padding-left: 1.2rem;
            color: #555;
        }

        .info-panel li {
            margin-bottom: 0.5rem;
        }

        code {
            background: #eef2f7;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: monospace;
            color: #0056b3;
            font-size: 0.9em;
        }
    </style>
</head>

<body>

    <div class="container">
        <header>
            <div class="header-title">
                <h1>IoT Central System Hub</h1>
                <p class="lead">Central management and monitoring platform for student ESP32 microcontroller telemetry.</p>
            </div>

            <!-- Conditional Header Navigation -->
            <?php if ($isLoggedIn): ?>
                <div class="user-greeting">
                    <span class="welcome-text">Welcome, <?= htmlspecialchars($firstName) ?></span>
                    <a href="logout.php" class="btn btn-secondary">Log Out</a>
                </div>
            <?php else: ?>
                <div class="auth-buttons">
                    <a href="login.php" class="btn btn-outline">Log In</a>
                    <a href="register.php" class="btn">Register</a>
                </div>
            <?php endif; ?>
        </header>

        <div class="grid">
            <!-- Telemetry Data Link Card -->
            <div class="card">
                <div>
                    <h2>Telemetry & Device Controller</h2>
                    <p>View real-time sensor readings, event logs, device activity filters, and update active state values (0 or 1).</p>
                </div>
                <a href="data.php" class="btn">View Telemetry Data &rarr;</a>
            </div>

            <!-- User Account Card (Dynamic State) -->
            <div class="card">
                <div>
                    <h2>Account Access</h2>
                    <?php if ($isLoggedIn): ?>
                        <p>You are logged in as <strong><?= htmlspecialchars($firstName) ?></strong>. Manage your account settings or log out when finished.</p>
                    <?php else: ?>
                        <p>Log in to access administrative privileges or create a new user account to get started with device tracking.</p>
                    <?php endif; ?>
                </div>

                <?php if ($isLoggedIn): ?>
                    <a href="logout.php" class="btn btn-secondary">Log Out</a>
                <?php else: ?>
                    <div style="display: flex; gap: 0.5rem;">
                        <a href="login.php" class="btn btn-outline" style="flex: 1;">Log In</a>
                        <a href="register.php" class="btn" style="flex: 1;">Register</a>
                    </div>
                <?php endif; ?>
            </div>

            <!-- Error Logs Card -->
            <div class="card">
                <div>
                    <h2>System Error Logs</h2>
                    <p>Inspect captured system exceptions, database connection errors, and telemetry transport logs stored in <code>error_log</code>.</p>
                </div>
                <a href="errorlog.php" class="btn btn-danger">View Error Logs &rarr;</a>
            </div>
        </div>

        <!-- Infrastructure Architecture Summary -->
        <div class="info-panel">
            <h3>System Architecture Overview</h3>
            <ul>
                <li><strong>Scarif Development:</strong> Houses edge IoT hardware (ESP32) and the client Web Portal interface.</li>
                <li><strong>Scarif Production Server:</strong> Hosts the MQTT Broker, <code>bridge.py</code> sync daemon, and MySQL Database.</li>
            </ul>
        </div>
    </div>

</body>

</html>
```

# login.php

```php
<?php

require_once 'auth.php';

authorise(['admin', 'guest', 'student', 'staff', 'unauth']);

// Start output buffering and session management
ob_start();
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Environment & Database Configuration
$host    = getenv('DB_HOST')     ?: 'localhost';
$port    = getenv('DB_PORT')     ?: '3306';
$dbName  = getenv('DB_NAME')     ?: 'telemetry_db';
$user    = getenv('DB_USER')     ?: 'student_user';
$pass    = getenv('DB_PASSWORD') ?: 'Password123!';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;port=$port;dbname=$dbName;charset=$charset";

// Fallback for PHP 8.4+ vs legacy multi-statement constant
$multiStmtAttr = class_exists('\Pdo\Mysql')
    ? \Pdo\Mysql::ATTR_MULTI_STATEMENTS
    : PDO::MYSQL_ATTR_MULTI_STATEMENTS;

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => true, // Enabled so PDO handles string-concatenated SQL queries correctly
    $multiStmtAttr               => true,
];

try {
    $db = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    die("Database Connection Error: " . $e->getMessage());
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Login | Access Your Account</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #eee;
        }

        .card-login {
            border-radius: 25px;
        }

        .form-icon {
            color: #aaa;
            margin-right: 10px;
        }

        .vh-100 {
            min-height: 100vh;
        }
    </style>
</head>

<body>

    <section class="vh-100 py-5">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black card-login shadow-lg">
                        <div class="card-body p-md-5">
                            <div class="row justify-content-center">

                                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-2 order-lg-1">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                        class="img-fluid" alt="Login illustration">
                                </div>

                                <div class="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-2">
                                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                                    <form class="mx-1 mx-md-4" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-envelope fa-lg me-3 fa-fw form-icon"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label" for="username">Email Address</label>
                                                <input type="text" id="username" name="username" class="form-control form-control-lg" required />
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-lock fa-lg me-3 fa-fw form-icon"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label" for="password">Password</label>
                                                <input type="password" id="password" name="password" class="form-control form-control-lg" required />
                                            </div>
                                        </div>

                                        <div class="text-center text-lg-start mt-4 pt-2">
                                            <button type="submit" name="login" class="btn btn-primary btn-lg px-5 shadow w-100">Login</button>
                                            <p class="small fw-bold mt-3 pt-1 mb-0">Don't have an account?
                                                <a href="register.php" class="link-danger text-decoration-none">Register</a>
                                            </p>
                                        </div>

                                    </form>

                                    <div class="mt-4">
                                        <?php
                                        if (isset($_POST['login'])) {
                                            $v_input_user = trim($_POST['username']);
                                            $v_input_pass = $_POST['password'];

                                            // VULNERABLE QUERY: Concatenated string variable
                                            $query = "SELECT user_id, username, password_hash, first_name, access_level FROM users WHERE username = '$v_input_user'";

                                            // Classroom Debug Log
                                            echo '<div class="alert alert-warning small font-monospace">
                                                <strong>Executed Query:</strong><br>' . htmlspecialchars($query) . '
                                              </div>';

                                            try {
                                                $stmt = $db->query($query);
                                                $user = $stmt ? $stmt->fetch(PDO::FETCH_ASSOC) : false;

                                                // Authenticate valid credentials
                                                if ($user && isset($user['password_hash']) && password_verify($v_input_pass, $user['password_hash'])) {
                                                    $_SESSION['user_id']      = $user['user_id'];
                                                    $_SESSION['username']     = $user['username'];
                                                    $_SESSION['first_name']   = $user['first_name'];
                                                    $_SESSION['access_level'] = $user['access_level'];

                                                    echo '<div class="alert alert-success d-flex align-items-center">
                                                        <i class="fas fa-check-circle me-2"></i>
                                                        <div>Welcome back, ' . htmlspecialchars($user['first_name']) . '! You logged in successfully.</div>
                                                      </div>';
                                                } else {
                                                    echo '<div class="alert alert-danger d-flex align-items-center">
                                                        <i class="fas fa-exclamation-triangle me-2"></i>
                                                        <div>Incorrect Username or password</div>
                                                      </div>';
                                                }
                                            } catch (PDOException $e) {
                                                echo '<div class="alert alert-danger small font-monospace">
                                                    <strong>SQL Error:</strong> ' . htmlspecialchars($e->getMessage()) . '
                                                  </div>';
                                            }
                                        }
                                        ?>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</body>

</html>
<?php
ob_end_flush();
?>
```

# logout.php

```php
<?php
session_start();
session_unset();
session_destroy();
header("Location: login.php");
exit();

```

# register.php

```php
<?php

require_once 'auth.php';

authorise(['admin', 'guest', 'student', 'staff', 'unauth']);

// Start output buffering and session management
ob_start();
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Environment & Database Configuration
$host    = getenv('DB_HOST')     ?: 'localhost';
$port    = getenv('DB_PORT')     ?: '3306';
$dbName  = getenv('DB_NAME')     ?: 'telemetry_db';
$user    = getenv('DB_USER')     ?: 'student_user';
$pass    = getenv('DB_PASSWORD') ?: 'Password123!';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;port=$port;dbname=$dbName;charset=$charset";

$multiStmtAttr = class_exists('\Pdo\Mysql')
    ? \Pdo\Mysql::ATTR_MULTI_STATEMENTS
    : PDO::MYSQL_ATTR_MULTI_STATEMENTS;

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
    $multiStmtAttr               => true,
];

try {
    $db = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    die("Database Connection Error: " . $e->getMessage());
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Register | Create an Account</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #eee;
        }

        .card-register {
            border-radius: 25px;
        }

        .form-icon {
            color: #aaa;
            margin-right: 10px;
        }

        .vh-100 {
            min-height: 100vh;
        }
    </style>
</head>

<body>

    <section class="vh-100 py-5">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black card-register shadow-lg">
                        <div class="card-body p-md-5">
                            <div class="row justify-content-center">

                                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up</p>

                                    <form class="mx-1 mx-md-4" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-user fa-lg me-3 fa-fw form-icon"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label" for="first_name">First Name</label>
                                                <input type="text" id="first_name" name="first_name" class="form-control form-control-lg" required />
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-envelope fa-lg me-3 fa-fw form-icon"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label" for="username">Email Address</label>
                                                <input type="email" id="username" name="username" class="form-control form-control-lg" required />
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-lock fa-lg me-3 fa-fw form-icon"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <label class="form-label" for="password">Password</label>
                                                <input type="password" id="password" name="password" class="form-control form-control-lg" required />
                                            </div>
                                        </div>

                                        <div class="text-center text-lg-start mt-4 pt-2">
                                            <button type="submit" name="register" class="btn btn-primary btn-lg px-5 shadow w-100">Register</button>
                                            <p class="small fw-bold mt-3 pt-1 mb-0">Already have an account?
                                                <a href="login.php" class="link-danger text-decoration-none">Login</a>
                                            </p>
                                        </div>

                                    </form>

                                    <div class="mt-4">
                                        <?php
                                        if (isset($_POST['register'])) {
                                            $firstName = trim($_POST['first_name']);
                                            $username  = trim($_POST['username']);
                                            $password  = $_POST['password'];

                                            if (!empty($firstName) && !empty($username) && !empty($password)) {
                                                // Securely hash password using standard bcrypt
                                                $passwordHash = password_hash($password, PASSWORD_BCRYPT);

                                                try {
                                                    // Using prepared statements for insertion to ensure valid data entry
                                                    $stmt = $db->prepare("INSERT INTO users (username, password_hash, first_name, access_level) VALUES (:username, :password_hash, :first_name, 'student')");
                                                    $stmt->execute([
                                                        ':username'      => $username,
                                                        ':password_hash' => $passwordHash,
                                                        ':first_name'   => $firstName
                                                    ]);

                                                    echo '<div class="alert alert-success d-flex align-items-center">
                                                        <i class="fas fa-check-circle me-2"></i>
                                                        <div>Account created successfully! <a href="login.php" class="alert-link">Click here to login</a>.</div>
                                                      </div>';
                                                } catch (PDOException $e) {
                                                    // Handle unique key violations (e.g., email already taken)
                                                    if ($e->getCode() == 23000) {
                                                        echo '<div class="alert alert-danger d-flex align-items-center">
                                                            <i class="fas fa-exclamation-triangle me-2"></i>
                                                            <div>That email address is already registered.</div>
                                                          </div>';
                                                    } else {
                                                        echo '<div class="alert alert-danger small font-monospace">
                                                            <strong>Error:</strong> ' . htmlspecialchars($e->getMessage()) . '
                                                          </div>';
                                                    }
                                                }
                                            } else {
                                                echo '<div class="alert alert-warning">Please fill in all required fields.</div>';
                                            }
                                        }
                                        ?>
                                    </div>

                                </div>

                                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                        class="img-fluid" alt="Registration illustration">
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</body>

</html>
<?php
ob_end_flush();
?>
```

# rockyou.txt

```text
123456
12345
123456789
password
iloveyou
princess
1234567
rockyou
12345678
abc123
nicole
Password123!
daniel
babygirl
monkey
lovely
jessica
654321
michael
ashley
qwerty
111111
iloveu
000000
michelle
tigger
sunshine
chocolate
password1
soccer
anthony
friends
butterfly
purple
angel
jordan
liverpool
justin
loveme
fuckyou
123123
football
secret
andrea
carlos
jennifer
joshua
bubbles
1234567890
superman
hannah
amanda
loveyou
pretty
basketball
andrew
angels
tweety
flower
playboy
hello
elizabeth
hottie
tinkerbell
charlie
samantha
barbie
chelsea
lovers
teamo
jasmine
brandon
666666
shadow
melissa
eminem
matthew
robert
danielle
forever
family
jonathan
987654321
computer
whatever
dragon
vanessa
cookie
naruto
summer
sweety
spongebob
joseph
junior
softball
taylor
yellow
daniela
lauren
mickey
princesa
alexandra
alexis
jesus
estrella
miguel
william
thomas
beautiful
mylove
angela
poohbear
patrick
iloveme
sakura
adrian
alexander
destiny
christian
121212
Password123!
america
dancer
monica
richard
112233
princess1
555555
diamond
carolina
steven
rangers
louise
orange
789456
```