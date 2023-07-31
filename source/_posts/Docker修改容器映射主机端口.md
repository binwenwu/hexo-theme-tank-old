---
title: Docker修改容器映射主机端口
date: 2023-03-10 16:00:00
---

### 对于已经存在的容器，更改端口

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
