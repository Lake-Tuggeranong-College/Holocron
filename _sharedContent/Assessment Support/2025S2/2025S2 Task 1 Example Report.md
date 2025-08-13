You may shows possible ways you could write your report for this task, for each class.

> [!note] Not all details have been verified



# Robotics

## Product Features (Robotic Behaviours)

These are the behaviours planned in the Rover robot at the end of the project. The rover will be accept commands by a controller device. The accepted commands are limited in scope and focus on rover movement and requesting telemetry data. The controller and rover communicate over Lora.

![[technicalCommunications.png]]

To uniquely identify the robot, the rover has been assigned the id `25`. 
### Robot commands - movement

![[Robot movement.png]]

The rover will respond to the following commands.
### Forward

When the rover receives a transmission `25,forward`, the robot will respond by:
Driving forward for 5 seconds.

The direction is indicated in the diagram by the red arrow.

### Backward

When the rover receives a transmission `25,backward`, the robot will respond by:
Driving backwards for 5 seconds.

The direction is indicated in the diagram by the green arrow.

### Left

When the rover receives a transmission `25,left`, the robot will respond by:
Rotating left until it has turned 90 degrees left. This will be performed by the left-hand motor running backwards and the right-hand motor running forwards.

The direction is indicated in the diagram by the blue arrow.

### Right

When the rover receives a transmission `25,right`, the robot will respond by:
Rotating left until it has turned 90 degrees right. This will be performed by the right-hand motor running backwards and the left-hand motor running forwards.

The direction is indicated in the diagram by the yellow arrow.

*Analysis*

The fundamental movement behaviours will be implemented to allow for the robot to be controlled remotely in most situations, given the environment. To make the movement behaviors more robust, resources could be used to implement sensors for obstruction detection and enhance the flexibility of the left and right functions, allowing the robot to turn at various degrees. The current movement options are being implemented as described, and planned according to the project milestones, primarily due to time constraints. Re-engineering the rover and its controller to enable a continuous transmission of movement commands—much like a [store-bought toy remote control car](https://www.bigw.com.au/toys/toy-vehicles-playsets/rc-vehicles/c/6829101?srsltid=AfmBOorWTduVfH88135LisA_BI0NQee6LhG3GwhtxE0IMEBnWPTVvi-2)—would present significant technical challenges that cannot be addressed within the project's allocated timeframe.


# Year 11/12 Interactive Software Development

## Product Features (Game Mechanics)

### Player
The fundamental node in the project is the Player node. The player object interacts with many, if not all, other objects in the game. See the [[#Data Flow]] section for details. 

![[11ISDPlayerStats.png]]

The player's initial settings (shown above) are defined in such a way to allow for realistic movement throughout the [[#Environment]]. The players speed (`5.0`) is matched so that it is approximately 70% faster than the starting speed of the enemies.
The player can move in all directions on the X and Z planes, and jump on the Y plane. Due to physics developed, the player will be able to change direction in mid air during the jump. This can be disabled further in the development cycle by checking if the player is not on the flow prior to processing any movement input using a check similar to:

```gdscript
if not is_on_floor():
	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	var input_dir := Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
	var direction := (transform.basis * Vector3(input_dir.x, 0, input_dir.y)).normalized()
	if direction:
		velocity.x = direction.x * SPEED
		velocity.z = direction.z * SPEED
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED)
		velocity.z = move_toward(velocity.z, 0, SPEED)
```

The player can also run, doubling the speed variable, while the `player_run` input is being held down.

![[11ISDPlayerSpeedRun.png]]

The players health is initialised to 100, which is the maximum throughout the game. Checks are put in place anywhere the health is increased to ensure that the health cannot exceed 100. Future development may allow for the addition of player armour, which will behave similarly to the health mechanic. with a maximum of 100. If implemented, when damage is taken by the player, the armour is depleted first before the health is impacted.


### Environment

The planned environment is shown here:

![[11ISDMap.png]]

Legend:
P - Starting position of the player
E - Starting position of the enemies
E - Exit point.

Doors are highlighted in pink.
Walls are highlighted in red. The player and enemy objects cannot traverse through the walls.

The player must kill or avoid all the enemies and enter the final room, and stand on the exit point position as indicated.

The environment has been designed to have similar challenges to the first level in Doom (1992).

![[doomLevel1.png]]



### Shooting

When the player presses the input mapped to `fire`, a bullet object is instantiated into the scene. See [[#Bullets]] for details regarding the movement, collision damage etc. 

![[11ISDPlayerShoot.png]]

As the amount of ammunition is controlled by the player, the `ammo` variable is stored within the `player.gd` script. Version 1.3, as described in the **Project Milestones**, includes the expansion of the weapon system, this would necessitate the transition of the amount level from the player object to the individual weapon objects. Similarly, the process for firing a bullet would be transferred to individual weapons to allow for each weapon to implement it's own `shoot()` function, to allow for weapon specific implementation.

### Bullets

TODO Details.


## Data Flow

This section is only here to indicate how and why sections should link to each other.






# Year 11 Cyber

## Product Features

### Docker

[Docker](https://www.docker.com/) has been configured through a [devcontainer](https://code.visualstudio.com/docs/devcontainers/create-dev-container) file to enable the project to be developed within Visual Studio Code.

```json
{
    "name": "PHP",
    "image": "mcr.microsoft.com/devcontainers/php:latest",
    "features": {
        "ghcr.io/warrenbuckley/codespace-features/sqlite:1":{},
        "ghcr.io/devcontainers/features/php:1":{}
    },
    "portsAttributes": {
        "8000":{
            "label": "PHP Server",
            "onAutoForward": "notify"
        }
    },
    "postCreateCommand": "bash .devcontainer/install-dependencies.sh",
    "postStartCommand": "php -S 0.0.0.0:8000"
}
```

The devcontainer has been configured so utilise the php image from Microsoft, which has [Apache webserver and php automatically configured](https://hub.docker.com/r/microsoft/devcontainers-php). This was chosen to hasten the development process as opposed to configuring different physical servers to achieve the same goals.

As indicated in the Devcontainer, Apache has been configured to run on port 8000 and can be accessible on either:
- http://127.0.0.1:8000/
- http://localhost:8000/
- http://0.0.0.0:8000/

The devconainter additionally installs additional components to rapidly configure the container.
# Year 12 Cyber

## Database Design

The database has been configured to store all relevant data on the Capture The Flag game and challenges, namely:

- User Login details
- Challenge Details
- Module Data
- Different projects

![[12CyberDb.png]]


| Table             | Purpose                                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------------------- |
| Users             | User details, including name, login credentials                                                          |
| UserChallenges    | Tracks which challenges individual users have completed (checked prior to points being awarded)          |
| Challenges        | Details for each individual Challenge, including correct flag, points, module details.                   |
| Categories        | Which categories (Web, Cyber, Docker etc) a challenge falls under (see [[#Challenges]] for more details) |
| Projects          | Major project releases, primarily used to differentiate between years.                                   |
| ProjectChallenges | Indicating which project a challenge is assigned.                                                        |
The database has been designed to minimise the duplication of data, ideally with a table containing all required information regarding one aspect of the project, and allows for expansion of the project in the future due to the separation of projects and challenges in each project.
### Challenges

Each challenge contains the following critical data:
- Title
- Description
- Correct flag
- Points value
- Related Image

Some challenges may be linked with an Arduino-based device, and others may be associated with a docker instance. The system does not support a challenge requiring an Arduino-based device AND a docker container.


Note: Challenges can be assigned to multiple projects as required.
