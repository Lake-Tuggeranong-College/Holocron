---
theme: simple
highlightTheme: zenburn
css: css/holocronSlides.css
---
# What is Docker?

**Docker** is a containerisation platform that allows developers to package, deploy, and run applications in isolated environments called **containers**.

note:
A way to package your application and its dependencies together so that it can run on any computer, regardless of the operating system or software that is installed. 

It also keeps your application isolated from other applications, so they don't interfere with each other.

---
# How Docker is Used

- Application development and testing
- Deployment and scaling
- Cloud computing:
- Microservices architecture:

note:
- **Application development and testing:** Allows developers to create and test applications in isolated environments without affecting the host system.
- **Deployment and scaling:** Enables easy deployment and scaling of applications across multiple servers and environments.
- **Cloud computing:** Facilitates the deployment and management of applications on cloud platforms such as AWS, Azure, and GCP.
- **Microservices architecture:** Supports the development and deployment of independent, reusable microservices that can communicate with each other.


---
# Docker and Host OS

```mermaid
graph LR
subgraph Host Operating System
    A[Applications A]
    B[Libraries B]
    C[Kernel C]
end
subgraph Docker Container
    D[Application D]
    E[Libraries E]
    F[Docker Runtime F]
end
C --> F
F --> D
F --> E
```


note:

- The host operating system (OS) consists of applications (A), libraries (B), and the kernel (C).
- Docker creates a container that includes the application (D), its necessary libraries (E), and the Docker runtime (F).
- The Docker runtime acts as a bridge between the container and the host OS, allowing the container to access the host's kernel and resources.

---
# Docker vs. Other Virtualisation

|Feature|Docker|Virtual Machines|
|---|---|---|
|**Resource usage**|Lightweight|Heavy resource consumption|
|**Isolation**|Shares kernel with host|Has its own isolated kernel|
|**Startup time**|Fast|Slow|
|**Use case**|Containerized applications|Full operating system virtualization|

Notes:

- Docker containers share the host's kernel, reducing overhead and improving resource utilization.
- Virtual machines have their own isolated kernel, which incurs more resource consumption and slower startup times.

---

# What is a Kernel?

- The core of an operating system that manages hardware resources, provides low-level services, and controls the execution of applications.
- Docker containers share the host's kernel, which reduces overhead and improves resource utilisation.

***The kernel of an operating system is like the conductor of an orchestra.***


note:

**Just as the conductor:**

- Coordinates the performance
- Provides a common language
- Maintains order
- Adapts to changes

Without a kernel, an operating system would be like an orchestra without a conductor - a chaotic and uncoordinated mess.

**Key Points:**

- The kernel is the core of the operating system.
- It manages hardware resources, provides low-level services, and controls the execution of applications.
- The kernel ensures that all components work together smoothly and efficiently.

---



# Efficiency of Docker

- Resource isolation
- Portability
- Reduced downtime
- Automation

**Notes:**

- Containers share the host's kernel, reducing overhead and improving resource utilisation.
- Docker images can be easily moved between different hosts and platforms, ensuring consistent performance.
- Containers can be quickly stopped and started, minimising downtime during application updates.
- Docker integrates with CI/CD pipelines, automating the build, deployment, and testing processes.

---

# Benefits of Docker


- Improved efficiency
- Increased portability
- Simplified deployment
- Enhanced security
- Cost reduction

**Notes:**

- Reduced resource consumption and faster startup times improve efficiency.
- Consistent performance across different environments increases portability.
- Easy deployment and scaling simplifies the deployment process.
- Isolation of applications from the host system enhances security.
- More efficient use of resources leads to reduced infrastructure costs.


---

# Questions?

If you have any questions, please ask!

![[contactDetails.png]]