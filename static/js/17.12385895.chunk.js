(this.webpackJsonpportal=this.webpackJsonpportal||[]).push([[17],{514:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return a}));var n=r(86);function c(e){return Object(n.a)({url:"/project/list",method:"get",params:e})}function a(e){return Object(n.a)({url:"/project",method:"post",data:e})}},677:function(e,t,r){"use strict";var n=r(0),c=r.n(n),a=r(11);t.a=Object(a.a)("more",!1,(function(e){return c.a.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},c.a.createElement("circle",{cx:"12",cy:"24",r:"3",fill:e.colors[0]}),c.a.createElement("circle",{cx:"24",cy:"24",r:"3",fill:e.colors[0]}),c.a.createElement("circle",{cx:"36",cy:"24",r:"3",fill:e.colors[0]}))}))},714:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return I}));r(560);var n=r(562),c=r.n(n),a=(r(143),r(87)),i=r.n(a),o=(r(209),r(142)),s=r.n(o),l=(r(210),r(112)),u=r.n(l),d=(r(579),r(580)),j=r.n(d),p=(r(111),r(42)),b=r.n(p),x=r(109),f=r.n(x),m=r(140),h=r(63),O=r(677),g=r(0),v=r(46),y=r(514),w=r(2);function I(){var e=Object(g.useState)([]),t=Object(h.a)(e,2),r=t[0],n=t[1],a=Object(g.useState)(!1),o=Object(h.a)(a,2),l=o[0],d=o[1],p=Object(g.useState)({pageSize:5}),x=Object(h.a)(p,1)[0];Object(g.useEffect)((function(){function e(){return(e=Object(m.a)(f.a.mark((function e(){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,Object(y.b)({});case 4:t=e.sent,r=t.data,n(r);case 7:return e.prev=7,d(!1),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[0,,7,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var I={0:{color:"info",text:"\u89c4\u5212\u4e2d"},1:{color:"primary",text:"\u5b9e\u65bd\u4e2d"},2:{color:"warning",text:"\u4ea4\u4ed8\u6d4b\u8bd5"},3:{color:"secondary",text:"\u5df2\u5b8c\u6210"}},k=[{title:"#",dataIndex:"icon",render:function(e){return Object(w.jsx)(j.a,{fallback:"https://gitee.com/chinesee/images/raw/master/magic-ui/img_001.png",height:100,src:e,width:100})}},{title:"\u9879\u76ee\u540d\u79f0",dataIndex:"name",render:function(e){return Object(w.jsx)(v.c,{className:"primary",to:"/page1",children:e})}},{title:"\u5468\u671f",dataIndex:"date"},{title:"\u8fdb\u5ea6",dataIndex:"progress",render:function(e){return Object(w.jsx)("span",{className:"".concat(I[e].color," px-2 py-1 rounded"),style:{background:"rgba(var(--".concat(I[e].color,"-light))")},children:I[e].text})}},{title:"\u6210\u5458",dataIndex:"team",render:function(e){return Object(w.jsx)(u.a.Group,{maxCount:3,children:e.map((function(e){var t=e.id,r=e.name,n=e.avatar;return Object(w.jsx)(s.a,{title:r,children:Object(w.jsx)(u.a,{src:n})},t)}))})}},{title:"\u64cd\u4f5c",key:"id",render:function(){return Object(w.jsx)(i.a,{overlay:Object(w.jsxs)(b.a,{children:[Object(w.jsx)(b.a.Item,{children:"\u67e5\u770b"}),Object(w.jsx)(b.a.Item,{children:"\u7f16\u8f91"}),Object(w.jsx)(b.a.Item,{children:"\u5220\u9664"})]}),trigger:["click"],children:Object(w.jsx)(O.a,{className:"text-gray-600 cursor-pointer",size:"24"})})}}];return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(c.a,{columns:k,dataSource:r,loading:l,pagination:x,rowKey:"id"})})}}}]);
//# sourceMappingURL=17.12385895.chunk.js.map