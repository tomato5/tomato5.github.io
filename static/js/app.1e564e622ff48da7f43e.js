webpackJsonp([2,0],{0:function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var i=e(146),n=a(i),o=e(216),u=a(o);new n["default"]({el:"body",components:{App:u["default"]}})},12:function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(29),n=a(i),o=e(203),u=(a(o),{displayName:"",email:"",emailVerified:!1,photoURL:"",uid:""}),l=function(){var t=window.firebaseui,s={signInOptions:[n["default"].auth.GoogleAuthProvider.PROVIDER_ID,n["default"].auth.EmailAuthProvider.PROVIDER_ID],tosUrl:"/zx"},e=new t.auth.AuthUI(n["default"].auth());e.start("#firebaseui-auth-container",s)},r=function(){n["default"].auth().onAuthStateChanged(function(t){t?(u.displayName=t.displayName,u.email=t.email,u.emailVerified=t.emailVerified,u.photoURL=t.photoURL,u.uid=t.uid):(u.displayName="",u.email="",u.emailVerified=!1,u.photoURL="",u.uid="",l())},function(t){})},d=function(){return u},c=function(){n["default"].auth().signOut().then(function(){window.location.reload()},function(t){window.location.reload()})};s["default"]={init:r,getUser:d,logout:c}},16:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={standard:1500,resting:300},a=60,i=1e3,n={apiKey:"AIzaSyCbB0yB-qabmzQ_STyAngEd5-D0MypBbBE",authDomain:"tomato5-pro.firebaseapp.com",databaseURL:"https://tomato5-pro.firebaseio.com",storageBucket:"tomato5-pro.appspot.com"};"localhost"!==window.location.hostname&&"tomato5-dev.firebaseapp.com"!==window.location.hostname||(s.taskDurations=e={standard:10,resting:5},s.offLineThreshold=a=1,s.checkMemberInterval=i=1e3,s.firebaseConfig=n={apiKey:"AIzaSyBanxSDWrWUKStXGi8lSQtA1AeMmGDNmks",authDomain:"tomato5-dev.firebaseapp.com",databaseURL:"https://tomato5-dev.firebaseio.com",storageBucket:"tomato5-dev.appspot.com"}),s.taskDurations=e,s.offLineThreshold=a,s.checkMemberInterval=i,s.firebaseConfig=n},17:function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(155),n=a(i),o=e(31),u=a(o),l=e(29),r=a(l),d=null,c=function(){d=r["default"].database()},v=function(t,s){var e=d.ref(t);return e.on("value",s),e},f=function(t,s,e){var a=new u["default"](function(a,i){d.ref(t).once("value",function(t){var i=t.val();console.log("Reveived Data"),e&&e(i)||!e&&i?(console.log("Valid Data"),a(i)):(console.log("No valid Data"),a(s))},function(){i()})});return a},m=function(t,s){var e=JSON.parse((0,n["default"])(s));return d.ref(t).set(e).then(function(){console.log("Saved")})};s["default"]={init:c,get:f,save:m,watch:v}},18:function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0}),s.userData=s.team=s.tasks=s.availabilities=s.taskStatus=void 0;var i=e(1),n=a(i),o={dropped:-1,idle:0,ongoing:1,paused:2,active:3,done:4},u={unknown:-1,idle:0,active:1,resting:2,busy:3},l={note:"Plan your work in this list.",status:o.idle,startTime:null,createTime:(0,n["default"])(),emotion:2},r={note:"Click tomato to start working.",status:o.idle,startTime:null,createTime:(0,n["default"])(),emotion:2},d={note:"After finishing, take a rest.",status:o.idle,startTime:null,createTime:(0,n["default"])(),emotion:2},c={note:"Restart if you are disturbed.",status:o.idle,startTime:null,createTime:(0,n["default"])(),emotion:2},v={note:"Take 5 tomatoes to be more productive.",status:o.idle,startTime:null,createTime:(0,n["default"])(),emotion:2},f=[l,r,d,c,v],m={info:{inviteCode:"HFE-Train",name:"HFE-Train"},members:{UID:{rule:"member",userInfo:{},userStatus:{},tasks:[],updateTime:""}}},p={teamData:{currentTeam:""},systemData:{rule:"normal"}};s.taskStatus=o,s.availabilities=u,s.tasks=f,s.team=m,s.userData=p},19:function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(1),n=a(i),o=e(16),u=function(t,s){var e=n["default"].duration(o.taskDurations[s],"seconds"),a=(0,n["default"])().diff(t,"seconds"),i=e.subtract(a,"seconds");return i},l=function(t,s,e){var a=u(t,s),i=a.minutes()>0?a.minutes():0,n=a.seconds()>0?a.seconds():0,o="";return"minute"===e?o=i+1+"m":(i=i>9?""+i:"0"+i,n=n>9?""+n:"0"+n,o=i+":"+n),o};s["default"]={getRemaning:u,getContdown:l}},30:function(t,s,e){var a,i;e(198),a=e(150),i=e(211),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},147:function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(194),n=(a(i),e(193)),o=(a(n),e(29)),u=a(o),l=e(204),r=a(l),d=e(220),c=a(d),v=e(217),f=a(v),m=e(17),p=a(m),h=e(12),k=a(h),b=e(16),j=k["default"].getUser(),T=function(){u["default"].initializeApp(b.firebaseConfig),p["default"].init(),k["default"].init(),"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){r["default"].attach(document.body)},!1)};s["default"]={data:function(){return{user:j}},created:T,components:{Panel:c["default"],Account:f["default"]}}},148:function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(12),n=a(i),o=n["default"].getUser(),u=function(){n["default"].logout()};s["default"]={data:function(){return{user:o}},methods:{logout:u}}},149:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=function(){this.task.status=this.taskStatus.done,this.$dispatch("taskDone",this.task)},a=function(){this.task.status=this.taskStatus.idle,this.$dispatch("taskDropped",this.task)};s["default"]={props:["task","taskStatus"],data:function(){return{}},methods:{done:e,drop:a}}},150:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s["default"]={props:["level"],data:function(){return{}},computed:{emotionLevelClass:function(){return(this.level>0?"p":"n")+"-"+Math.abs(this.level)}},methods:{}}},151:function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(19),n=a(i),o=e(1),u=a(o),l=e(30),r=a(l),d=e(18),c=e(16),v="",f=null,m=!0,p=function(){var t=this;f=window.setInterval(function(){t.activeTask&&t.activeTask.status===d.taskStatus.ongoing?t.taskTimeLable=n["default"].getContdown(t.activeTask.startTime,"standard","minute"):t.taskTimeLable="",t.updateTime?(t.updateTime=(0,u["default"])(t.updateTime),(0,u["default"])().diff(t.updateTime,"minutes")>c.offLineThreshold?t.isOffline=!0:t.isOffline=!1):t.isOffline=!0},c.checkMemberInterval)},h=function(){window.clearInterval(this.statusChecker)};s["default"]={props:["tasks","userStatus","userInfo","updateTime"],data:function(){return{taskStatus:d.taskStatus,availabilities:d.availabilities,taskTimeLable:v,statusChecker:f,isOffline:m}},methods:{},components:{Emotion:r["default"]},created:p,beforeDestroy:h,computed:{activeTask:function(){var t=null;if(this.tasks)for(var s=0;s<this.tasks.length;s++)if(this.tasks[s].status===d.taskStatus.ongoing){t=this.tasks[s];break}return t}}}},152:function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(1),n=a(i),o=e(146),u=(a(o),e(218)),l=a(u),r=e(221),d=a(r),c=e(30),v=a(c),f=e(222),m=a(f),p=e(19),h=a(p),k=e(18),b=e(17),j=a(b),T=e(12),g=a(T),M=g["default"].getUser(),_=null,S={label:"00:00",activeTask:null,isShowEmotions:!1},y={availability:k.availabilities.idle,emotion:"2",currentTeam:"HFE-Train"},D=window.Notification,w=function(t,s){if(D){new D(t,{icon:"http://tomato5.github.io/static/icons/tomato.png",body:s})}},x=function(){return"tasks/"+g["default"].getUser().uid+"/"+(0,n["default"])().format("YYYYMMDD")},N=function(){var t=[];this.tasks.forEach(function(s){s.createTime&&(0,n["default"])(s.createTime).format("YYYYMMDD")===(0,n["default"])().format("YYYYMMDD")&&t.push(s)}),j["default"].save(x(),t),this.$broadcast("publish")},z=null,L=function(){y.availability=k.availabilities.idle,this.$broadcast("publish")},C=function(){var t=this,s=(0,n["default"])();S.label=h["default"].getContdown(s,"resting","second"),y.availability=k.availabilities.resting,z=window.setInterval(function(){S.label=h["default"].getContdown(s,"resting","second"),h["default"].getRemaning(s,"resting").asMilliseconds()<=0&&(window.clearInterval(z),t.onRestTimeDue())},1e3),this.$broadcast("publish")},I=function(){this.panelStatus.label="00:00",this.userStatus.availability=k.availabilities.idle,z&&window.clearInterval(z),this.$broadcast("publish")},E=function(){this.userStatus.availability===this.availabilities.resting?this.stopResting():this.userStatus.availability===this.availabilities.busy&&this.$broadcast("clearTask")},P=function(){this.tasks.push({note:"The "+(this.tasks.length+1)+"th task",status:k.taskStatus.idle,startTime:null,createTime:(0,n["default"])(),emotion:2}),this.saveTasks()},O=function(t){this.panelStatus.activeTask=t,this.panelStatus.label=h["default"].getContdown(t.startTime,"standard","second"),this.userStatus.availability=this.availabilities.busy,t.emotion=this.userStatus.emotion,this.saveTasks()},Y=function(t){var s=this;this.userStatus.availability=this.availabilities.idle,this.panelStatus.activeTask=null,t.emotion=this.userStatus.emotion,window.setTimeout(function(){s.startRest()},1),this.saveTasks()},U=function(){this.userStatus.availability=this.availabilities.idle,this.panelStatus.activeTask=null,this.panelStatus.label="00:00",this.saveTasks()},Q=function(){w("Tomato 5","Tomato completed, nice job!"),this.userStatus.availability=this.availabilities.active,this.saveTasks()},R=function(t){this.panelStatus.label=h["default"].getContdown(t.startTime,"standard","second")},A=function(){this.saveTasks()},F=function(){this.panelStatus.isShowEmotions=!this.panelStatus.isShowEmotions},J=function(t){this.panelStatus.isShowEmotions=!1,this.userStatus.emotion=t,this.panelStatus.activeTask&&this.panelStatus.activeTask.status===k.taskStatus.ongoing&&(this.panelStatus.activeTask=this.userStatus.emotion),this.$broadcast("publish")},Z=function(){this.initTasks()},B=function(){var t=this,s=function(t){return t.forEach(function(t){t.createTime=t.createTime&&(0,n["default"])(t.createTime),t.startTime=t.startTime&&(0,n["default"])(t.startTime),t.emotion=t.emotion||2,t.status=t.status||k.taskStatus.idle,t.note=t.note||"",t.status!==k.taskStatus.done&&(t.startTime=null,t.status=k.taskStatus.idle)}),t};return j["default"].get(x(),k.tasks).then(function(e){return t.tasks=s(e),t.tasks})};s["default"]={data:function(){return{user:M,tasks:_,panelStatus:S,userStatus:y,taskStatus:k.taskStatus,availabilities:k.availabilities}},methods:{addTask:P,toggleEmotions:F,changeEmotion:J,initTasks:B,saveTasks:N,onTimerClicked:E,startRest:C,onRestTimeDue:L,stopResting:I},components:{ActiveTask:l["default"],Task:d["default"],Emotion:v["default"],TeamPanel:m["default"]},events:{taskDone:Y,taskDropped:U,taskStarted:O,taskTimeDue:Q,taskTimerUpdated:R,taskEdited:A},created:Z,computed:{doneCount:function(){var t=this;return this.tasks.reduce(function(s,e){return s+(e.status===t.taskStatus.done?1:0)},0)},emotionClass:function(){var t=this.userStatus.emotion;return(t>0?"p":"n")+"-"+Math.abs(t)}}}},153:function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(1),n=a(i),o=e(19),u=a(o),l=e(30),r=a(l),d=function(){this.task.status=this.taskStatus.done,this.$dispatch("taskDone",this.task)},c=function(){this.task.status=this.taskStatus.idle,window.clearInterval(this.timeInterval),this.$dispatch("taskDropped",this.task)},v=function(){this.task.status===this.taskStatus.ongoing&&this.drop()},f=function(){this.$dispatch("taskEdited",this.task)},m=function(){this.task.status=this.taskStatus.active,this.$dispatch("taskTimeDue",this.task)},p=void 0,h=function(){var t=this;this.task.status=this.taskStatus.ongoing,this.task.startTime=(0,n["default"])(),this.$dispatch("taskStarted",this.task),this.timeInterval=window.setInterval(function(){t.$dispatch("taskTimerUpdated",t.task),u["default"].getRemaning(t.task.startTime,"standard").asMilliseconds()<=0&&(window.clearInterval(t.timeInterval),t.onTaskTimeDue())},1e3),Notification&&"granted"!==Notification.permission&&Notification.requestPermission()},k=function(){this.task.status===this.taskStatus.idle&&this.userStatus.availability===this.availabilities.idle?this.start():this.task.status===this.taskStatus.ongoing&&this.drop()};s["default"]={props:["task","taskStatus","hide","disabled","userStatus","availabilities"],data:function(){return{timeInterval:p}},methods:{onClick:k,onTaskTimeDue:m,onTaskEdited:f,start:h,done:d,drop:c},events:{clearTask:v},components:{Emotion:r["default"]}}},154:function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(156),n=a(i),o=e(31),u=a(o),l=e(1),r=a(l),d=e(219),c=a(d),v=e(17),f=a(v),m=e(12),p=a(m),h=e(18),k=null,b=null,j={inviteCode:"",name:"",isShow:!1,isJoin:!0},T=function(){this.teamForm.isShow=!this.teamForm.isShow},g=null,M=function(){var t=void 0;if(this.userTeamData&&this.userTeamData.currentTeam){var s="teams/"+this.userTeamData.currentTeam+"/members/"+p["default"].getUser().uid;t=f["default"].save(s,{rule:"member",userInfo:this.userInfo,userStatus:this.userStatus,tasks:this.tasks,updateTime:(0,r["default"])()}).then(function(){console.log("published")})}else t=u["default"].resolve();return t},_=function(t){var s=this;t&&this.userTeamData&&(this.userTeamData.currentTeam=t,g&&g.off(),this.publishToTeam().then(function(){s.watchTeam()}),this.saveUserTeamData().then(function(){s.teamForm.isShow=!1}))},S=function(t,s){var e=this;t&&s&&f["default"].save("teams/"+t,{info:{inviteCode:t,name:s},members:[]}).then(function(){return console.log("Team created"),e.joinTeam(t)})},y=function(t,s){f["default"].save("teams/"+t+"/info",{inviteCode:t,name:s}).then(function(){console.log("Name changed")})},D=function(t){return t&&t.members&&(0,n["default"])(t.members).forEach(function(s){var e=t.members[s];e.tasks=e.tasks.filter(function(t){return t.createTime&&(0,r["default"])(t.createTime).format("YYYYMMDD")===(0,r["default"])().add(0,"d").format("YYYYMMDD")}),e.tasks=e.tasks.length>0?e.tasks:h.tasks}),t},w=function(){var t=this;g=f["default"].watch("teams/"+this.userTeamData.currentTeam,function(s){t.teamData=D(s.val())})},x=function(){var t=this;this.getUserTeamData().then(function(){t.teamForm.inviteCode=t.userTeamData.currentTeam,t.joinTeam(t.userTeamData.currentTeam)})},N=function(){var t=this;return f["default"].get("userData/"+p["default"].getUser().uid+"/teamData",{currentTeam:""}).then(function(s){t.userTeamData=s})},z=function(){return f["default"].save("userData/"+p["default"].getUser().uid+"/teamData",this.userTeamData)};s["default"]={props:["userInfo","userStatus","tasks"],data:function(){return{teamData:k,teamForm:j,userTeamData:b}},events:{publish:M},created:x,methods:{publishToTeam:M,watchTeam:w,getUserTeamData:N,saveUserTeamData:z,joinTeam:_,createTeam:S,changeTeamName:y,showForm:T},components:{Member:c["default"]}}},193:function(t,s){},194:function(t,s){},195:function(t,s){},196:function(t,s){},197:function(t,s){},198:function(t,s){},199:function(t,s){},200:function(t,s){},201:function(t,s){},202:function(t,s){},203:function(t,s){},206:function(t,s,e){function a(t){return e(i(t))}function i(t){return n[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var n={"./af":45,"./af.js":45,"./ar":49,"./ar-ma":46,"./ar-ma.js":46,"./ar-sa":47,"./ar-sa.js":47,"./ar-tn":48,"./ar-tn.js":48,"./ar.js":49,"./az":50,"./az.js":50,"./be":51,"./be.js":51,"./bg":52,"./bg.js":52,"./bn":53,"./bn.js":53,"./bo":54,"./bo.js":54,"./br":55,"./br.js":55,"./bs":56,"./bs.js":56,"./ca":57,"./ca.js":57,"./cs":58,"./cs.js":58,"./cv":59,"./cv.js":59,"./cy":60,"./cy.js":60,"./da":61,"./da.js":61,"./de":63,"./de-at":62,"./de-at.js":62,"./de.js":63,"./dv":64,"./dv.js":64,"./el":65,"./el.js":65,"./en-au":66,"./en-au.js":66,"./en-ca":67,"./en-ca.js":67,"./en-gb":68,"./en-gb.js":68,"./en-ie":69,"./en-ie.js":69,"./en-nz":70,"./en-nz.js":70,"./eo":71,"./eo.js":71,"./es":73,"./es-do":72,"./es-do.js":72,"./es.js":73,"./et":74,"./et.js":74,"./eu":75,"./eu.js":75,"./fa":76,"./fa.js":76,"./fi":77,"./fi.js":77,"./fo":78,"./fo.js":78,"./fr":81,"./fr-ca":79,"./fr-ca.js":79,"./fr-ch":80,"./fr-ch.js":80,"./fr.js":81,"./fy":82,"./fy.js":82,"./gd":83,"./gd.js":83,"./gl":84,"./gl.js":84,"./he":85,"./he.js":85,"./hi":86,"./hi.js":86,"./hr":87,"./hr.js":87,"./hu":88,"./hu.js":88,"./hy-am":89,"./hy-am.js":89,"./id":90,"./id.js":90,"./is":91,"./is.js":91,"./it":92,"./it.js":92,"./ja":93,"./ja.js":93,"./jv":94,"./jv.js":94,"./ka":95,"./ka.js":95,"./kk":96,"./kk.js":96,"./km":97,"./km.js":97,"./ko":98,"./ko.js":98,"./ky":99,"./ky.js":99,"./lb":100,"./lb.js":100,"./lo":101,"./lo.js":101,"./lt":102,"./lt.js":102,"./lv":103,"./lv.js":103,"./me":104,"./me.js":104,"./mk":105,"./mk.js":105,"./ml":106,"./ml.js":106,"./mr":107,"./mr.js":107,"./ms":109,"./ms-my":108,"./ms-my.js":108,"./ms.js":109,"./my":110,"./my.js":110,"./nb":111,"./nb.js":111,"./ne":112,"./ne.js":112,"./nl":113,"./nl.js":113,"./nn":114,"./nn.js":114,"./pa-in":115,"./pa-in.js":115,"./pl":116,"./pl.js":116,"./pt":118,"./pt-br":117,"./pt-br.js":117,"./pt.js":118,"./ro":119,"./ro.js":119,"./ru":120,"./ru.js":120,"./se":121,"./se.js":121,"./si":122,"./si.js":122,"./sk":123,"./sk.js":123,"./sl":124,"./sl.js":124,"./sq":125,"./sq.js":125,"./sr":127,"./sr-cyrl":126,"./sr-cyrl.js":126,"./sr.js":127,"./ss":128,"./ss.js":128,"./sv":129,"./sv.js":129,"./sw":130,"./sw.js":130,"./ta":131,"./ta.js":131,"./te":132,"./te.js":132,"./th":133,"./th.js":133,"./tl-ph":134,"./tl-ph.js":134,"./tlh":135,"./tlh.js":135,"./tr":136,"./tr.js":136,"./tzl":137,"./tzl.js":137,"./tzm":139,"./tzm-latn":138,"./tzm-latn.js":138,"./tzm.js":139,"./uk":140,"./uk.js":140,"./uz":141,"./uz.js":141,"./vi":142,"./vi.js":142,"./x-pseudo":143,"./x-pseudo.js":143,"./zh-cn":144,"./zh-cn.js":144,"./zh-tw":145,"./zh-tw.js":145};a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=206},207:function(t,s){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM2Ni42MzYgMzY2LjYzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzY2LjYzNiAzNjYuNjM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iWE1MSURfOTM0XyI+DQoJPHBhdGggaWQ9IlhNTElEXzk0MF8iIHN0eWxlPSJmaWxsOiM1RkQyREI7IiBkPSJNMTgzLjMxOCwyMS40NjRMMjEzLjk1LDIuNjQ3YzExLjMxMS02Ljk0OCwyNy4wNzIsMC42ODgsMjUuNTU3LDEyLjM4Mg0KCQlsLTQuMTA0LDMxLjY2OWwzNC43MzYsMTIuODUyYzEyLjgyNiw0Ljc0NiwxMi44MjYsMjAuMDE3LDAsMjQuNzYzbC0zNC43MzYsMTIuODUybDQuMTA0LDMxLjY2OQ0KCQljMS41MTUsMTEuNjk0LTE0LjI0NiwxOS4zMy0yNS41NTcsMTIuMzgyTDE4My4zMTgsMTIyLjRsLTMwLjYzMiwxOC44MTdjLTExLjMxMSw2Ljk0OC0yNy4wNzItMC42ODgtMjUuNTU3LTEyLjM4Mmw0LjEwNC0zMS42NjkNCgkJTDk2LjQ5Niw4NC4zMTRjLTEyLjgyNi00Ljc0Ni0xMi44MjYtMjAuMDE3LDAtMjQuNzYzbDM0LjczNi0xMi44NTJsLTQuMTA0LTMxLjY2OUMxMjUuNjEzLDMuMzM2LDE0MS4zNzQtNC4zLDE1Mi42ODUsMi42NDgNCgkJTDE4My4zMTgsMjEuNDY0eiIvPg0KCTxwYXRoIGlkPSJYTUxJRF85MzdfIiBzdHlsZT0iZmlsbDojRkY1OTU5OyIgZD0iTTM0Mi4xNzYsMjA3Ljc3OGMwLDg3LjczNS03MS4xMjMsMTU4Ljg1OC0xNTguODU4LDE1OC44NTgNCgkJUzI0LjQ2LDI5NS41MTMsMjQuNDYsMjA3Ljc3OFM5NS41ODMsNzguMjkyLDE4My4zMTgsNzguMjkyUzM0Mi4xNzYsMTIwLjA0MywzNDIuMTc2LDIwNy43Nzh6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="},208:function(t,s,e){t.exports=" <div id=app> <article class=main v-bind:class=\"{'start': !user.uid}\"> <div class=title> <img class=logo src="+e(207)+'> <h1 class="">Tomato 5</h1> </div> <p class=instruction><span>Concentrate for work</span> <span>five times a day</span></p> <panel transition=fade v-if=user.uid></panel> <account v-if=user.uid></account> <div class=login v-show=!user.uid> <div id=firebaseui-auth-container></div> </div> <section class=footer> <p> <a href=https://www.focusboosterapp.com/the-pomodoro-technique target=_blank>The theory behind: Promodoro Technique</a> </p> </section> </article> </div> '},209:function(t,s){t.exports=' <div class=account _v-09611936=""> User: {{ user.displayName }} <a class=name v-on:click=logout _v-09611936="">(Change)</a> </div> '},210:function(t,s){t.exports=' <div class=member _v-53572712=""> <p _v-53572712=""> <emotion class=small v-bind:level=userStatus.emotion _v-53572712=""></emotion> <span class=beacon v-bind:class="{\n            \'busy\': userStatus.availability === availabilities.busy,\n            \'idle\': userStatus.availability === availabilities.idle,\n            \'resting\': userStatus.availability === availabilities.resting,\n            \'active\': userStatus.availability === availabilities.active,\n            \'offline\': isOffline,\n          }" _v-53572712=""> </span> <span class=name _v-53572712="">{{ userInfo.displayName || userInfo.email }}</span> <span class=time transition=fade v-if=taskTimeLable _v-53572712="">{{ taskTimeLable }}</span> </p> <div class="" _v-53572712=""> <div class=tasks _v-53572712=""> <span class="icon tomato animated" v-for="task in tasks" v-bind:class="{\n              \'done\': task.status === taskStatus.done,\n              \'active\': task.status === taskStatus.active,\n              \'ongoing pulse infinite\': task.status === taskStatus.ongoing,\n            }" _v-53572712=""> </span> </div> </div> <p class=note transition=fade v-if=activeTask _v-53572712="">{{ activeTask.note }}</p> </div> '},211:function(t,s){t.exports=' <div class=emotion _v-5af14293=""> <span class=inner ,="" v-bind:class=[emotionLevelClass] _v-5af14293=""> {{level}} </span> </div> '},212:function(t,s){t.exports=' <div class=task v-bind:class="{\n           \'idle\': task.status === taskStatus.idle,\n           \'ongoing\': task.status === taskStatus.ongoing,\n           \'active\': task.status === taskStatus.active,\n           \'done\': task.status === taskStatus.done,\n           \'hide\': this.hide,\n           \'disabled\': this.disabled,\n         }" _v-83ccc706=""> <div class=icon-wrapper _v-83ccc706=""> <span class="icon tomato animated" v-bind:class="{\n          \'tada \': task.status === taskStatus.idle,\n          \'pulse infinite\': task.status === taskStatus.ongoing,\n          \'swing infinite\': task.status === taskStatus.active,\n          \'done\': task.status === taskStatus.done,\n        }" v-on:click=onClick(task) v-show="task.status !== taskStatus.done" _v-83ccc706=""> {{ task.note }} </span> <emotion class=small v-bind:level=task.emotion v-show="task.status === taskStatus.done" _v-83ccc706=""> </emotion> </div> <div class=note-wrapper _v-83ccc706=""> <input class=note type=text name=name placeholder="Title of this task" v-model=task.note v-on:blur=onTaskEdited _v-83ccc706=""> <div class=activeTask _v-83ccc706=""> <p class=operations transition=fade v-show="task.status === taskStatus.active" _v-83ccc706=""> <span class=done v-on:click=done _v-83ccc706="">Done</span> <span class=drop v-on:click=drop _v-83ccc706="">Drop</span> </p> </div> </div> </div> '},213:function(t,s){t.exports=' <section class=panel v-bind:class="{\n            \'resting\': userStatus.availability === availabilities.resting,\n            \'idle\': userStatus.availability === availabilities.idle,\n            \'busy\': userStatus.availability === availabilities.busy,\n          }" _v-b6d61088=""> <div class=user _v-b6d61088=""> <div class=status _v-b6d61088=""> <div class=avator v-on:click=toggleEmotions _v-b6d61088=""> <emotion v-bind:level=userStatus.emotion _v-b6d61088=""></emotion> </div> <span class="timer animated" v-show="userStatus.availability >= 0" v-on:click=onTimerClicked v-bind:class="{\n              \'rubberBand\': (userStatus.availability === availabilities.busy) || (userStatus.availability === availabilities.resting)\n            }" _v-b6d61088=""> {{ panelStatus.label }} </span> </div> <div class=emotions v-bind:class="{\n            \'expanded\': panelStatus.isShowEmotions\n          }" _v-b6d61088=""> <p _v-b6d61088=""> Select your energy level: </p> <div class=selections _v-b6d61088=""> <p _v-b6d61088=""> <emotion v-bind:level=1 v-on:click=changeEmotion(1) _v-b6d61088=""></emotion> <emotion v-bind:level=2 v-on:click=changeEmotion(2) _v-b6d61088=""></emotion> <emotion v-bind:level=3 v-on:click=changeEmotion(3) _v-b6d61088=""></emotion> <emotion v-bind:level=4 v-on:click=changeEmotion(4) _v-b6d61088=""></emotion> </p> <p _v-b6d61088=""> <emotion v-bind:level=-1 v-on:click=changeEmotion(-1) _v-b6d61088=""></emotion> <emotion v-bind:level=-2 v-on:click=changeEmotion(-2) _v-b6d61088=""></emotion> <emotion v-bind:level=-3 v-on:click=changeEmotion(-3) _v-b6d61088=""></emotion> <emotion v-bind:level=-4 v-on:click=changeEmotion(-4) _v-b6d61088=""></emotion> </p> </div> </div> </div> <div class=tasks-wrapper v-bind:class="{\'loading\': !tasks}" _v-b6d61088=""> <div class=tasks transition=fade v-if=tasks _v-b6d61088=""> <div class=list _v-b6d61088=""> <template v-for="task in tasks"> <task v-bind:task=task v-bind:task-status=taskStatus v-bind:user-status=userStatus v-bind:availabilities=availabilities v-bind:disabled="(userStatus.availability === availabilities.resting)\n                    &amp;&amp; (task.status === taskStatus.idle)" v-bind:hide="(userStatus.availability === availabilities.busy || userStatus.availability === availabilities.active)\n                    &amp;&amp; !(task.status === taskStatus.ongoing || task.status === taskStatus.active)" _v-b6d61088=""> </task> </template> </div> <span class="icon add" transition=fade v-show="(doneCount >= 5 || tasks.length < 5) &amp;&amp; (userStatus.availability === availabilities.idle || userStatus.availability === availabilities.resting)" v-on:click=addTask _v-b6d61088="">Add task</span> </div> </div> <team-panel v-if=tasks v-bind:user-info=user v-bind:user-status=userStatus v-bind:tasks=tasks _v-b6d61088=""> <team-panel _v-b6d61088=""> </team-panel></team-panel></section> '},214:function(t,s){t.exports=' <div class=activeTask _v-e3e71cba=""> <p class=operations transition=fade v-show="task.status === taskStatus.active" _v-e3e71cba=""> <span class=done v-on:click=done _v-e3e71cba="">Done</span> <span class=drop v-on:click=drop _v-e3e71cba="">Drop</span> </p> </div> '},215:function(t,s){t.exports=' <section class=teamPanel _v-fd14c442=""> <div class=teamPanel-wrapper _v-fd14c442=""> <p class=title _v-fd14c442=""> Your team working on tomatoes: <span class=expander v-on:click=showForm() _v-fd14c442="">+</span> </p> <div class=teamManager transition=expand v-show=teamForm.isShow _v-fd14c442=""> <p class=switch v-show=false _v-fd14c442=""> <span class=selector v-on:click="teamForm.isJoin = true" v-bind:class="{ \'selected\': teamForm.isJoin }" _v-fd14c442="">Join Team</span> <span class=spacer _v-fd14c442="">or</span> <span class=selector v-on:click="teamForm.isJoin = false" v-bind:class="{ \'selected\': !teamForm.isJoin }" _v-fd14c442="">My Team</span> </p> <div class=theForm _v-fd14c442=""> <div class=join transition=slide_left v-show=teamForm.isJoin _v-fd14c442=""> <p class=field _v-fd14c442=""> <span _v-fd14c442="">Invite Code: </span> <input type=text name=name value="" v-model=teamForm.inviteCode _v-fd14c442=""> </p> <p _v-fd14c442=""> <a v-on:click=joinTeam(teamForm.inviteCode) _v-fd14c442="">Join Team</a> </p> </div> <div class=create transition=slide_right v-show=!teamForm.isJoin _v-fd14c442=""> <p class=field _v-fd14c442=""> <span class="" _v-fd14c442="">Name: </span> <input type=text value="" v-model=teamForm.name _v-fd14c442=""> </p> <p class=field _v-fd14c442=""> <span class="" _v-fd14c442="">Invite Code: </span> <input type=text value="" placeholder="6-12 charactors" v-model=teamForm.inviteCode _v-fd14c442=""> </p> <p class=tips _v-fd14c442=""> Others will use this code to join your team. </p> <p _v-fd14c442=""> <a v-on:click="createTeam(teamForm.inviteCode, teamForm.name)" _v-fd14c442="">Save</a> </p> </div> <p class=info _v-fd14c442=""></p> </div> </div> <div class=members transition=fade v-if=teamData _v-fd14c442=""> <member v-for="(uid, member) in teamData.members" v-bind:tasks=member.tasks v-bind:user-status=member.userStatus v-bind:user-info=member.userInfo v-bind:update-time=member.updateTime _v-fd14c442=""> </member> </div> </div> </section> '},216:function(t,s,e){var a,i;e(195),a=e(147),i=e(208),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},217:function(t,s,e){var a,i;e(196),a=e(148),i=e(209),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},218:function(t,s,e){var a,i;e(201),a=e(149),i=e(214),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},219:function(t,s,e){var a,i;e(197),a=e(151),i=e(210),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},220:function(t,s,e){var a,i;e(200),a=e(152),i=e(213),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},221:function(t,s,e){var a,i;e(199),a=e(153),i=e(212),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},222:function(t,s,e){var a,i;e(202),a=e(154),i=e(215),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}});
//# sourceMappingURL=app.1e564e622ff48da7f43e.js.map