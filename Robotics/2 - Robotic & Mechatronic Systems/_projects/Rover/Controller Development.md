This overarching stage of project development includes many different aspects of development.
# Adding IDs to Transmission data

In `comms.h` modify the `transmitData()` function to prefix all communication with an ID for the rover to receive.

Also, modify the code to transmit the newly created `packetToTx` instead of `radioPacket`.

![[transmitDataID.png]]

```arduino
const char* roverID = "1";

char packetToTx[strlen(roverID)+strlen(radioPacket)+2];
strcpy(packetToTx, roverID);
strcat(packetToTx, ",");
strcat(packetToTx, radioPacket);

// radioPacket = roverID + radioPacket;
Serial.println(packetToTx);      // Print message to Serial Monitor
```


# Cycle Through Basic Commands

To test code transmission and the rover's ability to receive commands, create a new function that sends basic commands for the rover to process.

```arduino
void cycleBasicCommands() {
  transmitData("test");
  waitForReply();
  transmitData("forward");
  waitForReply();
  transmitData("backward");
  waitForReply();
  transmitData("left");
  waitForReply();
  transmitData("right");
  waitForReply();
  transmitData("stop");
  waitForReply();
  transmitData("start");
  waitForReply();
}
```

![[controllerCycleCommands.png]]


# Update `loop()`

Modify the main `loop()` to call the new function, and comment out or remove any debug functions currently being called.

![[controllerLoopCycleCommands.png]]