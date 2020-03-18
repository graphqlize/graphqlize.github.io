/*! For license information please see 726478c8.89489095.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{115:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return b}));var n=t(1),r=(t(0),t(136)),i=t(138),o=t(139);const c={id:"sparkjava",title:"Spark Java",sidebar_label:"Spark Java"},s={id:"getting_started/java/sparkjava",title:"Spark Java",description:'import Tabs from "@theme/Tabs";',source:"@site/docs/getting_started/java/sparkjava.mdx",permalink:"/docs/getting_started/java/sparkjava",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/getting_started/java/sparkjava.mdx",sidebar_label:"Spark Java",sidebar:"docs",previous:{title:"Spring Boot",permalink:"/docs/getting_started/java/springboot"},next:{title:"Vanilla Java",permalink:"/docs/getting_started/java/vanilla"}},l=[{value:"Adding Dependencies",id:"adding-dependencies",children:[]},{value:"Initializing GraphQLizeResolver",id:"initializing-graphqlizeresolver",children:[{value:"Configuring DataSource",id:"configuring-datasource",children:[]}]},{value:"Adding GraphQL Endpoint",id:"adding-graphql-endpoint",children:[{value:"Test Drive",id:"test-drive",children:[]}]},{value:"GraphQL Playground and Voyager",id:"graphql-playground-and-voyager",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],p={rightToc:l};function b({components:e,...a}){return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Getting started with GraphQLize in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://sparkjava.com/"}),"Spark Java")," is simple and involves only few steps."),Object(r.b)("h2",{id:"adding-dependencies"},"Adding Dependencies"),Object(r.b)("p",null,"Let's start with creating a new Java Project using Gradle (or Maven) and add the ",Object(r.b)("inlineCode",{parentName:"p"},"graphqlize-java")," & the jdbc driver dependencies."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://clojars.org/org.graphqlize/graphqlize-java"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/clojars/v/org.graphqlize/graphqlize-java.svg",alt:"Clojars Project"})))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-groovy",metastring:"{4,15}","{4,15}":!0}),"// ...\nrepositories {\n  // ...\n  maven { url \"https://clojars.org/repo\" }\n}\n// ...\ndependencies {\n\n  // For Postgres\n  implementation 'org.postgresql:postgresql:42.2.10'\n\n  // For MySQL\n  implementation 'mysql:mysql-connector-java:8.0.19'\n\n  implementation 'org.graphqlize:graphqlize-java:0.1.0-alpha4'\n\n  // DB Connection Pooling\n  implementation 'com.zaxxer:HikariCP:3.4.2'\n\n  // JSON Deserialization\n  implementation 'com.fasterxml.jackson.core:jackson-core:2.10.3'\n  implementation 'com.fasterxml.jackson.core:jackson-databind:2.10.3'\n  // ...\n}\n")),Object(r.b)("h2",{id:"initializing-graphqlizeresolver"},"Initializing GraphQLizeResolver"),Object(r.b)("p",null,"To initialize ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLizeResolver")," we need a datasource holding the underlying database connection."),Object(r.b)("h3",{id:"configuring-datasource"},"Configuring DataSource"),Object(r.b)(i.a,{defaultValue:"postgres",values:[{label:"Postgres",value:"postgres"},{label:"MySQL",value:"mysql"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"postgres",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'import com.zaxxer.hikari.HikariConfig;\nimport com.zaxxer.hikari.HikariDataSource;\nimport javax.sql.DataSource;\n\npublic class Program {\n\n  private static DataSource getDataSource() {\n    HikariConfig config = new HikariConfig();\n    config.setJdbcUrl("jdbc:postgresql://localhost:5432/sakila");\n    config.setUsername("postgres");\n    config.setPassword("postgres");\n    return new HikariDataSource(config);\n  }\n\n  public static void main(String[] args) {\n    DataSource dataSource = getDataSource();\n  }\n}\n'))),Object(r.b)(o.a,{value:"mysql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'import com.zaxxer.hikari.HikariConfig;\nimport com.zaxxer.hikari.HikariDataSource;\nimport javax.sql.DataSource;\n\npublic class Program {\n\n  private static DataSource getDataSource() {\n    HikariConfig config = new HikariConfig();\n    config.setJdbcUrl("jdbc:mysql://localhost:3306/sakila");\n    config.setUsername("root");\n    config.setPassword("mysql");\n    return new HikariDataSource(config);\n  }\n\n  public static void main(String[] args) {\n    DataSource dataSource = getDataSource();\n  }\n}\n')))),Object(r.b)("div",{className:"admonition admonition-note"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Make sure you are changing the above values to refer your database connection. The above example assumes that you are using the ",Object(r.b)("em",{parentName:"p"},"sakila")," database which can be created using the scripts from this ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jOOQ/jOOQ/tree/master/jOOQ-examples/Sakila"}),"JOOQ's example repository"),".  "))),Object(r.b)("p",null,"With the datasource in place, all we need to do is the create a new instance of ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLizeResolver")," using it. "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java",metastring:"{9-10}","{9-10}":!0}),"import org.graphqlize.java.GraphQLResolver;\nimport org.graphqlize.java.GraphQLizeResolver;\n// ...\n\npublic class Program {\n  // ...\n  public static void main(String[] args) {\n    DataSource dataSource = getDataSource();\n    GraphQLResolver graphQLResolver = \n      new GraphQLizeResolver(dataSource);\n  }\n}\n")),Object(r.b)("div",{className:"admonition admonition-note"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Currently, it takes around 8 to 12 seconds to initialize. I am planning to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize/issues/48"}),"work on it")," it in a future release."))),Object(r.b)("h2",{id:"adding-graphql-endpoint"},"Adding GraphQL Endpoint"),Object(r.b)("p",null,"The next step is adding an API to expose the GraphQL endpoint. To do it, first add a POJO to model the incoming GraphQL request."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"import java.util.Map;\n// ...\nclass GraphQLRequest {\n  private String query;\n  private Map<String, Object> variables;\n  // ... Getters & Setters are ignored for brevity\n}\n// ...\n")),Object(r.b)("p",null,"Then add a new router ",Object(r.b)("inlineCode",{parentName:"p"},"/graphql")," and deserialize the request to this ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLRequest")," class using Jackson. "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'import com.fasterxml.jackson.databind.DeserializationFeature;\nimport com.fasterxml.jackson.databind.ObjectMapper;\nimport static spark.Spark.post;\n// ...\n\npublic class Program {\n  // ...\n  public static void main(String[] args) {\n    // ...\n    post("/graphql", (req, res) -> {\n      ObjectMapper objectMapper = new ObjectMapper();\n      objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);\n      GraphQLRequest graphQlRequest = objectMapper.readValue(req.body(), GraphQLRequest.class);\n      \n    });\n  }\n}\n')),Object(r.b)("p",null,"Finally, get the query & the variables from the request and invoke the ",Object(r.b)("inlineCode",{parentName:"p"},"resolve")," method on the initialized instance of ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLizeResolver"),". "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java",metastring:"{12,14,15}","{12,14,15}":!0}),'// ...\n\npublic class Program {\n  // ...\n  public static void main(String[] args) {\n    // ...\n    post("/graphql", (req, res) -> {\n      // ...\n      String query = graphQlRequest.getQuery();\n      Map<String, Object> variables = graphQlRequest.getVariables();\n\n      String result = graphQLResolver.resolve(query, variables);\n\n      res.header("Content-Type", "application/json");\n      return result;\n    });\n  }\n}\n')),Object(r.b)("p",null,"It return the ",Object(r.b)("inlineCode",{parentName:"p"},"result")," as stringified JSON and it can be sent as response body with the content type as ",Object(r.b)("inlineCode",{parentName:"p"},"application/json"),". "),Object(r.b)("h3",{id:"test-drive"},"Test Drive"),Object(r.b)("p",null,"To do a test drive of this implementation, start the server and hit the endpoint via curl."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'> curl -X POST \\\n  --data \'{"query": "query { actorByActorId(actorId: 1){firstName}}"}\' \\\n  -H "Content-Type: application/json" \\\n  http://localhost:4567/graphql\n')),Object(r.b)("p",null,"You'll get a response like below"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "actorByActorId": {\n      "firstName": "PENELOPE"\n    }\n  }\n}\n')),Object(r.b)("h2",{id:"graphql-playground-and-voyager"},"GraphQL Playground and Voyager"),Object(r.b)("p",null,"With the GraphQL endpoint up and running, the next step is introspecting the GraphQL schema and try out some more queries. "),Object(r.b)("p",null,"To introspect, we are going to make use of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/APIs-guru/graphql-voyager"}),"Voyager"),", a tool to visualize GraphQL API as an interactive graph. Adding it to our project is easy thanks to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://sparkjava.com/documentation#static-files"}),"static content serve capability")," of Spark Java. "),Object(r.b)("p",null,"All you need to do is download this ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize-demo/blob/master/java/spark/src/main/resources/public/voyager.html"}),"voyager html")," file and put it under the ",Object(r.b)("em",{parentName:"p"},"src/main/resources/public")," directory. "),Object(r.b)("p",null,"Then let the Spark Java know to use this ",Object(r.b)("em",{parentName:"p"},"public")," directory to serve static files"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'import static spark.Spark.staticFiles;\n// ...\n\npublic class Program {\n  // ...\n  public static void main(String[] args) {\n    // ...\n    staticFiles.location("/public");\n    // ...\n  }\n}\n')),Object(r.b)("p",null,"When you restart the server, the voyager will be available at ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"http://localhost:4567/voyager.html"}),"http://localhost:4567/voyager.html")),". A sample output would look like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.graphqlize.org/html/sakila-voyager.html"}),"this"),"."),Object(r.b)("p",null,"Then to interact with the GraphQL API, let's add the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/prisma-labs/graphql-playground"}),"GraphQL Playground"),". Like Voyager, download this ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize-demo/blob/master/java/spark/src/main/resources/public/playground.html"}),"playground html")," file and put in the ",Object(r.b)("em",{parentName:"p"},"public")," directory. "),Object(r.b)("p",null,"This GraphQL playground will be available at ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"http://localhost:4567/playground.html"}),"http://localhost:4567/playground.html"))," after server restart. "),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/graphql-playground.png",alt:null}))),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,"Congrats! You are on course to build awesome applications using GraphQLize in less time. To save yourself some more time, do refer ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../../graphql_schema/types-and-fields"}),"this documentation")," to know more about how GraphQLize generates the GraphQL schema and the queries. "),Object(r.b)("p",null,"The sample code is available in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize-demo/tree/master/java/spark"}),"this GitHub Repository"),"."),Object(r.b)("div",{className:"admonition admonition-note"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can also customize certain default behaviors of GraphQLize in future releases."))))}b.isMDXComponent=!0},136:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c({},a,{},e)),t},b=function(e){var a=p(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(t),u=n,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return t?r.a.createElement(m,c({ref:a},l,{components:t})):r.a.createElement(m,c({ref:a},l))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},137:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===i)for(var c in n)t.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},138:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(137),o=t.n(i),c=t(86),s=t.n(c);const l=37,p=39;a.a=function(e){const{block:a,children:t,defaultValue:i,values:c}=e,[b,d]=Object(n.useState)(i),u=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":a})},c.map(({value:e,label:a})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===e,className:o()("tab-item",s.a.tabItem,{"tab-item--active":b===e}),key:e,ref:e=>u.push(e),onKeyDown:e=>((e,a,t)=>{switch(t.keyCode){case p:((e,a)=>{const t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()})(e,a);break;case l:((e,a)=>{const t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,a)}})(u,e.target,e),onFocus:()=>d(e),onClick:()=>d(e)},a))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter(e=>e.props.value===b)[0]))}},139:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){return r.a.createElement("div",null,e.children)}}}]);