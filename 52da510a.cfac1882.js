(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||c;return a?r.a.createElement(m,o({ref:t},l,{components:a})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},120:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},121:function(e,t,a){"use strict";var n=a(0),r=a(122);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},122:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},123:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(121),i=a(120),o=a(49),s=a.n(o);const l=37,p=39;t.a=function(e){const{block:t,children:a,defaultValue:o,values:b,groupId:d,className:u}=e,{tabGroupChoices:m,setTabGroupChoices:h}=Object(c.a)(),[g,j]=Object(n.useState)(o),[O,v]=Object(n.useState)(!1);if(null!=d){const e=m[d];null!=e&&e!==g&&b.some((t=>t.value===e))&&j(e)}const f=e=>{j(e),null!=d&&h(d,e)},y=[],N=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},w=()=>{v(!1)};return Object(n.useEffect)((()=>(window.addEventListener("keydown",N),window.addEventListener("mousedown",w),()=>{window.removeEventListener("keydown",N),window.removeEventListener("mousedown",w)})),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},u)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===e}),style:O?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case p:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),N(e)},onFocus:()=>f(e),onClick:()=>{f(e),v(!1)},onPointerDown:()=>v(!1)},t)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((e=>e.props.value===g))[0]))}},124:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},128:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/graphql-playground-3ed9e7bc5cee10c4e89be27df856dbb8.png"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),c=(a(0),a(119)),i=a(123),o=a(124),s={id:"pedestal",title:"Pedestal",sidebar_label:"Pedestal"},l={unversionedId:"getting_started/clojure/pedestal",id:"getting_started/clojure/pedestal",isDocsHomePage:!1,title:"Pedestal",description:"GraphQLize built on top of Lacinia, a de-facto library for implementing GraphQL APIs in Clojure.",source:"@site/docs/getting_started/clojure/pedestal.mdx",slug:"/getting_started/clojure/pedestal",permalink:"/docs/getting_started/clojure/pedestal",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/getting_started/clojure/pedestal.mdx",version:"current",sidebar_label:"Pedestal",sidebar:"docs",previous:{title:"Ktor",permalink:"/docs/getting_started/kotlin/ktor"},next:{title:"Ring",permalink:"/docs/getting_started/clojure/ring"}},p=[{value:"Adding Dependencies",id:"adding-dependencies",children:[]},{value:"Configuring DataSource",id:"configuring-datasource",children:[]},{value:"Creating Lacinia Schema",id:"creating-lacinia-schema",children:[]},{value:"Adding GraphQL Endpoint",id:"adding-graphql-endpoint",children:[{value:"Test Drive",id:"test-drive",children:[]}]},{value:"GraphQL Playground and Voyager",id:"graphql-playground-and-voyager",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:p};function d(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,s,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"GraphQLize built on top of ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://lacinia.readthedocs.io/en/latest/"}),"Lacinia"),", a de-facto library for implementing GraphQL APIs in Clojure."),Object(c.b)("p",null,"Getting started with GraphQLize using Pedastal involves only few steps. Let's dive in."),Object(c.b)("h2",{id:"adding-dependencies"},"Adding Dependencies"),Object(c.b)("p",null,"Create a new Clojure project using ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/seancorfield/clj-new"}),"deps")," (or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://leiningen.org/"}),"leiningen"),") and add the GraphQLize and other dependencies."),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://clojars.org/org.graphqlize/graphqlize"}),Object(c.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/clojars/v/org.graphqlize/graphqlize.svg",alt:"Clojars Project"})))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure",metastring:"{4}","{4}":!0}),';; deps.edn\n{:paths ["src" "resources"]\n :deps  {org.clojure/clojure              {:mvn/version "1.10.1"}\n         org.graphqlize/graphqlize        {:mvn/version "0.1.0-alpha21"}\n         ;; db connection pool\n         hikari-cp                        {:mvn/version "2.10.0"}\n         ;; for postgres\n         org.postgresql/postgresql        {:mvn/version "42.2.8"}\n         ;; for MySQL\n         mysql/mysql-connector-java       {:mvn/version "8.0.19"}\n         ;; Lacinia <-> Pedastal Service\n         com.walmartlabs/lacinia-pedestal {:mvn/version "0.13.0-alpha-1"}}}\n')),Object(c.b)("h2",{id:"configuring-datasource"},"Configuring DataSource"),Object(c.b)("p",null,"The next step is configuring the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/7/docs/api/javax/sql/DataSource.html"}),"DataSource"),". In this example, we are going to use ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/brettwooldridge/HikariCP"}),"Hikari Connection Pool")," to manage the database connection."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"For brevity, this sample uses ",Object(c.b)("inlineCode",{parentName:"p"},"def")," to define the states. In a real-world project, you can replace it with ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/stuartsierra/component"}),"Component"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tolitius/mount"}),"Mount"),", or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/weavejester/integrant"}),"Integrant"),"."))),Object(c.b)(i.a,{defaultValue:"postgres",values:[{label:"Postgres",value:"postgres"},{label:"MySQL",value:"mysql"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"postgres",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),';; src/server.clj\n(ns server\n  (:require [hikari-cp.core :as hikari]))\n\n(def db-spec (hikari/make-datasource {:adapter           "postgresql"\n                                      :database-name     "sakila"\n                                      :server-name       "localhost"\n                                      :port-number       5432\n                                      :maximum-pool-size 1\n                                      :username          "postgres"\n                                      :password          "postgres"}))\n'))),Object(c.b)(o.a,{value:"mysql",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),';; src/server.clj\n(ns server\n  (:require [hikari-cp.core :as hikari]))\n\n(def db-spec (hikari/make-datasource {:server-name       "localhost"\n                                      :maximum-pool-size 1\n                                      :jdbc-url          "jdbc:mysql://localhost:3306/sakila"\n                                      :driver-class-name "com.mysql.cj.jdbc.MysqlDataSource"\n                                      :username          "root"\n                                      :password          "mysql123"}))\n')))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Make sure you are changing the above values to refer your database connection. The above example assumes that you are using the ",Object(c.b)("em",{parentName:"p"},"sakila")," database created from this ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jOOQ/jOOQ/tree/master/jOOQ-examples/Sakila"}),"JOOQ's example repository"),".  "))),Object(c.b)("h2",{id:"creating-lacinia-schema"},"Creating Lacinia Schema"),Object(c.b)("p",null,"Then create a lacinia schema from the data source using GraphQLize. "),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure",metastring:"{3,7}","{3,7}":!0}),"(ns server\n  (:require ; ...\n            [graphqlize.lacinia.core :as l]))\n\n(def db-spec ...)\n\n(def lacinia-schema (l/schema db-spec))\n")),Object(c.b)("h2",{id:"adding-graphql-endpoint"},"Adding GraphQL Endpoint"),Object(c.b)("p",null,"The final step is adding pedestal endpoint to expose the ",Object(c.b)("inlineCode",{parentName:"p"},"/graphql")," API. With the help of ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/walmartlabs/lacinia-pedestal"}),"lacinia-pedestal")," library, we can do it with ease."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure",metastring:"{9-11}","{9-11}":!0}),"(ns server\n  (:require ; ...\n            [com.walmartlabs.lacinia.pedestal :as lacinia-pedestal]))\n\n(def db-spec ...)\n\n(def lacinia-schema ...)\n\n(def service \n  (lacinia-pedestal/service-map \n    lacinia-schema {:port     8080}))\n\n(defonce runnable-service (server/create-server service))\n\n(defn -main []\n  (server/start runnable-service))\n")),Object(c.b)("h3",{id:"test-drive"},"Test Drive"),Object(c.b)("p",null,"To do a test drive of this implementation, start the server"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"> clj -m server\n")),Object(c.b)("p",null," and hit the endpoint via curl."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'> curl -X POST \\\n  --data \'{"query": "query { actorByActorId(actorId: 1){firstName}}"}\' \\\n  -H "Content-Type: application/json" \\\n  http://localhost:8080/graphql\n')),Object(c.b)("p",null,"You'll get a response like below."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "actorByActorId": {\n      "firstName": "PENELOPE"\n    }\n  }\n}\n')),Object(c.b)("h2",{id:"graphql-playground-and-voyager"},"GraphQL Playground and Voyager"),Object(c.b)("p",null,"With the GraphQL endpoint up and running, the next step is introspecting the GraphQL schema and try out some more queries. "),Object(c.b)("p",null,"To introspect, we are going to make use of ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/APIs-guru/graphql-voyager"}),"Voyager"),", a tool to visualize GraphQL API as an interactive graph. To add Voyager, download this ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize-demo/blob/master/clojure/pedestal/resources/static/voyager.html"}),"voyager.html")," file and put it under the ",Object(c.b)("em",{parentName:"p"},"resources/static")," directory."),Object(c.b)("p",null,"Then configure pedestal to use this ",Object(c.b)("em",{parentName:"p"},"static")," directory for serving static files."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure",metastring:"{7,10,11}","{7,10,11}":!0}),'(ns server\n  (:require ; ...\n            [io.pedestal.http :as http]))\n\n; ...\n(def service \n  (assoc\n    (lacinia-pedestal/service-map \n      lacinia-schema {:port     8080})\n    ::http/resource-path\n    "/static"))\n; ...\n')),Object(c.b)("p",null,"When you restart the server, the Voyager will be available at ",Object(c.b)("em",{parentName:"p"},"http://localhost:8080/voyager.html"),". A sample output would look like ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.graphqlize.org/html/sakila-voyager.html"}),"this"),"."),Object(c.b)("p",null,"Then to interact with the GraphQL API, let's add the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/prisma-labs/graphql-playground"}),"GraphQL Playground"),". Like Voyager, download this ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize-demo/blob/master/clojure/pedestal/resources/static/playground.html"}),"playground.html")," file and put in the ",Object(c.b)("em",{parentName:"p"},"static")," directory. "),Object(c.b)("p",null,"This GraphQL playground will be available at ",Object(c.b)("em",{parentName:"p"},"http://localhost:8080/playground.html")," after server restart. "),Object(c.b)("p",null,Object(c.b)("img",{src:a(128).default})),Object(c.b)("h2",{id:"next-steps"},"Next Steps"),Object(c.b)("p",null,"Congrats! You are on course to build impressive applications using GraphQLize in less time. To save yourself some more time, do refer ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/graphql_schema/types-and-fields"}),"this documentation")," to know more about how GraphQLize generates the GraphQL schema and the queries. "),Object(c.b)("p",null,"The sample code is available in ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize-demo/tree/master/clojure/pedestal"}),"this GitHub Repository"),"."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"You can also customize certain default behaviours of GraphQLize in future releases."))))}d.isMDXComponent=!0}}]);