(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{515:function(t,s,a){"use strict";a.r(s);var l=a(0),n=Object(l.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("p",[t._v("根据商户号查询门店号,发现部分数据无法正确查询?")]),t._v(" "),s("h2",{attrs:{id:"排查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#排查"}},[t._v("#")]),t._v(" 排查")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("查看是否查询参数异常,未发现网络请求中%%号字样")])]),t._v(" "),s("li",[s("p",[t._v("使用Navicat 工具查询")])]),t._v(" "),s("li",[s("p",[t._v("该字段为varchar,通过以下sql查询无法获取数据\n"),s("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/09/20200907102840.png",alt:"image-20200907102840260"}})])]),t._v(" "),s("li",[s("p",[t._v("通过询问,发现需要用单引号查询,然后发现依然无法获取数据\n"),s("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/09/20200907102856.png",alt:"image-20200907102855984"}})])]),t._v(" "),s("li",[s("p",[t._v("去掉引号使用数据,通过Mysql的隐式转换,发现可以成功获取数据\n"),s("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/09/20200907102812.png",alt:"img"}})])])]),t._v(" "),s("h2",{attrs:{id:"问题思考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题思考"}},[t._v("#")]),t._v(" 问题思考")]),t._v(" "),s("p",[t._v("通过查询其他数据发现其他数据正常显示,锁定问题应该是数据问题,首先检查前后是否存在空格,发现前后无空格,然后选择复制表中数据出来查询发现数据换行\n然后确定问题数据有换行符,换行符不同于空格不会有任何显示,通过观察数据不易发现")])])}),[],!1,null,null,null);s.default=n.exports}}]);