**Project Type:** Collaborative Red Team / Blue Team Security & Microservices Lab

## 1. Project Overview & Learning Objectives

In this project, student teams will build, attack, and secure a multi-machine distributed task-processing system. One student machine will host the cloud backend services using **Docker Compose**, while the second student machine acts as the client and external adversary.

Students will apply distributed architecture principles alongside practical cybersecurity testing, including packet sniffing, request interception, log spoofing, and API hardening.

```
       [ STUDENT A: Client & Attacker ]
     (Burp Suite / Wireshark / Custom Scripts)
                        │
                        │ Network Traffic (ONE / CyberRange)
                        │ HTTP / AMQP Traffic
                        ▼
       ┌─────────────────────────────────┐
       │   STUDENT B: Docker Host        │
       │                                 │
       │  ┌───────────────────────────┐  │
       │  │  Producer API (:5000)     │  │
       │  └─────────────┬─────────────┘  │
       │                │                │
       │  ┌─────────────▼─────────────┐  │
       │  │  RabbitMQ Broker (:5672)  │  │
       │  └─────────────┬─────────────┘  │
       │                │                │
       │  ┌─────────────▼─────────────┐  │
       │  │  Worker Service (Scalable)│  │
       │  └───────────────────────────┘  │
       └─────────────────────────────────┘
```

### Key Learning Outcomes

- **Distributed Communication:** Understand inter-service messaging via RabbitMQ queues and HTTP REST APIs.
- **Network Analysis:** Use **Wireshark** to capture and analyse unencrypted cleartext microservice traffic across the school network.
- **Ethical Hacking & Interception:** Use **Burp Suite** to perform Man-in-the-Middle (MitM) request tampering and parameter pollution.
- **Defensive Hardening:** Implement input validation, credential management, network isolation, and API authentication.

## 2. Group Roles & Workflow

Each group of 2 divides responsibilities into **Red Team** (Offensive/Testing) and **Blue Team** (Defensive/Architecture) roles during Phase 2, then swaps or collaborates on fixes in Phase 3.

- **Student A (Client & Red Team Tester):**
    - Configures client requests and testing tools (Burp Suite, Wireshark, Postman/curl).
    - Executes security testing scenarios from an external machine on the network against Student B's Docker host.
    - Documents security vulnerabilities and proof-of-concept exploits.
- **Student B (Infrastructure Host & Blue Team Defender):**
    - Deploys and manages the Docker Compose environment on their local machine.
    - Binds container ports to allow network traffic from Student A.
    - Implements defensive code fixes, access controls, and log sanitisation.

## 3. Phase 1: Environment Setup & Cross-Machine Deployment

### Step 1.1: Network Configuration (ONE / CyberRange)

1. Ensure both student computers are connected to the **ONE** network or the dedicated **CyberRange** lab network.
2. **Student B** opens a terminal and identifies their local IPv4 address assigned by the network:
    - **Windows:** `ipconfig` (Look for the active Wireless LAN or Ethernet IPv4 address, e.g., `10.x.x.x` or `192.168.x.x`)
    - **macOS/Linux:** `ifconfig` or `ip a`
3. **Student A** verifies cross-machine connectivity by pinging Student B's IP address:
    ```bash
    ping <STUDENT_B_IP>
    ```

### Step 1.2: Student B Deploys Docker Compose

**Student B** creates the base project directory in VS Code on their local machine using the following directory layout:

```
distributed-lab/
├── docker-compose.yml       <-- Root orchestration file
├── producer/
│   ├── Dockerfile          <-- Non-hardened Producer Dockerfile
│   ├── main.py
│   └── requirements.txt
└── worker/
    ├── Dockerfile          <-- Non-hardened Worker Dockerfile
    ├── worker.py
    └── requirements.txt
```
#### Initial Producer Service Files (Phase 1 Baseline)

- **Storage Location:** `producer/requirements.txt`
    
    ```
    flask==3.0.2
    pika==1.3.2
    ```
    
