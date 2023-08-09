---
title: Docker安装配置
cover: 'https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/_2fd6e0d9-e68c-499e-b062-5d9d9d46b34f.jfif'
top_img: 'https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/%E7%A7%8B%E5%A4%A9%E9%A3%8E%E6%99%AF%20%E6%A0%91%20%E7%8B%97%20%E8%90%BD%E5%8F%B6%20%E9%AB%98%E5%B1%B1%20%E5%94%AF%E7%BE%8E%E6%84%8F%E5%A2%83%E9%A3%8E%E6%99%AF4k%E5%A3%81%E7%BA%B8_%E5%BD%BC%E5%B2%B8%E5%9B%BE%E7%BD%91.jpg'
abbrlink: b035bcd6
date: 2023-05-11 09:20:52
keywords: docker,安装,配置
categories:
  - 云原生
  - Docker
tags:
  - 容器
  - Docker
---

## 1  安装docker 20.10.7

**注意 Docker 版本，要和 Kubernetes 版本 有对应关系**

```shell
# 安装/更新 yum-utils
yum install -y yum-utils

# 配置 yum源
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

# 安装 docker 20.10.7 版本
yum -y install docker-ce-20.10.7 docker-ce-cli-20.10.7 containerd.io

# 查看 docker 版本
docker -v

# 启动 docker
systemctl start docker

# 查看 docker 是否成功, 有 Client 和 Server 即成功
docker version
```

## 2  配置加速镜像

```shell
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://82m9ar63.mirror.aliyuncs.com"],
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2"
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker

# 查看是否配置成功
docker info
```

