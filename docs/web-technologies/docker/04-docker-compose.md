---
title: "Docker Compose"
description: "Master Docker Compose — defining multi-container apps with docker-compose.yml, services, volumes, networks, and common patterns."
sidebar_position: 4
tags: [Docker, Web Technologies, Intermediate]
keywords: [docker compose, docker-compose.yml, services, volumes, networks, depends_on, environment, ports]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ProgressTracker from '@site/src/components/ProgressTracker';
import TeacherPerspective from '@site/src/components/TeacherPerspective';

# Docker Compose

<LastUpdated date="2026-05-22" timeTo="3 hours" difficulty="Intermediate" />

## 📌 Quick Summary (30 seconds)

Docker Compose lets you define and run **multi-container applications** using a single `docker-compose.yml` file. Instead of running complex `docker run` commands for each container, you declare all services, networks, and volumes in YAML. Then `docker compose up` starts everything, and `docker compose down` tears it all down. It's the standard way to run apps that need a web server + database + cache.

---

## 📚 Detailed Explanation

### Why Docker Compose?

Without Compose, running a web app + database requires:
```bash
docker network create app-network
docker run -d --name db --network app-network \
  -e POSTGRES_PASSWORD=secret \
  -v db-data:/var/lib/postgresql/data \
  postgres:15

docker run -d --name web --network app-network \
  -p 3000:3000 \
  -e DATABASE_URL=postgres://postgres:secret@db:5432/mydb \
  my-app:1.0
```

With Compose — all of that becomes one file and two commands.

### docker-compose.yml Structure

```yaml
version: '3.9'                    # Compose file format version

services:                         # Define containers
  service-name:
    image: image-name             # Use existing image
    build: .                      # OR build from Dockerfile
    ports:
      - "host:container"
    environment:
      - KEY=VALUE
    volumes:
      - named-volume:/path
      - ./local:/container/path
    networks:
      - my-network
    depends_on:
      - other-service
    restart: always

volumes:                          # Named volumes
  named-volume:

networks:                         # Custom networks
  my-network:
```

### Core Compose Commands

```bash
# Start all services (detached)
docker compose up -d

# Start and rebuild images
docker compose up -d --build

# Stop all services (keeps containers)
docker compose stop

# Stop and REMOVE containers
docker compose down

# Stop and remove containers + volumes
docker compose down -v

# View logs
docker compose logs
docker compose logs -f web         # follow specific service

# View running services
docker compose ps

# Execute command in service
docker compose exec web bash
docker compose exec db psql -U postgres

# Scale a service
docker compose up -d --scale web=3

# Rebuild one service
docker compose build web
docker compose up -d --no-deps web  # restart only web
```

---

## 💻 Complete Examples

### Example 1: Node.js + PostgreSQL + Redis

```yaml
version: '3.9'

services:
  # Web application
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgres://postgres:secret123@db:5432/appdb
      - REDIS_URL=redis://cache:6379
    depends_on:
      db:
        condition: service_healthy
      cache:
        condition: service_started
    restart: unless-stopped
    networks:
      - app-network

  # PostgreSQL database
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: secret123
      POSTGRES_DB: appdb
    volumes:
      - postgres-data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - app-network

  # Redis cache
  cache:
    image: redis:7-alpine
    volumes:
      - redis-data:/data
    networks:
      - app-network

  # Nginx reverse proxy
  proxy:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/ssl
    depends_on:
      - web
    networks:
      - app-network

volumes:
  postgres-data:
  redis-data:

networks:
  app-network:
    driver: bridge
```

### Example 2: Simple WordPress + MySQL

```yaml
version: '3.9'

services:
  wordpress:
    image: wordpress:latest
    ports:
      - "8080:80"
    environment:
      WORDPRESS_DB_HOST: mysql
      WORDPRESS_DB_USER: wpuser
      WORDPRESS_DB_PASSWORD: wppass
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - wordpress-data:/var/www/html
    depends_on:
      - mysql
    restart: always

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wpuser
      MYSQL_PASSWORD: wppass
      MYSQL_ROOT_PASSWORD: rootpass
    volumes:
      - mysql-data:/var/lib/mysql
    restart: always

volumes:
  wordpress-data:
  mysql-data:
```

### Example 3: Development with Hot Reload

```yaml
version: '3.9'

services:
  app:
    build:
      context: .
      target: development        # use dev stage from multi-stage Dockerfile
    ports:
      - "3000:3000"
    volumes:
      - .:/app                   # bind mount: live code sync
      - /app/node_modules        # anonymous volume: keep container's node_modules
    environment:
      - NODE_ENV=development
    command: npm run dev         # override CMD for dev hot-reload
```

---

## 🎨 Visual Diagram

```
docker-compose.yml defines:

┌─────────────────── app-network ────────────────────────┐
│                                                         │
│  ┌─────────┐   PORT 80    ┌─────────┐                  │
│  │  proxy  │◄────────────►│   web   │                  │
│  │ (nginx) │  (internal)  │ (node)  │                  │
│  └─────────┘              └────┬────┘                  │
│   Port 80:80                   │  DATABASE_URL         │
│                         ┌──────▼──────┐                │
│                         │     db      │                │
│                         │ (postgres)  │                │
│                         └──────┬──────┘                │
│                                │  /var/lib/postgresql   │
│                         ┌──────▼──────┐                │
│                         │  postgres-  │                │
│                         │    data     │ (named volume) │
│                         └─────────────┘                │
└─────────────────────────────────────────────────────────┘

All containers communicate by SERVICE NAME (e.g., "db", "web")
```

