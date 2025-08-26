> [!important] Prerequisites: [[Enemy]]

Enemy shooting, fundamentally, is similar in approach to the player shooting with some minor differences.

The player will **instantiate** a bullet instance, created from the bullet scene when the player presses the `player_shoot` input. The bullet instance is placed in the world at the `bulletSpawn` and the bullet moves 'forward' until it collides with something.

The enemy bullet can't be triggered by an input from the player and must be instantiated by another process. 

# Enemy Bullet Scene

> [!tip] It is possible to reuse the same `bullet.tscn` scene as the player uses, however this may cause issues later in development if you wish bullets to have different functionality. 

Duplicate `bullet.tscn` and `bullet.gd` naming them `enemyBullet.tscn` and `enemyBullet.gd`.

![[enemyBulletDuplicate.png]]

Right Click on the root node and choose **Detach Script**, and then drag and drop `enemyBullet.gd` onto the root node.

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
	bullet.global_transform.origin = bullet_spawn.global_transform.origin
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

