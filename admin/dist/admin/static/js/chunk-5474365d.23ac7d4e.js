(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5474365d","chunk-56605d46","chunk-27d5103c","chunk-076df809","chunk-cbccb166"],{"0351":function(t,e,n){"use strict";n("a9e5")},"0780":function(t,e,n){},"177d":function(t,e,n){},"2e38":function(t,e,n){"use strict";n("0780")},"3b8a":function(t,e,n){},"3c79":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"project-edit-container"},[e("div",{staticClass:"project-edit-errors"}),e("div",{staticClass:"row prepend-top-default"},[e("div",{staticClass:"col-lg-3 profile-settings-sidebar"},[e("h4",{staticClass:"prepend-top-0"},[t.id?e("div",[t._v("\n          更新项目\n        ")]):e("div",[t._v("\n          新建项目\n        ")])]),e("p"),t.id?e("div",[t._v("\n          修改自己的项目内容\n        ")]):e("div",[t._v("\n          创建的项目必须在指定的一个组里面，可以自己新建团队\n        ")]),e("p")]),e("div",{staticClass:"col-lg-9"},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"图标"}},[e("div",{staticClass:"headIcon"},[e("img",{attrs:{src:t._f("defaultProject")(t.form.image)}})]),e("upload",{attrs:{accept:"image",showBtn:!0,auto:!0},on:{uploadSuccess:t.uploadEnd}})],1),e("el-form-item",{attrs:{label:"所属组",prop:"groupId",rules:[{required:!0,message:"请选择所属组",trigger:"change"}]}},[e("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.form.groupId,callback:function(e){t.$set(t.form,"groupId",e)},expression:"form.groupId"}},t._l(t.options,(function(n){return e("el-option",{key:n.id,attrs:{label:n.name,value:n.id}},[e("span",{staticStyle:{float:"left"}},[t._v(t._s(n.name))]),e("img",{staticClass:"group-img",attrs:{src:t._f("defaultGroup")(n.image)}})])})),1),e("el-button",{attrs:{type:"text"},on:{click:t.addGroup}},[t._v("添加组")])],1),e("el-form-item",{attrs:{label:"项目名称",prop:"name",rules:[{required:!0,message:"输入1-35位项目名",trigger:"blur"},{min:1,max:35,message:"长度在 1 到 35 个字符",trigger:"blur"}]}},[e("el-input",{attrs:{placeholder:"项目名称",maxlength:35},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("el-form-item",{attrs:{label:"描述",prop:"desc",rules:[{required:!0,message:"输入描述",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 个字符",trigger:"blur"}]}},[e("el-input",{attrs:{type:"textarea",maxlength:50},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.onSubmit}},[t._v("提交")])],1)],1)],1)])])},a=[],o=n("f458"),i=n("d443"),s=n("c455");function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e=p(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){var e=f(t,"string");return"symbol"===c(e)?e:String(e)}function f(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var m={mixins:[o["a"]],components:{Upload:i["a"]},name:"projects_cnew",props:{id:{type:Number},info:{type:Object}},data:function(){return{loading:!1,options:[],value:"",form:{visibilitylevel:0,image:"",name:"",groupId:"",desc:""}}},mounted:function(){this.id&&this.getProjectInfo(),this.getGrops()},methods:{makeSecurity:function(){for(var t=32,e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=e.length,r="",a=0;a<t;a++)r+=e.charAt(Math.floor(Math.random()*n));this.form.security=r},addGroup:function(){var t=this;this.openDialog({name:"DAddGroup",data:{title:"添加团队"},methods:{onAdd:function(e){t.options.unshift(e),t.form.groupId=e.id}}})},uploadEnd:function(t){this.form.image=t},getProjectInfo:function(){var t=this;Object(s["a"])({url:"project/projectinfo",method:"get",params:{id:this.id}}).then((function(e){var n=e.data.data;t.form={image:n.image,name:n.projectName,groupId:n.groupId,desc:n.desc,ddwebhook:n.ddwebhook,visibilitylevel:n.visibilitylevel}}))},getGrops:function(){var t=this;Object(s["a"])({url:"project/group",method:"get",params:{type:0,start:0,count:100}}).then((function(e){var n=e.data.data;t.options=n})).catch((function(){}))},onSubmit:function(){var t=this;this.$refs.form.validate((function(e){if(!e)return t.$message("信息填写错误"),!1;t.loading=!0,t.id?Object(s["a"])({url:"project/project",method:"put",data:u(u({},t.form),{},{id:t.id})}).then((function(e){t.loading=!1,t.$notify({title:"成功",message:"修改成功",type:"success"})})).catch((function(){t.loading=!1,t.$notify({itle:"警告",message:"修改失败",type:"warning"})})):Object(s["a"])({url:"project/project",method:"post",data:t.form}).then((function(e){t.loading=!1,t.$notify({title:"成功",message:"创建成功",type:"success"}),t.$router.push({path:"/dashboard/projects"})})).catch((function(){t.loading=!1}))}))}}},h=m,v=(n("0351"),n("2877")),g=Object(v["a"])(h,r,a,!1,null,"08b595e8",null);e["default"]=g.exports},5671:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[t._m(0),t.hasData?e("div",{staticClass:"pages clearfix"},t._l(t.productList,(function(n,r){return e("div",{key:r,staticClass:"boxSize"},[e("div",{staticClass:"status"},[e("span",{staticClass:"ribbon",style:{backgroundColor:1==n.status?"#86C23A":"#f89300"}},[t._v(t._s(1==n.status?"启用":"禁用"))])]),e("div",{directives:[{name:"show",rawName:"v-show",value:0,expression:"0"}],staticClass:"sourceKey"},[t._v(t._s(t.$route.query.key+"/"+n.key))]),e("div",{staticClass:"sourceImg"},[e("img",{staticClass:"logo",attrs:{src:n.image||"https://ymm-maliang.oss-cn-hangzhou.aliyuncs.com/ymm-maliang/access/ymm1562307855048.png"}})]),e("div",{staticClass:"sourceName"},[t._v(t._s(n.name))]),e("div",{staticClass:"bottom"},[e("a",{staticClass:"qr"},[t._m(2,!0),e("a",{staticClass:"erCode",staticStyle:{display:"inline-block",cursor:"pointer"},attrs:{title:n.desc,href:t.getUrl(n,!0),target:"_blank"}},[e("img",{staticClass:"qrcode",attrs:{src:t.getqrUrl(n),alt:""}})])]),e("div",{staticClass:"sourceButton"},[e("a",{staticClass:"editButton",attrs:{href:t.getUrl(n),target:"_blank"}},[t._v("编辑")]),e("a",{staticClass:"editButton act_btn",attrs:{target:"_blank"}},[t._v("操作\n            "),e("div",{staticClass:"actions"},[e("p",{staticClass:"action",on:{click:function(e){return t.setting(n)}}},[t._v("设置")]),e("p",{staticClass:"action",on:{click:function(e){return t.copy(n)}}},[t._v("复制")]),1==n.status?e("p",{staticClass:"action",on:{click:function(e){return t.changeStatus(n)}}},[t._v("\n                禁用\n              ")]):t._e(),2==n.status?e("p",{staticClass:"action",on:{click:function(e){return t.changeStatus(n)}}},[t._v("\n                启用\n              ")]):t._e(),e("p",{directives:[{name:"show",rawName:"v-show",value:1==n.status,expression:"item.status==1"}],staticClass:"action dele",on:{click:function(e){return t.delet(n)}}},[t._v("删除\n              ")]),e("p",{staticClass:"last"})])])])])])})),0):e("div",[e("div",{staticClass:"blank-state"},[t._m(1),e("h3",{staticClass:"blank-state-title"},[e("el-button",{attrs:{type:"primary"},on:{click:t.newApi}},[t._v("添加页面")])],1)]),e("el-alert",{staticClass:"tipWarp",attrs:{title:"项目介绍",type:"info"}},[e("div",{domProps:{innerHTML:t._s(t.projectMd)}})])],1)])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"project-home-panel text-center"},[e("div",{staticClass:"container-fluid container-limited"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"blank-state-icon"},[e("i",{staticClass:"ifont icon-empty"}),e("span",[t._v("暂无页面信息，请先添加页面")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"qrBox"},[e("i",{staticClass:"eqf-QRcode"})])}],o=n("f458"),i=n("c455"),s=n("f121"),c=n("7068"),l={mixins:[o["a"]],components:{},name:"projects_cdoc",props:{id:{type:String}},data:function(){return{projectKey:"",projectName:"",projectId:null,categoryType:{1:"活动类"},productList:[],parameter:{key:"",name:"",categoryId:"",status:"1"},pagination:{total:0,curr:1,size:10},projectMd:c}},mounted:function(){var t=this;this.projectId=this.$route.query.id-0,this.projectKey=this.$route.query.key,this.projectName=window.decodeURIComponent(this.$route.query.name||""),this.detailInfo(),this.bindEvent("pageAddSuccess",(function(){t.detailInfo()}))},computed:{hasData:function(t){return this.productList.length>0}},methods:{setting:function(t){this.$router.push({path:"/page",query:{id:t.id}})},getUrl:function(t,e){if(e){var n="".concat(s.VIEW_PATH).concat(t.key),r=new window.Image;return r.src=n,r.src}return"".concat(s.EDITOR_PATH,"?key=").concat(t.key)},getqrUrl:function(t){return"https://www.liantu.com/api.php?text=".concat(encodeURIComponent(this.getUrl(t,1)))},changeStatus:function(t){var e=this;e.status=1==t.status?2:1;var n="";n=2==e.status?"禁用":"启用",e.$confirm("确定要".concat(n,"吗？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["a"])({url:"editor/pages/change-status",data:{id:+t.id,status:+e.status},needLoading:!0,trimNull:!1,method:"post"}).then((function(t){e.detailInfo(),e.$message({type:"info",message:n+"成功！"})}))}))},delet:function(t){var e=this;e.$confirm("是否删除？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["a"])({url:"editor/pages/delete",method:"POST",needLoading:!0,trimNull:!1,data:{id:+t.id}}).then((function(t){e.$message({type:"success",message:"删除成功!"}),e.detailInfo()}))}))},detailInfo:function(){var t=this;Object(i["a"])({url:"editor/pages/list",method:"post",needLoading:!0,trimNull:!1,data:{projectId:this.projectId}}).then((function(e){t.productList=e.data.data||[]}))},detailPage:function(t){},newApi:function(){this.openDialog({name:"DAddPage",data:{title:"添加页面",form:{projectId:this.$route.query.id}},methods:{}})},copy:function(t){var e=this;console.log(t),Object(i["a"])({url:"editor/pages/detail",method:"post",needLoading:!1,data:{scene:"copy",pageKey:t.key}}).then((function(t){console.log("bbb",t.data.data);var n=t.data.data;e.openDialog({name:"DCopyPage",data:{title:"复制页面",form:{projectId:e.$route.query.id,name:"复制".concat(n.name).concat(Math.floor(100*Math.random())),desc:"复制".concat(n.desc).concat(Math.floor(100*Math.random())),visibilitylevel:n.visibilitylevel,content:n.content,image:n.image}},methods:{}})}))}}},u=l,d=(n("de95"),n("2877")),p=Object(d["a"])(u,r,a,!1,null,"0ff60c5b",null);e["default"]=p.exports},6437:function(t,e,n){"use strict";n("3b8a")},7068:function(t,e){t.exports="<ol>\n<li>每个项目存在很多页面</li>\n<li>不知道说啥</li>\n</ol>\n"},7448:function(t,e,n){"use strict";n("177d")},"8f20":function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("li",{staticClass:"select2-results-dept-0 select2-result select2-result-selectable",attrs:{role:"presentation"}},[e("div",{staticClass:"select2-result-label",attrs:{id:"select2-result-label-25",role:"option"}},[e("div",{staticClass:"user-result undefined"},[e("div",{staticClass:"user-image"},[e("img",{staticClass:"avatar s24",attrs:{src:t.item.photo}})]),e("div",{staticClass:"user-name"},[t._v(t._s(t.item.name))])])])])},a=[],o={mixins:[],name:"CUser_Item",props:{item:Object,default:function(){return{name:"",email:"",photo:""}}},data:function(){return{}},methods:{}},i=o,s=(n("2e38"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"f1fa7018",null);e["a"]=c.exports},"9bff":function(t,e,n){"use strict";n("ce24")},a9e5:function(t,e,n){},b167:function(t,e,n){},b891:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid container-limited"},[e("div",{staticClass:"content"},[e("div",{staticClass:"project-members-page prepend-top-default"},[e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[t._v("\n          数据\n        ")]),e("div",{staticClass:"panel-body"},[e("el-row",[e("el-col",{attrs:{span:24}},[e("el-form",{ref:"form",attrs:{inline:!0,model:t.form,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"时间范围"}},[e("el-date-picker",{attrs:{type:"daterange","picker-options":t.pickerOptions,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},model:{value:t.form.timeRange,callback:function(e){t.$set(t.form,"timeRange",e)},expression:"form.timeRange"}})],1),e("el-form-item",{attrs:{label:"聚合时间"}},[e("el-radio-group",{model:{value:t.form.step,callback:function(e){t.$set(t.form,"step",e)},expression:"form.step"}},t._l(t.steps,(function(n){return e("el-radio",{key:n.id,attrs:{label:n.id}},[t._v(t._s(n.label||n.id))])})),1)],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.getPUVTrendByES}},[t._v("查询")])],1)],1)],1)],1),e("el-row",[e("el-card",[e("div",[t._v("\n                共计 "+t._s(t.sumData.pageCount)+" 个页面, 累计访客 "+t._s(t.sumData.user)+" 位\n              ")])])],1),e("el-row",{staticStyle:{"margin-top":"10px"}},[e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n                PU / UV "),e("i",{staticClass:"chart-hint"},[t._v("点击图例可显示/隐藏对应指标")])]),e("el-col",{ref:"puvchart",attrs:{span:24}},[t.trend.x?e("chart",{staticClass:"mchart",staticStyle:{width:"100%",height:"400px"},attrs:{options:t.trendOptions}}):t._e()],1),e("el-col",{staticStyle:{"padding-bottom":"20px"},attrs:{span:24}},[t.trendTable?e("table",{staticClass:"trend-table"},[e("thead",t._l(t.trendTable.thead,(function(n){return e("th",{key:n},[t._v(t._s(n))])})),0),e("tbody",t._l(t.trendTable.tbody,(function(n,r){return e("tr",{key:r},t._l(n,(function(n,r){return e("td",{key:r},[t._v(t._s(n))])})),0)})),0)]):t._e()])],1)],1)],1)])])])])},a=[],o=n("f458"),i=n("c455"),s=n("907d"),c=n("2651"),l=n.n(c);n("ef97");function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function d(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */d=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,n){return t[e]=n}}function l(t,e,n,a){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),s=new O(a||[]);return r(i,"_invoke",{value:C(t,n,s)}),i}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var f={};function m(){}function h(){}function v(){}var g={};c(g,o,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(S([])));b&&b!==e&&n.call(b,o)&&(g=b);var _=v.prototype=m.prototype=Object.create(g);function j(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function a(r,o,i,s){var c=p(t[r],t,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==u(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,i,s)}),(function(t){a("throw",t,i,s)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return a("throw",t,i,s)}))}s(c.arg)}var o;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){a(t,n,e,r)}))}return o=o?o.then(r,r):r()}})}function C(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return D()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=k(i,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=p(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function k(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=p(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:D}}function D(){return{value:void 0,done:!0}}return h.prototype=v,r(_,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:h,configurable:!0}),h.displayName=c(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},j(w.prototype),c(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new w(l(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(_),c(_,s,"Generator"),c(_,o,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;I(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function p(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(r,a)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){p(o,r,a,i,s,"next",t)}function s(t){p(o,r,a,i,s,"throw",t)}i(void 0)}))}}function m(t,e){return b(t)||y(t,e)||v(t,e)||h()}function h(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(t,e){if(t){if("string"===typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o,i,s=[],c=!0,l=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(u){l=!0,a=u}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return s}}function b(t){if(Array.isArray(t))return t}var _={mixins:[o["a"]],components:{chart:l.a},name:"projects_data",data:function(){return{now:new Date,pickerOptions:{shortcuts:[["今天",0],["最近一周",6],["最近一月",30]].map((function(t){var e=m(t,2),n=e[0],r=e[1];return{text:n,onClick:function(t){var e=new Date,n=new Date;n.setTime(n-(864e5*r+36e5*n.getHours()+6e4*n.getMinutes()+1e3*n.getSeconds())),t.$emit("pick",[n,e])}}})),disabledDate:function(t){return t>Date.now()}},steps:[{id:"hour",label:"1小时"},{id:"day",label:"1天"}],form:{timeRange:function(){var t=Date.now();return[new Date(t-(t+288e5)%864e5-5184e5),new Date]}(),step:"day"},trend:{},sumData:{pv:null,uv:null,user:null,pageCount:null}}},watch:{"form.timeRange":{deep:!0,immediate:!0,handler:function(t){t&&t[1]-t[0]>864e5&&"day"!==this.form.step?this.form.step="day":t&&t[1]-t[0]<=864e5&&"hour"!==this.form.step?this.form.step="hour":this.getPUVTrendByES()}},"form.step":function(){this.getPUVTrendByES()}},props:{projectId:{type:[String,Number]}},mounted:function(){},computed:{trendOptions:function(){var t=this.trend.x;return t?Object(s["a"])({title:"  ",dataZoom:!1,seriesNames:["PV","UV"],legendAlign:"left",x:t,y:[this.trend.pv,this.trend.uv]}):{}},trendTable:function(){var t=this,e=this.trend;if(!e||!e.x||!e.x.length)return null;var n=Object.keys(e).filter((function(t){return"x"!==t}));n.unshift("x");var r=n.slice(0);r[0]="时间";var a=e.x.map((function(t,r){return n.map((function(t){return(e[t]||[])[r]||0}))}));return a.push(n.map((function(e){return"x"==e?"总计":t.sumData[e]||0}))),{thead:r,tbody:a}}},methods:{getPUVTrendByES:function(){var t=f(d().mark((function t(){var e,n,r,a;return d().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this,n={projectId:+e.projectId,timePeriod:e.form.timeRange.map((function(t){return t.getTime&&t.getTime()||0})),interval:e.form.step},t.next=4,Object(i["a"])({url:"statistics/getProjectReport",method:"post",data:n}).then((function(t){var e=t.data;return e.data||{}})).catch((function(t){return console.error(t),{histogram:[]}}));case 4:r=t.sent,a=r.histogram.sort((function(t,e){return t.date>e.date?1:-1})).reduce((function(t,e){return t.x.push(new Date(e.date).Format("yyyy-MM-dd hh:mm:ss")),t.pv.push(e.pv),t.uv.push(e.uv),t}),{x:[],pv:[],uv:[]}),this.sumData["pv"]=r.sum.pv,this.sumData["uv"]=r.sum.uv,this.sumData["user"]=r.sum.user,this.sumData["pageCount"]=r.count,this.trend=a;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},j=_,w=(n("7448"),n("2877")),C=Object(w["a"])(j,r,a,!1,null,"c8ebf84c",null);e["default"]=C.exports},ce24:function(t,e,n){},d443:function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showBtn,expression:"showBtn"}],attrs:{size:t.size,id:"virtualUpload",type:"primary"}},[t._v("上传\n  "),e("i",{staticClass:"el-icon-upload el-icon--right"})])},a=[],o=n("e97e"),i=n("46ee"),s=n.n(i),c=n("c455"),l=function(t){Object(c["a"])({url:"upload/getTocken",method:"get",needLoading:!1,data:{}}).then((function(e){var n=e.data.data;t(n)}))},u=function(t){var e=t.id,n=(t.fileName,t.filters),r=t.isAddUploadFile,a=t.callback;this.imgSrc="";var i=!1,c=this,l={image:{title:"资源选择",extensions:"jpg,gif,png,jpeg"},video:{title:"资源选择",extensions:"mp4"},audio:{title:"资源选择",extensions:"mp3"}};this.uploader=new s.a.Uploader({runtimes:"html5",browse_button:e,url:"https://oss.aliyuncs.com",filters:[l[n]],prevent_duplicates:!0,max_file_size:"100mb",init:{PostInit:function(){},FilesAdded:function(t,e){if(i)return!1;i=!0;var n=this,a=e[0].name;if(r){var s=a.lastIndexOf(".");-1!==s&&(a="ymm_"+(new Date).getTime()+a.substring(s)),o["c"].readAsDataURL(e[0].getNative(),(function(t){var r=new window.File([o["c"].getBlobBydataURI(t,e[0].type)],a,{type:e[0].type});n.addFile(r),n.removeFile(e[0]),c.send(a)}))}},BeforeUpload:function(t,e){},UploadProgress:function(t,e){},FileUploaded:function(t,e,n){200===n.status&&(c.imgSrc=c.imgSrc.replace("ymm.oss-cn-hangzhou.aliyuncs.com","imagecdn.ymm56.com"),a(c.imgSrc)),i=!1},Error:function(t,e){}}}),this.uploader.init()};u.prototype.send=function(t){var e=this;t=t||"ymm"+(new Date).getTime()+".png",l((function(n){n.key=n.dir+t,e.imgSrc=n.host+"/"+n.key;var r={key:n.key,policy:n.policy,OSSAccessKeyId:n.accessid,success_action_status:"200",signature:n.signature};console.log("newMultipartParams",r),e.uploader.setOption({url:n.host,multipart_params:r}),e.uploader.start()}))};var d=u,p=n("ed03"),f={mixins:[p["a"]],name:"UploadImage",components:{},props:{h2c:{required:!1,type:Object,default:function(){return{}}},templateElement:{type:String},size:{type:String,default:"medium"},accept:{type:String,default:""},auto:{type:Boolean,default:!1},showBtn:{type:Boolean,default:!1}},data:function(){return{uploadObject:null,options:null,onUploaded:null,templateData:{name:"",desc:""}}},watch:{accept:function(t){var e=this;this.uploadObject=new d({id:this.$el,isAddUploadFile:this.auto,filters:this.accept,callback:function(t){e.$emit("uploadSuccess",t),"function"===typeof e.onUploaded&&e.onUploaded(t)}})}},beforeDestroy:function(){},mounted:function(){var t=this;this.uploadObject=new d({id:this.$el,isAddUploadFile:this.auto,filters:this.accept,callback:function(e){t.$emit("uploadSuccess",e),"function"===typeof t.onUploaded&&t.onUploaded(e)}}),this.ema.bind("saveTemplate",(function(){t.options=null,t.onUploaded=null,t.getImageDataByDom(document.querySelector(t.templateElement),(function(e){t.uploadImg(e)}))}))},methods:{upload:function(t,e,n){var r=this;this.options=e||null,this.onUploaded=n||null,t=t||document.querySelector(this.templateElement),this.getImageDataByDom(t,(function(t){r.uploadImg(t)}))},uploadImg:function(t){var e="ymm"+(new Date).getTime()+".png",n=this,r=new window.File([o["c"].getBlobBydataURI(t,"image/png")],e,{type:"image/png"});n.uploadObject.uploader.addFile(r),n.uploadObject.send()},getImageDataByDom:function(t,e){o["c"].html2canvas(t,this.h2c).then((function(t){var n=t.toDataURL();e&&e(n)}))}}},m=f,h=n("2877"),v=Object(h["a"])(m,r,a,!1,null,"2bff0db8",null);e["a"]=v.exports},d553:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",[t.project.id?e("div",{staticClass:"layout-nav"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"nav-control scrolling-tabs-container"},[e("el-tabs",{staticClass:"nav-links",on:{"tab-click":t.tabHandleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"页面",name:"doc"}}),e("el-tab-pane",{attrs:{label:"成员",name:"member"}}),e("el-tab-pane",{attrs:{label:"统计",name:"report"}}),t.project.role<=1?e("el-tab-pane",{attrs:{label:"设置",name:"setting"}}):t._e()],1)],1),e("div",{staticClass:"controls"},[e("el-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.newApi}},[t._v("添加页面")])],1)])]):t._e(),e("div",{staticClass:"content-wrapper page-with-layout-nav"},[e("div",{staticClass:"container-fluid container-limited"},[t.project.id?e("div",{staticClass:"content"},["doc"===t.activeName?e("div",[e("c-doc",{attrs:{id:t.project.id}})],1):t._e(),"member"===t.activeName?e("div",[e("member",{attrs:{id:t.project.id}})],1):t._e(),"apis"===t.activeName?e("div",{staticClass:"apis"},[e("c-interface",{attrs:{id:t.project.id}})],1):t._e(),"report"===t.activeName?e("div",{staticClass:"report"},[e("report",{attrs:{"project-id":t.id}})],1):t._e(),"setting"===t.activeName?e("div",[e("div",{staticClass:"panel panel-default prepend-top-default"},[e("div",{staticClass:"panel-heading"},[t._v("\n              基本设置\n            ")]),e("div",{staticClass:"panel-body"},[e("c-new",{attrs:{id:t.project.id-0}})],1)]),e("div",{staticClass:"panel panel-danger"},[e("div",{staticClass:"panel-heading"},[t._v("删除项目")]),e("div",{staticClass:"panel-body"},[t._m(1),e("div",{staticClass:"form-actions"},[e("a",{staticClass:"btn btn-remove",attrs:{rel:"nofollow"},on:{click:t.delectProject}},[t._v("删除项目")])])])])]):t._e()]):e("div",[t._m(0)])])])])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"blank-state"},[e("div",{staticClass:"blank-state-icon"},[e("i",{staticClass:"ifont icon-empty"}),e("span",[t._v("你无权访问该项目信息")])])])},function(){var t=this,e=t._self._c;return e("p",[t._v("\n                删除项目是不可逆的，确认\n                "),e("br")])}],o=n("f458"),i=n("c455"),s=n("e351"),c=n("3c79"),l=n("5671"),u=n("b891"),d={mixins:[o["a"]],components:{Member:s["default"],CNew:c["default"],CDoc:l["default"],Report:u["default"]},name:"project",data:function(){return{content:"",project:{},id:this.$route.query.id,activeName:"doc"}},mounted:function(){this.loadProject()},watch:{},methods:{loadProject:function(){var t=this;Object(i["a"])({url:"project/projectinfo",method:"get",needLoading:!0,params:{id:this.$route.query.id}}).then((function(e){t.project=e.data.data}))},newApi:function(){this.openDialog({name:"DAddPage",data:{title:"添加页面",form:{projectId:this.$route.query.id}},methods:{}})},tabHandleClick:function(t){this.activeName=t.name},delectProject:function(){var t=this;this.$confirm("确认删除,删除后所有数据将清除","提示",{type:"warning"}).then((function(){Object(i["a"])({url:"project/project",method:"delete",data:{id:t.$route.query.id}}).then((function(e){t.$router.push({path:"/dashboard/projects"})})).catch((function(){}))})).catch((function(){t.$message("已取消")}))}}},p=d,f=(n("6437"),n("2877")),m=Object(f["a"])(p,r,a,!1,null,"ccb9a404",null);e["default"]=m.exports},de95:function(t,e,n){"use strict";n("b167")},e351:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{},[e("div",{staticClass:"flash-container flash-container-page"}),e("div",{staticClass:"container-fluid container-limited"},[e("div",{staticClass:"content"},[e("div",{staticClass:"project-members-page prepend-top-default"},[t.role<=2?e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[t._v("\n            添加用户到项目\n          ")]),e("div",{staticClass:"panel-body"},[e("p",{staticClass:"light"},[t._v("\n              下面列举的是可以访问项目的所有用户\n            ")]),e("el-form",{attrs:{"label-width":"80px"}},[e("el-form-item",{attrs:{label:"账号"}},[e("el-select",{staticClass:"searchUser",attrs:{multiple:"",filterable:"",remote:"",placeholder:"请输入关键词","remote-method":t.querySearchAsync},model:{value:t.req.userId,callback:function(e){t.$set(t.req,"userId",e)},expression:"req.userId"}},t._l(t.searchUsers,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name+t.email,value:t.id}})})),1)],1),e("el-form-item",{attrs:{label:"权限"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.req.role,callback:function(e){t.$set(t.req,"role",e)},expression:"req.role"}},t._l(t.projectPower,(function(t,n){return e("el-option",{key:n,attrs:{label:t.label,value:t.value}})})),1)],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",disabled:!t.req.role||!t.hasAddUser},on:{click:t.onSubmit}},[t._v("添加用户到项目")])],1)],1)],1)]):t._e(),e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[e("strong",[t._v(t._s(t.info.projectName))]),e("span",{staticClass:"badge"},[t._v(t._s(t.pusers.length))])]),e("ul",{staticClass:"content-list"},t._l(t.pusers,(function(n,r){return e("li",{key:r,staticClass:"group_member js-toggle-container"},[e("div",{staticClass:"controls"},[t.role<=2?e("el-dropdown",{on:{command:t.handleCommand}},[e("span",{staticClass:"el-dropdown-link"},[t._v("\n                    "+t._s(t._f("projectRole")(n.role))),e("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.projectPower,(function(r){return e("el-dropdown-item",{key:r.value,attrs:{trigger:"click",command:r.value+","+n.userId}},[t._v(t._s(r.label)+"\n                    ")])})),1)],1):[t._v("\n                  "+t._s(t._f("groupRole")(n.role))+"\n                ")],n.userId===t.userInfo.userId?e("a",{staticClass:"btn btn-remove",on:{click:function(e){return t.remove(n,!0)}}},[t._v("离开")]):t._e(),n.userId!=t.userInfo.userId&&t.info.role<=2?e("a",{staticClass:"btn btn-remove",on:{click:function(e){return t.remove(n)}}},[t._v("移除")]):t._e()],2),e("span",{staticClass:"list-item-name"},[e("img",{staticClass:"avatar s40",attrs:{alt:"",src:t._f("defaultHeader")(n.photo)}}),e("strong",[e("router-link",{attrs:{to:{path:"/user",query:{id:n.userId}}}},[t._v(t._s(n.name))])],1),n.userId===t.userInfo.userId?e("span",{staticClass:"label label-success"},[t._v("当前用户")]):t._e(),e("div",{staticClass:"cgray"},[t._v(t._s(n.email))])])])})),0)]),e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[e("strong",[t._v(t._s(t.info.groupName))]),e("span",{staticClass:"badge"},[t._v(t._s(t.gusers.length))])]),e("ul",{staticClass:"content-list"},t._l(t.gusers,(function(n,r){return e("li",{key:n.userId,staticClass:"group_member js-toggle-container"},[e("span",{staticClass:"list-item-name"},[e("img",{staticClass:"avatar s40",attrs:{alt:"",src:t._f("defaultHeader")(n.photo)}}),e("strong",[e("router-link",{attrs:{to:{path:"/user",query:{id:n.userId}}}},[t._v(t._s(n.name))])],1),n.userId===t.userInfo.userId?e("span",{staticClass:"label label-success"},[t._v("当前用户")]):t._e(),e("div",{staticClass:"cgray"},[t._v(t._s(n.email))]),e("div",{staticClass:"cgray"},[t._v(t._s(t._f("projectRole")(n.role)))])])])})),0)])])])])])},a=[],o=n("f458"),i=n("c455"),s=n("8f20"),c=n("5880"),l=n("8bbf"),u=n.n(l);u.a.component("my-item-zh",{functional:!0,render:function(t,e){return t("li",e.data,[t(s["a"],{props:{item:e.props.item}})])},props:{item:{type:Object,required:!0}}});var d={mixins:[o["a"]],components:{},name:"projects_members",props:{id:{type:String}},data:function(){return{searchUsers:[],info:{},req:{projectId:"",role:"",userId:""},value:"",pusers:[],gusers:[]}},mounted:function(){this.req.projectId=this.id,this.loadData()},computed:Object(c["mapState"])({Metadata:function(t){return t.Metadata},projectPower:function(t){return t.Metadata.projectPower.filter((function(t){return 1!=t.value}))},hasAddUser:function(){return this.req.userId.length>0},role:function(){var t=this,e=100;return this.pusers.forEach((function(n){n.userId==t.userInfo.userId&&(e=Math.min(e,n.role))})),this.gusers.forEach((function(n){n.userId==t.userInfo.userId&&(e=Math.min(e,n.role))})),e},canLeave:function(){return!0}}),methods:{querySearchAsync:function(t,e){var n=this;""!=t&&Object(i["a"])({url:"users/search",method:"get",params:{key:t}}).then((function(t){var e=n.pretreatmentList(t.data.data);n.searchUsers=e})).catch((function(){}))},pretreatmentList:function(t){var e=[];return t.forEach((function(t){e.push({value:t.name,email:t.email,name:t.name,photo:t.photo,id:t.id})})),e},loadData:function(){var t=this;Object(i["a"])({url:"project/projectuser",method:"get",params:{count:100,projectId:this.req.projectId,start:0}}).then((function(e){t.pusers=e.data.data})),Object(i["a"])({url:"project/projectinfo",method:"get",params:{id:this.req.projectId}}).then((function(e){t.info=e.data.data;var n=t;Object(i["a"])({url:"project/groupuser",method:"get",params:{count:100,id:t.info.groupId,start:0}}).then((function(t){n.gusers=t.data.data}))}))},handleCommand:function(t){var e=this,n=t.split(",")[0],r=t.split(",")[1];Object(i["a"])({url:"project/projectuser",method:"put",data:{projectId:this.req.projectId,role:n,userId:r}}).then((function(t){e.$message("修改成功"),e.loadData()})).catch((function(){}))},onSubmit:function(){var t=this;Object(i["a"])({url:"project/projectuser",method:"post",data:this.req}).then((function(e){t.$message("添加成功"),t.loadData()})).catch((function(){}))},remove:function(t){var e=this;Object(i["a"])({url:"project/projectuser",method:"delete",data:{projectId:this.req.projectId,userId:t.userId}}).then((function(n){e.$message("删除成功"),t.userId===e.userInfo.userId?e.$router.push({path:"/dashboard/groups"}):e.loadData()})).catch((function(){}))}}},p=d,f=(n("9bff"),n("2877")),m=Object(f["a"])(p,r,a,!1,null,"84a475f4",null);e["default"]=m.exports}}]);