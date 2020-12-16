---
layout: post
author: armin

lang: en
category: Research
time-read: 2 minute read
related_image: 
---
This post features our simulation and visualtion for robotic arms. The dynamic model provides a description of the relationship between the joint actuator torques and the motion of the structure.[^1] To allow for easy start-up of the software system running on the actual robot controller, the values for moments of inertia, link masses as well as link lengths are derived from the CAD model of the robot. 

## Software Components

## Software Architecture

## Conclusion
The simulation and visualization was tested using a 2,7 GHz Quad-Core Intel Core i7 without a graphics card. With this setup a visualization frame rate of 20 fps was acheived. The simulation runs at 1 ms period time of the software loop. So far no performance tests have been executed on a real-time hardware platform.  
The result can be seen in Figure X.
{% include image.html url="/assets/img/content/roboGif.gif" description="Figure X: Visualization of PTP and LIN moves. GIF exported with 5 fps." %}

---

###### Footnotes

[^1]: Siciliano, B., Sciavicco, L., Villani, L., Oriolo, G. "Robotics: Modelling, Planning and Control" Springer 2009