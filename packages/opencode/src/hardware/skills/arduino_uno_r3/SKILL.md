# Skill: Arduino Uno R3

## Deep Intelligence: Engineering Wisdom
- **The "Upload Fail" TX/RX Conflict**: Pins 0 (RX) and 1 (TX) are shared with the USB-to-Serial chip. If you connect sensors, Bluetooth modules, or buttons to these pins, **the board will fail to upload new code**. The AI MUST warn the user to leave Pins 0 and 1 free until the project is final, or disconnect them during upload.
- **5V Logic Supremacy (and Danger)**: The Uno is a 5V board. It can drive most hobbyist sensors directly, but **it is lethal to 3.3V parts** (like ESP8266, bare ESP32, or some OLEDs). Connecting a 3.3V sensor's data pin to a 5V Uno pin can destroy the sensor. Use a voltage divider (1kΩ/2kΩ) or a logic level shifter.
- **The PWM "Tilde" Pins**: Only pins marked with ~ support PWM: `3, 5, 6, 9, 10, 11`. Prioritize these for servos, LED dimming, and motor speed control.
- **40mA Per Pin Limit**: Each digital pin can source/sink a maximum of 40mA. An LED + 220Ω resistor draws ~15mA (safe). A relay coil, motor, or fan draws much more—always use a transistor/MOSFET to switch high-current loads.
- **5V Pin Current Budget**: When powered via USB, the 5V pin can supply ~400-500mA total (shared with the board's own consumption of ~50mA). For motors, LED strips, or multiple servos, use an external power supply with common GND.
- **A0-A5 as Digital Pins**: Analog pins can double as digital pins (D14-D19) using `pinMode(A0, OUTPUT)`. Useful when you "run out" of digital pins.
- **Two GND Pins on Left, One on Right**: There are three GND pins total. Use them to keep ground wires short and clean.

## Physical Pin Layout (Opposite Side of USB Plug)

### Right Side Header (Top to Bottom)
| Pin | Label | Function |
|-----|-------|----------|
| 1 | RX← 0 | Digital 0 / Serial Receive (UART) |
| 2 | TX→ 1 | Digital 1 / Serial Transmit (UART) |
| 3 | 2 | Digital 2 / External Interrupt 0 |
| 4 | ~3 | Digital 3 / PWM / External Interrupt 1 |
| 5 | 4 | Digital 4 |
| 6 | ~5 | Digital 5 / PWM |
| 7 | ~6 | Digital 6 / PWM |
| 8 | 7 | Digital 7 |
| 9 | 8 | Digital 8 |
| 10 | ~9 | Digital 9 / PWM |
| 11 | ~10 | Digital 10 / PWM / SPI SS |
| 12 | ~11 | Digital 11 / PWM / SPI MOSI |
| 13 | 12 | Digital 12 / SPI MISO |
| 14 | 13 | Digital 13 / SPI SCK / Built-in LED |
| 15 | GND | Ground |
| 16 | AREF | Analog Reference Voltage |
| 17 | SDA | I2C Data (also A4 / D18) |
| 18 | SCL | I2C Clock (also A5 / D19) |

### Left Side Header (Top to Bottom)
| Pin | Label | Function |
|-----|-------|----------|
| 1 | A5 | Analog 5 / SCL / Digital 19 |
| 2 | A4 | Analog 4 / SDA / Digital 18 |
| 3 | A3 | Analog 3 / Digital 17 |
| 4 | A2 | Analog 2 / Digital 16 |
| 5 | A1 | Analog 1 / Digital 15 |
| 6 | A0 | Analog 0 / Digital 14 |
| 7 | VIN | External Voltage Input (7-12V via barrel jack) |
| 8 | GND | Ground |
| 9 | GND | Ground |
| 10 | 5V | Regulated 5V Output |
| 11 | 3.3V | Regulated 3.3V Output (50mA max) |
| 12 | RESET | Reset the MCU (pull LOW to reset) |
| 13 | 5V | Regulated 5V Output (duplicate) |

## Hardware Specs (Data Sheet Summary)
- **Microcontroller**: ATmega328P (8-bit AVR).
- **Memory**: 32KB Flash (0.5KB bootloader), 2KB SRAM, 1KB EEPROM.
- **Clock Speed**: 16 MHz.
- **Input Voltage**: 7-12V recommended (via barrel jack or VIN), 5V (via USB).
- **GPIO**: 14 Digital I/O (6 PWM), 6 Analog Inputs.
- **Communication**: UART (0/1), I2C (A4/A5 or SDA/SCL header), SPI (10-13).
- **Built-in LED**: Pin 13.
- **USB**: Type-B connector for programming and serial monitor.

## Pro-Grade Wiring Guide
- **5V**: Connect to sensor VCC pins. Max ~450mA budget via USB.
- **3.3V**: For 3.3V sensors only. Max 50mA—do NOT power an ESP module from here.
- **GND**: Common ground for ALL project parts. Use multiple GND pins to reduce noise.
- **VIN**: If using a barrel jack or external battery (7-12V), VIN provides that raw voltage.
- **AREF**: Sets the analog reference voltage. Usually leave disconnected (defaults to 5V). NEVER connect more than 5V to AREF.

## Logic Flow (Troubleshooting)
- **Problem: "Board at COMx not found"**: Check USB cable (must be data cable, not charge-only). Verify correct Board and Port in the IDE/CLI. Try a different USB port.
- **Problem: "Sketch too large"**: Use the `F()` macro for strings: `Serial.println(F("Hello"))`. Avoid large floating-point libraries if possible.
- **Problem: Unpredictable resets**: Check for power supply sag. Motors and servos can cause brownouts. Add a separate power supply with common GND.
- **Problem: Pin 13 LED flickers on boot**: Normal. The bootloader blinks pin 13 during startup. Avoid using pin 13 for input without an external pull-down resistor.

## Dynamic Learnings (AI Log)
- (AI-ONLY: Log new user experiences and project gotchas here)
