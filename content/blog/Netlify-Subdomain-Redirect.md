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

\*\*\*The theme I'm using in Hugo hides list numbers and bullets. Not sure why anyone would ever want that, but that's why the text after \[The Solution]\(#the-solution) is indented. If you were to inspect the code, you'd see that it's actually an ordered list, the numbers are just not visible. So, until I fix the theme...\*\*\*

## The "Why"

I used to pay Zoho for their **Desk** product (I don't remember what level) that included a custom domain. This was also before my \[switch to Netlify]\({{ ref "/blog/new-website" }}) so my [https://support.woostertech.com](https://support.woostertech.com) URL was not going to work. I did have to have Zoho remove my domain entirely since my DNS settings weren't correct and I could no longer access the portal at all!

What I didn't want, however, was to have to give customers and clients the entire non-custom URL [https://desk.zoho.com/support/woostertech](https://desk.zoho.com/support/woostertech "https://desk.zoho.com/support/woostertech").

## The Solution

1. Use "Deploy manually" to create a super-simple new site on Netlify; download a landing page demo that is offered as an example. This site will never be seen.
2. Unzip the downloaded file to your local computer.
3. Add a file named `_redirects` to the root of that unzipped folder.
4. Add the following line to that file:
   `https://support.woostertech.com/* https://desk.zoho.com/support/woostertech 301!`
5. Drag-and-drop the entire folder, with the new file, into the Netlify "Deploy manually" page. This will create the page which *could* be accessed at their special subdomain, but that's unlikely, and could probably be blocked with some other trickery that I'm not interested in today.
6. Add the custom domain under "Domain management." Netlify will recognize that the domain is already managed by them, so it will be more than happy to manage the subdomain.

That should be all of it. It might take a minute for all of the DNS stuff to update properly and the certificate may need to be renewed to handle the new subdomain, but it should start working. Anytime someone tries to go \[https://support.woostertech.com], they'll automatically be redirected.

That should be everything. Unless I think of something else...
