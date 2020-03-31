---
layout: page
title: My collection of LP's / records
image: records1.jpg
comments: false
author: paul
description: Collection of vinyl / records
---
<div class="row w-100 rounded border bg-white d-print-none">
 <a href="javascript:;" data-image="{{ site.url }}{{ site.thumbnails }}{{ page.image }}" rel="lightbox" class="col-md-3 featuredImage m-0 p-0" style="background: url('{{ site.url }}{{ site.thumbnails }}{{ page.image }}') no-repeat center top / cover" >{{ page.image }}<img class="d-none d-print-block" src="{{ site.url }}{{ site.thumbnails }}{{ page.image }}" alt="{{ page.image }}" title="{{ page.image }}" /></a>
 <div class="col-md-9" >
<h1>{{ page.title }}</h1>
<p>
This is a list of Vinyls / Records / LPs I have. I'll try to keep it updated. 🤣<br />
The collection, by default, is sorted by Artist, alphabetically. You can click on the column headers to change the sorting. <br />
and click the + symbol to view the track listing for each album.
<!-- track listing's received from https://www.discogs.com/ -->
</p>
 </div>
</div>
<p>&nbsp; </p>

<div class="row bg-white rounded w-100 p-3 shadow-sm border">
    <div class="col-md-12">
<table id="lp_collection" class="display" style="width:100%">
<thead>
    <tr>
        <th>Tracks</th>
        <th>Artist</th>
        <th>Album Name</th>
    </tr>
</thead>

{% assign sortedLPs = site.data.lp_collection | sort: 'artist' %}
{% for record in sortedLPs %}
    <tr class="ablum_entry" rel="tracklisting">
        <td class="details-control"><a href="javascript:;" class="show_tracks" rel="tracklisting" data-original-title="Show tracks for: {{ record.artist }} - {{ record.album_name}} " data-toggle="tooltip">+<div class="tracks">{% if record.tracks != null %}
        <div class="row">
            <div class="col-md-6 trext-sm-center text-md-right pb-5">
                {% if record.image != null %}
                <img src="{{ site.url }}/assets/images/albums/{{ record.image }}" alt="{ record.artist }} - {{ record.album_name}}" class="shadow-lg rounded"  style="transform:rotate(5deg)" />
                {% endif %}
            </div>
            <div class="col-md-6">
        {% for track in record.tracks %}
        {{ track[0] }}. {{ track[1] }} <br />
        {% endfor %}
            </div>
        </div>
        {% else %}
        No track listings
        {% endif %}</div></a></td>
        <td class="sorting_1">{{ record.artist }}</td>
        <td class="album_name album_bg_gs font-weight-bold {% if record.image != null %}text-white{% endif %}"{% if record.image != null %} style="background:url({{ site.url }}/assets/images/albums/{{ record.image }}) no-repeat center center / cover; text-shadow: 2px 2px red;"{% endif %}>{{ record.album_name }}</td>
    </tr>
{% endfor %}
</table>
    </div>
</div>
