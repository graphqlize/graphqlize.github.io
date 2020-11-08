(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(119)),l={id:"query-relationships",title:"Querying relationships of a table",sidebar_label:"Query Relationships"},o={unversionedId:"queries/query-relationships",id:"queries/query-relationships",isDocsHomePage:!1,title:"Querying relationships of a table",description:"For every table relationships in the database, GraphQLize creates appropriate field types as mentioned in this section.",source:"@site/docs/queries/query_relationships.md",slug:"/queries/query-relationships",permalink:"/docs/queries/query-relationships",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/queries/query_relationships.md",version:"current",sidebar_label:"Query Relationships",sidebar:"docs",previous:{title:"Querying Tables & Views",permalink:"/docs/queries/query-table-and-view"},next:{title:"Pagination using limit & offset",permalink:"/docs/queries/pagination/limit-and-offset"}},c=[{value:"Sample Queries",id:"sample-queries",children:[{value:"One to One",id:"one-to-one",children:[]},{value:"One to Many",id:"one-to-many",children:[]},{value:"Many to Many",id:"many-to-many",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For every table relationships in the database, GraphQLize creates appropriate field types as mentioned in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../graphql_schema/relationships"}),"this section"),"."),Object(i.b)("h2",{id:"sample-queries"},"Sample Queries"),Object(i.b)("h3",{id:"one-to-one"},"One to One"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # Querying `address` table by its primary key `address_id`\n  addressByAddressId(addressId: 1) {\n    # Column Name: `address`\n    address\n    # object relationship via `city_id` column in the `address` table\n    city {\n      # Column Name: city\n      city\n    }\n  }\n}\n")),Object(i.b)("p",null,"GraphQLize supports self referencing one-to-one relationships as well."),Object(i.b)("p",null,"For a table like ",Object(i.b)("inlineCode",{parentName:"p"},"employee"),","),Object(i.b)("p",null,Object(i.b)("img",{src:n(171).default})),Object(i.b)("p",null,"with the following data"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"id"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"first_name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"last_name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"employee_reports_to_id"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Andrew"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Adams"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"null")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Michael"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mitchell"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Robert"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"King"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2")))),Object(i.b)("p",null,"the following GraphQL query,"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  employeeById(id: 3) {\n    firstName\n    employeeReportsTo {\n      firstName\n      employeeReportsTo {\n        firstName\n      }\n    }\n  }\n}\n")),Object(i.b)("p",null,"will yield the following result"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "employeeById": {\n      "firstName": "Robert",\n      "employeeReportsTo": {\n        "firstName": "Michael",\n        "employeeReportsTo": {\n          "firstName": "Andrew"\n        }\n      }\n    }\n  }\n}\n')),Object(i.b)("h3",{id:"one-to-many"},"One to Many"),Object(i.b)("p",null,Object(i.b)("img",{src:n(129).default})),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # Querying `country` table by its primary key `country_id`\n  countryByCountryId(countryId: 1) {\n    # Column Name: `country`\n    country\n    # list relationship via `country_id` column in the `city` table\n    cities {\n      city\n    }\n  }\n}\n")),Object(i.b)("p",null,Object(i.b)("img",{src:n(171).default})),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # Querying `employee` table by its primary key `id`\n  employeeById(id: 1) {\n    # Column Name: `first_name`\n    firstName\n    # list relationship via `employee_reports_to_id` column in the same `employee` table\n    employeeReportsToEmployees {\n      firstName\n    }\n  }\n}\n")),Object(i.b)("p",null,"In the above the auto generated name ",Object(i.b)("inlineCode",{parentName:"p"},"employeeReportsToEmployees")," (removal of ",Object(i.b)("inlineCode",{parentName:"p"},"_id")," suffix and pluraize the target table ",Object(i.b)("inlineCode",{parentName:"p"},"employee"),") is not meaningful. We can use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql.org/learn/queries/#aliases"}),"GraphQL field alias")," to make it better like below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:"{4}","{4}":!0}),"query {\n  employeeById(id: 1) {\n    firstName\n    directReportees: employeeReportsToEmployees {\n      firstName\n    }\n  }\n}\n")),Object(i.b)("p",null,"Now, the query result would look like"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:"{5}","{5}":!0}),'{\n  "data": {\n    "employeeById": {\n      "firstName": "Andrew",\n      "directReportees": [\n        {\n          "firstName": "Michael"\n        }\n      ]\n    }\n  }\n}\n')),Object(i.b)("h3",{id:"many-to-many"},"Many to Many"),Object(i.b)("p",null,Object(i.b)("img",{src:n(130).default})),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # Querying `actor` table by its primary key `actor_id`\n  actorByActorId(actorId: 1) {\n    # Column Name: `first_name`\n    firstName\n    # list relationship via `film_id` & `actor_id` columns in the `film_actor` table\n    films {\n      title\n    }\n  }\n}\n")))}b.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.a.createElement(d,o({ref:t},s,{components:n})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},129:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/address_city_country_er_diagram-d3ff237985d0b8246ee3aa153a6fd3e1.png"},130:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/film_actor_er_diagram-ca6088fd607535ce1235ab47a46cc360.png"},171:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/employee_self_ref_er_diagram-6c0bffcc52ea3b2a905893c1184cfad7.png"}}]);