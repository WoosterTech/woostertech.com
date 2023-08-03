---
title: "VPN Issues"
date: 2021-11-30T20:54:15+00:00
author: karl
draft: false
heroHeading: "VPN Issues"
heroSubHeading: "Registry edits to get VPNs working with a domain."
heroBackground: "blog/working-6636355_1920.jpg"
---

For whatever reason, trying to connect to a VPN from a domain account that was connected using the VPN has issues:

> The requested operation cannot be completed. The computer must be trusted for delegation and the current user account must be configured to allow delegation.

Go to this registry key:

```
HKEY_LOCAL_MACHINE\Software\Microsoft\Cryptography\Protect\Providers\df9d8cd0-1501-11d1-8c7a-00c04fc297eb
```

Add a DWORD called `ProtectionPolicy` and give it a value of _1_.

Copied from https://www.myrtec.com.au/windows-10-vpn-error-computer-not-trusted/