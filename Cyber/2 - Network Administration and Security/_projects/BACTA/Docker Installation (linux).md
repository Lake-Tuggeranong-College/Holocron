# Install file
Download this file:
https://desktop.docker.com/linux/main/amd64/docker-desktop-amd64.deb?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-linux-amd64&_gl=1*1ovvf3d*_gcl_au*NjYyNTYxNDkyLjE3NTMyNDQxMjY.*_ga*MTYwOTc4NjUwMy4xNzQzNTQ3ODQ5*_ga_XJWPQMJYHQ*czE3NTMyNDQxMjYkbzQkZzEkdDE3NTMyNDQ3NzIkajYwJGwwJGgw


# Terminal

Open the Terminal on your computer and change to the Downloads folder with the command:

```bash
cd Downloads
```

Then update command, and wait to finish:

```bash
sudo apt update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```


Once that's completed install the desktop file with the command, and wait for it to finish:


```bash
sudo apt install ./docker-desktop-amd64.deb
```

