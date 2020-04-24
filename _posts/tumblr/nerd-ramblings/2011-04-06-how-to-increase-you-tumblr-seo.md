---
layout: post
categories: tumblr nerd-ramblings
title: How to increase you Tumblr SEO
date: '2011-04-06T08:02:00+09:30'
tags:
- tumblr
- SEO
- wordpress
- blogger
- search-engine-optimisation
- web
- html
- code
- blog
- get-more-visitors
- traffic
- google
- bing
- yahoo
- webmaster
- increase
- tips
tumblr: Nerd Ramblings
tumblr_website_url: https://nerdramblings.tumblr.com
tumblr_url: https://nerdramblings.tumblr.com/post/4388960162/how-to-increase-you-tumblr-seo
---
Tumblr does not have very good SEO built in, compared to blog sites like Wordpress and Blogger. But you do have the option to edit the HTML, so we can increase our search rank with a bit of smart coding, and good habits.

1. **Beef up the \<title\> tag.**  
Add the Post Summary to the Title, as its more likely to gain you search spots than the title alone.  
  
`<title>{block:PostSummary}{PostSummary} - {/block:PostSummary}{Title}</title>  `
2. **Use your tags as keywords.**  
Basic SEO 101, add meta keywords, but we’ll leverage off of Tumblr to dynamically add them.  
  
`<meta name=”keywords” content=”{block:Permalink}{block:Posts}{block:Tags}{Tag}, {/block:Tags}{/block:Posts}{/block:Permalink}” /> `
3. **Meta it more.&nbsp;**  
Add meta tags for title and description.&nbsp;  
  
`<meta name=”title” content=”{block:PostSummary}{PostSummary} - {/block:PostSummary}{Title}” /> <meta name=”description” content=”{MetaDescription}” />`&nbsp;&nbsp;  
  
4. **Upload your sitemap.xml to Google Webmaster Tools.**  
  
Tumblr builds sitemaps automatically, [http://yourname.tumblr.com/sitemap.xml](http://yourname.tumblr.com/sitemap.xml). Submit it to [Google Webmaster Tools](http://www.google.com/webmasters/tools/), [Bing Webmaster](http://www.bing.com/webmaster/) and [Yahoo Site Explorer](https://siteexplorer.search.yahoo.com/).  
  
5. **Use \<h1\>.**  
Delve into your themes custom HTML and find the {block:Title} and replace it with this.  
  
`{block:Title}<h1>{Title}</h1>{/block:Title}`
6. **Add a social button.**  
Search engines rank sites higher by the the amount of sites that link to a page, so make it easy for people to link to you.  
  
`<!-- AddThis Button BEGIN --><div class="addthis_toolbox addthis_default_style " addthis:title="{Title}" addthis:url="{Permalink}"><a class="addthis_button_preferred_1"></a><a class="addthis_button_preferred_2"></a><a class="addthis_button_preferred_3"></a><a class="addthis_button_preferred_4"></a><a class="addthis_button_compact"></a><a class="addthis_counter addthis_bubble_style"></a></div><script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#pubid=xa-4d9c5506633045a3"></script><!-- AddThis Button END -->`
7. **Piggy back on Tumblr’s limited SEO.**  
Go to the [http://www.tumblr.com/customize,](http://www.tumblr.com/customize,) and under _Advanced_, and tick _Use descriptive URLs_ and _Allow search engines to index your blog_.  
  
8. **Add [Google Analytics](http://googleanalytics.com) so you can track your progress.**

Follow these steps as well as good and engaging content you should have solid traffic from search engines.&nbsp;

