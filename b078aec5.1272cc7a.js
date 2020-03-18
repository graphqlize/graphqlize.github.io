/*! For license information please see b078aec5.1272cc7a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{120:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return m}));var n=a(1),i=a(6),l=(a(0),a(136)),r=a(138),o=a(139),b={id:"relationships",title:"Relationships",sidebar_label:"Relationships"},c={id:"graphql_schema/relationships",title:"Relationships",description:'import Tabs from "@theme/Tabs";',source:"@site/docs/graphql_schema/relationships.mdx",permalink:"/docs/graphql_schema/relationships",editUrl:"https://github.com/graphqlize/graphqlize.github.io/tree/source/docs/graphql_schema/relationships.mdx",sidebar_label:"Relationships",sidebar:"docs",previous:{title:"Types & Fields",permalink:"/docs/graphql_schema/types-and-fields"},next:{title:"Custom Scalar Types",permalink:"/docs/graphql_schema/custom-scalar-types"}},p=[{value:"One to One",id:"one-to-one",children:[]},{value:"One to Many",id:"one-to-many",children:[]},{value:"Many to Many",id:"many-to-many",children:[]}],s={rightToc:p};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"GraphQLize identifies the relationships between database tables using their foreign keys, and generate appropriate relationship fields (conections) in the resulting GraphQL schema."),Object(l.b)("h2",{id:"one-to-one"},"One to One"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/address_city_country_er_diagram.png",alt:null}))),Object(l.b)("p",null,"For the database table relationships like above, GraphQLize infers two ",Object(l.b)("inlineCode",{parentName:"p"},"one-to-one")," relationships."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"A ",Object(l.b)("inlineCode",{parentName:"p"},"address")," is associated with a ",Object(l.b)("inlineCode",{parentName:"p"},"city")," via ",Object(l.b)("inlineCode",{parentName:"p"},"city_id")," column in the ",Object(l.b)("inlineCode",{parentName:"p"},"address")," table.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"A ",Object(l.b)("inlineCode",{parentName:"p"},"city")," is associated with a ",Object(l.b)("inlineCode",{parentName:"p"},"country")," via ",Object(l.b)("inlineCode",{parentName:"p"},"country_id")," column in the ",Object(l.b)("inlineCode",{parentName:"p"},"city")," table."))),Object(l.b)("p",null,"GraphQLize then create two object relationsips in the ",Object(l.b)("inlineCode",{parentName:"p"},"Address")," and the ",Object(l.b)("inlineCode",{parentName:"p"},"City")," type respectively"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"type Address {\n  # ...\n  city: City!\n}\n\ntype City {\n  # ...\n  country: Country!\n}\n")),Object(l.b)("p",null,"The generated field name is the ",Object(l.b)("em",{parentName:"p"},"camelCase")," version of the corresponding column name with the id suffix ",Object(l.b)("inlineCode",{parentName:"p"},"_id")," removed."),Object(l.b)("p",null,"Here are some of the examples."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Column Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"GraphQL Field Name"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"actor_id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"actor")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"original_language_id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"originalLanguage")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"reports_to_employee_id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"reportsToEmployee")))),Object(l.b)("p",null,"By default, GraphQLize assumes ",Object(l.b)("inlineCode",{parentName:"p"},"_id")," as the suffix for foriegn keys in both Postgres and MySQL."),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/graphqlize/graphqlize/issues/4"}),"In future"),", GraphQLize will provide a configuration to override this default behaviour."),Object(l.b)("h2",{id:"one-to-many"},"One to Many"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/address_city_country_er_diagram.png",alt:null}))),Object(l.b)("p",null,"For the database table relationships like above, GraphQLize infers two ",Object(l.b)("inlineCode",{parentName:"p"},"one-to-many")," relationships."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"A ",Object(l.b)("inlineCode",{parentName:"p"},"city")," has many ",Object(l.b)("inlineCode",{parentName:"p"},"address")," via ",Object(l.b)("inlineCode",{parentName:"p"},"city_id")," column in the ",Object(l.b)("inlineCode",{parentName:"p"},"address")," table.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"A ",Object(l.b)("inlineCode",{parentName:"p"},"country")," has many ",Object(l.b)("inlineCode",{parentName:"p"},"city")," via ",Object(l.b)("inlineCode",{parentName:"p"},"country_id")," column in the ",Object(l.b)("inlineCode",{parentName:"p"},"city")," table."))),Object(l.b)("p",null,"GraphQLize then create two array relationsips in the ",Object(l.b)("inlineCode",{parentName:"p"},"City")," and the ",Object(l.b)("inlineCode",{parentName:"p"},"Country")," type respectively"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"type City {\n  # ...\n  addresses: [Address]!\n}\n\ntype Country {\n  # ...\n  cities: [City]!\n}\n")),Object(l.b)("p",null,"The generated field name is the ",Object(l.b)("em",{parentName:"p"},"camelCase")," version of the corresponding target table's pluralized name."),Object(l.b)("p",null,"If a table has multiple foreign keys to a same table like below,"),Object(l.b)(r.a,{defaultValue:"postgres",values:[{label:"Postgres",value:"postgres"},{label:"MySQL",value:"mysql"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"postgres",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE language (\n  language_id serial PRIMARY KEY,\n  name character(20) NOT NULL\n);\n\nCREATE TABLE film (\n  film_id serial PRIMARY KEY,\n  title character varying(255) NOT NULL,\n\n  language_id smallint NOT NULL REFERENCES language(language_id),\n  original_language_id smallint REFERENCES language(language_id)\n);\n\n"))),Object(l.b)(o.a,{value:"mysql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE language (\n  language_id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,\n  name CHAR(20) NOT NULL,\n  PRIMARY KEY (language_id)\n);\n\nCREATE TABLE film (\n  film_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,\n  title VARCHAR(255) NOT NULL,\n  language_id TINYINT UNSIGNED NOT NULL,\n  original_language_id TINYINT UNSIGNED DEFAULT NULL,\n  PRIMARY KEY  (film_id),\n  CONSTRAINT fk_film_language FOREIGN KEY (language_id) REFERENCES language (language_id),\n  CONSTRAINT fk_film_language_original FOREIGN KEY (original_language_id) REFERENCES language (language_id)\n);\n")))),Object(l.b)("p",null,"GraphQLize creates two ",Object(l.b)("inlineCode",{parentName:"p"},"one-to-many")," relationships between ",Object(l.b)("inlineCode",{parentName:"p"},"language")," and ",Object(l.b)("inlineCode",{parentName:"p"},"films"),". "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"language")," has many ",Object(l.b)("inlineCode",{parentName:"li"},"film")," via ",Object(l.b)("inlineCode",{parentName:"li"},"language_id")," column in the ",Object(l.b)("inlineCode",{parentName:"li"},"film")," table. "),Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"language")," has many ",Object(l.b)("inlineCode",{parentName:"li"},"film")," via ",Object(l.b)("inlineCode",{parentName:"li"},"original_language_id")," column in the ",Object(l.b)("inlineCode",{parentName:"li"},"film")," table.")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"type Language {\n  languageId: Int!\n  name: String!\n\n  films: [Film]!\n  originalLanguageFilms: [Film]!\n}\n")),Object(l.b)("p",null,"The nomanclature used here to generate the field name follows the below logic."),Object(l.b)("p",null,"If the column name (",Object(l.b)("inlineCode",{parentName:"p"},"language_id"),") after the removal of foreign key suffix (",Object(l.b)("inlineCode",{parentName:"p"},"language"),") matches the target table name, then the resulting field name is the ",Object(l.b)("em",{parentName:"p"},"camelCase")," version of pluralized form of the target table (",Object(l.b)("inlineCode",{parentName:"p"},"languages"),")."),Object(l.b)("p",null,"If the column name (",Object(l.b)("inlineCode",{parentName:"p"},"original_language_id"),") didn't match (like ",Object(l.b)("inlineCode",{parentName:"p"},"original_language"),"), then GraphQLize removes the foreign key suffix and concatenate with the pluralized form of the target table and then convert it to its ",Object(l.b)("em",{parentName:"p"},"camelCase")," version."),Object(l.b)("h2",{id:"many-to-many"},"Many to Many"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"many-to-many")," relationship is bit tricky to figure out. For the database table relationships like below,"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/film_actor_er_diagram.png",alt:null}))),Object(l.b)("p",null,"GraphQLize traverse each table's metadata to figure out whether it is a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Associative_entity"}),"associative table")," or not. "),Object(l.b)("p",null,"A table is considered as a associative table, if it satisfies the following two criteria"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"It should a have primay key with two column names."),Object(l.b)("li",{parentName:"ol"},"These column names should be a subset of the foriegn key column names present in that table. ")),Object(l.b)("p",null,"In the example provided, ",Object(l.b)("inlineCode",{parentName:"p"},"film_actor")," table is a associative table. It has"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"It has ",Object(l.b)("inlineCode",{parentName:"li"},"actor_id")," and ",Object(l.b)("inlineCode",{parentName:"li"},"film_id")," as primary key."),Object(l.b)("li",{parentName:"ol"},"The primay keys ",Object(l.b)("inlineCode",{parentName:"li"},"{actor_id, film_id}")," is a subset of foreign keys ",Object(l.b)("inlineCode",{parentName:"li"},"{actor_id, film_id}")," of the ",Object(l.b)("inlineCode",{parentName:"li"},"film_actor")," table. ")),Object(l.b)("p",null,"In this scenario, GraphQLize creates two array fields for these two ",Object(l.b)("inlineCode",{parentName:"p"},"many-to-many")," relationships.  "),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"type Film {\n  actors: [Actor]!\n  # ...\n}\ntype Actor {\n  films: [Film]!\n  # ...\n}\n")),Object(l.b)("p",null,"For the relationships between ",Object(l.b)("inlineCode",{parentName:"p"},"film")," & ",Object(l.b)("inlineCode",{parentName:"p"},"film_actor")," and ",Object(l.b)("inlineCode",{parentName:"p"},"film_actor")," & ",Object(l.b)("inlineCode",{parentName:"p"},"actor")," tables, GraphQLize creates the following fields. "),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"type Film {\n  # ...\n  filmActors: [FilmActor]!\n}\n\ntype FilmActor {\n  actor: Actor!\n  film: Film!\n  # ...\n}\n\ntype Actor {\n  # ...\n  filmActors: [FilmActor]!\n}\n")))}m.isMDXComponent=!0},136:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,d=s["".concat(r,".").concat(u)]||s[u]||m[u]||l;return a?i.a.createElement(d,o({ref:t},c,{components:a})):i.a.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var c=2;c<l;c++)r[c]=a[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},137:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var r=i.apply(null,n);r&&e.push(r)}else if("object"===l)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},138:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(137),r=a.n(l),o=a(86),b=a.n(o);const c=37,p=39;t.a=function(e){const{block:t,children:a,defaultValue:l,values:o}=e,[s,m]=Object(n.useState)(l),u=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:r()("tabs",{"tabs--block":t})},o.map(({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":s===e,className:r()("tab-item",b.a.tabItem,{"tab-item--active":s===e}),key:e,ref:e=>u.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case p:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(u,e.target,e),onFocus:()=>m(e),onClick:()=>m(e)},t))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===s)[0]))}},139:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){return i.a.createElement("div",null,e.children)}}}]);