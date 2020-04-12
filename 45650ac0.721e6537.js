(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return c}));var r=n(1),a=n(6),o=(n(0),n(155)),i={id:"sorting-query-results",title:"Sorting Query Results",sidebar_label:"Sorting Query Results"},l={id:"queries/sorting-query-results",title:"Sorting Query Results",description:"GraphQLize enables sorting the query results using the `orderBy` argument. By default any of the table columns can be used to sort the query results. ",source:"@site/docs/queries/sorting_query_results.mdx",permalink:"/docs/queries/sorting-query-results",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/queries/sorting_query_results.mdx",sidebar_label:"Sorting Query Results",sidebar:"docs",previous:{title:"Pagination using limit & offset",permalink:"/docs/queries/pagination/limit-and-offset"}},u=[{value:"Sorting by single column",id:"sorting-by-single-column",children:[]},{value:"Sorting by multiple columns",id:"sorting-by-multiple-columns",children:[]}],s={rightToc:u};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"GraphQLize enables sorting the query results using the ",Object(o.b)("inlineCode",{parentName:"p"},"orderBy")," argument. By default any of the table columns can be used to sort the query results. "),Object(o.b)("h2",{id:"sorting-by-single-column"},"Sorting by single column"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query languagesSortedByName {\n  # sorts using the `name` column in the `language` table\n  # highlight-next-line\n  languages(orderBy: {name: ASC}) {\n    name\n  }\n}\n")),Object(o.b)("p",null,"If you'd like to sort it descending order, just change ",Object(o.b)("inlineCode",{parentName:"p"},"ASC")," to ",Object(o.b)("inlineCode",{parentName:"p"},"DESC"),". "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query languagesSortedByNameInDescOrder {\n  # highlight-next-line\n  languages(orderBy: {name: DESC}) {\n    name\n  }\n}\n")),Object(o.b)("h2",{id:"sorting-by-multiple-columns"},"Sorting by multiple columns"),Object(o.b)("p",null,"You can sort by multiple columns as well!"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # sorts the `actor` table by the `first_name` column \n  # and then by `last_name` column in descending order\n  # highlight-next-line\n  actors(orderBy: {firstName: ASC, lastName: DESC}) {\n    firstName\n    lastName\n  }\n}\n")))}c.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,m=p["".concat(i,".").concat(g)]||p[g]||b[g]||o;return n?a.a.createElement(m,l({ref:t},s,{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);