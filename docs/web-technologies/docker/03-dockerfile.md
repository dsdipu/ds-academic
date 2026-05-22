---
title: "Dockerfile"
description: "Master Dockerfile — instructions, best practices, multi-stage builds, .dockerignore, and writing exam-ready Dockerfiles."
sidebar_position: 3
tags: [Docker, Web Technologies, Intermediate]
keywords: [dockerfile, FROM, RUN, COPY, ADD, CMD, ENTRYPOINT, EXPOSE, ENV, WORKDIR, docker build, multi-stage]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ProgressTracker from '@site/src/components/ProgressTracker';

# Dockerfile

<LastUpdated date="2026-05-22" timeTo="3 hours" difficulty="Intermediate" />

## 📌 Quick Summary (30 seconds)

A Dockerfile is a text file with instructions to **build a Docker image**. Each instruction creates a new image layer. Key instructions: `FROM` (base image), `WORKDIR` (working directory), `COPY` (copy files in), `RUN` (execute commands during build), `EXPOSE` (declare port), `CMD` (default command when container starts). Build with `docker build -t name .`

## 📚 Dockerfile Instructions

```dockerfile
# Comment — explains the instruction

# FROM: base image (always first instruction)
FROM node:18-alpine

# LABEL: metadata
LABEL maintainer="ds@example.com"
LABEL version="1.0"

# WORKDIR: set working directory (created if doesn't exist)
WORKDIR /app

# COPY: copy files from build context to container
COPY package*.json ./        # copy package.json files first
COPY . .                     # then copy everything else

# ADD: like COPY but can also extract archives and fetch URLs
ADD archive.tar.gz /app/     # extracts archive automatically
# Prefer COPY unless you need ADD's extra features

# RUN: execute command during IMAGE BUILD
RUN npm install
RUN npm run build
# Combine multiple commands to reduce layers:
RUN apt-get update && apt-get install -y \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

# ENV: set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV DB_HOST=localhost

# ARG: build-time variables (not in final image)
ARG VERSION=latest
ARG BUILD_DATE

# EXPOSE: declare which port the container listens on
EXPOSE 3000

# VOLUME: create mount point for external volumes
VOLUME ["/app/data"]

# CMD: default command when container starts (can be overridden)
CMD ["node", "server.js"]
# Or shell form: CMD node server.js (avoid — uses /bin/sh)

# ENTRYPOINT: command that always runs (not easily overridden)
ENTRYPOINT ["node"]
CMD ["server.js"]  # used as argument to ENTRYPOINT
```

## 💻 Complete Examples

### Node.js Application Dockerfile

```dockerfile
# Use official Node.js image on Alpine (smaller)
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files first (Docker layer caching optimization)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application source
COPY . .

# Create non-root user (security best practice)
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodeuser -u 1001
USER nodeuser

# Declare port
EXPOSE 3000

# Start command
CMD ["node", "server.js"]
```

### Python Flask Application

```dockerfile
FROM python:3.11-slim

WORKDIR /app

# Copy requirements first for caching
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

ENV FLASK_APP=app.py
ENV FLASK_ENV=production

CMD ["python", "-m", "flask", "run", "--host=0.0.0.0"]
```

### Multi-Stage Build (Reduces Final Image Size)

```dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build  # creates /app/build directory

# Stage 2: Production (only copy built files)
FROM nginx:alpine AS production
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Result: final image is only nginx + built files (~25MB vs ~300MB)
```

## 🎨 Dockerfile Best Practices

```
1. Use specific tags: FROM node:18.19.0-alpine3.19
   NOT: FROM node:latest (breaks when new versions release)

2. COPY package*.json first, THEN npm install
   → If code changes but dependencies don't, npm install uses cache

3. Combine RUN commands with &&
   → Each RUN = new layer = larger image
   RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

4. Use .dockerignore (like .gitignore for Docker)
   node_modules/
   .git/
   *.log
   .env

5. Run as non-root user
   RUN adduser --disabled-password appuser
   USER appuser

6. Use COPY instead of ADD unless you need tar extraction

7. Use multi-stage builds for compiled languages
```

## ⚠️ Common Mistakes

### Mistake 1: Not Using .dockerignore
```dockerfile
COPY . .   # copies node_modules (500MB!) into image
```
**Fix:** Create `.dockerignore`:
```
node_modules
.git
*.log
.env
dist
build
```

### Mistake 2: Installing Dev Dependencies in Production
```dockerfile
RUN npm install         # installs ALL deps including devDependencies

RUN npm ci --only=production  # correct: production deps only
```

### Mistake 3: Running as Root
```dockerfile
# WRONG: security risk
FROM ubuntu
# (runs as root by default)

# CORRECT
RUN useradd -m appuser
USER appuser
```

## 📖 Exam Questions

### Question (8 marks)
**"Write a Dockerfile for a Node.js Express application that runs on port 3000."**

Model Answer:
```dockerfile
FROM node:18-alpine          # (1 mark)
WORKDIR /app                 # (1 mark)
COPY package*.json ./        # (1 mark)
RUN npm install              # (1 mark)
COPY . .                     # (1 mark)
EXPOSE 3000                  # (1 mark)
CMD ["node", "server.js"]    # (1 mark)
```
+ Explanation of each instruction = 8 marks

### Build Command
```bash
docker build -t my-app:1.0 .
docker run -d -p 3000:3000 my-app:1.0
```

<ProgressTracker noteId="/docs/web-technologies/docker/dockerfile" totalNotes={21} />
