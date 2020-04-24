---
layout: post
categories: tumblr nerd-ramblings
title: 'Fix Dropbox''s ''Cant Sync File(s): Permission Denied'''
date: '2011-09-23T06:39:00+09:30'
tags:
- dropbox
- cant
- sync
- files
- permission
- permissions
- denied
- mac
- os
- x
- pc
- Terminal.app
tumblr: Nerd Ramblings
tumblr_website_url: https://nerdramblings.tumblr.com
tumblr_url: https://nerdramblings.tumblr.com/post/10552981162/fix-dropboxs-cant-sync-files-permission
---
I was syncing some files from my PC to my Mac with [Dropbox](http://db.tt/xZJ9xOe), but they never arrived at my Mac. I got a _Cant Sync File(s): Permission Denied_ error. Heres how I fixed it.

Whip open _Terminal.app_.

Write these lines in, one at a time, return key&nbsp;in-between.&nbsp;

{% highlight shell %}
  sudo chown -R $USER ~/Dropboxsudo chmod -R u+rw ~/Dropboxsudo chown -R $USER ~/.dropboxsudo chmod -R u+rw ~/.dropbox
{% endhighlight %}

Notes: Replace _~/Dropbox_&nbsp;with your location of Dropbox folder if you have moved it from default location.

If you dont have [Dropbox](http://db.tt/xZJ9xOe) yet, now is the time to [get](http://db.tt/xZJ9xOe) it.&nbsp;

