There are 5 dummy accounts on the server.

Find their passwords. How? 
- Guess? 
- Hack?
- Divine inspiration?

| username            | password |
| ------------------- | -------- |
| admin@school.com    |          |
| teacher@school.com  |          |
| student1@school.com |          |
| student2@school.com |          |
| guest@school.com    |          |

The passwords have been encrypted in the standard PHP `bcrypt` algorithm

One of the passwords has the hash (encrypted text) as `$2y$10$4y9pQ803aEFA2s2Q.wJ2ye9T7mE5W9T5W3n4Y9k.wJ2ye9T7mE5W9`



# Login page

Create a new file in your project called `login.php`. Enter the following code

```php
<?php
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

// Fallback logic for PHP 8.4+ vs PHP < 8.4 Multi-Statement attributes
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
                                                <input type="password" id="password" name="password" class="form-control form-control-lg" />
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
                                            $v_input_user = $_POST['username'];
                                            $v_input_pass = $_POST['password'];

                                            // INSECURE: Direct input concatenation allowing SQL Injection
                                            $query = "SELECT user_id, username, password_hash, first_name, access_level FROM users WHERE username = '$v_input_user'";

                                            // Visible Query Debug Console for classroom viewing
                                            echo '<div class="alert alert-warning small font-monospace">
                                                <strong>Executed Query:</strong><br>' . htmlspecialchars($query) . '
                                              </div>';

                                            try {
                                                $result = $db->query($query);
                                                $user = $result ? $result->fetch() : false;

                                                // INSECURE PASSTHROUGH: Skips password verification if any record matches
                                                if ($user) {
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
                                                        <div>Invalid username or password.</div>
                                                      </div>';
                                                }
                                            } catch (PDOException $e) {
                                                // Displays raw SQL syntax error when students break the query
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

# Brute Force


Use a Command Line tool called Hydra. You may need to install it.

Save the passwords below into a file called `rockyou.txt` in your respository.

Rockyou.txt:
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

Then use `hydra` to attempt to brute force the password. The command will be something like:

```bash
hydra -l admin@school.com -P /path/to/rockyou.txt 127.0.0.1 http-post-form "/login.php:username=^USER^&password=^PASS^&login=Submit:S=Welcome back"
```

You will need to change `/path/to` to the directory that you saved the file to.
The IP address needs to be corrected.

# Register Page

Create a new file called `register.php` and enter the following code:

```php
<?php
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