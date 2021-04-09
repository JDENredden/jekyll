---
layout: page
permalink: /blog/
pagination:
  enabled: true
title: Blog
---

{% if paginator.page > 1 %}
  <h2>Page {{ paginator.page }}</h2>
{% endif %}

<p>This is my blog, I call it, The Gospel According to jden, I write about my projects, obersvations about technology and the arts and cultural sector, with a specific focus on the Australian realm.</p>

<p><a href="/subscribe/">Subscribe</a> to the newsletter to recieve an email once a week with new blog posts.</p>

<hr>

<p>Filter the archive by: <a href="{{ site.baseurl }}/archive/">year</a>, <a href="{{ site.baseurl }}/archive/category/">category</a>, or by <a href="{{ site.baseurl }}/archive/tag/">tag</a>.</p>

<hr>

<div class="posts">
    
  {% for post in paginator.posts %}
  <article class="post">
    <h1 class="post-title">
      {% if post.external_url %}
        <a class="external-link" href="{{ post.external_url }}/" onclick="captureOutboundLink(this); return false;">{{ post.title }}</a>&nbsp;
        <a href="{{ post.url }}">&#8734;</a>
      {% else %}
      <a href="{{ post.url }}">{{ post.title }}</a>
      {% endif %}
    </h1>
    <a class="post-date" href="{{ site.baseurl }}/archive/{{ post.date | date: '%Y/%m/%d' }}/"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%A, %-d %B %Y" }}</time></a>
    {% if post.content contains '<!--more-->' %}
        {{ post.content | split:'<!--more-->' | first }}
    {% else %}
         {% assign truncatedContent = '' %}
        {% assign paragraphs = post.content | split:'</p>' %}
        {% for paragraph in paragraphs limit:N %}
     {{ truncatedContent | append: paragraph }}
     {{ truncatedContent | append: '</p>' }}
 {% endfor %}
    {% endif %}
        <a href="{{ post.url }}/">Continue reading.</a>
    <hr>
  </article>
  {% endfor %}
</div>

<div class="pagination">
  {% if paginator.total_pages > 1 %}
      {% if paginator.next_page %}
        <a class="pagination-item older" href="{{ paginator.next_page_path | prepend: site.baseurl }}/">Older</a>
      {% else %}
        <span class="pagination-item older">Older</span>
      {% endif %}
      {% if paginator.previous_page %}
        <a class="pagination-item newer" href="{{ paginator.previous_page_path | prepend: site.baseurl }}/">Newer</a>
      {% else %}
        <span class="pagination-item newer">Newer</span>
      {% endif %}
  {% endif %}
</div>
