webpackJsonp([1],{"7zck":function(t,e){},"82O6":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a=i("BO1k"),l=i.n(a),r=i("NYxO"),n={name:"Pairs",data:function(){return{dialog:!1}},computed:Object(r.b)({boys:function(t){return t.boys},girls:function(t){return t.girls},matched:function(t){var e=t.boys,i=t.girls,s=[],a=!0,r=!1,n=void 0;try{for(var o,c=l()(e);!(a=(o=c.next()).done);a=!0){var d=o.value,v=d.select;if(v){var u=function(t){var e=i.find(function(e){return e.id===t});if(!e)return"continue";var a=e.select;if(!a)return"continue";var r=!0,n=!1,o=void 0;try{for(var c,v=l()(a.split(" "));!(r=(c=v.next()).done);r=!0){var u=c.value;d.id===u&&s.push({boy:d,girl:e})}}catch(t){n=!0,o=t}finally{try{!r&&v.return&&v.return()}finally{if(n)throw o}}},f=!0,m=!1,h=void 0;try{for(var p,_=l()(v.split(" "));!(f=(p=_.next()).done);f=!0)u(p.value)}catch(t){m=!0,h=t}finally{try{!f&&_.return&&_.return()}finally{if(m)throw h}}}}}catch(t){r=!0,n=t}finally{try{!a&&c.return&&c.return()}finally{if(r)throw n}}return s}})},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs2:""}},[i("v-card",{staticClass:"card-shadow",attrs:{dark:"",color:"blue lighten-2"}},[i("v-card-text",{staticClass:"px-0"},[t._v("男生")])],1),t._v(" "),t._l(t.boys,function(e){return i("v-card",{key:e.name,staticClass:"card-shadow"},[i("v-list",{attrs:{"two-line":""}},[i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-avatar",[e.avatar?i("img",{attrs:{src:e.avatar}}):i("v-icon",{attrs:{large:"",color:"blue darken-2"}},[t._v("person")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.id)+". "+t._s(e.name))]),t._v(" "),i("v-list-tile-sub-title",[t._v(t._s(e.detail))])],1)],1)],1)],1)})],2),t._v(" "),i("v-flex",{attrs:{xs6:"","offset-xs1":""}},[i("v-card",{staticClass:"card-shadow",attrs:{color:"yellow accent-1"}},[i("v-card-text",{staticClass:"px-0"},[t._v("配對結果")])],1),t._v(" "),t._l(t.matched,function(e){return i("v-layout",{key:e.boy.name,attrs:{row:""}},[i("v-flex",{attrs:{xs6:""}},[i("v-card",{staticClass:"card-shadow"},[i("v-list",{attrs:{"two-line":""}},[i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-avatar",[e.boy.avatar?i("img",{attrs:{src:e.boy.avatar}}):i("v-icon",{attrs:{large:"",color:"blue darken-2"}},[t._v("person")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.boy.id)+". "+t._s(e.boy.name))]),t._v(" "),i("v-list-tile-sub-title",[t._v(" "+t._s(e.boy.detail))])],1)],1)],1)],1)],1),t._v(" "),i("v-flex",[i("v-card",{staticClass:"card-shadow"},[i("v-list",{attrs:{"two-line":""}},[i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-avatar",[e.girl.avatar?i("img",{attrs:{src:e.girl.avatar}}):i("v-icon",{attrs:{large:"",color:"pink darken-2"}},[t._v("person")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.girl.id)+". "+t._s(e.girl.name))]),t._v(" "),i("v-list-tile-sub-title",[t._v(" "+t._s(e.girl.detail))])],1)],1)],1)],1)],1)],1)})],2),t._v(" "),i("v-flex",{attrs:{xs2:"","offset-xs1":""}},[i("v-card",{staticClass:"card-shadow",attrs:{dark:"",color:"pink lighten-2"}},[i("v-card-text",{staticClass:"px-0"},[t._v("女生")])],1),t._v(" "),t._l(t.girls,function(e){return i("v-card",{key:e.name,staticClass:"card-shadow"},[i("v-list",{attrs:{"two-line":""}},[i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-avatar",[e.avatar?i("img",{attrs:{src:e.avatar}}):i("v-icon",{attrs:{large:"",color:"pink darken-2"}},[t._v("person")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.id)+". "+t._s(e.name))]),t._v(" "),i("v-list-tile-sub-title",[t._v(t._s(e.detail))])],1)],1)],1)],1)})],2)],1)],1)},staticRenderFns:[]};var c=i("VU/8")(n,o,!1,function(t){i("xCEm")},"data-v-1de9616a",null).exports,d=i("mvHQ"),v=i.n(d),u=i("M4fF"),f=i.n(u),m=i("2jId"),h={name:"Settings",data:function(){return{title:"",headers:[{text:"刪除",sortable:!1},{text:"編號",align:"left",sortable:!0,value:"id"},{text:"姓名",value:"name"},{text:"選擇",value:"select"}],boys:[],girls:[],matched:[],showSelectName:!1,quickEditBoys:!1,quickEditGirls:!1,quickEditBoysPair:!1,quickEditGirlsPair:!1,editParticipant:!1,errorMessage:"",showErrorMessage:!1}},methods:{addElementWhenLastFocus:function(t,e){e===t.length-1&&t.push({id:"",name:"",detail:"",select:""})},quickEdit:function(t){var e=null,i=!1;if("boys"===t?(e=this.boys,this.quickEditBoys?(this.quickEditBoys=!1,i=!0):this.quickEditBoys=!0):"girls"===t&&(e=this.girls,this.quickEditGirls?(this.quickEditGirls=!1,i=!0):this.quickEditGirls=!0),i){for(;e.length>0&&""===e[e.length-1].id&&""===e[e.length-1].name&&""===e[e.length-1].detail&&""===e[e.length-1].select;)e.pop();this.reloadSelectName()}else e.push({id:"",name:"",detail:"",select:""})},reloadSelectName:function(){var t=this,e=!0,i=!1,s=void 0;try{for(var a,r=l()(this.boys);!(e=(a=r.next()).done);e=!0){var n=a.value,o=n.select.split(" ")||[];n.selectPerson=[];var c=function(e){var i=t.girls.find(function(t){return t.id===e});i?n.selectPerson.push({id:i.id,name:i.name}):n.selectPerson.push({id:e,name:"查無此人",noFound:!0})},d=!0,v=!1,u=void 0;try{for(var f,m=l()(o);!(d=(f=m.next()).done);d=!0){c(f.value)}}catch(t){v=!0,u=t}finally{try{!d&&m.return&&m.return()}finally{if(v)throw u}}}}catch(t){i=!0,s=t}finally{try{!e&&r.return&&r.return()}finally{if(i)throw s}}var h=!0,p=!1,_=void 0;try{for(var g,x=l()(this.girls);!(h=(g=x.next()).done);h=!0){var y=g.value;o=y.select.split(" ")||[];y.selectPerson=[];var b=function(e){var i=t.boys.find(function(t){return t.id===e});i?y.selectPerson.push({id:i.id,name:i.name}):y.selectPerson.push({id:e,name:"查無此人",noFound:!0})},k=!0,w=!1,E=void 0;try{for(var S,P=l()(o);!(k=(S=P.next()).done);k=!0){b(S.value)}}catch(t){w=!0,E=t}finally{try{!k&&P.return&&P.return()}finally{if(w)throw E}}}}catch(t){p=!0,_=t}finally{try{!h&&x.return&&x.return()}finally{if(p)throw _}}},quickPair:function(t){"boys"===t?this.quickEditBoysPair=!this.quickEditBoysPair:"girls"===t&&(this.quickEditGirlsPair=!this.quickEditGirlsPair),this.reloadSelectName()},deleteItem:function(t,e){confirm("確定刪除 "+t[e].name+" ？")&&t.splice(e,1)},save:function(){this.$store.commit("boys",this.boys),this.$store.commit("girls",this.girls),this.$store.commit("title",this.title),this.$store.commit("closeSettingModal"),this.$store.commit("showSelectName",this.showSelectName),document.title=this.title;var t=v()({boys:this.boys,girls:this.girls,title:this.title,showSelectName:this.showSelectName});localStorage.setItem("data",t)},onPickFile:function(){this.$refs.import.click()},onFilePicked:function(t){var e=this,i=t.target.files;if(void 0!==i[0]){var s=new FileReader;s.readAsText(i[0]),s.addEventListener("load",function(){try{var t=s.result,i=JSON.parse(t);e.boys=i.boys||[],e.girls=i.girls||[],e.title=i.title||""}catch(t){e.errorMessage="資料解析錯誤，請確定是正確檔案",e.showErrorMessage=!0,setTimeout(function(){e.showErrorMessage=!1},5e3)}})}},cleanAll:function(){confirm("確定清空")&&(this.boys=[],this.girls=[])}},computed:{dialogOpened:function(){return this.$store.state.settingModal},dataUri:function(){var t=v()({boys:this.boys,girls:this.girls,title:this.title});return"data:text/json;charset=utf-8,"+encodeURIComponent(t)}},watch:{dialogOpened:function(t){t&&(this.boys=f.a.cloneDeep(this.$store.state.boys),this.girls=f.a.cloneDeep(this.$store.state.girls),this.title=this.$store.state.title,this.showSelectName=this.$store.state.showSelectName,this.reloadSelectName())}},mixins:[m.mixin]},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{tile:""}},[i("v-toolbar",{attrs:{card:"",dark:"",color:"primary"}},[i("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.$store.commit("closeSettingModal")}}},[i("v-icon",[t._v("close")])],1),t._v(" "),i("v-toolbar-title",[t._v("Settings")]),t._v(" "),i("v-spacer"),t._v(" "),i("v-toolbar-items",[i("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){return t.save(e)}}},[t._v("Save")]),t._v(" "),i("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.$store.commit("closeSettingModal")}}},[t._v("Close")])],1)],1),t._v(" "),i("v-card-text",[i("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-alert",{attrs:{dismissible:"",type:"error"},model:{value:t.showErrorMessage,callback:function(e){t.showErrorMessage=e},expression:"showErrorMessage"}},[t._v("\n            "+t._s(t.errorMessage)+"\n          ")])],1)],1),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{name:"title",label:"標題："},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-btn",{class:[t.showSelectName?"orange lighten-1 theme--dark":""],attrs:{block:""},on:{click:function(e){t.showSelectName=!t.showSelectName}}},[t._v("在設定顯示配對意象姓名")])],1)],1),t._v(" "),t.boys.length>0&&t.girls.length>0?i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs6:""}},[i("v-btn",{class:{"btn--round":t.quickEditBoysPair},attrs:{block:"",color:"blue lighten-2"},on:{click:function(e){t.quickPair("boys")}}},[t._v("男生 輸入配對意象")])],1),t._v(" "),i("v-flex",{attrs:{xs6:""}},[i("v-btn",{class:{"btn--round":t.quickEditGirlsPair},attrs:{block:"",color:"pink lighten-2"},on:{click:function(e){t.quickPair("girls")}}},[t._v("女生 輸入配對意象")])],1)],1):t._e(),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs6:""}},[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.boys,"disable-initial-sort":!0,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[i("td",{staticClass:"justify-center layout px-0"},[i("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(i){t.deleteItem(t.boys,e.index)}}},[i("v-icon",{attrs:{color:"pink"}},[t._v("delete")])],1)],1),t._v(" "),t.quickEditBoys?i("td",[i("v-text-field",{attrs:{placeholder:"編號","single-line":""},on:{focus:function(i){t.addElementWhenLastFocus(t.boys,e.index)}},model:{value:e.item.id,callback:function(i){t.$set(e.item,"id",i)},expression:"props.item.id"}})],1):i("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.id))]),t._v(" "),t.quickEditBoys?i("td",[i("v-text-field",{attrs:{placeholder:"姓名","single-line":""},on:{focus:function(i){t.addElementWhenLastFocus(t.boys,e.index)}},model:{value:e.item.name,callback:function(i){t.$set(e.item,"name",i)},expression:"props.item.name"}})],1):i("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.name))]),t._v(" "),t.quickEditBoysPair||t.showSelectName?t.quickEditBoysPair?i("td",[i("v-text-field",{attrs:{placeholder:"配對意象，以空白格開","single-line":""},model:{value:e.item.select,callback:function(i){t.$set(e.item,"select",i)},expression:"props.item.select"}})],1):i("td",{staticClass:"text-xs-left"},[e.item.selectPerson?i("v-list",t._l(e.item.selectPerson,function(e){return i("v-list-tile",{key:e.id},[i("v-list-tile-content",{class:{"text-red":e.noFound}},[i("v-list-tile-title",[t._v(t._s(e.id)+". "+t._s(e.name))])],1)],1)})):t._e()],1):i("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.select))])]}}])})],1),t._v(" "),i("v-flex",{attrs:{xs6:""}},[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.girls,"disable-initial-sort":!0,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[i("td",{staticClass:"justify-center layout px-0"},[i("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(i){t.deleteItem(t.girls,e.index)}}},[i("v-icon",{attrs:{color:"pink"}},[t._v("delete")])],1)],1),t._v(" "),t.quickEditGirls?i("td",[i("v-text-field",{attrs:{placeholder:"編號","single-line":""},on:{focus:function(i){t.addElementWhenLastFocus(t.girls,e.index)}},model:{value:e.item.id,callback:function(i){t.$set(e.item,"id",i)},expression:"props.item.id"}})],1):i("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.id))]),t._v(" "),t.quickEditGirls?i("td",[i("v-text-field",{attrs:{placeholder:"姓名","single-line":""},on:{focus:function(i){t.addElementWhenLastFocus(t.girls,e.index)}},model:{value:e.item.name,callback:function(i){t.$set(e.item,"name",i)},expression:"props.item.name"}})],1):i("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.name))]),t._v(" "),t.quickEditGirlsPair||t.showSelectName?t.quickEditGirlsPair?i("td",[i("v-text-field",{attrs:{placeholder:"配對意象，以空白格開","single-line":""},model:{value:e.item.select,callback:function(i){t.$set(e.item,"select",i)},expression:"props.item.select"}})],1):i("td",{staticClass:"text-xs-left"},[e.item.selectPerson?i("v-list",t._l(e.item.selectPerson,function(e){return i("v-list-tile",{key:e.id},[i("v-list-tile-content",{class:{"text-red":e.noFound}},[i("v-list-tile-title",[t._v(t._s(e.id)+". "+t._s(e.name))])],1)],1)})):t._e()],1):i("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.select))])]}}])})],1)],1),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs6:""}},[i("v-btn",{class:{"btn--round":t.quickEditBoys},attrs:{block:"",dark:"",color:"blue lighten-2"},on:{click:function(e){t.quickEdit("boys")}}},[t._v("男生 輸入/修改 名單")])],1),t._v(" "),i("v-flex",{attrs:{xs6:""}},[i("v-btn",{class:{"btn--round":t.quickEditGirls},attrs:{block:"",dark:"",color:"pink lighten-2"},on:{click:function(e){t.quickEdit("girls")}}},[t._v("女生 輸入/修改 名單")])],1)],1),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-btn",{attrs:{block:"",dark:"",color:"orange lighten-1",href:t.dataUri,download:"data.json"}},[t._v("匯出所有資料")])],1)],1),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-btn",{attrs:{block:"",dark:"",color:"orange lighten-1"},on:{click:t.onPickFile}},[t._v("匯入資料（清空後匯入）")]),t._v(" "),i("input",{ref:"import",staticStyle:{display:"none"},attrs:{type:"file",name:"import"},on:{change:t.onFilePicked}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-btn",{attrs:{block:"",color:"error"},on:{click:t.cleanAll}},[t._v("清空所有資料")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var _={data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"bubble_chart",title:"Inspire"}],miniVariant:!1,right:!0,rightDrawer:!1}},computed:{dialog:function(){return this.$store.state.settingModal},title:function(){return this.$store.state.title}},name:"App",components:{Pairs:c,Settings:i("VU/8")(h,p,!1,function(t){i("82O6")},"data-v-1a17b221",null).exports},mounted:function(){var t=localStorage.getItem("data");if(null!==t){var e=JSON.parse(t),i=e.boys||[],s=e.girls||[],a=e.title||"標題喔~~",l=e.showSelectName||!1;document.title=a,this.$store.commit("boys",i),this.$store.commit("girls",s),this.$store.commit("title",a),this.$store.commit("showSelectName",l)}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-toolbar",{attrs:{app:"",dark:"",color:"orange lighten-2","clipped-left":t.clipped}},[i("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),i("v-spacer"),t._v(" "),i("v-btn",{attrs:{icon:""},on:{click:function(e){t.$store.commit("openSettingModal")}}},[i("v-icon",[t._v("settings")])],1)],1),t._v(" "),i("v-content",[i("Pairs")],1),t._v(" "),i("v-footer",{attrs:{fixed:t.fixed,app:""}}),t._v(" "),i("v-dialog",{attrs:{fullscreen:"",transition:"dialog-bottom-transition",overlay:!1,scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("Settings")],1)],1)},staticRenderFns:[]},x=i("VU/8")(_,g,!1,null,null,null).exports,y=i("3EgV"),b=i.n(y);s.default.use(r.a);var k=new r.a.Store({strict:!0,state:{settingModal:!1,showSelectName:!1,girls:[],boys:[],title:""},getters:{},mutations:{openSettingModal:function(t){t.settingModal=!0},closeSettingModal:function(t){t.settingModal=!1},girls:function(t,e){t.girls=e},boys:function(t,e){t.boys=e},title:function(t,e){t.title=e},showSelectName:function(t,e){t.showSelectName=e}},actions:{}});i("7zck");s.default.use(b.a),s.default.config.productionTip=!1,new s.default({el:"#app",components:{App:x},template:"<App/>",store:k})},xCEm:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8923c3b258d1364f994f.js.map