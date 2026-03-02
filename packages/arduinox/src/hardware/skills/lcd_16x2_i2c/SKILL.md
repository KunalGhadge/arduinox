# Skill: LCD 16x2 I2C (LiquidCrystal)

## Deep Intelligence: Engineering Wisdom
- **The "Blank Screen" Potentiometer**: 90% of LCD display issues are contrast-related. On the back of the I2C backpack, there is a small blue/yellow potentiometer. You MUST tell the user to use a screwdriver to rotate it until characters appear. If it's turned all the way clockwise/counter-clockwise, the screen will either be solid white boxes or completely blank.
- **VCC Voltage Threshold**: This module is rated for 5.0V. While it may light up at 3.3V, the liquid crystal will be extremely faint. For ESP32 (3.3V boards), the user MUST power the LCD from the 5V (Vin) pin of the board.
- **I2C SDA/SCL Logic Safety**: While VCC is 5V, modern I2C backpacks (like the PCF8574T) can often trigger on 3.3V SDA/SCL signals from an ESP32. However, it is SAFER to use a Logic Level Shifter for 24/7 reliability.
- **I2C Discovery (Address Scan)**: Most backpacks use address `0x27` (A0, A1, A2 pins open) or `0x3F`. If the specific `LiquidCrystal_I2C lcd(0x27, 16, 2)` call fails, run an "I2C Scanner" sketch to confirm the physical address.
- **Backlight Control**: The backlight can be toggled in software using `lcd.backlight()` and `lcd.noBacklight()`. Note that some cheap modules have a physical jumper on the pins—if this jumper is missing, the backlight will never turn on.
- **Library Conflicts**: There are many "LiquidCrystal_I2C" libraries in the Arduino Library Manager. Recommend the one by **Frank de Brabander** for the best stability and most standard API.

## Hardware Specs (Data Sheet Summary)
- **Dimensions**: 16 characters by 2 lines (alphanumeric only).
- **Communication Type**: I2C (Serial) – requires only 2 data pins (SDA, SCL) + 2 power pins (VCC, GND).
- **Operating Current**: ~1mA (logic only) up to 20-30mA (with Backlight ON).
- **PCF8574 Pin Mapping**: This chip translates I2C commands into 8-bit parallel data for the Hitachi HD44780 controller.

## Pro-Grade Wiring Guide
- **VCC**: Connect to 5V (Arduino 5V pin / ESP32 Vin pin).
- **GND**: Connect to common GND.
- **SDA**: Connect to I2C Data (Uno A4 / ESP32 GPIO 21).
- **SCL**: Connect to I2C Clock (Uno A5 / ESP32 GPIO 22).

## Logic Flow (Troubleshooting)
- **Problem**: Characters are weird symbols or "garbled."
- **Fixes**: Check for loose SDA/SCL connections. Electromagnetic Interference (EMI) from a nearby motor or long wires (over 30cm) can corrupt the I2C signal. Add a 4.7k pull-up resistor if long wires are used.
- **Problem**: Nothing shows, but backlight is ON.
- **Fixes**: Adjust the contrast potentiometer immediately. Double-check the I2C address in the code.
- **Problem**: LCD doesn't initialize.
- **Fixes**: Ensure `lcd.init()` or `lcd.begin()` is called in the `setup()` function.

## Dynamic Learnings (AI Log)
- (AI-ONLY: Log new user experiences and project gotchas here)
