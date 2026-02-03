---
isCurrent: true
---

# Project Goal

To collaboratively design, implement, and fully document three distinct cybersecurity challenges for a Capture the Flag (CTF) competition environment as a small group (2-3 people). This project emphasises practical application, creative problem-solving, and a deep understanding of security vulnerabilities across different technological domains.

## Learning Objectives

Upon completion of this project, students will be able to:

1. **Design and Implement:** Create effective, solvable, and engaging security challenges across hardware, containerised infrastructure, and reconnaissance domains.
2. **Analyse Vulnerabilities:** Understand how specific technologies (like Arduino and Docker) introduce unique security risks.
3. **Document and Communicate:** Produce high-quality technical documentation (write-ups) that clearly explains the challenge setup, the intended solution path, and the underlying security concepts.
4. **Adopt the Attacker Mindset:** Think critically about how systems can be exploited, rather than just how to defend them.

## Challenge Requirements (The Three Pillars)

Each small group (2-3 people) is required to develop **three unique challenges**, each focusing on a specific technological domain:

### 1. Embedded Systems / IoT Challenge (Arduino)


### 2. Containerisation Challenge (Docker)

**Focus:** Infrastructure security, container misconfigurations, privilege escalation, and exploiting insecure services.

- **Requirement:** The challenge must utilise a single Docker image (or a set of linked containers via `docker-compose.yml`). The flag must be hidden within the container’s file system, environment variables, or obtainable by exploiting an insecure service running inside the container (e.g., a vulnerable web service, an exposed database, or a root-owned cron job).
- **Concepts to Explore:** Docker security best practices (or the lack thereof), volume mounts, port exposure, insecure Dockerfile configurations, Linux capabilities, or container breakout techniques.

### 3. Open-Source Intelligence (OSINT) Challenge

**Focus:** Non-technical reconnaissance, social media analysis, metadata harvesting, and public record investigation.

- **Requirement:** The flag must be a piece of information that can only be found using publicly available data and tools (like search engines, domain registrars, social media archives, or geo-location tools, or the physical space/room ). No hacking or system exploitation should be required for the solution.
- **Concepts to Explore:** Metadata analysis (EXIF data), identifying deep web links, analyzing social media usage patterns, searching public records, or utilising specialised OSINT frameworks.
