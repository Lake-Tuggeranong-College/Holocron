This overarching stage of project development includes many different aspects of development.

# Controller
## Adding IDs to Transmission data

```arduino
const char* roverID = "1";

char packetToTx[strlen(roverID)+strlen(radioPacket)+2];
strcpy(packetToTx, roverID);
strcat(packetToTx, ",");
strcat(packetToTx, radioPacket);

// radioPacket = roverID + radioPacket;
Serial.println(packetToTx);      // Print message to Serial Monitor
```


# Rover

