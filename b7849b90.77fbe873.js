(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(2),a=(n(0),n(161));const o={id:"graphqlize-update-1",title:"GraphQLize Update (#1) - Pagination, Scalar Types, Scala & Kotlin Support",author:"Tamizhvendan S",author_title:"Author, GraphQLize",author_url:"https://github.com/tamizhvendan",author_image_url:"https://avatars1.githubusercontent.com/u/1128916?v=4",tags:["announcement","clojure","java","graphql","postgres","mysql","scala","kotlin"]},i={permalink:"/blog/graphqlize-update-1",source:"@site/blog/2020-04-04-graphqlize-update-1.mdx",description:"Hello World,",date:"2020-04-04T00:00:00.000Z",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"clojure",permalink:"/blog/tags/clojure"},{label:"java",permalink:"/blog/tags/java"},{label:"graphql",permalink:"/blog/tags/graphql"},{label:"postgres",permalink:"/blog/tags/postgres"},{label:"mysql",permalink:"/blog/tags/mysql"},{label:"scala",permalink:"/blog/tags/scala"},{label:"kotlin",permalink:"/blog/tags/kotlin"}],title:"GraphQLize Update (#1) - Pagination, Scalar Types, Scala & Kotlin Support",readingTime:3.13,truncated:!0,prevItem:{title:"GraphQLize Update (#2) - Supports Sorting, Filtering & MySQL Boolean Types",permalink:"/blog/graphqlize-update-2"},nextItem:{title:"Announcing GraphQLize Alpha",permalink:"/blog/announcing-graphqlize-alpha"}},l=[],p={rightToc:l};function c({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hello World, "),Object(a.b)("p",null,"Thank you, everyone, for the words of praise and encouragement during the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.graphqlize.org/blog/announcing-graphqlize-alpha"}),"announcement of GraphQLize")," two weeks ago. I am glad to see 100+ \u2b50\ufe0fs in GitHub. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize"}),"GraphQLize")," is my first-ever OSS project which achieved this tiny milestone. The journey just began, and a long way to go!"),Object(a.b)("p",null,"I am working on a biweekly iteration and as planned completed by the first iteration of GraphQLize. In this blog post, I am going to share what's new in GraphQLize and what is in the pipeline for the next iteration. "))}c.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,h=s["".concat(i,".").concat(b)]||s[b]||g[b]||o;return n?a.a.createElement(h,l({ref:t},c,{components:n})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);