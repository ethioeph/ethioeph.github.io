(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(149),r=o.a.div.withConfig({displayName:"SocialContact__ContactWrapper",componentId:"oidgwn-0"})(["margin-bottom:20px;img{margin:0 20px 0 0;}@media (max-width:700px){img{margin:10% 0;}}"]),l=o.a.a.withConfig({displayName:"SocialContact__ContactLink",componentId:"oidgwn-1"})(["display:flex;align-items:center;text-decoration:none;p{font-size:30px;color:#ffffff;margin:0;}@media (max-width:700px){flex-direction:column;p{font-size:20px;}}"]),c=o.a.div.withConfig({displayName:"SocialContact__ContactBox",componentId:"oidgwn-2"})(["display:flex;align-items:center;p{font-size:30px;color:#ffffff;margin:0;}@media (max-width:700px){flex-direction:column;p{font-size:20px;}}"]),d=function(e){var t=e.info;return i.a.createElement(r,null,t.linkTo?i.a.createElement(l,{href:t.path},i.a.createElement("p",null,t.title)):i.a.createElement(c,null,i.a.createElement("p",null,t.title)))},p=[{id:1,title:"daniel.w.woldegiorgis@gmail.com",icon:null,linkTo:!1}],m=[{id:3,title:"Github",icon:null,linkTo:!0,path:"https://github.com/ethioeph"},{id:4,title:"LinkedIn",icon:null,linkTo:!0,path:"https://www.linkedin.com/in/daniel-woldegiorgis-6a54a7128/"}],u=o.a.div.withConfig({displayName:"contactStyle__ContactWrapper",componentId:"jtfjdb-0"})(["margin:10% auto;@media (max-width:700px){margin:15% auto;}"]),s=o.a.h1.withConfig({displayName:"contactStyle__ContactHeader",componentId:"jtfjdb-1"})(["text-align:CENTER;color:#eeeeee;margin-bottom:5%;font-weight:300;"]),f=o.a.div.withConfig({displayName:"contactStyle__ContactDetails",componentId:"jtfjdb-2"})(["display:flex;align-items:baseline;justify-content:space-around;h3{font-size:30px;color:#7fa1e8;font-weight:300;}@media (max-width:700px){flex-direction:column;align-items:center;}"]),g=o.a.div.withConfig({displayName:"contactStyle__ContactBox",componentId:"jtfjdb-3"})(["display:flex;align-items:center;flex-direction:column;font-weight:300;@media (max-width:700px){flex-direction:column;}"]),h=n(155);t.default=function(){return i.a.createElement(h.a,null,i.a.createElement(u,null,i.a.createElement(s,null,"Get in touch"),i.a.createElement(f,null,i.a.createElement(g,null,i.a.createElement("h3",null,"Contact Details"),p.map(function(e){return i.a.createElement(d,{key:e.id,info:e})})),i.a.createElement(g,null,i.a.createElement("h3",null,"Look me up online"),m.map(function(e){return i.a.createElement(d,{key:e.id,info:e})})))))}},150:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Daniel"}}}}},152:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(55),c=n(2),d=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};d.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=d},153:function(e,t,n){e.exports=n.p+"static/daniel_bitmoji-03062d00093974ecad3b5e172858c409.png"},154:function(e,t,n){e.exports=n.p+"static/black_dog-e459493a24f4197bbd153c6364bdd5c1.jpeg"},155:function(e,t,n){"use strict";var a=n(151),i=n(0),o=n.n(i),r=n(4),l=n.n(r),c=n(33),d=n.n(c),p=(n(150),o.a.createContext({})),m=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func};var u=n(149),s={title:"Daniel Woldegiorgis | Software Developer",favicon:null,author:"Daniel Woldegiorgis",description:"Hello there, welcome to my portfolio.",copyright:"Daniel Woldegiorgis, Copyright (c) 2020",keywords:["Daniel Woldegiorgis","GolemanEI","frontend engineer","frontend developer","fullstack engineer","web engineer","ethiopia","software engineer","engineer","ui engineer"]},f=n(156),g=n.n(f),h=n(153),x=n.n(h),w=n(154),y=n.n(w),b=n(15),v=(n(157),Object(u.a)(d.a).withConfig({displayName:"NavLink__LinkNav",componentId:"sc-1bp5pd2-0"})(["color:#ffffff;margin-right:35px;transition:color 0.2s ease-out;text-decoration:none;:hover{color:#7fa1e8;transition:color 0.2s;}&.active{color:#7fa1e8;}@media (max-width:700px){margin-right:14px;:last-of-type{display:flex;}}"])),E=function(e){var t=e.info;return o.a.createElement(v,{to:t.path,exact:"true",activeClassName:"active"},t.label)},C=[{label:"About",path:"/"},{label:"Experience",path:"/experience"},{label:"Projects",path:"/projects"},{label:"Contact",path:"/contact"}],k=function(){return o.a.createElement("nav",{className:"nav"},o.a.createElement("div",{className:"nav-list"},C.map(function(e){return o.a.createElement(E,{info:e,key:e.label})})))},_=function(e){var t=e.footerClass;return o.a.createElement("div",{className:"defaultFooter "+t},o.a.createElement("p",null,"View site source on"," ",o.a.createElement("a",{href:"https://github.com/ethioeph/ethioeph.github.io",target:"_blank"},"Github")))};_.propTypes={footerClass:l.a.string};var j=_,N=u.a.div.withConfig({displayName:"layout__Wrapper",componentId:"xgaqq1-0"})(["background-image:url(",");width:100%;background-repeat:no-repeat;background-size:cover;min-height:100vh;height:auto;background-position:bottom;padding:5% 8%;position:relative;@media (max-width:700px){min-height:100vh;height:auto;}"],y.a),I=function(e){var t=e.children;return o.a.createElement(m,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:s.description},{name:"keywords",content:s.keywords.join(", ")},{name:"author",content:s.author},{name:"copyright",content:s.copyright}],link:[{rel:"shortcut icon",type:"image/png",href:""+x.a}]}),o.a.createElement(b.Location,null,function(e){var n=e.location;return o.a.createElement(N,{className:"/"===n.pathname?"cutBackground":""},o.a.createElement(k,null),t,o.a.createElement(j,{footerClass:"/"===n.pathname?"footerInitial":"footerAbsolute"}))}))},data:a})};I.propTypes={children:l.a.node.isRequired};t.a=I}}]);
//# sourceMappingURL=component---src-pages-contact-js-cb489dceec832f1b65c9.js.map