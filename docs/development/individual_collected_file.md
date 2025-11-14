---
sidebar_position: 2
title: Individual Collected File Type
---

The file types "individual" and "collected" are used interchangeably as parameters.


```js
{rest?.reInputFile ? <FormJsonComp formJson={rest?.reInputFile} dataMap={resultTableList}></FormJsonComp> :
                    <FormJsonComp formJson={inputFile} dataMap={resultTableList}></FormJsonComp>}
```
```json
  "reInputFile": [
    {
      "name": "anno",
      "label": "anno",
      "component_id": "ac6deb0a-8294-4d94-99b6-ec901a781590",
      "rules": [
        {
          "required": true,
          "message": "This field cannot be empty!"
        }
      ],
      "type": "BaseSelect",
      "group": "group_field"
    },   
    {
      "name": "deg",
      "label": "deg",
      "component_id": "8c514ea0-398b-4bd5-ab0d-dd1b2665077f",
      "rules": [
        {
          "required": true,
          "message": "This field cannot be empty!"
        }
      ],
      "type": "BaseSelect",
      "group": "group_field"
    }
  ]
```
```json

{
    "ac6deb0a-8294-4d94-99b6-ec901a781590": [
        {
            "id": 6491,
            "analysis_result_id": "1663e9da-3685-44a4-9373-44cf2874b6a0",
            "sample_id": "5a78ddc5-a267-4737-89b3-77043063a00e",
            "sample_source": "default",
            "file_name": "XXXXXX",
            "analysis_key": null,
            "component_id": "ac6deb0a-8294-4d94-99b6-ec901a781590",
            "software": null,
            "content": {
                "annotations": "/opt/brave_prod/workspace/data/leipu/OCF-1-PACBIO-HIFI/XXXXXXemapper.annotations"
            },
            "analysis_version": null,
            "content_type": "json",
            "analysis_id": null,
            "project": "9a6af4fb-0af6-4752-af79-9adec161e7c2",
            "request_param": null,
            "analysis_type": "import_data",
            "create_date": null,
            "analysis_result_hash": null,
            "sample_name": "XXXXXX",
            "metadata": null,
            "analysis_name": null,
            "component_name": "Emapper eggnog",
            "file_type": "individual",
            "project_name": "leipu",
            "label": "XXXXXX",
            "value": 6491
        }
    ],
    "8c514ea0-398b-4bd5-ab0d-dd1b2665077f": [
        {
            "id": 6496,
            "analysis_result_id": "95f32f41-ae68-42e7-bc67-5b80b54a59ef",
            "sample_id": null,
            "sample_source": null,
            "file_name": "AA_VS_BB",
            "analysis_key": null,
            "component_id": "8c514ea0-398b-4bd5-ab0d-dd1b2665077f",
            "software": null,
            "content": "/opt/brave_prod/workspace/analysis/9a6af4fb-0af6-4752-af79-9adec161e7c2/38483c82-7c5a-4b55-aa7a-782e9739beb7/9c378235-2c9f-4996-b358-5754c55f6566/output/AA_VS_BB_deg.tsv",
            "analysis_version": null,
            "content_type": "json",
            "analysis_id": "9c378235-2c9f-4996-b358-5754c55f6566",
            "project": "9a6af4fb-0af6-4752-af79-9adec161e7c2",
            "request_param": null,
            "analysis_type": "upstream_analysis",
            "create_date": null,
            "analysis_result_hash": "1e67879cb94770345e2ca7b311a73cca",
            "sample_name": null,
            "metadata": null,
            "analysis_name": "CF VS SP",
            "component_name": "DEG",
            "file_type": "collected",
            "project_name": "leipu",
            "columns": [
                {
                    "id": 6496,
                    "analysis_result_id": "95f32f41-ae68-42e7-bc67-5b80b54a59ef",
                    "columns_name": "feature"
                },
                {
                    "id": 6496,
                    "analysis_result_id": "95f32f41-ae68-42e7-bc67-5b80b54a59ef",
                    "columns_name": "name"
                },
                {
                    "id": 6496,
                    "analysis_result_id": "95f32f41-ae68-42e7-bc67-5b80b54a59ef",
                    "columns_name": "baseMean"
                },
                {
                    "id": 6496,
                    "analysis_result_id": "95f32f41-ae68-42e7-bc67-5b80b54a59ef",
                    "columns_name": "log2FoldChange"
                },
                {
                    "id": 6496,
                    "analysis_result_id": "95f32f41-ae68-42e7-bc67-5b80b54a59ef",
                    "columns_name": "lfcSE"
                },
                {
                    "id": 6496,
                    "analysis_result_id": "95f32f41-ae68-42e7-bc67-5b80b54a59ef",
                    "columns_name": "stat"
                },
               
            ],
            "url": "/brave-api/data-dir/opt/brave_prod/workspace/analysis/9a6af4fb-0af6-4752-af79-9adec161e7c2/38483c82-7c5a-4b55-aa7a-782e9739beb7/9c378235-2c9f-4996-b358-5754c55f6566/output/AA_VS_BB_deg.tsv",
            "label": "AA_VS_BB",
            "value": 6496
        }
    ]
}
```


