(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(26),s=(c(14),c(15),c(7)),a=c(3),r=(c(35),c(10)),l=c.n(r),i=function(e){var t=e.isActive;return l()("navbar-item",{"is-active":t})},o=c(1),j=function(){return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-light is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(s.c,{to:"/",className:i,children:"Home"}),Object(o.jsx)(s.c,{to:"/people",className:i,children:"People"})]})})})},d=function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(j,{}),Object(o.jsx)(a.b,{})]})},b=c(5),u=c(0),h=c(8);function x(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(b.a)(e,2),n=t[0],s=t[1];null===s?c.delete(n):Array.isArray(s)?(c.delete(n),s.forEach((function(e){c.append(n,e)}))):c.set(n,s)})),c.toString()}var O=function(){var e=Object(s.d)(),t=Object(b.a)(e,2),c=t[0],n=t[1],a=c.get("query")||"",r=c.get("sex")||"",i=c.getAll("centuries")||[];return Object(o.jsxs)("nav",{className:"panel",children:[Object(o.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(o.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(o.jsx)(s.b,{className:"all"===r?"is-active":"",to:{search:x(c,{sex:null})},children:"All"}),Object(o.jsx)(s.b,{className:"m"===r?"is-active":"",to:{search:x(c,{sex:"m"})},children:"Male"}),Object(o.jsx)(s.b,{className:"f"===r?"is-active":"",to:{search:x(c,{sex:"f"})},children:"Female"})]}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsxs)("p",{className:"control has-icons-left",children:[Object(o.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:a,onChange:function(e){!function(e){var t=x(c,e);n(t)}({query:e.target.value||null})}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(o.jsx)("div",{className:"level-left",children:[16,17,18,19,20].map((function(e){return Object(o.jsx)(s.b,{"data-cy":"century",className:l()("button mr-1",{"is-info":i.includes(e.toString())}),to:{search:x(c,{centuries:i.includes(e.toString())?i.filter((function(t){return+t!==e})):[].concat(Object(h.a)(i),[e.toString()])})},children:e},e)}))}),Object(o.jsx)("div",{className:"level-right ml-4",children:Object(o.jsx)(s.b,{"data-cy":"centuryALL",className:"button is-success is-outlined",to:{search:x(c,{centuries:[]})},children:"All"})})]})}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsx)("a",{className:"button is-link is-outlined is-fullwidth",href:"#/people",children:"Reset all filters"})})]})},m=(c(37),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),p=function(e){var t=e.person;if(!t)return null;var c=t.name,n="f"===t.sex?"has-text-danger":"";return Object(o.jsx)(s.b,{to:"".concat(null===t||void 0===t?void 0:t.slug),className:n,children:c})},f=function(e){return e.Name="name",e.Sex="sex",e.Born="born",e.Died="died",e}({}),v=function(e){var t=e.people,c=Object(a.r)().slug;function n(e){return t.find((function(t){return t.name===e}))}var r=Object(s.d)(),i=Object(b.a)(r,1)[0],j=i.get("sort"),d=i.get("order"),u=function(e,t,c){var n=c?-1:1;return Object(h.a)(e).sort((function(e,c){switch(t){case"name":case"sex":return e[t].localeCompare(c[t])*n;case"born":case"died":return(+e[t]-+c[t])*n;default:return 0}}))}(t,j,d);return Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object.keys(f).map((function(e){return Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[e,Object(o.jsx)(s.b,{to:{search:x(i,(t=e.toLowerCase(),j!==t?{sort:t,order:null}:d?{sort:null,order:null}:{sort:t,order:"desc"}))},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:l()("fas fa-sort",{"fa-sort-up":j===e.toLowerCase()&&!d,"fa-sort-down":j===e.toLowerCase()&&d})})})})]})},e);var t})),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:u.map((function(e){var t=n(e.fatherName),s=n(e.motherName);return Object(o.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":e.slug===c}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(p,{person:e})}),Object(o.jsx)("td",{children:e.sex}),Object(o.jsx)("td",{children:e.born}),Object(o.jsx)("td",{children:e.died}),Object(o.jsx)("td",{children:s?Object(o.jsx)(p,{person:s}):e.motherName||"-"}),Object(o.jsx)("td",{children:t?Object(o.jsx)(p,{person:t}):e.fatherName||"-"})]},e.slug)}))})]})},N=c(4),g=c(6),w="https://mate-academy.github.io/react_people-table/api/people.json";function y(e){return new Promise((function(t){return setTimeout(t,e)}))}function L(){return(L=Object(g.a)(Object(N.a)().mark((function e(){return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y(500).then((function(){return fetch(w)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(){var e=Object(u.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(u.useState)(!0),r=Object(b.a)(a,2),l=r[0],i=r[1],j=Object(u.useState)(!1),d=Object(b.a)(j,2),x=d[0],p=d[1],f=Object(s.d)(),N=Object(b.a)(f,1)[0],g=function(e,t,c,n){var s=Object(h.a)(e);return c&&(s=s.filter((function(e){return e.sex===c}))),n.length&&(s=s.filter((function(e){return n.includes(Math.ceil(e.born/100).toString())}))),t&&(s=s.filter((function(e){var c,n;return e.name.toLowerCase().includes(t.toLowerCase())||(null===(c=e.motherName)||void 0===c?void 0:c.toLowerCase().includes(t.toLowerCase()))||(null===(n=e.fatherName)||void 0===n?void 0:n.toLowerCase().includes(t.toLowerCase()))}))),s}(c,N.get("query")||"",N.get("sex")||"",N.getAll("centuries")||[]);return Object(u.useEffect)((function(){(function(){return L.apply(this,arguments)})().then((function(e){return n(e)})).catch((function(){return p(!0)})).finally((function(){return i(!1)}))}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title mx-5",children:"People Page"}),Object(o.jsx)("div",{className:"block",children:l?Object(o.jsx)(m,{}):Object(o.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(o.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(o.jsx)(O,{})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsxs)("div",{className:"box table-container",children:[x&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!g.length&&!l&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(o.jsx)(v,{people:g})]})})]})})]})})},k=function(){return Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("h1",{className:"title mx-5",children:"Home page"})})},C=function(){return Object(o.jsx)(s.a,{children:Object(o.jsx)(a.e,{children:Object(o.jsxs)(a.c,{path:"/",element:Object(o.jsx)(d,{}),children:[Object(o.jsx)(a.c,{index:!0,element:Object(o.jsx)(k,{})}),Object(o.jsx)(a.c,{path:"people",element:Object(o.jsx)(S,{}),children:Object(o.jsx)(a.c,{path:":slug",element:Object(o.jsx)(S,{})})}),Object(o.jsx)(a.c,{path:"/home",element:Object(o.jsx)(a.a,{to:"/",replace:!0})}),Object(o.jsx)(a.c,{path:"*",element:Object(o.jsx)("h1",{className:"title",children:"Page not found"})})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(o.jsx)(C,{}))}},[[38,1,2]]]);
//# sourceMappingURL=main.3fc818b8.chunk.js.map