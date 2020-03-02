---
id: intro
title: GraphQL Schema
sidebar_label: Introduction
---

The crux of GraphQLize is generating the GraphQL types and queries by making use of [JDBC metadata](https://docs.oracle.com/javase/7/docs/api/java/sql/DatabaseMetaData.html). This page documents the conventions and assumptions behind this automatic generation.

## GraphQL type name

For every tables and views in the database, GraphQLize generates a GraphQL type. The name of the GraphQL type is the singularized, pascal-case version of the corresponding table or view name.

| Table/View Name | GraphQL Type Name |
| --------------- | ----------------- |
| actor           | Actor             |
| film_actor      | FilmActor         |
| comments        | Comment           |

GraphQlize supports Postgres [schema](https://www.postgresql.org/docs/current/ddl-schemas.html). If the schema in question is not default schema (`public`), then it will be used as a prefix in the GraphQL type name.

| Schema Name     | Table/View Name | GraphQL Type Name      |
| --------------- | --------------- | ---------------------- |
| person          | state_province  | PersonStateProvince    |
| human_resources | employee        | HumanResourcesEmployee |
