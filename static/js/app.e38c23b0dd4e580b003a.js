webpackJsonp([2,0],{0:function(t,s,a){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var n=a(128),i=e(n),o=a(124),u=e(o);new i["default"]({el:"body",components:{App:u["default"]}})},2:function(t,s,a){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0});var n=a(1),i=e(n),o={standard:1500,resting:300},u=function(t,s){var a=i["default"].duration(o[s],"seconds"),e=(0,i["default"])().diff(t,"seconds"),n=a.subtract(e,"seconds");return n},d=function(t,s,a){var e=u(t,s),n=e.minutes()>0?e.minutes():0,i=e.seconds()>0?e.seconds():0,o="";return"minute"===a?o=n+"m":(n=n>9?""+n:"0"+n,i=i>9?""+i:"0"+i,o=n+":"+i),o};s["default"]={getRemaning:u,getContdown:d}},105:function(t,s,a){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0});var n=a(3),i=e(n),o=a(116),u=(e(o),function(){var t=window.firebaseui,s={signInSuccessUrl:"/",signInOptions:[i["default"].auth.GoogleAuthProvider.PROVIDER_ID,i["default"].auth.EmailAuthProvider.PROVIDER_ID],tosUrl:"/zx"},a=new t.auth.AuthUI(i["default"].auth());a.start("#firebaseui-auth-container",s),i["default"].auth().onAuthStateChanged(function(t){if(t){t.displayName,t.email,t.emailVerified,t.photoURL,t.uid,t.providerData;t.getToken().then(function(t){})}},function(t){})});s["default"]={init:u}},106:function(t,s,a){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0});var n=a(111),i=(e(n),a(110)),o=(e(i),a(3)),u=e(o),d=a(126),c=e(d),l=a(105),r=(e(l),{apiKey:"AIzaSyAXBU7bIq9I5Hrn_PsX9HTArQ7D0AnxAtA",authDomain:"tomato5-685bf.firebaseapp.com",databaseURL:"https://tomato5-685bf.firebaseio.com",storageBucket:"tomato5-685bf.appspot.com"});u["default"].initializeApp(r),s["default"]={components:{Panel:c["default"]}}},107:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=function(){this.task.status=this.taskStatus.done,this.$dispatch("taskDone",this.task)},e=function(){this.task.status=this.taskStatus.idle,this.$dispatch("taskDropped",this.task)};s["default"]={props:["task","taskStatus"],data:function(){return{}},methods:{done:a,drop:e}}},108:function(t,s,a){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0});var n=a(1),i=e(n),o=a(125),u=e(o),d=a(127),c=e(d),l=a(2),r=e(l);window.moment=i["default"];var p={dropped:-1,idle:0,ongoning:1,paused:2,active:3,done:4},v={unknown:-1,idle:0,active:1,resting:2,busy:3},j={note:"Plan your work in this list.",status:p.idle,startTime:(0,i["default"])()},k={note:"Click tomato to start working.",status:p.idle,startTime:(0,i["default"])()},f={note:"After finishing, take a rest.",status:p.idle,startTime:(0,i["default"])()},h={note:"Restart if you are disturbed.",status:p.idle,startTime:(0,i["default"])()},m={note:"Take 5 to be more productive.",status:p.idle,startTime:(0,i["default"])()},g={user:"zhangxin840",tasks:[j,k,f,h,m]},b={name:"zhangxin840",photoURL:"https:///www.granneman.com/files/cache/716011d79afdd5969b0656b7ad5812b2.jpg"},S={label:"00:00",userStatus:v.idle,activeTask:null,emotionType:"p",emotionLevel:"2",isShowEmotions:!1},M=window.Notification,T=function(t,s){if(M){new M(t,{icon:"http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png",body:s})}},w=function(){S.userStatus=v.idle},z=function(){var t=(0,i["default"])();S.label=r["default"].getContdown(t,"resting","second"),S.userStatus=v.resting;var s=window.setInterval(function(){S.label=r["default"].getContdown(t,"resting","second"),r["default"].getRemaning(t,"resting").seconds()<=0&&(window.clearInterval(s),w())},1e3)},y=function(){this.list.tasks.push({note:"The "+(this.list.tasks.length+1)+"th task",status:p.idle,startTime:(0,i["default"])()})},N=function(t){this.panelStatus.activeTask=t,this.panelStatus.label=r["default"].getContdown(t.startTime,"standard","second"),this.panelStatus.userStatus=this.userStatus.busy},_=function(){this.panelStatus.userStatus=this.userStatus.idle,this.panelStatus.activeTask=null,window.setTimeout(function(){z()},1)},x=function(){this.panelStatus.userStatus=this.userStatus.idle,this.panelStatus.activeTask=null,this.panelStatus.label="00:00"},D=function(){T("Tomato 5","Tomato completed, nice job!"),this.panelStatus.userStatus=this.userStatus.active},L=function(t){this.panelStatus.label=r["default"].getContdown(t.startTime,"standard","second")},I=function(){this.panelStatus.isShowEmotions=!this.panelStatus.isShowEmotions},C=function(t,s){this.panelStatus.isShowEmotions=!1,this.panelStatus.emotionType=t,this.panelStatus.emotionLevel=s};s["default"]={data:function(){return{user:b,list:g,panelStatus:S,taskStatus:p,userStatus:v}},methods:{addTask:y,toggleEmotions:I,changeEmotion:C},components:{ActiveTask:u["default"],Task:c["default"]},events:{taskDone:_,taskDropped:x,taskStarted:N,taskTimeDue:D,taskTimerUpdated:L},computed:{doneCount:function(){var t=this;return this.list.tasks.reduce(function(s,a){return s+(a.status===t.taskStatus.done?1:0)},0)},emotionClass:function(){return this.panelStatus.emotionType+"-"+this.panelStatus.emotionLevel}}}},109:function(t,s,a){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0});var n=a(2),i=e(n),o=a(1),u=e(o),d=function(){this.task.status=this.taskStatus.done,this.$dispatch("taskDone",this.task)},c=function(){this.task.status=this.taskStatus.idle,window.clearInterval(this.timeInterval),this.$dispatch("taskDropped",this.task)},l=function(){this.task.status=this.taskStatus.active,this.$dispatch("taskTimeDue",this.task)},r=void 0,p=function(){var t=this;this.task.status=this.taskStatus.ongoing,this.task.startTime=(0,u["default"])(),this.$dispatch("taskStarted",this.task),this.timeInterval=window.setInterval(function(){t.$dispatch("taskTimerUpdated",t.task),i["default"].getRemaning(t.task.startTime,"standard").asMilliseconds()<=0&&(window.clearInterval(t.timeInterval),t.onTaskTimeDue())},1e3),Notification&&"granted"!==Notification.permission&&Notification.requestPermission()},v=function(){this.task.status===this.taskStatus.idle&&this.panelStatus.userStatus===this.userStatus.idle?this.start():this.task.status===this.taskStatus.ongoing&&this.drop()};s["default"]={props:["task","taskStatus","hide","panelStatus","userStatus"],data:function(){return{timeInterval:r}},methods:{onClick:v,onTaskTimeDue:l,start:p,done:d,drop:c},events:{}}},110:function(t,s){},111:function(t,s){},112:function(t,s){},113:function(t,s){},114:function(t,s){},115:function(t,s){},116:function(t,s){},118:function(t,s,a){function e(t){return a(n(t))}function n(t){return i[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var i={"./af":4,"./af.js":4,"./ar":8,"./ar-ma":5,"./ar-ma.js":5,"./ar-sa":6,"./ar-sa.js":6,"./ar-tn":7,"./ar-tn.js":7,"./ar.js":8,"./az":9,"./az.js":9,"./be":10,"./be.js":10,"./bg":11,"./bg.js":11,"./bn":12,"./bn.js":12,"./bo":13,"./bo.js":13,"./br":14,"./br.js":14,"./bs":15,"./bs.js":15,"./ca":16,"./ca.js":16,"./cs":17,"./cs.js":17,"./cv":18,"./cv.js":18,"./cy":19,"./cy.js":19,"./da":20,"./da.js":20,"./de":22,"./de-at":21,"./de-at.js":21,"./de.js":22,"./dv":23,"./dv.js":23,"./el":24,"./el.js":24,"./en-au":25,"./en-au.js":25,"./en-ca":26,"./en-ca.js":26,"./en-gb":27,"./en-gb.js":27,"./en-ie":28,"./en-ie.js":28,"./en-nz":29,"./en-nz.js":29,"./eo":30,"./eo.js":30,"./es":32,"./es-do":31,"./es-do.js":31,"./es.js":32,"./et":33,"./et.js":33,"./eu":34,"./eu.js":34,"./fa":35,"./fa.js":35,"./fi":36,"./fi.js":36,"./fo":37,"./fo.js":37,"./fr":40,"./fr-ca":38,"./fr-ca.js":38,"./fr-ch":39,"./fr-ch.js":39,"./fr.js":40,"./fy":41,"./fy.js":41,"./gd":42,"./gd.js":42,"./gl":43,"./gl.js":43,"./he":44,"./he.js":44,"./hi":45,"./hi.js":45,"./hr":46,"./hr.js":46,"./hu":47,"./hu.js":47,"./hy-am":48,"./hy-am.js":48,"./id":49,"./id.js":49,"./is":50,"./is.js":50,"./it":51,"./it.js":51,"./ja":52,"./ja.js":52,"./jv":53,"./jv.js":53,"./ka":54,"./ka.js":54,"./kk":55,"./kk.js":55,"./km":56,"./km.js":56,"./ko":57,"./ko.js":57,"./ky":58,"./ky.js":58,"./lb":59,"./lb.js":59,"./lo":60,"./lo.js":60,"./lt":61,"./lt.js":61,"./lv":62,"./lv.js":62,"./me":63,"./me.js":63,"./mk":64,"./mk.js":64,"./ml":65,"./ml.js":65,"./mr":66,"./mr.js":66,"./ms":68,"./ms-my":67,"./ms-my.js":67,"./ms.js":68,"./my":69,"./my.js":69,"./nb":70,"./nb.js":70,"./ne":71,"./ne.js":71,"./nl":72,"./nl.js":72,"./nn":73,"./nn.js":73,"./pa-in":74,"./pa-in.js":74,"./pl":75,"./pl.js":75,"./pt":77,"./pt-br":76,"./pt-br.js":76,"./pt.js":77,"./ro":78,"./ro.js":78,"./ru":79,"./ru.js":79,"./se":80,"./se.js":80,"./si":81,"./si.js":81,"./sk":82,"./sk.js":82,"./sl":83,"./sl.js":83,"./sq":84,"./sq.js":84,"./sr":86,"./sr-cyrl":85,"./sr-cyrl.js":85,"./sr.js":86,"./ss":87,"./ss.js":87,"./sv":88,"./sv.js":88,"./sw":89,"./sw.js":89,"./ta":90,"./ta.js":90,"./te":91,"./te.js":91,"./th":92,"./th.js":92,"./tl-ph":93,"./tl-ph.js":93,"./tlh":94,"./tlh.js":94,"./tr":95,"./tr.js":95,"./tzl":96,"./tzl.js":96,"./tzm":98,"./tzm-latn":97,"./tzm-latn.js":97,"./tzm.js":98,"./uk":99,"./uk.js":99,"./uz":100,"./uz.js":100,"./vi":101,"./vi.js":101,"./x-pseudo":102,"./x-pseudo.js":102,"./zh-cn":103,"./zh-cn.js":103,"./zh-tw":104,"./zh-tw.js":104};e.keys=function(){return Object.keys(i)},e.resolve=n,t.exports=e,e.id=118},119:function(t,s){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM2Ni42MzYgMzY2LjYzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzY2LjYzNiAzNjYuNjM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iWE1MSURfOTM0XyI+DQoJPHBhdGggaWQ9IlhNTElEXzk0MF8iIHN0eWxlPSJmaWxsOiM1RkQyREI7IiBkPSJNMTgzLjMxOCwyMS40NjRMMjEzLjk1LDIuNjQ3YzExLjMxMS02Ljk0OCwyNy4wNzIsMC42ODgsMjUuNTU3LDEyLjM4Mg0KCQlsLTQuMTA0LDMxLjY2OWwzNC43MzYsMTIuODUyYzEyLjgyNiw0Ljc0NiwxMi44MjYsMjAuMDE3LDAsMjQuNzYzbC0zNC43MzYsMTIuODUybDQuMTA0LDMxLjY2OQ0KCQljMS41MTUsMTEuNjk0LTE0LjI0NiwxOS4zMy0yNS41NTcsMTIuMzgyTDE4My4zMTgsMTIyLjRsLTMwLjYzMiwxOC44MTdjLTExLjMxMSw2Ljk0OC0yNy4wNzItMC42ODgtMjUuNTU3LTEyLjM4Mmw0LjEwNC0zMS42NjkNCgkJTDk2LjQ5Niw4NC4zMTRjLTEyLjgyNi00Ljc0Ni0xMi44MjYtMjAuMDE3LDAtMjQuNzYzbDM0LjczNi0xMi44NTJsLTQuMTA0LTMxLjY2OUMxMjUuNjEzLDMuMzM2LDE0MS4zNzQtNC4zLDE1Mi42ODUsMi42NDgNCgkJTDE4My4zMTgsMjEuNDY0eiIvPg0KCTxwYXRoIGlkPSJYTUxJRF85MzdfIiBzdHlsZT0iZmlsbDojRkY1OTU5OyIgZD0iTTM0Mi4xNzYsMjA3Ljc3OGMwLDg3LjczNS03MS4xMjMsMTU4Ljg1OC0xNTguODU4LDE1OC44NTgNCgkJUzI0LjQ2LDI5NS41MTMsMjQuNDYsMjA3Ljc3OFM5NS41ODMsNzguMjkyLDE4My4zMTgsNzguMjkyUzM0Mi4xNzYsMTIwLjA0MywzNDIuMTc2LDIwNy43Nzh6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="},120:function(t,s,a){t.exports=" <div id=app> <div class=title> <img class=logo src="+a(119)+'> <h1 class="">Tomato 5</h1> </div> <p class=instruction><span>Concentrate for work</span> <span>five times a day</span></p> <panel></panel> <div id=firebaseui-auth-container></div> <div id=sign-in-status></div> <div id=sign-in></div> <div id=account-details></div> </div> '},121:function(t,s){t.exports=' <div class=task v-bind:class="{\n           \'idle\': task.status === taskStatus.idle,\n           \'ongoing\': task.status === taskStatus.ongoing,\n           \'active\': task.status === taskStatus.active,\n           \'done\': task.status === taskStatus.done,\n           \'hide\': this.hide,\n         }" _v-83ccc706=""> <span class="icon tomato animated" v-bind:class="{\n        \'tada \': task.status === taskStatus.idle,\n        \'pulse infinite\': task.status === taskStatus.ongoing,\n        \'swing infinite\': task.status === taskStatus.active,\n        \'done\': task.status === taskStatus.done,\n      }" v-on:click=onClick(task) _v-83ccc706=""> {{ task.note }} </span> <div class=note-wrapper _v-83ccc706=""> <input class=note type=text name=name :value=task.note placeholder="Title of this task" _v-83ccc706=""> <div class=activeTask _v-83ccc706=""> <p class=operations v-show="task.status === taskStatus.active" _v-83ccc706=""> <span class=done v-on:click=done _v-83ccc706="">Done</span> <span class=drop v-on:click=drop _v-83ccc706="">Drop</span> </p> </div> </div> </div> '},122:function(t,s){t.exports=' <section class=panel v-bind:class="{\n            \'resting\': panelStatus.userStatus === userStatus.resting,\n            \'idle\': panelStatus.userStatus === userStatus.idle,\n            \'busy\': panelStatus.userStatus === userStatus.busy,\n          }" _v-b6d61088=""> <div class=user _v-b6d61088=""> <div class=status _v-b6d61088=""> <div class="emotion avator" v-on:click=toggleEmotions _v-b6d61088=""> <span class="inner {{emotionClass}}" _v-b6d61088=""></span> </div> <span class="timer animated" v-show="panelStatus.userStatus >= 0" v-bind:class="{\n              \'rubberBand\': (panelStatus.userStatus === userStatus.busy) || (panelStatus.userStatus === userStatus.resting)\n            }" _v-b6d61088=""> {{ panelStatus.label }} </span> </div> <div class=emotions v-bind:class="{\n            \'expanded\': panelStatus.isShowEmotions\n          }" _v-b6d61088=""> <p _v-b6d61088=""> Select your energy level: </p> <div class=selections _v-b6d61088=""> <p _v-b6d61088=""> </p><div class=emotion v-on:click="changeEmotion(\'p\', 1)" _v-b6d61088=""> <span class="inner p-1" _v-b6d61088=""></span> </div> <div class=emotion v-on:click="changeEmotion(\'p\', 2)" _v-b6d61088=""> <span class="inner p-2" _v-b6d61088=""></span> </div> <div class=emotion v-on:click="changeEmotion(\'p\', 3)" _v-b6d61088=""> <span class="inner p-3" _v-b6d61088=""></span> </div> <div class=emotion v-on:click="changeEmotion(\'p\', 4)" _v-b6d61088=""> <span class="inner p-4" _v-b6d61088=""></span> </div> <p _v-b6d61088=""></p> <p _v-b6d61088=""> </p><div class=emotion v-on:click="changeEmotion(\'n\', 1)" _v-b6d61088=""> <span class="inner n-1" _v-b6d61088=""></span> </div> <div class=emotion v-on:click="changeEmotion(\'n\', 2)" _v-b6d61088=""> <span class="inner n-2" _v-b6d61088=""></span> </div> <div class=emotion v-on:click="changeEmotion(\'n\', 3)" _v-b6d61088=""> <span class="inner n-3" _v-b6d61088=""></span> </div> <div class=emotion v-on:click="changeEmotion(\'n\', 4)" _v-b6d61088=""> <span class="inner n-4" _v-b6d61088=""></span> </div> <p _v-b6d61088=""></p> </div> </div> </div> <div class=tasks _v-b6d61088=""> <div class=list _v-b6d61088=""> <template v-for="task in list.tasks"> <task v-bind:task=task v-bind:task-status=taskStatus v-bind:panel-status=panelStatus v-bind:user-status=userStatus v-bind:hide="!((panelStatus.userStatus === userStatus.idle)\n                  || (task.status === taskStatus.ongoing || task.status === taskStatus.active))\n                  &amp;&amp; !(panelStatus.userStatus === userStatus.resting &amp;&amp; task.status === taskStatus.done)" _v-b6d61088=""> </task> </template> </div> <span class="icon add" v-show="doneCount >= 5" v-on:click=addTask _v-b6d61088="">Add task</span> </div> </section> '},123:function(t,s){t.exports=' <div class=activeTask _v-e3e71cba=""> <p class=operations v-show="task.status === taskStatus.active" _v-e3e71cba=""> <span class=done v-on:click=done _v-e3e71cba="">Done</span> <span class=drop v-on:click=drop _v-e3e71cba="">Drop</span> </p> </div> '},124:function(t,s,a){var e,n;a(112),e=a(106),n=a(120),t.exports=e||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},125:function(t,s,a){var e,n;a(115),e=a(107),n=a(123),t.exports=e||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},126:function(t,s,a){var e,n;a(114),e=a(108),n=a(122),t.exports=e||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},127:function(t,s,a){var e,n;a(113),e=a(109),n=a(121),t.exports=e||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}});
//# sourceMappingURL=app.e38c23b0dd4e580b003a.js.map