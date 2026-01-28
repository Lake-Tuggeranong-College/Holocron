---
theme: simple
highlightTheme: zenburn
css: css/holocronSlides.css
isCurrent: true
---
# Network Architectures

### From Local Classrooms to the Global Internet

**BSSS IT Curriculum**

## Learning Objective

Understand how we connect computers using **Bus**, **Star**, and **Mesh** topologies and how these build the **Internet**.

---
## The Bus Topology

- **Structure**: A single central cable (Backbone).
- **Analogy**: A bus route where everyone gets off at different stops.
- **The Problem**: If the "road" breaks, no one moves.

<div class="animation-container" style="background: #1e1e1e; padding: 20px; border-radius: 12px; margin: 15px 0;"> <div style="position: relative; width: 100%; height: 120px; border: 1px solid #444;"> <div style="position: absolute; top: 50%; left: 5%; right: 5%; height: 4px; background: #7f8c8d;"></div> <!-- Nodes --> <div style="position: absolute; top: 20%; left: 15%; width: 20px; height: 20px; background: #3498db; border-radius: 3px;"></div> <div style="position: absolute; top: 70%; left: 50%; width: 20px; height: 20px; background: #3498db; border-radius: 3px;"></div> <div style="position: absolute; top: 20%; left: 85%; width: 20px; height: 20px; background: #3498db; border-radius: 3px;"></div> <!-- Packet --> <div class="bus-packet-logic">IP Header</div> </div> <p style="color: #888; font-size: 12px; text-align: center; margin-top: 10px;">Animation: Data broadcasts down the backbone; only the matching IP accepts it.</p> </div>

---
## The Star Topology

- **Structure**: Central hub/switch.
    
- **Standard**: Most common in high schools.
    
- **Advantage**: One broken wire doesn't stop the whole team.
    

<div class="animation-container" style="background: #1e1e1e; padding: 20px; border-radius: 12px; margin: 15px 0;"> <div style="position: relative; width: 100%; height: 180px; border: 1px solid #444;"> <!-- Switch --> <div style="position: absolute; top: 50%; left: 50%; width: 40px; height: 40px; background: #e74c3c; transform: translate(-50%, -50%); border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px;">SW</div> <!-- Nodes --> <div style="position: absolute; top: 10%; left: 50%; width: 24px; height: 24px; background: #3498db; transform: translateX(-50%); border-radius: 3px;"></div> <div style="position: absolute; top: 50%; left: 15%; width: 24px; height: 24px; background: #3498db; transform: translateY(-50%); border-radius: 3px;"></div> <div style="position: absolute; top: 50%; left: 85%; width: 24px; height: 24px; background: #3498db; transform: translateY(-50%); border-radius: 3px;"></div> <!-- Packet --> <div class="star-packet-logic">Dest: .10</div> </div> <p style="color: #888; font-size: 12px; text-align: center; margin-top: 10px;">Animation: The Switch routes the packet directly to the destination node via its port.</p> </div>

---
## The Mesh Topology

- **Structure**: Every node connects to many others.
    
- **Redundancy**: If Path A is blocked, take Path B.
    
- **Reliability**: The standard for critical systems.
    

<div class="animation-container" style="background: #1e1e1e; padding: 20px; border-radius: 12px; margin: 15px 0;"> <div style="position: relative; width: 100%; height: 180px; border: 1px solid #444;"> <!-- Connections --> <svg style="position: absolute; width: 100%; height: 100%;"> <line x1="15%" y1="80%" x2="85%" y2="20%" stroke="#444" stroke-width="2" /> <line x1="15%" y1="80%" x2="85%" y2="80%" stroke="#444" stroke-width="2" /> <line x1="85%" y1="20%" x2="85%" y2="80%" stroke="#444" stroke-width="2" /> <!-- Broken link indicator --> <text x="50%" y="45%" fill="#e74c3c" font-size="20" font-weight="bold">X</text> </svg> <!-- Nodes --> <div style="position: absolute; top: 80%; left: 15%; width: 20px; height: 20px; background: #3498db; transform: translate(-50%, -50%); border-radius: 50%;"></div> <div style="position: absolute; top: 20%; left: 85%; width: 20px; height: 20px; background: #3498db; transform: translate(-50%, -50%); border-radius: 50%;"></div> <div style="position: absolute; top: 80%; left: 85%; width: 20px; height: 20px; background: #3498db; transform: translate(-50%, -50%); border-radius: 50%;"></div> <!-- Packet --> <div class="mesh-packet-logic"></div> </div> <p style="color: #888; font-size: 12px; text-align: center; margin-top: 10px;">Animation: Dynamic Routing reroutes data through an alternative node when a primary link fails.</p> </div>


---
## Summary Checklist

- [ ] Bus: One line, many stops.
    
- [ ] Star: Center hub, easy to fix.
    
- [ ] Mesh: Many paths, high reliability.
    
- [ ] Internet: The ultimate hybrid mesh.
    


---
# Questions?

If you have any questions, please ask!

![[contactDetails.png]]