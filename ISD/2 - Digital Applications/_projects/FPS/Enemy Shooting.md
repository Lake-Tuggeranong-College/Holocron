> [!important] Prerequisites: [[Enemy]]

## Overview: How Enemy Shooting Works

Enemy shooting works similarly to player shooting, but with a few key differences. While the player fires bullets in response to input (like pressing a key), enemies must fire automatically—based on timers, conditions, or AI logic.

When the player shoots, a bullet is **instantiated** from a scene and placed at a specific spawn point (`bulletSpawn`). It then travels forward until it hits something.

Enemies follow the same basic idea, but their bullets are triggered by internal logic, not player input.

# Enemy Bullet Scene

> [!tip] You _can_ reuse the same `bullet.tscn` used by the player, but it’s better to duplicate it now to allow for future customisation.

1. **Duplicate** the player bullet scene and script:
- Rename them to `enemyBullet.tscn` and `enemyBullet.gd`.

![[enemyBulletDuplicate.png]]

1. **Detach the original script** from the duplicated scene.
- Then, attach `enemyBullet.gd` to the root node of the new scene.

![[enemyBulletDragDrop.gif]]

## Spawn Point

As with the player, you will need to add a `bulletSpawn` point in the scene. Create the **Node3D** child node, renaming it `bulletSpawn`.

![[enemyBulletSpawn.png]]

Position this point at the *front* of the enemy scene. This is indicated along the **blue** axis. This is demonstrated by the inclusion of a nozzle in the screenshot below.

![[enemyBulletSpawnPosition.jpeg]]

## FireTimer

Create a new Timer child node, renaming it `FireTimer`.

![[enemyBulletFireTimer.png]]

# Enemy Shooting (phase 1)

In this phase the enemy will simply fire every 10-15 seconds in the direction it is facing.

Open `enemy.gd`. First, define the new nodes in the script.

```gdscript
@onready var bullet_spawn
@onready var fire_timer = $FireTimer
```

And the bullet scene and "Random" Number Generator.

>[!tip] Remember to change the link to `enemyBullet.tscn` to be where you saved the file.

```
var BulletScene = preload("res://Scenes/enemyBullet.tscn")
var rng = RandomNumberGenerator.new()
```

![[enemyBulletShootingVariables.png]]

## Ready function

Update the `_ready()` function to generate the random time and set the firetimer to this value.

```gdscript
bullet_spawn = get_node("bulletSpawn")
rng.randomize()

# Set initial random fire time
fire_timer.wait_time = rng.randf_range(1.0, 2.0)
fire_timer.one_shot = true
fire_timer.start()

```

![[ISD/2 - Digital Applications/_projects/FPS/_images/enemyShootingRandomTimer.png]]

Add the function which will be called when the timer finishes (**timeout**) and the function which instantiates the bullet.

```gdscript
func _on_FireTimer_timeout():
	fire_bullet()

	# Reset timer with new random interval
	fire_timer.wait_time = rng.randf_range(10.0, 15.0)
	fire_timer.start()

func fire_bullet():
	var bullet = BulletScene.instantiate()
	bullet.global_transform = bullet_spawn.global_transform
	get_tree().current_scene.add_child(bullet)
```

![[enemyShootingTimeoutAndFire.png]]


Finally, set the **timeout** signal for FireTimer to be `on_FireTimer_timeout()`. Select the `FireTimer` node and change to the signal tab.

![[enemyShootingFireTimerSignal.png]]

Doubleclick on the timeout() signal, and tap the **Pick** button to choose the `_on_FireTimer_timeout()` function. Then tap **OK** an then **Connect**.

![[enemyShootingFireTimerConnect.png]]

## Test the Game

Run the game, and your enemies now should be able to shoot at you 'randomly'. You can adjust the values for the timings if you change the values in these lines (note there are two of them):

```gdscript
fire_timer.wait_time = rng.randf_range(10.0, 15.0)
```

# Phase 2

Phase 1 of the enemy shooting is basic and simplistic - the enemy simply shoots 'randomly' whichever way it's facing no matter how far away the player is. There are many different ways to upgrade this:
- Only shoot if the enemy can 'see' the player.
- Only shoot if the player is within a certain range of the player.
- And many more.

This phase will focus on upgrading the code so that the enemy will only shoot if the **player is within a certain range**.

Add a new variable at the top of the script to determine the threshold. The units used in Godot is metres.

```gdscript
const rangeThreshold = 50.0
```

![[enemyShootingThreshold.png]]

Update the `_on_FireTimer_timeout()` to check the distance to the player before firing a bullet.

```gdscript
var player = root_node.get_node("Player")
	var distance_to_player = global_transform.origin.distance_to(player.global_position)
		
	if distance_to_player <= rangeThreshold:
		fire_bullet()
```

![[enemyShootingCheckDistance.png]]

