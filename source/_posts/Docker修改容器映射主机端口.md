---
title: Docker修改容器映射主机端口
cover: 'https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/u%3D2188758126%2C1866052197%26fm%3D253%26fmt%3Dauto%26app%3D138%26f%3DJPEG'
top_img: 'https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/%E7%A7%8B%E5%A4%A9%E9%A3%8E%E6%99%AF%20%E6%A0%91%20%E7%8B%97%20%E8%90%BD%E5%8F%B6%20%E9%AB%98%E5%B1%B1%20%E5%94%AF%E7%BE%8E%E6%84%8F%E5%A2%83%E9%A3%8E%E6%99%AF4k%E5%A3%81%E7%BA%B8_%E5%BD%BC%E5%B2%B8%E5%9B%BE%E7%BD%91.jpg'
abbrlink: 9c5d9ac5
date: 2023-05-12 15:26:51
keywords: docker,端口
categories:
  - 云原生
  - Docker
tags:
  - 容器
  - Docker
---

### 1 对于已经存在的容器，更改端口

- 停止容器

- 将容器打包成镜像

```bash
docker commit 4f4561192346 wbw-geoserver:0.1（自定义镜像名:自定版本号）
```

- 通过新镜像开启新容器

```BASH
docker run -d --name wbw-geoserver -p 31520:8080 wbw-geoserver:0.1


#-d  ——>后台启动
#-p  ——>主机端口：容器端口
```
