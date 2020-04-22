---
layout: page
pagination:
  enabled: true
title: Home
non-blog: true
---

# I'm jden redden.

## This is my website. 

I am a producer, creative consultant, non-executive director, and magician from Adelaide. 

You can read my [blog here](/blog), or learn more [about me](/about), or check out some of the [stuff I have done](/projects).

[Hire me or work with me](/cv). 

[Twitter](https://www.twitter.com/jden) and [Instagram](https://www.instagram.com/jden).

<hr>

<aside class="related">
  <h3>Recent posts</h3>
  <ul class="related-posts">
    {% for post in paginator.posts limit:5 %}
      <li class="archive-posts">
        {% include post-list.html %}
      </li>
    {% endfor %}
  </ul>
</aside>