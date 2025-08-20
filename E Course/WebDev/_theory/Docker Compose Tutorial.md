Docker Compose uses a YAML file (`docker-compose.yml`) to configure application services, networks, and volumes. It simplifies the process of managing multi-container environments.

---

## 📁 File Location

Place your `docker-compose.yml` file at the root of your project:

```
your-project/
├── docker-compose.yml
├── .devcontainer
│   └── Dockerfile
│   └── devcontainer.json
└── db/
```

---

## 🧩 Basic Structure

```Yaml
version: '3.8'

services:
  app:
    build: ./app
    ports:
      - "3000:3000"
    volumes:
      - ./app:/usr/src/app
    environment:
      - NODE_ENV=development
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb
    volumes:
      - db-data:/var/lib/postgresql/data
volumes:
  db-data:
```

---

## 🔧 Key Sections Explained

### 1. `version`

Specifies the Compose file format version. Common versions: `'3.8'`, `'3'`, `'2'`.

---

### 2. `services`

Defines the containers to run.

#### Example: Web App

```Yaml
app:
  image: node:20
  ports:
    - "3000:3000"
```

#### Example: Database

```Yaml
db:
  image: mysql:8
  environment:
    MYSQL_ROOT_PASSWORD: root
```

---

### 3. `build`

Builds a container from a Dockerfile.

```Yaml
build:
  context: ./app
  dockerfile: Dockerfile.dev
```

---

### 4. `ports`

Maps container ports to host ports.

```Yaml
ports:
  - "8080:80"
```

---

### 5. `volumes`

Mounts host directories or named volumes.

```Yaml
volumes:
  - ./src:/app/src
```

Named volumes:

```Yaml
volumes:
  db-data:
```

---

### 6. `environment`

Sets environment variables.

```Yaml
environment:
  - DEBUG=true
  - API_KEY=12345
```

---

### 7. `depends_on`

Specifies service dependencies.

```Yaml
depends_on:
  - db
```

---

### 8. `networks`

Defines custom networks.

```Yaml
networks:
  backend:
```

Attach services:

```Yaml
services:
  app:
    networks:
      - backend
```

---

### 9. `command`

Overrides the default container command.

```Yaml
command: npm start
```

---

### 10. `restart`

Controls restart behavior.

```Yaml
restart: always
```

Options: `no`, `always`, `on-failure`, `unless-stopped`

---

## 🧪 Example: Full `docker-compose.yml`

```Yaml
version: '3.8'

services:
  web:
    build: ./web
    ports:
      - "3000:3000"
    volumes:
      - ./web:/usr/src/app
    environment:
      - NODE_ENV=development
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:
```


---

## 🧩 More Service Examples

### 🟦 1. Node.js + MongoDB

```Yaml
version: '3.8'

services:
  node-app:
    build: ./node-app
    ports:
      - "3000:3000"
    environment:
      - MONGO_URL=mongodb://mongo:27017/mydb
    depends_on:
      - mongo

  mongo:
    image: mongo:6
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

---

### 🐍 2. Python Flask + Redis

```Yaml
version: '3.8'

services:
  flask-app:
    build: ./flask-app
    ports:
      - "5000:5000"
    environment:
      - REDIS_URL=redis://redis:6379
    depends_on:
      - redis

  redis:
    image: redis:7
```

---

### 🐘 3. PostgreSQL + pgAdmin

```Yaml
version: '3.8'

services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: mydb
    volumes:
      - pgdata:/var/lib/postgresql/data

  pgadmin:
    image: dpage/pgadmin4
    ports:
      - "8080:80"
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@example.com
      PGADMIN_DEFAULT_PASSWORD: admin
    depends_on:
      - postgres

volumes:
  pgdata:
```

---

### 🧪 4. Elasticsearch + Kibana

```Yaml
version: '3.8'

services:
  elasticsearch:
    image: elasticsearch:8.12.0
    environment:
      - discovery.type=single-node
    ports:
      - "9200:9200"

  kibana:
    image: kibana:8.12.0
    ports:
      - "5601:5601"
    depends_on:
      - elasticsearch
```

---

### 🧰 5. NGINX Reverse Proxy

```Yaml
version: '3.8'

services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
```

---

### 🧼 6. Traefik as a Reverse Proxy with Labels

```Yaml
version: '3.8'

services:
  traefik:
    image: traefik:v2.10
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--entrypoints.web.address=:80"
    ports:
      - "80:80"
      - "8080:8080"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock

  app:
    image: nginx
    labels:
      - "traefik.http.routers.app.rule=Host(`localhost`)"
```

---