- **Storage Location:** `producer/main.py`
    
    ```
    from flask import Flask, request, jsonify
    import pika, json, os
    
    app = Flask(__name__)
    RABBITMQ_HOST = os.getenv('RABBITMQ_HOST', 'localhost')
    
    def get_channel():
        connection = pika.BlockingConnection(pika.ConnectionParameters(host=RABBITMQ_HOST))
        channel = connection.channel()
        channel.queue_declare(queue='task_queue', durable=True)
        return connection, channel
    
    @app.route('/health', methods=['GET'])
    def health():
        return jsonify({"status": "healthy"}), 200
    
    @app.route('/submit-job', methods=['POST'])
    def submit_job():
        data = request.get_json() or {}
    
        # Unhardened baseline: Passes raw dictionary directly without validation
        connection, channel = get_channel()
        channel.basic_publish(
            exchange='',
            routing_key='task_queue',
            body=json.dumps(data),
            properties=pika.BasicProperties(delivery_mode=2)
        )
        connection.close()
        return jsonify({"message": f"Job {data.get('job_id', 'unknown')} pushed to queue.", "status": "SUCCESS"}), 200
    
    if __name__ == '__main__':
        app.run(host='0.0.0.0', port=5000)
    ```
    
- **Storage Location:** `producer/Dockerfile`
    
    ```
    FROM python:3.11-slim
    WORKDIR /app
    COPY requirements.txt .
    RUN pip install -r requirements.txt
    COPY . .
    EXPOSE 5000
    CMD ["python", "main.py"]
    ```
    

#### Initial Worker Service Files (Phase 1 Baseline)

- **Storage Location:** `worker/requirements.txt`
    
    ```
pika==1.3.2
    ```
    
- **Storage Location:** `worker/worker.py`
    
    ```
import pika, json, os, socket

RABBITMQ_HOST = os.getenv('RABBITMQ_HOST', 'localhost')
WORKER_ID = socket.gethostname()

def callback(ch, method, properties, body):
	try:
		data = json.loads(body)
		job_id = data.get('job_id', 'unknown')

		# Unhardened baseline: Direct print statement vulnerable to log injection (\n)
		print(f"[WORKER {WORKER_ID}] Processing Job ID: {job_id}", flush=True)

	except Exception as e:
		print(f"[WORKER {WORKER_ID}] Error processing message: {e}", flush=True)

	ch.basic_ack(delivery_tag=method.delivery_tag)

def main():
	connection = pika.BlockingConnection(pika.ConnectionParameters(host=RABBITMQ_HOST))
	channel = connection.channel()
	channel.queue_declare(queue='task_queue', durable=True)
	channel.basic_qos(prefetch_count=1)
	channel.basic_consume(queue='task_queue', on_message_callback=callback)

	print(f"[* WORKER {WORKER_ID}] Waiting for messages...", flush=True)
	channel.start_consuming()

if __name__ == '__main__':
	main()
    ```
    
- **Storage Location:** `worker/Dockerfile`
    
    ```
    FROM python:3.11-slim
    WORKDIR /app
    COPY requirements.txt .
    RUN pip install -r requirements.txt
    COPY . .
    CMD ["python", "worker.py"]
    ```


`docker-compose.yml`:

```yml
services:
  rabbitmq:
    image: rabbitmq:3-management-alpine
    container_name: rabbitmq
    ports:
      - "0.0.0.0:5672:5672"     # AMQP Port exposed to network
      - "0.0.0.0:15672:15672"   # Management Dashboard exposed to network
    healthcheck:
      test: ["CMD", "rabbitmq-diagnostics", "-q", "ping"]
      interval: 5s
      timeout: 5s
      retries: 5

  producer:
    build: ./producer
    ports:
      - "0.0.0.0:5000:5000"     # Web API exposed to network
    environment:
      - RABBITMQ_HOST=rabbitmq
    depends_on:
      rabbitmq:
        condition: service_healthy

  worker:
    build: ./worker
    environment:
      - RABBITMQ_HOST=rabbitmq
    depends_on:
      rabbitmq:
        condition: service_healthy
```

