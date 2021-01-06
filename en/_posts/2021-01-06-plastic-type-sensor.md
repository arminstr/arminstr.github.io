---
layout: project
author: Armin

lang: en
category: Projects
time-read: 5 minute read
related_image: /assets/img/content/sensorNotLabeled_small.png
description: We continued our work on the low-cost plastic-type sensor. This version uses a MEMS Light Filter and a serial data interface.
abstract: Packaging uses many different types of plastic. Most of them have the same haptics and optical appearance. As soon as sorting happens in an automated manner e.g. using robots, it is mandatory to use accurate sensing devices. This is the only way automatically recycled plastics can reach a purity that is good enough for closed-loop recycling.
learnMore: true
viewOnGithub: false
watchVideo: 
readPaper:
cardWidth: 5
published: true
---

### Introduction
After gaining experience with plastic-type sensing based on near-infrared spectroscopy in the reremeter[^1] project, we decided to take it a step further. To identify plastics with greater than human accuracy and avoid unrecognized wrong detections in automated sorting environments we decided on a NIR spectrum analysis with greater resolution. Therefore we intend on using a MEMS light filter in combination with a broadband light source. A graphical overview of this setup is displayed in Figure 1.
 
{% include image.html url="/assets/img/content/sensorLabeled_large.png" description="Figure 1: NIR plastic-type Sensor overview sketch" %}
### Technical Explanation
The plastic-type sensor uses a light bulb in combination with a MEMS NIR filter to create high-resolution spectra in the range of 1550 to 1850 nanometers. In this region, all majorly used plastic-types show unique spectra.
These spectra will be transferred to a computer running the identification software. This software will then use the characteristic features of each plastic-type for identification.
As we capture a 1 nm resolution spectrum the scanning and identification time will be at 1-2 seconds.
 
### Manufacturing and Expenses
This sensor will be a highly integrated device. This makes it hard to assemble by hand. Additionally, the manufacturing steps have to include sensor calibration and parameter changes for each individual unit. Those steps are hard to automate and require certain know-how.
The MEMS sensor will be sourced from a Japanese manufacturer. Therefore this project is dependent on part availability.
All other parts of this project will be available open-source. We plan on providing all necessary manufacturing files, CAD Models, and assembly instructions at no charge. Our target hardware price is 300 euros. A pre-assembled kit with sensor calibration might become available for ~ 700 euros.
 
### Conclusion
This version of the plastic-type sensor will be able to identify plastics based on features that are hidden from human eyesight or touch. We still intend on using an additional visual classification model for the basic identification of recyclables and the general material quality. This way e.g. good quality, high reflectivity items could be scanned at a lower resolution. Using this approach identification times could be reduced by a factor of 10.
 
<div class="container p-5"></div>
 
### Final Words and Planned File Release
The targeted final file release is by end of Q3 2021. Currently, Armin is testing the electronics for the MEMS filter control. The MEMS filter itself should arrive within the next 4-6 weeks. The first results should therefore be expected by end of Q1 2021.
If you want to help with software or hardware development feel free to contact us via contact@openrecycling.com or using the contact form linked below.
 
<a class="btn btn-outline-primary my-sm-3" href="/{{page.lang}}/contact.html">{{site.data.translations['IndexHeadingButton'][page.lang]}}</a>
---
###### Footnotes
[^1]: reremeter - Open Source discrete NIR plastic-type sensor released by RealRecycling in 2019