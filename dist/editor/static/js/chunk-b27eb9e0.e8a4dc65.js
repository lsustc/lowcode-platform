(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b27eb9e0"],{2747:function(e,t,o){"use strict";var i=o("f7ab"),n=o("2f62");t["a"]={replace:!0,data:function(){return{title:"",size:"small",Visible:!0}},computed:Object(n["c"])({Config:function(e){return e.Config},RootNodeInfo:function(e){return e.RootNodeInfo},Metadata:function(e){return e.Metadata},demoMode:function(e){return e.setting.demoMode}}),beforeCreated:function(){},created:function(){this.ema=i["b"].getProxy()},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},activated:function(){},deactivated:function(){},beforDestroy:function(){},destroyed:function(){this.ema.dispose()},methods:{bindEvent:function(e,t){this.$options.name||console.warn("绑定事件的组件不存在组件名称",e),this.ema.bind("".concat(this.$options.name,".").concat(e),t)},openDialog:function(e){this.ema.fire("Dialogs.push",e)},close:function(){this.ema.fire("Dialogs.close",this.$options.name)}}}},3341:function(e,t,o){},a6931:function(e,t,o){"use strict";o("3341")},aa78:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:e.title,visible:e.Visible,width:"600px"},on:{"update:visible":function(t){e.Visible=t},close:e.close}},[o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px",rules:e.rules}},[o("el-form-item",{attrs:{label:"名称:",prop:"name"}},[o("el-input",{attrs:{type:"text"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),o("el-form-item",{attrs:{label:"描述:",prop:"desc"}},[o("el-input",{attrs:{type:"text"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),o("el-form-item",{attrs:{label:"",prop:"isPublic"}},[o("el-radio-group",{attrs:{size:"small"},model:{value:e.form.isPublic,callback:function(t){e.$set(e.form,"isPublic",t)},expression:"form.isPublic"}},[o("el-radio-button",{attrs:{label:"1"}},[e._v("公开")]),o("el-radio-button",{attrs:{label:"0"}},[e._v("私有")])],1)],1),e.form.image?o("div",{staticClass:"template-image"},[o("img",{ref:"pageshot",attrs:{src:e.form.image,alt:""}})]):e._e()],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){t.stopPropagation(),e.Visible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return t.stopPropagation(),e.save(t)}}},[e._v("确 定")])],1)],1)},n=[],a=o("2747"),s=o("c455"),r={mixins:[a["a"]],name:"d-saveCombinedComponent",data:function(){return{title:"另存为组合组件",Visible:!0,form:{name:"",isPublic:1,desc:"",image:""},loading:!1,rules:{name:[{required:!0,message:"请输入组合组件名称",trigger:"blur"}],desc:[{required:!0,message:"请输入组合组件描述",trigger:"blur"}]}}},components:{},computed:{},mounted:function(){},methods:{getComponentShot:function(){var e=this;this.loading=!0,this.ema.fire("screenshot",document.querySelector('[el="'.concat(this.elID,'"]')),{},(function(t){e.form.image=t,e.loading=!1}),!1)},save:function(){var e=this,t=this;this.$refs.form.validate((function(o){o&&(Object(s["a"])({url:"editor/resources/save",method:"post",needLoading:!1,data:{categoryId:2,content:t.content,icon:t.form.image,name:t.form.name,desc:t.form.desc,visibilityLevel:Number(t.form.isPublic)}}),e.Visible=!1,e.$message({message:"组合组件保存成功",type:"success"}),setTimeout((function(){e.ema.fire("combinedComponent.refresh")}),500))}))}}},c=r,l=(o("a6931"),o("2877")),u=Object(l["a"])(c,i,n,!1,null,"60854242",null);t["default"]=u.exports}}]);