(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),l=(n(0),n(164)),i={id:"query-relationships",title:"Querying relationships of a table",sidebar_label:"Query Relationships"},o={id:"queries/query-relationships",title:"Querying relationships of a table",description:"For every table relationships in the database, GraphQLize creates appropriate field types as mentioned in this section.",source:"@site/docs/queries/query_relationships.md",permalink:"/docs/queries/query-relationships",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/queries/query_relationships.md",sidebar_label:"Query Relationships",sidebar:"docs",previous:{title:"Querying Tables & Views",permalink:"/docs/queries/query-table-and-view"},next:{title:"Pagination using limit & offset",permalink:"/docs/queries/pagination/limit-and-offset"}},c=[{value:"Sample Queries",id:"sample-queries",children:[{value:"One to One",id:"one-to-one",children:[]},{value:"One to Many",id:"one-to-many",children:[]},{value:"Many to Many",id:"many-to-many",children:[]}]}],b={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"For every table relationships in the database, GraphQLize creates appropriate field types as mentioned in ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"../graphql_schema/relationships"}),"this section"),"."),Object(l.b)("h2",{id:"sample-queries"},"Sample Queries"),Object(l.b)("h3",{id:"one-to-one"},"One to One"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # Querying `address` table by its primary key `address_id`\n  addressByAddressId(addressId: 1) {\n    # Column Name: `address`\n    address\n    # object relationship via `city_id` column in the `address` table\n    city {\n      # Column Name: city\n      city\n    }\n  }\n}\n")),Object(l.b)("p",null,"GraphQLize supports self referencing one-to-one relationships as well."),Object(l.b)("p",null,"For a table like ",Object(l.b)("inlineCode",{parentName:"p"},"employee"),","),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/employee_self_ref_er_diagram.png",alt:null}))),Object(l.b)("p",null,"with the following data"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"id"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"first_name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"last_name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"employee_reports_to_id"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Andrew"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Adams"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"null")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Michael"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mitchell"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Robert"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"King"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2")))),Object(l.b)("p",null,"the following GraphQL query,"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  employeeById(id: 3) {\n    firstName\n    employeeReportsTo {\n      firstName\n      employeeReportsTo {\n        firstName\n      }\n    }\n  }\n}\n")),Object(l.b)("p",null,"will yield the following result"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "employeeById": {\n      "firstName": "Robert",\n      "employeeReportsTo": {\n        "firstName": "Michael",\n        "employeeReportsTo": {\n          "firstName": "Andrew"\n        }\n      }\n    }\n  }\n}\n')),Object(l.b)("h3",{id:"one-to-many"},"One to Many"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/address_city_country_er_diagram.png",alt:null}))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # Querying `country` table by its primary key `country_id`\n  countryByCountryId(countryId: 1) {\n    # Column Name: `country`\n    country\n    # list relationship via `country_id` column in the `city` table\n    cities {\n      city\n    }\n  }\n}\n")),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/employee_self_ref_er_diagram.png",alt:null}))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # Querying `employee` table by its primary key `id`\n  employeeById(id: 1) {\n    # Column Name: `first_name`\n    firstName\n    # list relationship via `employee_reports_to_id` column in the same `employee` table\n    employeeReportsToEmployees {\n      firstName\n    }\n  }\n}\n")),Object(l.b)("p",null,"In the above the auto generated name ",Object(l.b)("inlineCode",{parentName:"p"},"employeeReportsToEmployees")," (removal of ",Object(l.b)("inlineCode",{parentName:"p"},"_id")," suffix and pluraize the target table ",Object(l.b)("inlineCode",{parentName:"p"},"employee"),") is not meaningful. We can use ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql.org/learn/queries/#aliases"}),"GraphQL field alias")," to make it better like below."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:"{4}","{4}":!0}),"query {\n  employeeById(id: 1) {\n    firstName\n    directReportees: employeeReportsToEmployees {\n      firstName\n    }\n  }\n}\n")),Object(l.b)("p",null,"Now, the query result would look like"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:"{5}","{5}":!0}),'{\n  "data": {\n    "employeeById": {\n      "firstName": "Andrew",\n      "directReportees": [\n        {\n          "firstName": "Michael"\n        }\n      ]\n    }\n  }\n}\n')),Object(l.b)("h3",{id:"many-to-many"},"Many to Many"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/film_actor_er_diagram.png",alt:null}))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # Querying `actor` table by its primary key `actor_id`\n  actorByActorId(actorId: 1) {\n    # Column Name: `first_name`\n    firstName\n    # list relationship via `film_id` & `actor_id` columns in the `film_actor` table\n    films {\n      title\n    }\n  }\n}\n")))}p.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||l;return n?r.a.createElement(d,o({ref:t},b,{components:n})):r.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<l;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);