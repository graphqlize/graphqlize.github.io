---
id: announcing-graphqlize-alpha
title: Announcing GraphQLize Alpha
author: Tamizhvendan S
author_title: Author, GraphQLize
author_url: https://github.com/tamizhvendan
author_image_url: https://avatars1.githubusercontent.com/u/1128916?v=4
tags: [announcement, clojure, java, graphql, postgres, mysql]
---

Hello World,

I am excited and delighted to introduce, [GraphQLize](https://www.graphqlize.org), an open-source JVM library for developing GraphQL API instantly from your existing PostgreSQL and MySQL databases.

It aims to simplify the effort required to expose GraphQL APIs over relational databases.

<!--truncate-->

## Why GraphQLize?

In the JVM ecosystem, developing GraphQL APIs to expose the data from the relational databases requires a lot of manual work. Right from defining the GraphQL schemas (either code-first or schema-first) to wiring them with resolvers and the database access logic, we spend a significant amount of our development time.

In addition to this, we also need to take care of optimizing the underlying SQL queries to avoid problems like N+1 queries. We have to account the maintenance of the resulting codebase as well!

GraphQLize will help you to overcome all these shortcomings. It provides you with an efficient GraphQL implementation in just few lines of code.

## What is GraphQLize?

GraphQLize is a JVM library written in Clojure with Java interoperability. The crux of GraphQLize is generating the GraphQL schema and resolving the queries by making use of [JDBC metadata](https://docs.oracle.com/javase/7/docs/api/java/sql/DatabaseMetaData.html) provided by the JDBC drivers.

It currently supports Postgres (9.4 & above) and MySQL (8.0 & above).

## Getting Started

Getting started with GraphQLize is simple and involves only a few steps.

1. Add the GraphQLize dependency in your project.
2. Initialize GraphQLize Resolver by providing the Java SQL [data source](https://docs.oracle.com/javase/7/docs/api/javax/sql/DataSource.html).
3. Add a GraphQL API endpoint and use the initialized GraphQlize Resolver in the previous step.

The actual implementation of these steps will vary based on which language (Java, Kotlin, Clojure) and framework (Spring Boot, Spark Java, Ktor, Pedestal, etc.). Please refer the below links for more details.

| Language | Frameworks                                                                                                                                                                                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Java     | <ul><li><a href="http://graphqlize.org/docs/getting_started/java/springboot">Spring Boot</a></li><li><a href="http://graphqlize.org/docs/getting_started/java/sparkjava">Spark Java</a></li><li><a href="https://www.graphqlize.org/docs/getting_started/java/vanilla">Vanilla Java</a></li></ul>       |
| Kotlin   | <ul><li><a href="https://www.graphqlize.org/docs/getting_started/kotlin/springboot">Spring Boot</a></li><li><a href="https://www.graphqlize.org/docs/getting_started/kotlin/ktor">Ktor</a></li></ul>                                                                                                    |
| Clojure  | <ul><li><a href="https://www.graphqlize.org/docs/getting_started/clojure/pedestal">Pedestal</a></li><li><a href="https://www.graphqlize.org/docs/getting_started/clojure/ring">Ring</a></li><li><a href="https://www.graphqlize.org/docs/getting_started/clojure/vanilla">Vanilla Clojure</a></li></ul> |

## Is It Production Ready?

It will be in a few months.

The objective of this alpha release is to get early feedback from the community.

There are close to [forty issues](https://github.com/graphqlize/graphqlize/issues?q=is%3Aissue+is%3Aopen+sort%3Acreated-asc) that I am planning to work on in the upcoming months to make it production ready.

You can keep track of the progress by

- Following the [GitHub project board](https://github.com/orgs/graphqlize/projects/1)
- Subscribing to [GraphQLize's newsletter](https://tinyletter.com/graphqlize-org).
- Joining [GraphQLize's Discord](https://discord.gg/akkdPqf).

## How can I contribute?

GraphQLize is at its early stage now, and the codebase and the APIs are not stable yet.

So, at this instant, the best way to contribute is to initiate a chat in [GraphQLize's Discord](https://discord.gg/akkdPqf) channel or raise [a GitHub issue](https://github.com/graphqlize/graphqlize/issues/new) with all the relevant details, and we'll take it from there.

## Oracle & SQL Server Support

One of the design goal of GraphQLize from day one is to support Postgres, MySQL, Oracle & MS SQL Server. To start with, I am focussing on getting it to a production ready state for Postgres & MySQL. After accomplishing this, I will be focusing on the other two.

## Acknowledgements

[PostgREST](http://postgrest.org), [PostGraphile](https://www.graphile.org/postgraphile/), [KeyStoneJs](https://www.keystonejs.com/) and [Hasura](https://hasura.io/) are the inspiration behind GraphQLize.

GraphQLize is not possible without the following excellent Clojure libraries.

- [HoneySQL](https://github.com/jkk/honeysql)
- [Lacinia](https://github.com/walmartlabs/lacinia)
- [next-jdbc](https://github.com/seancorfield/next-jdbc)
- [inflections](https://github.com/r0man/inflections-clj)
- [data-json](https://github.com/clojure/data.json)

The samples in the documentation of GraphQLize uses the [Sakila](https://www.jooq.org/sakila) database from [JOOQ](https://www.jooq.org) extensively.

Cheers,  
Stay Safe & Tuned!!
