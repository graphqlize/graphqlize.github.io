---
id: query-relationships
title: Querying relationships of a table
sidebar_label: Query Relationships
---

For every table relationships in the database, GraphQLize creates appropriate field types as mentioned in [this section](../graphql_schema/relationships).

## Sample Queries

### One to One

```graphql
query {
  # Querying `address` table by its primary key `address_id`
  addressByAddressId(addressId: 1) {
    # Column Name: `address`
    address
    # object relationship via `city_id` column in the `address` table
    city {
      # Column Name: city
      city
    }
  }
}
```

GraphQLize supports self referencing one-to-one relationships as well.

For a table like `employee`,

![](/img/employee_self_ref_er_diagram.png)

with the following data

| id  | first_name | last_name | employee_reports_to_id |
| --- | ---------- | --------- | ---------------------- |
| 1   | Andrew     | Adams     | null                   |
| 2   | Michael    | Mitchell  | 1                      |
| 3   | Robert     | King      | 2                      |

the following GraphQL query,

```graphql
query {
  employeeById(id: 3) {
    firstName
    employeeReportsTo {
      firstName
      employeeReportsTo {
        firstName
      }
    }
  }
}
```

will yield the following result

```json
{
  "data": {
    "employeeById": {
      "firstName": "Robert",
      "employeeReportsTo": {
        "firstName": "Michael",
        "employeeReportsTo": {
          "firstName": "Andrew"
        }
      }
    }
  }
}
```

### One to Many

```graphql
query {
  # Querying `country` table by its primary key `country_id`
  countryByCountryId(countryId: 1) {
    # Column Name: `country`
    country
    # list relationship via `country_id` column in the `city` table
    cities {
      city
    }
  }
}
```

```graphql
query {
  # Querying `employee` table by its primary key `id`
  employeeById(id: 1) {
    # Column Name: `first_name`
    firstName
    # list relationship via `employee_reports_to_id` column in the same `employee` table
    employeeReportsToEmployees {
      firstName
    }
  }
}
```

In the above the auto generated name `employeeReportsToEmployees` (removal of `_id` suffix and pluraize the target table `employee`) is not meaningful. We can use [GraphQL field alias](https://graphql.org/learn/queries/#aliases) to make it better like below.

```graphql {4}
query {
  employeeById(id: 1) {
    firstName
    directReportees: employeeReportsToEmployees {
      firstName
    }
  }
}
```

Now, the query result would look like

```json {5}
{
  "data": {
    "employeeById": {
      "firstName": "Andrew",
      "directReportees": [
        {
          "firstName": "Michael"
        }
      ]
    }
  }
}
```

### Many to Many

```graphql
query {
  # Querying `actor` table by its primary key `actor_id`
  actorByActorId(actorId: 1) {
    # Column Name: `first_name`
    firstName
    # list relationship via `film_id` & `actor_id` columns in the `film_actor` table
    films {
      title
    }
  }
}
```
