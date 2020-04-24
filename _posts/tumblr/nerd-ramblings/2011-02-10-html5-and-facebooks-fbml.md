---
layout: post
categories: tumblr nerd-ramblings
title: HTML5 and Facebook's FBML
date: '2011-02-10T02:55:00+10:30'
tags:
- html5
- html
- web
- web-design
- web-code
- valid
- facebook
- fbml
- "&lt;fb&gt;"
- non-valid
- w3c
- xhtml
- fix
tumblr: Nerd Ramblings
tumblr_website_url: https://nerdramblings.tumblr.com
tumblr_url: https://nerdramblings.tumblr.com/post/3213578636/html5-and-facebooks-fbml
---
The [Facebook Markup Langa](http://www.google.com.au/url?sa=t&source=web&cd=1&ved=0CCwQFjAA&url=http%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Freference%2Ffbml%2F&ei=EZhTTa_qConcvQPymNyTCQ&usg=AFQjCNH10EFQixCjwKaX4SsvvApqcTXktg&sig2=kJ8kxSTcrr6fD_4qpYvI_w)[uge](http://www.google.com.au/url?sa=t&source=web&cd=1&ved=0CCwQFjAA&url=http%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Freference%2Ffbml%2F&ei=EZhTTa_qConcvQPymNyTCQ&usg=AFQjCNH10EFQixCjwKaX4SsvvApqcTXktg&sig2=kJ8kxSTcrr6fD_4qpYvI_w)&nbsp;(FBML), works well with XHTML but fails when it comes to HTML5. Hopefully they’ll make this work with the final HTML5 standard.

On to the solution

\<script src=“http://connect.facebook.net/en\_US/all.js#xfbml=1”\>\</script\>  
\<script type=“text/javascript”\>  
 document.write(’\<fb:like layout=“button\_count” show\_faces=“true” width=“100”\>\</fb:like\>’)  
\</script\>

Thats it. Wrap the \<fb\> tags in Javascript and add ‘document.write’. Comes out as completely valid HTML5.

Add it to your HTML5 site and [validate](http://validator.w3.org/)&nbsp;it.&nbsp;

Update:&nbsp;

> FBML has been deprecated. Starting June 1, 2012 FBML apps will no longer work as all FBML endpoints will be removed. If you are building a new application on Facebook.com, please implement your application using HTML, JavaScript and CSS. You can use our JavaScript SDK and Social Plugins to embedded many of the same social features available in FBML.

[Facebook](https://developers.facebook.com/docs/reference/fbml/%20)

FBML is now covered by a [Javascript SDK](https://developers.facebook.com/docs/reference/javascript/) and [Social Plugins](https://developers.facebook.com/docs/plugins/). Which are written for HTML5.

