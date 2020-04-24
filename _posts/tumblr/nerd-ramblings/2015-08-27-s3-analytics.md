---
layout: post
categories: tumblr nerd-ramblings
title: S3 Analytics
date: '2015-08-27T08:53:36+09:30'
tags:
- S3Stat
- Amazon
- Amazon AWS
- AWS
- S3
- Amazon Web Services
- Amazon S3
- Google Analytics
- Analytics
- statistics
- stat
tumblr: Nerd Ramblings
tumblr_website_url: https://nerdramblings.tumblr.com
tumblr_url: https://nerdramblings.tumblr.com/post/127709942869/s3-analytics
---
Recently I have been working on a new project and when it came to making the website I decided to move away from my regular web host and try out _Amazon Web Service’s S3_. Part of the project is hosting files for audience members to download, the links must be direct and cannot contain a redirect. They must also be served over https, another reason why I decided to go with S3.&nbsp;

I want to track the download counts of these files and look at analysts to investigate the usage of these files. S3 doesn’t provide this natively in the console and I can’t use _Google Analytics_ because the files are direct. I noticed that S3 does have logging, but this creates unwieldy log files.&nbsp;

There are a number of companies that offer services to read these log files and provide useful analytics. One such company is [S3Stat](https://www.s3stat.com). I have been using them for a couple weeks so far, and they have executed perfectly. Works great from my iPad which I am constantly working on abroad. And the main use case that I wanted analytics for, _S3Stat_ delivers.&nbsp;

<center><figure data-orig-width="1064" data-orig-height="582" class="tmblr-full"><img src="https://66.media.tumblr.com/96e46b65a045d90ab87084509f9fbc51/tumblr_inline_ntqrnyYHao1qbucah_540.png" alt="image" data-orig-width="1064" data-orig-height="582"></figure></center>
  

Pricing starts at $10 a month, or you can write a blog post not to dissimilar from this one and get access for free. Under their extremely generous _Cheap Bastard Plans_. Even for the $10 a month this is an extremely polished service and I would really recommend you try them out.

