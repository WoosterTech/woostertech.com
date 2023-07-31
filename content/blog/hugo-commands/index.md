---
title: "Hugo Commands"
date: 2022-11-30T08:10:00-07:00
draft: false
heroHeading: 'Hugo Commands'
heroSubHeading: 'Common Hugo Commands'
heroBackground: 'services/service2.jpg'
---

I can never seem to remember how I've setup Hugo and what that command is for
creating a new post, so here are a few of my regulars.

```shell
hugo new content/english/post/<post title>/index.md
hugo new --kind blog-bundle blog/my-blog-post
```

Does *not* automatically create a proper title unless theme/site is set to do
so.