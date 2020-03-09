(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var a=r(1),n=r(6),c=(r(0),r(139)),o={id:"custom-scalar-types",title:"Custom Scalar Types",sidebar_label:"Custom Scalar Types"},i={id:"graphql_schema/custom-scalar-types",title:"Custom Scalar Types",description:"In addition to the GraphQL standard data types, GraphQLize supports the following scalar types for creating type-safe GraphQL schemas.",source:"@site/docs/graphql_schema/custom_scalar_types.md",permalink:"/docs/graphql_schema/custom-scalar-types",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/graphql_schema/custom_scalar_types.md",sidebar_label:"Custom Scalar Types",sidebar:"docs",previous:{title:"Relationships",permalink:"/docs/graphql_schema/relationships"},next:{title:"Querying a table by its primary key",permalink:"/docs/queries/query-by-primary-key"}},p=[{value:"UUID",id:"uuid",children:[]},{value:"Other Scalar Types - Work In Progress",id:"other-scalar-types---work-in-progress",children:[]}],s={rightToc:p};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"In addition to the GraphQL standard data types, GraphQLize supports the following scalar types for creating type-safe GraphQL schemas."),Object(c.b)("h2",{id:"uuid"},"UUID"),Object(c.b)("p",null,"A field whose value is ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Universally_unique_identifier"}),"UUID"),"."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Database Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Column Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Postgres"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://www.postgresql.org/docs/current/datatype-uuid.html"}),"UUID"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MySQL"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/graphqlize/graphqlize/issues/11"}),"Yet to support"))))),Object(c.b)("h2",{id:"other-scalar-types---work-in-progress"},"Other Scalar Types - Work In Progress"))}l.isMDXComponent=!0},139:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return r?n.a.createElement(m,i({ref:t},s,{components:r})):n.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);