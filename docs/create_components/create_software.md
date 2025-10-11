---
sidebar_position: 1
title: Create Software
---


### Step 1: Create a namespace

Creating namespaces for `metagenomics`

![](../assest/create_namespace.png)

### Step 2: Create a software
Click `Software` -> `Creating Components`

![](../assest/create_software.png)

+ Component Name: Quality Control
+ Namespace: metagenomics
+ Container: `Install` -> `code-server-nextflow`

![](../assest/install_container.png)

content: Enter the following
```
{
  "script_type": "nextflow",
}
```

![](../assest/create_software_input.png)


## Step 3: Create a File