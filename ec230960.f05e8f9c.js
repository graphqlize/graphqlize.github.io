(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(6),r=(n(0),n(156)),o={id:"limit-and-offset",title:"Pagination using limit & offset",sidebar_label:"limit & offset"},s={id:"queries/pagination/limit-and-offset",title:"Pagination using limit & offset",description:"Using `offset` and `limit` parameters to paginate data is one of the most widely used techniques for pagination.",source:"@site/docs/queries/pagination/limit-and-offset.mdx",permalink:"/docs/queries/pagination/limit-and-offset",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/queries/pagination/limit-and-offset.mdx",sidebar_label:"limit & offset",sidebar:"docs",previous:{title:"Querying relationships of a table",permalink:"/docs/queries/query-relationships"},next:{title:"Sorting Query Results",permalink:"/docs/queries/sorting-query-results"}},c=[{value:"Using Limit alone",id:"using-limit-alone",children:[]},{value:"Using Offset with Limit",id:"using-offset-with-limit",children:[]},{value:"Paginate Nested Objects",id:"paginate-nested-objects",children:[{value:"One to Many Relationships",id:"one-to-many-relationships",children:[]},{value:"Many to Many Relationships",id:"many-to-many-relationships",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"offset")," and ",Object(r.b)("inlineCode",{parentName:"p"},"limit")," parameters to paginate data is one of the most widely used techniques for pagination."),Object(r.b)("p",null,"Clients provide the ",Object(r.b)("inlineCode",{parentName:"p"},"limit")," parameter indicating the number of results they want per page, and the ",Object(r.b)("inlineCode",{parentName:"p"},"offset")," parameter to specify the results to skip."),Object(r.b)("p",null,"GraphQLize supports these parameters to paginate via table or view queries. It also supports pagination of nested objects."),Object(r.b)("h2",{id:"using-limit-alone"},"Using Limit alone"),Object(r.b)("p",null,"By using the limit alone, we can restrict the number of results that we want."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  actors(limit: 2) {\n    actorId\n    firstName\n    lastName\n  }\n}\n")),Object(r.b)("p",null,"The above query returns two actor's details as output."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "actors": [\n      {\n        "actorId": 1,\n        "firstName": "PENELOPE",\n        "lastName": "GUINESS"\n      },\n      {\n        "actorId": 2,\n        "firstName": "NICK",\n        "lastName": "WAHLBERG"\n      }\n    ]\n  }\n}\n')),Object(r.b)("h2",{id:"using-offset-with-limit"},"Using Offset with Limit"),Object(r.b)("p",null,"Let's assume in the above example we want to view the next two actors. We can achieve it by using ",Object(r.b)("inlineCode",{parentName:"p"},"offset")," along with the ",Object(r.b)("inlineCode",{parentName:"p"},"limit"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  actors(limit: 2, offset: 2) {\n    actorId\n    firstName\n    lastName\n  }\n}\n")),Object(r.b)("p",null,"It returns"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "actors": [\n      {\n        "actorId": 3,\n        "firstName": "ED",\n        "lastName": "CHASE"\n      },\n      {\n        "actorId": 4,\n        "firstName": "JENNIFER",\n        "lastName": "DAVIS"\n      }\n    ]\n  }\n}\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"MySQL ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://dev.mysql.com/doc/refman/8.0/en/select.html#id4651990"}),"doesn't support")," using the ",Object(r.b)("inlineCode",{parentName:"p"},"offset")," paramater alone."))),Object(r.b)("h2",{id:"paginate-nested-objects"},"Paginate Nested Objects"),Object(r.b)("p",null,"GraphQLize supports using ",Object(r.b)("inlineCode",{parentName:"p"},"limit")," & ",Object(r.b)("inlineCode",{parentName:"p"},"offset")," in the nested objects as well. "),Object(r.b)("h3",{id:"one-to-many-relationships"},"One to Many Relationships"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/address_city_country_er_diagram.png",alt:null}))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:"{4}","{4}":!0}),"query {\n  countryByCountryId(countryId: 6) {\n    country\n    cities(limit: 2, offset : 4) {\n      city\n    }\n  }\n}\n")),Object(r.b)("h3",{id:"many-to-many-relationships"},"Many to Many Relationships"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/film_actor_er_diagram.png",alt:null}))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:"{4}","{4}":!0}),"query {\n  actorByActorId(actorId: 1) {\n    firstName\n    films(limit: 5, offset: 5) {\n      title\n    }\n  }\n}\n")))}p.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||r;return n?i.a.createElement(d,s({ref:t},l,{components:n})):i.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);