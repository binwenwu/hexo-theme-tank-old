---
title: Docker安装配置
date: 2023-03-11 16:00:00
---

## 1.  安装Docker

## 1.1  安装docker 20.10.7

==注意 Docker 版本，要和 Kubernetes 版本 有对应关系==

#### 三台机器上执行

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

## 1.1  **配置加速镜像**

#### 三台机器上执行

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

