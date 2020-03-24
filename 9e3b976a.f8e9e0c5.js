(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{130:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(1),n=a(6),i=(a(0),a(148)),l={id:"announcing-graphqlize-alpha",title:"Announcing GraphQLize Alpha",author:"Tamizhvendan S",author_title:"Author, GraphQLize",author_url:"https://github.com/tamizhvendan",author_image_url:"https://avatars1.githubusercontent.com/u/1128916?v=4",tags:["announcement","clojure","java","graphql","postgres","mysql"]},o={permalink:"/blog/announcing-graphqlize-alpha",source:"@site/blog/2020-03-18-announcing-graphqlize-alpha.md",description:"Hello World,",date:"2020-03-18T00:00:00.000Z",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"clojure",permalink:"/blog/tags/clojure"},{label:"java",permalink:"/blog/tags/java"},{label:"graphql",permalink:"/blog/tags/graphql"},{label:"postgres",permalink:"/blog/tags/postgres"},{label:"mysql",permalink:"/blog/tags/mysql"}],title:"Announcing GraphQLize Alpha",truncated:!0},c=[{value:"Why GraphQLize?",id:"why-graphqlize",children:[]},{value:"What is GraphQLize?",id:"what-is-graphqlize",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Is It Production Ready?",id:"is-it-production-ready",children:[]},{value:"How can I contribute?",id:"how-can-i-contribute",children:[]},{value:"Oracle &amp; SQL Server Support",id:"oracle--sql-server-support",children:[]},{value:"Acknowledgements",id:"acknowledgements",children:[]}],b={rightToc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hello World,"),Object(i.b)("p",null,"I am excited and delighted to introduce, ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.graphqlize.org"}),"GraphQLize"),", an open-source JVM library for developing GraphQL API instantly from your existing PostgreSQL and MySQL databases."),Object(i.b)("p",null,"It aims to simplify the effort required to expose GraphQL APIs over relational databases."),Object(i.b)("h2",{id:"why-graphqlize"},"Why GraphQLize?"),Object(i.b)("p",null,"In the JVM ecosystem, developing GraphQL APIs to expose the data from the relational databases requires a lot of manual work. Right from defining the GraphQL schemas (either code-first or schema-first) to wiring them with resolvers and the database access logic, we spend a significant amount of our development time."),Object(i.b)("p",null,"In addition to this, we also need to take care of optimizing the underlying SQL queries to avoid problems like N+1 queries. We have to account the maintenance of the resulting codebase as well!"),Object(i.b)("p",null,"GraphQLize will help you to overcome all these shortcomings. It provides you with an efficient GraphQL implementation in just few lines of code."),Object(i.b)("h2",{id:"what-is-graphqlize"},"What is GraphQLize?"),Object(i.b)("p",null,"GraphQLize is a JVM library written in Clojure with Java interoperability. The crux of GraphQLize is generating the GraphQL schema and resolving the queries by making use of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/7/docs/api/java/sql/DatabaseMetaData.html"}),"JDBC metadata")," provided by the JDBC drivers."),Object(i.b)("p",null,"It currently supports Postgres (9.4 & above) and MySQL (8.0 & above)."),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"Getting started with GraphQLize is simple and involves only a few steps."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add the GraphQLize dependency in your project."),Object(i.b)("li",{parentName:"ol"},"Initialize GraphQLize Resolver by providing the Java SQL ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/7/docs/api/javax/sql/DataSource.html"}),"data source"),"."),Object(i.b)("li",{parentName:"ol"},"Add a GraphQL API endpoint and use the initialized GraphQlize Resolver in the previous step.")),Object(i.b)("p",null,"The actual implementation of these steps will vary based on which language (Java, Kotlin, Clojure) and framework (Spring Boot, Spark Java, Ktor, Pedestal, etc.). Please refer the below links for more details."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Language"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Frameworks"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Java"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)("a",{href:"http://graphqlize.org/docs/getting_started/java/springboot"},"Spring Boot")),Object(i.b)("li",null,Object(i.b)("a",{href:"http://graphqlize.org/docs/getting_started/java/sparkjava"},"Spark Java")),Object(i.b)("li",null,Object(i.b)("a",{href:"https://www.graphqlize.org/docs/getting_started/java/vanilla"},"Vanilla Java"))))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Kotlin"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)("a",{href:"https://www.graphqlize.org/docs/getting_started/kotlin/springboot"},"Spring Boot")),Object(i.b)("li",null,Object(i.b)("a",{href:"https://www.graphqlize.org/docs/getting_started/kotlin/ktor"},"Ktor"))))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Clojure"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)("a",{href:"https://www.graphqlize.org/docs/getting_started/clojure/pedestal"},"Pedestal")),Object(i.b)("li",null,Object(i.b)("a",{href:"https://www.graphqlize.org/docs/getting_started/clojure/ring"},"Ring")),Object(i.b)("li",null,Object(i.b)("a",{href:"https://www.graphqlize.org/docs/getting_started/clojure/vanilla"},"Vanilla Clojure"))))))),Object(i.b)("h2",{id:"is-it-production-ready"},"Is It Production Ready?"),Object(i.b)("p",null,"It will be in a few months."),Object(i.b)("p",null,"The objective of this alpha release is to get early feedback from the community."),Object(i.b)("p",null,"There are close to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize/issues?q=is%3Aissue+is%3Aopen+sort%3Acreated-asc"}),"forty issues")," that I am planning to work on in the upcoming months to make it production ready."),Object(i.b)("p",null,"You can keep track of the progress by"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Following the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/orgs/graphqlize/projects/1"}),"GitHub project board")),Object(i.b)("li",{parentName:"ul"},"Subscribing to ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://tinyletter.com/graphqlize-org"}),"GraphQLize's newsletter"),"."),Object(i.b)("li",{parentName:"ul"},"Joining ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://discord.gg/akkdPqf"}),"GraphQLize's Discord"),".")),Object(i.b)("h2",{id:"how-can-i-contribute"},"How can I contribute?"),Object(i.b)("p",null,"GraphQLize is at its early stage now, and the codebase and the APIs are not stable yet."),Object(i.b)("p",null,"So, at this instant, the best way to contribute is to initiate a chat in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://discord.gg/akkdPqf"}),"GraphQLize's Discord")," channel or raise ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize/issues/new"}),"a GitHub issue")," with all the relevant details, and we'll take it from there."),Object(i.b)("h2",{id:"oracle--sql-server-support"},"Oracle & SQL Server Support"),Object(i.b)("p",null,"One of the design goal of GraphQLize from day one is to support Postgres, MySQL, Oracle & MS SQL Server. To start with, I am focussing on getting it to a production ready state for Postgres & MySQL. After accomplishing this, I will be focusing on the other two."),Object(i.b)("h2",{id:"acknowledgements"},"Acknowledgements"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://postgrest.org"}),"PostgREST"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.graphile.org/postgraphile/"}),"PostGraphile"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.keystonejs.com/"}),"KeyStoneJs")," and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://hasura.io/"}),"Hasura")," are the inspiration behind GraphQLize."),Object(i.b)("p",null,"GraphQLize is not possible without the following excellent Clojure libraries."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/jkk/honeysql"}),"HoneySQL")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/walmartlabs/lacinia"}),"Lacinia")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/seancorfield/next-jdbc"}),"next-jdbc")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/r0man/inflections-clj"}),"inflections")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/clojure/data.json"}),"data-json"))),Object(i.b)("p",null,"The samples in the documentation of GraphQLize uses the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.jooq.org/sakila"}),"Sakila")," database from ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.jooq.org"}),"JOOQ")," extensively."),Object(i.b)("p",null,"Cheers,",Object(i.b)("br",{parentName:"p"}),"\n","Stay Safe & Tuned!!"))}p.isMDXComponent=!0},148:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,d=s["".concat(l,".").concat(u)]||s[u]||h[u]||i;return a?n.a.createElement(d,o({ref:t},b,{components:a})):n.a.createElement(d,o({ref:t},b))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=a[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);