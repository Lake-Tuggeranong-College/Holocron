---
theme: simple
highlightTheme: zenburn
css: css/holocronSlides.css
isCurrent: true
---
# Signals in Godot 🤖

### Decoupling your Game Architecture

## The Signal Concept 📡

Signals allow nodes to communicate without knowing who is receiving the message. It is a "one-to-many" broadcast system.

---

Signals allow nodes to communicate without knowing who is receiving the message. It is a "one-to-many" broadcast system.

<div style="background: #1e1e2e; padding: 20px; border-radius: 12px; position: relative; height: 550px; width: 100%; overflow: hidden; border: 2px solid #478cbf; box-sizing: border-box;"> <!-- Emitter --> <div style="position: absolute; left: 5%; top: 40%; text-align: center; z-index: 2;"> <div style="font-size: 50px;">👤</div> <div style="color: #478cbf; font-weight: bold; font-family: sans-serif; font-size: 1.2em;">Player <small style="display: block; font-size: 0.6em; opacity: 0.8;">(Emitter)</small></div> </div>

<!-- Signal Pulse Animation -->

<style> @keyframes pulse { 0% { transform: scale(1); opacity: 1; border: 2px solid #e06c75; } 100% { transform: scale(30); opacity: 0; border: 1px solid #e06c75; } } .signal-ring { position: absolute; left: 8%; top: 52%; width: 25px; height: 25px; border-radius: 50%; animation: pulse 5s infinite; pointer-events: none; } @keyframes data-flow { 0% { left: 10%; opacity: 0; transform: translateY(-50%) scale(0.5); } 10% { opacity: 1; transform: translateY(-50%) scale(1); } 90% { opacity: 1; transform: translateY(-50%) scale(1); } 100% { left: 85%; opacity: 0; transform: translateY(-50%) scale(0.5); } } .data-packet { position: absolute; top: 52%; font-size: 14px; background: #e06c75; color: white; padding: 4px 12px; border-radius: 20px; animation: data-flow 5s infinite; font-family: monospace; white-space: nowrap; box-shadow: 0 0 10px rgba(224, 108, 117, 0.5); z-index: 1; } </style>

<div class="signal-ring"></div> <div class="signal-ring" style="animation-delay: 1.5s"></div> <div class="signal-ring" style="animation-delay: 3s"></div> <div class="data-packet">health_changed(80)</div>

<!-- Listeners -->

<div style="position: absolute; right: 5%; height: 90%; display: flex; flex-direction: column; justify-content: space-around; z-index: 2;"> <div style="text-align: left; display: flex; align-items: center; gap: 15px; background: rgba(152, 195, 121, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #98c379;"> <div style="font-size: 30px;">📊</div> <div style="color: #98c379; font-family: sans-serif;"><b>UI Bar</b>

<small style="color: #abb2bf;">Update HUD</small></div> </div>

<div style="text-align: left; display: flex; align-items: center; gap: 15px; background: rgba(152, 195, 121, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #98c379;"> <div style="font-size: 30px;">🔊</div> <div style="color: #98c379; font-family: sans-serif;"><b>Audio</b>

<small style="color: #abb2bf;">Play "Ouch"</small></div> </div>

<div style="text-align: left; display: flex; align-items: center; gap: 15px; background: rgba(152, 195, 121, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #98c379;"> <div style="font-size: 30px;">🛡️</div> <div style="color: #98c379; font-family: sans-serif;"><b>Achievements</b>

<small style="color: #abb2bf;">Check Unlocks</small></div> </div> </div> </div>

---
## The Problem: Spaghetti Code 🍝

In complex games, nodes often need to talk to each other.

- **Bad Way:** `get_parent().get_node("UI/HealthBar").update()`
- **The "Better" Way (Godot 4+):** `%HealthBar.update()`
    - Using **Scene Unique Nodes** prevents path-breaking issues...
    - **BUT** it still creates a dependency. The Player must _know_ the HealthBar exists.
    - More work if more nodes need to be added later.
- **The Problem:** Direct references (even unique ones) only talk to **one** thing. A signal can talk to **everyone** at once.
---
## The Solution: Signals 📡

Signals are Godot's version of the **Observer Pattern**.

- A node **emits** a signal (a broadcast).
- Other nodes **connect** to that signal (listening).
- The emitter doesn't care who is listening, or if _anyone_ is listening.
---
## "Signal Up, Call Down" 🏗️

This is the golden rule of Godot architecture:

1. **Call Down:** A parent can safely call functions on its children (it owns them).
2. **Signal Up:** A child should emit a signal to notify the parent (it doesn't need to know its parent exists).
---
## Coding a Signal 💻

### 1. Define and Emit

```gdscript
extends CharacterBody2D
# Define at the top
signal health_changed(new_value)

func take_damage(amt):
    health -= amt
    # The moment of broadcast
    health_changed.emit(health) 
```
---
### 2. Connect (via Code)

```gdscript
func _ready():
    # Connect the signal to a local function
    player.health_changed.connect(_on_player_health_changed)

func _on_player_health_changed(val):
    progress_bar.value = val
```
---
## Signals vs. Singletons (Autoloads) ⚖️

| **Feature**  | **Signals**      | **Singletons**         |
| ------------ | ---------------- | ---------------------- |
| **Best For** | Specific events  | Persistent global data |
| **Coupling** | Very Low         | Moderate               |
| **Example**  | `button_pressed` | `save_game_data`       |

**Pro Tip:** Use a "Global Signal Bus" (a Singleton that only holds signals) to let distant nodes talk without direct references.

---
## When to use Signals? 🎯

- **UI Updates:** When the player's stats change.
- **Audio:** Triggering SFX when an animation reaches a specific frame.
- **Game Logic:** Notifying the `LevelManager` that a key was picked up.
- **Decoupling:** Any time you find yourself typing `get_parent()`.
---
## Summary 📝

- Signals prevent crashes when scenes change.
- They make your nodes **reusable**.
- They keep your code clean and professional.

> "A well-signaled game is a stable game."

---

# Questions?

If you have any questions, please ask!

![[contactDetails.png]]