# Goal
Using your PC or laptop, or a school supplied one, install and configure
- a docker container for your future projects.
- PHP
- Visual Studio Code


# Requirements

For this task, you will require a PC/laptop (not a chromebook).

Once the docker container is deployed to the LTC Server, the remainder of the content can be developed and written on a Chromebook (through the use of GitHub's Codespaces)

# Instructions

## GitHub account

Sign up an account here: https://github.com/signup

The suggested method of signing up is to use your Schoolsnet (@schoolsnet.act.edu.au) email address.

![[gitHubSignUp.png]]

## Accept GitHub Classroom Assignment

Click on the link to the main repository for the project.

> [!danger] Add link here.

## Install Software

If you're developing locally, install the following pieces of software.

### Install - Visual Studio Code

> [!info] Only install if you are developing on a PC/Mac/Linux machine. Not ChromeOS.

Install from here
https://code.visualstudio.com/

![[vsCodeDownload.png]]

### Docker Desktop

>[!info] Only install if you are developing on a PC/Mac/Linux machine. Not ChromeOS.

If Docker isn't installed, install it here - https://www.docker.com/products/docker-desktop/

![[docker.png]]

After downloading the installer, install Docker Desktop and open it to confirm it installed correctly. Accept the service agreement (after reading the terms).

Use the recommended settings

![[dockerSettings.png]]


Authenticate with Docker using your schools Google credentials.

![[dockerAuthentication.png]]


### Github Desktop

Download page: https://desktop.github.com/download/

Download the installer for your operating system and install it once the download has finished.

Once opened, you will need to sign in to GitHub through the browser using your GitHub account.

Clone the repository created when you accepted the GitHub Classroom assignment.

## Project Configuration

## Open Project

Depending on your local development environment, you to open your project using one of the following methods:

1. Online Development: Open the project in Codespaces from your GitHub repository in your browser.
2. Local Development: Open the repository folder using Visual Studio Code.

### Online Development

> [!info] Use this option if you're developing on a Chromebook.

Open your browser and go to your repository that was created earlier.

Click on the Code menu and choose **Create codespace on main**. This will open a new tab, and after some time, you will have an interface very similar to Visual Studio Code in the browser.

![[gitHubCodespacesCreate.png]]

Note: The first time the codespace is opened, it can take some time to install. You may need to wait for a few minutes.

![[gitHubCodespacesOpened.png]]

### Local Development

> [!info] Use this option if you're developing on a PC/Mac/Linux machine.


Clone the repository to your computer using GitHub Desktop (or any method). Choose the newly created repository
![[repoClone.png]]


> [!info] Github desktop is the GUI interface to clone, commit, push etc repositories to and from Github that runs on your local computer.


Now, open **Github Desktop** on your computer and click "Clone Repository" under the File menu.
![[githubDesktopClone.png]]


Select the new repository you just created on GitHub.

Choose the path where you want to save it.

> [!tip] The directory will need to be empty.


Click Clone.
![[gitHubDesktopSelectClone.png]]


After a short moment, it will then show you this page:
![[githubDesktopRepo.png]]

Click on the Current Repository Download in the top left of the window. Right Click on the repository and choose to open it in the Visual Studio Code.

## Database extensions

Within Codespaces or VSCode, you will need an extension to be able to interact with and manipulate the database/s you will be creating.

Install the following extensions:

- Database Client
- Database Client JDBC

![[extensions.png]]

## Devcontainer

With your project open, create a directory named `.devcontainer` (note the leading full stop!)

Inside this directory, create three files:

1. `devcontainer.json`
2. `Dockerfile`
3. `postStart.sh`

### `devcontainer.json` file

This file configures the container so when it starts up, it automatically configures software to work for our project and environment.


In the repository folder, create a folder called `.devcontainer`. The folder starts with a `.` which may mean it is usually hidden in Windows Explorer/Finder etc.

Inside this folder, create a file called `devcontainer.json` and replace the contents with the following:

```json
{
  "name": "PHP & mariadb Dev Container",
  "build": {
    "dockerfile": "Dockerfile"
  },
  "customizations": {
    "vscode": {
      "settings": {
        "terminal.integrated.shell.linux": "/bin/bash"
      },
      "extensions": [
        "felixfbecker.php-debug",
        "bmewburn.vscode-intelephense-client",
        "cweijan.dbclient-jdbc",
        "cweijan.vscode-database-client2"
      ]
    }
  },
  "forwardPorts": [80, 3306],
  "postCreateCommand": "service mariadb start && docker-php-ext-install mysqli && apache2ctl restart",
  "postStartCommand": "bash .devcontainer/postStart.sh"
}

```

### `Dockerfile`

Insite this file, include the following code:

```docker
FROM php:8.2-apache

ENV DEBIAN_FRONTEND=noninteractive

# Install MariaDB and PHP extensions
RUN apt-get update && \
    apt-get install -y mariadb-server mariadb-client

RUN docker-php-ext-install mysqli pdo pdo_mysql

# Configure MariaDB
RUN mkdir -p /var/run/mysqld && \
    chown -R mysql:mysql /var/run/mysqld

EXPOSE 80 3306

ENV MARIADB_ROOT_PASSWORD=root
ENV MARIADB_DATABASE=root
ENV MARIADB_USER=root
ENV MARIADB_PASSWORD=root

CMD service mysql start && apache2ctl -D FOREGROUND

```

### `postStart.sh`

Add this code:

```bash
service mariadb start
php -S 0.0.0.0:8080

```

Save the file.


## Commit & Push changes

At stages of the development, such as when features have been complete, it's important to commit these changes to your repository, and then push the changes to GitHub.

> [!warning] This is especially important when developing in Codespaces. Changes you make to your files, DO NOT save back into your repository. You MUST commit and push the changes to have your repository updated.

![[commonBlocks#Commit & Push]]


# Database Configuration

Before the site can be developed, the database needs to be configured to allow for user access.

Open the project in Visual Studio Code, open in the Docker Container.

![[projectOpenIInContainer.png]]

If the **terminal** is not open, open the bottom panel and then click on the Terminal tab, as shown below:

![[dbOpenTerminal.png]]

Enter the following command: `mariadb-secure-installation` and press Enter.

![[dbSecureInstllation.png]]

You'll be asked a number of questions. Answering as indicated here:


| Question                               | Response                                         |
| -------------------------------------- | ------------------------------------------------ |
| the current root password              | enter the password you entered in the Dockerfile |
| **Switch to unix_socker authentication | Y                                                |
| Remove anonymous users?                | Y                                                |
| **Change the root password**           | n                                                |
| Remove anonymous users?<br>            | Y                                                |
| **Disallow root login remotely**<br>   | n                                                |
| Remove test database and access to it? | Y                                                |
| Reload privilege tables now?           | Y                                                |

![[dbSecureInstllationComplete.png]]

# Connect to Database Server

Open the Database Client exctension throught eh iton on the left hand side of Visual Studio Code.

![[dbExtension.png]]


Click the `+` to create a new connection to a database.

![[dbAddNewConnection.png]]

Enter the settings for the database. Choose **MariaDB** first, then enter the database password. Click **Save** and then **Connect**.

![[dbConnectionSettings.png]]

## Create Database and user

MariaDb can host many different databases within the server, and each databaase needs to be created.

Press the `+` button next to the active connection to add a new database.

![[dbNewDatabase.png]]

Modify the SQL to add the word `shopfront`.

```sql

-- Create the database
CREATE DATABASE shopfront;

-- Create the user and set a password
CREATE USER 'shopfront'@'localhost' IDENTIFIED BY 'shopfront';

-- Grant privileges to the user on the database
GRANT ALL PRIVILEGES ON shopfront.* TO 'shopfront'@'localhost';

-- Apply the changes
FLUSH PRIVILEGES;

```

Press the **Run** button on each command to execute the SQL commands.

![[dbExecuteSQL.png]]

The new database will now appear in the server.

![[dbShopfrontCreated.png]]

**Congratulations** you've created a database on your database server!
