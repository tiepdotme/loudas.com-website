---
layout: page
title: The Monsters Under The House
image: ../2019-den-project/monstertank-july14.jpg
comments: false
description: Current fish I have in my monster tank
---
{% for monsterfish in site.data.monster_fish %}
{% assign pages =  forloop.index | modulo: 4 %}
<div class="row w-100 rounded border bg-white"{% if pages == 0 %} style="page-break-after: always; break-after: always"{% endif %}>
 <a href="#" data-image="{{ site.url }}{{ site.thumbnails }}{{ monsterfish.image }}" rel="lightbox" class="col-md-3 featuredImage m-0 p-0" style="background: url('{{ site.url }}{{ site.thumbnails }}{{ monsterfish.image }}') no-repeat center top / cover" >{{ monsterfish.name }}<img class="d-none d-print-block" src="{{ site.url }}{{ site.thumbnails }}{{ monsterfish.image }}" alt="{{ monsterfish.name }}" title="{{ monsterfish.name }}" /></a>
 <div class="col-md-9" >
<h2>{{ monsterfish.name }}</h2>
<h3>{{ monsterfish.scientific_name }}</h3>
  <div class="row w-100 bg-white">
   <div class="col-md-3">
   <h5>Habitat</h5>
   </div>
   <div class="col-md-9">
{{ monsterfish.habitat }}
   </div>
  </div>
  <div class="row w-100 bg-white">
   <div class="col-md-3">
   <h5>Maximum size</h5>
   </div>
   <div class="col-md-9">
{{ monsterfish.size }}
   </div>
  </div>
  <div class="row w-100 bg-white">
   <div class="col-md-12" >
<a href="{{ monsterfish.link }}" target="_blank" class="d-print-none" rel="noreferrer noopener">More info …</a>
   </div>
  </div>
 </div>
</div>
<p> &nbsp; </p>
{% endfor %}
