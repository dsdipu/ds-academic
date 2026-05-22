---
title: "Docker Introduction"
description: "Understand Docker, containerization, images, containers, and how Docker differs from virtual machines. With exam questions and practical examples."
sidebar_position: 1
tags: [Docker, Web Technologies, Intermediate]
keywords: [docker, containerization, docker image, docker container, virtual machine, dockerfile, docker hub]
last_update:
  date: 2026-05-22
---

import LastUpdated from '@site/src/components/LastUpdated';
import ExamSidebar from '@site/src/components/ExamSidebar';
import TeacherPerspective from '@site/src/components/TeacherPerspective';
import ProgressTracker from '@site/src/components/ProgressTracker';
import DownloadPDF from '@site/src/components/DownloadPDF';

# Docker Introduction

<LastUpdated date="2026-05-22" timeTo="3–4 hours" difficulty="Intermediate" />

<ExamSidebar
  examWeight="10–15% of exam"
  questionTypes={["Docker vs VM comparison (5–8 marks)", "Basic command syntax", "Explain image vs container"]}
  keywords={["container", "image", "Dockerfile", "Docker Hub", "virtualization", "namespace", "isolation"]}
  timeAllocation="15–20 minutes"
  lastYear="Docker vs VM comparison — 2024 Final Exam"
/>

---

## 📌 Quick Summary (30 seconds)

Docker is a platform for running applications inside **containers** — lightweight, isolated environments that include everything an app needs. The core distinction: an **image** is a read-only blueprint (like a class in OOP), and a **container** is a running instance of that image (like an object). Docker solves the "it works on my machine" problem by packaging the app with its entire environment.

---

## 📚 Detailed Explanation

### The Problem Docker Solves

Imagine this:
- Developer builds an app on Windows with Node.js 18
- Server runs Ubuntu with Node.js 14
- App breaks in production

**Before Docker:** "It works on my machine" was a real, painful problem. Setting up environments was manual, error-prone, and non-reproducible.

**With Docker:** The entire environment (OS libraries, runtime, config) is packaged with the application into a **container**. The container runs the same everywhere.

### What is Containerization?

Containerization is the process of packaging an application and all its dependencies into a **container** — an isolated, self-contained unit that runs consistently across different computing environments.

Key properties of containers:
- **Isolated** — each container has its own filesystem, network, and processes
- **Portable** — runs the same on developer machine, CI server, and production
- **Lightweight** — shares the host OS kernel (unlike VMs)
- **Reproducible** — same image always creates the same container

### Docker Architecture

```
┌─────────────────────────────────────────┐
│           Docker Client (CLI)           │
│   docker build   docker run   docker ps │
└──────────────┬──────────────────────────┘
               │ REST API
┌──────────────▼──────────────────────────┐
│           Docker Daemon (dockerd)       │
│  Manages images, containers, networks  │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│         Docker Objects                  │
│   Images │ Containers │ Volumes │ Networks│
└─────────────────────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│           Docker Hub (Registry)         │
│   Public repository of Docker images   │
└─────────────────────────────────────────┘
```

### Docker Images vs Containers

This is the most important concept distinction in Docker:

| Concept | Image | Container |
|---------|-------|-----------|
| What is it | Read-only template | Running instance of an image |
| Analogy | Class in OOP | Object (instance) of the class |
| Another analogy | Recipe | Meal cooked from recipe |
| Can be modified? | No (immutable) | Yes (writes go to container layer) |
| Stored where | Docker Hub / local registry | Running in memory/disk |
| Created with | `docker build` | `docker run` |

```bash
# Image: the blueprint
docker pull nginx          # Download image
docker images              # List images

# Container: the running instance
docker run nginx           # Create + start container from image
docker ps                  # List running containers
```

### Docker vs Virtual Machines — Critical Comparison

| Feature | Docker Container | Virtual Machine |
|---------|-----------------|-----------------|
| OS | Shares host OS kernel | Has its own OS |
| Size | MBs | GBs |
| Start time | Seconds | Minutes |
| Resource usage | Low | High |
| Isolation | Process-level | Hardware-level |
| Portability | Excellent | Good |
| Use case | Microservices, apps | Full OS testing, legacy apps |

```
Virtual Machine Architecture:
┌──────────────┐ ┌──────────────┐
│  App A       │ │  App B       │
│  Guest OS    │ │  Guest OS    │
└──────┬───────┘ └──────┬───────┘
       │                │
┌──────▼────────────────▼───────┐
│     Hypervisor (Type 2)       │
├───────────────────────────────┤
│     Host Operating System     │
├───────────────────────────────┤
│     Physical Hardware         │
└───────────────────────────────┘

Docker Architecture:
┌──────────┐ ┌──────────┐ ┌──────────┐
│Container1│ │Container2│ │Container3│
│  App A   │ │  App B   │ │  App C   │
└─────┬────┘ └─────┬────┘ └─────┬────┘
      │             │             │
┌─────▼─────────────▼─────────────▼────┐
│         Docker Engine (Daemon)       │
├──────────────────────────────────────┤
│         Host Operating System        │
├──────────────────────────────────────┤
│         Physical Hardware            │
└──────────────────────────────────────┘
```

