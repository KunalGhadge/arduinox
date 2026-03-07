# Skill: IR Obstacle Avoidance Sensor (TCRT5000)

## Deep Intelligence: Engineering Wisdom
- **Active LOW Logic**: The OUT pin reads `LOW` (0V) when an obstacle IS detected, and `HIGH` (5V) when the path is clear. This catches beginners off guard—`digitalRead()` returning 0 means "something is there."
- **Sensitivity Potentiometer**: The small blue potentiometer on the module adjusts the detection distance. Clockwise = further detection range, counter-clockwise = closer. Typical range: 2cm to 30cm.
- **Sunlight Interference**: IR sensors can malfunction in direct sunlight because sunlight contains strong infrared radiation. For outdoor use, shield the sensor or use ultrasonic sensors instead.
- **Reflective Surface Matters**: Shiny, dark, or transparent surfaces absorb or scatter IR light, causing missed detections. White matte surfaces reflect best.
- **No Library Required**: This is a simple digital sensor. Just use `digitalRead(pin)`. No extra libraries needed.

## Pin Layout (Left to Right, Facing the Sensor)
| Pin | Label | Function |
|-----|-------|----------|
| 1 | OUT | Digital output — LOW when obstacle detected |
| 2 | GND | Ground |
| 3 | VCC | Power input (3.3V or 5V) |

## Hardware Specs
- **Voltage**: 3.3V - 5V DC.
- **Output**: Digital (Active LOW).
- **Detection Range**: 2-30cm (adjustable via potentiometer).
- **Current Draw**: ~20mA.
- **Dimensions**: ~32mm x 14mm.

## Pro-Grade Wiring Guide (Arduino Uno)
- **VCC** → Arduino `5V`
- **GND** → Arduino `GND`
- **OUT** → Any digital pin (e.g., `Pin 2`)

### Example Code
```cpp
const int IR_PIN = 2;

void setup() {
  pinMode(IR_PIN, INPUT);
  Serial.begin(9600);
}

void loop() {
  int val = digitalRead(IR_PIN);
  if (val == LOW) {
    Serial.println("Obstacle detected!");
  } else {
    Serial.println("Path clear");
  }
  delay(200);
}
```

## Logic Flow (Troubleshooting)
- **Problem: Always reads HIGH (no detection)**: Turn the potentiometer clockwise to increase sensitivity. Check VCC and GND connections.
- **Problem: Always reads LOW (always triggered)**: The sensor may be too close to a surface. Turn potentiometer counter-clockwise. Check for strong ambient IR light.
- **Problem: Erratic readings**: Add a 100nF capacitor across VCC and GND near the sensor to filter noise.

## Dynamic Learnings (AI Log)
- (AI-ONLY: Log new user experiences and project gotchas here)
