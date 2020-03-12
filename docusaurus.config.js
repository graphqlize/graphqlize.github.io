const Prism = require("prism-react-renderer/prism");

// Prism.hooks.add("wrap", function(env) {
//   if (env.language == "clojure" && env.type == "punctuation") {
//     if (env.content == "(" || env.content == "[" || env.content == "{") {
//       level++;
//       env.classes.push("rbl" + level);
//     }
//     if (env.content == ")" || env.content == "]" || env.content == "}") {
//       env.classes.push("rbl" + level);
//       level--;
//     }
//   }
// });

module.exports = {
  title: "GraphQLize",
  tagline:
    "A JVM library for developing GraphQL API from your existing PostgreSQL and MySQL databases",
  url: "https://graphqlize.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "graphqlize", // Usually your GitHub org/user name.
  projectName: "graphqlize.github.io", // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ["clojure"],
      theme: require("prism-react-renderer/themes/github")
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
          editUrl:
            "https://github.com/graphqlize/graphqlize.github.io/tree/source/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
