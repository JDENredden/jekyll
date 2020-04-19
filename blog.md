---
layout: page
permalink: /blog/
pagination:
  enabled: true
title: Blog
---

This is my blog, I call it, The Gospel According to jden, I write about my projects, obersvations about technology and the arts and cultural sector, with a specific focus on the Australian realm. 

Browse the [Archive](/archive.html) of posts.

Categories: [Projects](/blog/projects/), [Technology](/blog/technology/), [Arts](/blog/arts/).

---

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
