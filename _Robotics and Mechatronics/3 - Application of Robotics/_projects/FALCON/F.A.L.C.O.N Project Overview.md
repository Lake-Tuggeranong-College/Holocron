
The galaxy’s trade routes are in flux. Across remote trading posts in the Outer Rim, market prices for vital supplies, starship parts, and provisions swing rapidly due to unpredictable hyperlane disruptions and central guild updates. Traditional, static paper shelf tags are obsolete—updating an entire supply depot manually takes days, leaving traders vulnerable to supply disruptions and pricing errors.

To solve this, Outpost Command has commissioned **Project F.A.L.C.O.N.**—the **Feather Array LoRa Centralised Operations Network**.

Your mission this year is to design, program, and deploy a fleet of intelligent, ultra-low-power electronic shelf tags. Operating on low-frequency LoRa radio waves, your individual display nodes will catch long-range data broadcasts directly from a central operations database, updating digital e-ink price tags across the facility in real time without a single wired connection.

# Project Architecture

![[falconArchitecture.excalidraw.png]]

### Core Objectives & Flight Plan

As a F.A.L.C.O.N. Systems Engineer, your training will cover four core engineering disciplines:

1. **Python Control Logic:** Master Python programming to parse complex data payloads, process incoming command instructions, and manage system power usage.
2. **Sub-GHz Radio Telemetry:** Configure the **Feather RP2040 RFM** board to listen on targeted LoRa frequencies, filtering incoming packets to identify commands meant specifically for your node.
3. **E-Paper Visual Rendering:** Program sharp, low-power visual interfaces on e-ink displays using custom layouts, dynamic price fields, and custom Aurebesh asset graphics.
4. **End-to-End Network Integration:** Connect your physical node to the live class database, creating a fully synchronized, dynamic inventory grid capable of surviving real-world interference.

