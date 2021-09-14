# Botanical Workspace
  A web application that helps you stay focused while maintaining a real houseplant

## Description
  Botanical Workspace is a productivity app with a twist - your focus determines the fate of a real houseplant. When you want to be productive, click the start timer button and   get to work! If you leave the Botanical Workspace page, the timer ends and your connected houseplant gets flooded with water, a terrible fate. However, if you make it all the   way, you are rewarded and your plant is safe.

## Background
  Submitted to the Backyard Hacks 2020 Hackathon.

## Technology
  Botanical Workspace is built on three components, the front-end focus app, the back-end server, and the water pump hardware.

### Front-end
  The front-end is built with React. It has a countdown timer for productivity and a chart reflecting the health of the plant. The chart uses chart.js. Requests and information  are sent to the back-end server 

### Back-end and Hardware
  The back-end is made with a Flask server which handles the routes and information from the front-end application. Using piserial, it communicates with the Arduino Uno. The       water mechanic uses a solenoid valve connected to a water source.

## Usage
  Make sure you have the dependencies. You may need more than what is listed below.

  ```
  npm install

  pip install flask
  pip install piserial
  ```

  Then run the app and server.

  ```
  npm start

  python app.py
  ```

## Contributors
  Matthews Ma

  Samer Rustum

  Rohan Shetty

  Harry Kim
