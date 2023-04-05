(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{537:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"什么是-spring-boot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-spring-boot"}},[t._v("#")]),t._v(" 什么是 Spring Boot")]),t._v(" "),s("p",[t._v("Spring Boot 是由 Pivotal 团队提供的全新框架，其设计目的是用来简化新 Spring 应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置，从而使开发人员不再需要定义样板化的配置。用我的话来理解，就是 Spring Boot 其实不是什么新的框架，它默认配置了很多框架的使用方式，就像 Maven 整合了所有的 Jar 包，Spring Boot 整合了所有的框架。")]),t._v(" "),s("h2",{attrs:{id:"使用-spring-boot-有什么好处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-spring-boot-有什么好处"}},[t._v("#")]),t._v(" 使用 Spring Boot 有什么好处")]),t._v(" "),s("p",[t._v("其实就是简单、快速、方便！平时如果我们需要搭建一个 Spring Web 项目的时候需要怎么做呢？")]),t._v(" "),s("ul",[s("li",[t._v("1）配置 web.xml，加载 Spring 和 Spring mvc")]),t._v(" "),s("li",[t._v("2）配置数据库连接、配置 Spring 事务")]),t._v(" "),s("li",[t._v("3）配置加载配置文件的读取，开启注解")]),t._v(" "),s("li",[t._v("4）配置日志文件")]),t._v(" "),s("li",[t._v("...")]),t._v(" "),s("li",[t._v("配置完成之后部署 Tomcat 调试")]),t._v(" "),s("li",[t._v("...")])]),t._v(" "),s("p",[t._v("现在非常流行微服务，如果我这个项目仅仅只是需要发送一个邮件，如果我的项目仅仅是生产一个积分；我都需要这样折腾一遍!")]),t._v(" "),s("p",[t._v("但是如果使用 Spring Boot 呢？"),s("br"),t._v("\n很简单，我仅仅只需要非常少的几个配置就可以迅速方便的搭建起来一套 Web 项目或者是构建一个微服务！")]),t._v(" "),s("p",[t._v("使用 Spring Boot 到底有多爽，用下面这幅图来表达")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://www.itmind.net/assets/images/2016/dog.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"快速入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速入门"}},[t._v("#")]),t._v(" 快速入门")]),t._v(" "),s("p",[t._v("说了那么多，手痒痒的很，马上来一发试试!")]),t._v(" "),s("p",[s("strong",[t._v("Maven 构建项目")])]),t._v(" "),s("ul",[s("li",[t._v("1、访问 https://start.spring.io/")]),t._v(" "),s("li",[t._v("2、选择构建工具 Maven Project、Java、Spring Boot 版本 2.1.3 以及一些工程基本信息，可参考下图所示：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://www.itmind.net/assets/images/2019/SpringBoot/spring-boot-start.png",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("3、点击  Generate Project 下载项目压缩包")]),t._v(" "),s("li",[t._v("4、解压后，使用 Idea 导入项目，File -> New -> Model from Existing Source.. -> 选择解压后的文件夹 -> OK，选择 Maven 一路 Next，OK done!")]),t._v(" "),s("li",[t._v("5、如果使用的是 Eclipse，Import -> Existing Maven Projects -> Next -> 选择解压后的文件夹 -> Finsh，OK done!")])]),t._v(" "),s("p",[s("strong",[t._v("Idea 构建项目")])]),t._v(" "),s("ul",[s("li",[t._v("1、选择 File -> New —> Project... 弹出新建项目的框")]),t._v(" "),s("li",[t._v("2、选择 Spring Initializr，Next 也会出现上述类似的配置界面，Idea 帮我们做了集成")]),t._v(" "),s("li",[t._v("3、填写相关内容后，点击 Next 选择依赖的包再点击 Next，最后确定信息无误点击 Finish。")])]),t._v(" "),s("p",[s("strong",[t._v("项目结构介绍")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://www.itmind.net/assets/images/2016/SpringBoot2.png",alt:""}})]),t._v(" "),s("p",[t._v("如上图所示，Spring Boot 的基础结构共三个文件:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("src/main/Java")]),t._v("  程序开发以及主程序入口")]),t._v(" "),s("li",[s("code",[t._v("src/main/resources")]),t._v(" 配置文件")]),t._v(" "),s("li",[s("code",[t._v("src/test/Java")]),t._v("  测试程序")])]),t._v(" "),s("p",[t._v("另外， Spring Boot 建议的目录结果如下："),s("br"),t._v("\nroot package 结构："),s("code",[t._v("com.example.myproject")])]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("com\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" example\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" myproject\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Java")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" model\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Customer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Java")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomerRepository"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Java")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" service\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomerService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Java")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" controller\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomerController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Java")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n")])])]),s("ul",[s("li",[t._v("1、Application.Java 建议放到根目录下面,主要用于做一些框架配置")]),t._v(" "),s("li",[t._v("2、model 目录主要用于实体与数据访问层（Repository）")]),t._v(" "),s("li",[t._v("3、service 层主要是业务类代码")]),t._v(" "),s("li",[t._v("4、controller 负责页面访问控制")])]),t._v(" "),s("p",[t._v("采用默认配置可以省去很多配置，当然也可以根据自己的喜欢来进行更改"),s("br"),t._v("\n最后，启动 Application main 方法，至此一个 Java 项目搭建好了！")]),t._v(" "),s("p",[s("strong",[t._v("引入 web 模块")])]),t._v(" "),s("p",[t._v("1、pom.xml中添加支持web的模块：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-web"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("pom.xml 文件中默认有两个模块：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("spring-boot-starter")]),t._v(" ：核心模块，包括自动配置支持、日志和 YAML，如果引入了 "),s("code",[t._v("spring-boot-starter-web")]),t._v(" web 模块可以去掉此配置，因为 "),s("code",[t._v("spring-boot-starter-web")]),t._v(" 自动依赖了 "),s("code",[t._v("spring-boot-starter")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("spring-boot-starter-test")]),t._v(" ：测试模块，包括 JUnit、Hamcrest、Mockito。")])]),t._v(" "),s("p",[t._v("2、编写 Controller 内容：")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorldController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/hello"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("@RestController")]),t._v(" 的意思就是 Controller 里面的方法都以 json 格式输出，不用再写什么 jackjson 配置的了！")]),t._v(" "),s("p",[t._v("3、启动主程序，打开浏览器访问 "),s("code",[t._v("https://localhost:8080/hello")]),t._v("，就可以看到效果了，有木有很简单！")]),t._v(" "),s("p",[s("strong",[t._v("如何做单元测试")])]),t._v(" "),s("p",[t._v("打开的"),s("code",[t._v("src/test/")]),t._v("下的测试入口，编写简单的 https 请求来测试；使用 mockmvc 进行，利用"),s("code",[t._v("MockMvcResultHandlers.print()")]),t._v("打印出执行结果。")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RunWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringRunner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootTest")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloTests")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MockMvc")]),t._v(" mvc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Before")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        mvc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MockMvcBuilders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("standaloneSetup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorldController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        mvc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("perform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MockMvcRequestBuilders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/hello"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("accept")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MediaType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("APPLICATION_JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("andExpect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isOk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("andExpect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equalTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("开发环境的调试")])]),t._v(" "),s("p",[t._v("热启动在正常开发项目中已经很常见了吧，虽然平时开发web项目过程中，改动项目启重启总是报错；但SpringBoot对调试支持很好，修改之后可以实时生效，需要添加以下的配置：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-devtools"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("optional")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("optional")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-maven-plugin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("fork")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("fork")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("该模块在完整的打包环境下运行的时候会被禁用。如果你使用 "),s("code",[t._v("Java -jar")]),t._v("启动应用或者用一个特定的 classloader 启动，它会认为这是一个“生产环境”。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("使用 Spring Boot 可以非常方便、快速搭建项目，使我们不用关心框架之间的兼容性，适用版本等各种问题，我们想使用任何东西，仅仅添加一个配置就可以，所以使用 Spring Boot 非常适合构建微服务。")]),t._v(" "),s("blockquote",[s("p",[t._v("文章内容已经升级到 Spring Boot 2.x")])]),t._v(" "),s("p",[s("strong",[s("a",{attrs:{href:"https://github.com/ityouknow/spring-boot-examples/tree/master/spring-boot-helloWorld",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例代码-github"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("strong",[s("a",{attrs:{href:"https://gitee.com/ityouknow/spring-boot-examples/tree/master/spring-boot-helloWorld",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例代码-码云"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);