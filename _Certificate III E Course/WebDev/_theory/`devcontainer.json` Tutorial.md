---
isCurrent: true
---
A `devcontainer.json` file defines the environment for a **Dev Container**, allowing developers to work in a consistent, isolated development environment. This is especially useful for teams, open-source projects, or when working across multiple machines.

---

## 📁 File Location

The `devcontainer.json` file typically resides in the `.devcontainer/` folder at the root of your project:

```
your-project/
├── .devcontainer/
│   └── devcontainer.json
├── src/
└── README.md
```

---

## 🧩 Basic Structure

`.devcontainer.json` uses the JSON format.

A **JSON file** (JavaScript Object Notation) is a lightweight, text-based format used for storing and exchanging data. It represents data as key-value pairs, similar to a dictionary or map, and supports nested structures like arrays and objects. JSON is easy for humans to read and write, and it's widely used in web development, APIs, configuration files, and data interchange between systems. Its syntax is derived from JavaScript, but it's language-independent, making it compatible with most programming languages. A typical JSON file ends with `.json` and looks like this:

Here is an example of a basic `.devcontainer.json` file with different settings.

```Json
{
  "name": "My Dev Container",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:20",
  "features": {},
  "postCreateCommand": "npm install",
  "customizations": {},
  "mounts": [],
  "forwardPorts": [3000],
  "remoteUser": "vscode"
}
```

---

## 🔧 Key Options Explained

### 1. **`name`**

- A friendly name for the container.

```Json
"name": "Python Dev Environment"
```

---

### 2. `image` or `build`

- Use a prebuilt image:

```Json
"image": "mcr.microsoft.com/devcontainers/python:3.11"
```

- Or build from a Dockerfile:

```Json
"build": {
  "dockerfile": "Dockerfile",
  "context": "..",
  "args": {
    "VARIANT": "3.11"
  }
}
```

---

### 3. `features`

- Add reusable components like Git, Docker CLI, or Azure CLI.

```Json
"features": {
  "ghcr.io/devcontainers/features/docker-in-docker:2": {}
}
```

---

### 4. `postCreateCommand`

- Run commands after the container is created.

```Json
"postCreateCommand": "pip install -r requirements.txt"
```

---

### 5. `customisations`

- Customize tools like VS Code.

```Json
"customizations": {
  "vscode": {
    "extensions": [
      "ms-python.python",
      "esbenp.prettier-vscode"
    ],
    "settings": {
      "python.pythonPath": "/usr/bin/python3"
    }
  }
}
```

---

### 6. `mounts`

- Mount local folders or volumes.

```Json
"mounts": [
  "source=${localWorkspaceFolder}/data,target=/workspace/data,type=bind"
]
```

---

### 7. `forwardPorts`

- Forward ports from the container to the host.

```Json
"forwardPorts": [3000, 8000]
```

---

### 8. `remoteUser`

- Set the default user inside the container.

```Json
"remoteUser": "vscode"
```

---

### 9. `runArgs`

- Extra arguments for the `docker run` command.

```Json
"runArgs": ["--cap-add=SYS_PTRACE", "--security-opt", "seccomp=unconfined"]
```

---

### 10. `containerEnv`

- Set environment variables.

```Json
"containerEnv": {
  "NODE_ENV": "development"
}
```

---

## 🧪 Example: Full `devcontainer.json`

```Json
{
  "name": "Node.js Dev",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:20",
  "features": {
    "ghcr.io/devcontainers/features/git:1": {}
  },
  "postCreateCommand": "npm install",
  "customizations": {
    "vscode": {
      "extensions": ["dbaeumer.vscode-eslint"]
    }
  },
  "forwardPorts": [3000],
  "remoteUser": "vscode"
}
```

---

## 📚 Resources

- [VS Code Dev Containers Docs](https://code.visualstudio.com/docs/devcontainers/containers)
