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

I am excited and delighted to introduce, [GraphQLize](https://www.graphqlize.org), an open source JVM library for developing GraphQL API from your existing PostgreSQL and MySQL databases.

It aims to simplify the effort required to expose GraphQL APIs over relational databases.

<!--truncate-->

## Why GraphQLize ?

In the JVM ecosystem, developing GraphQL APIs to expose the data from the relational databases requires a lot of manual work. Right from defining the GraphQL schemas (either code-first or schema-first) to wiring them with resolvers and the database access logic, we spend a significant amount of our developement time. In the addition to this we also need to take care of optimizing the underlying SQL queries to avoid problems like N+1 queries. We have to account the maintainance of the resulting codebase as well!

GraphQLize will help you to overcome all these shortcomings. It provides you an efficient GraphQL implementation with just few lines of code.

## What is GraphQLize?

GraphQLize is a JVM library written in Clojure with Java interoperability. The crux of GraphQLize is generating the GraphQL types and queries by making use of [JDBC metadata](https://docs.oracle.com/javase/7/docs/api/java/sql/DatabaseMetaData.html) provided by the JDBC drivers.

It currently supports Postgres (9.4 & above) and MySQL (8.0 & above).

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

## Is It Production Ready?

It will be in few months.

The objective of this alpha release is to get early feedback from the community and it is not intended for using in production.

There are close to [forty issues](https://github.com/graphqlize/graphqlize/issues?q=is%3Aissue+is%3Aopen+sort%3Acreated-asc) that I am planning to work on in the upcoming months.

You can keep track of the progress by

- Following the [GitHub project board](https://github.com/orgs/graphqlize/projects/1)
- Subscribing to [GraphQLize's newsletter]().
- Joining [GraphQLize's Discord]().

## How can I contribute?

GraphQLize is at its early stage now and a quite bit of things are yet to be figured out.

So, at this point the best way to contribute is to raise a GitHub issue with all the relevant details and we'll take it from there.

## Oracle & SQL Server Support

I have been working on this idea for close to an year now. The grand vision of GraphQLize is to support a
