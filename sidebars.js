/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: [
    {
      type: "category",
      label: "GraphQLize",
      items: ["graphqlize/intro"]
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        {
          type: "category",
          label: "Java",
          items: [
            "getting_started/java/springboot",
            "getting_started/java/sparkjava",
            "getting_started/java/vanilla"
          ]
        },
        {
          type: "category",
          label: "Kotlin",
          items: [
            "getting_started/kotlin/springboot",
            "getting_started/kotlin/ktor"
          ]
        },
        {
          type: "category",
          label: "Clojure",
          items: [
            "getting_started/clojure/pedestal",
            "getting_started/clojure/ring",
            "getting_started/clojure/vanilla"
          ]
        },
        {
          type: "category",
          label: "Scala",
          items: ["getting_started/scala/scalatra"]
        }
      ]
    },
    {
      type: "category",
      label: "GraphQL Schema",
      items: [
        "graphql_schema/types-and-fields",
        "graphql_schema/relationships",
        "graphql_schema/custom-scalar-types"
      ]
    },
    {
      type: "category",
      label: "Queries",
      items: [
        "queries/query-by-primary-key",
        "queries/query-table-and-view",
        "queries/query-relationships",
        {
          type: "category",
          label: "Pagination",
          items: [
            "queries/pagination/limit-and-offset"
          ]
        },
        "queries/sorting-query-results",
        "queries/filtering-query-results",
        "queries/aggregate-queries"
      ]
    }
  ]
};
