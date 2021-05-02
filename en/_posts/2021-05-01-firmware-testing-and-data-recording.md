---
layout: post
author: Armin

lang: en
category: Announcements
time-read: 3 minute read
related_image: /assets/img/content/sensor-prototype.jpeg
published: true
---
## News regarding the Plastic Type Sensor
 
Sadly the dataset is not ready at this point. But it is in the making!
The first measurement results are displayed below.

{% include image.html url="/assets/img/content/sample_data_first.png" description="Figure 1: Reflectivity scans for four different samples of PP." %}

For testing purposes a case for the prototype hardware was printed. As an interface to the computer an Arduino is used. 

The data dispalyed in Figure 1 is a reflectivity measurement for four different white polypropylene plastic samples. Additionally, a reference measurement without a sample is subtracted from the original measurement. Then a minmax algorithm is applied and the data gets filtered. You can check out the data files on github and run the evaluation script by yourself.

Help with data processing is always welcome! Feel free to contact us via contact@openrecycling.com or using the contact form linked below.
 
<a class="btn btn-outline-primary my-sm-3" href="/{{page.lang}}/contact.html">{{site.data.translations['IndexHeadingButton'][page.lang]}}</a>