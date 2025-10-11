---
sidebar_position: 6
title: FAQ
---

### Database Character Set Selection

Make sure the database character set is `utf8mb4_0900_ai_ci`
```
-- Viewing the default character set of a database
SELECT @@character_set_database, @@collation_database;

-- View all database characters
SHOW DATABASES;
SELECT SCHEMA_NAME, DEFAULT_CHARACTER_SET_NAME, DEFAULT_COLLATION_NAME
FROM information_schema.SCHEMATA;

-- View Tables collation
SHOW TABLE STATUS FROM brave LIKE 'pipeline_components';
SHOW TABLE STATUS FROM brave LIKE 'pipeline_components_relation';

-- View field collation
use brave;
SHOW FULL COLUMNS FROM pipeline_components;
SHOW FULL COLUMNS FROM pipeline_components_relation;
```