(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{497:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"基本命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[s._v("#")]),s._v(" 基本命令")]),s._v(" "),a("ol",[a("li",[s._v("查看任务列表")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("编辑任务")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("选择编辑器")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("select-editor\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("参数")])]),s._v(" "),a("p",[a("a",{attrs:{title:"",href:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2022-05-26-jU48Ca.png"}},[a("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2022-05-26-jU48Ca.png",alt:""}})])]),s._v(" "),a("p",[s._v("星号（*）：代表所有可能的值，例如month字段如果是星号，则表示在满足其它字段的制约条件后每月都执行该命令操作。")]),s._v(" "),a("p",[s._v("逗号（,）：可以用逗号隔开的值指定一个列表范围，例如，“1,2,5,7,8,9”")]),s._v(" "),a("p",[s._v("中杠（-）：可以用整数之间的中杠表示一个整数范围，例如“2-6”表示“2,3,4,5,6”")]),s._v(" "),a("p",[s._v("正斜线（/）：可以用正斜线指定时间的间隔频率，例如“0-23/2”表示每两小时执行一次。同时正斜线可以和星号一起使用，例如*/10，如果用在minute字段，表示每十分钟执行一次。")]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("p",[s._v("每天,0点5分执行")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" * * *  /www/server/cron/79dfafb8832abb00bbbe5c6162a94925 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /www/server/cron/79dfafb8832abb00bbbe5c6162a94925.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/script/helper\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" startHelper.sh\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"----------------------------------------------------------------------------"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("endDate")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d %H:%M:%S"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"★['),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$endDate")]),s._v('] Successful"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"----------------------------------------------------------------------------"')]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("1、>\n直接把内容生成到指定文件，会覆盖源文件中的内容。\n2、>>\n尾部追加，不会覆盖掉文件中原有的内容，相当于append\n3、2>&1\n0 表示stdin标准输入\n1 表示stdout标准输出\n2 表示stderr标准错误\n&是把该命令以后台的job的形式运行\n2>&1相当于把标准错误重定向到标准输出并以后台的形式运行。")])]),s._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("p",[s._v("使用宝塔面板计划任务\n"),a("a",{attrs:{title:"",href:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2022-05-26-hsbtmo.png"}},[a("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2022-05-26-hsbtmo.png",alt:""}})])])])}),[],!1,null,null,null);a.default=n.exports}}]);