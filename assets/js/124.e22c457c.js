(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{599:function(a,s,t){"use strict";t.r(s);var n=t(0),r=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[a._v("#")]),a._v(" 基本概念")]),a._v(" "),s("h4",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),s("p",[a._v("Nacos 是阿里巴巴推出来的一个新开源项目，是一个更易于构建云原生应用的动态服务发现、配置\n管理和服务管理平台。Nacos 致力于帮助您发现、配置和管理微服务。Nacos 提供了一组简单易用的特\n性集，帮助您快速实现动态服务发现、服务配置、服务元数据及流量管理。Nacos 帮助您更敏捷和容易\n地构建、交付和管理微服务平台。 Nacos 是构建以“服务”为中心的现代应用架构 (例如微服务范式、云原\n生范式) 的服务基础设施。")]),a._v(" "),s("h4",{attrs:{id:"nacos核心功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nacos核心功能"}},[a._v("#")]),a._v(" Nacos核心功能")]),a._v(" "),s("ol",[s("li",[s("strong",[a._v("服务注册")]),a._v(": Nacos Client会通过发送REST请求的方式向Nacos Server注册自己的服务,提供自身的元数据,比如ip地址,端口等信息.Nacos Service接受到注册请求后,就会把这些元数据信息存储在一个双层的内存Map中")]),a._v(" "),s("li",[s("strong",[a._v("服务心跳")]),a._v(": 在服务注册后,Nacos Client会维护一个定时心跳来持续通知Nacos Server,说明服务一直处于可用状态,防止被剔除,默认5s发送一次心跳.")]),a._v(" "),s("li",[s("strong",[a._v("服务同步")]),a._v(": Nacos Server集群之间会相互同步服务实例,用来保证服务信息的一致性.")]),a._v(" "),s("li",[s("strong",[a._v("服务发现")]),a._v(": 服务消费者(Nacos Client)在调用服务提供者的服务时,会发送一个REST请求给Nacos Server,获取上面注册的服务清单,并且缓存在Nacos CLient本地,同时会在Nacos Client本地开启一个定时任务定时拉取服务端最新的注册表信息更新到本地缓存")]),a._v(" "),s("li",[s("strong",[a._v("服务健康检查")]),a._v(": Nacos Server会开启一个定时任务用来检查注册服务实例的健康情况,对于超过15s没有收到客户端心跳的实例会将它的healthy属性设置为false(客户端服务发现是不会发现),如果某个实例超过30s没有收到心跳,直接剔除该实例(被剔除的实例如果恢复发送心跳则会重新注册)")])]),a._v(" "),s("h4",{attrs:{id:"注册中心流程图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册中心流程图"}},[a._v("#")]),a._v(" 注册中心流程图")]),a._v(" "),s("p",[s("a",{attrs:{title:"",href:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2022-09-14-Vk1Eic.png"}},[s("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2022-09-14-Vk1Eic.png",alt:""}})])]),a._v(" "),s("h4",{attrs:{id:"主流的注册中心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主流的注册中心"}},[a._v("#")]),a._v(" 主流的注册中心")]),a._v(" "),s("p",[a._v("CAP C一致性 A可用性 P分区容错性\n"),s("a",{attrs:{title:"",href:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2022-09-14-sttg00.png"}},[s("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2022-09-14-sttg00.png",alt:""}})])]),a._v(" "),s("h4",{attrs:{id:"nacos结构图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nacos结构图"}},[a._v("#")]),a._v(" Nacos结构图")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/09/20200908233334.png",alt:"img"}})]),a._v(" "),s("h2",{attrs:{id:"nacos下载和安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nacos下载和安装"}},[a._v("#")]),a._v(" Nacos下载和安装")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("下载"),s("a",{attrs:{href:"https://github.com/alibaba/nacos/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("Nacos"),s("OutboundLink")],1),a._v("解压任意目录即可")])]),a._v(" "),s("li",[s("p",[a._v("启动nacos服务")])])]),a._v(" "),s("ul",[s("li",[a._v("Linux/Unix/Mac")])]),a._v(" "),s("blockquote",[s("p",[a._v("启动命令(standalone代表着单机模式运行，非集群模式)\n启动命令：sh startup.sh -m standalone")])]),a._v(" "),s("ul",[s("li",[a._v("Windows")])]),a._v(" "),s("blockquote",[s("p",[a._v("启动命令：cmd startup.cmd 或者双击startup.cmd运行文件。\n访问：http://localhost:8848/nacos\n用户名密码：nacos/nacos")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/09/20200908233654.png",alt:"image-20200908233654890"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/09/20200908233719.png",alt:"image-20200908233719541"}})]),a._v(" "),s("h2",{attrs:{id:"服务注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务注册"}},[a._v("#")]),a._v(" 服务注册")]),a._v(" "),s("ol",[s("li",[a._v("在service模块配置pom\n配置Nacos客户端的pom依赖")])]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!--服务注册--\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.springframework.cloud"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("spring-cloud-starter-alibaba-nacos-discovery"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("添加服务配置信息\n配置application.properties，在客户端微服务中添加注册Nacos服务的配置信息")])]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nacos服务地址")]),a._v("\nspring.cloud.nacos.discovery.server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("addr=127.0.0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8848")]),a._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("添加Nacos客户端注解\n在客户端微服务启动类中添加注解")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("@EnableDiscoveryClient\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[a._v("启动客户端微服务\n启动注册中心\n启动已注册的微服务，可以在Nacos服务列表中看到被注册的微服务")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/09/20200908234010.png",alt:"image-20200908234010593"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);