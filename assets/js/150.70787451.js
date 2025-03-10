(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{625:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),s("p",[a._v("Anaconda（官方网站）就是可以便捷获取包且对包能够进行管理，同时对环境可以统一管理的发行版本。Anaconda包含了conda、Python在内的超过180个科学包及其依赖项。")]),a._v(" "),s("h4",{attrs:{id:"特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[a._v("#")]),a._v(" 特点")]),a._v(" "),s("p",[a._v("Anaconda具有如下特点：")]),a._v(" "),s("p",[a._v("▪ 开源")]),a._v(" "),s("p",[a._v("▪ 安装过程简单")]),a._v(" "),s("p",[a._v("▪ 高性能使用Python和R语言")]),a._v(" "),s("p",[a._v("▪ 免费的社区支持")]),a._v(" "),s("p",[a._v("其特点的实现主要基于Anaconda拥有的：")]),a._v(" "),s("p",[a._v("▪ conda包")]),a._v(" "),s("p",[a._v("▪ 环境管理器")]),a._v(" "),s("p",[a._v("▪ 1,000+开源库")]),a._v(" "),s("h4",{attrs:{id:"anaconda、conda、pip、virtualenv的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anaconda、conda、pip、virtualenv的区别"}},[a._v("#")]),a._v(" Anaconda、conda、pip、virtualenv的区别")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Anaconda")]),a._v(" "),s("p",[a._v("Anaconda是一个包含180+的科学包及其依赖项的发行版本。其包含的科学包包括：conda, numpy, scipy, ipython notebook等。")])]),a._v(" "),s("li",[s("p",[a._v("conda")]),a._v(" "),s("p",[a._v("conda是包及其依赖项和环境的管理工具。")])]),a._v(" "),s("li",[s("p",[a._v("pip")]),a._v(" "),s("p",[a._v("pip是用于安装和管理软件包的包管理器。")])]),a._v(" "),s("li",[s("p",[a._v("virtualenv")]),a._v(" "),s("p",[a._v("virtualenv是用于创建一个独立的Python环境的工具。")])])]),a._v(" "),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),s("ol",[s("li",[a._v("验证conda已被安装")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("conda "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("更新conda至最新版本")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("conda update conda\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("查看conda帮助信息")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("conda "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("\n")])])]),s("p",[a._v("或")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("conda "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--h")]),a._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[a._v("创建新环境")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("conda create "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("env_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("package_names"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[a._v("激活环境(windows)")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("activate "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("env_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[a._v("退出环境(windows)")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("deactivate\n")])])]),s("ol",{attrs:{start:"7"}},[s("li",[a._v("显示已创建环境")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("conda "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" list\n")])])]),s("ol",{attrs:{start:"8"}},[s("li",[a._v("复制环境")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("conda create "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("new_env_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--clone")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("copied_env_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("ol",{attrs:{start:"9"}},[s("li",[a._v("删除环境")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("conda remove "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("env_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--all")]),a._v("\n")])])]),s("ol",{attrs:{start:"10"}},[s("li",[a._v("获取当前环境中已安装的包信息")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("conda list\n")])])]),s("ol",{attrs:{start:"11"}},[s("li",[a._v("在指定环境中安装包")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("conda "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("env_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("package_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("ol",{attrs:{start:"12"}},[s("li",[a._v("在当前环境中安装包")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("conda "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("package_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("ol",{attrs:{start:"13"}},[s("li",[a._v("卸载指定环境中的包")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("conda remove "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("env_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("package_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("ol",{attrs:{start:"14"}},[s("li",[a._v("更新所有包")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("conda update "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--all")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);