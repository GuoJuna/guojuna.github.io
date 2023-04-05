(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{581:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"github与gitee免费空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github与gitee免费空间"}},[t._v("#")]),t._v(" GitHub与Gitee免费空间")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/08/20200811110242.jpg",alt:"1597114646(1)"}})]),t._v(" "),a("h2",{attrs:{id:"如何上传大于100m的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何上传大于100m的文件"}},[t._v("#")]),t._v(" 如何上传大于100M的文件")]),t._v(" "),a("ol",[a("li",[t._v("当上传大文件是会报错提示如下图:")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/08/20200811110759.png",alt:"image-20200811110758965"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("突破GitHub的限制，使用 git-lfs(Git Large File Storage) 支持单个文件超过100M")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/08/20200811174039.png",alt:"image-20200811174032517"}})]),t._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1、安装git-lfs")]),t._v("\ngit lfs install\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2、没有特别说明的情况下，LFS 不会处理大文件问题，因此，我们必须明确告诉 LFS 该处理哪些文件。将 FrameworkFold/XXXFramework/xxx的文件设置成大文件标示。")]),t._v("\ngit lfs track "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FrameworkFold/XXXFramework/xxx"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3、常规的push操作")]),t._v("\ngit add .\ngit commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add large file"')]),t._v("\ngit push\n")])])]),a("p",[t._v("追踪文件路径（标示大文件）：\n1、追踪单个文件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git lfs track "FrameworkFold/XXXFramework/xxx"\n')])])]),a("p",[t._v("或者修改仓库路径下的 .gitattributes 文件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("FrameworkFold/XXXFramework/xxx filter=lfs diff=lfs merge=lfs -text\n")])])]),a("p",[t._v("2、追踪指定类型的文件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git lfs track "*.exe"\n')])])]),a("p",[t._v("3、追踪指定目录下的文件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git lfs track "FrameworkFold/*"\n')])])]),a("h2",{attrs:{id:"一些问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些问题"}},[t._v("#")]),t._v(" 一些问题")]),t._v(" "),a("h4",{attrs:{id:"安装后git-push仍然失败如图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装后git-push仍然失败如图"}},[t._v("#")]),t._v(" 安装后git push仍然失败如图:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/08/20200811111643.png",alt:"image-20200811111643395"}})]),t._v(" "),a("h4",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git config lfs.https://git.oschina.net/harrydeng/xxx.git/info/lfs.locksverify false\n")])])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("blockquote",[a("p",[t._v("https://git-lfs.github.com/")])])])}),[],!1,null,null,null);a.default=r.exports}}]);