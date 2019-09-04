---
layout: page
title: The Monsters Under The House
image: monstertank-july14.jpg
comments: false
description: Current fish I have in my monster tank
---
{% for fish in site.data.monster_fish %}
{% assign pages =  forloop.index | modulo: 4 %}
<div class="row w-100 rounded border bg-white"{% if pages == 0 %} style="page-break-after: always; break-after: always"{% endif %}>
 <a href="javascript:;" data-image="{{ site.url }}{{ site.thumbnails }}{{ fish.image }}" rel="lightbox" class="col-md-3 featuredImage m-0 p-0" style="background: url('{{ site.url }}{{ site.thumbnails }}{{ fish.image }}') no-repeat center top / cover" >{{ fish.name }}<img class="d-none d-print-block" src="{{ site.url }}{{ site.thumbnails }}{{ fish.image }}" alt="{{ fish.name }}" title="{{ fish.name }}" /></a>
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
<a href="{{ fish.link }}" target="_blank" class="d-print-none" rel="noreferrer noopener">More info …</a>
   </div>
  </div>
 </div>
</div>
<p> &nbsp; </p>
{% endfor %}
