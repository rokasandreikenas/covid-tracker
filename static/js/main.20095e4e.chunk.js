(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{205:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(68),o=a.n(c),u=a(6),s=a.n(u),i=a(10),l=a(69),d=a(70),f=a(80),p=a(79),m=(a(89),a(225)),v=a(229),h=a(226),b=a(227),y=a(71),g=a.n(y),E=a(72),O=a.n(E),x=(a(94),function(e){var t=e.data,a=t.confirmed,n=t.deaths,c=t.recovered,o=t.lastUpdate;if(!a)return r.a.createElement("div",null,"Loading...");var u=[{name:"Infected",style:"infected",value:a.value,description:"Number of actives cases of COVID-19"},{name:"Recovered",style:"recovered",value:c.value,description:"Number of recoveries from COVID-19"},{name:"Deaths",style:"deaths",value:n.value,description:"Number of deaths caused by COVID-19"}].map((function(e,t){return r.a.createElement(m.a,{item:!0,component:v.a,xs:12,md:3,className:O()("card",e.style),key:t},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},e.name),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:e.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},e.description)))}));return r.a.createElement("div",{className:"cards-container"},r.a.createElement(m.a,{container:!0,spacing:3,justify:"center"},u))}),C=a(30),j=a(31),w=a.n(j),k="https://covid19.mathdro.id/api",D=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k,t&&(a="".concat(k,"/countries/").concat(t)),e.prev=2,e.next=5,w.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat(k,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat(k,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),S=a(42),V=(a(205),function(e){var t=e.data,a=t.confirmed,c=t.deaths,o=t.recovered,u=e.country,l=Object(n.useState)([]),d=Object(C.a)(l,2),f=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=f.length?r.a.createElement(S.b,{data:{labels:f.map((function(e){return e.date})),datasets:[{data:f.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:f.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,v=a?r.a.createElement(S.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!1,title:{display:!0,text:"Current state in ".concat(u)}}}}):null;return r.a.createElement("div",{className:"chart-container"},u?v:m)}),U=a(230),B=a(228),J=(a(206),function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(C.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(U.a,{className:"form-control"},r.a.createElement(B.a,{defaultValue:"",onChange:function(e){t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))))}),R=a(78),A=a.n(R),G=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:A.a,className:"corona-image",alt:"COVID-19"}),r.a.createElement(x,{data:t}),r.a.createElement(J,{handleCountryChange:this.handleCountryChange}),r.a.createElement(V,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(G,null),document.getElementById("root"))},78:function(e,t,a){e.exports=a.p+"static/media/covid.d7265326.png"},83:function(e,t,a){e.exports=a(207)},89:function(e,t,a){},94:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.20095e4e.chunk.js.map