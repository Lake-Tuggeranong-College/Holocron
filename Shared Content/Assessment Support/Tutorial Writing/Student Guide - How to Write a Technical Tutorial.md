This guide will teach you how to structure your assessment using the **Diátaxis framework**. Using this method ensures your tutorial is professional, organised, and academically rigorous.

# 1. What is Diátaxis?

Diátaxis is a system for organising technical documentation based on the user's intent. It maps content across two axes: **Theory vs. Practice** and **Acquisition vs. Application**.

![[diataxisQuadrants.png]]*Description: The Diátaxis compass showing the four quadrants: Tutorials, How-to guides, Explanations, and Reference, mapped against the axes of 'Study vs. Action' and 'Theory vs. Practice'.*

For your assessment, you will primarily use two of its "quadrants":

1. **Tutorial (Learning-oriented):** Getting the reader started with a clear aim.  
2. **Explanation (Understanding-oriented):** Your deep-dive critical analysis and justification.

# 2. Tutorial vs. How-to Guide: Key Differences

According to the [official Diátaxis framework](https://diataxis.fr/), it is vital to distinguish between a **Tutorial** (which you are writing for this assessment) and a **How-to Guide**. Confusing these two is the most common mistake in technical writing.

| Feature | Tutorial (Your Task) | How-to Guide |
| :---- | :---- | :---- |
| **Primary Goal** | **Learning:** To give the student experience. | **Task:** To solve a specific problem. |
| **User State** | A beginner who needs to be led. | A practitioner who knows what they want to do. |
| **Analogy** | A driving lesson (learning skills) rather than just getting from A to B. | A recipe in a cookbook. |
| **Success Metric** | The student *learned* something new. | The user *finished* a specific task. |

**Critical Distinction:**

*A **Tutorial** must be **lesson-oriented**. It should provide the user with a successful "first start" where the focus is on the student's education rather than just the technical output. In contrast, a **How-to Guide** assumes the user already understands the concepts and just needs the steps to reach a goal. For this assessment, ensure your writing feels like a "lesson" that explains the concepts as you go.*

# 3. Structure of Your Assessment

The structure below is **recursive**. It can refer to the tutorial as a whole (the "big picture"), but it should also be applied to individual stages. For every major step in your tutorial, you should repeat this structure to ensure the reader understands the goal, the action, and the underlying logic.

## A. The "Aim" and "Educational Goals"

State exactly what will be achieved. This sets the scope for the reader.

* **Aim:** "To implement a state-based character animation system using a Finite State Machine (FSM)."  
* **Goals:** "Understand the benefits of decoupled state logic and learn to manage complex transitions without 'if-else' nesting."

## B. The Step-by-Step (How-to Guide)

Use **Carroll’s Minimalism** for the actions, but ensure your **Technical Terminology** is precise. Include screenshots to verify the user is on the right track.

**Understanding Carroll's Minimalism:**

John Carroll’s theory of Minimalism suggests that users want to get started with a task immediately rather than reading a manual from cover to cover. To apply this in your tutorial:

* **Action-Focused:** Focus on active steps (e.g., "Press the button") rather than passive descriptions (e.g., "The button is pressed to start the process").  
* **Error Recovery:** Include brief mentions of common mistakes so the user can fix them if they go wrong.  
* **Brief Instructions:** Keep your steps as short as possible. Do not explain the theory *inside* the step; save that for your "Analysis" section.  
* **Modular Steps:** Ensure each step is a self-contained unit of work that leads to a small, successful outcome.

## C. The Technical Analysis (Explanation)

This is where you explain the ‘***why’***. Use diagrams here to visualise abstract concepts like data flow or class hierarchies.

# 4. Comprehensive Model Examples (With Image Placement)

## Example 1: Game Development (Godot) — Signal-Based Interaction

**Step:** "In the Inspector, connect the body\_entered signal of the bullet to the on\_body\_entered function in your script."
![[godotSignals.png]]


*Description: A screenshot of the Godot Inspector 'Bullet' tab highlighting the 'body\_entered' signal and the connection window showing the target script.*

**Analysis:** "By implementing Godot’s **Signal System** rather than direct function references, we achieve **architectural decoupling**. In a direct-call system, the 'Attacker' would need to know the specific class of the 'Victim' to call a take\_damage() function."
![[godotSignalDiagram.png]]
*Description: A flow chart contrasting a 'Direct Reference' (hard-coded dependency) with a 'Signal Observer' pattern (decoupled communication).*

## Example 2: Electronics/IoT (Arduino) — Non-Blocking Timing

**Step:** "Assemble the circuit as shown. Ensure the LED is connected to Digital Pin 13 with a current-limiting resistor."
![[arduinoBlink.png]]


*Description: A clear Fritzing or hand-drawn schematic showing the wiring between the Arduino Uno, the resistor, and the LED.*

**Analysis:** "The transition from **blocking code** (delay) to **non-blocking timing** (millis) is critical for system responsiveness. A delay() call halts the entire **Instruction Cycle** of the MCU, preventing it from reading sensors."

## Example 3: Networking (Packet Tracer) — VLAN Segmentation

**Step:** "Create two subnets on the 192.168.68.x range with subnet mask of 255.255.255.128. The home subnet has IPs from 192.168.68.0 \- 192.168.68.127, and business subnet has IPs 192.168.68.128+ ."
![[subnets.png]]

*Description: The network has been divided into two subnets, indicating the separate features of both.*

**Analysis:** "Implementing VLANs reduces the size of the **Broadcast Domain**, which is essential for mitigating **network congestion**."

# 5. Mastering Technical Explanations

To achieve high marks in "Analysis and Critical Analysis", you must explain complex concepts with precision and advanced technical descriptions. Below are model explanations for common topics.

## Godot: Implementing Signals

"Signals in Godot implement the **Observer Pattern**. When an event occurs (like a projectile collision), the object 'emits' a signal without needing to know which nodes are listening. This prevents **Circular Dependencies**—a common architectural flaw where two classes depend on each other's existence to compile. Critically, this allows for **Scalable Systems**, as new UI elements or sound effects can 'connect' to existing gameplay signals without touching the original source code."

## Arduino: The Role of Functions

"Functions are used for **Encapsulation** and **Code Reusability**. Rather than repeating a 20-line sensor-reading sequence multiple times in the loop(), we encapsulate it into a dedicated function with a specific **Return Type** (e.g., float). This reduces the 'Cognitive Load' on the developer and ensures that any bug fix within the function logic automatically propagates across the entire programme. From a critical perspective, modular functions also allow for easier **Unit Testing** of hardware components in isolation."

## Networking: Subnet Masks and IP Addresses

"A **Subnet Mask** is a 32-bit value that performs a **Bitwise AND operation** against an IP address to distinguish the Network ID from the Host ID. In a standard Class C network (255.255.255.0), the first 24 bits are 'masked' to define the local network boundary. Critically, adjusting the subnet mask (known as **Variable Length Subnet Masking** or VLSM) allows a network administrator to 'Borrow' host bits to create sub-networks. This improves security by isolating traffic and ensures efficient **IPv4 Address Allocation**, preventing the wastage of IP addresses in smaller departments."

# 6. Final Checklist for Your Assessment

* **Visual Evidence:** Have you included images for complex steps and technical concepts?  
* **Captions:** Does every image have a description explaining its technical relevance?  
* **Terminology:** Did you use precise terms (e.g., *normalisation*, *encapsulation*, *latency*)?  
* **Critical Analysis:** Did you justify **why** you chose this technical path?  
* **Project Integration:** Did you explain how this tutorial adds value to your project?

# 7. External Resources and Examples

Use the following links to study professional examples of these frameworks and technologies in practise:

## Diátaxis in Professional Practise

* **Official Diátaxis Framework:** [diataxis.fr](https://diataxis.fr/) \- The core concepts of the framework.  
* **Diátaxis Tutorials:** [diataxis.fr/tutorials/](https://diataxis.fr/tutorials/) \- Deep dive into writing learning-oriented documentation.  
* **Diátaxis How-to Guides:** [diataxis.fr/how-to-guides/](https://diataxis.fr/how-to-guides/) \- Deep dive into writing goal-oriented documentation.  
* **Canonical/Ubuntu:** [documentation.ubuntu.com](https://documentation.ubuntu.com/) \- Large enterprise implementation.  
* **Cloudflare Developers:** [developers.cloudflare.com](https://developers.cloudflare.com/) \- Separation of "How-to" from "Explanations."  
* **Python Documentation:** [docs.python.org/3/tutorial](https://docs.python.org/3/tutorial/) \- Classic model for learning-oriented docs.

## Discipline-Specific Documentation

* **Godot Engine Documentation:** [docs.godotengine.org](https://docs.godotengine.org/en/stable/)  
* **Arduino Language Reference:** [arduino.cc/reference](https://www.arduino.cc/reference/en/)  
* **Cisco Networking Academy:** [netacad.com](https://www.netacad.com/)  
* **DigitalOcean Community Tutorials:** [digitalocean.com/community/tutorials](https://www.digitalocean.com/community/tutorials)
