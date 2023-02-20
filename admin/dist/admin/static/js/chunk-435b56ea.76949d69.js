(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-435b56ea","chunk-56605d46","chunk-27d5103c","chunk-076df809"],{"0351":function(t,e,a){"use strict";a("a9e5")},"0780":function(t,e,a){},"2e38":function(t,e,a){"use strict";a("0780")},"3c79":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"project-edit-container"},[e("div",{staticClass:"project-edit-errors"}),e("div",{staticClass:"row prepend-top-default"},[e("div",{staticClass:"col-lg-3 profile-settings-sidebar"},[e("h4",{staticClass:"prepend-top-0"},[t.id?e("div",[t._v("\n          更新项目\n        ")]):e("div",[t._v("\n          新建项目\n        ")])]),e("p"),t.id?e("div",[t._v("\n          修改自己的项目内容\n        ")]):e("div",[t._v("\n          创建的项目必须在指定的一个组里面，可以自己新建团队\n        ")]),e("p")]),e("div",{staticClass:"col-lg-9"},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"图标"}},[e("div",{staticClass:"headIcon"},[e("img",{attrs:{src:t._f("defaultProject")(t.form.image)}})]),e("upload",{attrs:{accept:"image",showBtn:!0,auto:!0},on:{uploadSuccess:t.uploadEnd}})],1),e("el-form-item",{attrs:{label:"所属组",prop:"groupId",rules:[{required:!0,message:"请选择所属组",trigger:"change"}]}},[e("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.form.groupId,callback:function(e){t.$set(t.form,"groupId",e)},expression:"form.groupId"}},t._l(t.options,(function(a){return e("el-option",{key:a.id,attrs:{label:a.name,value:a.id}},[e("span",{staticStyle:{float:"left"}},[t._v(t._s(a.name))]),e("img",{staticClass:"group-img",attrs:{src:t._f("defaultGroup")(a.image)}})])})),1),e("el-button",{attrs:{type:"text"},on:{click:t.addGroup}},[t._v("添加组")])],1),e("el-form-item",{attrs:{label:"项目名称",prop:"name",rules:[{required:!0,message:"输入1-35位项目名",trigger:"blur"},{min:1,max:35,message:"长度在 1 到 35 个字符",trigger:"blur"}]}},[e("el-input",{attrs:{placeholder:"项目名称",maxlength:35},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("el-form-item",{attrs:{label:"描述",prop:"desc",rules:[{required:!0,message:"输入描述",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 个字符",trigger:"blur"}]}},[e("el-input",{attrs:{type:"textarea",maxlength:50},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.onSubmit}},[t._v("提交")])],1)],1)],1)])])},s=[],i=a("f458"),o=a("d443"),r=a("c455");function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return e=p(e),e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t){var e=m(t,"string");return"symbol"===c(e)?e:String(e)}function m(t,e){if("object"!==c(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var n=a.call(t,e||"default");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var f={mixins:[i["a"]],components:{Upload:o["a"]},name:"projects_cnew",props:{id:{type:Number},info:{type:Object}},data:function(){return{loading:!1,options:[],value:"",form:{visibilitylevel:0,image:"",name:"",groupId:"",desc:""}}},mounted:function(){this.id&&this.getProjectInfo(),this.getGrops()},methods:{makeSecurity:function(){for(var t=32,e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",a=e.length,n="",s=0;s<t;s++)n+=e.charAt(Math.floor(Math.random()*a));this.form.security=n},addGroup:function(){var t=this;this.openDialog({name:"DAddGroup",data:{title:"添加团队"},methods:{onAdd:function(e){t.options.unshift(e),t.form.groupId=e.id}}})},uploadEnd:function(t){this.form.image=t},getProjectInfo:function(){var t=this;Object(r["a"])({url:"project/projectinfo",method:"get",params:{id:this.id}}).then((function(e){var a=e.data.data;t.form={image:a.image,name:a.projectName,groupId:a.groupId,desc:a.desc,ddwebhook:a.ddwebhook,visibilitylevel:a.visibilitylevel}}))},getGrops:function(){var t=this;Object(r["a"])({url:"project/group",method:"get",params:{type:0,start:0,count:100}}).then((function(e){var a=e.data.data;t.options=a})).catch((function(){}))},onSubmit:function(){var t=this;this.$refs.form.validate((function(e){if(!e)return t.$message("信息填写错误"),!1;t.loading=!0,t.id?Object(r["a"])({url:"project/project",method:"put",data:u(u({},t.form),{},{id:t.id})}).then((function(e){t.loading=!1,t.$notify({title:"成功",message:"修改成功",type:"success"})})).catch((function(){t.loading=!1,t.$notify({itle:"警告",message:"修改失败",type:"warning"})})):Object(r["a"])({url:"project/project",method:"post",data:t.form}).then((function(e){t.loading=!1,t.$notify({title:"成功",message:"创建成功",type:"success"}),t.$router.push({path:"/dashboard/projects"})})).catch((function(){t.loading=!1}))}))}}},h=f,v=(a("0351"),a("2877")),g=Object(v["a"])(h,n,s,!1,null,"08b595e8",null);e["default"]=g.exports},5671:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[t._m(0),t.hasData?e("div",{staticClass:"pages clearfix"},t._l(t.productList,(function(a,n){return e("div",{key:n,staticClass:"boxSize"},[e("div",{staticClass:"status"},[e("span",{staticClass:"ribbon",style:{backgroundColor:1==a.status?"#86C23A":"#f89300"}},[t._v(t._s(1==a.status?"启用":"禁用"))])]),e("div",{directives:[{name:"show",rawName:"v-show",value:0,expression:"0"}],staticClass:"sourceKey"},[t._v(t._s(t.$route.query.key+"/"+a.key))]),e("div",{staticClass:"sourceImg"},[e("img",{staticClass:"logo",attrs:{src:a.image||"https://ymm-maliang.oss-cn-hangzhou.aliyuncs.com/ymm-maliang/access/ymm1562307855048.png"}})]),e("div",{staticClass:"sourceName"},[t._v(t._s(a.name))]),e("div",{staticClass:"bottom"},[e("a",{staticClass:"qr"},[t._m(2,!0),e("a",{staticClass:"erCode",staticStyle:{display:"inline-block",cursor:"pointer"},attrs:{title:a.desc,href:t.getUrl(a,!0),target:"_blank"}},[e("img",{staticClass:"qrcode",attrs:{src:t.getqrUrl(a),alt:""}})])]),e("div",{staticClass:"sourceButton"},[e("a",{staticClass:"editButton",attrs:{href:t.getUrl(a),target:"_blank"}},[t._v("编辑")]),e("a",{staticClass:"editButton act_btn",attrs:{target:"_blank"}},[t._v("操作\n            "),e("div",{staticClass:"actions"},[e("p",{staticClass:"action",on:{click:function(e){return t.setting(a)}}},[t._v("设置")]),e("p",{staticClass:"action",on:{click:function(e){return t.copy(a)}}},[t._v("复制")]),1==a.status?e("p",{staticClass:"action",on:{click:function(e){return t.changeStatus(a)}}},[t._v("\n                禁用\n              ")]):t._e(),2==a.status?e("p",{staticClass:"action",on:{click:function(e){return t.changeStatus(a)}}},[t._v("\n                启用\n              ")]):t._e(),e("p",{directives:[{name:"show",rawName:"v-show",value:1==a.status,expression:"item.status==1"}],staticClass:"action dele",on:{click:function(e){return t.delet(a)}}},[t._v("删除\n              ")]),e("p",{staticClass:"last"})])])])])])})),0):e("div",[e("div",{staticClass:"blank-state"},[t._m(1),e("h3",{staticClass:"blank-state-title"},[e("el-button",{attrs:{type:"primary"},on:{click:t.newApi}},[t._v("添加页面")])],1)]),e("el-alert",{staticClass:"tipWarp",attrs:{title:"项目介绍",type:"info"}},[e("div",{domProps:{innerHTML:t._s(t.projectMd)}})])],1)])},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"project-home-panel text-center"},[e("div",{staticClass:"container-fluid container-limited"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"blank-state-icon"},[e("i",{staticClass:"ifont icon-empty"}),e("span",[t._v("暂无页面信息，请先添加页面")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"qrBox"},[e("i",{staticClass:"eqf-QRcode"})])}],i=a("f458"),o=a("c455"),r=a("f121"),c=a("7068"),l={mixins:[i["a"]],components:{},name:"projects_cdoc",props:{id:{type:String}},data:function(){return{projectKey:"",projectName:"",projectId:null,categoryType:{1:"活动类"},productList:[],parameter:{key:"",name:"",categoryId:"",status:"1"},pagination:{total:0,curr:1,size:10},projectMd:c}},mounted:function(){var t=this;this.projectId=this.$route.query.id-0,this.projectKey=this.$route.query.key,this.projectName=window.decodeURIComponent(this.$route.query.name||""),this.detailInfo(),this.bindEvent("pageAddSuccess",(function(){t.detailInfo()}))},computed:{hasData:function(t){return this.productList.length>0}},methods:{setting:function(t){this.$router.push({path:"/page",query:{id:t.id}})},getUrl:function(t,e){if(e){var a="".concat(r.VIEW_PATH).concat(t.key),n=new window.Image;return n.src=a,n.src}return"".concat(r.EDITOR_PATH,"?key=").concat(t.key)},getqrUrl:function(t){return"https://www.liantu.com/api.php?text=".concat(encodeURIComponent(this.getUrl(t,1)))},changeStatus:function(t){var e=this;e.status=1==t.status?2:1;var a="";a=2==e.status?"禁用":"启用",e.$confirm("确定要".concat(a,"吗？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["a"])({url:"editor/pages/change-status",data:{id:+t.id,status:+e.status},needLoading:!0,trimNull:!1,method:"post"}).then((function(t){e.detailInfo(),e.$message({type:"info",message:a+"成功！"})}))}))},delet:function(t){var e=this;e.$confirm("是否删除？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["a"])({url:"editor/pages/delete",method:"POST",needLoading:!0,trimNull:!1,data:{id:+t.id}}).then((function(t){e.$message({type:"success",message:"删除成功!"}),e.detailInfo()}))}))},detailInfo:function(){var t=this;Object(o["a"])({url:"editor/pages/list",method:"post",needLoading:!0,trimNull:!1,data:{projectId:this.projectId}}).then((function(e){t.productList=e.data.data||[]}))},detailPage:function(t){},newApi:function(){this.openDialog({name:"DAddPage",data:{title:"添加页面",form:{projectId:this.$route.query.id}},methods:{}})},copy:function(t){var e=this;console.log(t),Object(o["a"])({url:"editor/pages/detail",method:"post",needLoading:!1,data:{scene:"copy",pageKey:t.key}}).then((function(t){console.log("bbb",t.data.data);var a=t.data.data;e.openDialog({name:"DCopyPage",data:{title:"复制页面",form:{projectId:e.$route.query.id,name:"复制".concat(a.name).concat(Math.floor(100*Math.random())),desc:"复制".concat(a.desc).concat(Math.floor(100*Math.random())),visibilitylevel:a.visibilitylevel,content:a.content,image:a.image}},methods:{}})}))}}},u=l,d=(a("de95"),a("2877")),p=Object(d["a"])(u,n,s,!1,null,"0ff60c5b",null);e["default"]=p.exports},"6faa":function(t,e,a){"use strict";a("b487")},7068:function(t,e){t.exports="<ol>\n<li>每个项目存在很多页面</li>\n<li>不知道说啥</li>\n</ol>\n"},"8f20":function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("li",{staticClass:"select2-results-dept-0 select2-result select2-result-selectable",attrs:{role:"presentation"}},[e("div",{staticClass:"select2-result-label",attrs:{id:"select2-result-label-25",role:"option"}},[e("div",{staticClass:"user-result undefined"},[e("div",{staticClass:"user-image"},[e("img",{staticClass:"avatar s24",attrs:{src:t.item.photo}})]),e("div",{staticClass:"user-name"},[t._v(t._s(t.item.name))])])])])},s=[],i={mixins:[],name:"CUser_Item",props:{item:Object,default:function(){return{name:"",email:"",photo:""}}},data:function(){return{}},methods:{}},o=i,r=(a("2e38"),a("2877")),c=Object(r["a"])(o,n,s,!1,null,"f1fa7018",null);e["a"]=c.exports},"9bff":function(t,e,a){"use strict";a("ce24")},a9e5:function(t,e,a){},b167:function(t,e,a){},b487:function(t,e,a){},ce24:function(t,e,a){},d0d7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[t.project.id?e("div",{staticClass:"layout-nav"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"nav-control scrolling-tabs-container"},[e("el-tabs",{staticClass:"nav-links",on:{"tab-click":t.tabHandleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"页面",name:"doc"}}),e("el-tab-pane",{attrs:{label:"成员",name:"member"}}),t.project.role<=1?e("el-tab-pane",{attrs:{label:"设置",name:"setting"}}):t._e()],1)],1),e("div",{staticClass:"controls"},[e("el-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.newApi}},[t._v("添加页面")])],1)])]):t._e(),e("div",{staticClass:"content-wrapper page-with-layout-nav"},[e("div",{staticClass:"container-fluid container-limited"},[e("div",{staticClass:"content"},["doc"===t.activeName?e("div",[e("c-doc",{attrs:{id:t.project.id}})],1):t._e(),"member"===t.activeName?e("div",[e("member",{attrs:{id:t.project.id}})],1):t._e(),"apis"===t.activeName?e("div",{staticClass:"apis"},[e("c-interface",{attrs:{id:t.project.id}})],1):t._e(),"setting"===t.activeName?e("div",[e("div",{staticClass:"panel panel-default prepend-top-default"},[e("div",{staticClass:"panel-heading"},[t._v("\n              基本设置\n            ")]),e("div",{staticClass:"panel-body"},[e("c-new",{attrs:{id:t.project.id-0}})],1)]),e("div",{staticClass:"panel panel-danger"},[e("div",{staticClass:"panel-heading"},[t._v("删除项目")]),e("div",{staticClass:"panel-body"},[t._m(0),e("div",{staticClass:"form-actions"},[e("a",{staticClass:"btn btn-remove",attrs:{rel:"nofollow"},on:{click:t.delectProject}},[t._v("删除项目")])])])])]):t._e()])])])])},s=[function(){var t=this,e=t._self._c;return e("p",[t._v("\n                删除项目是不可逆的，确认\n                "),e("br")])}],i=a("f458"),o=a("c455"),r=a("e351"),c=a("3c79"),l=a("5671"),u={mixins:[i["a"]],components:{Member:r["default"],CNew:c["default"],CDoc:l["default"]},name:"project",data:function(){return{content:"",project:{id:1},activeName:"doc"}},mounted:function(){console.log("hahhahah")},watch:{},methods:{loadProject:function(){var t=this;Object(o["a"])({url:"project/projectinfo",method:"get",needLoading:!0,params:{id:this.$route.query.id}}).then((function(e){t.project=e.data.data}))},newApi:function(){this.openDialog({name:"DAddPage",data:{title:"添加页面",form:{projectId:this.$route.query.id}},methods:{}})},tabHandleClick:function(t){this.activeName=t.name},delectProject:function(){var t=this;this.$confirm("确认删除,删除后所有数据将清除","提示",{type:"warning"}).then((function(){Object(o["a"])({url:"project/project",method:"delete",data:{id:t.$route.query.id}}).then((function(e){t.$router.push({path:"/dashboard/projects"})})).catch((function(){}))})).catch((function(){t.$message("已取消")}))}}},d=u,p=(a("6faa"),a("2877")),m=Object(p["a"])(d,n,s,!1,null,"7dfcdfd0",null);e["default"]=m.exports},d443:function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showBtn,expression:"showBtn"}],attrs:{size:t.size,id:"virtualUpload",type:"primary"}},[t._v("上传\n  "),e("i",{staticClass:"el-icon-upload el-icon--right"})])},s=[],i=a("e97e"),o=a("46ee"),r=a.n(o),c=a("c455"),l=function(t){Object(c["a"])({url:"upload/getTocken",method:"get",needLoading:!1,data:{}}).then((function(e){var a=e.data.data;t(a)}))},u=function(t){var e=t.id,a=(t.fileName,t.filters),n=t.isAddUploadFile,s=t.callback;this.imgSrc="";var o=!1,c=this,l={image:{title:"资源选择",extensions:"jpg,gif,png,jpeg"},video:{title:"资源选择",extensions:"mp4"},audio:{title:"资源选择",extensions:"mp3"}};this.uploader=new r.a.Uploader({runtimes:"html5",browse_button:e,url:"https://oss.aliyuncs.com",filters:[l[a]],prevent_duplicates:!0,max_file_size:"100mb",init:{PostInit:function(){},FilesAdded:function(t,e){if(o)return!1;o=!0;var a=this,s=e[0].name;if(n){var r=s.lastIndexOf(".");-1!==r&&(s="ymm_"+(new Date).getTime()+s.substring(r)),i["c"].readAsDataURL(e[0].getNative(),(function(t){var n=new window.File([i["c"].getBlobBydataURI(t,e[0].type)],s,{type:e[0].type});a.addFile(n),a.removeFile(e[0]),c.send(s)}))}},BeforeUpload:function(t,e){},UploadProgress:function(t,e){},FileUploaded:function(t,e,a){200===a.status&&(c.imgSrc=c.imgSrc.replace("ymm.oss-cn-hangzhou.aliyuncs.com","imagecdn.ymm56.com"),s(c.imgSrc)),o=!1},Error:function(t,e){}}}),this.uploader.init()};u.prototype.send=function(t){var e=this;t=t||"ymm"+(new Date).getTime()+".png",l((function(a){a.key=a.dir+t,e.imgSrc=a.host+"/"+a.key;var n={key:a.key,policy:a.policy,OSSAccessKeyId:a.accessid,success_action_status:"200",signature:a.signature};console.log("newMultipartParams",n),e.uploader.setOption({url:a.host,multipart_params:n}),e.uploader.start()}))};var d=u,p=a("ed03"),m={mixins:[p["a"]],name:"UploadImage",components:{},props:{h2c:{required:!1,type:Object,default:function(){return{}}},templateElement:{type:String},size:{type:String,default:"medium"},accept:{type:String,default:""},auto:{type:Boolean,default:!1},showBtn:{type:Boolean,default:!1}},data:function(){return{uploadObject:null,options:null,onUploaded:null,templateData:{name:"",desc:""}}},watch:{accept:function(t){var e=this;this.uploadObject=new d({id:this.$el,isAddUploadFile:this.auto,filters:this.accept,callback:function(t){e.$emit("uploadSuccess",t),"function"===typeof e.onUploaded&&e.onUploaded(t)}})}},beforeDestroy:function(){},mounted:function(){var t=this;this.uploadObject=new d({id:this.$el,isAddUploadFile:this.auto,filters:this.accept,callback:function(e){t.$emit("uploadSuccess",e),"function"===typeof t.onUploaded&&t.onUploaded(e)}}),this.ema.bind("saveTemplate",(function(){t.options=null,t.onUploaded=null,t.getImageDataByDom(document.querySelector(t.templateElement),(function(e){t.uploadImg(e)}))}))},methods:{upload:function(t,e,a){var n=this;this.options=e||null,this.onUploaded=a||null,t=t||document.querySelector(this.templateElement),this.getImageDataByDom(t,(function(t){n.uploadImg(t)}))},uploadImg:function(t){var e="ymm"+(new Date).getTime()+".png",a=this,n=new window.File([i["c"].getBlobBydataURI(t,"image/png")],e,{type:"image/png"});a.uploadObject.uploader.addFile(n),a.uploadObject.send()},getImageDataByDom:function(t,e){i["c"].html2canvas(t,this.h2c).then((function(t){var a=t.toDataURL();e&&e(a)}))}}},f=m,h=a("2877"),v=Object(h["a"])(f,n,s,!1,null,"2bff0db8",null);e["a"]=v.exports},de95:function(t,e,a){"use strict";a("b167")},e351:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{},[e("div",{staticClass:"flash-container flash-container-page"}),e("div",{staticClass:"container-fluid container-limited"},[e("div",{staticClass:"content"},[e("div",{staticClass:"project-members-page prepend-top-default"},[t.role<=2?e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[t._v("\n            添加用户到项目\n          ")]),e("div",{staticClass:"panel-body"},[e("p",{staticClass:"light"},[t._v("\n              下面列举的是可以访问项目的所有用户\n            ")]),e("el-form",{attrs:{"label-width":"80px"}},[e("el-form-item",{attrs:{label:"账号"}},[e("el-select",{staticClass:"searchUser",attrs:{multiple:"",filterable:"",remote:"",placeholder:"请输入关键词","remote-method":t.querySearchAsync},model:{value:t.req.userId,callback:function(e){t.$set(t.req,"userId",e)},expression:"req.userId"}},t._l(t.searchUsers,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name+t.email,value:t.id}})})),1)],1),e("el-form-item",{attrs:{label:"权限"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.req.role,callback:function(e){t.$set(t.req,"role",e)},expression:"req.role"}},t._l(t.projectPower,(function(t,a){return e("el-option",{key:a,attrs:{label:t.label,value:t.value}})})),1)],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",disabled:!t.req.role||!t.hasAddUser},on:{click:t.onSubmit}},[t._v("添加用户到项目")])],1)],1)],1)]):t._e(),e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[e("strong",[t._v(t._s(t.info.projectName))]),e("span",{staticClass:"badge"},[t._v(t._s(t.pusers.length))])]),e("ul",{staticClass:"content-list"},t._l(t.pusers,(function(a,n){return e("li",{key:n,staticClass:"group_member js-toggle-container"},[e("div",{staticClass:"controls"},[t.role<=2?e("el-dropdown",{on:{command:t.handleCommand}},[e("span",{staticClass:"el-dropdown-link"},[t._v("\n                    "+t._s(t._f("projectRole")(a.role))),e("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.projectPower,(function(n){return e("el-dropdown-item",{key:n.value,attrs:{trigger:"click",command:n.value+","+a.userId}},[t._v(t._s(n.label)+"\n                    ")])})),1)],1):[t._v("\n                  "+t._s(t._f("groupRole")(a.role))+"\n                ")],a.userId===t.userInfo.userId?e("a",{staticClass:"btn btn-remove",on:{click:function(e){return t.remove(a,!0)}}},[t._v("离开")]):t._e(),a.userId!=t.userInfo.userId&&t.info.role<=2?e("a",{staticClass:"btn btn-remove",on:{click:function(e){return t.remove(a)}}},[t._v("移除")]):t._e()],2),e("span",{staticClass:"list-item-name"},[e("img",{staticClass:"avatar s40",attrs:{alt:"",src:t._f("defaultHeader")(a.photo)}}),e("strong",[e("router-link",{attrs:{to:{path:"/user",query:{id:a.userId}}}},[t._v(t._s(a.name))])],1),a.userId===t.userInfo.userId?e("span",{staticClass:"label label-success"},[t._v("当前用户")]):t._e(),e("div",{staticClass:"cgray"},[t._v(t._s(a.email))])])])})),0)]),e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[e("strong",[t._v(t._s(t.info.groupName))]),e("span",{staticClass:"badge"},[t._v(t._s(t.gusers.length))])]),e("ul",{staticClass:"content-list"},t._l(t.gusers,(function(a,n){return e("li",{key:a.userId,staticClass:"group_member js-toggle-container"},[e("span",{staticClass:"list-item-name"},[e("img",{staticClass:"avatar s40",attrs:{alt:"",src:t._f("defaultHeader")(a.photo)}}),e("strong",[e("router-link",{attrs:{to:{path:"/user",query:{id:a.userId}}}},[t._v(t._s(a.name))])],1),a.userId===t.userInfo.userId?e("span",{staticClass:"label label-success"},[t._v("当前用户")]):t._e(),e("div",{staticClass:"cgray"},[t._v(t._s(a.email))]),e("div",{staticClass:"cgray"},[t._v(t._s(t._f("projectRole")(a.role)))])])])})),0)])])])])])},s=[],i=a("f458"),o=a("c455"),r=a("8f20"),c=a("5880"),l=a("8bbf"),u=a.n(l);u.a.component("my-item-zh",{functional:!0,render:function(t,e){return t("li",e.data,[t(r["a"],{props:{item:e.props.item}})])},props:{item:{type:Object,required:!0}}});var d={mixins:[i["a"]],components:{},name:"projects_members",props:{id:{type:String}},data:function(){return{searchUsers:[],info:{},req:{projectId:"",role:"",userId:""},value:"",pusers:[],gusers:[]}},mounted:function(){this.req.projectId=this.id,this.loadData()},computed:Object(c["mapState"])({Metadata:function(t){return t.Metadata},projectPower:function(t){return t.Metadata.projectPower.filter((function(t){return 1!=t.value}))},hasAddUser:function(){return this.req.userId.length>0},role:function(){var t=this,e=100;return this.pusers.forEach((function(a){a.userId==t.userInfo.userId&&(e=Math.min(e,a.role))})),this.gusers.forEach((function(a){a.userId==t.userInfo.userId&&(e=Math.min(e,a.role))})),e},canLeave:function(){return!0}}),methods:{querySearchAsync:function(t,e){var a=this;""!=t&&Object(o["a"])({url:"users/search",method:"get",params:{key:t}}).then((function(t){var e=a.pretreatmentList(t.data.data);a.searchUsers=e})).catch((function(){}))},pretreatmentList:function(t){var e=[];return t.forEach((function(t){e.push({value:t.name,email:t.email,name:t.name,photo:t.photo,id:t.id})})),e},loadData:function(){var t=this;Object(o["a"])({url:"project/projectuser",method:"get",params:{count:100,projectId:this.req.projectId,start:0}}).then((function(e){t.pusers=e.data.data})),Object(o["a"])({url:"project/projectinfo",method:"get",params:{id:this.req.projectId}}).then((function(e){t.info=e.data.data;var a=t;Object(o["a"])({url:"project/groupuser",method:"get",params:{count:100,id:t.info.groupId,start:0}}).then((function(t){a.gusers=t.data.data}))}))},handleCommand:function(t){var e=this,a=t.split(",")[0],n=t.split(",")[1];Object(o["a"])({url:"project/projectuser",method:"put",data:{projectId:this.req.projectId,role:a,userId:n}}).then((function(t){e.$message("修改成功"),e.loadData()})).catch((function(){}))},onSubmit:function(){var t=this;Object(o["a"])({url:"project/projectuser",method:"post",data:this.req}).then((function(e){t.$message("添加成功"),t.loadData()})).catch((function(){}))},remove:function(t){var e=this;Object(o["a"])({url:"project/projectuser",method:"delete",data:{projectId:this.req.projectId,userId:t.userId}}).then((function(a){e.$message("删除成功"),t.userId===e.userInfo.userId?e.$router.push({path:"/dashboard/groups"}):e.loadData()})).catch((function(){}))}}},p=d,m=(a("9bff"),a("2877")),f=Object(m["a"])(p,n,s,!1,null,"84a475f4",null);e["default"]=f.exports}}]);