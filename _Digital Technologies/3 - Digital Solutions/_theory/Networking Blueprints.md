---
isCurrent: false
softwareVersion: "4.3"
---
In this tutorial, we will break down how computers talk to each other in games using two main "blueprints": **Client-Server** and **Peer-to-Peer (P2P)**.

To help you visualise this, we’ll use examples from **Godot 4**, a modern game engine where you can build these systems yourself.

---

## 1. The Client-Server Architecture

Imagine a high school cafeteria. You (the **Client**) go to the counter and ask the staff (the **Server**) for a slice of pizza. The staff checks if there is pizza left and gives it to you. You don't just grab it yourself; the staff has the "authority" to decide if you get it.

### How it works:

- **The Server:** A central computer that is always "right." It stores the game rules and keeps track of where every player is.
- **The Client:** Your game app. It sends your "requests" (like "I pressed the W key") to the server.
- **Authority:** If you try to teleport across the map, the server can say "No, that's cheating," and move you back.

### Godot 4 Example:

In Godot, a dedicated server is just a version of your game running without a window (headless).

```gdscript
# Creating a server in Godot 4
var peer = ENetMultiplayerPeer.new()
peer.create_server(1234, 32) # Listen on port 1234, max 32 players
multiplayer.multiplayer_peer = peer
```

---

## 2. The Peer-to-Peer (P2P) Architecture

Now, imagine a group of friends sitting in a circle during lunch. If you want to tell everyone a joke, you tell the person next to you, and they tell the next person, or you just shout it to everyone. There is no "staff" in charge; everyone is equal.

### How it works:

- **The Peers:** Every player's computer is both a client and a partial server.
- **Direct Talk:** You send your position directly to the other players.
- **The "Host" Variant:** In most P2P games (like _Minecraft_ or _Among Us_), one player’s computer acts as the "Host." If they leave, the whole game might end or "migrate" to a new host.

### Godot 4 Example:

In Godot, P2P is often handled via a "Listen Server" where one peer hosts and plays at the same time.

```gdscript
# Hosting a P2P game (Listen Server)
func _on_host_pressed():
    var peer = ENetMultiplayerPeer.new()
    peer.create_server(1234, 4) # Host for 4 friends
    multiplayer.multiplayer_peer = peer
    load_game() # The host also enters the game world!
```

---

## 3. Comparison Table

|**Feature**|**Client-Server**|**Peer-to-Peer (P2P)**|
|---|---|---|
|**Authority**|The Server is the "Boss."|Everyone (or the Host) shares the load.|
|**Cheating**|Harder (Server checks everything).|Easier (Clients can lie to each other).|
|**Cost**|Expensive (You have to pay for a server).|Free (Players use their own internet).|
|**Stability**|If the server dies, everyone disconnects.|If the host leaves, the game might crash.|
|**Best For**|MMOs, Competitive Shooters.|Small Co-op games, Fighting games.|

---

## 4. Which one does Godot 4 use?

Godot 4 uses a **High-Level Multiplayer API** that is designed to work with _both_.

When you use the `@rpc` (Remote Procedure Call) tag in Godot, you are telling the engine: "Run this function on other computers."
- In **Client-Server**, you’d use `@rpc("authority")` so only the server can trigger it.
- In **P2P**, you might use `@rpc("any_peer")` so anyone can update their own character's color or name.


## 5. Remote Procedure Calls (RPCs)

In a normal game, when you call a function like `jump()`, it runs on your computer. In a multiplayer game, if you jump on your screen, you need the other players' computers to run that same function so they see you jump.

An **RPC** is a way to tell another computer: _"Hey, run this specific function on your end!"_

### How it looks in Godot 4:

You use the `@rpc` annotation above a function. You can even decide **who** is allowed to call it and **how** it should be sent.

```gdscript
@rpc("any_peer", "call_local", "reliable")
func play_level_up_sound():
    $AudioPlayer.play()
```

- **`any_peer`**: Any player is allowed to trigger this (careful, this can be risky!).
- **`call_local`**: Runs the function on your own computer _and_ everyone else's.
- **`reliable`**: Guarantees the message arrives (like a registered letter), though it's a bit slower.


## 6. Networking Authority

Authority answers the question: **"Who owns this object?"** Imagine you are playing a game with 4 players. There are 4 "Player" nodes in the game.

- **The Server** usually has authority over the **World** (the score, the clock, the loot).
- **Each Player** usually has authority over their **own character** (their position and health).

### Setting Authority in Godot:

When a player joins, the server assigns an "ID" to that player. We use that ID to tell the game who is in charge of which node.

```gdscript
func _ready():
    # If this node's name matches the unique ID of the player, 
    # give them control!
    set_multiplayer_authority(str(name).to_int())
```

### Why Authority Matters:

If you don't check for authority, your keyboard inputs would move _every_ player on your screen at the same time. You use the `is_multiplayer_authority()` check to prevent this:


```gdscript
func _physics_process(delta):
    # Only move the character if I am the one who owns it!
    if is_multiplayer_authority():
        var direction = Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
        velocity = direction * speed
        move_and_slide()
```

---

## 7. Putting it Together: The "Anticheat" Rule

In a **Client-Server** setup, the server is the "Ultimate Authority."
1. **Client** says: "I want to shoot my gun." (RPC request)
2. **Server** checks: "Do you have ammo? Are you alive?"
3. **Server** says: "Yes, you shot the gun." (RPC command to all clients)

In **P2P**, authority is often "distributed." You trust that when a peer says "I moved here," they are telling the truth. This is why P2P games like _Among Us_ can sometimes have more hackers than games like _Valorant_ (which uses strict Server Authority).

---

### Summary Table: RPC vs. Authority

|**Concept**|**Purpose**|**Analogy**|
|---|---|---|
|**RPC**|Communication|Sending a text message to a friend to do something.|
|**Authority**|Ownership|Having the keys to your own car; only you should drive it.|


---

### Summary Checklist

- **Client-Server** = Centralised Control (The Library).
- **Peer-to-Peer** = Distributed Control (A Study Group).
- **Godot 4** uses `MultiplayerPeer` to let you choose either one.