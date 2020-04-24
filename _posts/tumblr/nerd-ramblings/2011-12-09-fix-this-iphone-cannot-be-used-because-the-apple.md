---
layout: post
categories: tumblr nerd-ramblings
title: Fix "This iPhone cannot be used because the Apple Mobile Device Service is
  not started."
date: '2011-12-09T00:53:00+10:30'
tags:
- Apple
- Apple-Mobile-Device
- service
- iphone
- ipod
- ipad
- touch
- windows
- '7'
- itunes
- computer
- nerd
- ramblings
- nerd-ramblings
- solution
- fix
- cannot
- be
- used
- sync
- music
tumblr: Nerd Ramblings
tumblr_website_url: https://nerdramblings.tumblr.com
tumblr_url: https://nerdramblings.tumblr.com/post/13958530936/fix-this-iphone-cannot-be-used-because-the-apple
---
The other day I was listening to my iPhone, and realised a new song that I downloaded on my PC had not synced over. So I tried to manually sync it with the USB cable as aposed to the Wifi Syncing. Only to be greated to this message.

> This [device] cannot be used because the Apple Mobile Device Service is not started.

So after some snooping I found a solution. [For Windows 7]

1. Close iTunes.
2. Go to the Start Menu and search for ‘Services’, open the corresponding .exe.
3. Search for 'Apple Mobile Device’, you mght need to click 'Standard’ on the bottom of the window.
4. Double-click on 'Apple Mobile Device’, and click 'Start’.
5. Now my problem was that this service was not starting automatically on boot. To fix this, click on the 'Startup Type’ dropdown menu and choose 'Automatic’.

Apple Mobile Device Service should now start on boot, and you should be able to sync freely now.

**_Update:_** _This problem persisted for me after following the steps. But it fixed it self after I chose 'Automatic (Delayed)’ option in the Services program._

