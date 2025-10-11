---
sidebar_position: 1
title: Traefik
---

Brave uses [Traefik](https://doc.traefik.io/traefik/reference/install-configuration/providers/docker/) to enable access to docker containers such as code-server, R, jupyter, etc.

Start Traefik with the following command:
```
docker run  \
  -p 8089:80 \
  -p 8087:8080 \
   --network traefik_proxy \
  -v /var/run/docker.sock:/var/run/docker.sock \
  registry.cn-hangzhou.aliyuncs.com/wybioinfo/traefik:v3.5  \
  --api.insecure=true \
  --providers.docker=true \
  --log.level=DEBUG \
  --entrypoints.web.address=:80 
```

Visit [http://localhost:8087](http://localhost:8087) to see the UI interface provided by Traefik



### Run code-server
[linuxserver/code-server](https://hub.docker.com/r/linuxserver/code-server)

```
docker pull linuxserver/code-server:4.104.3 
```
```
docker run --rm \
    -p 8443:8443 \
    -e PUID=$(id -u) \
    -e PGID=$(id -g) \
    linuxserver/code-server:4.104.3 
```
At this time, when you visit [http://localhost:8443](http://localhost:8443), you can see that the code-server is running normally. Next, let traefik proxy the service of port 8443 of code-server.

```
docker run --rm   \
  --name code-server \
  --network traefik_proxy \
  --label "traefik.enable=true" \
  --label 'traefik.http.routers.codeserver.rule=PathPrefix(`/codeserver`)' \
  --label "traefik.http.routers.codeserver.entrypoints=web" \
  --label "traefik.http.middlewares.codeserver-strip.stripPrefix.prefixes=/codeserver" \
  --label "traefik.http.services.codeserver.loadbalancer.server.port=8443" \
  --label "traefik.http.routers.codeserver.middlewares=codeserver-strip" \
  linuxserver/code-server:4.104.3
```

Run the above command, then visit [http://localhsot:8089/codeserver](http://localhsot:8089/codeserver) to see the code-server successfully opened. In this way, all container applications can be accessed through port 8089.


```
docker run --rm  -it \
    -p 8443:8443 \
    -e PUID=$(id -u) \
    -e PGID=$(id -g) \
    --entrypoint bash \
    linuxserver/code-server:4.104.3  
  
```
DOCKER_GID=$(getent group docker | cut -d: -f3)

```
docker run --rm  -it \
  --name code-server \
    -p 8443:8443 \
    -e PUID=$(id -u) \
    -e PGID=$DOCKER_GID  \
    -v /usr/bin/docker:/usr/bin/docker \
    -v /var/run/docker.sock:/var/run/docker.sock \
    linuxserver/code-server:4.104.3  
  
```
    --entrypoint bash \
