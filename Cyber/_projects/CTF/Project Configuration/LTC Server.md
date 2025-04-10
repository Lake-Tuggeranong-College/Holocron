# Login

The login for the server is:
```
Username: ltc
Password: <REDACTED>
```
The unredacted password is on the Shared Google Drive.

# Website Update

To update the server with current changes in the Github repository, follow these steps:


1. Open the terminal/console.
2. (if NOT on the server) ssh into the server following these steps:
	1. type the following command: `ssh ltc@10.177.200.71`
	2. when prompted, entered the password
3. Enter `cd /var/www/CyberCity`. Hit Enter.
4. Type `git pull`

This will pull all the changes to the server. No other changes are necessary - the website is automatically refreshed.


