(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{566:function(t,n,o){"use strict";o.r(n);var e=o(0),a=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("Boxx"),t._v(" "),n("h2",{attrs:{id:"springboot的派生条件注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#springboot的派生条件注解"}},[t._v("#")]),t._v(" SpringBoot的派生条件注解")]),t._v(" "),n("p",[t._v("SpringBoot自动配置是需要满足相应的条件才会自动配置,因此SpringBoot的自动配置大量应用了条件注解"),n("code",[t._v("ConditionalOnXXX")]),t._v("。如下图：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/07/20200803174833.png",alt:"image-20200728095335099"}})]),t._v(" "),n("h2",{attrs:{id:"condition接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#condition接口"}},[t._v("#")]),t._v(" Condition接口")]),t._v(" "),n("p",[t._v("源码如下:"),n("br"),t._v(" "),n("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/07/20200728114130.png",alt:"image-20200728114130204"}})]),t._v(" "),n("p",[t._v("Condition接口主要有一个matches方法，该方法决定了是否要注册相应的bean对象。其中matches方法中有两个参数，参数类型分别是ConditionContext和AnnotatedTypeMetadata，这两个参数非常重要。它们分别用来获取一些环境信息和注解元数据从而用在matches方法中判断是否符合条件。")]),t._v(" "),n("blockquote",[n("p",[t._v("ConditionContext，顾名思义，主要是跟Condition的上下文有关，主要用来获取Registry,BeanFactory,Environment,ResourceLoader和ClassLoader等。那么获取这些用来干什么呢？举个栗子，比如OnResourceCondition需要靠ConditionContext来获取ResourceLoader来加载指定资源，OnClassCondition需要靠ConditionContext来获取ClassLoader来加载指定类等，下面看下其源码：")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/07/20200728114333.png",alt:"image-20200728114333885"}})]),t._v(" "),n("blockquote",[n("p",[t._v("AnnotatedTypeMetadata，这个跟注解元数据有关，利用AnnotatedTypeMetadata可以拿到某个注解的一些元数据，而这些元数据就包含了某个注解里面的属性，比如前面的栗子，利用AnnotatedTypeMetadata可以拿到@ConditionalOnLinux的注解属性environment的值。下面看下其源码：")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/07/20200728114436.png",alt:"image-20200728114436872"}})]),t._v(" "),n("p",[t._v("Condition接口的具体实现类的matches方法，若matches返回false，则跳过，不进行注册bean的操作；若matches返回true，则不跳过，进行注册bean的操作；")]),t._v(" "),n("h2",{attrs:{id:"onresourcecondition源码分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#onresourcecondition源码分析"}},[t._v("#")]),t._v(" OnResourceCondition源码分析")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/07/20200728115422.png",alt:"image-20200728115422831"}})]),t._v(" "),n("p",[t._v("现在先来看下一个逻辑及其简单的注解条件类"),n("code",[t._v("OnResourceCondition")]),t._v("，"),n("code",[t._v("OnResourceCondition")]),t._v("继承了"),n("code",[t._v("SpringBootCondition")]),t._v("父类，覆盖了其"),n("code",[t._v("getMatchOutcome")]),t._v("方法，用于"),n("code",[t._v("@ConditionalOnResource")]),t._v("注解指定的资源存在与否。"),n("code",[t._v("OnResourceCondition")]),t._v("的判断逻辑非常简单，主要拿到"),n("code",[t._v("@ConditionalOnResource")]),t._v("注解指定的资源路径后，然后用"),n("code",[t._v("ResourceLoader")]),t._v("根据指定路径去加载看资源存不存在。下面直接看代码:")]),t._v(" "),n("p",[t._v("先来看下"),n("code",[t._v("@ConditionalOnResource")]),t._v("的代码，")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("@Target({ ElementType.TYPE, ElementType.METHOD })\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Conditional(OnResourceCondition.class)\npublic @interface ConditionalOnResource {\n\n\t/**\n\t * The resources that must be present.\n\t * @return the resource paths that must be present.\n\t */\n\tString[] resources() default {};\n\n}\n")])])]),n("p",[t._v("再来看"),n("code",[t._v("OnResourceCondition")]),t._v("的代码：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('@Order(Ordered.HIGHEST_PRECEDENCE + 20)\nclass OnResourceCondition extends SpringBootCondition {\n\n\tprivate final ResourceLoader defaultResourceLoader = new DefaultResourceLoader();\n\n\t@Override\n\tpublic ConditionOutcome getMatchOutcome(ConditionContext context,\n\t\t\tAnnotatedTypeMetadata metadata) {\n\t\t// 获得@ConditionalOnResource注解的属性元数据\n\t\tMultiValueMap<String, Object> attributes = metadata\n\t\t\t\t.getAllAnnotationAttributes(ConditionalOnResource.class.getName(), true);\n\t\t// 获得资源加载器，若ConditionContext中有ResourceLoader则用ConditionContext中的，没有则用默认的\n\t\tResourceLoader loader = (context.getResourceLoader() != null)\n\t\t\t\t? context.getResourceLoader() : this.defaultResourceLoader;\n\t\tList<String> locations = new ArrayList<>();\n\t\t// 将@ConditionalOnResource中定义的resources属性值取出来装进locations集合\n\t\tcollectValues(locations, attributes.get("resources"));\n\t\tAssert.isTrue(!locations.isEmpty(),\n\t\t\t\t"@ConditionalOnResource annotations must specify at "\n\t\t\t\t\t\t+ "least one resource location");\n\t\t// missing集合是装不存在指定资源的资源路径的\n\t\tList<String> missing = new ArrayList<>();\n\t\t// 遍历所有的资源路径，若指定的路径的资源不存在则将其资源路径存进missing集合中\n\t\tfor (String location : locations) {\n\t\t\t// 这里针对有些资源路径是Placeholders的情况，即处理${}\n\t\t\tString resource = context.getEnvironment().resolvePlaceholders(location);\n\t\t\tif (!loader.getResource(resource).exists()) {\n\t\t\t\tmissing.add(location);\n\t\t\t}\n\t\t}\n\t\t// 如果存在某个资源不存在，那么则报错\n\t\tif (!missing.isEmpty()) {\n\t\t\treturn ConditionOutcome.noMatch(ConditionMessage\n\t\t\t\t\t.forCondition(ConditionalOnResource.class)\n\t\t\t\t\t.didNotFind("resource", "resources").items(Style.QUOTE, missing));\n\t\t}\n\t\t// 所有资源都存在，那么则返回能找到就提的资源\n\t\treturn ConditionOutcome\n\t\t\t\t.match(ConditionMessage.forCondition(ConditionalOnResource.class)\n\t\t\t\t\t\t.found("location", "locations").items(locations));\n\t}\n\t\n\t// 将@ConditionalOnResource中定义的resources属性值取出来装进locations集合\n\tprivate void collectValues(List<String> names, List<Object> values) {\n\t\tfor (Object value : values) {\n\t\t\tfor (Object item : (Object[]) value) {\n\t\t\t\tnames.add((String) item);\n\t\t\t}\n\t\t}\n\t}\n}\n')])])]),n("p",[t._v("getMatchOutcome()方法实现SpringBootCondition")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('public final boolean matches(ConditionContext context,\n\t\t\tAnnotatedTypeMetadata metadata) {\n\t\t// 得到metadata的类名或方法名\n\t\tString classOrMethodName = getClassOrMethodName(metadata);\n\t\ttry {\n\t\t\t// 判断每个配置类的每个条件注解@ConditionalOnXXX是否满足条件，然后记录到ConditionOutcome结果中\n\t\t\t// 注意getMatchOutcome是一个抽象模板方法，交给OnXXXCondition子类去实现\n\t\t\tConditionOutcome outcome = getMatchOutcome(context, metadata);\n\t\t\t// 打印condition评估的日志，哪些条件注解@ConditionalOnXXX是满足条件的，哪些是不满足条件的，这些日志都打印出来\n\t\t\tlogOutcome(classOrMethodName, outcome);\n\t\t\t// 除了打印日志外，这些是否匹配的信息还要记录到ConditionEvaluationReport中\n\t\t\trecordEvaluation(context, classOrMethodName, outcome);\n\t\t\t// 最后返回@ConditionalOnXXX是否满足条件\n\t\t\treturn outcome.isMatch();\n\t\t}\n\t\tcatch (NoClassDefFoundError ex) {\n\t\t\tthrow new IllegalStateException(\n\t\t\t\t\t"Could not evaluate condition on " + classOrMethodName + " due to "\n\t\t\t\t\t\t\t+ ex.getMessage() + " not "\n\t\t\t\t\t\t\t+ "found. Make sure your own configuration does not rely on "\n\t\t\t\t\t\t\t+ "that class. This can also happen if you are "\n\t\t\t\t\t\t\t+ "@ComponentScanning a springframework package (e.g. if you "\n\t\t\t\t\t\t\t+ "put a @ComponentScan in the default package by mistake)",\n\t\t\t\t\tex);\n\t\t}\n\t\tcatch (RuntimeException ex) {\n\t\t\tthrow new IllegalStateException(\n\t\t\t\t\t"Error processing condition on " + getName(metadata), ex);\n\t\t}\n\t}\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("public abstract ConditionOutcome getMatchOutcome(ConditionContext context,\n\t\t\tAnnotatedTypeMetadata metadata);\n")])])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("ul",[n("li",[t._v("SpringBoot的所有@ConditionalOnXxx的条件类OnXxxCondition都是继承于SpringBootCondition基类，而SpringBootCondition又实现了Condition接口。")]),t._v(" "),n("li",[t._v("SpringBootCondition基类主要用来打印一些条件注解评估报告的日志,这些条件评估信息全部来源于其子类注解条件类OnXxxCondition，因此其也抽象了一个模板方法getMatchOutcome留给子类去实现来评估其条件注解是否符合条件。")])])],1)}),[],!1,null,null,null);n.default=a.exports}}]);