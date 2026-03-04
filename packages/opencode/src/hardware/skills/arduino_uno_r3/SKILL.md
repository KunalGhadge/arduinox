# Skill: Arduino Uno R3

## Deep Intelligence: Engineering Wisdom
- **The "Upload Fail" TX/RX Conflict**: Standard Arduinos (Uno, Nano) use Digital Pins 0 (RX) and 1 (TX) for serial communication via the USB-to-Serial chip. If you connect a sensor, Bluetooth module, or button to these pins, **the board will likely fail to upload new code**. The AI MUST warn the user to leave Pins 0 and 1 empty until the project is final.
- **5V Logic Supremacy (and Danger)**: The Uno R3 is a 5V machine. While this means it can drive almost all hobbyist sensors directly, **it is lethal to 3.3V parts** (like ESP8266, ESP32, or some OLEDs). If the user connects a 3.3V sensor's Data pin to an Uno pin, the Uno's 5V signal will push too much voltage into the sensor. A 1kΩ/2kΩ voltage divider is mandatory for safety.
- **The PWM "Magic" Pins**: Only certain pins support Pulse Width Modulation (PWM) for dimming LEDs or controlling Servos. On the Uno, these are `3, 5, 6, 9, 10, 11` (marked with a ~ symbol). The AI should prioritize these pins for actuators.
- **Current Constraints on the 5V Pin**: The 5V pin can usually supply 400mA-500mA when powered via USB. A single SG90 servo is fine (~100-200mA), but **NEVER** drive high-power motors or long LED strips directly from the Uno. Use an external 5V / 2A (or 12V) power supply with a common ground.
- **A0 to A5 are Digital Too!**: A common beginner mistake is thinking "I'm out of digital pins!" The Analog pins (A0–A5) can be used as Digital Pins (D14-D19) with `pinMode(A0, OUTPUT); digitalRead(A0);`.
- **Crystal Oscillator Reliability**: The Uno R3 uses a 16MHz ceramic resonator (or crystal). This is accurate enough for most projects, but for precise real-time clock needs (like a digital watch), an external **RTC (DS3231)** is highly recommended.

## Hardware Specs (Data Sheet Summary)
- **Microcontroller**: ATmega328P (8-bit AVR).
- **Memory**: 32KB Flash (0.5KB for bootloader), 2KB SRAM, 1KB EEPROM.
- **Clock Speed**: 16 MHz.
- **Voltage Range**: 7-12V recommended (via Barrel Jack), 5V (via USB).
- **GPIO Count**: 14 Digital (6 PWM), 6 Analog.
- **Communication Type**: UART (Serial), I2C (A4/A5), SPI (10, 11, 12, 13).

## Pro-Grade Wiring Guide
- **5V**: Connect to sensor VCC.
- **GND**: Common Ground for all project parts.
- **AREF**: Used to set the analog reference voltage—usually leave disconnected.
- **AREF Warning**: NEVER connect a voltage higher than 5V to any Pin—it will destroy the ATmega328P chip instantly.

## Logic Flow (Troubleshooting)
- **Problem: "Board at COMx not found"**: Check USB cable. Ensure the correct "Arduino Uno" board and Port are selected in the CLI/IDE.
- **Problem: "Sketch is too large"**: Avoid using many large floating-point libraries. Move constant strings to Flash using the `F()` macro: `Serial.println(F("Hello World"));`.
- **Problem: Unpredictable resets**: Highly likely the power supply is "sagging." Check for short circuits or high current draw from motors.

## Dynamic Learnings (AI Log)
- (AI-ONLY: Log new user experiences and project gotchas here)
