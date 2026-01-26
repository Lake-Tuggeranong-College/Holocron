---
isCurrent: false
---
# .devcontainer/devcontainer.json

```json
{
    "name": "PHP",
    "image": "mcr.microsoft.com/devcontainers/php:latest",
    "features": {
        "ghcr.io/warrenbuckley/codespace-features/sqlite:1":{},
        "ghcr.io/devcontainers/features/php:1":{}
    },
    "portsAttributes": {
        "8000":{
            "label": "PHP Server",
            "onAutoForward": "notify"
        }
    },
    "postCreateCommand": "bash .devcontainer/install-dependencies.sh",
    "postStartCommand": "php -S 0.0.0.0:8000"
}
```


# .devcontainer/install-dependencies.sh

```bash
sudo apt update -y
sudo apt install sqlite3
php -S 0.0.0.0:8000

```