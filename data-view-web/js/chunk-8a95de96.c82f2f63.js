(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a95de96"],{"0c6d":function(t,e,a){"use strict";a("d3b7");var n=a("bc3a"),i=a.n(n),r=i.a.create({headers:{"Content-Type":"application/json"},baseURL:"",timeout:3e5});r.interceptors.request.use((function(t){return t}),(function(t){return console.log(t),Promise.reject(t)})),r.interceptors.response.use((function(t){return t.data}),(function(t){return console.log("err"+t),Promise.reject(t)})),e["a"]=r},"4d2e":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return s}));var n=a("0c6d"),i=a("db49"),r=i["a"].serviceBaseUrl;function o(t){return Object(n["a"])({url:r+"data-source/",method:"get",params:t})}function s(){return Object(n["a"])({url:r+"data-source/list",method:"get"})}},"80ab":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"handle"},[a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.handleCreate}},[t._v("新建")]),a("a-button",{attrs:{type:"primary",icon:"upload"},on:{click:t.handleImport}},[t._v("导入")])],1),a("div",{staticClass:"space"}),a("div",{staticClass:"handle-query"},[a("a-input",{staticClass:"handle-item handle-item-width handle-item-margin",staticStyle:{width:"200px"},attrs:{placeholder:"请填写用户名称","allow-clear":""},model:{value:t.query.username,callback:function(e){t.$set(t.query,"username",e)},expression:"query.username"}}),a("a-button",{staticClass:"handle-item",attrs:{type:"primary"},on:{click:t.handleFilter}},[t._v("查询")])],1)]),a("a-table",{attrs:{bordered:"",size:"middle",columns:t.columns,"row-key":function(t){return t.data_source_id},"data-source":t.list,pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"serial",fn:function(e,n,i){return a("span",{},[t._v(" "+t._s((t.pagination.current-1)*t.pagination.pageSize+i+1)+" ")])}},{key:"handler",fn:function(e,n){return a("span",{staticClass:"handler"},[a("a-space",[a("a-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleEdit(n.data_source_id)}}},[t._v("编辑")]),a("a-button",{attrs:{type:"danger",size:"small"},on:{click:function(e){return t.handleDelete(n.data_source_id)}}},[t._v("删除")])],1)],1)}}])})],1)],1)},i=[],r=a("5530"),o=a("4d2e"),s=[{align:"center",title:"序号",scopedSlots:{customRender:"serial"},width:"5%"},{title:"名称",dataIndex:"data_source_name",width:"15%"},{title:"类型",dataIndex:"data_source_type",width:"10%"},{title:"数据库名称",dataIndex:"data_source_database_name",width:"15%"},{title:"地址",dataIndex:"data_source_ip",width:"10%"},{title:"登录账户",dataIndex:"data_source_username",width:"10%"},{title:"更新时间",dataIndex:"update_time",width:"20%"},{align:"center",title:"操作",scopedSlots:{customRender:"handler"}}],c={name:"Index",data:function(){var t=this;return{list:[],pagination:{current:1,pageSize:10,defaultCurrent:1,defaultPageSize:10,showSizeChanger:!0,total:0,pageSizeOptions:["10","20","50","100"],showTotal:function(t){return"共 ".concat(t," 条")},onShowSizeChange:function(e,a){t.pagination.current=e,t.pagination.pageSize=a,t.getData()},onChange:function(e,a){t.pagination.current=e,t.pagination.pageSize=a,t.getData()}},loading:!1,columns:s,query:{username:null}}},mounted:function(){this.getData()},methods:{handleTableChange:function(t){var e=Object(r["a"])({},this.pagination);e.current=t.current,this.pagination=e,this.getData()},getData:function(){var t=this;this.loading=!0,Object(o["b"])({page:this.pagination.current,size:this.pagination.pageSize}).then((function(e){t.loading=!1,t.list=e.data.list,t.pagination.total=e.data.count}))},handleFilter:function(){this.pagination.current=1,this.getData()},handleCreate:function(){},handleEdit:function(){},handleDelete:function(){},handleImport:function(){}}},d=c,l=a("2877"),u=Object(l["a"])(d,n,i,!1,null,"729540d8",null);e["default"]=u.exports},db49:function(t,e,a){"use strict";e["a"]={routerBase:"/data-view-web/",navTheme:"dark",primaryColor:"#2491f7",layout:"sidemenu",contentWidth:"Fluid",fixedHeader:!0,fixSiderbar:!0,colorWeak:!1,menu:{locale:!0},title:"数据可视化平台",pwa:!1,iconfontUrl:"",serviceBaseUrl:"http://localhost:9421/api/v1/",imageBasicUrl:"http://localhost:9421",production:"true"!==Object({NODE_ENV:"production",BASE_URL:"/data-view-web/"}).VUE_APP_PREVIEW}}}]);