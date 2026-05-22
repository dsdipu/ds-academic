---
title: "Docker Commands"
description: "Essential Docker commands — pull, run, ps, stop, rm, exec, logs, volumes, and networks. Complete with exam-ready cheat sheet."
sidebar_position: 2
tags: [Docker, Web Technologies, Beginner]
keywords: [docker commands, docker run, docker ps, docker stop, docker rm, docker exec, docker logs, docker volume]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ProgressTracker from '@site/src/components/ProgressTracker';

# Docker Commands

<LastUpdated date="2026-05-22" timeTo="2 hours" difficulty="Beginner" />

## 📌 Quick Summary (30 seconds)

The 10 most important Docker commands: `docker pull` (download image), `docker run` (create+start container), `docker ps` (list containers), `docker stop` (stop container), `docker rm` (delete container), `docker images` (list images), `docker rmi` (delete image), `docker exec` (run command inside container), `docker logs` (see container output), `docker-compose up` (start multi-container app).

## 📚 Commands by Category

### Image Commands

```bash
# Download image from Docker Hub
docker pull nginx                    # latest tag
docker pull node:18-alpine           # specific version

# List local images
docker images
docker image ls                      # same as above

# Remove image
docker rmi nginx
docker image rm nginx:latest

# Build image from Dockerfile
docker build -t my-app:1.0 .         # -t = tag name, . = build context

# Tag an image
docker tag my-app:1.0 my-app:latest

# Push to Docker Hub
docker login
docker push username/my-app:1.0

# Image details
docker inspect nginx
docker history nginx                 # show image layers
```

### Container Commands

```bash
# Create and start container
docker run nginx
docker run -d nginx                  # -d = detached (background)
docker run -d -p 8080:80 nginx       # -p host:container port mapping
docker run -d --name my-nginx nginx  # --name = custom container name
docker run -it ubuntu bash           # -it = interactive terminal
docker run --rm nginx                # --rm = delete when stopped
docker run -d -p 8080:80 \
  -v /host/data:/container/data \    # -v = volume mount
  --name app nginx

# List containers
docker ps                            # running containers only
docker ps -a                         # all containers (including stopped)

# Start/stop containers
docker start my-nginx                # start a stopped container
docker stop my-nginx                 # graceful stop (SIGTERM)
docker kill my-nginx                 # force stop (SIGKILL)
docker restart my-nginx

# Remove container
docker rm my-nginx                   # must be stopped first
docker rm -f my-nginx                # force remove running container

# Execute command inside running container
docker exec -it my-nginx bash        # open interactive shell
docker exec my-nginx ls /etc/nginx   # run single command
docker exec my-nginx cat /etc/nginx/nginx.conf

# View logs
docker logs my-nginx                 # all logs
docker logs -f my-nginx              # follow/stream logs
docker logs --tail 50 my-nginx       # last 50 lines

# Copy files
docker cp my-nginx:/etc/nginx/nginx.conf ./nginx.conf  # container → host
docker cp ./index.html my-nginx:/usr/share/nginx/html/ # host → container

# Container info
docker inspect my-nginx
docker stats my-nginx                # live CPU/memory usage
docker top my-nginx                  # running processes inside container
```

### Volume Commands

```bash
# Create volume
docker volume create my-data

# List volumes
docker volume ls

# Inspect volume
docker volume inspect my-data

# Use volume in container
docker run -d -v my-data:/app/data nginx

# Bind mount (host directory)
docker run -d -v /home/user/data:/app/data nginx
docker run -d -v $(pwd):/app nginx   # current directory

# Remove volume
docker volume rm my-data
docker volume prune                  # remove all unused volumes
```

### Network Commands

```bash
# List networks
docker network ls

# Create network
docker network create my-network

# Run container in network
docker run -d --network my-network --name web nginx
docker run -d --network my-network --name db mysql

# Containers in same network can communicate by container name
# web container can reach db at hostname "db"

# Connect existing container to network
docker network connect my-network my-container
```

### System Cleanup

```bash
# Remove all stopped containers
docker container prune

# Remove unused images
docker image prune
docker image prune -a               # remove ALL unused images

# Remove everything unused
docker system prune
docker system prune -a --volumes    # aggressive: everything

# Disk usage
docker system df
```

## 🎨 Visual: docker run Flags

```
docker run -d -p 8080:80 -v $(pwd):/app --name web-app --rm nginx
           │   │          │              │          │
           │   │          │              │          └── delete on stop
           │   │          │              └── container name
           │   │          └── bind mount: current dir → /app
           │   └── port: localhost:8080 → container:80
           └── detached (background)
```

## 💻 Complete Workflow Example

```bash
# 1. Pull a Node.js app image
docker pull node:18-alpine

# 2. Run it interactively to test
docker run -it --rm node:18-alpine node --version

# 3. Run your app
docker run -d \
  --name my-node-app \
  -p 3000:3000 \
  -v $(pwd):/app \
  -w /app \
  node:18-alpine \
  node server.js

# 4. Check it's running
docker ps

# 5. Check logs
docker logs my-node-app

# 6. Open shell inside container
docker exec -it my-node-app sh

# 7. Stop and clean up
docker stop my-node-app
docker rm my-node-app
```

## ⚠️ Common Mistakes

### Mistake: Forgetting Port Mapping
```bash
docker run nginx           # running but can't access!
docker run -p 8080:80 nginx  # now accessible at localhost:8080
```

### Mistake: Editing Files in Container (Data Loss)
Any changes made inside a container (without volumes) are **lost when the container is removed**.
```bash
# WRONG: data stored inside container
docker run -d mysql   # database data lost on container delete!

# CORRECT: use a volume for persistent data
docker run -d -v mysql-data:/var/lib/mysql mysql
```

## 📖 Exam Cheat Sheet

| Task | Command |
|------|---------|
| Run nginx on port 8080 | `docker run -d -p 8080:80 nginx` |
| List running containers | `docker ps` |
| Open shell in container | `docker exec -it NAME bash` |
| Stop container | `docker stop NAME` |
| Delete container | `docker rm NAME` |
| Delete image | `docker rmi IMAGE` |
| See container logs | `docker logs NAME` |
| Cleanup stopped containers | `docker container prune` |

<ProgressTracker noteId="/docs/web-technologies/docker/docker-commands" totalNotes={21} />
