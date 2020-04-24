---
layout: post
categories: tumblr nerd-ramblings
title: Fix Apple Firewall asking for permissions
date: '2011-05-19T09:55:00+09:30'
tags:
- iTunes
- mac
- firewall
- asking
- allow
- permissions
- keeps
- fix
- how-to
- tutorial
- tech
- dropbox
- uninstall
- install
tumblr: Nerd Ramblings
tumblr_website_url: https://nerdramblings.tumblr.com
tumblr_url: https://nerdramblings.tumblr.com/post/5637291886/fix-apple-firewall-asking-for-permissions
---
As long as I can remember every time I opened up iTunes it would ask me to allow it permissions for my firewall. I have been meaning to check this out and find out why, but I just simply have had not gotten around to it. Then it started to happen to my Dropbox. At this point I decided to delve further.

After some Googling I found out that probably it was not signed properly and that the firewall did not see it as a trusted program, when clearly it is, Apple made it of course.

So do a check for this, fire up Terminal.app and write this command.

`codesign -vvv /Applications/iTunes.app `

It should return this string.

`/Applications/iTunes.app: valid on disk/Applications/iTunes.app: satisfies its Designated Requirement`

Mine returned this.

`/Applications/iTunes.app: a sealed resource is missing or invalid/Applications/iTunes.app/Contents/Resources/iTunesASUHelper: resource modified/Applications/iTunes.app/Contents/Resources/iTunesHelper.app/Contents/MacOS/iTunesHelper: resource modified`

So this means it is not a trusted signed piece of software. How do we fix this? We simply uninstall&nbsp;iTunes and download a clean copy and install. Don’t worry about deleting iTunes, all your music and media will stay intact.

Why do the apps loose their signed code? Most probably because you have done some sort of hack. For example I changed the way iTunes had the ‘Close, Minimise, Maximise’ buttons. And for Dropbox I changed the menubar item so it was invisible. After&nbsp;reinstalling these hacks stayed, but the problem went away.&nbsp;

Repeat this process with any app that continually asks you these questions. Hope this solved your problem.

