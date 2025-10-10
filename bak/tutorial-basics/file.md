---
sidebar_position: 4
title: 文件
---

## 输入文件
```json title='file'
{
  "name": "fastp_clean_reads",
  "label": "clean reads",
//   "inputKey": [
//     "fastp_clean_reads"
//   ],
  "mode": "multiple",
  "type": "GroupSelectSampleButton",
  "groupField": "sample_group",
  "rules": [
    {
      "required": true,
      "message": "该字段不能为空!"
    }
  ]
}
```

## 输出文件
```json title='file'
{
  "name": "bowtie2_align_host",
  "label": "bowtie2_align_host",
  // "inputKey": [
  //   "bowtie2_align_host"
  // ],
  "mode": "multiple"
}
```
```json title='file'
{
  "name": "samtools_remove_hosts",
  "label": "samtools_remove_hosts",
  // "inputKey": [
  //   "samtools_remove_hosts"
  // ],
  "mode": "multiple"
}
```