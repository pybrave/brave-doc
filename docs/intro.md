---
sidebar_position: 1
title: Install
---
### Step 1: Create the database folder
```
mkdir -p /opt/brave/databases
```

### Step 2: Start the database container
```
docker run  --rm -p 63306:3306 \
    --name brave-mysql \
    -e MYSQL_ROOT_PASSWORD=123456  \
    -e LANG=C.UTF-8 \
    --shm-size=10G \
    // highlight-start
    -v /opt/brave/databases:/var/lib/mysql \
    -e MYSQL_DATABASE=brave \
    // highlight-end
    registry.cn-hangzhou.aliyuncs.com/wybioinfo/mysql:8.0.21 
    --default-authentication-plugin=mysql_native_password \
    --character-set-server=utf8mb4 \
    --lower-case-table-names=1 \
    --collation-server=utf8mb4_unicode_ci 
```
The above command will automatically create a database named brave. Add the `-d` parameter if you need to run in the background.

Quickly verify that the database was created successfully.
```
docker  exec -it brave-mysql mysql -u root -p 
show databases;
```

### Step 3: Install and run brave
```
pip install pybrave
```
```
brave  \
    --mysql-url root:123456@localhost:63306/brave \
    --port 5008
```
The default working directory used by brave is as follows.
```
Using BASE_DIR: $HOME/.brave
Using DATABASES_DIR: $HOME/.brave/databases
Using WORK_DIR: $HOME/.brave/work
Using PIPELINE_DIR: $HOME/.brave/pipeline
Using DATA_DIR: $HOME/.brave
Using LITERATURE_DIR: $HOME/.brave/literature
Using DB_URL: mysql+pymysql://root:123456@localhost:63306/brave
```
Modify the default working directory with the `--base-dir` parameter.
```
brave  \
    --mysql-url root:123456@localhost:63306/brave \
    --port 5008 \
    --base-dir /opt/brave/workspace
```

The work directory is modified to `/opt/brave/workspace`.
```
Using BASE_DIR: /opt/brave/workspace
Using DATABASES_DIR: /opt/brave/workspace/databases
Using WORK_DIR: /opt/brave/workspace/work
Using PIPELINE_DIR: /opt/brave/workspace/pipeline
Using DATA_DIR: /opt/brave/workspace
Using LITERATURE_DIR: /opt/brave/workspace/literature
Using DB_URL: mysql+pymysql://root:123456@localhost:63306/brave
```

See that all tables in the database have been successfully created.

```
docker  exec -it brave-mysql mysql -u root -p 
show databases;
use brave;
show tables;
```

The Brave app can be accessed at the address below:

+ http://localhost:5008

### Step 4: Connecting to local services using the online UI (Recommend)
Since Brave is under active development, the UI in the pip package will inevitably be updated in a timely manner, so we recommend using the UI provided by the git page to connect to local services to access it.

+ https://pybrave.github.io/brave-ui/


By default, git pages only uses the HTTPS protocol. Modern browsers do not support https for website access to the http protocol, so you need to run locally brave need to start the https service. For ease of use, we provide a protocol generated using openssl in the pip package. To enable https, just add the parameter `--use-https`.

```
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes
```
```
brave  \
    --mysql-url root:123456@localhost:63306/brave \
    --port 5008 \
    --base-dir /opt/brave/workspace \
    --use-https
```







