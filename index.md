---
layout: page
pagination:
  enabled: true
title: Home
---

# I'm jden redden.

## This is my website. 

I am a producer, creative consultant, non-executive director, and magician from Adelaide. 

You can read my [blog here](/blog/), or learn more [about me](/about.html), or check out some of the [stuff I have done](/projects.html).

[Hire me or work with me](/cv.html). 

[Twitter](https://www.twitter.com/jden) and [Instagram](https://www.instagram.com/jden).

<hr>

## Recent blog posts

<div class="posts">
    
  {% for post in paginator.posts limit:5 %}
  <article class="related-posts">
    <a href="{{ site.baseurl }}{{ post.url }}">
      <h4>{{ post.title }}
      <small><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d %B %Y" }}</time></small></h4>
    </a>
  </article>
  {% endfor %}
</div>

<aside class="related">
  <h3><a href="{{ site.baseurl }}/archive.html">Archive</a></h3>
</aside>