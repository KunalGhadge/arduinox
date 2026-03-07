# Skill: 16x2 Character LCD (HD44780)

## Deep Intelligence: Engineering Wisdom
- **16 Physical Pins**: The raw LCD module has 16 pins. In direct-wiring mode (without I2C adapter), you need at minimum 6 Arduino pins (RS, E, DB4-DB7) plus power/ground/contrast—that's a LOT of wires. This is why the I2C adapter module exists.
- **The Contrast Potentiometer is MANDATORY**: Pin 3 (VEE) controls contrast. You MUST connect a 10kΩ potentiometer between 5V, VEE, and GND. Without it, the screen will appear blank or show solid white boxes. Rotating the pot adjusts visibility.
- **R/W Pin Shortcut**: Pin 5 (R/W) controls read vs. write mode. For 99% of projects, you only WRITE to the LCD, so tie R/W directly to GND. This saves one Arduino pin.
- **4-Bit vs 8-Bit Mode**: In 4-bit mode, only DB4-DB7 are used (DB0-DB3 left floating). This is the standard approach and saves 4 pins. The `LiquidCrystal` library handles the data splitting.
- **Backlight Resistor**: Pin 15 (LED+) needs a 220Ω resistor to 5V. Connecting directly without a resistor can burn out the backlight LED.
- **I2C Adapter Alternative**: Instead of wiring all 16 pins, solder or connect a PCF8574 I2C adapter module to the LCD's 16 pins. Then you only need 4 wires (VCC, GND, SDA, SCL) from Arduino.

## Pin Layout (16 Pins, Left to Right)
| Pin | Label | Function |
|-----|-------|----------|
| 1 | VSS | Ground (0V) |
| 2 | VCC | Power Supply (+5V) |
| 3 | VEE | Contrast Adjust (potentiometer wiper) |
| 4 | RS | Register Select (HIGH=Data, LOW=Command) |
| 5 | R/W | Read/Write (usually tie to GND for write-only) |
| 6 | E | Enable (pulse HIGH to latch data) |
| 7 | DB0 | Data Bit 0 (unused in 4-bit mode) |
| 8 | DB1 | Data Bit 1 (unused in 4-bit mode) |
| 9 | DB2 | Data Bit 2 (unused in 4-bit mode) |
| 10 | DB3 | Data Bit 3 (unused in 4-bit mode) |
| 11 | DB4 | Data Bit 4 |
| 12 | DB5 | Data Bit 5 |
| 13 | DB6 | Data Bit 6 |
| 14 | DB7 | Data Bit 7 |
| 15 | LED+ | Backlight Anode (+5V via 220Ω resistor) |
| 16 | LED- | Backlight Cathode (GND) |

## Hardware Specs
- **Display**: 16 characters × 2 lines.
- **Controller**: Hitachi HD44780 compatible.
- **Operating Voltage**: 5V.
- **Backlight**: White/Blue/Green LED (model dependent).
- **Current**: ~1mA logic, ~15-20mA with backlight.
- **Character Set**: ASCII + custom characters (up to 8).

## Direct Wiring Guide (4-bit Mode, Arduino Uno)
| LCD Pin | Connect To |
|---------|-----------|
| 1 (VSS) | GND |
| 2 (VCC) | 5V |
| 3 (VEE) | Potentiometer wiper (10kΩ between 5V and GND) |
| 4 (RS) | Arduino Pin 12 |
| 5 (R/W) | GND (write-only) |
| 6 (E) | Arduino Pin 11 |
| 7-10 (DB0-DB3) | Not connected |
| 11 (DB4) | Arduino Pin 5 |
| 12 (DB5) | Arduino Pin 4 |
| 13 (DB6) | Arduino Pin 3 |
| 14 (DB7) | Arduino Pin 2 |
| 15 (LED+) | 5V via 220Ω resistor |
| 16 (LED-) | GND |

### Example Code (Direct Wiring, 4-bit Mode)
```cpp
#include <LiquidCrystal.h>

// LiquidCrystal(RS, E, DB4, DB5, DB6, DB7)
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  lcd.begin(16, 2);
  lcd.print("Hello Arduinox!");
  lcd.setCursor(0, 1);
  lcd.print("16x2 LCD Works!");
}

void loop() {}
```

## Logic Flow (Troubleshooting)
- **Problem: Blank screen, no characters**: Adjust the contrast potentiometer on VEE (Pin 3). If no potentiometer is connected, the screen will always be blank.
- **Problem: White boxes on top row**: LCD is powered but not initialized. Check RS, E, and data pin connections. Verify `lcd.begin(16, 2)` is called.
- **Problem: Garbled/random characters**: Check for loose data wires (DB4-DB7). Ensure correct pin numbers in `LiquidCrystal()` constructor match physical wiring.
- **Problem: Backlight doesn't work**: Verify Pin 15 has 5V (through 220Ω resistor) and Pin 16 is connected to GND.

## Dynamic Learnings (AI Log)
- (AI-ONLY: Log new user experiences and project gotchas here)
