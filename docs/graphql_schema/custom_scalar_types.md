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

## Long

The long data type is a 64-bit two's complement integer (java.lang.Long).

| Database Type | Column Type(s)                                                  |
| ------------- | -------------------------------------------------------------------- |
| Postgres      | `bigint`,`int8`,`bigserial`,`serial8`  |
| MySQL         | `INT UNSIGNED`,`BIGINT`  |

## BigInteger

The long data type is a 64-bit two's complement integer (java.lang.Long).

| Database Type | Column Type(s)                                                  |
| ------------- | -------------------------------------------------------------------- |
| MySQL         | `BIGINT UNSIGNED`  |

## BigDecimal

An arbitrary-precision signed decimal number (java.math.BigDecimal)

| Database Type | Column Type(s)                                                  |
| ------------- | -------------------------------------------------------------------- |
| Postgres      | `numeric`, `decimal`  |
| MySQL         | `numeric`, `decimal`  |


## Date

A date without a time-zone in the ISO-8601 calendar system, such as `2007-12-03` (`java.time.LocalDate`).

| Database Type | Column Type(s)                                                          |
| ------------- | -------------------------------------------------------------------- |
| Postgres      | `date`   |
| MySQL         | `DATE` |

## Time

A time without a time-zone in the ISO-8601 calendar system, such as `10:15:30` (`java.time.LocalTime`).

| Database Type | Column Type(s)                                                          |
| ------------- | -------------------------------------------------------------------- |
| Postgres      | `time`, `time without time zone`   |
| MySQL         | `TIME` |

## TimeWithTimeZone

A time with an offset from UTC/Greenwich in the ISO-8601 calendar system, such as `10:15:30+01:00` (`java.time.OffsetTime`).

| Database Type | Column Type(s)                                                          |
| ------------- | -------------------------------------------------------------------- |
| Postgres      | `timetz`, `time with time zone`   |

## DateTime 

A date-time without a time-zone in the ISO-8601 calendar system, such as `2007-12-03T10:15:30` (`java.time.LocalDateTime`). 

| Database Type | Column Type(s)                                                          |
| ------------- | -------------------------------------------------------------------- |
| Postgres      | `timestamp`, `timestamp without time zone`   |
| MySQL         | `DATETIME`, `TIMESTAMP` |

## DateTimeWithTimeZone

A date-time with an offset from UTC/Greenwich in the ISO-8601 calendar system, such as `2007-12-03T10:15:30+01:00` (`java.time.OffsetDateTime`).

| Database Type | Column Type(s)                                                  |
| ------------- | -------------------------------------------------------------------- |
| Postgres      | `timestamptz`, `timestamp with time zone`  |