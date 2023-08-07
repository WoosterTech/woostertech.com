---
title: DigitalOcean Setup
heroHeading: DigitalOcean Setup
heroSubHeading: Get a Ubuntu 22.04 server setup for git and docker compose
author: authors/karl.md
date: 2023-08-07T19:12:48.046Z
draft: false
categories:
  - How-To
tags:
  - digitalocean
  - ubuntu
  - docker-compose
  - docker
  - git
heroBackground: /blog//abstract-2891890_1280.jpg
---

Image by [3D Animation Production Company](https://pixabay.com/users/quincecreative-1031690/?utm_source=link-attribution\&utm_medium=referral\&utm_campaign=image\&utm_content=2891890) from [Pixabay](https://pixabay.com//?utm_source=link-attribution\&utm_medium=referral\&utm_campaign=image\&utm_content=2891890)

## Basic Steps

### Create Non-Root User and Adjust Permissions

See [Initial Server Setup with Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-22-04)

#### Setup User

```shell
adduser karl
usermod -aG sudo karl
ufw app list
ufw allow OpenSSH
ufw enable
ufw status
```

Test access

#### SSH Settings

```shell
rsync --archive --chown=karl:karl ~/.ssh /home/karl
```

### Setup Docker and Docker Compose

See [Install the Compose plugin](https://docs.docker.com/compose/install/linux/)

#### Setup Repository

See [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/#set-up-the-repository)

```shell
sudo apt install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
```

#### Install Docker Engine

```shell
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo docker run hello-world
```

### Install Plugin

Should already be installed with [Docker Engine](#install-docker-engine) above.

```shell
docker compose version
```
