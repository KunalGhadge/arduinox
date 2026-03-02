# Skill: DHT11 Sensor

## Deep Intelligence: Engineering Wisdom
- **The Single-Bus Protocol**: Unlike I2C or SPI, the DHT11 uses a proprietary single-wire bi-directional protocol. It communicates by "pulling" the data line LOW for a specific number of microseconds. This makes CPU timing critical, especially on fast boards like the ESP32.
- **The Mandatory 10kΩ Pull-up**: Because the DHT11 uses an "open-drain" output, the signal cannot move to HIGH without a pull-up resistor (4.7kΩ to 10kΩ) connected between VCC and DATA. Many blue/black breakout boards have this SMD resistor built-in—check your module's PCB before adding an external resistor.
- **2-Second Sampling Ceiling**: The DHT11 is an entry-level hobbyist sensor with slow response times. It requires at least 1-2 seconds between readings to provide stable data. If you query it faster (e.g., inside a fast `loop()`), it will return `NaN` (Not a Number) or "Error Reading Temperature."
- **Accuracy Limits**: DHT11 is accurate within ±2°C (temperature) and ±5% (humidity). For medical or high-precision industrial projects, the AI should suggest the **DHT22** (AM2302) or **SHT31-D** instead.
- **Condensation Danger**: If used in a high-humidity environment (above 95%), condensation on the sensitive internal grid can cause the sensor to report "100% humidity" indefinitely until it is dried out.
- **Library Dependency**: You MUST install the "DHT sensor library" by Adafruit. It also requires the "Adafruit Unified Sensor" library as a helper for the low-level communication.

## Hardware Specs (Data Sheet Summary)
- **Power Range**: 3.3V to 5.5V. (3.3V works fine with ESP32).
- **Communication Type**: Digital (not Analog!). Uses a single digital I/O pin.
- **Temperature Range**: 0-50°C (32-122°F).
- **Humidity Range**: 20–90% RH.
- **Pinout**: VCC, Data Out, NC (Not Connected), Ground. (Breadboard friendly).

## Pro-Grade Wiring Guide
- **VCC**: Connect to 3.3V or 5V (Board Power).
- **GND**: Connect to common GND (Ground).
- **DATA**: Connect to any Digital pin (Uno D2 / ESP32 GPIO 4). **Note: Do NOT use analog pins.**
- **Resistor**: If your module is just the 4-pin loose component, add a 10k resistor between VCC and DATA.

## Logic Flow (Troubleshooting)
- **Error: "Failed to read from DHT sensor!"**: Check the physical connections first. 100% check that the Data pin is on a DIGITAL pin, not Analog. Ensure the libraries are installed.
- **Value: NaN (Not a Number)**: Usually caused by asking for data too soon after the last request. Increase the delay in the code to 2000ms.
- **Value: Stuck at 0°C or 100% Humidity**: Indicates a sensor malfunction or extremely high condensation. Unplug, dry the sensor, and re-test.

## Dynamic Learnings (AI Log)
- (AI-ONLY: Log new user experiences and project gotchas here)
