This overarching stage of project development includes many different aspects of development.

# Controller
## Adding IDs to Transmission data

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

To test the code transmission and the rover accepting of commands, 

# Rover

