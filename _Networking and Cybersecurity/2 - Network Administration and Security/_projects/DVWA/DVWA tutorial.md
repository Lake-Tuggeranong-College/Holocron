# Containerised Web Application & Security Testing (DVWA)

---

## 1. LAB OBJECTIVES

In this lab, you will build an isolated Damn Vulnerable Web Application (DVWA) development container using Visual Studio Code and Docker Desktop. You will configure container port forwarding, publish your repository to GitHub, and systematically test six web security vulnerabilities.

---

## 2. PRE-LAB WORKFLOW: GITHUB REPOSITORY CREATION & CLONING

Before creating your container configuration, set up a remote Git repository to store your code.

### Step 1: Create a Blank GitHub Repository

1. Navigate to [GitHub](https://github.com) and log in to your account.
2. Click the **`+`** icon in the top-right corner and select **New repository**.
3. Name the repository: `dvwa-lab-environment`.
4. Set visibility to **Private** (or Public, as instructed by your lecturer).
5. Check **Add a README file**.
6. Under **Choose a license**, select **Creative Commons** (CC BY 4.0).
7. Click **Create repository**.
### Step 2: Cloning via VS Code (Method B)

1. Launch **VS Code**.
2. Open the Command Palette (`Cmd+Shift+P` on macOS / `Ctrl+Shift+P` on Windows).
3. Type `Git: Clone` and select **Enter**.
4. Choose **Clone from GitHub** and select your `dvwa-lab-environment` repository.
5. Select a local folder destination and click **Open** when prompted.

---

## 3. CREATING DEV CONTAINER CONFIGURATION FILES

Create a folder named `.devcontainer` at the root of your repository directory containing the three files below.

### File 1: `.devcontainer/devcontainer.json`

```json
{
  "name": "DVWA Lab Environment",
  "dockerComposeFile": "docker-compose.yml",
  "service": "dvwa",
  "workspaceFolder": "/var/www/html",
  "forwardPorts": [9080],
  "customizations": {
    "vscode": {
      "extensions": [
        "ms-azuretools.vscode-docker"
      ]
    }
  }
}
```

### File 2: `.devcontainer/Dockerfile`

```dockerfile
FROM kaakaww/dvwa-docker:latest

# Expose HTTP port inside container
EXPOSE 80
```

### File 3: `.devcontainer/docker-compose.yml`

```yaml
services:
  dvwa:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "9080:80"
    restart: always
```

---

## 4. COMMITTING & PUSHING YOUR CONFIGURATION TO GITHUB

Save your configuration and push your changes to GitHub before building the container.

1. Open the **Source Control** panel (`Ctrl+Shift+G` / `Cmd+Shift+G`).
2. Type a commit message in the text box: `Add Dev Container configuration`.
3. Click **Commit** (`Cmd+Enter` / `Ctrl+Enter`).
4. Click **Sync Changes** to push to GitHub.

---

## 5. LAUNCHING THE ENVIRONMENT

1. Open the VS Code Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`).
2. Select **Dev Containers: Reopen in Container**.
3. VS Code will build the image and start the service.
4. Open your web browser and navigate to `http://localhost:9080`.
5. Click **Create / Reset Database** at the bottom of the page.
6. Log in with the default credentials:
   * **Username:** `admin`
   * **Password:** `password`
7. In the left navigation bar, select **DVWA Security** and set the security level to **Low**. Click **Submit**.

---

## 6. VULNERABILITY EXERCISES & ANALYSIS

---

### Module 1: Brute Force

* **Task:** Obtain the `admin` account password on the **Brute Force** tab.
* **Test Input / Action:** Submit various username/password combinations manually, or inspect the URL parameter bar when submitting `admin` / `password`.
* **Payload / URL String:**
  ```text
  http://localhost:9080/vulnerabilities/brute/?username=admin&password=password&Login=Login#
  ```
* **External Learning Resource:**
  * [OWASP Automated Attacks / Brute Force Guide](https://owasp.org/www-community/attacks/Brute_force_attack)
* **Further Work & Extension:**
  * Inspect the HTTP request headers using your browser's Developer Tools (F12). Why is transmitting credentials over HTTP GET insecure compared to HTTP POST?
  * How would introducing an IP-based rate limiter (e.g., max 5 attempts per minute) alter an attacker's brute-force calculation?

---

### Module 2: Command Injection

* **Task:** Execute system-level shell directives via the Ping input form.
* **Test Input / Payload:**
  ```bash
  127.0.0.1; whoami
  ```
* **Observation:** Notice how the application returns both the ping output and the system user running Apache/PHP (`www-data`).
* **External Learning Resource:**
  * [OWASP Command Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Command_Injection_Defense_Cheat_Sheet.html)
* **Further Work & Extension:**
  * Try chaining additional commands using `127.0.0.1 && uname -a` or `127.0.0.1; ls -la /var/www/html`.
  * What character filter or input validation rule would prevent operators like `;`, `&&`, and `|` from reaching the system command execution context?

---

### Module 3: SQL Injection (SQLi)

* **Task:** Bypass parameter lookup constraints on the **SQL Injection** tab to dump all user records.
* **Test Input / Payload:**
  ```sql
  ' OR '1'='1
  ```
* **Observation:** Instead of returning a single user ID record, the application lists every user account stored in the database table.
* **External Learning Resource:**
  * [PortSwigger Web Security Academy: SQL Injection](https://portswigger.net/web-security/sql-injection)
* **Further Work & Extension:**
  * Test payload strings to extract database version information using `1' UNION SELECT null, version() #`.
  * Explain why parameterised queries (prepared statements) protect applications against SQL injection even when user inputs contain quotes.

---

### Module 4: Reflected Cross-Site Scripting (XSS)

* **Task:** Inject inline client-side JavaScript that executes upon form submission.
* **Test Input / Payload:**
  ```html
  <script>alert('Reflected XSS')</script>
  ```
* **Observation:** The web browser renders the reflected input string directly into the HTML Document Object Model (DOM) tree, triggering an alert box.
* **External Learning Resource:**
  * [OWASP Cross Site Scripting (XSS) Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
* **Further Work & Extension:**
  * Attempt to execute a payload that logs browser cookie details using `<script>console.log(document.cookie)</script>`.
  * Explain the role of the `HttpOnly` flag on session cookies in mitigating XSS credential theft.

---

### Module 5: Stored Cross-Site Scripting (XSS)

* **Task:** Inject a persistent JavaScript payload into the guestbook entry form.
* **Test Input / Payload:**
  * **Name:** `Tester`
  * **Message:** `<script>alert('Stored XSS')</script>`
* **Observation:** Navigate away from the page and return to **XSS (Stored)**. Notice that the alert box executes automatically whenever the page reloads.
* **External Learning Resource:**
  * [PortSwigger Web Security Academy: Stored XSS](https://portswigger.net/web-security/cross-site-scripting/stored)
* **Further Work & Extension:**
  * Inspect the database response using your browser developer tab. Where is the unencoded text rendered?
  * How does combining input validation with HTML entity encoding (`htmlspecialchars()`) neutralize stored scripts?

---

### Module 6: Local File Inclusion (LFI)

* **Task:** Read system configuration files outside the Apache public web folder using path traversal.
* **Test Input / Payload:**
  Modify the `page` parameter in your browser URL bar to:
  ```text
  http://localhost:9080/vulnerabilities/fi/?page=../../../../etc/passwd
  ```
* **Observation:** The application traverses directory boundaries (`../`) and renders the raw `/etc/passwd` text file directly on screen.
* **External Learning Resource:**
  * [OWASP File Inclusion Vulnerabilities Guide](https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/07-Input_Validation_Testing/11.1-Testing_for_Local_File_Inclusion)
* **Further Work & Extension:**
  * Experiment with relative paths to inspect local PHP files (e.g., `?page=include.php`).
  * How does constructing a dynamic dynamic filename lookup table or explicit whitelist protect PHP applications from arbitrary file inclusion?

---

## 7. CLEANUP & TEARDOWN

After completing your exercises:

1. Open your terminal inside VS Code.
2. Run the container teardown command:
   ```bash
   docker compose down
   ```
3. Verify all containers are stopped in Docker Desktop.
4. Ensure your repository changes are fully committed and synced to GitHub.