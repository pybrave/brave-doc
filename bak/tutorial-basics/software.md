---
sidebar_position: 3
title: 软件
---


```json title='software'
{
  "name": "去宿主",
//   "analysisPipline": "bowtie2_remove_host",
  // "parseAnalysisModule": "bowtie2_remove_host",
  "parseAnalysisResultModule": [
    {
      "module": "bowtie2_align_unsorted",
      "dir": "bowtie2_align_host",
      "analysisMethod": "bowtie2_align_host"
    },
    {
      "module": "samtools_remove_hosts",
      "dir": "samtools_remove_hosts",
      "analysisMethod": "samtools_remove_hosts"
    }
  ],
  "upstreamFormJson": [
    {
      "name": "genome_index",
      "dataKey": "host_genome_index",
      "label": "宿主基因组",
      "rules": [
        {
          "required": true,
          "message": "该字段不能为空!"
        }
      ],
      "type": "BaseSelect"
    }
  ]
}
```
```
.
└── software
    └── cc1c6f83-6c5a-4de9-89a4-d12fc58dcda9
        ├── bowtie2_align_unsorted.py
        ├── main.nf
        ├── main.py
        └── samtools_remove_hosts.py
```
## 软件脚本
+ component_id = `cc1c6f83-6c5a-4de9-89a4-d12fc58dcda9` (software component id)
+ module:software.`{component_id}`.main
+ path:`{pipeline_dir}`/software/`{component_id}`/main.nf

```nextflow
process bowtie2 {
    tag "$meta.id"
    publishDir "output/bowtie2/${meta.id}", mode: 'symlink', overwrite: true

    input:
    tuple val(meta),path(reads)
    val(reference)

    output:
    tuple val(meta), path("*.{bam,sam}"), emit: aligned, optional:true
    tuple val(meta), path("*.log")      , emit: log
    tuple val(meta), path("*fastq.*.gz")  , emit: fastq, optional:true


    script:
    """
    export PATH=/home/jovyan/.conda/envs/bowtie2/bin:\$PATH
    bowtie2 \
        -x ${reference} \
        -1 ${reads[0]} -2 ${reads[1]} \
        --threads ${task.cpus} \
        --un-conc  ${meta.id}.unmapped.fastq.gz \
        2> >(tee ${meta.id}.bowtie2.log >&2) \
        | samtools view --threads $task.cpus -bS -o ${meta.id}.bam
    """

    stub:
    """
    
    """
}
process samtools_remove_hosts {
    publishDir "output/samtools_remove_hosts", mode: 'symlink', overwrite: true

    input:
    tuple val(meta),path(bam)

    output:
    tuple val(meta),path("*.fastq.gz") ,emit:fastq

    script:
    """
    export PATH=/home/jovyan/.conda/envs/bowtie2/bin:\$PATH

    samtools view  \
        -@ task.cpus \
        -b -f 12 -F 256 \
        ${bam} > ${meta.id}_bothReadsUnmapped.bam 
    
    samtools sort -n  -@ ${task.cpus} \
        ${meta.id}_bothReadsUnmapped.bam \
         -o ${meta.id}_bothReadsUnmapped_sorted.bam

    samtools fastq -@ ${task.cpus} ${meta.id}_bothReadsUnmapped_sorted.bam \
        -1 ${meta.id}_host_removed_R1.fastq.gz \
        -2 ${meta.id}_host_removed_R2.fastq.gz \
        -0 /dev/null -s /dev/null -n

    """

    stub:
    """
    
    """
}
workflow  {
    ch_input = channel.fromList(params.samples).map(it->[[id:it.sample_key],[it.fastq1,it.fastq2]])
    ch_bowtie2_host_index = Channel.value(params.genome_index)
    ch_bowtie2_res = bowtie2(ch_input, ch_bowtie2_host_index)    
    ch_samtools_remove_hosts_res = samtools_remove_hosts(ch_bowtie2_res.aligned)
}
```

## 输入解析模块
```json
{
    "parseAnalysisModule": "bowtie2_remove_host"
}
```
+ component_id = `32493b81-e61d-4f80-9088-7f939402ca82` (software component id)
+ module:software.`{component_id}`.main
+ path:`{pipeline_dir}`/software/`{component_id}`/main.py

```python title='bowtie2_remove_host.py'
import json
import pandas as pd 
def get_data(item):
    content = item.content 
    return {
        "sample_key":item.sample_key,
        "fastq1":content['fastq1'],
        "fastq2":content['fastq2'],
    }

def get_db_field():
    return ['clean_reads']

def parse_data(request_param,db_dict):
    reads = db_dict['clean_reads']
    samples = [get_data(item) for item in reads]
    result = {
        "samples":samples,
        "genome_index":request_param['genome_index']
    }
    return result
```
## 输出解析模块
```json
{
    "parseAnalysisResultModule": [
    {
      "module": "bowtie2_align_unsorted",
      "dir": "bowtie2_align_host",
      "analysisMethod": "bowtie2_align_host"
    },
    {
      "module": "samtools_remove_hosts",
      "dir": "samtools_remove_hosts",
      "analysisMethod": "samtools_remove_hosts"
    }
  ]
}
```
+ component_id = `32493b81-e61d-4f80-9088-7f939402ca82` (software component id)
+ module:software.`{component_id}`.`{parseAnalysisResultModule[0].analysisMethod}`
+ path:`{pipeline_dir}`/software/`{component_id}`/`{parseAnalysisResultModule[0].analysisMethod}`.py

```python title='bowtie2_align_unsorted.py'
import glob
import os
import json 

def get_content(file):
    return json.dumps({
        "bam":file,
        "log":file.replace(".bam","")+".bowtie2.log"
    })

def parse(dir_path,analysis):
    file_list = glob.glob(f"{dir_path}/*.bam")
    result_data = [(os.path.basename(file).replace(".bam",""),"bowtie2","json",get_content(file)) for file in file_list]
    return result_data
```

```python title='samtools_remove_hosts.py'
import glob
import os
import json

def get_json(file):
    return json.dumps({
        "fastq1":file,
        "fastq2":file.replace("_host_removed_R1.fastq.gz","_host_removed_R2.fastq.gz")
    })

def parse(dir_path,analysis):
    file_list = glob.glob(f"{dir_path}/*_host_removed_R1.fastq.gz")
    result_data = [(os.path.basename(file).replace("_host_removed_R1.fastq.gz",""),"samtools","json",get_json(file)) for file in file_list]
    return result_data
```




