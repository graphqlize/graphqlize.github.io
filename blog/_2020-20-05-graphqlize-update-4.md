---
slug: graphqlize-update-4
title: GraphQLize Update (#4) - Aggregate Functions & Group By.
author: Tamizhvendan S
author_title: Author, GraphQLize
author_url: https://github.com/tamizhvendan
author_image_url: https://avatars1.githubusercontent.com/u/1128916?v=4
tags: [announcement, clojure, java, graphql, postgres, mysql, scala, kotlin]
---

Hello World, 

The fourth sprint of [GraphQLize](https://www.graphqlize.org) went according to the plan (fourth time in a row!), and the queries in GraphQLize has got an uplift through the aggregate functions and group-by support :). 

Let's take a short tour of these new features.

<!--truncate-->

## Aggregate Functions

GraphQLize supports the standard aggregate functions `count`, `max`, `min`, `sum` & `avg`. We can also use the `GROUP-BY` operation along with these aggregate functions.

```graphql
query {
  courses {
    countOfRating
    avgOfRating
    maxOfRating
    minOfRating
    sumOfRating
  }
}
```

The aggregate functions over columns are available as `fields` in the corresponding `type` representing the table.

```graphql
type Course {
  # ...
  rating: Int!

  # ... aggregate functions as fields
  avgOfRating: BigDecimal
  countOfRating: Int!
  maxOfRating: Int
  minOfRating: Int
  sumOfRating: Int
  # ...
}
```

### Naming Convention

As seen in the above example, GraphQLize uses the name of the aggregate function (in camel case) along with the preposition `Of` as prefix to represent the aggregate functions as fields.

| Column Name | Aggregate Function | Field            |
| ----------- | ------------------ | ---------------- |
| first_name  | count              | countOfFirstName |
| payment     | sum                | sumOfPayment     |


## Aggregates Over Relationships

We can use the aggregate functions over the relationship fields as well. 

Let's assume that we have a schema like below 

![](/img/author_course_er_diagram.png)

We can get the total courses count and the average course rating of all the authors along with their first-name and last-name, using the following GraphQL query

```graphql
query {
  authors {
    id
    firstName
    courses {
      # highlight-next-line
      countOfId 
      # highlight-next-line
      avgOfRating
    }
  }
}
```

:::note
The `countOfId` field translates to `count(id)` in the SQL's select clause. The count of all rows via `count(*)` will be added in a future release.
:::

## GROUP BY

The aggregate functions often paired along with the GROUP BY operation and GraphQLize supports it out of the box!

For the above schema, we can group the courses by their rating and get their count using the following query

```graphql
query {
  # highlight-next-line
  courses(groupBy: [rating]) {
    rating
    countOfRating
  }
}
```


## What's Next?

All my spare time went on building GraphQLize for the six-plus months, and I also successfully delivered a client project at work during this time! 

I keep getting the burnout feelings and the two-three days breaks not working out. Hence I decided to stay away from doing programming outside my work for the next three weeks (til June 10,2020).  

I am committed to making this library production-ready, and I believe this break will enable me to get my focus and energy back on track!

I haven't planned the next iteration of GraphQLize yet. Most likely I will be working on supporting aggregate functions in the query filters and adding the `having` clause to filter group by values. 

You can keep track of the progress by

- Following the [GraphQLize Twitter account](https://twitter.com/graphqlize)
- Joining [GraphQLize's Discord](https://discord.gg/akkdPqf)
- Subscribing to [GraphQLize's newsletter](https://tinyletter.com/graphqlize-org)

Cheers,  
Tamizh