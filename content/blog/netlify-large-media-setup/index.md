---
title: Netlify Large Media Setup
author: authors/karl.md
date: 2021-06-11T07:06:15.000Z
heroHeading: Netlify Large Media Setup
heroSubHeading: Because I can't remember...
heroBackground: blog/kate-trysh-Dnkr_lmdKi8-unsplash-1.jpg
categories:
  - TIL
tags:
  - blog
  - git
  - hugo
  - netlify
---

Every time I need to clone blog.wooster.xyz to a new computer, I have to remember how to set up the credentials for Netlify Large Media. I've enjoyed using their system for the image transformations that it can do separate from my install and their use of a CDN. However, it adds another layer of complication to the system.

So, what does that mean?

First, make sure that [git](https://git-scm.com/download/win) and [git lfs](https://git-lfs.github.com/) are installed.

Use the git bash terminal for the following steps. PS and WSL don't seem to work.

1. Make sure that [Node.js](https://nodejs.org/en/download/) is installed.
2. Then, make sure to install and authorize netlify cli:

`npm install netlify-cli -g netlify login`

This should launch a browser to authorize netlify with this setup:

{{\< netlify/imgproc cli-authorize-ui Fit "500" >}}Authorization{{\< />}}

1. Install [Netlify Credential Helper](https://github.com/netlify/netlify-credential-helper)

`netlify lm:install`

That completes the installation. The other thing that I learned is that using the built-in clone tool in VSCode doesn't seem to work with the credential helper. I think. In any case, use the git bash terminal to run a `git clone` instead. Once the initial clone is complete, the built-in tools seem to work fine.

## Conclusion

Hopefully, that's enough. I'm writing this *after* I've done all the work, and I don't really know a good way to test it to make sure these steps are all correct, but I'm reasonably confident I've hit the high points. Hopefully, this will be helpful the next time I need to do something like this.
