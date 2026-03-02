#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Pin definitions
const int IR_SENSOR_PIN = 2;    // IR sensor digital output
const int RESET_BUTTON_PIN = 3; // Button to reset counter

// LCD settings
LiquidCrystal_I2C lcd(0x27, 16, 2);

// Visitor counter
int visitorCount = 0;

// Debounce variables
bool lastSensorState = HIGH;
bool currentSensorState = HIGH;
unsigned long lastDebounceTime = 0;
const unsigned long DEBOUNCE_DELAY = 500; // 500ms debounce

void setup() {
  // Initialize IR sensor pin
  pinMode(IR_SENSOR_PIN, INPUT);
  
  // Initialize reset button (with internal pull-up)
  pinMode(RESET_BUTTON_PIN, INPUT_PULLUP);
  
  // Initialize LCD
  lcd.begin();
  lcd.backlight();
  
  // Display initial message
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Visitor Counter");
  lcd.setCursor(0, 1);
  lcd.print("Visitors: ");
  lcd.print(visitorCount);
  
  // Initial sensor reading
  lastSensorState = digitalRead(IR_SENSOR_PIN);
}

void loop() {
  // Read current sensor state
  int sensorReading = digitalRead(IR_SENSOR_PIN);
  
  // Check if state changed
  if (sensorReading != lastSensorState) {
    lastDebounceTime = millis();
  }
  
  // Check if enough time has passed for debounce
  if ((millis() - lastDebounceTime) > DEBOUNCE_DELAY) {
    // If sensor went LOW (obstacle detected = visitor passed)
    if (sensorReading == LOW && currentSensorState == HIGH) {
      visitorCount++;
      updateDisplay();
    }
    currentSensorState = sensorReading;
  }
  
  lastSensorState = sensorReading;
  
  // Check for reset button press
  if (digitalRead(RESET_BUTTON_PIN) == LOW) {
    delay(50); // Small debounce
    if (digitalRead(RESET_BUTTON_PIN) == LOW) {
      visitorCount = 0;
      updateDisplay();
      // Wait for button release
      while (digitalRead(RESET_BUTTON_PIN) == LOW) {
        delay(10);
      }
    }
  }
}

void updateDisplay() {
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Visitor Counter");
  lcd.setCursor(0, 1);
  lcd.print("Visitors: ");
  lcd.print(visitorCount);
}
