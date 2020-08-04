(this["webpackJsonpjob-listing"]=this["webpackJsonpjob-listing"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"FullStack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},,,,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),l=t(5),c=t.n(l),s=t(6),r=t(7),i=(t(13),function(e){return n.a.createElement("div",{className:"jobItem",id:e.featured?"featured":null},n.a.createElement("div",{className:"details"},n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:e.logo,alt:"logo"})),n.a.createElement("div",{className:"info"},n.a.createElement("span",{className:"companyName"},e.company),e.new?n.a.createElement("span",{className:"new"},"NEW"):"",e.featured?n.a.createElement("span",{className:"featured"},"FEATURED"):"",n.a.createElement("h1",null,e.position),n.a.createElement("span",{className:"postDate"},e.postedAt),n.a.createElement("span",{className:"contract"},e.contract),n.a.createElement("span",{className:"location"},e.location))),n.a.createElement("div",{className:"tags"},n.a.createElement("ul",null,n.a.createElement("li",{onClick:function(){return e.addNewTag(e.role)}},e.role),n.a.createElement("li",{onClick:function(){return e.addNewTag(e.level)}},e.level),e.tools.map((function(a){return n.a.createElement("li",{onClick:function(){return e.addNewTag(a)}},a)})))))}),u=t(3),m=(t(14),function(){var e=[],a=Object(o.useState)([]),t=Object(r.a)(a,2),l=t[0],c=t[1],m=function(e){l.includes(e)?c(l.filter((function(a){return a!==e}))):c(l.concat(e))};return l.length>0?e.length>0?e.forEach((function(a){var t=a.languages.concat(a.tools).concat(a.role).concat(a.level);l.every((function(e){return t.indexOf(e)>=0}))&&e.push(a)})):u.forEach((function(a){var t=a.languages.concat(a.tools).concat(a.role).concat(a.level);l.every((function(e){return t.indexOf(e)>=0}))&&e.push(a)})):(e=[],e=Object(s.a)(u)),n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"headerImage"}),n.a.createElement("div",{className:"selectedOuter",style:l.length>0?{display:"flex"}:{display:"none"}},n.a.createElement("div",{className:"selectedTags"},n.a.createElement("div",{className:"tagsLeft"},l.map((function(e){return n.a.createElement("span",{className:"tagSpan"},e,n.a.createElement("button",{onClick:function(){return a=e,void c(l.filter((function(e){return e!==a})));var a},className:"tagXButton"},"X"))}))),n.a.createElement("div",{className:"tagsRight"},n.a.createElement("span",{className:"clearButton",onClick:function(){c([])}},"Clear")))),n.a.createElement("div",{className:"mappedJobs"},e.map((function(e){return n.a.createElement(i,{className:"jobItemComponent",addNewTag:m,logo:e.logo,company:e.company,new:e.new,featured:e.featured,position:e.position,postedAt:e.postedAt,contract:e.contract,location:e.location,role:e.role,level:e.level,tools:e.tools.concat(e.languages)})}))))});c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.61e4088d.chunk.js.map