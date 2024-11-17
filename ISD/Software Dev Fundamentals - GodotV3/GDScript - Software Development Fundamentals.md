---
tags:
  - ISD
  - archived
---

This course introduces you to software development with a focus on GDScript and Godot as the environment through the process of making a simple game.

# Course Topics

# Programming Introduction - Godot
    
    
# GDScript Implementation

Games can be written in many different Integrated Development Environments (IDEs) or game engines with many different languages. Unity and [Unreal Engine](https://www.unrealengine.com/en-US/) are two of the most popular and use different languages between them - C#, Javascript, C++, Blueprints etc. Many of the Game engines available also allow for programming through visual scripting (similar to flowcharts) but will not be the focus of this course.

Games can be written in most languages, either in a game engine or not, however this semester you’ll be learning Godot and GDscript to learn the fundamentals of game development in a beginner-friendly environment.

<aside>
💡 Godot is the Game Engine, GDScript is the Language. Both of these will be used throughout this semester.

</aside>

## Godot

[Godot](https://godotengine.org/) is a relatively new Game Engine/IDE, and is FOSS - Free and Open Source Software. It can be used for both 2D and 3D games. 

![[_images/Screen_Shot_2022-01-10_at_9.39.00_pm.png]]

## Game Development Process

The game development process is a complex one with many interconnected parts to it. Many developers will focus and specialise in one or two of these areas and collaborate with others to complete the entire process.

There is the coding, asset development, game testing, planning, sound engineering and many more.

[https://www.youtube.com/watch?v=7C92ZCnlmQo](https://www.youtube.com/watch?v=7C92ZCnlmQo)

# Practical Exercises

## Game Mechanics

Research Game Mechanics, what they are, and how they relate to Gameplay. 

Research Doom (1993) - identify the game mechanics included.

Choose 2 other games from different genres and list their game mechanics.

What makes a game fun to play?

What are some popular game genres?

## The Easiest Game Design Exercise in the World!

In this exercise, you will develop a game in a short amount of time.

[https://docs.google.com/presentation/d/1v86BNddg7cqvMLcZWOfY3w5-V6kH4GzBqDLIoN7lqr8/edit?usp=drive_web](https://docs.google.com/presentation/d/1v86BNddg7cqvMLcZWOfY3w5-V6kH4GzBqDLIoN7lqr8/edit?usp=drive_web)

- Step Overview
	1. Draw the path.
	2. Write the story
	3. How do the players move?
	4. Add conflict
	5. Play the game.

# Review

1. How were the first computers programmed?
2. Where did the name "bug" originate?
3. What is this "Hello World" you speak of?
4. In plain language, What is the difference between interpreted and compiled code?
	1. Expand on your explanation by adding technical details.
5. What is the best programming language to learn? Why?
6. What makes a game fun?



# Version Control - Godot


# GDScript Implementation

N/A



## Opening the project

Open Godot, and in the Project Manager, Click Import and then choose the `project.godot` file in the folder you just cloned. 

This will open the project in Godot and allow you to edit the game visuals and code.

![[_images/Screen_Shot_2022-01-10_at_10.15.03_pm.png|Screen Shot 2022-01-10 at 10.15.03 pm.png]]

# Review


# Computational Thinking - Godot


# GDScript Implementation

Read the information on the Computational Thinking page above.

# Practical Exercises

# Review

Consider the following problem. Decompose it into smaller problems.

The ACT Government has given you a grant to educate the public on the flora & fauna around the bike path / walkway around Lake Tuggeranong due to your experience. You are tasked with building an informational software package for users to use and learn from.


# Mathematical & Logic Operations- Godot


# Specific Implementation

Read and practice all topics under [Mathematical & Logic Operations](https://www.notion.so/Mathematical-Logic-Operations-fbb6dd5a5acf434799d572e3e70a4e02?pvs=21).

# Practical Exercises

Using [https://circuitverse.org/](https://circuitverse.org/) draw the following Logic Circuits, and then complete the truth tables for each. You can use Google Sheets to create the truth tables if needed.

1. $(AB) + \overline{(AC)}$
2. ${\overline{AB} + {\overline{BC}}}$
3. ${\overline{\overline{AB} + {\overline{BC}}}}$
4. $A. \overline{B} + C\overline{(A.B)}$
5. $\overline{A}B\overline{C}$
6. $\overline{\overline{A}.\overline{B}} + C$

### For Example

$AB+C$

![[Main.png]]

![[Screen_Shot_2021-12-16_at_12.51.18_pm.png|Screen Shot 2021-12-16 at 12.51.18 pm.png]]

Simplify the following boolean equations. Show your working, and identity which rule you're using at each step.

1. $AA + B$
2. $C + \overline{BC}$

Complete the Karnaugh Map process for each of the following equations:

1. 
	
	![[commonality-of-boolean-variables-example-one.webp]]
	
2. 
	
	![[02834x01.webp]]
	
	![[02834x02.webp]]
	

# Review

Discussion: Why is logic important when learning software development?

Discussion: What is the purpose of Karnaugh Maps and how does it assist us in developing solutions?

1. Go to [https://learn.electronics-course.com](https://learn.electronics-course.com/) (sign in with your school Google Account to save your progress) and complete the following projects:
	1. NAND Gate
	2. Half Adder
	3. Care Safety Buzzer


# Variables and Data Types - Godot


# GDScript Implementation

In GDScript, variables are declared using the `var` keyword, but unlike some other languages, GDscript uses a technique called type inference, where the data type is *inferred* from the data that is used in the declaration. If there is no data given, then you must declare the data type.

GDScript is also a dynamically typed language, meaning that a variable can change data types as needed during execution. This is different from other languages (namely C-based languages like Java or Arduino) which are statically typed, meaning once the data type of a variable is set, it cannot change.

## Declaring variables

When declaring variables in a script, you

```
var starting_value = 5           // starting_value would be set as an integer
var welcome_message = "Hello"   // welcome_message would be set as a string.
```

## GDScript Data Types

In GDScript, there are a number of the standard primitive types. The syntax for each of these are:

| Syntax | Data type | Description | Possible Values |
| --- | --- | --- | --- |
| null | null | Empty data that contains no information - different from 0.  |  |
| int | Integer | It is stored as a 64-bit value, meaning 64 bits are allocated to memory for each integer variable. | −9223372036854775808, +9223372036854775807 |
| bool | Boolean | Each **`bool`** variable occupies one byte of memory. | `true` or `false`.  |
| float | Float | Numbers with decimal point values | 5.3
0.1 |
| String | String | Complex (non-primitive) data type. Comprised of a series of characters in an array. Use double quotes. An an array, Strings allow for more complex functionality, such as converting to integers, searching for substrings, converting to upper case etc. | "Lake Tuggeranong College"
"32" |

## Constants

When declaring constants in GDScript, use the const keyword *before* the data type.

```
const MAXIMUM_VALUE = 5
```

## Complex Data Types

As a language for a game engine, GDScript uses many complex data types to assist in the game development process. These are structures which contain multiple individual pieces of data and functionality to assist the developer. 

For example, [This page](https://docs.godotengine.org/en/stable/classes/class_vector2.html#class-vector2). This data type (officially referred to as a class) allows the developer to store the `x` and `y` coordinates of a point in the game window, such as the players position on a 2D screen. 

This structure, and others similar to it, will be used throughout the development process and allows for additional functionality. Read the definition for more details:

[https://docs.godotengine.org/en/stable/classes/class_vector2.html#class-vector2](https://docs.godotengine.org/en/stable/classes/class_vector2.html#class-vector2)

# Practical Exercises

<aside>
‼️ The goal of this tutorial is to implement a limit to how many player bullets can appear on screen at once.

</aside>

Open `Global.gd`. This script will hold any code and/or variables that are required throughout the whole project, rather than relating on a specific node.

![[ISD/Software Dev Fundamentals - GodotV3/_images/Untitled.png|Untitled]]

Start by adding the first line of any GDScript file, which is identifying what type of object this script is attached to. In this case it’s `Node` as it’s not attached to any specific node.

```
extends Node
```

Declare a new variable to store the number of bullets currently in the scene.

<aside>
‼️ GDScript *infers* that this new variable is an integer based on the assigning of 0.

</aside>

![[ISD/Software Dev Fundamentals - GodotV3/_images/Untitled 1.png|Untitled]]

```
var bulletInstanceCount = 0 # Keeps track of how many bullet instances are current
```

Declare another variable for the number of enemy bullet currently in the scene.

<aside>
‼️ GDScript *infers* that this new variable is an integer based on the assigning of 0.

</aside>

![[ISD/Software Dev Fundamentals - GodotV3/_images/Untitled 2.png|Untitled]]

```
var enemyBulletInstanceCount = 0
```

Save the File.

![[commonBlocks#Commit & Push]]

Open `Bullet/Bullet.gd` . In this script, the `_ready()` function executes each time a bullet is instantiated in the game. This can be used to also increase the count of bullet instances through `Global.gd`. 

Increase `bulletInstanceCount` by 1.

This done through accessing the `GlobalVariables` object which is a single instance of the [`Global.gd`](http://Global.gd) script. This has been pre-defined for your benefit.

![[_images/Untitled 3.png|Untitled]]

```
GlobalVariables.bulletInstanceCount += 1
```

![[commonBlocks#Commit & Push]]

Open [Player.gd](http://Player.gd)

Before creating an instance of a new bullet, first check that there aren’t more than 3 bullets currently in the scene. 

```mermaid
flowchart TD
	decisionBullet{"Less than three bullets in game?"}
	terminalEnd([Continue executing game])
		instantiateBullet["Instantiate Bullet"]
		decisionBullet --> |Yes| instantiateBullet
		instantiateBullet --> terminalEnd
decisionBullet --> |No|terminalEnd
```

<aside>
‼️ Don’t forget to indent the three lines that already exist, this will ensure that they will only execute if the if statement is `true`.

</aside>

![[_images/Untitled 4.png|Untitled]]

```
if GlobalVariables.bulletInstanceCount < 3:
```

![[commonBlocks#Commit & Push]]

Run the game and test to make sure the game only can create three bullets.

## Reducing the bullet instance count

Open `Bullet.gd`. 

`bulletInstanceCount` gets increased when a bullet is instantiated through `_ready()`. A bullet instance needs to be removed from the execution of the game under 2 conditions:

1. The bullet hits an enemy, or
2. The bullet leaves the play area (moves off the screen).

The game has been pre-built so that if the bullet moves off screen, it will collide with an invisible object. 

This means that both cases list involve collisions!

In `_physics_process(delta)` add an if statement to check to see if the bullet has collided with anything:

![[_images/Untitled 5.png|Untitled]]

```
if (collidedObject):
```

<aside>
‼️ If the bullet has collided with an object, then `collidedObject` will contain some data and therefore return `true`.

</aside>

If the bullet has collided with an object, remove it from the game and then reduce by 1.

![[_images/Untitled 6.png|Untitled]]

```
queue_free()
GlobalVariables.bulletInstanceCount -= 1
```

Test the game and the bullets should disappear once they collide with anything. Once a bullet has been deleted from the game, you will then be able to shoot more, up to a maximum of 3 bullets at a time.

The last check to do is to check whether the bullet has collided with an enemy object. This is to be done **before** the `queue_free` command, because before you delete the bullet, the enemy needs to be deleted.

![[_images/Untitled 7.png|Untitled]]

```
if "Enemy" in collidedObject.collider.name:
	collidedObject.get_collider().queue_free()
```

Test the game now. When the bullets hit the enemy objects, the enemy and the bullet are removed from the game.

![[_images/2023-02-12_23-50-41.2023-02-12_23_51_13.gif|2023-02-12 23-50-41.2023-02-12 23_51_13.gif]]

# Review

1. How is data stored in memory?
2. What’s the difference between primitive and non-primitve data types?
3. What is type inference?
	1. Find three programming languages that use type inference.
4. What is the opposite of type inference?
	1. Find three programming languages that don’t use type inference.
5. What does strongly typed and weakly typed languages mean?


# Style Guide - Godot


# Specific Implementation

## Naming Conventions

In GDScript, the conventions for naming items are:

| Variables | snake_case |
| --- | --- |
| Constants | CONSTANT_CASE |
| Functions | snake_case |

It is also standard convention to include comment blocks at the top of the code to explain the code, but also to include function header comments to explain the purpose of each function.

### Example

```python
##	Detects when the player has collided with a Area2D, and checks the group. 
##	Code keeps the player within the boundaries of the game area by "bouncing" off the sides.
##	If the player colleided with the "left" group, the player is moved to the right
##	If the player collided with the "right" group, the player is moved to the left.
func _colliding(collided_area):
	if collided_area.is_in_group("left"):
		position.x=50
	if collided_area.is_in_group("right"):
		position.x=1230
```

## Code Commenting

Comments should be written in plain language to convey the meaning or purpose of the code to the viewer without them needing to read any of the specific code.

There are three areas to write code comments.

### Script Explanation or Summary

At the top of each script file, the **class docstring** should be included to explain the general purpose of the script.

```python
extends Node
## This singleton holds the global variables needed for the game to run.
## They are accessible throughout all scenes.
```

### Function Explanation or Summary

Each function written should have a comment explaining the purpose of the function.

```python
##	Detects when the player has collided with a Area2D, and checks the group. 
##	Code keeps the player within the boundaries of the game area by "bouncing" off the sides.
##	If the player colleided with the "left" group, the player is moved to the right
##	If the player collided with the "right" group, the player is moved to the left.
func _colliding(collided_area):
	if collided_area.is_in_group("left"):
		position.x=50
	if collided_area.is_in_group("right"):
		position.x=1230
```

### Inline Comments

Complex code sections should be explained in plain language.

```python
func _physics_process(delta):
	var collidedObject = move_and_collide(Vector2(0, -speed*delta))
	
	# If the bullet collides with an "Enemy" object, delete it 
	# and add to the player score.
	if (collidedObject):
		if "Enemy" in collidedObject.collider.name:
			collidedObject.get_collider().queue_free()
			GlobalVariables.scoringInformation["currentScore"] += 10
		queue_free()
```

# Practical Exercises

1. Update all existing code to match naming conventions & function header comments.

# Review

1. 


# Algorithm Design - Sequence - Godot


# Specific Implementation

When programming in GDScript, you will be writing many blocks of code that are in a sequence.

In this example here, you will see that the function `_ready()` (more on this later) contains a sequence of instructions. 

![[Screen_Shot_2022-01-17_at_9.38.14_pm.png|Screen Shot 2022-01-17 at 9.38.14 pm.png]]

Line 11 declares a new variable (with the `var` keyword), called name which is assigned the data “Player One”. Using type inference, this variable is defined as a string.

Line 12 is similar to line 11, however this variable is named welcome and is assigned the string “Hello”

Line 13 defines a new variable called message, and the data that is assigned is a concatenation of three strings - `Hello`, a space, and `Player One`.

Line 14 is blank and is therefore ignored when it is executed.

Line 15 outputs the contents of the message variable to the console within Godot.

<aside>
‼️ When programming in GDScript, **indentation** is critical. Code that needs to be part of a loop, decision or function needs to be indented at the same level (tabs) to be considered coded correctly.

</aside>

This code is a sequence because it is run sequentially - Line 11 is run, then Line 12, then 13 etc. 

It’s also important to note that each line of code does not have any understanding of what is before or after it - so when the print command is executed on Line 15, it does not know what is in message until it is run.

It’s also important to note that as a developer, you can change the lines of the code prior to it and the other lines of code will not be effected, as long as you don’t change the variables and/or data types involved. So, you could modify the code to accept the players name from a dialog box on screen and the remainder of the code will still run.

# Practical Exercises

Open the **Software Development Fundamentals** project, and open the `MainGame/MainGame.gd` script file. 

<aside>
💡 This script is attached to the MainGame scene and runs when that scene is loaded when the game is executed. In this game, this scene is the first scene run.

</aside>

![[_images/Screen_Shot_2022-01-17_at_9.54.53_pm.png|Screen Shot 2022-01-17 at 9.54.53 pm.png]]

Under the extends Control line, remove the commented lines about declaring variables - this is default code when a new script is created. 

In this section of code, you will be developing the code to link a onscreen element to code. In this case, you’ll be initialising the countdown timer, so your game has a time limit.

Create two new variables. The first is the amount of time available to the game - call this `countdownMax`. The second is the current time, which is reduced by 1 every second - call this `currentTimer`.

![[_images/Screen_Shot_2022-01-17_at_10.00.16_pm.png|Screen Shot 2022-01-17 at 10.00.16 pm.png]]

- Code
	
	```
	export(int) var countdownMax
	var currentTimer
	```
	

You’ll notice that countdownMax has a few extra commands. The keyword export allows the variable to be accessed outside of the script, specifically through the Godot IDE, and int is informing the IDE that it is an integer. 

When you have the MainGame node selected in the hierarchy, you’ll be able to access the Script Variables in the inspector.

<aside>
💡 **Why would you want this?** 
This allows the same script to be used in different ways. For instance, you could use this same script on different levels with different starting times, but the remainder of the code logic is the same.

</aside>

Now that the variables have been defined, it’s time to move to the `_ready` function.

![[_images/Screen_Shot_2022-01-17_at_10.03.17_pm.png|Screen Shot 2022-01-17 at 10.03.17 pm.png]]

In the `_ready()` function - under `func _ready():` - assign the value of `countdownMax` to the `currentTimer`. This is done so later in the code, you will reduce `currentTimer` by 1, but leave the original value alone.

The next line of code is more complex. First, consider the whole line:

`$HUD/Countdown.text = str(currentTimer)`

Starting on the right-hand side, this gets the value that is stored in currentTimer, and passes it as an argument to the `str()` function. The `str()` function converts an integer to a string. 

The result of that function (converting the int to a string) then gets assigned to `$HUD/Countdown.text` which is GDScripts syntax for “Look in the hierarchy for something called `HUD` which is a child of the node that this script is attached to. Underneath that is something called `Countdown`, and look for the text component in that.” 

Or in more programming terms - access the text property of the Countdown node, which is a child of HUD and set the value.

![[_images/Screen_Shot_2022-01-17_at_10.18.11_pm.png|Screen Shot 2022-01-17 at 10.18.11 pm.png]]

- Code
	
	```
	currentTimer = countdownMax
	$HUD/Countdown.text = str(currentTimer)
	```
	

Set the starting time in the IDE to a value (say 50).

Make sure you select the Node in the hierarchy!

![[_images/Screen_Shot_2022-01-17_at_10.20.43_pm.png|Screen Shot 2022-01-17 at 10.20.43 pm.png]]

## Run the Game

Press the Run button in the top right to run the game. 

![[_images/Screen_Shot_2022-01-17_at_10.21.51_pm.png|Screen Shot 2022-01-17 at 10.21.51 pm.png]]

You should notice that it opens into a very uninteresting game which no movement or interaction, however the timer in the top left hand corner of the window should show the value that you set as the starting timer for the game!

Well done!

![[_images/Screen_Shot_2022-01-17_at_10.23.23_pm.png|Screen Shot 2022-01-17 at 10.23.23 pm.png]]

## What’s next??

Over the next few weeks you’ll develop this game into much more - the timer will count down, the enemies will move (you can also change the images if you wish), and you will be able to move the player and shoot!

# Review

1. Write the sequence of steps to make and eat toast.
2. Write the sequence of steps to 
	1. Read in individual lines of a text file (use the one shown)
	2. Calculate the GST
	3. Output the GST component to the user.
		
		![[_images/Screen_Shot_2022-01-27_at_9.44.53_pm.png|Screen Shot 2022-01-27 at 9.44.53 pm.png]]
		


# Algorithm Design - Decisions - Godot


# Specific Implementation

## if..then..

In GDScript, the if block follows the standard syntax of if statements in other languages as can be seen here. Note the semi-colon (:) at the end of the line of the if statement.

Also note how the following line statement(s) is indented. This indicates that this line or block is to be executed in the condition is true.

```
if [condition]:
	statement(s)
```

### if..then.. Example

In this sample code, at the end of the game, the players score is checked against the previously set high score. If the players score - `currentScore` - is higher than the previously set high score - `highScore` - then the high score is reset to the current score, and the player is informed by updating the user interface.

```
if currentScore > highScore:
	highScore = currentScore # Set new high score
		$HUD.dialog.text = "Well done! You got a new high score"
```

## if..then..else..

Similarly to the standard if..then.., the addition of the else follows the standard pattern. Again notice the semi-colon and the indentation.

```
if [expression]:
	statement(s)
else:
	statement(s)
```

### if..then..else.. Example

This example extends the previous version by including an else clause. If the players score is not higher than the previously set high score, then the player is informed but told to improve.

```
if currentScore > highScore:
	highScore = currentScore # Set new high score
		$HUD.dialog.text = "Well done! You got a new high score"
else:
		$HUD.dialog.text = "Not good enough. Try again!"
```

## elif

GDScript, like Python has an addition option in the if...then structure, and that’s elif. This is shorthand for `else..if`. 

This allows you to include code to test for multiple conditions in a “nicer” fashion. 

This sample code adds an additional check. If `currentScore` is not greater than highScore the code will then check if `currentScore == highScore` is true. If true, it will run the code on the following line, otherwise it will jump to the else: clause as normal.

```
if currentScore > highScore:
	highScore = currentScore # Set new high score
		$HUD.dialog.text = "Well done! You got a new high score"
elif currentScore == highScore:
		$HUD.dialog.text = "You equalled the top score. So Close! Try again!"
else:
		$HUD.dialog.text = "Not good enough. Try again!"
```

## Match

The basic syntax for a match block is shown here. 

<aside>
💡 In GDScript, a match block is the equivalent to switch..case in other languages.

</aside>

match compares the condition or a variable against possible values, listed as patterns there. If there is a match, then the associated block of code is run.

```
match [condition]:
	[[s|pattern]]:
		[block]
	[[s|pattern]]:
		[block]
	[[s|pattern]]:
		[block]
```

There are different, and more complex ways of using match blocks, which can be read [https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/gdscript_basics.html#match](https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/gdscript_basics.html#match), however a simple example given on that page is this.

In this situation, the value stored in the variable being checked - x - is compared to each of the sections. 

If x == 1, then the command `print("We are number one!")` would be executed.

If x == 2, then the command `print("Two are better than one!")` would be executed.

If x == “test”, then `print("Oh snap! It's a string!")` would be executed. As GDScript is a dynamic typed language, x could be an int or a string, so this code is completely valid.

```
match x:
	1:
		print("We are number one!")
	2:
		print("Two are better than one!")
	"test":
		print("Oh snap! It's a string!")

```

## **Comparison Operators**

The standard *comparison* operators in GDScript are shown here and can be used in `if` conditions.

| Operator | Description |
| --- | --- |
| `!` | Not |
| `x == y` | x is equal to y |
| `x != y` | x is not equal to y |
| `x < y` | x is less than y |
| `x > y` | x is greater than y |
| `x <= y` | x is less than or equal to y |
| `x >= y` | x is greater than or equal to y |

# Practical Exercises

In the ongoing Software Development Fundamentals project, open the Player.gd script in the Player folder. 

## Player Movement

In this section you’ll learn how to program the player node to move left and right based on key input from the user.

This script is attached to the Player node (which is the Firefly class freighter in the game). Currently the script has only one command, which is `pass`, meaning nothing.

The default `_ready()` function runs as soon as the node (in this case Player) enters the game scene when the scene is run. In effect, it runs on any object with a script, as soon as that object appears in the game.

![[_images/Screen_Shot_2022-01-18_at_8.57.29_pm.png|Screen Shot 2022-01-18 at 8.57.29 pm.png]]

Before any movement can be performed, you will need to set a base movement speed. At the top of `Player.gd` create a new variable and give it a value of 200.

![[_images/Screen_Shot_2022-01-18_at_9.22.08_pm.png|Screen Shot 2022-01-18 at 9.22.08 pm.png]]

- Code
	
	```
	var movement_speed = 200
	```
	

Replace `pass` with `set_physics_process(true)` in the _ready() function.

This function, when run with the argument true, enables physics processing on the node. Physics processing will allow the ability to move the object in game.

![[_images/Screen_Shot_2022-01-18_at_9.04.25_pm.png|Screen Shot 2022-01-18 at 9.04.25 pm.png]]

- Code
	
	```
	set_physics_process(true)
	```
	

Create a new function - called `_physics_process(delta)` . 

Note the indentation of the new function and how it lines up with `func _ready()`. This means that the new function is **not** a part of the `_ready()` function.

This function is another function that is built into the Node class in GDScript, meaning that all nodes have this function available, even if it’s not coded or referenced.

You can research all the functions and settings for all Nodes [here](https://docs.godotengine.org/en/stable/classes/class_node.html).

![[_images/Screen_Shot_2022-01-18_at_9.15.33_pm.png|Screen Shot 2022-01-18 at 9.15.33 pm.png]]

Now it’s time to create the logic of the physics of the player node, which luckily is fairly simple:

- If the player presses “left”, move the player object left on the screen.
- If the player presses “right”, move the player object right on the screen.

### Logic Implementation

The logic may be simple, however how this is achieved may look complex, so focus on each section.

Both if blocks use the function `Input.is_action_pressed()`. This function is part of the Input class of functions, which handles all input events for Godot. The Input class manages inputs from keyboard, mouse, VR controller, console controllers etc.

The `is_action_pressed()` returns `true` if an input event has been detected for the given action.

Therefore, the first input block (on line 15) will return `true` if the user has pressed the button which matches `ui_left`, and the second will return true if the user pressed a button associated with `ui_right.`

If the user has pressed the left arrow button, the first if statement will be true and it will therefore execute the command `move_and_collide(Vector2(-movement_speed * delta, 0))`. `move_and_collide()` is a function which will move the Node in the direction indicated until a collision has occurred. 

![[_images/Screen_Shot_2022-01-18_at_9.23.04_pm.png|Screen Shot 2022-01-18 at 9.23.04 pm.png]]

- Code
	
	```
	func _physics_process(delta):
		if Input.is_action_pressed("ui_left"):
			move_and_collide(Vector2(-movement_speed * delta, 0))
		if Input.is_action_pressed("ui_right"):
			move_and_collide(Vector2(movement_speed * delta, 0))
	```
	

### Move_and_Collide

The offical definition of `move_and_collide` is:

> This method takes one parameter: a [https://docs.godotengine.org/en/stable/classes/class_vector2.html#class-vector2](https://docs.godotengine.org/en/stable/classes/class_vector2.html#class-vector2) indicating the body's relative movement. Typically, this is your velocity vector multiplied by the frame timestep (`delta`). If the engine detects a collision anywhere along this vector, the body will immediately stop moving. If this happens, the method will return a [https://docs.godotengine.org/en/stable/classes/class_kinematiccollision2d.html#class-kinematiccollision2d](https://docs.godotengine.org/en/stable/classes/class_kinematiccollision2d.html#class-kinematiccollision2d) object.
[https://docs.godotengine.org/en/stable/tutorials/physics/using_kinematic_body_2d.html#move-and-collide](https://docs.godotengine.org/en/stable/tutorials/physics/using_kinematic_body_2d.html#move-and-collide)
> 

This complex answer can be cut down to - move the node by `movement_speed`, defined earlier, along the x axis. The higher the number, the faster it moves. `Vector2` has two parameters - x and y. The code given only impacts the x value (the other be `0`), meaning that the node only moves along that axis. In effect, the player (at this stage) is limited to only moving left and right and **cannot** move up and down. This functionality may be added later.

But it’s not that simple because there is a problem - what if the computer you’re running the game on is really fast, or really slow? How can this be “fixed”. The answer is delta time.

### Delta Time

Delta time is a very important topic with game development. Delta is the time since the last frame refresh (the frame rate), or more specifically, the time since the last time the `_process()` function was called. 

Multiplying `movement_speed` by delta “fixes” the problem of movement in games on computers with different frame rates.

[Understanding Delta Time](https://drewcampbell92.medium.com/understanding-delta-time-b53bf4781a03)

[https://www.youtube.com/watch?v=cikN_k_dm7I](https://www.youtube.com/watch?v=cikN_k_dm7I)

### What Keys match what Input event?

To review, or edit, the key mapping, go to the Project Settings (under the Project menu) and look under the Input Map tab. 

Here you can see which keys match `ui_left`, `ui_right`, `ui_up`, `ui_down` etc. You can edit them if you wish.

You can also add new actions if needed in your game. `fire` is a custom action that is not part of the default action and has already been added for use later in the project.

![[_images/Screen_Shot_2022-01-18_at_9.36.19_pm.png|Screen Shot 2022-01-18 at 9.36.19 pm.png]]

## Run the Game

Test moving the player left and right!

Are the any bugs or unexpected behaviour?

![[_images/2022-01-18_21-59-04.2022-01-18_22_01_23.gif|2022-01-18 21-59-04.2022-01-18 22_01_23.gif]]

## Challenge - Boundaries

You may have noticed that the player can move out of bounds and off screen at this stage. This is not ideal. Typically, you would want the player to remain on screen during game play. The challenge is to develop code to do this. 

<aside>
💁 There are a number of approaches to this. Solutions are generally not “wrong” or “right”, some are more efficient or simpler than others, but rarely “wrong”.

</aside>

### One approach

One approach is to check the current x or y position of the player. If that value is outside of the bounds that you, the developer, decide then the player movement is overridden. 

Start with just one boundary, get that working and then expand it to the other 3 sides of the game window. For example. Start with the left-hand side of the game window.

```mermaid
graph TD;
terminalStart([_physics_process])
case1{x position > 10}
movement["Move player left"]
terminalEnd([End])
terminalStart-->case1
case1-->|Yes|movement
movement-->terminalEnd
case1-->|No|terminalEnd

```

The code already developed does the majority of the heavy lifting for you already in the [player.gd](http://player.gd) script under `_physics_process(delta)`:

![[_images/Screen_Shot_2022-02-15_at_8.01.24_am.png|Screen Shot 2022-02-15 at 8.01.24 am.png]]

`move_and_collide()` in this case does the movement as indicated by the “Move Player Left” in the flowchart.

You will need to add another decision - if - to your code to check the players position before running the `move_and_collide()` command.

<aside>
💁 Hint: using the built in variable position will give the x and y coordinates of the node that the script is attached to (in this case the player).
`position` has two sub-variables called x and y, giving the x and y coordinates.
using `position.x` will give the players x position in the game.

</aside>

Once you have that working, continue the same logic and approach to the other sides. Remember: switch to `position.y` for the top and bottom.

### Video Demonstration

This video shows how to approach the above problem if you’re struggling.

[https://youtu.be/Ry3D9X0VqUk](https://youtu.be/Ry3D9X0VqUk)

![[_images/49F7B8EC-AD52-40CC-825A-5AA2FC4C6475.jpeg|49F7B8EC-AD52-40CC-825A-5AA2FC4C6475.jpeg]]

# Review

1. Describe a decision in programming using plain language.
	1. Update the sentence with more technical language. 
2. What’s a nested if statement?
3. What’s the difference between a nested if block and a case switch?
4. Could you implement `_physics_process()` to use `else`, `elif` or `match`?
5. How would you implement player movement up and down?



# Algorithm Design - Loops - Godot


# GDScript Implementation

The GDScript language has  two loop structures identified on the General Learning Resource - `while` and `for` but not `do..while` . 

Here you can see the syntax and an example of each.

## While Loop

```python
while [expression]:
	//statement(s)
```

### Example

```python
while countdownTimer < 50:
	countdownTimer = countdownTimer - 1
```

## For Loop

for loops in GDScript are a little different than the syntax shown in General Resources. The syntax mirrors the for in loop in Python. Technically, they are called `for-in` loops and they hide much of the syntax that is required with a “traditional” for loop. 

They are more aimed at iterating over arrays or dictionaries and similar structures.

These types of for loops can be used in different ways depending on the purpose.

### Examples

A simple example of the for-in loop is:

```python
for i in range(3):
	print(i)
```

This example shows a loop which will iterate three times. The variable `i` can be accessed and used in the statement blocks, as shown where it will print out:

`0`

`1`

`2`

---

In the example below, the loop executes (iterates) three times, with the value stored in x changing for each iteration. The first time it iterates, x is 5, then it is 7 and finally 11.

```python
for x in [5, 7, 11]:
	statement # Loop iterates 3 times with 'x' as 5, then 7 and finally 11.
```

[https://www.youtube.com/watch?v=GS-lAZBNm6k](https://www.youtube.com/watch?v=GS-lAZBNm6k)

# Practical Exercises

Previously, a countdown timer was configured, but without loops, it would be difficult to fully implement. Now’s the time.

Open the ongoing project and open the `MainGame.gd` script. This script will be expanded to reduce the `currentTimer` by 1 each second. 

When the timer reaches 0, a message will be printed to the console. This can be modified later to quit the game, or display a dialog box or similar, however at this stage, this will be fine.

![[Screen_Shot_2022-01-18_at_11.37.00_pm.png|Screen Shot 2022-01-18 at 11.37.00 pm.png]]

In `_ready()` create a while loop which will run as long as `currentTimer` is above 0.

<aside>
💡 In this case, the while loop is the most appropriate choice, over a for loop, as currentTimer needs to be modified within the loop iteration. In a for loop, the value is readonly.

</aside>

![[_images/Screen_Shot_2022-01-18_at_11.39.55_pm.png|Screen Shot 2022-01-18 at 11.39.55 pm.png]]

- Code
	
	```python
	while currentTimer > 0:
	```
	

## Loop Logic

Update the while loop to execute the following logic:

- Pause for 1 second
- Reduce the timer by 1
- Print the timer value to the console (for debugging)

## Loop Code

The code shown achieves this, but let’s go into the details.

`yield()` is the GDScript function to pause the execution of the current code block, *but still allow other functions to run*. This is important as you wouldn’t want the game to freeze for a simple counter. This is referred to as a **coroutine** function.

`yield()` pauses for 1.0 seconds (`get_tree().create_timer(1.0)`) and when the timer expires, the “`timeout`” signal is issued, indicating to Godot that the execution can continue to the next line of code.

`currentTimer = currentTimer - 1` subtracts 1 from currentTimer and replaces the contents with the new value.

`print(currentTimer)` outputs the value of `currentTimer` to the console.

![[_images/Screen_Shot_2022-01-18_at_11.48.24_pm.png|Screen Shot 2022-01-18 at 11.48.24 pm.png]]

- Code
	
	```python
	while currentTimer > 0:
			yield(get_tree().create_timer(1.0), "timeout")
			currentTimer = currentTimer - 1
			print(currentTimer)
	```
	

If you run the project now, the game itself wouldn’t change, however you would see this in the console.

![[_images/2022-01-18_23-57-47.2022-01-18_23_58_09.gif|2022-01-18 23-57-47.2022-01-18 23_58_09.gif]]

## Update the Game User Interface

Luckily, updating the UI is straightforward.

Update the `while` loop to change the text property of the Countdown node as has been done previously.

![[_images/Screen_Shot_2022-01-19_at_12.01.50_am.png|Screen Shot 2022-01-19 at 12.01.50 am.png]]

- Code
	
	```python
	$HUD/Countdown.text = str(currentTimer)
	```
	

## Timer 99_Finished

When `currentTimer` reaches 0, the loop will complete and not iterate again.

Add a `print()` command to output “Game Over” to the console.

![[_images/Screen_Shot_2022-01-19_at_12.05.23_am.png|Screen Shot 2022-01-19 at 12.05.23 am.png]]

## Run the Game

Run the project, and make sure that the timer counts down, all the way to 0. It should then output “Game Over” to the console.

![[_images/2022-01-19_00-02-40.2022-01-19_00_03_49.gif|2022-01-19 00-02-40.2022-01-19 00_03_49.gif]]

# Review

1. What is the difference between the available types of loops? Why choose one of the other/s?
2. How many times can loops iterate?
3. As an update to last weeks exercise write the steps in plain language, **using loops**, to 
	1. Read in individual lines of a text file (use the one shown)
	2. Calculate the GST
	3. Output the GST component to the user.
		
		![[_images/Screen_Shot_2022-01-27_at_9.44.53_pm.png|Screen Shot 2022-01-27 at 9.44.53 pm.png]]
		



# Algorithm Design - Modularisation - Godot


# GDScript Implementation

Functions in GDScript work similarly to functions in other languages - they are designed to organise and simplify your code, and allow you to reuse blocks of code.

`print()` is a built in function that allows you to output data to the console for debugging purposes - the player of your game would never see the output.

`_physics_process()` is a function which is called when physics (gravity, movement etc) needs to be applied to an object in the game.

Like other language, GDScript functions can accept parameters - such as `delta` in the example, and can also optionally return data with the `return` keyword.

<aside>
💡 The keyword for writing functions in GDScript is `func`.

</aside>

![[_images/Screen_Shot_2022-01-19_at_10.50.00_pm.png|Example function from Player.gd]]

Example function from Player.gd

## Parameters

GDScript functions can have parameters or not.

### Example - Function Without Parameters

```python
func my_function():
	pass
```

### Example - Function With Parameters

```python
func my_function(a, b):
	pass
```

If the data type of the parameters are not specified, the function can accept any variable, however this may not be ideal in all cases. It is possible to specify the data type of parameters in the function header. It is also possible to specify default values in parameters.

### Example - Parameters with specified data types

```python
func my_function(a: int, b: String):
	pass
```

### Example - Parameters with default values

```python
func my_function(int_arg := 42, String_arg := "string"):
	pass
```

## Return Data

Like other languages, GDScript languages can return data or not, depending on the needs and structure of the code.

<aside>
💡 Functions without a return keyword will return null by default.

</aside>

### Return Example

```python
func my_function(a, b):
	print(a)
	print(b)
	return a + b  # Return is optional; without it 'null' is returned.
```

### Return Example Specifying Data Type

Functions can also specify the return data type. This may be required if writing large code libraries, or for more robust code avoiding type errors. To specify the return data type, use the `->` symbol. 

```python
func my_int_function() -> int:
	return 0
```

# Practical Exercises

To demonstrate function implementation in GDScript, player shooting will be coded, as well as limiting the player to within the game area.

## Player Shooting

The logic for this section of the code is:

- Check if the player presses the space bar.
- If so, create a bullet object above the player object
- Add movement to the bullet to move vertically

Open Player.gd and create a new global variable to store the image of the bullet that will be fired.

Using the `preload` keyword means that the bullet scene (`Bullet.tscn`) is loaded into memory before the game scene loads. In this case it may not be an issue, however if the object being loaded was resource intensive, using preload may avoid the game lagging when loading objects.

![[_images/Screen_Shot_2022-01-19_at_11.36.41_pm.png|Screen Shot 2022-01-19 at 11.36.41 pm.png]]

- Code
	
	```python
	var bulletSource = preload ("res://Bullet/Bullet.tscn")
	```
	

Update `_ready()` to run `_process()` every frame refresh.

![[_images/Screen_Shot_2022-01-19_at_11.34.46_pm.png|Screen Shot 2022-01-19 at 11.34.46 pm.png]]

- Code
	
	```python
	set_process(true)
	```
	

Complete `_process()`. 

Here’s the explanation

**Line 23**: similar to _physics_process(), this if statement checks to see if the player pressed the fire button (the space bar in this case).

<aside>
💡 `is_action_just_pressed()` returns true when the player has just stopped pressing the button, whereas `is_action_pressed()` triggers when the player is *currently* pressing the button.

</aside>

**Line 24**: Creates, in memory, a new **instance** of the bullet scene.

<aside>
💡 An instance is an individual implementation of a specific object. Therefore you can have multiple instances of a bullet, based on the original object.

</aside>

**Line 25**: Sets the position of the bullet instance to the `x` and `y` coordinates of the player object, with reducing the `y` coordinate value by 20 pixels. This places the bullet just above the player object. You may change this value to suit the game.

**Line 26**: Creates the bullet instance in the game scene. Up until this line, the bullet has only been instantiated in memory. This line puts it into the scene as a child of the player object.

![[_images/Screen_Shot_2022-02-22_at_3.48.55_pm.png|Screen_Shot_2022-02-22_at_3.48.55_pm.png]]

- Code
	
	```python
	func _process(delta):
		if Input.is_action_just_pressed("fire"):
			var bulletInstance = bulletSource.instance()
			bulletInstance.position = Vector2(position.x, position.y-20)
			get_tree().get_root().add_child(bulletInstance)
	```
	

## Add Force

The code, up until now, only creates the bullet instances. If you ran the game now, you’ll see that the bullets get created, but don’t move. In order to achieve movement, each individual bullet instance will need to be effected. This can be done through the bullet object itself.

Open `Bullet\Bullet.gd` and update the script to apply movement to the bullet.

The code in this script is very similar to some of the code in Player.gd. 

The values given on Line 10, mean that the bullet won’t change on the `x` axis (left and right), but only move upwards on the `y` axis.

![[_images/Screen_Shot_2022-01-19_at_11.53.42_pm.png|Screen Shot 2022-01-19 at 11.53.42 pm.png]]

- Code
	
	```python
	extends KinematicBody2D
	
	var speed = 500
	
	# Called when the node enters the scene tree for the first time.
	func _ready():
		set_physics_process(true)
	
	func _physics_process(delta):
		var collidedObject = move_and_collide(Vector2(0, -speed*delta))
	```
	

## Run the Game

When you run the game at this stage, you should see the player can move, and bullets can be fired.

You may notice a few bugs or issues with this functionality at this stage. What issues can you see, and how would you go about fixing them?

![[_images/2022-01-19_23-56-11.2022-01-19_23_56_39.gif|2022-01-19 23-56-11.2022-01-19 23_56_39.gif]]

# Review


# Data Structures - Godot


# GDScript Implementation

## Arrays

Arrays in GDScript operate very similar to other languages and the syntax is similar as well, aligning most closely with Python.

In GDScript, unlike some other languages, arrays can have a mix of data types for the elements. It’s perfectly valid to have an array such as `[int, string, bool]`

<aside>
💡

In GDScript, array indexes start at 0

</aside>

### Declaring Arrays

To declare and empty array, you declare it similar to other variables:

```python
var arr = [] # This creates an empty array.
```

To declare an array with initial values, you can declare it similar to this:

```python
var array = [1, 2, 3]
```

### Accessing Array Elements

In code, you can access (read or write) to specific indexes by specifying the index inside the square brackets. For example:

![[_images/Screen_Shot_2022-01-20_at_11.19.03_pm.png|Screen Shot 2022-01-20 at 11.19.03 pm.png]]

## Key Value Pair

Dictionaries use the curly brackets - `{ }` - to indicate the start and the end of the structure when declaring the initial values.

The item on the left of the equals sign is the `key`, and the item on the right is the `value`. 

<aside>
💡 In GDScript, Key Value Pairs are referred to as *Dictionaries*.

</aside>

### Dictionary Example

In this example, the dictionary called dict, contains three entries. The three keys are - `name`, `score`, and `time`. The values are associated with the indicated key.

`print(dict["name"])` will output “User” to the console.

![[_images/Screen_Shot_2022-01-20_at_11.40.45_pm.png|Screen Shot 2022-01-20 at 11.40.45 pm.png]]

# Practical Exercises

## High Score

Open `Global.gd` in the root of your project. 

There is some code in there already, which you can use at a later stage, however in this stage, you’re going to implement a dictionary.

![[_images/Screen_Shot_2022-02-26_at_1.28.46_pm.png|Screen Shot 2022-02-26 at 1.28.46 pm.png]]

<aside>
💁 This code file is different from other code in the project. So far the code you’ve written has been attached to a particular node. This `Global.gd` is a script which loads when the project loads and is referred to as a `Singleton`. Singletons are useful for when you need to store information across scenes and aren’t loaded and unloaded from memory when nodes are loaded and unloaded.
Information Singletons can be found on the link here.

</aside>

[](https://docs.godotengine.org/en/stable/tutorials/scripting/singletons_autoload.html)

### Global.gd

Declare a dictionary called `scoringInformation`. 

This variable will store:

- currentScore
- currentScorePlayersName
- highScore
- highScorePlayersName

![[_images/Screen_Shot_2022-02-26_at_1.32.37_pm.png|Screen Shot 2022-02-26 at 1.32.37 pm.png]]

- Code
	
	```python
	extends Node
	
	var bulletInstanceCount = 0 # Keeps track of how many bullet instances are current
	var enemyBulletInstanceCount = 0
	
	var scoringInformation = {
		
		
		
	}
	```
	

Create the four entries inside the dictionary. 

![[_images/Screen_Shot_2022-02-26_at_1.55.49_pm.png|Screen Shot 2022-02-26 at 1.55.49 pm.png]]

- Code
	
	```python
	var scoringInformation = {
		"currentScore": 0,
		"currentPlayer": "User",
		"highScore": 0,
		"highScorePlayersName" : "Winner"
	}
	```
	

Now to access and update the dictionary from another script!

### Bullet.gd

Open the `\Bullet\Bullet.gd` script.

This script is attached to each bullet that gets instantiated in the game - i.e. each bullet that gets created when the user presses the fire button.

Currently, this script simply moves the bullet object up through the `move_and_collide()` function.

![[_images/Screen_Shot_2022-02-26_at_2.02.01_pm.png|Screen Shot 2022-02-26 at 2.02.01 pm.png]]

If the bullet collides with an object (say an enemy), that object contains the details on the collision, including the object that it collided against. The code needs to check to see if that object was an Enemy object, and if so, add to the current high score.

First, the code needs to check if the bullet has collided with an object in `_physics_process()` . This is done by checking if collidedObject has data and is not null (empty). Add code to check if the bullet has collided with an object and just print out the name of said object.

![[_images/Screen_Shot_2022-02-26_at_2.07.38_pm.png|Screen Shot 2022-02-26 at 2.07.38 pm.png]]

- Code
	
	```python
	if (collidedObject):
			print(collidedObject.collider.name)
	```
	

<aside>
💁 At this stage, you can run the game, shoot and see the console for the outputted object names. As each enemy object start with the word Enemy, this can be used to confirm if the bullet has collided with an enemy object.

![[_images/Screen_Shot_2022-02-26_at_2.12.46_pm.png|Screen Shot 2022-02-26 at 2.12.46 pm.png]]

</aside>

Add code to check if the collided object is an enemy and if so, delete it from the game.

Run the game, and you should find that the enemy objects get deleted when the bullets collide with them.

One problem you’ll notice is that the bullet *doesn’t* get deleted. This will need to be fixed.

![[_images/Screen_Shot_2022-02-26_at_2.15.10_pm.png|Screen Shot 2022-02-26 at 2.15.10 pm.png]]

- Code
	
	```python
	if "Enemy" in collidedObject.collider.name:
				collidedObject.get_collider().queue_free()
	```
	

Delete the bullet from the game when it collides with anything.

Notice how the `queue_free()` command runs after any collided object is detected, and also whether or not this collided object is an enemy or not. This could be useful further in the development process if barriers are implemented in the game, or for other purposes.

<aside>
💁 `queue_free()` deletes the node from the game at runtime.

</aside>

![[_images/Screen_Shot_2022-02-26_at_2.19.36_pm.png|Screen Shot 2022-02-26 at 2.19.36 pm.png]]

- Code
	
	```python
	queue_free()
	```
	

Finally, update the if block of code to not only delete the enemy but increase the Current Score by 10.

This access the `Global.gd` script through the object name `GlobalVariables`. This is configured in the Project Settings under AutoLoad.

The `scoringInformation` dictionary is then used to access the `currentScore` entry and adds 10 to the value.

<aside>
💁 `+= 10` adds 10 to whatever the integer value is at that time.

</aside>

![[_images/Screen_Shot_2022-02-26_at_2.22.17_pm.png|Screen Shot 2022-02-26 at 2.22.17 pm.png]]

- Code
	
	```python
	GlobalVariables.scoringInformation["currentScore"] +=10
	```
	

The game now tracks the score, it’s now time to update the user interface with the score so the user can see it.

### Display the Current Score In Game

Open `MainGame.gd` and find the code to update the current timer on screen. 

![[_images/Screen_Shot_2022-02-26_at_2.32.49_pm.png|Screen Shot 2022-02-26 at 2.32.49 pm.png]]

After updating the display with the current timer, the current score can also be updated in the same fashion. However, instead of using `currentTimer`, the `scoringInformation` dictionary will be used from `GlobalVariables`.

Update the CurrentScore label with the `currentScore`.

![[_images/Screen_Shot_2022-02-26_at_2.36.09_pm.png|Screen Shot 2022-02-26 at 2.36.09 pm.png]]

- Code
	
	```python
	$HUD/CurrentScore.text = str(GlobalVariables.scoringInformation["currentScore"])
	```
	

Run the game and see how the score updates!

![[_images/2022-02-26_14-37-48.2022-02-26_14_38_40.gif|2022-02-26 14-37-48.2022-02-26 14_38_40.gif]]

### Room for Improvement?

The game runs, enemies get destroyed and the score gets updated, however is that the best it can be? You may notice that the score only updates on screen every second with the timer. Is there some other way the score could be updated in a more responsive manner? For instance update when the enemy gets destroyed? Or ‘continually’ update?

- Answer
	
	Instead of updating the score after a 1 second delay in the `while` loop, in [MainGame.gd](http://MainGame.gd) create a _process function which updates the CurrentScore instead.
	
	Add the following code to [MainGame.gd](http://MainGame.gd) and remove the same line of code from `_ready()`
	
	```python
	func _process(delta):
		$HUD/CurrentScore.text = str(GlobalVariables.scoringInformation["currentScore"])
	```
	
	![[_images/Screen_Shot_2022-02-26_at_2.45.50_pm.png|Screen Shot 2022-02-26 at 2.45.50 pm.png]]
	

Change the name of the first to CurrentScoreLabel and the next CurrentScore.

Change the text attribute of CurrentScore to “0”.

## Review

1. Could the Scoring system implemented above through a dictionary have been implemented using an Array? If so, how? What changes would need to be made?
2. Research other data structures available in Arduino and other languages, such as linked lists. For each:
3. What are multidimensional dimensional arrays? Describe them and show code examples for what they are and what they can do. What situations would you use a multidimensional array over other data structures?



# Technical Reports - GDScript


## Arduino Implementation

## Practical Exercises

## Review

1. 

# Flowcharts - GDScript


## Practical Exercises

In your Github repository for the project, create a new file called `logic.md`.

Open the file with Visual Studio Code. 


> [!important] If it’s not installed, install the extension called “**Markdown Preview Mermaid Support”**. This allows you to render Markdown files, including mermaid in Visual Studio code. You can activate the preview by pressing this button.
> ![[_images/Untitled 8.png|Untitled]]



Using Mermaid, write the flowchart for the various scripts at this stage.

For example, 

```
# Player.gd

```mermaid
flowchart TD
	terminalStart([Start])
	%% Comment
	terminalEnd([End])

```

## Global.gd

```mermaid
flowchart TD
	terminalStart([Start])
	%% Comment
	terminalEnd([End])

```


![[_images/Untitled 9.png|Untitled]]