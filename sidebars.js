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
          label: "Clojure",
          items: [
            "getting_started/clojure/pedestal",
            "getting_started/clojure/ring",
            "getting_started/clojure/vanilla"
          ]
        },
        {
          type: "category",
          label: "Java",
          items: [
            "getting_started/java/sparkjava",
            "getting_started/java/springboot",
            "getting_started/java/vanilla"
          ]
        }
      ]
    },
    {
      type: "category",
      label: "GraphQL Schema",
      items: [
        "graphql_schema/intro",
        {
          type: "category",
          label: "Relationships",
          items: [
            "graphql_schema/relationships/one-to-one",
            "graphql_schema/relationships/one-to-many",
            "graphql_schema/relationships/many-to-many"
          ]
        },
        "graphql_schema/scalar-types"
      ]
    },
    {
      type: "category",
      label: "Queries",
      items: [
        "queries/query-by-primary-key",
        "queries/query-table",
        "queries/query-relationships"
      ]
    }
  ]
};
