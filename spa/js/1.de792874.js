(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{4830:function(t,e,a){"use strict";e["a"]={computed:{otherUserDetails(){return this.$store.state.auth.users&&this.$store.state.auth.users[this.$route.params.id]}}}},"713b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",{staticClass:"flex justify-around container gradient-bg"},[this.$route.path.includes("chat")?a("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],attrs:{color:"secondary",icon:"arrow_back",label:"Back",dense:"","no-caps":""}}):t._e(),a("q-toolbar-title",{staticClass:"text-center\t"},[t._v("\n        "+t._s(t.checkTitle)+"\n      ")]),t.user.userId?a("q-btn",{attrs:{dense:"","icon-right":"exit_to_app",label:"Logout",color:"secondary","no-caps":""},on:{click:t.logout}}):a("q-btn",{attrs:{to:"/auth",dense:"","icon-right":"account_circle",label:"Login",color:"secondary","no-caps":""}})],1)],1),a("q-page-container",[a("router-view")],1)],1)},s=[],r=a("ded3"),n=a.n(r),i=a("2f62"),c=a("4830"),l={mixins:[c["a"]],name:"MainLayout",computed:n()(n()({},Object(i["d"])("auth",["user"])),{},{checkTitle(){return"/auth"==this.$route.path?"":this.$route.path.includes("chat")?this.otherUserDetails&&this.otherUserDetails.name:"NamiChat"}}),methods:n()(n()({},Object(i["b"])("auth",["signOutAction"])),{},{logout(){this.signOutAction()}})},u=l,h=a("2877"),d=a("4d5a"),b=a("e359"),p=a("65c6"),g=a("9c40"),m=a("6ac5"),f=a("09e3"),k=a("2eeb"),w=a("eebe"),v=a.n(w),_=Object(h["a"])(u,o,s,!1,null,null,null);e["default"]=_.exports;v()(_,"components",{QLayout:d["a"],QHeader:b["a"],QToolbar:p["a"],QBtn:g["a"],QToolbarTitle:m["a"],QPageContainer:f["a"]}),v()(_,"directives",{GoBack:k["a"]})}}]);