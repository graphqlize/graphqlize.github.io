(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{118:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return s}));var r=t(1),a=t(6),l=(t(0),t(158)),i={id:"filtering-query-results",title:"Filtering Query Results",sidebar_label:"Filtering Query Results"},c={id:"queries/filtering-query-results",title:"Filtering Query Results",description:"You can filter the query results in GraphQLize using the `where` argument. ",source:"@site/docs/queries/filtering_query_results.mdx",permalink:"/docs/queries/filtering-query-results",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/queries/filtering_query_results.mdx",sidebar_label:"Filtering Query Results",sidebar:"docs",previous:{title:"Sorting Query Results",permalink:"/docs/queries/sorting-query-results"}},o=[{value:"Comparison Operators",id:"comparison-operators",children:[{value:"Equal To",id:"equal-to",children:[]},{value:"Not Equal To",id:"not-equal-to",children:[]},{value:"Greater Than",id:"greater-than",children:[]},{value:"Greater Than Or Equal To",id:"greater-than-or-equal-to",children:[]},{value:"Less Than",id:"less-than",children:[]},{value:"Less Than Or Equal To",id:"less-than-or-equal-to",children:[]},{value:"Between",id:"between",children:[]},{value:"Is Null",id:"is-null",children:[]},{value:"Is Not Null",id:"is-not-null",children:[]},{value:"IN",id:"in",children:[]},{value:"NOT IN",id:"not-in",children:[]},{value:"String Comparison",id:"string-comparison",children:[]}]},{value:"Logical Operators",id:"logical-operators",children:[{value:"AND",id:"and",children:[]},{value:"OR",id:"or",children:[]},{value:"NOT",id:"not",children:[]}]},{value:"Filtering nested objects",id:"filtering-nested-objects",children:[]}],u={rightToc:o};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"You can filter the query results in GraphQLize using the ",Object(l.b)("inlineCode",{parentName:"p"},"where")," argument. "),Object(l.b)("h2",{id:"comparison-operators"},"Comparison Operators"),Object(l.b)("h3",{id:"equal-to"},"Equal To"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  cities(where: {cityId: {eq: 3}}) {\n    city\n  }\n}\n")),Object(l.b)("h3",{id:"not-equal-to"},"Not Equal To"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  # highlight-next-line\n  languages(where: {name: {neq: "English"}}) {\n    name\n  }\n}\n')),Object(l.b)("h3",{id:"greater-than"},"Greater Than"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  payments(where: {amount: {gt: 11.99}}) {\n    rentalId\n    amount\n  }\n}\n")),Object(l.b)("h3",{id:"greater-than-or-equal-to"},"Greater Than Or Equal To"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  payments(where: {amount: {gte: 11.99}}) {\n    rentalId\n    amount\n  }\n}\n")),Object(l.b)("h3",{id:"less-than"},"Less Than"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  payments(where: {amount: {lt: 6.99}}) {\n    rentalId\n    amount\n  }\n}\n")),Object(l.b)("h3",{id:"less-than-or-equal-to"},"Less Than Or Equal To"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  payments(where: {amount: {lte: 6.99}}) {\n    rentalId\n    amount\n  }\n}\n")),Object(l.b)("h3",{id:"between"},"Between"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  # highlight-next-line\n  payments(where: {paymentDate: {between: {from: "2005-08-23T21:00:00", to: "2005-08-23T21:03:00"}}}) {\n    rentalId\n  }\n}\n')),Object(l.b)("h3",{id:"is-null"},"Is Null"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  employees(where: {employeeReportsToId: {isNull: true}}) {\n    firstName\n    lastName\n  }\n}\n")),Object(l.b)("h3",{id:"is-not-null"},"Is Not Null"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  employees(where: {employeeReportsToId: {isNotNull: true}}) {\n    firstName\n    lastName\n  }\n}\n")),Object(l.b)("h3",{id:"in"},"IN"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  payments(where: {customerId: {in: [1, 2]}}) {\n    paymentId\n    amount\n  }\n}\n")),Object(l.b)("h3",{id:"not-in"},"NOT IN"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  payments(where: {customerId: {notIn: [1, 2]}}) {\n    paymentId\n    amount\n  }\n}\n")),Object(l.b)("h3",{id:"string-comparison"},"String Comparison"),Object(l.b)("h4",{id:"like"},"Like"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  # highlight-next-line\n  countries(where: {country: {like: "A%"}}) {\n    country\n  }\n}\n')),Object(l.b)("h4",{id:"not-like"},"Not Like"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  # highlight-next-line\n  countries(where: {country: {notLike: "A%"}}) {\n    country\n  }\n}\n')),Object(l.b)("h2",{id:"logical-operators"},"Logical Operators"),Object(l.b)("h3",{id:"and"},"AND"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # payments of a customer with the id `1` \n  # and amount greater than `5.99`\n  # highlight-next-line\n  payments(where: {and: {customerId: {eq: 1}, amount: {gt: 5.99}}}) {\n    paymentId\n    amount\n  }\n}\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"and")," also supports list of conditions. "),Object(l.b)("p",null,"The above query can be rewritten as"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line \n  payments(where: {and: [{customerId: {eq: 1}, amount: {gt: 5.99}}]}) {\n    paymentId\n    amount\n  }\n}\n")),Object(l.b)("h3",{id:"or"},"OR"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"or")," is similar to ",Object(l.b)("inlineCode",{parentName:"p"},"and")," in syntax. It accepts both a single condition or a list of conditions. "),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  # languages with the name either "English" or "French"\n  # highlight-next-line\n  languages(where: {or: [{name: {eq: "English"}}, {name: {eq: "French"}}]}) {\n    languageId\n    name\n  }\n}\n')),Object(l.b)("h3",{id:"not"},"NOT"),Object(l.b)("p",null,"Using the ",Object(l.b)("inlineCode",{parentName:"p"},"not")," operator we can invert the filter condition. "),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  # languages with the name except "English" or "French"\n  # highlight-next-line\n  languages(where: {not: {or: [{name: {eq: "English"}}, {name: {eq: "French"}}]}}) {\n    languageId\n    name\n  }\n}\n')),Object(l.b)("h2",{id:"filtering-nested-objects"},"Filtering nested objects"),Object(l.b)("p",null,"GraphQLize also supports filtering nested objects. "),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  countryByCountryId(countryId: 2) {\n    country\n    # filter one-to-many relationship\n    # highlight-next-line\n    cities(where: {city: {like: "B%"}}) {\n      cityId\n      city\n    }\n  }\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  actorByActorId(actorId: 148) {\n    firstName\n    # filter many-to-many relationship\n    # highlight-next-line\n    films(where: {title: {like: "S%"}}) {\n      title\n    }\n  }\n}\n')))}s.isMDXComponent=!0},158:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=s(t),h=r,g=b["".concat(i,".").concat(h)]||b[h]||p[h]||l;return t?a.a.createElement(g,c({ref:n},u,{components:t})):a.a.createElement(g,c({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=h;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<l;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);