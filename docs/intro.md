---
sidebar_position: 1
title: Install
---

## Quick installation
```
curl -s https://raw.githubusercontent.com/pybrave/brave/refs/heads/master/install.sh  | bash
```
+ [http://localhost:5000](http://localhost:5000)


Use Alibaba Cloud mirror
```
curl -s https://raw.githubusercontent.com/pybrave/brave/refs/heads/master/install.sh  | bash -s -- --aliyun
```

The default installation location is `$HOME/brave-install`, but you can specify the installation location using the `--base-dir` parameter.
```
curl -s https://raw.githubusercontent.com/pybrave/brave/refs/heads/master/install.sh  | bash -s --  --aliyun --base-dir /opt/brave
```



