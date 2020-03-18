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
      additionalLanguages: ["clojure", "groovy"]
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
              label: "Style Guide",
              to: "docs/doc1"
            },
            {
              label: "Second Doc",
              to: "docs/doc2"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/akkdPqf"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog"
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
