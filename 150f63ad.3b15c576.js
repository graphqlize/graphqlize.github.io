(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||i;return a?r.a.createElement(m,o({ref:t},l,{components:a})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},120:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},121:function(e,t,a){"use strict";var n=a(0),r=a(122);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},122:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},123:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(121),c=a(120),o=a(49),s=a.n(o);const l=37,p=39;t.a=function(e){const{block:t,children:a,defaultValue:o,values:b,groupId:d,className:u}=e,{tabGroupChoices:m,setTabGroupChoices:h}=Object(i.a)(),[g,j]=Object(n.useState)(o),[O,v]=Object(n.useState)(!1);if(null!=d){const e=m[d];null!=e&&e!==g&&b.some((t=>t.value===e))&&j(e)}const f=e=>{j(e),null!=d&&h(d,e)},y=[],N=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},w=()=>{v(!1)};return Object(n.useEffect)((()=>(window.addEventListener("keydown",N),window.addEventListener("mousedown",w),()=>{window.removeEventListener("keydown",N),window.removeEventListener("mousedown",w)})),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},u)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===e}),style:O?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case p:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),N(e)},onFocus:()=>f(e),onClick:()=>{f(e),v(!1)},onPointerDown:()=>v(!1)},t)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((e=>e.props.value===g))[0]))}},124:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},128:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/graphql-playground-3ed9e7bc5cee10c4e89be27df856dbb8.png"},67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),i=(a(0),a(119)),c=a(123),o=a(124),s={id:"ring",title:"Ring",sidebar_label:"Ring"},l={unversionedId:"getting_started/clojure/ring",id:"getting_started/clojure/ring",isDocsHomePage:!1,title:"Ring",description:"GraphQLize built on top of Lacinia, a de-facto library for implementing GraphQL APIs in Clojure.",source:"@site/docs/getting_started/clojure/ring.mdx",slug:"/getting_started/clojure/ring",permalink:"/docs/getting_started/clojure/ring",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/getting_started/clojure/ring.mdx",version:"current",sidebar_label:"Ring",sidebar:"docs",previous:{title:"Pedestal",permalink:"/docs/getting_started/clojure/pedestal"},next:{title:"Vanilla Clojure",permalink:"/docs/getting_started/clojure/vanilla"}},p=[{value:"Adding Dependencies",id:"adding-dependencies",children:[]},{value:"Configuring DataSource",id:"configuring-datasource",children:[]},{value:"Creating Lacinia Schema",id:"creating-lacinia-schema",children:[]},{value:"Adding GraphQL Endpoint",id:"adding-graphql-endpoint",children:[{value:"Test Drive",id:"test-drive",children:[]}]},{value:"GraphQL Playground and Voyager",id:"graphql-playground-and-voyager",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:p};function d(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"GraphQLize built on top of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://lacinia.readthedocs.io/en/latest/"}),"Lacinia"),", a de-facto library for implementing GraphQL APIs in Clojure."),Object(i.b)("p",null,"Getting started with GraphQLize using Ring involves only few steps. Let's dive in."),Object(i.b)("h2",{id:"adding-dependencies"},"Adding Dependencies"),Object(i.b)("p",null,"Create a new Clojure project using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/seancorfield/clj-new"}),"deps")," (or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://leiningen.org/"}),"leiningen"),") and add the GraphQLize and other dependencies."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://clojars.org/org.graphqlize/graphqlize"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/clojars/v/org.graphqlize/graphqlize.svg",alt:"Clojars Project"})))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clj",metastring:"{4}","{4}":!0}),';; deps.edn\n{:paths ["src" "resources"]\n :deps  {org.clojure/clojure              {:mvn/version "1.10.1"}\n         org.graphqlize/graphqlize        {:mvn/version "0.1.0-alpha21"}\n         ;; db connection pool\n         hikari-cp                        {:mvn/version "2.10.0"}\n         ;; for postgres\n         org.postgresql/postgresql        {:mvn/version "42.2.8"}\n         ;; for MySQL\n         mysql/mysql-connector-java       {:mvn/version "8.0.19"}\n         ;; Ring Router\n         metosin/reitit             {:mvn/version "0.4.2"}\n         ;; Web Server\n         ring/ring-jetty-adapter    {:mvn/version "1.7.1"}}}\n')),Object(i.b)("h2",{id:"configuring-datasource"},"Configuring DataSource"),Object(i.b)("p",null,"The next step is configuring the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/7/docs/api/javax/sql/DataSource.html"}),"DataSource"),". In this example, we are going to use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/brettwooldridge/HikariCP"}),"Hikari Connection Pool")," to manage the database connection."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"For brevity, this sample uses ",Object(i.b)("inlineCode",{parentName:"p"},"def")," to define the states. In a real-world project, you can replace it with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/stuartsierra/component"}),"Component"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tolitius/mount"}),"Mount"),", or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/weavejester/integrant"}),"Integrant"),"."))),Object(i.b)(c.a,{defaultValue:"postgres",values:[{label:"Postgres",value:"postgres"},{label:"MySQL",value:"mysql"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"postgres",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),';; src/server.clj\n(ns server\n  (:require [hikari-cp.core :as hikari]))\n\n(def db-spec (hikari/make-datasource {:adapter           "postgresql"\n                                      :database-name     "sakila"\n                                      :server-name       "localhost"\n                                      :port-number       5432\n                                      :maximum-pool-size 1\n                                      :username          "postgres"\n                                      :password          "postgres"}))\n'))),Object(i.b)(o.a,{value:"mysql",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),';; src/server.clj\n(ns server\n  (:require [hikari-cp.core :as hikari]))\n\n(def db-spec (hikari/make-datasource {:server-name       "localhost"\n                                      :maximum-pool-size 1\n                                      :jdbc-url          "jdbc:mysql://localhost:3306/sakila"\n                                      :driver-class-name "com.mysql.cj.jdbc.MysqlDataSource"\n                                      :username          "root"\n                                      :password          "mysql123"}))\n')))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Make sure you are changing the above values to refer your database connection. The above example assumes that you are using the ",Object(i.b)("em",{parentName:"p"},"sakila")," database created from this ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jOOQ/jOOQ/tree/master/jOOQ-examples/Sakila"}),"JOOQ's example repository"),".  "))),Object(i.b)("h2",{id:"creating-lacinia-schema"},"Creating Lacinia Schema"),Object(i.b)("p",null,"Then create a lacinia schema from the data source using GraphQLize.  "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure",metastring:"{3,7}","{3,7}":!0}),"(ns server\n  (:require ; ...\n            [graphqlize.lacinia.core :as l]))\n\n(def db-spec ...)\n\n(def lacinia-schema (l/schema db-spec))\n")),Object(i.b)("h2",{id:"adding-graphql-endpoint"},"Adding GraphQL Endpoint"),Object(i.b)("p",null,"The final step is adding a Ring route ",Object(i.b)("inlineCode",{parentName:"p"},"/graphql")," to expose the GraphQL API. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure",metastring:"{12,15,17}","{12,15,17}":!0}),'(ns server\n  (:require ;...\n            [ring.adapter.jetty :as jetty]\n            [ring.util.request :as request]\n            [reitit.ring :as ring]\n            [com.walmartlabs.lacinia :as lacinia]\n            [clojure.data.json :as json]))\n; ...\n\n(def lacinia-schema ...)\n\n(defn graphql-handler [request]\n  (let [grapql-request (json/read-str (request/body-string request) :key-fn keyword)\n        {:keys [query variables]} grapql-request\n        result (lacinia/execute lacinia-schema query variables nil)]\n    {:status  200\n     :body    (json/write-str result)\n     :headers {"Content-Type" "application/json"}}))\n\n(def app\n  (ring/ring-handler (ring/router ["/graphql" {:post handler}])))\n\n(defn start-server []\n  (jetty/run-jetty app {:join? false\n                        :port  8080}))\n\n(defn -main []\n  (start-server))\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-handler")," function does the following"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It de-serializes the GraphQL request body from the Ring request."),Object(i.b)("li",{parentName:"ul"},"Then using the ",Object(i.b)("inlineCode",{parentName:"li"},"lacinia-schema")," created in the previous step, it executes this GraphQL request by invoking the Lacinia's ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://walmartlabs.github.io/apidocs/lacinia/com.walmartlabs.lacinia.html#var-execute"}),"execute")," function."),Object(i.b)("li",{parentName:"ul"},"Finally, it serializes the ",Object(i.b)("inlineCode",{parentName:"li"},"result")," of the ",Object(i.b)("inlineCode",{parentName:"li"},"execute")," function and send it back to the client as a Ring response.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This sample uses ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/metosin/reitit"}),"Reitit")," without ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://metosin.github.io/reitit/coercion/coercion.html"}),"coercion")," for simplicity. An example of the above sample using Reitit's ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://metosin.github.io/reitit/coercion/clojure_spec_coercion.html"}),"Spec coercion")," is available in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize-demo/blob/master/clojure/ring/src/server_with_coercion.clj"}),"this file"),"."))),Object(i.b)("h3",{id:"test-drive"},"Test Drive"),Object(i.b)("p",null,"To do a test drive of this implementation, start the server"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"> clj -m server\n")),Object(i.b)("p",null," and hit the endpoint via curl."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'> curl -X POST \\\n  --data \'{"query": "query { actorByActorId(actorId: 1){firstName}}"}\' \\\n  -H "Content-Type: application/json" \\\n  http://localhost:8080/graphql\n')),Object(i.b)("p",null,"You'll get a response like below."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "actorByActorId": {\n      "firstName": "PENELOPE"\n    }\n  }\n}\n')),Object(i.b)("h2",{id:"graphql-playground-and-voyager"},"GraphQL Playground and Voyager"),Object(i.b)("p",null,"With the GraphQL endpoint up and running, the next step is introspecting the GraphQL schema and try out some more queries. "),Object(i.b)("p",null,"To introspect, we are going to make use of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/APIs-guru/graphql-voyager"}),"Voyager"),", a tool to visualize GraphQL API as an interactive graph. To add Voyager, download this ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize-demo/blob/master/clojure/ring/resources/static/voyager.html"}),"voyager.html")," file and put it under the ",Object(i.b)("em",{parentName:"p"},"resources/static")," directory."),Object(i.b)("p",null,"Then configure Ring to use this ",Object(i.b)("em",{parentName:"p"},"static")," directory for serving static files."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),'(ns server\n  (:require ;...\n            [ring.middleware.resource :as resource]\n            [ring.middleware.content-type :as content-type]\n            [ring.middleware.not-modified :as not-modified]))\n; ...\n(defn handler ...)\n\n(def app\n  (-> (ring/ring-handler (ring/router ["/graphql" {:post handler}]))\n      (resource/wrap-resource "static")\n      content-type/wrap-content-type\n      not-modified/wrap-not-modified))\n')),Object(i.b)("p",null,"When you restart the server, the Voyager will be available at ",Object(i.b)("em",{parentName:"p"},"http://localhost:8080/voyager.html"),". A sample output would look like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.graphqlize.org/html/sakila-voyager.html"}),"this"),"."),Object(i.b)("p",null,"Then to interact with the GraphQL API, let's add the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/prisma-labs/graphql-playground"}),"GraphQL Playground"),". Like Voyager, download this ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize-demo/blob/master/clojure/ring/resources/static/playground.html"}),"playground.html")," file and put in the ",Object(i.b)("em",{parentName:"p"},"static")," directory. "),Object(i.b)("p",null,"This GraphQL playground will be available at ",Object(i.b)("em",{parentName:"p"},"http://localhost:8080/playground.html")," after server restart. "),Object(i.b)("p",null,Object(i.b)("img",{src:a(128).default})),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"Congrats! You are on course to build impressive applications using GraphQLize in less time. To save yourself some more time, do refer ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/graphql_schema/types-and-fields"}),"this documentation")," to know more about how GraphQLize generates the GraphQL schema and the queries. "),Object(i.b)("p",null,"The sample code is available in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize-demo/tree/master/clojure/ring"}),"this GitHub Repository"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can also customize certain default behaviours of GraphQLize in future releases."))))}d.isMDXComponent=!0}}]);