## Win & Lose Conditions

The Win and Lose conditions refer to the state of gameplay to determine whether the player “wins” the game or “loses” the game. Those states are determined by the game itself and what occurs after is up to the developer.

Some examples could be:

| Win Condition | Lose Condition |
| -- | --|
| All enemies are killed | The player’s health reaches 0. |
| The door at the end of the level is opened | The player runs out of ammunition. |
| The player survives the night | |
| etc. | etc.|

In our clone of space invaders, the following conditions exist (at a minimum)

| Win Condition/s | Lose Condition/s |
| --- | --- |
| All enemies are defeated | The timer reaches 0. |
| | The player’s health reaches 0. |

## Win Condition

Expand each of the following to implement the different conditions.

### All Enemies are Defeated

Open `MainGame.tscn`, and click on the “Open in Editor” button next to one of the individual enemy nodes.

![[winLoseEnemiesDefeated.png]]


This opens the original scene to edit. All of the individual enemies in the game are based on this one scene.

With the root node selected, click on the Node tab, then click on Groups. Enter “enemy” and click Add.

  ![[winLoseAddGroup.png]]



Save the scene. This adds this tag to each individual enemy.

Return to Main Game.

Open `MainGame.gd`, and in the `_process()` function, check if there are no more nodes with the tag enemy left. If there are none, then go to the Win Scene.

```gdscript
func _process(delta):
	$HUD/CurrentScore.text = str(GlobalVariables.scoring_information["currentScore"])
	if get_tree().get_nodes_in_group("enemy").size() == 0:
		get_tree().change_scene_to_file("res://WinScene.tscn")
```

Change `res://WinScene.tscn` to link to the Win Scene in your project.