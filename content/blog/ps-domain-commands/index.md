---
title: PS Domain Commands
date: 2021-11-30T16:58:21.000Z
draft: false
heroHeading: PS Domain Commands
heroSubHeading: Useful Powershell Commands
heroBackground: blog/coding-1841550_1280.jpg
author: authors/karl.md
---

*Image by [Pexels](https://pixabay.com/users/pexels-2286921/?utm\_source=link-attribution\&utm\_medium=referral\&utm\_campaign=image\&utm\_content=1841550) from [Pixabay](https://pixabay.com//?utm\_source=link-attribution\&utm\_medium=referral\&utm\_campaign=image\&utm\_content=1841550)*

Join a domain

Must be an elevated Powershell prompt.

```powershell
add-computer -domainname <name> -Credential <username> -restart -force
```
