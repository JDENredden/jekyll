---
layout: post
categories: tumblr nerd-ramblings
title: Fix Spastic Spotlight in Lion.
date: '2012-02-17T01:45:00+10:30'
tags:
- Fix
- Spastic
- Spotlight
- in
- Lion
- Mac
- OS X
- '10.7'
- terminal
- finder
- 3rd party
- sudo
- re
- reindex
- indexing
- boot
- 'off'
- 'on'
- mdimporter
- delete
- nerd
- ramblings
- nerd ramblings
- jden redden
tumblr: Nerd Ramblings
tumblr_website_url: https://nerdramblings.tumblr.com
tumblr_url: https://nerdramblings.tumblr.com/post/17756328563/fix-spastic-spotlight-in-lion
---
My Spotlight has recently been reindexing on each boot, and when you have a MacBook Pro indexing cuts the battery in half when out and about, not to mention the fan noise and heat as a result. I searched for some solutions online, I’ve done a bunch of them like; reindexing via Terminal and 3rd Party Apps, reindexing from System Preferences, turning Spotlight off/on in Terminal and more.

Previous Spotlight problems I’ve had have been solved by turing off Spotlight in Terminal, rebooting, then turning it back on. If you want to try this use this code.

`sudo mdutil -a -i off`

You will need to enter you password for the `sudo` command. Then reboot your Mac. Then enter this code.

`sudo mdutl -a -i on `

If that worked for you fantastic. But it&nbsp;didn't&nbsp;work for me. I finally found the problem. It was indexing my Bootcamp volume, Windows HD. As Windows HD is a NTFS volume and OS X has problems with them the index for Windows HD was being&nbsp;constantly&nbsp;rebuilt.

The fix, go into System Preferences \> Spotlight \> Privacy. Then add your Bootcamp volume to the Privacy list. The fix was instant for me. But to be safe I turned off Spotlight and turned it back on to get a clean index.

While you’re at it, it might be&nbsp;beneficial&nbsp;to delete 3rd Party Spotlight Importers which some people say solves similar problems. In Finder.app go to `/Library/Spotlight` and delete all .mdimporter files. Do the same in `username/Library/Spotlight.`

