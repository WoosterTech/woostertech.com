---
title: New Website!
heroHeading: New Website!
heroSubHeading: No more WordPress; Hugo and Netlify FTW!
heroBackground: /blog//time-for-a-change-897441_1280.jpg
author: authors/karl.md
date: 2023-08-03T22:25:53.060Z
draft: false
---

*Image by [Alexa](https://pixabay.com/users/alexas_fotos-686414/?utm_source=link-attribution\&utm_medium=referral\&utm_campaign=image\&utm_content=897441) from [Pixabay](https://pixabay.com//?utm_source=link-attribution\&utm_medium=referral\&utm_campaign=image\&utm_content=897441)*

It's taken more time than I'd like to admit, but I've finally moved enough content to call this the official site. Perhaps that's also because the WordPress site continued to break to the point that it wasn't useful, but here we are.

For those that aren't familiar with Hugo or Netlify, or are just curious, here's the high points per yours truly (Karl).

## What is WordPress

I expect most anyone that finds themselves on my website or blog is at least aware of WordPress, but for those that aren't, it's a very, very, very popular "content management system," often abbreviated as CMS. A phenomenal proportion of websites/blogs/anything use it. There are certainly advantages to that:

* Huge community
* Nearly limitless plugins/add-ons to do anything
* Every other website that might need to interact with your site probably has the tools to talk to it specifically
* Its nature allows for multiple users to easily be able to generate and edit content

However, because of how it works, it is vulnerable to some very specific issues. First, what makes its DNA different than something like Hugo:

* It is "dynamic," which means that content is generated as the user requests it. The HTML that is sent to your browser didn't exist until you requested it.
  * That requires that there is a "program" running that can generate that content on the web server. This adds overhead both in required computing resources and in time for the page to be sent to your browser.
* All content is stored in a database that has to exist as part of the installation

These lead to a couple of things: 1) websites can slow down a lot as they get bigger unless more resources are thrown at them and 2) there are many opportunities for things to break or be attacked.

## What is Hugo

Hugo is different in a very important way: it is a Static Site Generator \[SSG]. There are two important words there; "static" and "generator."

#### Static

The content that is served to your browser is stored as "static" HTML on the server. The only thing that the web server is doing is actually sending the HTML as it exists in its memory. It's pretty clear to see how that would be faster, but it also means that it is next to impossible for it to break. Unless the server itself breaks or HTML standards change a lot the page that you see today is the page you saw last year. It is still possible to show some dynamic-ish content by referencing external resources, but the content itself is static.

#### Generator

The reason this is important is because the HTML is generated at build time. At the risk of sounding like a broken record, this means the content is static and not dynamic. The web server, again, is only serving content, not generating it in real-time.

## OK, so what?

Well, at the end of the day, Wooster Technical Solution's website is more-or-less just a landing page with a little blog content. It does not need to do a whole lot of magic to exist. I could write the HTML myself and skip the generator, except that I would spend way too much of time doing that. It's also much more secure. There's no database to inject code into or anything.

With the old site specifically, even with only a handful of plugins installed, keeping everything updated and preventing pieces from breaking was not worth the effort. I mostly just want the same thing to show up all of the time. Also, an SSG is great for a blog. I can write content using Markdown which is almost as easy as creating a Word document and then have that show up as a post. I've actually now setup [TinaCMS](https://tina.io/) to make it even easier. Basically, it allows me to write or edit content on the web (without having to be in something like Visual Studio Code) and have the site rebuilt automatically. I even get a visual editor if I don't want to do Markdown.

At the end of the day, it's just much more durable and has less overhead. It's also cheaper. Except for the domain itself, Hugo, TinaCMS, and Netlify are totally free. There might someday be a feature that I want that costs money, but so far, totally free.

## Netlify

OK, so, what is Netlify? I discovered it shortly after I first started using Hugo for our family's blog ([https://blog.wooster.xyz](https://blog.wooster.xyz)) after our twins were born. It allows for hosting static sites easily. It has access to the GitHub repository that these sites are hosted at and automatically build/generates the website from it and hosts it. They of course have paid plans, but for what I've needed, it's all free. They even host the images and do transforms on them. Things like resizing the image before it's sent over the internet and caching that resized image for next time.

## In Conclusion

The hope is that this will be much more robust, cost less money, and not sacrifice any actual functionality. There are still a few things to do, like flesh out the landing page, but the WordPress version was so broken that it wasn't useful as a landing page anyway and I'd much rather use my time and energy moving this forward than trying to fix that. AND I save money!
