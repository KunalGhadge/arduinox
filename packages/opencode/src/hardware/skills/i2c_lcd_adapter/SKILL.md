# Skill: I2C LCD Adapter Module (PCF8574)

## Deep Intelligence: Engineering Wisdom
- **NOT Pre-Soldered**: This module comes as a separate board and is NOT pre-soldered to the LCD. You must either solder it onto the LCD's 16-pin header or connect them via a mini breadboard and jumper wires.
- **Built-in Contrast Potentiometer**: The small blue potentiometer on this module replaces the need for an external 10kΩ pot on the LCD's VEE pin. Rotate it with a small screwdriver to adjust display contrast.
- **I2C Address**: Default address is `0x27` (most modules). Some use `0x3F`. If the LCD doesn't respond, run an I2C Scanner sketch to find the actual address.
- **Address Jumpers (A0, A1, A2)**: Three solder pads on the back can be bridged to change the I2C address. This allows multiple LCDs on the same I2C bus (up to 8 unique addresses).
- **Reduces Wiring Dramatically**: Without this module, a 16x2 LCD needs 6+ Arduino pins. With it, you need only 2 data pins (SDA, SCL) + power.

## Pin Layout (4 Pins, Left to Right)
| Pin | Label | Function |
|-----|-------|----------|
| 1 | GND | Ground |
| 2 | VCC | +5V Power |
| 3 | SDA | I2C Data (Arduino A4 / SDA) |
| 4 | SCL | I2C Clock (Arduino A5 / SCL) |

## Hardware Specs
- **IC**: PCF8574T or PCF8574AT I/O Expander.
- **Interface**: I2C (2-wire).
- **Default Address**: 0x27 (PCF8574T) or 0x3F (PCF8574AT).
- **Voltage**: 5V (must match LCD supply voltage).
- **Backlight Control**: Software-controllable via `lcd.backlight()` / `lcd.noBacklight()`.

## Wiring Guide (Arduino Uno)
| Adapter Pin | Connect To |
|------------|-----------|
| GND | Arduino GND |
| VCC | Arduino 5V |
| SDA | Arduino SDA (A4) |
| SCL | Arduino SCL (A5) |

### Example Code (I2C Mode)
```cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Address 0x27, 16 chars, 2 lines
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("Hello Arduinox!");
  lcd.setCursor(0, 1);
  lcd.print("I2C LCD Works!");
}

void loop() {}
```

## Logic Flow (Troubleshooting)
- **Problem: Blank screen with backlight on**: Adjust the contrast potentiometer on the I2C module. If still blank, verify the I2C address with a scanner sketch.
- **Problem: "LiquidCrystal_I2C.h: No such file"**: Install the library. In Arduino IDE: Sketch → Include Library → Manage Libraries → search "LiquidCrystal I2C" by Frank de Brabander.
- **Problem: LCD doesn't respond at all**: Check SDA/SCL wiring. Ensure VCC is 5V (not 3.3V). Try swapping SDA and SCL in case they're reversed.

## Dynamic Learnings (AI Log)
- (AI-ONLY: Log new user experiences and project gotchas here)
