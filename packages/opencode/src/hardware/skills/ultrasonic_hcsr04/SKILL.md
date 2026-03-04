# Skill: HC-SR04 Ultrasonic Sensor

## Deep Intelligence: Engineering Wisdom
- **The "Echo 5.0V Logic Spike" Danger**: This sensor requires 5V to fire its ultrasonic pulse correctly. However, the **Echo pin outputs 5V**. If you are connecting this directly to an **ESP32**, **ESP8266**, or **Pico** (3.3V boards), you **MUST** use a 1kΩ/2kΩ voltage divider (or level shifter) on the Echo pin. Failure to do so will permanently fry the 3.3V GPIO on your microcontroller.
- **The "Missing Echo" Trigger Loop**: The sensor works by sending a 10μs Pulse to the `TRIG` pin, then measuring how long `ECHO` stays HIGH. If you write your code loosely without a `timeout` (the `pulseIn()` default is 1000ms), and the echo never returns (e.g., if you point it at a soft curtain or an open space), the code will effectively "freeze" for 1 second. Use a shorter timeout or a non-blocking library like **NewPing**.
- **Environmental Absorption**: Objects like cloth, sponge, or thick carpets absorb ultrasonic waves. Pointing the HC-SR04 at these will return "Max Range" or garbage data. Ensure the target surface is flat and hard (wood, plastic, human body) for the best reliability.
- **Interference (Cross-Talk)**: Two ultrasonic sensors pointed at each other or at the same corner will interfere. Their "Pings" will collide, giving each other false readings. If using multiple sensors, fire them 30-50ms apart.
- **In-Air Sound Speed Variation**: Distance calculation relies on `speed = (time * 0.034) / 2`. *Note*: The speed of sound changes with temperature (`331 + 0.6 * temp`). For a "Pro" project, use a DHT11 to measure temperature and adjust the constant 0.034 dynamically in your code.

## Hardware Specs (Data Sheet Summary)
- **Power Supply**: 5V DC (+).
- **Quiescent Current**: <2mA.
- **Effectual Angle**: <15°.
- **Ranging Distance**: 2cm – 400cm (1 inch to 13 feet).
- **Resolution**: 0.3 cm.
- **Trigger Input Pulse**: 10uS TTL pulse.
- **Echo Output Signal**: TTL PWL signal.

## Pro-Grade Wiring Guide
- **VCC**: Connect to 5V (Not 3.3V!).
- **GND**: Connect to common Ground.
- **TRIG**: Digital Output pin (Uno D9 / ESP32 GPIO 5).
- **ECHO**: Digital Input pin (Uno D10 / ESP32 GPIO 18* with level shift).

## Logic Flow (Troubleshooting)
- **Problem: Sensor reports constant 0cm**: The TRIG and ECHO pins are likely swapped, or the sensor isn't getting a solid 5V. Check breadboard rail voltage.
- **Problem: Sensor reports constant 400cm / Max Range**: Point it at a hard wall 1 meter away. If it still says 400cm, the sensor is likely defective or not grounded correctly.
- **Problem: Unstable / Fluctuating Readings**: Use a "Moving Average" filter in your code to smooth out the noise from the sonar echoes.

## Dynamic Learnings (AI Log)
- (AI-ONLY: Log new user experiences and project gotchas here)
