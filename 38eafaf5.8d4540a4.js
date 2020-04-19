/*! For license information please see 38eafaf5.8d4540a4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{119:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return l})),n.d(a,"metadata",(function(){return s})),n.d(a,"rightToc",(function(){return p})),n.d(a,"default",(function(){return u}));var t=n(1),r=n(6),i=(n(0),n(156)),o=n(160),c=n(159),l={id:"vanilla",title:"Vanilla Java",sidebar_label:"Vanilla"},s={id:"getting_started/java/vanilla",title:"Vanilla Java",description:"One of the core design goals of GraphQLize is not to tie to any web development framework and remain as a drop-in JVM library.",source:"@site/docs/getting_started/java/vanilla.mdx",permalink:"/docs/getting_started/java/vanilla",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/getting_started/java/vanilla.mdx",sidebar_label:"Vanilla",sidebar:"docs",previous:{title:"Spark Java",permalink:"/docs/getting_started/java/sparkjava"},next:{title:"Spring Boot",permalink:"/docs/getting_started/kotlin/springboot"}},p=[{value:"Adding Dependencies",id:"adding-dependencies",children:[]},{value:"Initializing GraphQLizeResolver",id:"initializing-graphqlizeresolver",children:[{value:"Configuring DataSource",id:"configuring-datasource",children:[]}]},{value:"Querying Database",id:"querying-database",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:p};function u(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},b,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"One of the core design goals of GraphQLize is not to tie to any web development framework and remain as a drop-in JVM library."),Object(i.b)("p",null,"Getting started with GraphQLize in vanilla Java is straight-forward and involves only three steps."),Object(i.b)("h2",{id:"adding-dependencies"},"Adding Dependencies"),Object(i.b)("p",null,"Let's start with creating a new Java Project using Gradle (or Maven) and add the ",Object(i.b)("inlineCode",{parentName:"p"},"graphqlize-java")," & the JDBC driver dependencies."),Object(i.b)("p",null,Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://clojars.org/org.graphqlize/graphqlize-java"}),Object(i.b)("img",Object(t.a)({parentName:"a"},{src:"https://img.shields.io/clojars/v/org.graphqlize/graphqlize-java.svg",alt:"Clojars Project"})))),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-groovy",metastring:"{4,15}","{4,15}":!0}),"// ...\nrepositories {\n  // ...\n  maven { url \"https://clojars.org/repo\" }\n}\n// ...\ndependencies {\n\n  // For Postgres\n  implementation 'org.postgresql:postgresql:42.2.10'\n\n  // For MySQL\n  implementation 'mysql:mysql-connector-java:8.0.19'\n\n  implementation 'org.graphqlize:graphqlize-java:0.1.0-alpha11'\n\n  // DB Connection Pooling\n  implementation 'com.zaxxer:HikariCP:3.4.2'\n  // ...\n}\n")),Object(i.b)("h2",{id:"initializing-graphqlizeresolver"},"Initializing GraphQLizeResolver"),Object(i.b)("p",null,"To initialize ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLizeResolver"),", we need a ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/7/docs/api/javax/sql/DataSource.html"}),"DataSource"),"."),Object(i.b)("h3",{id:"configuring-datasource"},"Configuring DataSource"),Object(i.b)(o.a,{defaultValue:"postgres",values:[{label:"Postgres",value:"postgres"},{label:"MySQL",value:"mysql"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"postgres",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'import com.zaxxer.hikari.HikariConfig;\nimport com.zaxxer.hikari.HikariDataSource;\nimport javax.sql.DataSource;\n\npublic class Program {\n\n  private static DataSource getDataSource() {\n    HikariConfig config = new HikariConfig();\n    config.setJdbcUrl("jdbc:postgresql://localhost:5432/sakila");\n    config.setUsername("postgres");\n    config.setPassword("postgres");\n    return new HikariDataSource(config);\n  }\n\n  public static void main(String[] args) {\n    DataSource dataSource = getDataSource();\n  }\n}\n'))),Object(i.b)(c.a,{value:"mysql",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'import com.zaxxer.hikari.HikariConfig;\nimport com.zaxxer.hikari.HikariDataSource;\nimport javax.sql.DataSource;\n\npublic class Program {\n\n  private static DataSource getDataSource() {\n    HikariConfig config = new HikariConfig();\n    config.setJdbcUrl("jdbc:mysql://localhost:3306/sakila");\n    config.setUsername("root");\n    config.setPassword("mysql");\n    return new HikariDataSource(config);\n  }\n\n  public static void main(String[] args) {\n    DataSource dataSource = getDataSource();\n  }\n}\n')))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Make sure you are changing the above values to refer your database connection. The above example assumes that you are using the ",Object(i.b)("em",{parentName:"p"},"sakila")," database created from this ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/jOOQ/jOOQ/tree/master/jOOQ-examples/Sakila"}),"JOOQ's example repository"),".  "))),Object(i.b)("p",null,"The next step is using this data source object to create a new instance of ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLizeResolver"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java",metastring:"{9-10}","{9-10}":!0}),"import org.graphqlize.java.GraphQLResolver;\nimport org.graphqlize.java.GraphQLizeResolver;\n// ...\n\npublic class Program {\n  // ...\n  public static void main(String[] args) {\n    DataSource dataSource = getDataSource();\n    GraphQLResolver graphQLResolver =\n      new GraphQLizeResolver(dataSource);\n  }\n}\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Currently, it takes around 8 to 12 seconds to initialize. I am planning to ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize/issues/48"}),"work on it")," in a future release."))),Object(i.b)("h2",{id:"querying-database"},"Querying Database"),Object(i.b)("p",null,"With the GraphQLize resolver in place, we can query the underlying database using GraphQL. "),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java",metastring:"{5-7}","{5-7}":!0}),'public class Program {\n  // ...\n  public static void main(String[] args) {\n    // ...\n    String result = \n      graphQLResolver.resolve("query { actorByActorId(actorId: 1) { firstName, lastName } }");\n    System.out.println(result);\n  }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),'{ "data": { "actorByActorId": { "firstName": "PENELOPE", "lastName": "GUINESS" } } }\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"resolve")," method has an overload to support ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://graphql.org/learn/queries/#variables"}),"GraphQL variables")," as well. The above example can be re-written using variables as below."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java",metastring:"{5-8}","{5-8}":!0}),'public class Program {\n  // ...\n  public static void main(String[] args) {\n    // ...\n    String result = \n      graphQLResolver.resolve(\n        "query($actorId: Int!) { actorByActorId(actorId: $actorId) { firstName, lastName } }",\n        variables\n      );\n    System.out.println(result);\n  }\n}\n')),Object(i.b)("p",null,"We can also run the ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://graphql.org/learn/introspection/"}),"introspection queries")," to know what types and queries the ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLizeResolver")," supports. "),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java",metastring:"{6}","{6}":!0}),'public class Program {\n  // ...\n  public static void main(String[] args) {\n    // ...\n    String result = \n      graphQLResolver.resolve("{__schema {types {name}}}");\n    System.out.println(result);\n  }\n}\n')),Object(i.b)("p",null,"This would print all the types generated by the GraphQLize. "),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "__schema": {\n      "types": [\n        {\n          "name": "Actor"\n        },\n        {\n          "name": "ActorInfo"\n        },\n        {\n          "name": "Address"\n        },\n        ...\n      ]\n    }\n  }\n}\n')),Object(i.b)("p",null,"To know more the fields of a given type, we can run the following introspection query."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java",metastring:"{7}","{7}":!0}),'public class Program {\n  // ...\n  public static void main(String[] args) {\n    // ...\n    String result = \n      graphQLResolver.resolve(\n        "{__type(name: \\"Actor\\") { fields { name type { name kind ofType { name kind }}}}}"\n      );\n    System.out.println(result);\n  }\n}\n')),Object(i.b)("p",null,"We'll get the following as output (prettified for readability)"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "__type": {\n      "fields": [\n        {\n          "name": "actorId",\n          "type": {\n            "name": null,\n            "kind": "NON_NULL",\n            "ofType": {\n              "name": "Int",\n              "kind": "SCALAR"\n            }\n          }\n        },\n        {\n          "name": "filmActors",\n          "type": {\n            "name": null,\n            "kind": "NON_NULL",\n            "ofType": {\n              "name": null,\n              "kind": "LIST"\n            }\n          }\n        },\n        {\n          "name": "films",\n          "type": {\n            "name": null,\n            "kind": "NON_NULL",\n            "ofType": {\n              "name": null,\n              "kind": "LIST"\n            }\n          }\n        },\n        {\n          "name": "firstName",\n          "type": {\n            "name": null,\n            "kind": "NON_NULL",\n            "ofType": {\n              "name": "String",\n              "kind": "SCALAR"\n            }\n          }\n        },\n        {\n          "name": "lastName",\n          "type": {\n            "name": null,\n            "kind": "NON_NULL",\n            "ofType": {\n              "name": "String",\n              "kind": "SCALAR"\n            }\n          }\n        },\n        {\n          "name": "lastUpdate",\n          "type": {\n            "name": null,\n            "kind": "NON_NULL",\n            "ofType": {\n              "name": "String",\n              "kind": "SCALAR"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"Congrats! You are on course to build impressive applications using GraphQLize in less time. To save yourself some more time, do refer ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/graphql_schema/types-and-fields"}),"this documentation")," to know more about how GraphQLize generates the GraphQL schema and the queries. "),Object(i.b)("p",null,"The sample code is available in ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize-demo/tree/master/java/vanilla"}),"this GitHub Repository"),"."))}u.isMDXComponent=!0},156:function(e,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return d}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var a=r.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):c({},a,{},e)),n},b=function(e){var a=p(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=Object(t.forwardRef)((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=t,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,c({ref:a},s,{components:n})):r.a.createElement(d,c({ref:a},s))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},157:function(e,a,n){var t;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)&&t.length){var o=r.apply(null,t);o&&e.push(o)}else if("object"===i)for(var c in t)n.call(t,c)&&t[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(a,[]))||(e.exports=t)}()},158:function(e,a,n){"use strict";var t=n(0);const r=Object(t.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});a.a=r},159:function(e,a,n){"use strict";var t=n(0),r=n.n(t);a.a=function(e){return r.a.createElement("div",null,e.children)}},160:function(e,a,n){"use strict";var t=n(0),r=n.n(t),i=n(158);var o=function(){return Object(t.useContext)(i.a)},c=n(157),l=n.n(c),s=n(95),p=n.n(s);const b=37,u=39;a.a=function(e){const{block:a,children:n,defaultValue:i,values:c,groupId:s}=e,{tabGroupChoices:m,setTabGroupChoices:d}=o(),[g,h]=Object(t.useState)(i);if(null!=s){const e=m[s];null!=e&&e!==g&&h(e)}const v=e=>{h(e),null!=s&&d(s,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":a})},c.map(({value:e,label:a})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":g===e,className:l()("tab-item",p.a.tabItem,{"tab-item--active":g===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>((e,a,n)=>{switch(n.keyCode){case u:((e,a)=>{const n=e.indexOf(a)+1;e[n]?e[n].focus():e[0].focus()})(e,a);break;case b:((e,a)=>{const n=e.indexOf(a)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,a)}})(j,e.target,e),onFocus:()=>v(e),onClick:()=>v(e)},a))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},t.Children.toArray(n).filter(e=>e.props.value===g)[0]))}}}]);