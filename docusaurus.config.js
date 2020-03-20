module.exports = {
  title: "GraphQLize",
  tagline:
    "A JVM library for developing GraphQL API instantly from Postgres and MySQL databases",
  url: "https://www.graphqlize.org",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "graphqlize", // Usually your GitHub org/user name.
  projectName: "graphqlize.github.io", // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      additionalLanguages: ["clojure", "groovy", "kotlin", "scala"]
    },
    navbar: {
      title: "GraphQLize",
      logo: {
        alt: "GraphQLize Logo",
        src: "img/logo.svg"
      },
      links: [
        { to: "docs/graphqlize/intro", label: "Docs", position: "left" },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/graphqlize/graphqlize",
          label: "GitHub",
          position: "right"
        },
        {
          href: "https://discord.gg/akkdPqf",
          label: "Discord",
          position: "right"
        },
        {
          href: "https://tinyletter.com/graphqlize-org",
          label: "Newsletter",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/graphqlize/intro#getting-started"
            },
            {
              label: "GraphQL Schema Conventions",
              to: "docs/graphql_schema/types-and-fields"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/akkdPqf"
            },
            {
              label: "GitHub",
              href: "https://github.com/graphqlize/graphqlize"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/graphqlize"
            }
          ]
        },
        {
          title: "Updates",
          items: [
            {
              label: "Newsletter",
              href: "https://tinyletter.com/graphqlize-org"
            },
            {
              label: "Blog",
              to: "blog"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GraphQLize. Built with Docusaurus.`
    },
    googleAnalytics: {
      trackingID: "UA-160648124-1"
    },
    algolia: {
      apiKey: "fdc14b876f472241da9c719eb6f80573",
      indexName: "graphqlize",
      algoliaOptions: {} // Optional, if provided by Algolia
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/graphqlize/graphqlize.github.io/tree/source/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        },
        blog: {
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} GraphQLize.`
          }
        }
      }
    ]
  ]
};
