void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(10, OUTPUT);
}

void loop() {
  // Fan full power using analogWrite
  analogWrite(10, 255);
  digitalWrite(LED_BUILTIN, HIGH);
  delay(2000);
  
  // Fan off
  analogWrite(10, 0);
  digitalWrite(LED_BUILTIN, LOW);
  delay(2000);
}
