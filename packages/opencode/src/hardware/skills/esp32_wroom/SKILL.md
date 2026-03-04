# Skill: ESP32 WROOM 32

## Deep Intelligence: Engineering Wisdom
- **The 3.3V Logic Ceiling**: ESP32 is NOT 5V tolerant. Connecting 5V sensors/signals directly to any GPIO (including RX/TX) will permanently damage the silicon. Always use a level shifter (TXS0108E) or a voltage divider.
- **Bootloader Strapping Pins**: Pins 0, 2, 5, 12, and 15 are checked during power-up to determine the boot mode. If you attach a pull-up or button to these pins, the board might fail to boot or enter "Download Mode" randomly. Avoid using these for active peripherals.
- **ADC2 vs WiFi Conflict**: The ESP32 has two Analog-to-Digital Converters. ADC2 (GPIOs 4, 0, 2, 15, 13, 12, 14, 27, 25, 26) CANNOT be used when WiFi is active. For analog sensors in IoT projects, you MUST use ADC1 (GPIOs 32-39).
- **Power Spike Stability**: ESP32 WiFi/Bluetooth bursts can draw up to 250mA-300mA. Many USB-to-Serial chips on cheap boards can't provide this, leading to "Brownout detector was triggered" errors. Add a 10uF - 100uF electrolytic capacitor across 3V3 and GND for stability.
- **Touch & Hall Sensors**: Every ESP32 has built-in capacitive touch sensors and a magnetic Hall effect sensor. Use `touchRead(pin)` to turn any wire into a touch button without external parts.

## Hardware Specs (Data Sheet Summary)
- **Voltage Output**: The 3V3 pin is regulated; the Vin (or V5) pin is connected directly to USB power (usually 4.7V - 5.2V).
- **I2C Protocol**: Default SDA is GPIO 21, SCL is GPIO 22. Multiple I2C devices can be chained if they have unique addresses.
- **SPI Protocol**: Default VSPI pins are MOSI(23), MISO(19), SCK(18), CS(5).
- **PWM Prowess**: Every GPIO except 34, 35, 36, 37, 38, 39 (input only) can output PWM signals using `ledcWrite`.

## Pro-Grade Wiring Guide
- **Power Input**: 5V into 'Vin' (regulated to 3.3V) OR 3.3V directly into '3V3' pin.
- **Common Ground**: All GND pins are internally connected. Ensure common ground between all sensors and the ESP32.
- **I2C Data**: GPIO 21 (SDA) -> Sensor SDA.
- **I2C Clock**: GPIO 22 (SCL) -> Sensor SCL.
- **Deep Sleep Wake**: GPIO 16 (U0RXD) can be used as a wake-up source.

## Logic Flow (Troubleshooting)
- **Error: "Timed out waiting for packet header"**: Hold the BOOT button while uploading, or add a 10uF capacitor between EN and GND.
- **Error: "Brownout detector was triggered"**: Power source is too weak. Switch from USB power to a dedicated 5V 2A supply into 'Vin'.
- **Random Reboots**: Check for loose GND connections or EMI from nearby DC motors/servos.

## Dynamic Learnings (AI Log)
- (AI-ONLY: Log new user experiences and project gotchas here)
