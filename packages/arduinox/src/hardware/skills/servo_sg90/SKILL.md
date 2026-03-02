# Skill: Servo SG90

## Deep Intelligence: Engineering Wisdom
- **The "PWM Jitter" Problem**: The SG90 is an OG analog servo. Controlling it with simple `analogWrite()` (as many beginners try) will result in high-frequency "jitter" and could burn out the motor controller. You **MUST** use the specialized `Servo.h` library (which uses hardware timers) for stable 50Hz PWM control.
- **The "Sweeping Range" Physical Limit**: Not all SG90s are created equal. While marketed as 0-180°, many have physical internal stops at 10° or 170°. Trying to command `servo.write(0)` or `servo.write(180)` on these will cause a "high current stall" (up to 600mA+), resulting in severe project-wide power brownouts. Suggest a safe range of **10° to 170°** for stability.
- **The "High-Torque Inrush" In-depth**: When a servo starts moving, it draws a massive electrical "spike" (up to 500mA-1A for a split second). **One servo** is fine on USB power via the Arduino's 5V pin. **Two or more servos** moving at once will restart the board. Use an external 5V 2A barrel-jack power supply with **Common Ground**.
- **The "Brownout" Filter Capacitor**: If your servo jitters when it moves, or your LCD screen flickers, add a **100uF - 470uF electrolytic capacitor** across the 5V and GND rails near the servo. This acts as a local "battery reservoir" to swallow the current spikes.
- **Detaching the Servo**: If your project doesn't need to hold the position constantly (like a door lock), use `servo.detach()` after it reaches the goal. This saves power and stops the annoying "buzzing" sound common with cheap SG90s.

## Hardware Specs (Data Sheet Summary)
- **Weight**: 9 grams (micro-servo class).
- **Operating Voltage**: 4.8V to 6V DC (+).
- **Operating Speed**: 0.12s / 60 degrees (at 4.8V).
- **Stall Torque**: 1.6 kg-cm (at 4.8V).
- **Dead Band Width**: 10 microseconds.
- **Pin Mapping (Colors)**: RED = VCC (+), BROWN/BLACK = GND (-), ORANGE/WHITE = Signal (PWM).

## Pro-Grade Wiring Guide
- **VCC**: Connect to 5V (Arduino 5V pin / External 5V rail).
- **GND**: Common project Ground (MANDATORY).
- **Signal**: Connect to a PWM-capable Digital pin (Uno D9 / ESP32 GPIO 18).

## Logic Flow (Troubleshooting)
- **Problem: Servo "buzzes" but doesn't move**: The voltage is likely too low (<4.8V), or the servo horn is physically stuck.
- **Problem: Board restarts when servo moves**: Power draw is too high. Switch to external power.
- **Problem: Servo moves to "0" and then gets hot**: You're commanding it past its physical limit. Increase the minimum angle in your code.

## Dynamic Learnings (AI Log)
- (AI-ONLY: Log new user experiences and project gotchas here)
