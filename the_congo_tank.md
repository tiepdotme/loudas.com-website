---
layout: page
title: The Congo Tank
image: congo_tank.jpg
comments: false
author: paul
description: Current Congo fish I have 
---
<div class="row w-100 rounded border bg-white d-print-none">
 <a href="javascript:;" data-image="{{ site.url }}{{ site.thumbnails }}{{ page.image }}" rel="lightbox" class="col-md-3 featuredImage m-0 p-0" style="background: url('{{ site.url }}{{ site.thumbnails }}{{ page.image }}') no-repeat center top / cover" data-toggle="tooltip" data-placement="bottom" data-original-title="Show larger image" >{{ page.image }}<img class="d-none d-print-block" src="{{ site.url }}{{ site.thumbnails }}{{ page.image }}" alt="{{ page.image }}" title="{{ page.image }}" /></a>
 <div class="col-md-9" >
<h1>{{ page.title }}</h1>
<p>
This is a list of fish I keep in my Congo tank. I'll try to keep it updated. 🤣<br />
<a data-toggle="tooltip" data-original-title="Check out my Aquarium videos" data-placement="bottom" href="/aquarium_videos.html" class="btn btn-primary btn-lg">Check out my Aquarium videos</a>
</p>
 </div>
</div>
<hr class="d-print-none" />
<p> &nbsp; </p>

{% for fish in site.data.congo_fish %}
{% assign pages =  forloop.index | modulo: 4 %}
<div class="row w-100 rounded border bg-white"{% if pages == 0 %} style="page-break-after: always; break-after: always"{% endif %}>
 <a href="javascript:;" data-image="{{ site.url }}{{ site.thumbnails }}{{ fish.image }}" rel="lightbox" class="col-md-3 featuredImage m-0 p-0" style="background: url('{{ site.url }}{{ site.thumbnails }}{{ fish.image }}') no-repeat center top / cover" data-toggle="tooltip" data-placement="bottom" data-original-title="Show larger image" >{{ fish.name }}<img class="d-none d-print-block" src="{{ site.url }}{{ site.thumbnails }}{{ fish.image }}" alt="{{ fish.name }}" title="{{ fish.name }}" /></a>
 <div class="col-md-9" >
<h2>{{ fish.name }}</h2>
<h3>{{ fish.scientific_name }}</h3>
  <div class="row w-100 bg-white">
   <div class="col-md-3">
   <h5>Habitat</h5>
   </div>
   <div class="col-md-9">
{{ fish.habitat }}
   </div>
  </div>
  <div class="row w-100 bg-white">
   <div class="col-md-3">
   <h5>Maximum size</h5>
   </div>
   <div class="col-md-9">
{{ fish.size }}
   </div>
  </div>
  <div class="row w-100 bg-white">
   <div class="col-md-12" >
<a data-toggle="tooltip" data-original-title="Read more at {{ fish.link }}" data-placement="bottom" href="{{ fish.link }}" target="_blank" class="d-print-none" rel="noreferrer noopener">More info …</a>
   </div>
  </div>
 </div>
</div>
<p> &nbsp; </p>
{% endfor %}
