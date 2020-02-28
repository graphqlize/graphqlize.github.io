module.exports = {
  title: "GraphQLize",
  tagline:
    "A JVM library for developing GraphQL endpoint from PostgreSQL and MySQL",
  url: "https://graphqlize.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "graphqlize", // Usually your GitHub org/user name.
  projectName: "graphqlize.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "GraphQLize",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg"
      },
      links: [
        { to: "docs/doc1", label: "Docs", position: "left" },
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
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus"
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
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