Student B launches the stack:

```bash
docker compose up --build -d
```

### Step 1.3: Verify Cross-Machine Communication

From **Student A's machine**, send a test request to Student B's API over the ONE / CyberRange network:

```
curl -X POST http://<STUDENT_B_IP>:5000/submit-job \
  -H "Content-Type: application/json" \
  -d '{"job_id": "lab_test_01", "user": "student_a"}'
```

_Expected Result:_ Student A receives `{"message": "Job lab_test_01 pushed to queue.", "status": "SUCCESS"}` and Student B sees the job processed in their container logs (`docker compose logs -f worker`).

## 4. Phase 2: Red Team Ethical Hacking & Vulnerability Analysis

Students carry out authorised testing techniques in this isolated classroom environment.

### Exercise 1: Network Packet Sniffing with Wireshark

- **Objective:** Demonstrate that unencrypted API and broker communications transmit sensitive data in cleartext across the network.
- **Tester:** Student A (or Student B capturing on the host interface).

**Instructions:**

1. Open **Wireshark** on Student A's machine.
2. Select the active network interface connected to the **ONE** or **CyberRange** network.
3. Apply a display filter to capture traffic destined for Student B:
    ```
    ip.addr == <STUDENT_B_IP> && (tcp.port == 5000 || tcp.port == 5672)
    ```
    
4. Student A sends a job containing simulated sensitive information (e.g., a mock API key or user credentials):
    
    ```
    curl -X POST http://<STUDENT_B_IP>:5000/submit-job \
      -H "Content-Type: application/json" \
      -d '{"job_id": "auth_task", "secret_key": "SUPER_SECRET_TOKEN_123"}'  
    ```
    
5. In Wireshark, locate the HTTP POST packet, right-click it, and select **Follow -> TCP Stream**.
    
6. **Analysis Question:** Is the payload encrypted? What risk does this pose on shared networks like ONE?
    

### Exercise 2: Request Interception & Parameter Pollution via Burp Suite

- **Objective:** Intercept and modify outgoing HTTP payloads before they arrive at the Producer API.
- **Tester:** Student A.
    

**Instructions:**

1. Open **Burp Suite Community Edition** on Student A's machine.
    
2. Go to **Proxy -> Intercept** and ensure **Intercept is ON**.
    
3. Configure your HTTP client (e.g., Postman or browser) to use Burp Suite as its proxy (`127.0.0.1:8080`).
    
4. Submit a request targeting Student B's API endpoint.
    
5. Burp Suite will catch the request in transit. Student A modifies the request body before clicking **Forward**:
    
    - _Original Payload:_ `{"job_id": "task_100", "priority": "low"}`
        
    - _Tampered Payload:_ `{"job_id": "OVERRIDE_TASK", "priority": "CRITICAL", "admin": true}`
        
6. **Analysis Question:** Did Student B's Producer API accept the unvalidated `admin` parameter? How did the worker process it?
    

### Exercise 3: Direct Broker Injection & Log Spoofing

- **Objective:** Bypass the API layer entirely by exploiting exposed management ports and default credentials over the network.
    
- **Tester:** Student A.
    

**Instructions:**

1. Student A opens a web browser and navigates to Student B's RabbitMQ Dashboard:
    
    `http://<STUDENT_B_IP>:15672`
    
2. Attempt authentication using factory default credentials:
    
    - **Username:** `guest`
        
    - **Password:** `guest`
        
3. Navigate to **Queues** -> click `task_queue` -> scroll to **Publish message**.
    
4. Inject a malformed or spoofed payload directly into the queue:
    
    ```
    {"job_id": "JOB_999\n[SYSTEM ALERT] Unauthorised Root Access Granted!"}
    
    
    ```
    
5. Student B checks container logs (`docker compose logs worker`).
    
6. **Analysis Question:** How does unsanitised output corrupt log readability or trigger false log alarms?
    

## 5. Phase 3: Blue Team Defensive Hardening

Now, both students work together to implement defences against the vulnerabilities discovered in Phase 2.

