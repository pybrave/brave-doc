---
sidebar_position: 1
title: 下载数据集
---

为了使用实际的例子测试brave的功能，这里我们使用文章[Metagenomics of Parkinson’s disease implicates the gut microbiome in multiple disease mechanisms](https://www.nature.com/articles/s41467-022-34667-x)中提供的数据集[PRJNA834801](https://www.ncbi.nlm.nih.gov/bioproject/834801)作为实验。

从[PRJNA834801](https://www.ncbi.nlm.nih.gov/Traces/study/?acc=SRP373424&o=acc_s%3Aa)下载数据集的metadata。

该数据集一共有725个样本，为了方便测试，这里我们从Control组和PD组分别选择5个样本。

```R
library(tidyverse)
df  <- read_csv("SraRunTable.csv")
control <- df |> filter(grepl("Control",Case_status)) |> head(n = 3) |>  select("Run",group="Case_status")
pd <- df |> filter(grepl("PD",Case_status)) |> head(n = 3) |>  select("Run",group="Case_status")
rbind(control,pd)
```
```
Run	group
SRR19064322	Control
SRR19064355	Control
SRR19064365	Control
SRR19064317	PD
SRR19064318	PD
SRR19064319	PD
```

下载[SRA-Toolkit](https://github.com/ncbi/sra-tools/wiki/01.-Downloading-SRA-Toolkit)

```
fasterq-dump --split-files -v -p -x -e 10  SRR19064322
fasterq-dump --split-files -v -p -x -e 10  SRR19064355
fasterq-dump --split-files -v -p -x -e 10  SRR19064365
fasterq-dump --split-files -v -p -x -e 10  SRR19064317
fasterq-dump --split-files -v -p -x -e 10  SRR19064318
fasterq-dump --split-files -v -p -x -e 10  SRR19064319
```
```
cat SRR19064322_1.fastq | pigz -p 8 > SRR19064322_1.fastq.gz
pigz  -p 10  *.fastq 
```
