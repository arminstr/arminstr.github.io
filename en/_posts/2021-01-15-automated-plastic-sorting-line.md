---
layout: project
author: Armin
 
lang: en
category: Projects
time-read: 5 minute read
related_image: /assets/img/content/sortingLineNotLabeled_small.png
description: Imagining what small scale plastic sorting could look like.
abstract: Automating sorting is key for profitable plastic recycling. We imagine a sorting line utilizing a conveyor belt, camera, robot arm, and plastic-type sensor.
learnMore: true
viewOnGithub: false
watchVideo:
readPaper:
cardWidth: 5
published: true
---
 
### Introduction
To maximize the productivity of small scale plastic recycling workspaces, we designed an automated small scale sorting facility. A graphical overview of this setup is displayed in Figure 1.

### Features
The sorting line will utilize a camera to identify the plastic items coming into the facility. It will use a machine learning model to classify the plastic items into different plastic kinds, as well as their general quality and level of soiling. Additionally, conventional computer vision algorithms will be utilized to detect the object's position as well as the optimal grasping point for the robot arm.
This will happen within the range of motion of the robot arm. That way the items could be flipped for better identification.
After a visual investigation of the objects, they will be picked up by the robot and scanned by the plastic-type sensor. This will initially happen by bringing the item to the sensor. Later on, the sensor might be integrated into the gripper of the robot arm.
As a final step, the items will be tossed into different bins based on user configuration or plastic-type. Unidentifiable objects will remain on the conveyor belt and will be dropped into a hand sorting bin.
The target identification and handling time for an individual item will be five seconds.

{% include image.html url="/assets/img/content/sortingLineLabeled_large.png" description="Figure 1: Sorting line with conveyor belt, camera, robot arm, and plastic sensor" %}

### Safety and Ease Of Use
The robot arm will feature torque limiting algorithms and emergency stop functions. Additionally, software for an easy setup will be provided. This will take care of camera calibration for the visual identification, as well as position teach-in for the sorting bin locations. In case of direct tossing into shredders, interface pins will be provided which tell the shredders that a new item is arriving.
 
<div class="container p-5"></div>
### Final Words and Future Steps
This sorting line is just a concept. But as soon as the work on the plastic-type sensor and the robot arm is completed, they will be incorporated into such kind of system. When reaching the five-second cycle time theoretically ~ 17280 items could be handled a day[^1]. Assuming the handling of 8-gram yogurt cups this would result in a daily material sorting capability of 138 kg.
If you have any ideas for improvement or want to help with software or hardware development feel free to contact us via contact@openrecycling.com or using the contact form linked below.
 
<a class="btn btn-outline-primary my-sm-3" href="/{{page.lang}}/contact.html">{{site.data.translations['IndexHeadingButton'][page.lang]}}</a>
---
###### Footnotes
[^1]: Assuming 24 hours of operation per day