### Defence 1: Input Validation & Schema Enforcement

Update `producer/main.py` on Student B's system to validate JSON structures and reject unauthorised or unexpected parameters.

```
from flask import Flask, request, jsonify
import pika, json, os

app = Flask(__name__)
RABBITMQ_HOST = os.getenv('RABBITMQ_HOST', 'localhost')

# Allowed fields schema
ALLOWED_FIELDS = {'job_id', 'user'}

@app.route('/submit-job', methods=['POST'])
def submit_job():
    data = request.get_json()
    
    # 1. Reject non-JSON or empty requests
    if not data:
        return jsonify({"error": "Invalid or missing JSON body"}), 400
    
    # 2. Strict key checking (Defends against parameter injection)
    extra_keys = set(data.keys()) - ALLOWED_FIELDS
    if extra_keys:
        return jsonify({"error": f"Unauthorised fields detected: {list(extra_keys)}"}), 422

    # 3. Data type validation
    if not isinstance(data.get('job_id'), str) or len(data['job_id']) > 30:
        return jsonify({"error": "Invalid job_id format"}), 400

    # Proceed to publish sanitised payload...
    # [RabbitMQ publishing code here]
    
    return jsonify({"status": "SUCCESS", "message": "Job accepted"}), 202


```

### Defence 2: Network Isolation & Credential Hardening

Update `docker-compose.yml` to remove public exposure of internal infrastructure ports and replace default RabbitMQ credentials using environment variables.

`docker-compose.yml` (Hardened):

```
version: '3.8'

services:
  rabbitmq:
    image: rabbitmq:3-management-alpine
    container_name: rabbitmq
    # SECURITY FIX 1: Remove external port binding for 15672/5672 from network.
    # Ports remain accessible ONLY inside the internal docker network.
    environment:
      # SECURITY FIX 2: Override default guest/guest credentials
      - RABBITMQ_DEFAULT_USER=secure_admin
      - RABBITMQ_DEFAULT_PASS=ComplexP@ssw0rd2026!
    healthcheck:
      test: ["CMD", "rabbitmq-diagnostics", "-q", "ping"]
      interval: 5s
      timeout: 5s
      retries: 5

  producer:
    build: ./producer
    ports:
      - "0.0.0.0:5000:5000" # API remains public for client access
    environment:
      - RABBITMQ_HOST=rabbitmq
      - RABBITMQ_USER=secure_admin
      - RABBITMQ_PASS=ComplexP@ssw0rd2026!
    depends_on:
      rabbitmq:
        condition: service_healthy

  worker:
    build: ./worker
    environment:
      - RABBITMQ_HOST=rabbitmq
      - RABBITMQ_USER=secure_admin
      - RABBITMQ_PASS=ComplexP@ssw0rd2026!
    depends_on:
      rabbitmq:
        condition: service_healthy


```

### Defence 3: Log Sanitisation

Update `worker/worker.py` to sanitise all job fields before writing to system logs, preventing newline log injection attacks.

```
def sanitize_log_input(text: str) -> str:
    # Strip carriage returns and newlines to prevent log injection
    return str(text).replace('\n', '').replace('\r', '')

def callback(ch, method, properties, body):
    data = json.loads(body)
    clean_job_id = sanitize_log_input(data.get('job_id', 'unknown'))
    
    print(f"[WORKER] Processing Job ID: {clean_job_id}", flush=True)
    # [Task logic here]
    ch.basic_ack(delivery_tag=method.delivery_tag)


```

## 6. Verification & Defence Testing

Once defences are implemented, **Student A re-runs Phase 2 attack scenarios**:

1. **Re-test Burp Suite Injection:** Send a payload with `"admin": true`. Verify API returns HTTP `422 Unprocessable Entity`.
    
2. **Re-test Management Access:** Attempt to access `http://<STUDENT_B_IP>:15672`. Verify the request times out or is refused because the port is no longer publicly exposed.
    
3. **Re-test Log Injection:** Send a string containing `\n`. Verify worker logs print the string on a single line without breaking log formatting.