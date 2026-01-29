---
theme: simple
highlightTheme: zenburn
css: css/holocronSlides.css
isCurrent: true
---
# Signals in Godot

### Decoupling your Game Architecture

## The Signal Concept

Signals allow nodes to communicate without knowing who is receiving the message. 

---

Signals allow nodes to communicate with multiple nodes in the project, without knowing who is receiving the message. 

It is a "one-to-many" broadcast system.

<div class="godot-anim-box signal-broadcast"> <div class="player-node"> <div class="icon">👤</div> <div class="label">Player</div> </div> <div class="sig-ring"></div> <div class="sig-packet">health_changed(80)</div> <div class="listeners"> <div class="listener-item">📊 HUD Bar</div> <div class="listener-item">🔊 Points System</div> <div class="listener-item">🔊 Sound FX</div><div class="listener-item">🔊 Game Management</div></div> </div>

---
## The Problem: Spaghetti Code

In complex games, nodes often need to talk to each other.

- **Bad Way:** `get_parent().get_node("UI/HealthBar").update()`
- **The "Better" Way (Godot 4+):** `%HealthBar.update()`
    - Using **Scene Unique Nodes** prevents path-breaking issues...
    - **BUT** it still creates a dependency. The Player must _know_ the HealthBar exists.
    - More work if more nodes need to be added later.
- **The Problem:** Direct references (even unique ones) only talk to **one** thing. A signal can talk to **everyone** at once.

![[signalsSpagettiCode.png]]

note:
Why this is a problem - is, let's say that the game includes a grenade model. When it explodes, you wish the each player node (in a single or multiplayer game) to take damage, and also any NPCs. With this approach, you'd have to manually add a check for each type. Then, later, if you want to add another type of node, you'd have to modify this code again. 


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