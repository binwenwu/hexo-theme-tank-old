---
title: Linux配置NFS共享存储服务器
cover: 'https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/2e5434c78c893c433d88c104b675d119.png'
top_img: 'https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/%E7%A7%8B%E5%A4%A9%E9%A3%8E%E6%99%AF%20%E6%A0%91%20%E7%8B%97%20%E8%90%BD%E5%8F%B6%20%E9%AB%98%E5%B1%B1%20%E5%94%AF%E7%BE%8E%E6%84%8F%E5%A2%83%E9%A3%8E%E6%99%AF4k%E5%A3%81%E7%BA%B8_%E5%BD%BC%E5%B2%B8%E5%9B%BE%E7%BD%91.jpg'
abbrlink: d154fd87
date: 2023-04-03 20:10:50
keywords: Linux, NFS, 共享存储
categories:
  - Linux
tags:
  - Linux
  - 存储
swiper_index: 4 #置顶轮播图顺序，非负整数，数字越大越靠前
---

### 1. 安装 nfs-untils

```bash
yum -y install nfs-utils
```

### 2. 设置共享目录

```bash[categoryBar.pug](..%2F..%2Fnode_modules%2Fhexo-theme-butterfly%2Flayout%2Fincludes%2FcategoryBar.pug)
mkdir -p /data/publicDisk001
# 授权
chmod 777 /data/publicDisk001/

# 修改文件，让10.0.0.0/24 这个网段的机器都能用
vim /etc/exports

/data/publicDisk001   10.0.0.0/24(rw,no_root_squash)
```

### 3. 启动广播和nfs

```bash
systemctl start rpcbind

# 启动nfs
systemctl start nfs
# 若 centerOS8以上，则执行此命令启动 
sudo service nfs-server start
```

### 4. 在同一网段下，另一个主机也安装 nfs 作为客户端

```bash
yum -y install nfs-utils
# 启动nfs
systemctl start nfs
sudo service nfs-server start
```

### 5. 挂载

```bash
# 新建目录
mkdir -p /data/disk01

# 挂载网盘到此路径
mount -t nfs 10.0.0.204:/data/publicDisk001 /data/disk01
```

### 6. 查看挂载情况

```bash
df -h
```
