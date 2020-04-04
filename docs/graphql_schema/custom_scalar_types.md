---
id: custom-scalar-types
title: Custom Scalar Types
sidebar_label: Custom Scalar Types
---

In addition to the GraphQL standard data types, GraphQLize supports the following scalar types for creating type-safe GraphQL schemas.

## UUID

A field whose value is [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).

| Database Type | Column Type                                                          |
| ------------- | -------------------------------------------------------------------- |
| Postgres      | `UUID`   |
| MySQL         | [Yet to support](https://github.com/graphqlize/graphqlize/issues/11) |

## DateTime 

A date-time without a time-zone in the ISO-8601 calendar system, such as `2007-12-03T10:15:30`. 

| Database Type | Column Type(s)                                                          |
| ------------- | -------------------------------------------------------------------- |
| Postgres      | `timestamp`, `timestamp without time zone`   |
| MySQL         | `DATETIME`, `TIMESTAMP` |

## DateTimeWithTimeZone

A date-time with an offset from UTC/Greenwich in the ISO-8601 calendar system, such as `2007-12-03T10:15:30+01:00`.

| Database Type | Column Type(s)                                                  |
| ------------- | -------------------------------------------------------------------- |
| Postgres      | `timestamptz`, `timestamp with time zone`  |

## BigDecimal

An arbitrary-precision signed decimal number (java.math.BigDecimal)

| Database Type | Column Type(s)                                                  |
| ------------- | -------------------------------------------------------------------- |
| Postgres      | `numeric`, `decimal`  |