(function(e){function t(t){for(var a,n,u=t[0],i=t[1],c=t[2],d=0,l=[];d<u.length;d++)n=u[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&l.push(s[n][0]),s[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);p&&p(t);while(l.length)l.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,n=1;n<r.length;n++){var u=r[n];0!==s[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={2:0},s={2:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{1:"de792874",3:"99fee629",4:"2e008f88",5:"a7b388ea",6:"5a3ef44d"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={3:1,4:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var a="css/"+({}[e]||e)+"."+{1:"31d6cfe0",3:"5a13e10b",4:"fc9bcad0",5:"31d6cfe0",6:"31d6cfe0"}[e]+".css",s=i.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var c=o[u],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===s))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){c=l[u],d=c.getAttribute("data-href");if(d===a||d===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete n[e],p.parentNode.removeChild(p),r(o)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){n[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,r){a=s[e]=[t,r]}));t.push(a[2]=o);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(p);var r=s[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,r[1](l)}s[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-chat-firebase/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=d;o.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"034f":function(e,t,r){"use strict";var a=r("ed82"),n=r.n(a);n.a},"2f39":function(e,t,r){"use strict";r.r(t);r("e6cf"),r("5319"),r("7d6e"),r("e54f"),r("985d"),r("31cd");var a=r("2b0e"),n=r("1f91"),s=r("42d2"),o=r("b05d");a["a"].use(o["a"],{config:{},lang:n["a"],iconSet:s["a"]});var u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},i=[],c=r("ded3"),d=r.n(c),l=r("2f62"),p={methods:d()({},Object(l["b"])("auth",["authAction"])),mounted(){return this.authAction()}},f=p,h=(r("034f"),r("2877")),m=Object(h["a"])(f,u,i,!1,null,null,null),g=m.exports,b=r("0e44"),v=r("59ca"),y=r.n(v);let w;const A={user:{},error:{},users:{},messages:{}},O={getUsers(e){let t={};return Object.keys(e.users).forEach((r=>{r!==e.user.userId&&(t[r]=e.users[r])})),t},isUserAuth(e){return Object.keys(e.user).length},getError(e){return e.error}},U={setUser(e,t){e.user=t},addUser(e,t){a["a"].set(e.users,t.userId,t.users)},updateUser(e,t){Object.assign(e.users[t.userId],t.user)},addMessage(e,t){a["a"].set(e.messages,t.messageId,t.message)},clearMessages(e){e.messages={}},SET_ERROR(e,t){e.error=t}},I={signUpAction({commit:e},t){y.a.auth().createUserWithEmailAndPassword(t.email,t.password).then((e=>{let r=y.a.auth().currentUser.uid;const a=y.a.database().ref("users/"+r).set({name:t.name,email:t.email,online:!0});return this.$router.push("/"),a})).catch((t=>{e("SET_ERROR",t.message)}))},signInAction({commit:e},t){return y.a.auth().signInWithEmailAndPassword(t.email,t.password).then((e=>{this.$router.push("/")})).catch((t=>{e("SET_ERROR",t.message)}))},signOutAction({commit:e}){y.a.auth().signOut().then((()=>{this.$router.push("/")})).catch((t=>{e("SET_ERROR",t.message)}))},authAction({commit:e,dispatch:t,state:r}){y.a.auth().onAuthStateChanged((a=>{if(a){let r=y.a.auth().currentUser.uid;y.a.database().ref("users/"+r).once("value",(t=>{let a=t.val();e("setUser",{name:a.name,email:a.email,userId:r})})),t("firebaseUpdateUserAction",{userId:r,updates:{online:!0}}),t("getUsersAction")}else t("firebaseUpdateUserAction",{userId:r.user.userId,updates:{online:!1}}),e("setUser",{})}))},firebaseUpdateUserAction({state:e},t){t.userId&&y.a.database().ref("users/"+t.userId).update(t.updates)},getUsersAction({commit:e}){y.a.database().ref("users").on("child_added",(t=>{let r=t.val(),a=t.key;e("addUser",{userId:a,users:r})})),y.a.database().ref("users").on("child_changed",(t=>{let r=t.val(),a=t.key;e("updateUser",{userId:a,user:r})}))},getMessagesAction({commit:e,state:t},r){let a=t.user.userId;w=y.a.database().ref(`chats/${a}/${r}`),w.on("child_added",(t=>{let r=t.val(),a=t.key;e("addMessage",{message:r,messageId:a})}))},sendMessageAction({state:e},t){let r=e.user.userId;y.a.database().ref(`chats/${r}/${t.otherUserId}`).push(t.message),t.message.from="them",y.a.database().ref(`chats/${t.otherUserId}/${r}`).push(t.message)},leaveChatAction({commit:e}){w&&(w.off("child_added"),e("clearMessages"))}};var E={namespaced:!0,state:A,getters:O,mutations:U,actions:I};a["a"].use(l["a"]);var P=function(){const e=new l["a"].Store({modules:{auth:E},plugins:[Object(b["a"])()],strict:!1});return e},j=r("8c4f");const S=[{path:"/",component:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"713b")),children:[{path:"/",component:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"bc13"))}]},{path:"/auth",component:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"21f3"))},{path:"/chat/:id",component:()=>Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"ab55"))}]},{path:"*",component:()=>Promise.all([r.e(0),r.e(6)]).then(r.bind(null,"e51e"))}];var _=S;a["a"].use(j["a"]);var R=function(){const e=new j["a"]({scrollBehavior:()=>({x:0,y:0}),routes:_,mode:"history",base:"/vue-chat-firebase/"});return e},k=async function(){const e="function"===typeof P?await P({Vue:a["a"]}):P,t="function"===typeof R?await R({Vue:a["a"],store:e}):R;e.$router=t;const r={router:t,store:e,render:e=>e(g),el:"#q-app"};return{app:r,store:e,router:t}},$=r("bc3a"),x=r.n($);a["a"].prototype.$axios=x.a;r("ea7b"),r("66ce");const T={apiKey:"AIzaSyD0A5wcXqaw6FbNBRglP10saDS9udW2uX8",authDomain:"vue-chat-app-c0259.firebaseapp.com",databaseURL:"https://vue-chat-app-c0259.firebaseio.com",projectId:"vue-chat-app-c0259",storageBucket:"vue-chat-app-c0259.appspot.com",messagingSenderId:"753029664715",appId:"1:753029664715:web:fcd84d93e044443feab04e"};y.a.initializeApp(T);const C="/vue-chat-firebase/",M=/\/\//,B=e=>(C+e).replace(M,"/");async function L(){const{app:e,store:t,router:r}=await k();let n=!1;const s=e=>{n=!0;const t=Object(e)===e?B(r.resolve(e).route.fullPath):e;window.location.href=t},o=window.location.href.replace(window.location.origin,""),u=[void 0,void 0];for(let c=0;!1===n&&c<u.length;c++)if("function"===typeof u[c])try{await u[c]({app:e,router:r,store:t,Vue:a["a"],ssrContext:null,redirect:s,urlPath:o,publicPath:C})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==n&&new a["a"](e)}L()},"31cd":function(e,t,r){},ed82:function(e,t,r){}});