(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{VgBE:function(t,e){function r(t){if(!/^\d+[A-Z]+$/.test(t))throw new Error(t+" does not match the section format. It must be <numbers><capital letters>, like 16A or 5F (case sensitive)");return[/^\d+/.exec(t)[0],/[A-Z]+$/.exec(t)[0]]}var n=function(t){return t.split("").map((function(t,e){return t.charCodeAt(0)*Math.pow(10,e)})).reduce((function(t,e){return t+e}))};t.exports.splitSections=r,t.exports.sorter=function(t,e){var a,o;t.attributes&&t.attributes.order?(a=t.attributes.order,o=e.attributes.order):(a=t.order,o=e.order);var c=r(a),s=c[0],i=c[1],u=r(o),d=u[0],l=u[1];return s!==d?s-d:n(i)-n(l)}},"e/uT":function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return i})),r.d(e,"pageQuery",(function(){return u}));var n=r("2A+t"),a=r("+ZDr"),o=r.n(a),c=r("VgBE"),s=c.sorter;function i(t){var e=t.data,r=e.markdownRemark,a=e.allMarkdownRemark.edges.map((function(t){return t.node.frontmatter})).sort(s),c=r.frontmatter,i=r.html,u=a.findIndex((function(t){return t.path===c.path})),d=u>0?Object(n.c)(o.a,{sx:{variant:"buttons.lesson"},to:a[u-1].path},"← "+a[u-1].title):Object(n.c)("div",null),l=u<a.length-1?Object(n.c)(o.a,{sx:{variant:"buttons.lesson"},to:a[u+1].path},a[u+1].title+" →"):Object(n.c)("div",null);return Object(n.c)("div",null,Object(n.c)("div",{sx:{bg:"surface",p:3,variant:"containers.surface2",borderRadius:"4px"}},Object(n.c)("h1",{sx:{m:0}},c.title),Object(n.c)("h2",{sx:{m:0}},c.date),Object(n.c)("div",{dangerouslySetInnerHTML:{__html:i}})),Object(n.c)("div",{sx:{display:"flex",width:"100%",my:3,justifyContent:"space-between"}},d,l))}var u="4004056512"}}]);
//# sourceMappingURL=component---src-templates-lesson-template-js-2bb9e1341e0009a22374.js.map