---
layout: post
author: paul
comments: true
categories:
  - Family
  - Outdoors
image: Meribel-2019.jpg
---

I'll write something very soon, in the meantime, here are some images:


<div class="row no-gutters">

 {% for image in site.static_files %}
 {% if image.path contains 'assets/images/2018-2019-Meribel-Gallery' %}
 {% unless image.path contains 'thumbnails' %}
 <div class="col-md-6 col-lg-3 col-sm-6">
  <div class="thumbnail">
   <img src="{{ site.url }}/{{ image.basename | prepend: 'assets/images/2018-2019-Meribel-Gallery/thumbnails/' | append: image.extname }}" alt="Thumbnail: {{ image.name }}" rel="lightbox" class="thumbnail">
  </div>
 </div>
 {% endunless %}
 {% endif %}
 {% endfor %}
</div>
