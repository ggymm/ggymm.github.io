(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e87591d"],{"676d":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"handle"},[a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleCreate}},[e._v("新建")])],1),a("div",{staticClass:"space"}),a("div",{staticClass:"handle-query"},[a("a-input",{staticClass:"handle-item handle-item-width handle-item-margin",staticStyle:{width:"200px"},attrs:{"allow-clear":""},model:{value:e.query.instanceName,callback:function(t){e.$set(e.query,"instanceName",t)},expression:"query.instanceName"}}),a("a-button",{staticClass:"handle-item",attrs:{type:"primary"},on:{click:e.handleFilter}},[e._v("查询")])],1)])])],1)},r=[],i=a("1da1"),s=(a("96cf"),a("db49")),c={name:"Index",data:function(){return{query:{routerBase:s["a"].routerBase,instanceName:null}}},methods:{getData:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},handleFilter:function(){},handleCreate:function(){window.open(this.routerBase+"data-report-instance/index")}}},l=c,o=a("2877"),d=Object(o["a"])(l,n,r,!1,null,"92d5a014",null);t["default"]=d.exports},db49:function(e,t,a){"use strict";t["a"]={routerBase:"/data-view-web/",navTheme:"dark",primaryColor:"#2491f7",layout:"sidemenu",contentWidth:"Fluid",fixedHeader:!0,fixSiderbar:!0,colorWeak:!1,menu:{locale:!0},title:"数据可视化平台",pwa:!1,iconfontUrl:"",serviceBaseUrl:"http://localhost:9421/api/v1/",imageBasicUrl:"http://localhost:9421",production:"true"!==Object({NODE_ENV:"production",BASE_URL:"/data-view-web/"}).VUE_APP_PREVIEW}}}]);