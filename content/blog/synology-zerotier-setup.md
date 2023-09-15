---
title: "Synology Zerotier Setup"
date: 2021-12-09T00:11:35+00:00
draft: false
heroHeading: "Synology Zerotier Setup"
heroSubHeading: "The best way that I've found."
heroBackground: "blog/150px-ZeroTier_Logo.png"
categories:
  - How-To
tags:
  - synology
  - vpn
  - zerotier
---

## Create a persistent TUN

SSH into your NAS

```shell
ssh user@local-ip
```

The following setup steps must be run as root

```shell
sudo -i
```

Write script to `/usr/local/etc/rc.d/tun.sh` that will setup `/dev/net/tun` on startup

```shell
echo -e '#!/bin/sh -e \ninsmod /lib/modules/tun.ko' &gt; /usr/local/etc/rc.d/tun.sh
```

Set executable permissions on script

```shell
chmod a+x /usr/local/etc/rc.d/tun.sh
```

Run script once to create a TUN

```shell
/usr/local/etc/rc.d/tun.sh
```

Check for the TUN

```shell
ls /dev/net/tun
/dev/net/tun
```

_If you experience trouble getting the TUN to work check out [Rui Marinho's guide](https://memoryleak.dev/post/fix-tun-tap-not-available-on-a-synology-nas/)_

## Install [docker](https://www.synology.com/en-us/dsm/packages/Docker) on your NAS

Package Center -> Search 'Docker' -> Install

## Set up container

Make directory to store ZeroTier's identity and config

```shell
mkdir /var/lib/zerotier-one
```

**In the next step we bind mount to the host's _/var/lib/zerotier-one_ created above in order to store ZeroTier's identity. This is not guaranteed to survive DSM updates. I would suggest placing this on an automatically-mounted volume where your other private user data resides. The location you choose to store your identities should be kept secure and never placed on a shared volume that others can access.**

Make Docker container called `zt` (Repo: [zerotier/zerotier-synology](https://github.com/zerotier/zerotier-synology))

```shell
docker run -d          \
 --name zt             \
 --restart=always      \
 --device=/dev/net/tun \
 --net=host            \
 --cap-add=NET_ADMIN   \
 --cap-add=SYS_ADMIN   \
 -v /var/lib/zerotier-one:/var/lib/zerotier-one zerotier/zerotier-synology:latest</pre>
```

## Usage

Previous versions of our package contained a GUI, however this is _no longer the case_ and it is for the better. The CLI can be used as follows:

View node status

```shell
docker exec -it zt zerotier-cli status
```

Join your network

```shell
docker exec -it zt zerotier-cli join <network id>

```

Authorize the NAS on your [network](https://my.zerotier.com/). Then view the network status:

```shell
docker exec -it zt zerotier-cli listnetworks
```

Show running container (optional)

```shell
docker ps
```

Enter the container (optional)

```shell
docker exec -it zt bash
```

## Upgrading ZeroTier

To upgrade ZeroTier you'll need to stop and remove the container, then pull latest and start a new container:

```shell
docker ps
```

Example output:

```shell
CONTAINER ID   IMAGE                               COMMAND          CREATED          STATUS   PORTS NAMES
52c7cb58a1dd   zerotier/zerotier-synology:latest   "zerotier-one"   5 weeks ago Up   9 days   zt
```

Stop the container

```shell
docker stop 52c7cb58a1dd
```

Remove the container

```shell
docker container rm 52c7cb58a1dd
```

Pull latest updates

```shell
docker pull zerotier/zerotier-synology:latest
```

Now, re-run the commands from the [Set up container](#set-up-container) section.

---

_Stolen word-for-word, command-for-command from [Synology NAS](https://docs.zerotier.com/devices/synology/)_
