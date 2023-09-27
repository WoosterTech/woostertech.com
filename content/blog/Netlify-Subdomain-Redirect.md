---
title: Netlify Subdomain Redirect
heroHeading: Netlify Subdomain Redirect
heroSubHeading: Why is documentation so hard to understand?
heroBackground: /blog//employee-6038877_1280.png
author: authors/karl.md
date: 2023-09-27T17:27:18.191Z
draft: false
categories:
  - How-To
tags:
  - subdomain
  - netlify
---

*Image by [Mohamed Hassan](https://pixabay.com/users/mohamed_hassan-5229782/?utm_source=link-attribution\&utm_medium=referral\&utm_campaign=image\&utm_content=6038877) from [Pixabay](https://pixabay.com//?utm_source=link-attribution\&utm_medium=referral\&utm_campaign=image\&utm_content=6038877)*

## The "Why"

I used to pay Zoho for their **Desk** product (I don't remember what level) that included a custom domain. This was also before my \[switch to Netlify]\({{ ref "/blog/new-website" }}) so my [https://support.woostertech.com](https://support.woostertech.com) URL was not going to work. I did have to have Zoho remove my domain entirely since my DNS settings weren't correct and I could no longer access the portal at all!

What I didn't want, however, was to have to give customers and clients the entire non-custom URL [https://desk.zoho.com/support/woostertech](https://desk.zoho.com/support/woostertech "https://desk.zoho.com/support/woostertech").

## The Solution

1. Use "Deploy manually" to create a super-simple new site on Netlify; download a landing page demo that is offered as an example. This site will never be seen.
2. Unzip the downloaded file to your local computer.
3. Add a file named `_redirects` to the root of that unzipped folder.
4. Add the following line to that file:
   `https://support.woostertech.com/* https://desk.zoho.com/support/woostertech 301!`
