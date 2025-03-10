(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{601:function(e,t,n){"use strict";n.r(t);var a=n(0),i=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"一-基本介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-基本介绍"}},[e._v("#")]),e._v(" 一. 基本介绍")]),e._v(" "),t("ul",[t("li",[e._v("Feign是Netflix开发的声明式、模板化的HTTP客户端， Feign可以帮助我们更快捷、优雅地调\n用HTTP API。")]),e._v(" "),t("li",[e._v("Feign支持多种注解，例如Feign自带的注解或者JAX-RS注解等。")]),e._v(" "),t("li",[e._v("Spring Cloud对Feign进行了 增强，使Feign支持了Spring MVC注解，并整合了Ribbon和Eureka，从\n而让Feign的使用更加方便。")]),e._v(" "),t("li",[e._v("Spring Cloud Feign是基于Netflix feign实现，整合了Spring Cloud Ribbon和Spring Cloud Hystrix，\n除了提供这两者的强大功能外，还提供了一种声明式的Web服务客户端定义的方式。")]),e._v(" "),t("li",[e._v("Spring Cloud Feign帮助我们定义和实现依赖服务接口的定义。在Spring Cloud feign的实现下，只需\n要创建一个接口并用注解方式配置它，即可完成服务提供方的接口绑定，简化了在使用Spring Cloud\nRibbon时自行封装服务调用客户端的开发量。")])]),e._v(" "),t("h2",{attrs:{id:"二-实现服务调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-实现服务调用"}},[e._v("#")]),e._v(" 二. 实现服务调用")]),e._v(" "),t("ol",[t("li",[e._v("添加pom依赖")])]),e._v(" "),t("div",{staticClass:"language-mxml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\x3c!--服务调用--\x3e\n<dependency>\n<groupId>org.springframework.cloud</groupId>\n<artifactId>spring-cloud-starter-openfeign</artifactId>\n</dependency>\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("在调用端的启动类添加注解")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("@EnableFeignClients\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("创建包和接口\n创建client包\n@FeignClient注解用于指定从哪个服务中调用功能 ，名称与被调用的服务名保持一致。"),t("br"),e._v("\n@GetMapping注解用于对被调用的微服务进行地址映射。"),t("br"),e._v("\n@PathVariable注解一定要指定参数名称，否则出错"),t("br"),e._v("\n@Component注解防止，在其他位置注入vodClient时idea报错")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@FeignClient("service-vod")\n@Component\npublic interface VodClient {\n @DeleteMapping(value = "/eduvod/vod/video/{videoId}")\n public R removeVideo(@PathVariable("videoId") String videoId);\n}\n')])])]),t("ol",{attrs:{start:"4"}},[t("li",[e._v("注入client")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("@Autowired\nprivate VodClient vodClient;\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[e._v("调用微服务")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("vodClient.removeVideo(videoSourceId);\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);