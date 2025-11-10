---
title: Introducing Components
sidebar_position: 1
---



<img
  src={require('./img/components.png').default}
  alt="CollectedGroupSelectSampleButton"
  width="600"
/>

## The difference between the tools component and the modules component

The `tools` component is a sub-component of the `File` component, therefore it can only accept one input file. For correlation analyses between metabolites and bacterial communities, where both metabolite abundance and bacterial community abundance are required, the `tools` component cannot meet this need. The `modules` component, on the other hand, can accept multiple files as input.






| Feature                        | Modules/Software                                                                                           | Tools/Script                                             |
| ------------------------------ | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| **Input Files**                | Multiple types and multiple files                                                                    | Single type, multiple files                             |
| **Output Files**               | May have multiple output files (analysis results)                                                    | Usually no output files                                 |
| **Examples**                   | Metabolite ↔ Microbiome abundance correlation analysis; upstream Nextflow analysis (e.g., alignment) | Differential expression analysis (based on count files) |
| **Functional Characteristics** | Cross-type integrative analysis / Upstream–downstream linkage                                        | Single-type in-depth analysis                           |
| **Data Structure**             | Has both input and output children                                                                   | Has only input children                                 |
| **Hierarchy**                  | Top-level or standalone analysis node                                                                | Downstream node of a file                               |




The Modules component uses the generated form JSON defined in the file component by default. If you need to customize it, you can add the following form JSON to the Modules component to override the form JSON of the file component.
```json
{
    "reInputFile":[
      {
      "name": "count",
      "label": "count",
      "db": true,
      "component_id": "96a34143-2cde-4c34-813f-e0c88454cd78",
      "columns": [
        "group1",
        "group2"
      ],
      "rules": [
        {
          "required": true,
          "message": "This field cannot be empty!"
        }
      ],
      "col":24,
      "type": "CollectedGroupSelectSampleButton",
      "group": "group_field"
    }
  ]
}
```