**Key insight:** Docker containers share the host OS kernel. VMs have their own full OS. This makes containers **much lighter** but slightly **less isolated**.

### Docker Hub

Docker Hub (`hub.docker.com`) is Docker's public registry — a collection of pre-built images.

Common official images:
```bash
docker pull node:18-alpine    # Node.js 18 on Alpine Linux
docker pull python:3.11       # Python 3.11
docker pull nginx:latest      # Nginx web server
docker pull mysql:8.0         # MySQL database
docker pull ubuntu:22.04      # Ubuntu 22.04
```

Format: `image-name:tag` (tag = version; `latest` if omitted)

---

## 🎨 Visual Diagram: Image Layers

```
Docker Image (nginx:latest) — Layered Structure:
┌─────────────────────────────────┐
│  Layer 4: nginx config files    │ ← app-specific
├─────────────────────────────────┤
│  Layer 3: nginx binary          │ ← application
├─────────────────────────────────┤
│  Layer 2: system libraries      │ ← dependencies
├─────────────────────────────────┤
│  Layer 1: Alpine Linux base     │ ← OS base layer
└─────────────────────────────────┘

Container adds a WRITABLE layer on top:
┌─────────────────────────────────┐
│  Writable Layer (container)     │ ← changes written here
├─────────────────────────────────┤
│  All Image Layers (read-only)   │
└─────────────────────────────────┘
```

**Explanation:** Docker images are built in layers. Each `RUN`, `COPY`, or `ADD` instruction in a Dockerfile creates a new layer. Layers are cached and shared between images — if two images share the same base layer, it's stored only once. When a container runs, Docker adds a writable layer on top.

---

## 💻 Code Examples

### First Docker Commands

```bash
# 1. Check Docker is installed
docker --version
docker info

# 2. Pull an image from Docker Hub
docker pull hello-world

# 3. Run a container
docker run hello-world

# 4. Run nginx web server in background (-d = detached, -p = port mapping)
docker run -d -p 8080:80 --name my-nginx nginx

# 5. Open http://localhost:8080 in browser → see nginx page

# 6. See running containers
docker ps

# 7. See all containers (including stopped)
docker ps -a

# 8. Stop a container
docker stop my-nginx

# 9. Remove a container
docker rm my-nginx

# 10. List images
docker images

# 11. Remove an image
docker rmi nginx
```

### Running an Interactive Container

```bash
# Run Ubuntu and get a bash shell (-it = interactive terminal)
docker run -it ubuntu:22.04 bash

# Now you're inside the container!
root@abc123:/# ls
root@abc123:/# apt update
root@abc123:/# exit

# The container stops when you exit
```

---

## ⚠️ Common Mistakes to Avoid

### Mistake 1: Confusing Images and Containers

**What students say:**
> "I deleted the container and my image is gone."

**Why it's wrong:**
Containers and images are separate things. Deleting a container (`docker rm`) does NOT delete the image (`docker rmi`). The container is a running instance — the image remains.

**The correct understanding:**
```bash
docker images          # Show images (permanent, local)
docker ps -a           # Show containers (instances, temporary)

docker rm container_id   # Only removes the container
docker rmi image_name    # Only removes the image
# You need both commands to clean up completely
```

**Teacher's perspective:** "This mistake appears frequently in practical exam questions. Students confuse rm and rmi, or think they're the same thing."

---

### Mistake 2: Not Using Port Mapping

**What students write:**
```bash
docker run nginx
```
Then wonder: "Why can't I access it in my browser?"

**Why it's wrong:**
By default, ports inside the container are NOT exposed to your host machine. You must explicitly map container ports to host ports.

**The correct way:**
```bash
# -p host_port:container_port
docker run -d -p 8080:80 nginx
#              ↑         ↑
#           host port   container port
# Access at: http://localhost:8080
```

**Teacher's perspective:** "Port mapping is tested in practical sections. The format `-p host:container` must be memorised."

---

### Mistake 3: Running Without the `-d` Flag for Web Servers

**What students write:**
```bash
docker run -p 8080:80 nginx
```
The terminal hangs/blocks. Students then close the terminal and the container stops.

**The correct way:**
```bash
# -d runs the container in detached (background) mode
docker run -d -p 8080:80 nginx

# Check it's running:
docker ps

# See logs even when detached:
docker logs container_id
```

---

## 📝 Practice Problems

