(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5209afd8"],{2747:function(t,a,e){"use strict";var i=e("f7ab"),s=e.n(i),n=e("5880");a["a"]={replace:!0,data:function(){return{title:"",size:"small",Visible:!0}},computed:Object(n["mapState"])({Config:function(t){return t.Config},RootNodeInfo:function(t){return t.RootNodeInfo},Metadata:function(t){return t.Metadata},demoMode:function(t){return t.setting.demoMode}}),beforeCreated:function(){},created:function(){this.ema=s.a.getProxy()},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},activated:function(){},deactivated:function(){},beforDestroy:function(){},destroyed:function(){this.ema.dispose()},methods:{bindEvent:function(t,a){this.$options.name||console.warn("绑定事件的组件不存在组件名称",t),this.ema.bind("".concat(this.$options.name,".").concat(t),a)},openDialog:function(t){this.ema.fire("Dialogs.push",t)},close:function(){this.ema.fire("Dialogs.close",this.$options.name)}}}},"331f":function(t,a,e){},a7c7:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"imageSelectWarp"},[e("el-dialog",{attrs:{title:t.showtitle,visible:t.Visible},on:{click:function(t){t.stopPropagation()},"update:visible":function(a){t.Visible=a},close:t.close}},[e("el-tabs",{model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"所有列表",name:"first"}},[e("div",{staticClass:"warp"},[e("div",{staticClass:"searchTags"},t._l(t.canSelectTags,(function(a,i){return e("el-tag",{key:i,staticClass:"tag",attrs:{type:a.type||"info"},nativeOn:{click:function(e){return t.selectTag(a)}}},[e("i",{staticClass:"iconfont icon-tag"}),t._v(t._s(a.name)+"\n            ")])})),1),e("div",{staticClass:"imagesWarp"},t._l(t.form.data,(function(a,i){return e("div",{key:i,staticClass:"item"},["image"==t.type?e("img",{staticClass:"img",attrs:{src:a.content+"?x-oss-process=image/resize,w_100/crop,w_100,h_100"}}):"audio"==t.type?e("audio",{staticClass:"audio",attrs:{controls:"controls"}},[e("source",{attrs:{src:a.content,type:"audio/mpeg"}})]):t._e(),e("div",{staticClass:"name"},[t._v(t._s(a.name))]),e("div",{staticClass:"select"},[e("el-button",{staticClass:"use",attrs:{type:"primary",size:"mini"},on:{click:function(e){return e.stopPropagation(),t.useImage(a)}}},[t._v("使用")])],1)])})),0),e("div",{staticClass:"footer"},[e("el-pagination",{staticClass:"pagination",attrs:{"current-page":t.form.pagination.curr,"page-sizes":[30,100,200,300,400],"page-size":t.form.pagination.size,layout:"total, sizes, prev, pager, next, jumper",total:t.form.pagination.total},on:{"size-change":t.handleSizeChange,"current-change":t.loadData}})],1)])]),e("el-tab-pane",{attrs:{label:"上传",name:"second"}},[e("div",{staticClass:"warp"},[e("div",{staticClass:"uploadImageWarp",on:{click:t.selectImage}},[t.uploadImage&&t.uploadImage.src?e("div",["image"==t.type?e("img",{attrs:{src:t.uploadImage.src}}):"audio"==t.type?e("audio",{staticClass:"audio",attrs:{controls:"controls"}},[e("source",{attrs:{src:t.uploadImage.src,type:"audio/mpeg"}})]):"file"==t.type?e("div",{staticClass:"file",attrs:{controls:"controls"}},[e("span",{staticClass:"el-icon-document",staticStyle:{"font-size":"160px",color:"#bbbbbb"}})]):t._e()]):t._e()]),t.type?e("upload-image",{ref:"UploadImage",attrs:{accept:t.type,showBtn:!0,auto:!0},on:{uploadSuccess:t.uploadSuccess}}):t._e(),t.uploadImage&&t.uploadImage.src?e("el-button",{staticClass:"useBtn",attrs:{type:"success"},on:{click:function(a){return a.stopPropagation(),t.useImage(t.uploadImage)}}},[t._v("使用")]):t._e()],1)])],1),e("div",{staticClass:"headerWarp"},[e("div",{staticClass:"search"},[e("el-input",{staticClass:"input-with-select",attrs:{size:"mini",placeholder:"名称"},model:{value:t.form.search.name,callback:function(a){t.$set(t.form.search,"name",a)},expression:"form.search.name"}},[e("el-button",{attrs:{slot:"append",size:"mini",icon:"el-icon-search"},slot:"append"})],1)],1)])],1)],1)},s=[],n=e("2747"),o=e("c455"),c=e("db69"),r={mixins:[n["a"]],name:"d-resourceSelect",data:function(){return{typeMap:{},activeName:"first",type:"",canSelectTags:[],upImage:{editorId:"imageupload_"+(new Date-0)+"_"+parseInt(1e3*Math.random()),inUrl:this.url,initUpload:null,uploadParamsConfig:"",host:"",fileName:""},tags:[],Visible:!0,uploadImage:{src:"",id:""},form:{data:[],search:{name:"",categoryId:0},pagination:{size:30,total:0,curr:1}}}},components:{UploadImage:c["a"]},computed:{showtitle:function(){return this.typeMap[this.type]?this.typeMap[this.type].name:null}},mounted:function(){this.editorId="imageupload_"+(new Date-0)+"_"+parseInt(1e3*Math.random()),this.getTypeList()},methods:{selectTag:function(t){t.type?this.$set(t,"type",""):this.$set(t,"type","success"),this.loadData()},getTypeList:function(){var t=this,a=this;this.type&&"file"!==this.type&&Object(o["a"])({url:"editor/category/list",method:"POST",data:{type:[3]}}).then((function(e){var i=e.data;a.typeList=i.data||[],a.typeList.map((function(a){t.type||(t.type=a.name),t.typeMap[a.name]={id:a.id,name:a.name}})),t.form.search.categoryId=t.typeMap[t.type].id,t.loadData(1),t.loadTags()}))},selectImage:function(){this.$refs.UploadImage.$el.click()},handleSizeChange:function(t){this.form.pagination.size=t,this.loadData(this.form.pagination.curr)},loadTags:function(){var t=this;Object(o["a"])({url:"editor/tags/list",method:"post",data:{categoryId:this.typeMap[this.type].id,name:""}}).then((function(a){var e=a.data;t.canSelectTags=e.data||[]})).catch((function(){}))},searchByTag:function(t){this.form.search.name=t.name,this.loadData()},loadData:function(t){var a=this;this.form.pagination.curr=t;var e=Object.assign({},this.form.search);e.page=t,e.pageSize=this.form.pagination.size,e.tags=this.canSelectTags.filter((function(t){return"success"==t.type})),Object(o["a"])({url:"editor/resources/list",method:"post",needLoading:!1,data:e}).then((function(t){var e=t.data;a.form.pagination.total=e.data.total,a.form.data=e.data.list})).catch((function(){}))},useImage:function(t){"function"==typeof this.onSelectImage&&(this.onSelectImage(t.src||t.content),this.ema.fire("resource.use",t.id),this.close())},uploadSuccess:function(t){var a=this;this.uploadImage={},this.typeMap[this.type]?Object(o["a"])({url:"editor/resources/save",method:"post",needLoading:!1,data:{categoryId:this.typeMap[this.type].id,content:t,visibilitylevel:0}}).then((function(e){var i=e.data;a.uploadImage={src:t,id:i.data&&i.data.id}})):this.uploadImage.src=t}}},l=r,u=(e("f906"),e("2877")),p=Object(u["a"])(l,i,s,!1,null,"73657412",null);a["default"]=p.exports},f906:function(t,a,e){"use strict";e("331f")}}]);