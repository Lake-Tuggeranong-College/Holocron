To load the patient data, two PHP pages are required:
1. A list of patients (`patient_list.php`), and
2. Patient data (`patient_data.php`)

When the user clicks on a patient from the list of patients, it will load the patient data page *passing* the userID as a URL parameter.

The url will be structured as : `patient_data.php?userId=10`


# Patient List

```php
<?php
require_once 'template.php'; // Your PDO connection setup

// Fetch all users who have patient data
$stmt = $pdo->query("
    SELECT u.id, u.name, u.email_address
    FROM users u
    INNER JOIN patient_data pd ON u.id = pd.userId
    ORDER BY u.name ASC
");
$patients = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Patient List</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="v class="container mt-5">
    <h2 class="mb-4">Patient List</h2>
    <ul class="list-group">
        <?php foreach ($patients as $patient): ?>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <strong><?= htmlspecialchars($patient['name']) ?></strong><br>
                    <small><?= htmlspecialchars($patient['email_address']) ?></small>
                </div>
                <a href="patient_data.php?userId=<?=$patient['id'] ?>" class="btn btn-sm btn-primary">
                    View Details
                </a>
            </li>
        <?php endforeach; ?>
    </ul>
</div>
</body>
</html>

```


# Patient Data


```php
<?php
require_once 'template.php'; // Your PDO connection setup

// Get userId from URL
$userId = isset($_GET['userId']) ? intval($_GET['userId']) : 0;

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $userId > 0) {
    $medicate_number = $_POST['medicate_number'];
    $medical_data = [
        'current_medication' => $_POST['current_medication'],
        'conditions' => $_POST['conditions'],
        'history' => $_POST['history'],
        'family_history' => $_POST['family_history'],
        'GP' => $_POST['GP'],
        'blood_type' => $_POST['blood_type']
    ];

    // Update patient_data
    $stmt = $pdo->prepare("UPDATE patient_data SET medicate_number = ? WHERE userId = ?");
    $stmt->execute([$medicate_number, $userId]);

    // Update medical_information
    $stmt = $pdo->prepare("
        UPDATE medical_information
        SET current_medication = ?, conditions = ?, history = ?, family_history = ?, GP = ?, blood_type = ?
        WHERE userId = ?
    ");
    $stmt->execute([
        $medical_data['current_medication'],
        $medical_data['conditions'],
        $medical_data['history'],
        $medical_data['family_history'],
        $medical_data['GP'],
        $medical_data['blood_type'],
        $userId
    ]);
}

// Fetch data for display
$medicalInfo = $pdo->prepare("SELECT * FROM medical_information WHERE userId = ?");
$medicalInfo->execute([$userId]);
$medical = $medicalInfo->fetch();

$patientInfo = $pdo->prepare("SELECT * FROM patient_data WHERE userId = ?");
$patientInfo->execute([$userId]);
$patient = $patientInfo->fetch();

$userInfo = $pdo->prepare("SELECT name, email_address FROM users WHERE id = ?");
$userInfo->execute([$userId]);
$user = $userInfo->fetch();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Edit Patient Info</title>

</head>
<body>
<div class="container mt-5">
    <h2 class="mb-4">Edit Patient & Medical Information</h2>

    <?php if ($user): ?>
        <div class="mb-4">
            <h5>Patient: <?= htmlspecialchars($user['name']) ?></h5>
            <p>Email: <?= htmlspecialchars($user['email_address']) ?></p>
        </div>
    <?php endif; ?>

    <form method="POST" class="card p-4 shadow-sm">
        <div class="mb-3">
            <label class="form-label">Medicate Number</label>
            <input type="text" name="medicate_number" class="form-control" value="<?= htmlspecialchars($patient['medicate_number'] ?? '') ?>">
        </div>

        <div class="mb-3">
            <label class="form-label">Current Medication</label>
            <input type="text" name="current_medication" class="form-control" value="<?= htmlspecialchars($medical['current_medication'] ?? '') ?>">
        </div>

        <div class="mb-3">
            <label class="form-label">Conditions</label>
            <input type="text" name="conditions" class="form-control" value="<?= htmlspecialchars($medical['conditions'] ?? '') ?>">
        </div>

        <div class="mb-3">
            <label class="form-label">History</label>
            <input type="text" name="history" class="form-control" value="<?= htmlspecialchars($medical['history'] ?? '') ?>">
        </div>

        <div class="mb-3">
            <label class="form-label">Family History</label>
            <input type="text" name="family_history" class="form-control" value="<?= htmlspecialchars($medical['family_history'] ?? '') ?>">
        </div>

        <div class="mb-3">
            <label class="form-label">GP</label>
            <input type="text" name="GP" class="form-control" value="<?= htmlspecialchars($medical['GP'] ?? '') ?>">
        </div>

        <div class="mb-3">
            <label class="form-label">Blood Type</label>
            <input type="text" name="blood_type" class="form-control" value="<?= htmlspecialchars($medical['blood_type'] ?? '') ?>">
        </div>

        <button type="submit" class="btn btn-primary">Update Information</button>
    </form>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstraps/bootstrap.bundle.min.js</script>
</body>
</html>

```