---

## ⚠️ Common Mistakes

### Mistake 1: Confusing `depends_on` with Health Checks

```yaml
# WRONG: depends_on only waits for container to START, not be READY
services:
  web:
    depends_on:
      - db   # db container started, but Postgres may not be ready yet!

# CORRECT: use healthcheck
services:
  db:
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      retries: 5
  web:
    depends_on:
      db:
        condition: service_healthy  # waits until db is healthy
```

**Teacher's perspective:** "This mistake causes 'connection refused' errors. Knowing the difference between started and healthy shows real understanding."

---

### Mistake 2: Storing Secrets in docker-compose.yml

```yaml
# WRONG: password in plain text in version control!
environment:
  - DB_PASSWORD=mysecretpassword

# CORRECT: use .env file (add to .gitignore)
environment:
  - DB_PASSWORD=${DB_PASSWORD}   # reads from .env
```

`.env` file (NOT committed to git):
```
DB_PASSWORD=mysecretpassword
DB_USER=admin
```

---

### Mistake 3: Not Using Named Volumes for Databases

```yaml
# WRONG: bind mount for database — permissions issues + platform-specific
volumes:
  - ./data:/var/lib/postgresql/data

# CORRECT: named volume — managed by Docker, portable
volumes:
  - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
```

---

## 📝 Practice Problems

### Problem 1 (Difficulty: Medium)
Write a `docker-compose.yml` for a Python Flask app on port 5000 connected to a MySQL 8 database.

<details>
<summary>Click to reveal solution</summary>

```yaml
version: '3.9'

services:
  flask-app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - MYSQL_HOST=mysql-db
      - MYSQL_USER=flaskuser
      - MYSQL_PASSWORD=flaskpass
      - MYSQL_DATABASE=flaskdb
    depends_on:
      - mysql-db
    restart: on-failure

  mysql-db:
    image: mysql:8.0
    environment:
      MYSQL_DATABASE: flaskdb
      MYSQL_USER: flaskuser
      MYSQL_PASSWORD: flaskpass
      MYSQL_ROOT_PASSWORD: rootpassword
    volumes:
      - mysql-data:/var/lib/mysql

volumes:
  mysql-data:
```

</details>

---

## 📖 Common Exam Questions

### Question 1 (5 marks)
**"What is Docker Compose and why is it used?"**

Model Answer:
- Docker Compose is a tool for defining and running multi-container Docker applications — (1 mark)
- Uses a YAML file (`docker-compose.yml`) to configure services, networks, volumes — (1 mark)
- Replaces multiple `docker run` commands with a single file — (1 mark)
- `docker compose up` starts all services; `docker compose down` removes them — (1 mark)
- Example use case: web app + database + cache all started together — (1 mark)

### Question 2 (8 marks)
**"Write a docker-compose.yml for a Node.js web application with a MongoDB database."**

Mark scheme: version (1), services structure (1), node service with build/image (1), ports (1), environment (1), depends_on (1), mongo service with image (1), named volume (1).

---

## 🎤 Viva Questions

**Q: What is the difference between `docker compose stop` and `docker compose down`?**
**A:** `docker compose stop` stops the running containers but keeps them and their data intact — you can restart with `docker compose start`. `docker compose down` stops AND removes the containers, networks, and (optionally) volumes. The images are kept in both cases. For complete cleanup including volumes, use `docker compose down -v`.

**Q: How do containers in a Compose file communicate with each other?**
**A:** Containers in the same Compose file are automatically placed on a shared network. They can communicate using the **service name** as the hostname. For example, if you have a service named `db`, the web service can connect to it at `db:5432` — Docker's internal DNS resolves the service name to the container's IP address.

---

## 👨‍🏫 From a Student's Perspective

The biggest concept jump in Docker Compose for me was realising that `depends_on` is NOT a guarantee that the service is ready — just that the container started. I learned this the hard way when my Node app kept crashing because it tried to connect to Postgres before Postgres had finished initializing.

**What gets the highest marks:** In exam answers, explaining service discovery (containers talk by service name via Docker's DNS) earns bonus marks that most students miss.

<TeacherPerspective
  topic="Docker Compose"
  whatGetsFullMarks={[
    "Correct YAML indentation and structure",
    "Using named volumes for databases",
    "Explaining depends_on vs healthcheck",
    "Service communication by service name",
    "Environment variables for config"
  ]}
  commonDeductions={[
    "Wrong YAML indentation (syntax error)",
    "Hardcoding passwords in compose file",
    "Using bind mounts for database data",
    "Missing named volume declaration at bottom"
  ]}
  keywords={["services", "volumes", "networks", "depends_on", "environment", "ports", "docker compose up", "docker compose down", "healthcheck"]}
/>

<ProgressTracker noteId="/docs/web-technologies/docker/docker-compose" totalNotes={21} />
