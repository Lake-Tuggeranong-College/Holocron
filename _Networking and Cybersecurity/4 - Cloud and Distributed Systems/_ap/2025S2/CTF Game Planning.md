---
isCurrent: false
publish: false
---
In preparation for the assessment task, you are to prepare and plan for future development. **The information you produce can be used in your first assessment task.**

You are to create a plan for the game features you are planning to have in the final version of the game. 

Create a Google Doc, and start by categorising game features into (at least) the following categories:
- Completed, 
- in active development,
- future development.

For each of the features, indicate what the intended behaviour will be in the game. Be as specific as possible - imaging you are writing the logic to be used within a function but written in a human-readable format.

Include any specific variable value if it's been set already, or what you imagine it could be.

The end result could be similar to this:

| Mechanic     | Development Status | Intended behaviour                                                                                                                 |
| ------------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Player Login | Completed          | Users can register and log in. No password rules in place. When users register, they default to Regular Users (level 1 in the db). |
| Game play    | Active Development | Each current player is against all other players. No limit on the number of current/active players.                                |
| Concurrency  | Active Development | Game designed for players to play against each other at the same time, not asynchronisly.                                          |
| Leaderboard  | Completed          | Top three enabled players are shown on a podium. Remainder of players are showing in a list.                                       |
etc.

