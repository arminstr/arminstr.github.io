---
layout: project
author: Armin

lang: en
category: Research
time-read: 5 minute read
related_image: /assets/img/content/simulatingRobotDynamics.png
description: We've simulated robot dynamics for easier real-life system integration.
abstract: This post features our simulation and visualization for robotic arms. To allow for easy start-up of the software system running on the actual robot controller, the values for moments of inertia, link masses as well as link lengths are derived from the CAD model of the robot.
learnMore: true
viewOnGithub: https://github.com/arminstr/roboticArm
watchVideo: 
readPaper:
cardWidth: 4
published: true
---
 
## Software Architecture
The software architecture of the digital robot arm twin can be used for digital testing of movement range and speed. Also, collisions can be checked in advance. Currently, only the SCARA kinematic robot arm is modeled and visualized. Later on, the entire plastic sorting and handling system could be modeled the same way.
 
### Simulation
For maximum software portability, the simulation is developed in python. This way it can be easily run on a Linux compute module in the real robot arm as well as on a high performing simulation computer. By incorporating this aspect multiple robots can be run in parallel on different virtual machines. Training machine learning models for path planning or gripping positions can be achieved this way.
The overall robot software consists of a waypoint manager, the robot arm equivalent, the mathematical models including e.g. inverse kinematics and a dynamic model. Additionally, the position and speed controllers are implemented as PID control algorithms.
Inverse kinematics models help to determine the individual joint angles and extensions based on a given end-effector position and rotation.
The dynamic model provides a description of the relationship between the joint actuator torques and the motion of the structure.[^1]
For visualization access, the robot arm position values are written to a CSV file.
 
### Visualization
The visualization is implemented in javascript and can be run using your preferred browser. It uses p5.js which is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else. [^2]
Joint angles of the robot arm are acquired from the CSV file every update cycle. Then the values are plotted to the 3D visualization frame as well as the data graphs.
 
## Conclusion
The simulation and visualization were tested using a 2,7 GHz Quad-Core Intel Core i7 without a graphics card. With this setup, a visualization frame rate of 20 fps was achieved. The simulation runs at 1 ms period time of the software loop. So far no performance tests have been executed on a real-time hardware platform. 
The result can be seen in Figure 1.

{% include image.html url="/assets/img/content/roboGif.gif" description="Figure 1: Visualization of PTP and LIN moves. GIF exported with 5 fps." %}
 
---
 
###### Footnotes
 
[^1]: Siciliano, B., Sciavicco, L., Villani, L., Oriolo, G. "Robotics: Modelling, Planning and Control" Springer 2009
[^2]: p5js.org Homepage