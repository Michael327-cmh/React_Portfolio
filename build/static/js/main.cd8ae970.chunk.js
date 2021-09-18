(this["webpackJsonpUpdated Portfolio"]=this["webpackJsonpUpdated Portfolio"]||[]).push([[0],{13:function(e,c,t){},14:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t(7),n=t.n(a),i=t(2),r=t(3),o=t(5),l=t(4),j=t(0),h=function(e){Object(o.a)(t,e);var c=Object(l.a)(t);function t(){return Object(i.a)(this,t),c.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props.myNews;return Object(j.jsxs)("header",{id:"home",children:[Object(j.jsx)("nav",{id:"nav-wrap",children:Object(j.jsxs)("ul",{id:"nav",className:"nav",children:[Object(j.jsx)("li",{className:"current",children:Object(j.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})}),Object(j.jsx)("div",{className:"row banner",children:Object(j.jsxs)("div",{className:"banner-text",children:[Object(j.jsxs)("h1",{className:"responsive-headline",children:["I am ",e.name,"."]}),Object(j.jsxs)("h3",{style:{color:"#fff",fontFamily:"sans-serif "},children:["I am a ",e.role,".",e.Current_Role]}),Object(j.jsx)("hr",{}),Object(j.jsx)("ul",{className:"social",children:e.socialsites&&e.socialsites.map((function(e){return Object(j.jsxs)("li",{children:[e.name," ",e.url]})}))})]})}),Object(j.jsx)("p",{className:"scrolldown",children:Object(j.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(j.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(s.Component),m=function(e){Object(o.a)(t,e);var c=Object(l.a)(t);function t(){return Object(i.a)(this,t),c.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props.myNews;return Object(j.jsx)("section",{id:"about",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"three columns",children:Object(j.jsx)("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})}),Object(j.jsxs)("div",{className:"nine columns main-col",children:[Object(j.jsx)("h2",{children:"About Me"}),Object(j.jsx)("p",{children:e.aboutme}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"columns contact-details",children:[Object(j.jsx)("h2",{children:"Contact Information"}),Object(j.jsxs)("p",{className:"address",children:[Object(j.jsx)("span",{children:e.name}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:e.address}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:e.number}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:e.website})]})]})})]})]})})}}]),t}(s.Component),d=function(e){Object(o.a)(t,e);var c=Object(l.a)(t);function t(){return Object(i.a)(this,t),c.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props.myNews;return Object(j.jsx)("section",{id:"portfolio",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"twelve columns collapsed",children:[Object(j.jsx)("h1",{children:"View Below!"}),e.Portfolio&&e.Portfolio.map((function(e){return Object(j.jsx)("div",{className:"columns portfolio-item",children:Object(j.jsx)("div",{className:"item-wrap",children:Object(j.jsx)("div",{className:"overlay",children:Object(j.jsxs)("div",{className:"portfolio-item-meta",children:[Object(j.jsx)("h5",{children:e.name}),Object(j.jsx)("p",{children:e.description}),Object(j.jsx)("p",{children:e.Webpage})]})})})})}))]})})})}}]),t}(s.Component),b=function(e){Object(o.a)(t,e);var c=Object(l.a)(t);function t(){return Object(i.a)(this,t),c.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props.myNews;return Object(j.jsx)("footer",{children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"twelve columns",children:Object(j.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:e.url,children:Object(j.jsx)("i",{className:e.className})})})}))})}),Object(j.jsx)("div",{id:"go-top",children:Object(j.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(j.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(s.Component),u={imagebaseurl:"https://michael327-cmh.github.io/React_Portfolio/",name:"Michael Carmody",address:"mr.carmody89@gmail.com",number:"402-740-1084",role:"Full Stack Developer",Current_Role:"I enjoy debugging the most, but build from scratch is fun as the pieces come together. Learning and soaking up as much information as possible as a student.",socialsites:[{name:"LinkedIn:",url:"linkedin.com/in/michael-carmody-3b39a6101",className:"fa fa-linkedin"},{name:"Github:",url:"github.com/Michael327-cmh",className:"fa fa-github"},{name:"Twitter:",url:"https://twitter.com/Michaelandtech",className:"fa fa-twitter"}],aboutme:"I will finish my final week of Full Stack Coding bootcamp in 7 days. I have spent the last ten years working for the same company in hospitality. I took a risk and made a decision to pursue a completely new direction for a career. It has been a great transition thus far and I'm looking forward to the adventure ahead!",Portfolio:[{name:"Work Day Schedule",description:"webpage",Webpage:"https://github.com/Michael327-cmh/Work_Day_Schedule"},{name:"Project 1",description:"Lyric Search Engine",Webpage:"https://github.com/CameronHeadlee/Ear-Worm"},{name:"ReadMe Generator",description:"ReadMe Template",Webpage:"https://github.com/Michael327-cmh/READMEGenerator"},{name:"E-Commerce BackEnd",description:"BackEnd Routing",Webpage:"https://github.com/Michael327-cmh/e-commerce_website"},{name:"Project 2",description:"JoinME",Webpage:"https://github.com/larafoster/Event-Management-App"}]},p=(t.p,function(e){Object(o.a)(t,e);var c=Object(l.a)(t);function t(){return Object(i.a)(this,t),c.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{myNews:u}),Object(j.jsx)(m,{myNews:u}),Object(j.jsx)(d,{myNews:u}),Object(j.jsx)(b,{myNews:u})]})}}]),t}(s.Component)),O=p;t(13);n.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cd8ae970.chunk.js.map