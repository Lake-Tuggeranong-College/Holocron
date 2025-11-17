---
theme: simple
highlightTheme: zenburn
css: css/holocronSlides.css
---
## Slide 1: 🛡️ Security Audits for PHP Websites

**Objective:** Identify and remediate vulnerabilities in PHP websites using automated and manual tools.

---

## Slide 2: 🔍 Audit Preparation

**Steps:**

- Define scope: pages, APIs, user roles
- Set up a staging environment
- Gather tools:
    - OWASP ZAP
    - Burp Suite
    - PHPStan / Psalm
    - Composer Audit
    - Snyk

---

## Slide 3: 🧪 OWASP ZAP Scan

**Steps:**

1. **Configure Proxy:**
    - Browser proxy: `127.0.0.1:8080`
2. **Spider the Site:**
    - Quick Start → Enter URL → Click _Spider_
3. **Active Scan:**
    - Right-click target → _Attack_ → _Active Scan_
4. **View Alerts:**
    - Bottom panel → _Alerts_ tab
5. **Generate Report:**
    - Menu → _Report_ → _Generate HTML Report_

**Screenshot:** ![ZAP Scan Interface](https://www.webasha.com/blog/step-by-step-guide-to-owasp-zap-for-vulnerability-testing)(https://www.webasha.com/blog/step-by-step-guide-to-owasp-zap-for-vulnerability-testing)

---

## Slide 4: 🔍 Burp Suite Scan

**Steps:**

1. **Launch Burp Suite Pro**
2. **Dashboard → New Scan**
3. **Enter Target URL**
4. **Choose Scan Mode:**
    - _Lightweight_ for quick overview
5. **Start Scan**
6. **View Issues:**
    - _Dashboard_ → _Issues_ tab

**Screenshot:** ![Burp Suite Scan](https://portswigger.net/burp/documentation/desktop/getting-started/running-your-first-scan)(https://portswigger.net/burp/documentation/desktop/getting-started/running-your-first-scan)

---

## Slide 5: 🧠 Static Analysis with PHPStan

**Install:**

```Shell
composer require --dev phpstan/phpstan
```

**Run Scan:**

```Shell
vendor/bin/phpstan analyse src --level=max
```

**Optional:**

```Shell
vendor/bin/phpstan analyse src --configuration=phpstan.neon
```

**Screenshot:**\ [PHPStan CLI Usage](https://phpstan.org/user-guide/command-line-usage)(https://phpstan.org/user-guide/command-line-usage)

---

## Slide 6: 🧠 Static Analysis with Psalm

**Install:**

```Shell
composer require --dev vimeo/psalm
```

**Init Config:**

```Shell
vendor/bin/psalm --init
```

**Run Scan:**

```Shell
vendor/bin/psalm
```

**Target Specific File:**

```Shell
vendor/bin/psalm src/Controller/UserController.php
```

**Screenshot:**\ [Psalm CLI Usage](https://psalm.dev/docs/running_psalm/command_line_usage/)citeturn3search41

---

## Slide 7: 📦 Composer Audit

**Run Audit:**

```Shell
composer audit
```

**Output Formats:**

```Shell
composer audit --format=table
composer audit --format=json
```

**Use in CI/CD:**

- Non-zero exit code indicates vulnerabilities

**Screenshot:**\ [Composer Audit Guide](https://php.watch/articles/composer-audit)(https://php.watch/articles/composer-audit)

---

## Slide 8: 🔍 Snyk Scan

**Install CLI:**

```Shell
npm install -g snyk
```

**Authenticate:**

```Shell
snyk auth
```

**Scan Project:**

```Shell
snyk test
```

**Monitor Project:**

```Shell
snyk monitor
```

**Screenshot:**\ [Snyk CLI Docs](https://docs.snyk.io/developer-tools/snyk-cli/cli-commands-and-options-summary)(https://docs.snyk.io/developer-tools/snyk-cli/cli-commands-and-options-summary)

---

## Slide 9: 📋 Reporting & Remediation

**Include in Report:**

- Vulnerability description
- Risk level
- Reproduction steps
- Recommended fix
- Timeline for remediation

---

## Slide 10: ✅ Post-Audit Actions

**Next Steps:**

- Fix vulnerabilities
- Retest after patching
- Schedule regular audits
- Train developers on secure coding

---

# Questions?

If you have any questions, please ask!

![[contactDetails.png]]