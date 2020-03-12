---
id: intro
title: Introduction
sidebar_label: Introduction
---

## What is GraphQLize?

GraphQLize is a JVM library for developing GraphQL API from your existing PostgreSQL and MySQL databases. It aims to simplify the effort required to expose GraphQL APIs over relational databases.

It is written in Clojure with Java interoperability.

## Getting Started

Getting started with GraphQLize is simple and involves only few steps.

1. Add the GraphQLize dependency in your project.
2. Initialize GraphQLize Resolver by providing the Java SQL [datasource](https://docs.oracle.com/javase/7/docs/api/javax/sql/DataSource.html).
3. Add a GraphQL API endpoint and use the initialized GraphQlize Resolver in the previous step.

The actual implementation of these steps will vary based on which language (Java, Clojure) and framework (Spring Boot, Spark Java, Pedestal, etc.,). Please refer the below links for more details.

- Java

  - [Spring Boot]()
  - [Spark Java]()
  - [Vanilla Java]()

- Clojure
  - [Pedestal]()
  - [Ring](../getting_started/clojure/ring.md)
  - [Vanilla Clojure]()

## Acknowledgements

GraphQLize is inspired by [PostgREST](http://postgrest.org), [PostGraphile](https://www.graphile.org/postgraphile/), [KeyStoneJs](https://www.keystonejs.com/) and [Hasura](https://hasura.io/).

GraphQLize is not possible without the following awesome Clojure libraries.

- [HoneySQL](https://github.com/jkk/honeysql)
- [Lacinia](https://github.com/walmartlabs/lacinia)
- [next-jdbc](https://github.com/seancorfield/next-jdbc)
- [inflections](https://github.com/r0man/inflections-clj)
- [data-json](https://github.com/clojure/data.json)

## License

The use and distribution terms for this software are covered by the [Eclipse Public License - v 2.0](https://www.eclipse.org/legal/epl-2.0). By using this software in any fashion, you are agreeing to be bound by the terms of this license.
