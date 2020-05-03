(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{118:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(1),r=t(6),l=(t(0),t(158)),i={id:"filtering-query-results",title:"Filtering Query Results",sidebar_label:"Filtering Query Results"},o={id:"queries/filtering-query-results",title:"Filtering Query Results",description:"You can filter the query results in GraphQLize using the `where` argument. ",source:"@site/docs/queries/filtering_query_results.mdx",permalink:"/docs/queries/filtering-query-results",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/queries/filtering_query_results.mdx",sidebar_label:"Filtering Query Results",sidebar:"docs",previous:{title:"Sorting Query Results",permalink:"/docs/queries/sorting-query-results"}},c=[{value:"Comparison Operators",id:"comparison-operators",children:[{value:"Equal To, Not Equal To",id:"equal-to-not-equal-to",children:[]},{value:"Greater Than, Greater Than Or Equal To",id:"greater-than-greater-than-or-equal-to",children:[]},{value:"Less Than, Less Than Or Equal To",id:"less-than-less-than-or-equal-to",children:[]},{value:"Between",id:"between",children:[]},{value:"Is Null, Is Not Null",id:"is-null-is-not-null",children:[]},{value:"IN, NOT IN",id:"in-not-in",children:[]},{value:"String Comparison",id:"string-comparison",children:[]}]},{value:"Logical Operators",id:"logical-operators",children:[{value:"AND",id:"and",children:[]},{value:"OR",id:"or",children:[]},{value:"NOT",id:"not",children:[]}]},{value:"Filter by nested object(s)",id:"filter-by-nested-objects",children:[{value:"One to One",id:"one-to-one",children:[]},{value:"One to Many",id:"one-to-many",children:[]},{value:"Many to Many",id:"many-to-many",children:[]}]},{value:"Filtering nested objects",id:"filtering-nested-objects",children:[]}],s={rightToc:c};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"You can filter the query results in GraphQLize using the ",Object(l.b)("inlineCode",{parentName:"p"},"where")," argument. "),Object(l.b)("h2",{id:"comparison-operators"},"Comparison Operators"),Object(l.b)("h3",{id:"equal-to-not-equal-to"},"Equal To, Not Equal To"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  cities(where: {cityId: {eq: 3}}) {\n    city\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  # highlight-next-line\n  languages(where: {name: {neq: "English"}}) {\n    name\n  }\n}\n')),Object(l.b)("h3",{id:"greater-than-greater-than-or-equal-to"},"Greater Than, Greater Than Or Equal To"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  payments(where: {amount: {gt: 11.99}}) {\n    rentalId\n    amount\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  payments(where: {amount: {gte: 11.99}}) {\n    rentalId\n    amount\n  }\n}\n")),Object(l.b)("h3",{id:"less-than-less-than-or-equal-to"},"Less Than, Less Than Or Equal To"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  payments(where: {amount: {lt: 6.99}}) {\n    rentalId\n    amount\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  payments(where: {amount: {lte: 6.99}}) {\n    rentalId\n    amount\n  }\n}\n")),Object(l.b)("h3",{id:"between"},"Between"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  # highlight-next-line\n  payments(where: {paymentDate: {between: {from: "2005-08-23T21:00:00", to: "2005-08-23T21:03:00"}}}) {\n    rentalId\n  }\n}\n')),Object(l.b)("h3",{id:"is-null-is-not-null"},"Is Null, Is Not Null"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  employees(where: {employeeReportsToId: {isNull: true}}) {\n    firstName\n    lastName\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  employees(where: {employeeReportsToId: {isNotNull: true}}) {\n    firstName\n    lastName\n  }\n}\n")),Object(l.b)("h3",{id:"in-not-in"},"IN, NOT IN"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  payments(where: {customerId: {in: [1, 2]}}) {\n    paymentId\n    amount\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  payments(where: {customerId: {notIn: [1, 2]}}) {\n    paymentId\n    amount\n  }\n}\n")),Object(l.b)("h3",{id:"string-comparison"},"String Comparison"),Object(l.b)("h4",{id:"like"},"Like"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  # highlight-next-line\n  countries(where: {country: {like: "A%"}}) {\n    country\n  }\n}\n')),Object(l.b)("h4",{id:"not-like"},"Not Like"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  # highlight-next-line\n  countries(where: {country: {notLike: "A%"}}) {\n    country\n  }\n}\n')),Object(l.b)("h2",{id:"logical-operators"},"Logical Operators"),Object(l.b)("h3",{id:"and"},"AND"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # payments of a customer with the id `1` \n  # and amount greater than `5.99`\n  # highlight-next-line\n  payments(where: {and: {customerId: {eq: 1}, amount: {gt: 5.99}}}) {\n    paymentId\n    amount\n  }\n}\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"and")," also supports list of conditions. "),Object(l.b)("p",null,"The above query can be rewritten as"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line \n  payments(where: {and: [{customerId: {eq: 1}, amount: {gt: 5.99}}]}) {\n    paymentId\n    amount\n  }\n}\n")),Object(l.b)("h3",{id:"or"},"OR"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"or")," is similar to ",Object(l.b)("inlineCode",{parentName:"p"},"and")," in syntax. It accepts both a single condition or a list of conditions. "),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  # languages with the name either "English" or "French"\n  # highlight-next-line\n  languages(where: {or: [{name: {eq: "English"}}, {name: {eq: "French"}}]}) {\n    languageId\n    name\n  }\n}\n')),Object(l.b)("h3",{id:"not"},"NOT"),Object(l.b)("p",null,"Using the ",Object(l.b)("inlineCode",{parentName:"p"},"not")," operator we can invert the filter condition. "),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  # languages with the name except "English" or "French"\n  # highlight-next-line\n  languages(where: {not: {or: [{name: {eq: "English"}}, {name: {eq: "French"}}]}}) {\n    languageId\n    name\n  }\n}\n')),Object(l.b)("h2",{id:"filter-by-nested-objects"},"Filter by nested object(s)"),Object(l.b)("p",null,"We can filter the resulting objects based on the fields of a nested object(s)."),Object(l.b)("h3",{id:"one-to-one"},"One to One"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/address_city_country_er_diagram.png",alt:null}))),Object(l.b)("p",null,"For example, to get all the cities of a county using the country' name in the above schema, We can query it as "),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  # highlight-next-line\n  cities(where: {country: {country: {eq : "Algeria"}}}) {\n    cityId\n    city\n  }\n}\n')),Object(l.b)("h3",{id:"one-to-many"},"One to Many"),Object(l.b)("p",null,"If the nested object has ",Object(l.b)("inlineCode",{parentName:"p"},"one-to-many")," relationship with its parent, the filter condition yield the results if ",Object(l.b)("strong",{parentName:"p"},"at-least one")," of the nested object's field(s) satisfy the condition."),Object(l.b)("p",null,"For the above schema, we can get a list of countries which has at-least one city that starts with ",Object(l.b)("inlineCode",{parentName:"p"},"Ab")," using the below query."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # returns countries which has at-least one city \n  # with the name like 'AB%'\n  # highlight-next-line\n  countries(where: {cities: {city: {like: \"Ab%\"}}}) {\n    countryId\n    country\n  }\n}\n")),Object(l.b)("h3",{id:"many-to-many"},"Many to Many"),Object(l.b)("p",null,"A filter based on a nested object with the ",Object(l.b)("inlineCode",{parentName:"p"},"many-to-many")," relationship behaves the same as that of ",Object(l.b)("inlineCode",{parentName:"p"},"one-to-many"),"."),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/film_actor_er_diagram.png",alt:null}))),Object(l.b)("p",null,"For the above schema, to get the actors who are part of ",Object(l.b)("strong",{parentName:"p"},"at-lease")," one film which has the word ",Object(l.b)("inlineCode",{parentName:"p"},"LIFE")," in its title."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  # highlight-next-line\n  actors(where: {films: {title: {:like "%LIFE%"}}}) {\n    firstName\n    lastName\n  }\n}\n')),Object(l.b)("h4",{id:"filter-to-check-all-objects-satisfy-a-condition"},"Filter to check all objects satisfy a condition."),Object(l.b)("p",null,"Let's assume that we have a schema like below "),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/author_course_er_diagram.png",alt:null}))),Object(l.b)("p",null,"To filter authors who has ",Object(l.b)("strong",{parentName:"p"},"at-least")," one course with the rating ",Object(l.b)("inlineCode",{parentName:"p"},"5"),", we can achieve it using the following query."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  authors(where: {courses : {rating: {eq: 5}}}) {\n    firstName\n    lastName\n  }\n}\n")),Object(l.b)("p",null,"If we want to filter only the authors who has got the rating ",Object(l.b)("inlineCode",{parentName:"p"},"5")," in ",Object(l.b)("strong",{parentName:"p"},"all")," their courses, we can achieve it by"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  # highlight-next-line\n  authors(where: {not: {courses : {rating: {neq: 5}}}}) {\n    firstName\n    lastName\n  }\n}\n")),Object(l.b)("p",null,"We are making use of ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://gerardnico.com/data/type/relation/sql/anti_join"}),"SQL anti-join")," by inverting the whole condition using ",Object(l.b)("inlineCode",{parentName:"p"},"not")," and complementing the inner condition using its reverse (",Object(l.b)("inlineCode",{parentName:"p"},"neq")," in the place of ",Object(l.b)("inlineCode",{parentName:"p"},"eq"),")."),Object(l.b)("h2",{id:"filtering-nested-objects"},"Filtering nested objects"),Object(l.b)("p",null,"GraphQLize also supports filtering nested objects. "),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  countryByCountryId(countryId: 2) {\n    country\n    # filter one-to-many relationship\n    # highlight-next-line\n    cities(where: {city: {like: "B%"}}) {\n      cityId\n      city\n    }\n  }\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  actorByActorId(actorId: 148) {\n    firstName\n    # filter many-to-many relationship\n    # highlight-next-line\n    films(where: {title: {like: "S%"}}) {\n      title\n    }\n  }\n}\n')))}b.isMDXComponent=!0},158:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},u=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(t),p=a,g=u["".concat(i,".").concat(p)]||u[p]||h[p]||l;return t?r.a.createElement(g,o({ref:n},s,{components:t})):r.a.createElement(g,o({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);