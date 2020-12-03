---
layout: post
author: armin

lang: en
category: Announcements
time-read: 5 minute read
related_image: /assets/img/content/robot-simulation.png
---

After sorting tons of plastic by hand for recycling back in Thailand, I’ve decided to automate this process. As all purchasable solutions are way too expensive for personal use or lack decent performance, I settled on developing a low-cost robot arm with visual detection and Near-Infrared scanning.
I am doing this project mainly for fun and engineering experience, with the hope of it becoming useful and productive in recycling as soon as it works.

Follow my GitHub to stay up to date with recent developments!


Hi, my name is Armin! This video series will be about making and programming a plastic sorter. 
There are many expensive solutions out there on the market. But none of them are really accessible to individuals. 
Quick disclaimer: 
This project is mainly developed for fun and engineering experience. Recreate any parts of this project at your own risk. All measurements are given in the metric system. 
Enjoy watching!
The requirements for this machine are three main things. 
One: It has to be able to detect plastic waste items by their type and color.
Two: It has to pick them up precisely from a possibly moving platform.
Three: It has to do this super fast to make its operation profitable. 
For the detection, I’m going to use a camera and a NIR spectrometer. 
Currently, I am still prototyping on my own spectrometer. So we will skip the identification step for now. 
Identifying the location of the items is solved using a camera and dedicated computer vision algorithms. 
Handling the items is the next big challenge. Professional systems use air nozzles shooting the items in the right direction. This works on a large scale but has major downsides within a smaller and low-cost implementation. 
I will use a robotic arm for this purpose. It will pick up the items using a vacuum suction cup and place them in the matching material stream. Also, robot arms are just fun to watch!
Making the sorting process fast is one of the biggest challenges. If every item takes, let’s say 10 seconds for handling and it weighs 10 grams like an average yogurt cup, the system would be able to sort 60 grams per minute, 360 grams per hour, and only 8.64 kilograms a day. 
To handle for example the 820 000 tons of plastic that were recycled in Germany back in 2017 it would take 260 000 robots working simultaneously.
Reducing the robot cycle time to 1 second it would take 26 thousand robots working 24 / 7 for the entire year. 

This is kind of achievable. 
You can see where this is going. 
So what’s next?

With robotics, it’s always easier to write a simulation before building the mechanics. This way, for example, motor torques can be determined and the possible movements can be tested. 

When searching for motor drivers, I did not find any matching one for the application. All of them were bulky, without encoder inputs, or not powerful enough. That’s why I decided to develop one from scratch. With my background in electrical engineering, the hardware design went down in one weekend. 
The firmware will take a bit longer but will still be worth it. Being able to sense the motor currents and write a torque based control algorithm will come in handy later. 

Mechanical engineering is the part of this project I was afraid of most. 
I just decided to use the most accessible manufacturing methods and the cheapest material possible. 
That’s why I settled on a design using Laser Cut Aluminium Sheets and 3d printed bearing inserts. T5 timing belts with pulleys and Nema 17 and Nema 23 Stepper motors with encoder feedback will be used to drive each individual axis. 


That’s it for the first project overview. I plan on uploading an update video every month from now on. Please consider subscribing if you do not want to miss any of these.
