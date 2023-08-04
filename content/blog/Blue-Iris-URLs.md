---
title: Blue Iris URLs
heroHeading: Blue Iris URLs
heroSubHeading: Everything I know (or don't) about accessing Blue Iris content by URL.
heroBackground: /blog//security-camera-834173_1280.jpg
author: authors/karl.md
date: 2023-08-04T05:08:35.307Z
draft: false
categories:
  - Blue Iris
tags:
  - surveillance
  - security
  - ip cams
---

*Image by [Chris](https://pixabay.com/users/chrisjmit-248609/?utm_source=link-attribution\&utm_medium=referral\&utm_campaign=image\&utm_content=834173) from [Pixabay](https://pixabay.com//?utm_source=link-attribution\&utm_medium=referral\&utm_campaign=image\&utm_content=834173)*

## I Stole These

Literally a copy-paste from [Blue Iris URLs for external streams](https://ipcamtalk.com/threads/blue-iris-urls-for-external-streams.24994/post-238524):

/image/{cam-short-name}?q=50\&s=80 A single JPEG image from a specific camera or group, with optional quality (q) and scale (s) parameters. Quality is a percentage from 1-100, and scale may be any number >0.
/image/{cam-short-name}?h=100 You may also specify a specific height (h) or width (w) instead of scale.
/mjpg/{cam-short-name}/video.mjpg An M-JPEG stream. This stream is compatible with Blue Iris's "MJPEG stream request."
/file/clips/{filename}\&mode=jpeg\&speed=100 An M-JPEG stream of a clip from your New clips folder. You may include additional subdirectory names in the filename. The speed parameter is optional, a percentage of normal playback speed.
/thumbs/{filename} A thumbnail image from a specific file in the New clips folder.
/alerts/{filename} A JPEG image from the Alerts folder.
/admin?profile=x\&lock=y Set the active profile to x. Use x=-1 to toggle the lock status, or set the lock=y, 0=run, 1=temp, 2=hold
/admin?schedule=1 or 0 or schedule name x=0 or 1 to disable/enable Options/Schedule, or a name to set the current schedule
/admin?signal=x Changes the traffic signal state and returns the current state. x=0 for red, x=1 for green, x=2 for yellow. This requires admin authentication.
/admin?output=x\&msec=y or \&force=true Temporarily change the active profile to x. Use x=-1 to toggle the lock status.
/admin?input=x Set DIO output x=0-7 on for y msec, or force on indefinitely
/admin?macro=x\&text={text} Set macro number x=1-9 to value {text}
/admin?console={group name} Select the specified group for display on the console, "index" is All cameras.
/admin?camera=x\&trigger Trigger camera x (short name)
/admin?camera=x\&manrec=1 or 0 Start or stop manual recording on camera x (short name)
/admin?camera=x\&snapshot Snapshot on camera x (short name)
/admin?camera=x\&reset Reset camera x (short name)
/admin?camera=x\&ptzcycle=1 or 0 Trigger camera x (short name)
/admin?camera=x\&pause=x Send pause command to camera x (short name), x=-2 to 10 matching right-click Pause menu
/admin?camera=x\&enable=1 or 0 Enable or disable camera x (short name)
/admin?camera=x\&motion=1 or 0 Enable or disable camera x (short name)
/admin?camera=x\&hide=1 or 0 Enable or disable camera x (short name)
/admin?camera=x\&mdelay=x Enable or disable camera x (short name)
/admin?camera=x\&webcast=1 or 0 Enable or disable camera x (short name)
/admin?camera=x\&preset=x Enable or disable camera x (short name)
/admin?camera=x\&schedule=1 or 0 Enable or disable camera x (short name)
/admin?camera=x\&profile=x Enable or disable camera x (short name)
/admin?camera=x\&alerts=x Enable or disable camera x (short name)
/audio/{cam-short-name}/temp.wav Pull a raw audio stream (MIME type audio/x-wav).
/cam/{cam-short-name}/pos=x Performs a PTZ command on the specified camera, where x= 0=left, 1=right, 2=up, 3=down, 4=home, 5=zoom in, 6=zoom out
/cam/{cam-short-name}/pos=100 Causes a snapshot image to be captured from the specified camera.
/h264/{cam-short-name}/temp.h264 Pull a raw H.264 stream (MIME type video/H264). This stream will play in a tool like VLC, and may be used in future versions of the ActiveX control.
/h264/{cam-short-name}/temp.ts Pull an MPEG-2 transport stream (MIME type video/MP2T).
/h264/{cam-short-name}/temp.m or .m3u8 Pull a virtual M3U8 file (MIME type application/vnd.apple.mpegurl). This will play in QuickTime, iPad and the iPhone using the Apple HLS (HTTP Live Streaming) format.