### Problem 1 (Difficulty: Easy)
Write the Docker commands to:
1. Download the `python:3.11-slim` image
2. Run a container from it named "my-python" interactively
3. After exiting, remove the container

<details>
<summary>Click to reveal solution</summary>

```bash
# 1. Download image
docker pull python:3.11-slim

# 2. Run interactive container with name
docker run -it --name my-python python:3.11-slim bash

# 3. Remove container after exiting
docker rm my-python

# Alternative: auto-remove when container exits
docker run -it --rm --name my-python python:3.11-slim bash
# --rm flag automatically removes container when it exits
```

</details>

### Problem 2 (Difficulty: Medium)
**"A developer says 'Docker and virtual machines do the same thing.' Agree or disagree? Explain."**

<details>
<summary>Click to reveal solution</summary>

**Disagree — they achieve similar goals differently, with important differences.**

Both Docker and VMs provide isolated environments for running applications, but:

1. **Architecture**: VMs include a full guest OS; containers share the host OS kernel
2. **Size**: VMs are gigabytes; container images are typically megabytes
3. **Performance**: VMs have overhead from running a full OS; containers start in seconds
4. **Isolation level**: VMs are hardware-level isolated; containers are process-level isolated
5. **Use case**: VMs are better for running different OS types (e.g., Windows app on Linux). Containers excel at packaging consistent application environments.

Docker is NOT a replacement for VMs in all cases — they can coexist. Docker often runs INSIDE a VM in production.

</details>

---

## 📖 Common Exam Questions

### Question 1 (5 marks)
**"What is Docker? Explain the difference between a Docker image and a Docker container."**

**Model Answer Structure:**
- Docker definition: platform for building/running containers — (1 mark)
- Image: read-only blueprint/template — (1 mark)
- Container: running instance of an image — (1 mark)
- Analogy (class vs object, or recipe vs meal) — (1 mark)
- Example commands (`docker build` vs `docker run`) — (1 mark)

### Question 2 (8 marks)
**"Compare Docker containers with virtual machines."**

**Model Answer Structure:**
- Introduction: both provide isolation — (1 mark)
- Architecture difference (shared kernel vs own OS) — (2 marks)
- Size comparison (MB vs GB) — (1 mark)
- Performance comparison (seconds vs minutes) — (1 mark)
- Table comparison with 3+ rows — (2 marks)
- Conclusion: containers more efficient, VMs more isolated — (1 mark)

---

## 🎤 Viva/Interview Questions

**Q1: What problem does Docker solve?**
**A1:** Docker solves the "works on my machine" problem. Before Docker, an application might work on a developer's Windows machine but fail on a Linux production server due to different OS versions, library versions, or configurations. Docker packages the application WITH its entire environment into a container, ensuring it runs identically everywhere — development, testing, and production.

**Q2: What is Docker Hub?**
**A2:** Docker Hub is Docker's official public registry — a cloud-based service where Docker users can share, store, and download container images. It hosts thousands of official images for popular software (nginx, mysql, node, python). You use `docker pull image-name` to download from Docker Hub. Companies can also create private repositories for their own images.

**Q3: What happens when you delete a container?**
**A3:** Deleting a container (`docker rm`) removes the running instance and its writable layer — any data written inside the container is lost. The image it was created from remains unchanged. This is why persistent data (like databases) must be stored in Docker volumes, not inside the container.

---

## 👨‍🏫 From a Student's Perspective

The image vs container confusion hit me hard in my first Docker lab. I kept deleting images when I meant to delete containers. The analogy that finally clicked: **image = class, container = object**. You create multiple objects from one class. You can run multiple containers from one image. The class code doesn't change just because you delete an object.

**For exams:** The Docker vs VM comparison is almost guaranteed. Memorise the table. Key points examiners love: "containers share the host OS kernel" and "container images are much smaller (MBs vs GBs)".

---

## 🔗 Next Steps

- **Recommended:** [Docker Commands →](/docs/web-technologies/docker/02-docker-commands)
- **Related:** [Dockerfile →](/docs/web-technologies/docker/03-dockerfile)

## 📥 Resources

<DownloadPDF filename="docker-introduction" label="Download Docker Intro PDF" />

<TeacherPerspective
  topic="Docker Introduction"
  whatGetsFullMarks={["Image vs container analogy", "Architecture diagram or comparison table", "Mentioning shared OS kernel", "Correct command syntax in examples"]}
  commonDeductions={["Saying containers include their own OS", "Confusing docker rm with docker rmi", "Missing port mapping explanation"]}
  keywords={["container", "image", "Dockerfile", "Docker Hub", "isolation", "kernel", "virtualization", "registry"]}
/>

<ProgressTracker noteId="/docs/web-technologies/docker/docker-intro" totalNotes={21} />
