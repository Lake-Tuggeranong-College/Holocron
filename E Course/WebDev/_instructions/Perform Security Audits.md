
# 🔐 Security Scanning Guide for PHP Websites

This guide provides detailed instructions and examples for performing security scans on a PHP website using various tools.

---

## 🧪 OWASP ZAP (Dynamic Analysis)

**Purpose:** Detect runtime vulnerabilities like XSS, CSRF, and insecure headers.

### Installation
- Download from OWASP ZAP Website

### Steps
1. Launch ZAP.
2. Set browser proxy to `127.0.0.1:8080`.
3. In ZAP, go to **Quick Start** → Enter target URL → Click **Attack**.
4. Use **Spider** to crawl the site.
5. Right-click target → **Attack** → **Active Scan**.
6. View results in **Alerts** tab.
7. Generate report via **Report → Generate HTML Report**.

### Example
- Target: `http://localhost/myapp`
- Proxy: Configure browser to use ZAP proxy
- Scan: Use Spider and Active Scan to detect XSS

---

## 🔍 Burp Suite (Dynamic Analysis)

**Purpose:** Manual and automated testing of web application security.

### Installation
- Download from Burp Suite Website

### Steps
1. Launch Burp Suite.
2. Configure browser proxy to `127.0.0.1:8080`.
3. Intercept traffic using **Proxy** tab.
4. Send requests to **Repeater** or **Scanner**.
5. Use **Dashboard** → **New Scan** → Enter target URL.
6. View issues in **Issues** tab.

## 🧠 PHPStan (Static Analysis)
Purpose: Detect insecure coding patterns and bugs in PHP code.
Installation
`composer require --dev phpstan/phpstan`


### Usage

`vendor/bin/phpstan analyse src --level=max`

### Example

*   Run on `src/` directory
*   Use `--level=max` for strictest checks
*   Review output for insecure code, deprecated functions, and logic errors

***

## 🧠 Psalm (Static Analysis)

**Purpose:** Advanced static analysis with type inference and security checks.

### Installation

`composer require --dev vimeo/psalm`

### Initialization

`vendor/bin/psalm --init`


### Usage

`vendor/bin/psalm`


### Example

*   Run on full project or specific files
*   Detect type errors, unused code, and potential vulnerabilities

***

## 📦 Composer Audit (Dependency Vulnerability Scan)

**Purpose:** Identify known vulnerabilities in PHP packages.

### Usage

`composer audit`

### Options

```bash
composer audit --format=table
composer audit --format=json
```

### Example

*   Run in project root
*   Review output for CVEs and package updates

***

## 🔍 Snyk (Dependency & Code Security)

**Purpose:** Scan for vulnerabilities in dependencies and monitor projects.

### Installation

`npm install -g snyk`


### Authentication

`snyk auth`


### Usage

```bash

snyk test
snyk monitor
```


### Example

*   Run `snyk test` in project root
*   Use `snyk monitor` to track changes over time

***

## ✅ Post-Audit Actions

*   Fix identified vulnerabilities
*   Retest after patching
*   Document findings and resolutions
*   Schedule regular audits
*   Train developers on secure coding practices