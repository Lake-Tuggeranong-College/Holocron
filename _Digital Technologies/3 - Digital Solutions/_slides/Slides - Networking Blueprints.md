---
theme: simple
highlightTheme: zenburn
css: css/holocronSlides.css
isCurrent: false
softwareVersion: "4.3"
---

## The Network "Blueprint"

- Games need a communication plan.
- Two main styles: Client-Server, P2P.
- Defines who has the power.
- Impacts speed and cheating prevention.
- Godot 4 handles both architectures.      

---

## Client-Server Architecture

- One central "Boss" computer (Server).
- Everyone else is a Client.
- Server decides the "Game Truth."
- Clients request permission to act.
- Prevents players from cheating easily.
- Used in MMOs and Shooters.

--

![[Client-server-model.png]]

---

## Peer-to-Peer (P2P)

- No central authority computer exists.
- All players talk to each other.
- One player usually "Hosts" locally.
- Cheaper because servers aren't rented.
- Faster for small groups of friends.
- Best for Co-op and Fighting games.

--

![[P2P_network.png]]

---

## What is an RPC?

- **R**emote **P**rocedure **C**all.
- Calling functions on other computers.
- "I jump, you see me jump."
- Uses the `@rpc` annotation tag.
- Synchronizes animations and game events.
- The "Telephone Line" of networking.

--

## RPC Code Example

```gdscript
# The @rpc tag enables networking
@rpc("any_peer", "call_local")
func update_score(points):
    score += points
    score_label.text = str(score)

# To call it on everyone's screen:
update_score.rpc(10)
```

- `any_peer`: Anyone can trigger this.
- `call_local`: Runs on your machine too.
- `.rpc()`: The trigger for networking.

--
## RPC Configuration

- `@rpc("any_peer")`: Anyone can call.
- `@rpc("authority")`: Only Boss can call.
- `@rpc("reliable")`: Must arrive, slower.
- `@rpc("unreliable")`: Faster, might drop data.
- `@rpc("call_local")`: Runs on your machine too.
- Choose based on data importance.

---

## Understanding Authority

- Defines who "owns" a node.
- Every player owns their character.
- Server owns the world/score.
- Prevents controlling other players' nodes.
- Set using `set_multiplayer_authority()`.
- Crucial for organized game state.

--

## Authority in Code

- Check `is_multiplayer_authority()` before input.
- Only process movement for local player.
- Prevents "Ghost" movement on screens.
- Server overrides authority for security.
- Keeps physics calculations consistent.
- Essential for multi-player synchronization.

--

![[godotNetworkAuthority.png]]

- For the current peer, hide the multiplayer model, and show the players arms
- For other 'player' nodes shown in the game, show the multiplayer model, and hide the arms/.

--

![[godotNetworkAuthorityExample.jpeg]]

---

## Summary

- Client-Server: Centralized and secure.
- P2P: Distributed and cost-effective.
- RPCs: How computers talk.
- Authority: Who owns what.
- Godot 4 makes networking accessible.
- Start small, then scale up!

---


# Questions?

If you have any questions, please ask!

![[contactDetails.png]]