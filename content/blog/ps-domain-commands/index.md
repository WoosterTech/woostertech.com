---
title: "PS Domain Commands"
date: 2021-11-30T09:58:21-07:00
draft: false
heroHeading: "PS Domain Commands"
heroSubHeading: "Useful Powershell Commands"
heroBackground: "blog/coding-1841550_1280.jpg"
---

*Image by [Pexels][1] from [Pixabay][2]*

Join a domain

Must be an elevated Powershell prompt.

```powershell
add-computer -domainname <name> -Credential <username> -restart -force
```

[1]:
    <https://pixabay.com/users/pexels-2286921/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1841550>
[2]: <https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1841550>