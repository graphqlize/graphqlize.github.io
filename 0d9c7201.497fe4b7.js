(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{119:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return y}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l({},r,{},e)),t},p=function(e){var r=s(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=n,y=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return t?a.a.createElement(y,l({ref:r},u,{components:t})):a.a.createElement(y,l({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return s}));var n=t(2),a=t(6),i=(t(0),t(119)),o={id:"query-table-and-view",title:"Querying Tables & Views",sidebar_label:"Query Tables & Views"},l={unversionedId:"queries/query-table-and-view",id:"queries/query-table-and-view",isDocsHomePage:!1,title:"Querying Tables & Views",description:"GraphQLize generates GraphQL query types for all the tables and the views by default.",source:"@site/docs/queries/query_table_and_view.mdx",slug:"/queries/query-table-and-view",permalink:"/docs/queries/query-table-and-view",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/queries/query_table_and_view.mdx",version:"current",sidebar_label:"Query Tables & Views",sidebar:"docs",previous:{title:"Querying tables by its primary key",permalink:"/docs/queries/query-by-primary-key"},next:{title:"Querying relationships of a table",permalink:"/docs/queries/query-relationships"}},c=[{value:"Sample Queries",id:"sample-queries",children:[]}],u={rightToc:c};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"GraphQLize generates GraphQL query types for all the tables and the views by default."),Object(i.b)("p",null,"For a table and a view like below,"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE actor (\n-- ...\n);\n\nCREATE VIEW customer_list\nAS\n-- ...\n")),Object(i.b)("p",null,"GraphQLize generates the following queryies"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"type QueryRoot {\n  actors: [Actor]!\n  customerLists: [CustomerList]!\n  # ...\n}\n\nschema {\n  query: QueryRoot\n}\n")),Object(i.b)("p",null,"The query name generation follows the below convention."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"camel-case(pluralize(table-or-view-name))")),Object(i.b)("h2",{id:"sample-queries"},"Sample Queries"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # Table Name: `actor`\n  actors {\n    # Column Name: `first_name`\n    firstName\n    # Column Name: `last_name`\n    lastName\n  }\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # View Name: `customer_list`\n  customerLists {\n    # Column Name: `name`\n    name\n    # Column Name: `zip code`\n    zipCode\n  }\n}\n")))}s.isMDXComponent=!0}}]);