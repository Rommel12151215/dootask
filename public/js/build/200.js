"use strict";(self.webpackChunkDooTask=self.webpackChunkDooTask||[]).push([[200],{95200:(t,e,a)=>{a.r(e),a.d(e,{default:()=>g});function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const n={name:"SystemSetting",data:function(){return{loadIng:0,formDatum:{}}},mounted:function(){this.systemSetting()},methods:{submitForm:function(){var t=this;this.$refs.formDatum.validate((function(e){e&&t.systemSetting(!0)}))},resetForm:function(){this.formDatum=$A.cloneJSON(this.formDatum_bak)},formArchived:function(t){this.formDatum=r(r({},this.formDatum),{},{auto_archived:t})},systemSetting:function(t){var e=this;this.loadIng++,this.$store.dispatch("call",{url:"system/setting?type="+(t?"save":"all"),data:this.formDatum}).then((function(a){var o=a.data;t&&$A.messageSuccess("修改成功"),e.loadIng--,e.formDatum=o,e.formDatum_bak=$A.cloneJSON(e.formDatum)})).catch((function(a){var o=a.msg;t&&$A.modalError(o),e.loadIng--}))}}};var i=a(51900);const l=(0,i.Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-component-item"},[a("Form",{ref:"formDatum",attrs:{model:t.formDatum,"label-width":"auto"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("FormItem",{attrs:{label:t.$L("允许注册"),prop:"reg"}},[a("RadioGroup",{model:{value:t.formDatum.reg,callback:function(e){t.$set(t.formDatum,"reg",e)},expression:"formDatum.reg"}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("允许")))]),t._v(" "),a("Radio",{attrs:{label:"invite"}},[t._v(t._s(t.$L("邀请码")))]),t._v(" "),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("禁止")))])],1),t._v(" "),"open"==t.formDatum.reg?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("允许：开放注册功能。")))]):"invite"==t.formDatum.reg?[a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("邀请码：注册时需填写下方邀请码。")))]),t._v(" "),a("Input",{staticStyle:{width:"200px","margin-top":"6px"},model:{value:t.formDatum.reg_invite,callback:function(e){t.$set(t.formDatum,"reg_invite",e)},expression:"formDatum.reg_invite"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v(t._s(t.$L("邀请码")))])])]:t._e()],2),t._v(" "),a("FormItem",{attrs:{label:t.$L("登录验证码"),prop:"loginCode"}},[a("RadioGroup",{model:{value:t.formDatum.login_code,callback:function(e){t.$set(t.formDatum,"login_code",e)},expression:"formDatum.login_code"}},[a("Radio",{attrs:{label:"auto"}},[t._v(t._s(t.$L("自动")))]),t._v(" "),a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("开启")))]),t._v(" "),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("关闭")))])],1),t._v(" "),"auto"==t.formDatum.login_code?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("自动：密码输入错误后必须添加验证码。")))]):t._e()],1),t._v(" "),a("FormItem",{attrs:{label:t.$L("密码策略"),prop:"passwordPolicy"}},[a("RadioGroup",{model:{value:t.formDatum.password_policy,callback:function(e){t.$set(t.formDatum,"password_policy",e)},expression:"formDatum.password_policy"}},[a("Radio",{attrs:{label:"simple"}},[t._v(t._s(t.$L("简单")))]),t._v(" "),a("Radio",{attrs:{label:"complex"}},[t._v(t._s(t.$L("复杂")))])],1),t._v(" "),"simple"==t.formDatum.password_policy?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("简单：大于或等于6个字符。")))]):"complex"==t.formDatum.password_policy?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("复杂：大于或等于6个字符，包含数字、字母大小写或者特殊字符。")))]):t._e()],1),t._v(" "),a("FormItem",{attrs:{label:t.$L("邀请项目"),prop:"projectInvite"}},[a("RadioGroup",{model:{value:t.formDatum.project_invite,callback:function(e){t.$set(t.formDatum,"project_invite",e)},expression:"formDatum.project_invite"}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("开启")))]),t._v(" "),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("关闭")))])],1),t._v(" "),"open"==t.formDatum.project_invite?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("开启：项目管理员可生成链接邀请成员加入项目。")))]):t._e()],1),t._v(" "),a("FormItem",{attrs:{label:t.$L("聊天昵称"),prop:"chatNickname"}},[a("RadioGroup",{model:{value:t.formDatum.chat_nickname,callback:function(e){t.$set(t.formDatum,"chat_nickname",e)},expression:"formDatum.chat_nickname"}},[a("Radio",{attrs:{label:"optional"}},[t._v(t._s(t.$L("可选")))]),t._v(" "),a("Radio",{attrs:{label:"required"}},[t._v(t._s(t.$L("必填")))])],1),t._v(" "),"required"==t.formDatum.chat_nickname?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("必填：发送聊天内容前必须设置昵称。")))]):a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("如果必填，发送聊天前必须设置昵称。")))])],1),t._v(" "),a("FormItem",{attrs:{label:t.$L("自动归档任务"),prop:"autoArchived"}},[a("RadioGroup",{attrs:{value:t.formDatum.auto_archived},on:{"on-change":t.formArchived}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("开启")))]),t._v(" "),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("关闭")))])],1),t._v(" "),a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("任务完成后自动归档。")))]),t._v(" "),"open"==t.formDatum.auto_archived?a("ETooltip",{attrs:{placement:"right"}},[a("div",{staticClass:"setting-auto-day"},[a("Input",{attrs:{type:"number"},model:{value:t.formDatum.archived_day,callback:function(e){t.$set(t.formDatum,"archived_day",e)},expression:"formDatum.archived_day"}},[a("span",{attrs:{slot:"append"},slot:"append"},[t._v(t._s(t.$L("天")))])])],1),t._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$L("任务完成 % 天后自动归档。",t.formDatum.archived_day)))])]):t._e()],1),t._v(" "),a("FormItem",{attrs:{label:t.$L("是否启动首页"),prop:"startHome"}},[a("RadioGroup",{model:{value:t.formDatum.start_home,callback:function(e){t.$set(t.formDatum,"start_home",e)},expression:"formDatum.start_home"}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("开启")))]),t._v(" "),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("关闭")))])],1),t._v(" "),a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("仅支持网页版。")))]),t._v(" "),"open"==t.formDatum.start_home?a("Input",{staticStyle:{margin:"8px 0 -8px"},attrs:{type:"textarea",rows:2,autosize:{minRows:2,maxRows:8},placeholder:t.$L("首页底部：首页底部网站备案号等信息")},model:{value:t.formDatum.home_footer,callback:function(e){t.$set(t.formDatum,"home_footer",e)},expression:"formDatum.home_footer"}}):t._e()],1)],1),t._v(" "),a("div",{staticClass:"setting-footer"},[a("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("提交")))]),t._v(" "),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("重置")))])],1)],1)}),[],!1,null,null,null).exports;var m=a(20629);function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const f={name:"SystemTaskPriority",data:function(){return{loadIng:0,formDatum:[],nullDatum:{name:"",priority:1,days:1,color:"#8bcf70"}}},mounted:function(){this.systemSetting()},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){u(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,m.rn)(["taskPriority"])),watch:{taskPriority:{handler:function(t){this.formDatum=$A.cloneJSON(t),0===this.formDatum.length&&this.addDatum()},immediate:!0}},methods:{submitForm:function(){var t=this;this.$refs.formDatum.validate((function(e){e&&t.systemSetting(!0)}))},resetForm:function(){this.formDatum=$A.cloneJSON(this.taskPriority)},addDatum:function(){this.formDatum.push($A.cloneJSON(this.nullDatum))},delDatum:function(t){this.formDatum.splice(t,1),0===this.formDatum.length&&this.addDatum()},systemSetting:function(t){var e=this;this.loadIng++,this.$store.dispatch("call",{url:"system/priority?type="+(t?"save":"get"),method:"post",data:{list:this.formDatum}}).then((function(a){var o=a.data;t&&$A.messageSuccess("修改成功"),e.loadIng--,e.$store.state.taskPriority=$A.cloneJSON(o)})).catch((function(a){var o=a.msg;t&&$A.modalError(o),e.loadIng--}))}}};const p=(0,i.Z)(f,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-component-item"},[a("Form",{ref:"formDatum",attrs:{"label-width":"auto"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{staticClass:"setting-color"},[a("Col",{attrs:{span:"12"}},[t._v(t._s(t.$L("名称")))]),t._v(" "),a("Col",{attrs:{span:"4"}},[a("ETooltip",{attrs:{content:t.$L("数值越小级别越高"),"max-width":"auto",placement:"top",transfer:""}},[a("div",[a("Icon",{staticClass:"information",attrs:{type:"ios-information-circle-outline"}}),t._v(" "+t._s(t.$L("级别")))],1)])],1),t._v(" "),a("Col",{attrs:{span:"4"}},[a("ETooltip",{attrs:{content:t.$L("任务完成时间"),"max-width":"auto",placement:"top",transfer:""}},[a("div",[a("Icon",{staticClass:"information",attrs:{type:"ios-information-circle-outline"}}),t._v(" "+t._s(t.$L("天数")))],1)])],1),t._v(" "),a("Col",{attrs:{span:"4"}},[t._v(t._s(t.$L("颜色")))])],1),t._v(" "),t._l(t.formDatum,(function(e,o){return a("Row",{key:o,staticClass:"setting-color"},[a("Col",{attrs:{span:"12"}},[a("Input",{attrs:{maxlength:20,placeholder:t.$L("请输入名称"),clearable:""},on:{"on-clear":function(e){return t.delDatum(o)}},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"item.name"}})],1),t._v(" "),a("Col",{attrs:{span:"4"}},[a("Input",{attrs:{type:"number"},model:{value:e.priority,callback:function(a){t.$set(e,"priority",a)},expression:"item.priority"}})],1),t._v(" "),a("Col",{attrs:{span:"4"}},[a("Input",{attrs:{type:"number"},model:{value:e.days,callback:function(a){t.$set(e,"days",a)},expression:"item.days"}})],1),t._v(" "),a("Col",{attrs:{span:"4"}},[a("ColorPicker",{attrs:{recommend:"",transfer:""},model:{value:e.color,callback:function(a){t.$set(e,"color",a)},expression:"item.color"}})],1)],1)})),t._v(" "),a("Button",{attrs:{type:"default",icon:"md-add"},on:{click:t.addDatum}},[t._v(t._s(t.$L("添加优先级")))])],2),t._v(" "),a("div",{staticClass:"setting-footer"},[a("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("提交")))]),t._v(" "),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("重置")))])],1)],1)}),[],!1,null,null,null).exports;function _(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const v={name:"SystemColumnTemplate",data:function(){return{loadIng:0,formDatum:[],nullDatum:{name:"",columns:""}}},mounted:function(){this.systemSetting()},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?_(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,m.rn)(["columnTemplate"])),watch:{columnTemplate:{handler:function(t){this.formDatum=$A.cloneJSON(t),0===this.formDatum.length&&this.addDatum()},immediate:!0}},methods:{submitForm:function(){var t=this;this.$refs.formDatum.validate((function(e){e&&t.systemSetting(!0)}))},resetForm:function(){this.formDatum=$A.cloneJSON(this.columnTemplate)},addDatum:function(){this.formDatum.push($A.cloneJSON(this.nullDatum))},delDatum:function(t){this.formDatum.splice(t,1),0===this.formDatum.length&&this.addDatum()},systemSetting:function(t){var e=this;this.loadIng++,this.$store.dispatch("call",{url:"system/column/template?type="+(t?"save":"get"),method:"post",data:{list:this.formDatum}}).then((function(a){var o=a.data;t&&$A.messageSuccess("修改成功"),e.loadIng--,e.$store.state.columnTemplate=$A.cloneJSON(o).map((function(t){return $A.isArray(t.columns)&&(t.columns=t.columns.join(",")),t}))})).catch((function(a){var o=a.msg;t&&$A.modalError(o),e.loadIng--}))}}};const h={name:"SystemEmailSetting",data:function(){return{loadIng:0,formData:{smtp_server:"",port:"",account:"",password:"",reg_verify:"colse",notice:"open",task_remind_hours:0,task_remind_hours2:0},ruleData:{}}},mounted:function(){this.systemSetting()},methods:{submitForm:function(){var t=this;this.$refs.formData.validate((function(e){e&&t.systemSetting(!0)}))},resetForm:function(){this.formData=$A.cloneJSON(this.formDatum_bak)},systemSetting:function(t){var e=this;this.loadIng++,this.$store.dispatch("call",{url:"system/setting/email?type="+(t?"save":"all"),data:this.formData}).then((function(a){var o=a.data;t&&$A.messageSuccess("修改成功"),e.loadIng--,e.formData=o,e.formDatum_bak=$A.cloneJSON(e.formData)})).catch((function(a){var o=a.msg;t&&$A.modalError(o),e.loadIng--}))},hoursChange:function(t){var e=this;10*t%5!=0&&(setTimeout((function(){e.formData.task_remind_hours=1})),$A.messageError("任务提醒只能是0.5的倍数"))},hours2Change:function(t){var e=this;10*t%5!=0&&(setTimeout((function(){e.formData.task_remind_hours2=1})),$A.messageError("第二次任务提醒只能是0.5的倍数"))},checkEmailSend:function(){var t=this;$A.modalInput({title:"测试邮件",placeholder:"请输入收件人地址",onOk:function(e,a){if(e)return $A.isEmail(e)?void t.$store.dispatch("call",{url:"system/email/check",data:Object.assign(t.formData,{to:e})}).then((function(t){var e=t.msg;$A.messageSuccess(e),a()})).catch((function(t){var e=t.msg;$A.modalError(e,301),a()})):($A.modalError("请输入正确的收件人地址",301),void a());a()}})}}};const b={components:{SystemColumnTemplate:(0,i.Z)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-component-item"},[a("Form",{ref:"formDatum",attrs:{"label-width":"auto"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{staticClass:"setting-template"},[a("Col",{attrs:{span:"8"}},[t._v(t._s(t.$L("名称")))]),t._v(" "),a("Col",{attrs:{span:"16"}},[t._v(t._s(t.$L("项目模板")))])],1),t._v(" "),t._l(t.formDatum,(function(e,o){return a("Row",{key:o,staticClass:"setting-template"},[a("Col",{attrs:{span:"8"}},[a("Input",{attrs:{maxlength:20,placeholder:t.$L("请输入名称"),clearable:""},on:{"on-clear":function(e){return t.delDatum(o)}},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"item.name"}})],1),t._v(" "),a("Col",{attrs:{span:"16"}},[a("TagInput",{model:{value:e.columns,callback:function(a){t.$set(e,"columns",a)},expression:"item.columns"}})],1)],1)})),t._v(" "),a("Button",{attrs:{type:"default",icon:"md-add"},on:{click:t.addDatum}},[t._v(t._s(t.$L("添加模板")))])],2),t._v(" "),a("div",{staticClass:"setting-footer"},[a("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("提交")))]),t._v(" "),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("重置")))])],1)],1)}),[],!1,null,null,null).exports,SystemTaskPriority:p,SystemSetting:l,SystemEmailSetting:(0,i.Z)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-component-item"},[a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.ruleData,"label-width":"auto"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("div",{staticClass:"email-setting-box"},[a("h3",[t._v(t._s(t.$L("邮箱服务器设置")))]),t._v(" "),a("FormItem",{attrs:{label:t.$L("SMTP服务器"),prop:"smtp_server"}},[a("Input",{model:{value:t.formData.smtp_server,callback:function(e){t.$set(t.formData,"smtp_server",e)},expression:"formData.smtp_server"}})],1),t._v(" "),a("FormItem",{attrs:{label:t.$L("端口"),prop:"port"}},[a("Input",{attrs:{maxlength:20},model:{value:t.formData.port,callback:function(e){t.$set(t.formData,"port",e)},expression:"formData.port"}})],1),t._v(" "),a("FormItem",{attrs:{label:t.$L("账号"),prop:"account"}},[a("Input",{attrs:{maxlength:128},model:{value:t.formData.account,callback:function(e){t.$set(t.formData,"account",e)},expression:"formData.account"}})],1),t._v(" "),a("FormItem",{attrs:{label:t.$L("密码"),prop:"password"}},[a("Input",{attrs:{maxlength:128,type:"password"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),a("FormItem",[a("Button",{on:{click:t.checkEmailSend}},[t._v(t._s(t.$L("邮件发送测试")))])],1)],1),t._v(" "),a("div",{staticClass:"email-setting-placeholder"}),t._v(" "),a("div",{staticClass:"email-setting-box"},[a("h3",[t._v(t._s(t.$L("邮件通知设置")))]),t._v(" "),a("FormItem",{attrs:{label:t.$L("开启注册验证"),prop:"reg_verify"}},[a("RadioGroup",{model:{value:t.formData.reg_verify,callback:function(e){t.$set(t.formData,"reg_verify",e)},expression:"formData.reg_verify"}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("开启")))]),t._v(" "),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("关闭")))])],1),t._v(" "),"open"==t.formData.reg_verify?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("开启后账号需验证通过才可登录")))]):t._e()],1),t._v(" "),a("FormItem",{attrs:{label:t.$L("开启通知"),prop:"notice"}},[a("RadioGroup",{model:{value:t.formData.notice,callback:function(e){t.$set(t.formData,"notice",e)},expression:"formData.notice"}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("开启")))]),t._v(" "),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("关闭")))])],1)],1),t._v(" "),"open"==t.formData.notice?[a("FormItem",{attrs:{label:t.$L("任务提醒:"),prop:"task_remind_hours"}},[a("label",[t._v(t._s(t.$L("到期前")))]),t._v(" "),a("InputNumber",{attrs:{min:.5,step:.5},on:{"on-change":t.hoursChange},model:{value:t.formData.task_remind_hours,callback:function(e){t.$set(t.formData,"task_remind_hours",e)},expression:"formData.task_remind_hours"}}),t._v(" "),a("label",[t._v(t._s(t.$L("小时")))])],1),t._v(" "),a("FormItem",{attrs:{label:t.$L("第二次任务提醒:"),prop:"task_remind_hours2"}},[a("label",[t._v(t._s(t.$L("到期后")))]),t._v(" "),a("InputNumber",{attrs:{min:.5,step:.5},on:{"on-change":t.hours2Change},model:{value:t.formData.task_remind_hours2,callback:function(e){t.$set(t.formData,"task_remind_hours2",e)},expression:"formData.task_remind_hours2"}}),t._v(" "),a("label",[t._v(t._s(t.$L("小时")))])],1)]:t._e()],2)]),t._v(" "),a("div",{staticClass:"setting-footer"},[a("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("提交")))]),t._v(" "),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("重置")))])],1)],1)}),[],!1,null,null,null).exports},data:function(){return{tabAction:"setting"}}};const g=(0,i.Z)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-item submit"},[a("Tabs",{model:{value:t.tabAction,callback:function(e){t.tabAction=e},expression:"tabAction"}},[a("TabPane",{attrs:{label:t.$L("系统设置"),name:"setting"}},[a("SystemSetting")],1),t._v(" "),a("TabPane",{attrs:{label:t.$L("任务优先级"),name:"taskPriority"}},[a("SystemTaskPriority")],1),t._v(" "),a("TabPane",{attrs:{label:t.$L("项目模板"),name:"columnTemplate"}},[a("SystemColumnTemplate")],1),t._v(" "),a("TabPane",{attrs:{label:t.$L("邮件设置"),name:"emailSetting"}},[a("SystemEmailSetting")],1)],1)],1)}),[],!1,null,null,null).exports}}]);