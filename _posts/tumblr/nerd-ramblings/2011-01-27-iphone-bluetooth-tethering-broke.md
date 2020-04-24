---
layout: post
categories: tumblr nerd-ramblings
title: iPhone bluetooth tethering broke?
date: '2011-01-27T03:42:13+10:30'
tags:
- mac
- iphone
- tethering
- itunes
- bluetooth
- PAN
- broke
- how to
- tutorial
- mywi
- jailbreak
tumblr: Nerd Ramblings
tumblr_website_url: https://nerdramblings.tumblr.com
tumblr_url: https://nerdramblings.tumblr.com/post/2955472301/iphone-bluetooth-tethering-broke
---
Recently my native iPhone tethering via bluetooth&nbsp;wasn't&nbsp;working. It would work tethering over usb. After a quick Google search I found out that this was a common problem. At the time I just downloaded MyWi 4 a jailbroken app. Which creates a Wifi hotspot. So instead of solving the problem, I just used that app.

But as of late, that app has been causing me some problems. It kept dropping out, even though I was connected. And made my iPhone /really/ hot. So I tried to use native tethering, to no avail. Google searched again found now answers. So after un-pairing, re-pairing, restarting, restoring etc. etc. I discovered this solution.

1. Delete ‘iPhone’ from Bluetooth pane in System Prefs.
2. Go to 'Network’ pane, then delete 'Bluetooth PAN’.
3. Click the ’+’ button, create new Bluetooth PAN.
4. Then click 'Set-up Bluetooth Device’.
5. Go through the prompts and pair iPhone.
6. Enjoy tethering.

After finding this solution, I found it&nbsp;[online](http://forums.mactalk.com.au/31/67260-iphone-bluetooth-tethering-not-working.html). With a reason why it works.&nbsp;Apparently&nbsp;the tethering wouldn’t work because the computer&nbsp;wasn't&nbsp;fetching the IP from the iPhone, and failing to establish connection. And deleting the 'Bluetooth PAN’ and re-creating it, resets this 'fail’, so it will work again.

Hope this helps you.

