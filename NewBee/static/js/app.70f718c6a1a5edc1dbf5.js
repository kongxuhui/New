webpackJsonp([2],{"5qSx":function(n,t){},"6B0W":function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("7+uW"),i={data:function(){return{pc:!0}},methods:{ispc:function(n){n>768?(this.$store.commit("increment",!0),e("pgnm")):(this.$store.commit("increment",!1),e("5qSx"))}},mounted:function(){var n=this,t=document.body.clientWidth+18;this.ispc(t),window.onresize=function(){var t=document.body.clientWidth+18;n.ispc(t)}}},c={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var u=e("VU/8")(i,c,!1,function(n){e("6B0W")},null,null).exports,r=e("/ocq");o.a.use(r.a);var a=new r.a({mode:"history",base:Object({NODE_ENV:"production"}).BASE_URL,routes:[{path:"/",name:"home",component:function(){return e.e(0).then(e.bind(null,"j7e0"))}},{path:"/aboutcompany",name:"aboutcompany",component:function(){return e.e(0).then(e.bind(null,"QtPV"))}},{path:"/discount",name:"discount",component:function(){return e.e(0).then(e.bind(null,"LYDN"))}},{path:"/special",name:"special",component:function(){return e.e(0).then(e.bind(null,"Ra52"))}},{path:"/goods",name:"goods",component:function(){return e.e(0).then(e.bind(null,"Jz0f"))}}]}),s=e("NYxO");o.a.use(s.a);var p=new s.a.Store({state:{ispc:!0},mutations:{increment:function(n,t){this.state.ispc=t}}}),m=e("oPmM"),d=e.n(m);o.a.use(d.a),o.a.config.productionTip=!1,new o.a({router:a,store:p,render:function(n){return n(u)}}).$mount("#app")},oPmM:function(n,t){},pgnm:function(n,t){}},["NHnr"]);