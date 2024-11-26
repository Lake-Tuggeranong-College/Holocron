---
tags:
  - ISD
  - yr11
---



## Lose Condition

Expand each of the following to implement the different conditions.

### The Timer Reaches 0

To implement this condition check, open the MainGame.gd script and look in the _ready() function.

  ![[winLoseTimerReachesZero.png]]  

If Line 17 is reached, it outputs `Game Over` to the console, which means the timer has reached 0. This is where the code will need to go to make it perform a function. Luckily the condition check has already been performed!

Create a New Scene through the `Scene` Menu

  ![[winLoseNewScene.png]]


Choose Node2D in the hierarchy tab to start the scene, and then Right Click on the Node2D and choose `Add Child Node`.

  ![[winLoseAddChildNode.png]]  

Search for, and add, a VBoxContainer

  ![[winLoseAddVBox.png]]



Rename the VboxContainer as Layout. Right click on that, and choose Add Child Node.

  ![[winLoseRenameVBox.png]]


This time, search for and add a Label

  ![[winLoseAddLabel.png]]



Rename the Label as Heading, and then change the text attribute to “You Lost” or anything else appropriate.

  ![[winLoseConfigureLabel.png]]


Now add a button as a child of the VboxContainer called Layout.

  ![[winLoseLayout.png]]


Change the text to `Return to the Main Menu,` or anything else appropriate.

  ![[winLoseButtonReturn.png]]

Right click on the button in the hierarchy and choose `Attach Script`.

  ![[winLoseAttachScript.png]]


Don’t change any of the defaults and just click Create.
![[winLoseCreateScript.png]]



With the button selected, switch to the Node tab as shown.

  ![[winLoseNodeTab.png]]

Double click on the `pressed` signal.

![[winLosePressedSignal.png]]


Don’t change anything here - just click `Connect`.

  ![[winLosePressConnect.png]]



Change the script to the code shown below.

```gdscript
func _on_Button_pressed():
	get_tree().change_scene("res://Menu/Menu.tscn")
```

❓ Note that the `res://Menu/Menu.tscn` may need to be modified to match your project. It needs to be the path to *your* main menu scene.


![[winLoseChangeScene.png]]


Save the Scene.
![[winLoseSaveScene.png]]
  

Go back to MainMenu.gd and after the print("Game Over") code, you will need to add the following:

```gdscript
get_tree().change_scene("res://LoseScene.tscn")
```


❓ Remember the scene linked will need to match *your* project. Change `res://LoseScene.tscn` to whatever you need to link it to the scene you just created.

  

### The Player’s Health Reaches 0.

  ![[commonBlocks#Commit & Push]]