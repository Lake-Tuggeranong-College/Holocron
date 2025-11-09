Write report detailing the installation of the server, specifically for the project requirements and goals. 

# Prerequisites

> [!important] Prior to starting this report, you need to ensure that your workstation is set up correctly and in an ergonomic manner.

![[setting-up-your-workstation-factsheet.pdf]]

After configuring your workstation to the guidelines, have someone take a photo of you at your desk.

# Requirements

To complete this task, you need to understand the requirements for the following:

- Written Report
- Spreadsheet
- Intended Audience
- How the documents are to be presented.

You will need to read the full task and be able to provide evidence for the above requirements.

# Instructions

> [!important] The report is to be written in markdown in the **_tasks/task1.2/manual.md** file in your repository.

Your task is to write a report detailing the **final** installation configuration for the Docker server environment you developed.

Your final submission will be this technical manual, written in Markdown format, which must be clear, detailed, and replicable.

The report should contain the following sections

##  Technical Manual Structure & Content

Your technical manual must be a single Markdown file that follows a logical, step-by-step structure, enabling another developer to follow your instructions from start to finish to deploy the same application. The manual should include mermaid diagrams where appropriate to visually explain complex concepts.

### Section 1: Introduction

- Briefly describe the purpose of the project.
- Explain the key concepts of containerisation, Docker, and Docker Compose in the context of this assignment.
- Provide a high-level overview of the application architecture.

### Section 2: Prerequisites & Software Installation

This section should provide a clear, step-by-step guide on installing and configuring all the necessary software. Assume the reader is starting with a fresh system.

For each of the required software:
- The purpose of the software in the project.
- Provide a link to the official download page.
- Outline the key steps for installation.

### Section 3: Project Setup & Docker Compose Configuration

This is the core of your manual. Detail the steps to configure the multi-service Docker environment.

1. **Project Directory Structure:**
    - Show the recommended directory structure for the project.
2. **Creating the `docker-compose.yml` file:**
    - Provide the complete `docker-compose.yml` file content.
    - Use comments within the YAML to explain the purpose of each line.
    - Your report must:
        - Discuss the different services defined.
        - Describe network connectivity between the website and the database containers, as well as other options.
        - Detail necessary environment variables (e.g., database credentials).
    
3. **Architectural Diagram:**
    - Use a **mermaid diagram** to visually represent the services and their connections. This diagram should clearly show the relationship between the website, the database, volumes, and networks.

### Section 4: Deployment & Verification

Document the process of deploying the application and verifying that it works correctly.

1. **Deployment:**
    - Provide the process to build and run the services

2. **Verification:**
    - Explain how to check that the containers are running (e.g., `docker ps`).
    - Describe how to access the running website in a web browser.
    - Detail a method to confirm that the website is successfully communicating with the database.

### Section 5: Version Control with Git & GitHub

Explain how you will use Git and GitHub to manage your project.

1. **Initialising Git:**
    - Provide the command to initialize a new Git repository.
2. **Committing Changes:**
    - Explain the `git add` and `git commit` commands.
3. **GitHub Integration:**
    - Show how to create a new repository on GitHub.
    - Provide the commands to link your local repository to GitHub and push your changes.

### Section 6: Conclusion & Reflection

- Summarise the key outcomes of the project.
- Reflect on the benefits of using containerisation for development and deployment.