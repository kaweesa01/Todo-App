(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/plus.61c464b9.svg"},function(e,t,n){e.exports=n.p+"static/media/remove.bd4ff3f5.svg"},function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(7),r=n.n(c),o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(15);var s=n(2),u=n(3),d=n(1),v=n(5),h=n(4),m=n(8),p=n.n(m),f=n(9),y=n.n(f),E=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={activity:[]},e.activityDisplay=e.activityDisplay.bind(Object(d.a)(e)),e}return Object(u.a)(n,[{key:"activityDisplay",value:function(){var e=this;return this.props.activity.map((function(t){return i.a.createElement("div",{className:"activity"},i.a.createElement("h5",{className:"firstChild",style:{color:t.completed?"lime":"red"}},t.activity),i.a.createElement("input",{type:"checkbox",checked:t.completed,onChange:function(){e.props.eventHandler(t.id)}}),i.a.createElement("button",{className:"lastChild",onClick:function(){return e.props.deleteHandler(t.id)}},i.a.createElement("img",{src:y.a})))}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"activity-container"},this.activityDisplay())}}]),n}(i.a.Component),g=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).activityStore=[],e.state={activity:[],id:0},e.ChangeEvent=e.ChangeEvent.bind(Object(d.a)(e)),e.handelClick=e.handelClick.bind(Object(d.a)(e)),e.completedCount=e.completedCount.bind(Object(d.a)(e)),e.deleteEvent=e.deleteEvent.bind(Object(d.a)(e)),e}return Object(u.a)(n,[{key:"handelClick",value:function(e){var t=this;e.preventDefault(),this.setState((function(e){return{id:e.id+1}}));var n=e.currentTarget.parentElement.firstChild.value;if(""!==n){var a={id:this.state.id,activity:n,completed:!1};this.activityStore.push(a),this.setState((function(e){return{activity:t.activityStore}})),e.currentTarget.parentElement.firstChild.value=""}}},{key:"ChangeEvent",value:function(e){this.setState((function(t){return{activity:t.activity.map((function(t){return e===t.id&&(t.completed=!t.completed),t}))}}))}},{key:"completedCount",value:function(){if("undefined"!==this.state.activity)return this.state.activity.map((function(e){return!0===e.completed?e:null}))}},{key:"deleteEvent",value:function(e){var t=this,n=this.state.activity.map((function(e){return e.id})).indexOf(e);this.setState((function(e){return t.state.activity.splice(n,1),{activity:t.state.activity}}))}},{key:"render",value:function(){var e=[],t=[];return this.completedCount().forEach((function(n){null===n?e.push("No"):t.push("Yes")})),i.a.createElement("div",{className:"container"},i.a.createElement("div",null,i.a.createElement("div",{className:"title"},i.a.createElement("h2",null,"My Activity Pad")),i.a.createElement("form",{className:"input-form"},i.a.createElement("input",{type:"text",placeholder:"Enter Activity"}),i.a.createElement("button",{className:"addBtn",onClick:this.handelClick}," ",i.a.createElement("img",{src:p.a})," Add")),i.a.createElement("div",{className:"status"},i.a.createElement("h5",{className:"completed"},"Completed: ",t.length," /",this.state.activity.length),i.a.createElement("h5",{className:"incomplete"},"Incomplete: ",e.length))),"undefined"!==this.state.activity?i.a.createElement(E,{key:this.state.activity.id,activity:this.state.activity,eventHandler:this.ChangeEvent,deleteHandler:this.deleteEvent}):null)}}]),n}(i.a.Component);var b=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(g,null))};r.a.render(i.a.createElement("div",null,i.a.createElement(b,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");o?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(t,e)}))}}()}],[[10,1,2]]]);
//# sourceMappingURL=main.beef93e2.chunk.js.map