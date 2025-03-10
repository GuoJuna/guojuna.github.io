(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{702:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一-什么是模块化开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-什么是模块化开发"}},[t._v("#")]),t._v(" 一.什么是模块化开发")]),t._v(" "),s("p",[t._v("传统非模块化开发有如下的缺点:")]),t._v(" "),s("ul",[s("li",[t._v("命名冲突")]),t._v(" "),s("li",[t._v("文件依赖")])]),t._v(" "),s("p",[t._v("模块化规范:")]),t._v(" "),s("ul",[s("li",[t._v("CommonJS模块化规范")]),t._v(" "),s("li",[t._v("ES6模块化规范")])]),t._v(" "),s("h2",{attrs:{id:"二-commonjs模块规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-commonjs模块规范"}},[t._v("#")]),t._v(" 二. CommonJS模块规范")]),t._v(" "),s("blockquote",[s("p",[t._v("CommonJS使用 exports 和require 来导出、导入模块。")])]),t._v(" "),s("p",[t._v("每个文件就是一个模块,有自己的作用域.在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。")]),t._v(" "),s("ol",[s("li",[t._v("创建module文件夹")]),t._v(" "),s("li",[t._v("导出模块\n创建common-module.js")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 定义成员：\nconst sum = function(a,b){\n return parseInt(a) + parseInt(b)\n}\nconst subtract = function(a,b){\n return parseInt(a) - parseInt(b)\n}\nconst multiply = function(a,b){\n return parseInt(a) * parseInt(b)\n}\nconst divide = function(a,b){\n return parseInt(a) / parseInt(b)\n}\n")])])]),s("p",[t._v("导出模块中的成员")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 导出成员：\nmodule.exports = {\n sum: sum,\n subtract: subtract,\n multiply: multiply,\n divide: divide\n}\n")])])]),s("p",[t._v("简写")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("module.exports = {\n sum,\n subtract,\n multiply,\n divide\n}\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("导入模块")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("//引入模块，注意：当前路径必须写 ./\nconst m = require('./common-module.js')\nconsole.log(m)\nconst result1 = m.sum(1, 2)\nconst result2 = m.subtract(1, 2)\nconsole.log(result1, result2)\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("运行程序")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("node common-module.js\n")])])]),s("h2",{attrs:{id:"三-es6模块化规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-es6模块化规范"}},[t._v("#")]),t._v(" 三.ES6模块化规范")]),t._v(" "),s("blockquote",[s("p",[t._v("ES6使用 export 和 import 来导出、导入模块。")])]),t._v(" "),s("p",[t._v("创建文件userComponent.js")]),t._v(" "),s("ol",[s("li",[t._v("导出模块")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export function getList() {\n console.log('获取数据列表')\n}\nexport function save() {\n console.log('保存数据')\n}\n\n//或者方法二写法\nexport default {\n    getList() {\n        console.log('获取数据列表')\n    },\n    save() {\n        console.log('保存数据')\n    }\n}\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("导入模块")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("//只取需要的方法即可，多个方法用逗号分隔\nimport { getList, save } from \"./userApi.js\"\ngetList()\nsave()\n\n//或者方法二写法:\nimport m form './userApi.js'\nm.getList()\nm.save()\n")])])]),s("blockquote",[s("p",[t._v("注意:这时的程序无法运行的，因为ES6的模块化无法在Node.js中执行，需要用Babel编辑成ES5后再\n执行。")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("运行程序")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("node userComponent.js\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);