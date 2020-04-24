---
layout: post
categories: tumblr nerd-ramblings
title: High CPU in Chrome?
date: '2011-02-10T01:33:40+10:30'
tags:
- Chrome
- high
- cpu
- mac
- windows
- exfm
- extension
- flash
- web
- browser
- fix
- task-manager
- activity-monitor
- battery
tumblr: Nerd Ramblings
tumblr_website_url: https://nerdramblings.tumblr.com
tumblr_url: https://nerdramblings.tumblr.com/post/3212910011/high-cpu-in-chrome
---
Had this problem recently, was killing my battery-life. Came up with this method of finding out what the problem was, in my case ‘EXFM’.

- Go to Task Manager or Activity Monitor, and kill the Chrome process that is using the most CPU.
- Chrome should tell you what extension crashed.
- That extension is what’s making Chrome high CPU.
- Uninstall that extension and you’ll be fine. :)

You’re welcome.

If it doesn’t work do a fresh install of the latest **STABLE** Chrome.

**EDIT:** _Flash Player 10.2 has been released today. Which means Flash based video shouldn’t impact CPU as it runs through Hardware Accelerated GPU._

