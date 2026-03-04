# Skill: 5V DC Cooling Fan

## Deep Intelligence: Engineering Wisdom
- **Back-EMF Protection**: Brushless DC fans can generate voltage spikes when spinning down. If driving with a transistor, ALWAYS use a flyback diode (e.g., 1N4007) across the fan terminals (cathode to VCC).
- **Inrush Current**: Fans take more current to start spinning than to keep spinning. Ensure your power supply (or the Arduino's 5V regulator) can handle the momentary peak.
- **PWM Speed Control**: You can control the speed using PWM (Pulse Width Modulation) via a MOSFET (like IRLZ44N or an NPN transistor like PN2222). Do NOT connect the fan directly to an Arduino digital pin as it draws too much current (150mA > 40mA limit).
- **Static Pressure vs. Airflow**: Small fans are sensitive to obstructions. Keep wires away from the blades to avoid noise and stall.

## Hardware Specs
- **Voltage**: 5V DC.
- **Current**: 0.1A - 0.2A (Model dependent).
- **Bearing Type**: Sleeve or Ball Bearing.
- **Connection**: 2-wire (Red: +, Black: -).

## Pro-Grade Setup
- **Mounting**: Use M3 screws or rubber mounts to reduce vibration noise.
- **Heatsinks**: Pair with an aluminum heatsink on the MCU (e.g., ESP32 or Raspberry Pi) for maximum effectiveness.
