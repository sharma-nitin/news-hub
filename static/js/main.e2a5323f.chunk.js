(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports=a(118)},110:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),l=(a(110),a(35)),s=a(36),u=a(48),o=a(37),p=a(49),d=a(45),m=a(136),f=a(130),g=a(135),h=a(90),E=a.n(h),b="https://newsapi.org/v2/top-headlines?country=in";function v(e){return{type:"PAGE_CHANGED",activePage:e}}var O=a(132),y=a(131),j=a(134),P=a(133),C=a(91),w=a.n(C),x=a(137),A=a(139),D=a(138),R=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(x.a,{inverted:!0,vertical:!0,style:{padding:"2em 0em"}},r.a.createElement(f.a,null,r.a.createElement(A.a,{divided:!0,inverted:!0,stackable:!0,centered:!0},r.a.createElement(A.a.Row,{textAlign:"center"},r.a.createElement(A.a.Column,{as:"a",href:"https://newsapi.org/",textAlign:"center"},r.a.createElement(D.a,{as:"h3",color:"blue"},"Powered By AFour Tech"))))))}}]),t}(n.Component),I=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.status;return"loading"===n?r.a.createElement(O.a,{active:!0},r.a.createElement(y.a,null)):"success"===n?r.a.createElement("div",null,r.a.createElement(f.a,{style:{padding:"20px"}},r.a.createElement(j.a.Group,null,a.articles.map(function(e,t){return r.a.createElement(j.a,{href:e.url,key:t,color:"red",centered:!0,raised:!0},r.a.createElement(g.a,{bordered:!0,src:e.urlToImage&&"http"===e.urlToImage.substr(0,4)?e.urlToImage:w.a}),r.a.createElement(j.a.Content,null,r.a.createElement(j.a.Header,null,e.title),r.a.createElement(j.a.Meta,{textAlign:"right"},e.author),r.a.createElement(j.a.Description,null,e.description)),r.a.createElement(j.a.Content,{textAlign:"right",extra:!0},e.source.name,r.a.createElement("br",null),e.publishedAt))}))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(P.a,{color:"teal",ellipsisItem:null,inverted:!0,totalPages:a.totalResults?Math.ceil(a.totalResults/6):3,activePage:this.props.activePage,onPageChange:function(t,a){var n=a.activePage;return e.props.changePage(n)}})),r.a.createElement("br",null),r.a.createElement(R,null)):null}}]),t}(n.Component),S=Object(d.b)(function(e){return{activePage:e.activePage,data:e.data,status:e.status}},function(e){return{changePage:function(t){return e(v(t))}}})(I),k=(a(117),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchData(b+"&pageSize=6&page="+this.props.activePage+"&apiKey=5f98a99c08c34b8ea53baa592aad5114")}},{key:"componentDidUpdate",value:function(e){this.props.activePage!==e.activePage&&this.props.fetchData(b+"&pageSize=6&page="+this.props.activePage+"&apiKey=5f98a99c08c34b8ea53baa592aad5114")}},{key:"render",value:function(){return"error"!==this.props.status?r.a.createElement("div",null,r.a.createElement(m.a,{fluid:!0,stackable:!0,inverted:!0,color:"teal"},r.a.createElement(f.a,null,r.a.createElement(m.a.Item,{as:"a",href:" ",header:!0,className:"title"},"News Hub"))),r.a.createElement(S,null)):r.a.createElement("div",{style:{marginTop:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.a.createElement(g.a,{src:E.a,size:"big",centered:!0}),r.a.createElement("h1",{style:{textAlign:"center"}},r.a.createElement("br",null),"No News Available"))}}]),t}(n.Component)),N=Object(d.b)(function(e){return{status:e.status,totalResults:e.data.totalResults,activePage:e.activePage}},function(e){return{changePage:function(t){return e(v(t))},fetchData:function(t){return e(function(e){return function(t){t({type:"LOADING"}),fetch(e,{credentials:"omit"}).then(function(e){return e.json()}).then(function(e){t(function(e){return{type:"SUCCESS",items:e}}(e))}).catch(function(){var e;t({type:"ERROR",statusCode:e})})}}(t))}}})(k),_=a(50),G=a(93),T=a(56),H={data:[],statusCode:"200",status:"initial",activePage:1},M=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.c)(Object(_.a)(G.a)),U=Object(_.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(T.a)({},e,{status:"loading"});case"SUCCESS":return Object(T.a)({},e,{status:"success",data:t.items});case"ERROR":return Object(T.a)({},e,{status:"error",statusCode:t.statusCode});case"PAGE_CHANGED":return Object(T.a)({},e,{activePage:t.activePage});default:return e}},M);i.a.render(r.a.createElement(d.a,{store:U},r.a.createElement(N,null)),document.getElementById("root"))},90:function(e,t,a){e.exports=a.p+"static/media/nonews.a8f0a275.png"},91:function(e,t,a){e.exports=a.p+"static/media/news-icon.d08f12af.png"}},[[105,1,2]]]);
//# sourceMappingURL=main.e2a5323f.chunk.js.map