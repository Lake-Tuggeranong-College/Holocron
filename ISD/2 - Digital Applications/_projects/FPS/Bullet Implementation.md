---
author: Ryan Cather
date: 2024-06-09
priority: 1
order: 4
tags:
  - ISD
  - yr11
---

There are numerous ways to implement shooting in an FPS (or other type of) game. 

The first is through creating projectiles (such as bullets) for the player to shoot. The bullets will hit objects in their direct path, and can cause damage. This method is the focus for this section of the project.

Another method, is to use <tooltip term="raycast">raycasts</tooltip>, where the there is an imaginary line drawn from the camera, and seeing what object it hits first (if any). Raycasts will be covered in a later tutorial.

> What are the pros and cons of each approach? Why choose one over the other?


## Bullet Mesh

> [!note] This tutorial is going to demonstrate how to create a simple bullet. Your implementation for the model may differ, however the process should be the same.

Create a new Scene (Scene→New Scene).

Set the Root Node as `Area3D` by selecting Other Node and search for Area3D.

![[bulletRootNode.png|Untitled]]

Create your bullet model. You can create your own mesh, or you can follow the instructions shown below.

### Simple Bullet

For a simple bullet shape, this can be done by creating a `CSGCylinder3D` and a `CSGSphere3D` and manipulating (move and rotate) them into a bullet shape.

![[bulletPositionNodes.png|Screen Shot 2022-10-04 at 9.47.38 pm.png]]

Ensure that both of these CSG objects have Union Operation selected.

![[bulletUnionOperation.png|Screen Shot 2022-10-04 at 9.45.55 pm.png]]

Then place them as children of a `CSGCombiner3D`. Name the new node as appropriate.

![[bulletCombiner.png|Untitled]]

Texture the object as you would normally.

> [!note] Search for "Metallic texture seamless" to find a metal texture for a bullet.


![[bulletTextured.png|Screen Shot 2022-10-04 at 9.51.14 pm.png]]

Attach a `CollisionShape3D` node as a child of the scene root.

![[bulletCollisionShape3D.png|Untitled]]

With the `CollisionShape3D` selected, set the Shape to be `CapsuleShape3D`.

![[bulletSetCollisionShape.png|Screen Shot 2022-10-04 at 9.55.49 pm.png]]

Manipulate the Capsule shape, using the transform options, so that it completely surrounds the mesh.

![[bulletManipulateCapsule.png|Untitled]]

Rename the Scene Root as `Bullet`.

![[bulletRenameRoot.png|Screen Shot 2022-10-04 at 9.59.07 pm.png]]

Save the scene as `Bullet.tscn`.

![[bulletSaveScene.png|Untitled]]

![[commonBlocks#Commit & Push]]

## Bullet Script

Still in the Bullet scene, attach a new script to the root node (Bullet) and name it `Bullet.gd`.

![[bulletAttachScript1.png|Untitled]]

![[bulletAttachScript2.png|Untitled]]

Add two new variables to control how fast the bullet will travel, and how much damage it will inflict on the object it collides with (if configured to take damage). 

> [!note] These can be set to whatever values are appropriate.

| Variable | Type    | Description                                                             |
|----------|---------|-------------------------------------------------------------------------|
| `speed`  | `float` | How fast the bullet will move through the game.                         |
| `damage` | `int`   | How much damage the bullet will inflict on the object it collides with. |


> [!info] This can be used to allow for different weapons with different bullet speeds and damage.

![[bulletVariables.png]]
```gdscript
var speed : float = 30.0
var damage : int = 1
```


Add code, within the `_process` function to move the bullet instance forward. 

![[bulletScriptMoveBullet.png]]

```gdscript
func _process (delta):
    # move the bullet forwards
    global_transform.origin -= transform.basis.z.normalized() * speed * delta
```

Save the Script.

Select the root node (Bullet) and change to the Node tab. 

![[bulletChangeToNode.png|Untitled]]

Double click on `body_entered`. Press **Connect.**

This code will be used to detect when the bullet instance has collided with another object - when the bullet collider enters another node’s collider.

![[bulletSignal.png|Untitled]]

In order to only destroy objects that need to be destroyed, this code will first check if the other collider has a function called `take_damage` in its script. This means that a script attached to the enemy objects can have that function, and will take damage, however a wall doesn't need that function, so it won’t be destroyed.

 `_on_Bullet_body_entered(body)` executes when the bullet enters another object. If that object has the `take_damage()` function (or method), it will then run that function on the other node, passing the `damage` value.

Also added is the `destroy()` function. This simply deletes the bullet from the game.

This has been added in such a way to allow for future modification as required.

![[bulletScriptDamageDestroy.png]]

```gdscript
func _on_Bullet_body_entered(body):
    if body.has_method("take_damage"):
        body.take_damage(damage)
        destroy()
func destroy():
    queue_free()
```



## Automatically deleting the bullet

A potential problem with creating instances of bullets is that the player could create 1000s of bullets that would continue running in the game, flying off into the distance, taking up valuable processing power. A solution for this problem is to automatically delete the bullets after a set time.

In the bullet scene, create a **Timer** child node of the root note

![[bulletCreateTimerNode.png|Screen Shot 2022-10-04 at 10.22.24 pm.png]]

Set the wait time to something appropriate, and Autostart to On.

![[bulletTimerSettings.png|Untitled]]

Change to the Node tab and double-click on the `timeout()` signal. 

Set the Receiver Method to `destroy`.

> [!note] You can either type in the function name, or use the Pick button to choose the correct function.


Select Connect.

![[bulletTimerSignal.png|Untitled]]

![[bulletTimerSignalConnect.png|Untitled]]

Save the Bullet Scene.

![[commonBlocks#Commit & Push]]
# Add the bullet spawn point

Before the bullet can be instantiated (spawned), you need to define where it will be instantiated. 
Right click on the Camera3D node, add child node. Select Node3D.

![[bulletPlayerAddSpawnPoint.png]]

Rename the node to `bulletSpawn`.

![[bulletPlayerRenameSpawn.png]]


# Update Player Script
The bullet scene has been created, now it's time to allow the player to shoot.

Open `Player.gd`.

Add the following variables at the top of the script.

![[bulletPlayerVariables.png]]

```gdscript
var bulletScene = preload("res://Scenes - Other/bullet.tscn")
var bulletSpawn 
var ammo : int = 5
var player_health = 100
```

Update the `_ready` function to link the bulletSpawn variable to the bulletSpawn node.

![[bulletPlayerScriptLinkSpawnPoint.png]]

```gdscript
bulletSpawn = get_node("Camera3D/bulletSpawn")
```

![[bulletPlayerCheckShoot.png]]

```gdscript
	if Input.is_action_just_pressed("player_shoot"):
		shoot()
```

Add the `shoot()` function. This function creates an instance of the bullet at the `bulletSpawn` point.

![[bulletPlayerShoot.png]]

```gdscript
func shoot():
	#handles shooting
	var bullet = bulletScene.instantiate()
	get_parent().add_child(bullet)
	bullet.global_transform = bulletSpawn.global_transform
	bullet.scale= Vector3(0.1, 0.1, 0.1)
	ammo -= 1
```


# Issues?

## Bullet facing the wrong direction?

You may find that on the initial implementation of the instructions above, you may run into an issue where the bullet is 'facing' the wrong way.

![[bulletErrorRotation.png]]

To fix this, open `bullet.tscn`, and select the `CSGCombiner` node. Rotate the bullet on the Y axis to turn it 90 degrees to the left.

![[bulletRotateCSGCombiner.png]]

Try the game again and the bullet should be now facing away from the player when fired.