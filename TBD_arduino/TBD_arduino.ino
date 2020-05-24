#include <Adafruit_Sensor.h>

// DHT Temperature & Humidity Sensor
// Unified Sensor Library Example
// Written by Tony DiCola for Adafruit Industries
// Released under an MIT license.

// Depends on the following Arduino libraries:
// - Adafruit Unified Sensor Library: https://github.com/adafruit/Adafruit_Sensor
// - DHT Sensor Library: https://github.com/adafruit/DHT-sensor-library

#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>

#define DHTPIN            7         // Pin which is connected to the DHT sensor.

// Uncomment the type of sensor in use:
#define DHTTYPE           DHT11     // DHT 11 
//#define DHTTYPE           DHT22     // DHT 22 (AM2302)
//#define DHTTYPE           DHT21     // DHT 21 (AM2301)

// See guide for details on sensor wiring and usage:
//   https://learn.adafruit.com/dht/overview

DHT_Unified dht(DHTPIN, DHTTYPE);

uint32_t delayMS;
int dhread;             //Serial monitor reader
int solenoidPin = 4;    //This is the output pin on the Arduino we are using
int temp;
int hum;

void setup() {
  Serial.begin(9600); 
  // Initialize device.
  dht.begin();
  // Print temperature sensor details.
  sensor_t sensor;
  dht.temperature().getSensor(&sensor);

  dht.humidity().getSensor(&sensor);
  // 30 Second delay between each reading
  delayMS = 10000;

  pinMode(solenoidPin,OUTPUT);

  digitalWrite(solenoidPin, LOW); //Makes sure solenoid is off to avoid leaking
  
}

void loop() {
  sensors_event_t event;  
  dht.temperature().getEvent(&event);
  dht.humidity().getEvent(&event);
  
  if (Serial.available()>0){
  dhread = Serial.read();}
  
  if (dhread == 'r') {
      // Get temperature event and print its value.
   
    if (isnan(event.temperature)) {
      Serial.println("Error reading temperature!");
    }
    else {
      Serial.print("T");
      Serial.print(event.temperature);
      
    }
    // Get humidity event and print its value.
    
    if (isnan(event.relative_humidity)) {
      Serial.println("Error reading humidity!");
    }
    else {
      Serial.print(" H");
      Serial.println(event.relative_humidity); 
    }

  }
  if (dhread == 'k'){
    digitalWrite(solenoidPin, HIGH); // Switches solenoid on to flood the plant with water
    Serial.println("Solenoid is on");
    delay(10000);
    digitalWrite(solenoidPin, LOW); // Switches solenoid valve off
    Serial.println("Solenoid is off");
  }
 Serial.print("H:");
 Serial.println(event.relative_humidity);
 Serial.print("T: ");
 Serial.println(event.temperature);
 
  if ((event.relative_humidity < 60) && (event.temperature > 25)){
    digitalWrite(solenoidPin,HIGH);
    delay(5000);
    digitalWrite(solenoidPin, LOW);
    
  }


    
  }

 

