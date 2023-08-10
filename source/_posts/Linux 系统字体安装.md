---
title: Linux 系统字体安装
cover: 'https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/20201027105140931.png'
top_img: https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/%E7%A7%8B%E5%A4%A9%E9%A3%8E%E6%99%AF%20%E6%A0%91%20%E7%8B%97%20%E8%90%BD%E5%8F%B6%20%E9%AB%98%E5%B1%B1%20%E5%94%AF%E7%BE%8E%E6%84%8F%E5%A2%83%E9%A3%8E%E6%99%AF4k%E5%A3%81%E7%BA%B8_%E5%BD%BC%E5%B2%B8%E5%9B%BE%E7%BD%91.jpg
keywords: 'Linux,安装,字体'
categories:
  - Linux
tags:
  - Linux
  - 安装
swiper_index: 3
abbrlink: 2de821dc
date: 2023-08-09 19:48:15
---

{% note info simple %}在安装之前可以先使用命令 `fc-list :lang=zh` 查看已经安装的中文字体，最后安装后还使用该命令查看新安装的字体{% endnote %}


## 1、创建目录

- 在Linux中创建目录 `/usr/share/fonts/myfonts`

## 2、拷贝字体

- 将Windows下的字体拷贝到`myfonts`目录中。
 Windows 中的字体在目录 `C:\Windows\Fonts` 中，选择你需要的字体拷贝。

![img.png](https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/20230809195344.png)

## 3、目录权限设置

- 为myfonts目录设置权限

```bash
chmod 755 myfonts
```

## 4、安装字体索引指令

- 在centos上，使用如下命令进行安装

```bash
yum install -y fontconfig mkfontscale
```

- 在ubuntu上，使用如下命令进行安装

```bash
sudo apt-get -y install fontconfig xfonts-utils
```

## 5、建立字体索引信息更新字体缓存

- 进入`myfonts`目录安装字体，建立索引更新缓存

```bash
cd /usr/share/fonts/myfonts
mkfontscale && mkfontdir && fc-cache -fv
```

## 6、验证结果

- 验证字体是否安装成功

```clike
fc-list :lang=zh
```
