# Introduction to Docker

Docker is a popular [[containerisation]] platform that allows developers to package, ship, and run applications in containers. In this page, we'll explore the high-level concepts of Docker and how it differs from other forms of [[Virtualisation]].

## What is Docker?

---

Docker is an open-source project created by Docker Inc. that allows you to create, deploy, and manage containers. Containers are lightweight and portable, providing a consistent and reliable way to run applications across different environments.

## How does Docker work?

Docker uses the following components:

- Images: Docker images are templates for creating containers. Images contain the application code, libraries, and settings required to run an application.
- Containers: Containers are instances of Docker images. They provide a isolated environment for running applications, with their own file system, network stack, and process space.

## Key Concepts

---

Here are some key concepts to understand when working with Docker:

- Docker Hub: A registry of officially maintained Docker images.
- Pull: Downloading an image from Docker Hub or another repository.
- Push: Uploading an image to Docker Hub or another repository.
- Build: Creating a new Docker image from a Dockerfile.

## Differences from Virtualisation

---

While Docker and virtualisation share some similarities, there are key differences:

- Lightweight vs. Heavyweight: Containers are much lighter than virtual machines, requiring fewer resources to run.
- Isolation vs. Segmentation: Containers provide isolation at the operating system level, while virtualisation provides segmentation at the hypervisor level.
- Resource Overhead: Docker containers have less overhead compared to virtual machines.

## Comparison with Virtual Machines

Here's a comparison of Docker containers and virtual machines:

|                   | Containers             | Virtual Machines |
| ----------------- | ---------------------- | ---------------- |
| Resource Overhead | Low                    | High             |
| Isolation         | Operating System Level | Hypervisor Level |
| Portability       | Easy                   | Difficult        |

## Benefits of Docker

---

Docker offers several benefits, including:

- Faster Startup Times: Containers start up much faster than virtual machines.
- Improved Resource Utilisation: Containers use fewer resources than virtual machines.
- Easier Deployment and Management: Docker provides a consistent and reliable way to deploy and manage applications.

## External Resources

For more information on Docker, check out the following external resources:

- [Docker Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [What is Docker? | Docker Blog](https://blog.docker.com/2016/03/what-is-docker/)