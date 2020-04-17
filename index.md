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

<div class="posts">
    
  {% for post in paginator.posts %}
  <article class="post">
    <h1 class="post-title">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h1>

    <time datetime="{{ post.date | date_to_xmlschema }}" class="post-date">{{ post.date | date: "%A %-d %B %Y" }}</time>

    {{ post.content }}
    <hr>
  </article>
  {% endfor %}
</div>

<aside class="related">
  <h3><a href="{{ site.baseurl }}/archive.html">Archive</a></h3>
</aside>

<div class="pagination">
  {% if paginator.total_pages > 1 %}
      {% if paginator.next_page %}
        <a class="pagination-item older" href="{{ paginator.next_page_path | prepend: site.baseurl }}">Older</a>
      {% else %}
        <span class="pagination-item older">Older</span>
      {% endif %}
      {% if paginator.previous_page %}
        <a class="pagination-item newer" href="{{ paginator.previous_page_path | prepend: site.baseurl }}">Newer</a>
      {% else %}
        <span class="pagination-item newer">Newer</span>
      {% endif %}
  {% endif %}
</div>