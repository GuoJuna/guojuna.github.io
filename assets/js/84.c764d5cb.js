(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{561:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("在使用SpringBoot作为Web敏捷开发的框架之后，SpringBoot除了自动装配配置的便捷之外，在很多时候需要基于注解来开发。注解不仅增加了代码的可读性，还增加了开发的速度。这篇文章主要讲述Java 注解。")]),e._v(" "),t("h2",{attrs:{id:"元注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#元注解"}},[e._v("#")]),e._v(" 元注解")]),e._v(" "),t("p",[e._v("元注解用于注解其他注解的。Java 5.0定义了4个标准的元注解，如下：")]),e._v(" "),t("ul",[t("li",[e._v("@Target")]),e._v(" "),t("li",[e._v("@Retention")]),e._v(" "),t("li",[e._v("@Documented")]),e._v(" "),t("li",[e._v("@Inherited")])]),e._v(" "),t("p",[e._v("现在来说说这四个元注解有什么作用。")]),e._v(" "),t("h3",{attrs:{id:"target"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#target"}},[e._v("#")]),e._v(" @Target")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/07/20200728141047.png",alt:"image-20200728141047744"}})]),e._v(" "),t("p",[e._v("@Target注解用于声明注解的作用范围,参数为枚举ElementType，例如作用范围为类、接口、方法等。它的取值以及值所对应的范围如下：")]),e._v(" "),t("ul",[t("li",[e._v("CONSTRUCTOR:用于描述构造器")]),e._v(" "),t("li",[e._v("FIELD:用于描述域")]),e._v(" "),t("li",[e._v("LOCAL_VARIABLE:用于描述局部变量")]),e._v(" "),t("li",[e._v("METHOD:用于描述方法")]),e._v(" "),t("li",[e._v("PACKAGE:用于描述包")]),e._v(" "),t("li",[e._v("PARAMETER:用于描述参数")]),e._v(" "),t("li",[e._v("TYPE:用于描述类、接口(包括注解类型) 或enum声明")])]),e._v(" "),t("h3",{attrs:{id:"retention"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#retention"}},[e._v("#")]),e._v(" @Retention")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/07/20200728141022.png",alt:"image-20200728141022074"}})]),e._v(" "),t("p",[e._v("该注解声明了注解的生命周期,参数为RetentionPolicy，即注解在什么范围内有效。")]),e._v(" "),t("ul",[t("li",[e._v("SOURCE:在源文件中有效")]),e._v(" "),t("li",[e._v("CLASS:在class文件中有效")]),e._v(" "),t("li",[e._v("RUNTIME:在运行时有效（即运行时保留）")])]),e._v(" "),t("p",[e._v("大多数注解都为RUNTIME")]),e._v(" "),t("h3",{attrs:{id:"documented"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#documented"}},[e._v("#")]),e._v(" @Documented")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/07/20200728141143.png",alt:"image-20200728141143536"}})]),e._v(" "),t("p",[e._v("是一个标记注解，有该注解的注解会在生成 Java 文档中保留。")]),e._v(" "),t("h3",{attrs:{id:"inherited"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inherited"}},[e._v("#")]),e._v(" @Inherited")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/07/20200728141400.png",alt:"image-20200728141400215"}})]),e._v(" "),t("p",[e._v("该注解表明子类是有继承了父类的注解。比如一个注解被该元注解修饰，并且该注解的作用在父类上，那么子类有持有该注解。如果注解没有被该元注解修饰，则子类不持有父类的注解。")]),e._v(" "),t("h2",{attrs:{id:"自定义注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义注解"}},[e._v("#")]),e._v(" 自定义注解")]),e._v(" "),t("p",[e._v("在Java开发者，JDK自带了一些注解，在第三方框架Spring  带了大量的注解，这些注解称为第三方注解。在很多实际开发过程中，我们需要定义自己的注解。那么现在以案例的方式来讲解自定义注解。")]),e._v(" "),t("p",[e._v("在注解中，需要使用四种元注解来声明注解的作用范围、生命周期、继承，是否生成文档等。另外在注解中也可以有自己的成员变量，如果一个注解没有成员变量则称为标记注解。注解的成员变量，只支持原始类型、Class、Enumeration、Annoation。")]),e._v(" "),t("p",[e._v("现在定义一个@Writer注解，该注解被Retention、Documented、Inherited、Target修饰，表明该注解的作用范围为类、接口和方法，生命周期为运行时、该注解生成文档，并且子类可继承该注解。该注解有2个成员变量，一个为name一个为 age,代码如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Inherited\n@Target({ElementType.TYPE,ElementType.METHOD})\npublic @interface Writer {\n\n    String name();\n\n    int age();\n\n}\n\n")])])]),t("p",[e._v("那么有了该注解，怎么用呢？")]),e._v(" "),t("p",[e._v("该注解的作用范围为类、方法，写一个WriterTest，代码如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@Writer(name = "forezp", age = 12)\npublic class WriterTest {\n\n    @Writer(name = "miya", age = 10)\n    public void writeBlog() {\n        System.out.println("writing blog");\n    }\n    \n  }\n \n')])])]),t("p",[e._v("该类有了这个注解有何用？")]),e._v(" "),t("p",[e._v("一般来说，用该类修饰的类，需要通过反射来做一下逻辑的开发的工作，可广泛用于AOP、程序的配置等。现在写一个方法通过反射来解析该注解：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('  public static void main(String[] args) throws ClassNotFoundException {\n        Class c = Class.forName("com.forezp.annotation.WriterTest");\n        if (c.isAnnotationPresent(Writer.class)) {\n            Writer w = (Writer) c.getAnnotation(Writer.class);\n            System.out.println("name:" + w.name() + "   age:" + w.age());\n        }\n        Method[] methods = c.getMethods();\n        for (Method method : methods) {\n            if (method.isAnnotationPresent(Writer.class)) {\n                Writer w = method.getAnnotation(Writer.class);\n                System.out.println("name:" + w.name() + "   age:" + w.age());\n            }\n        }\n    }\n\n')])])]),t("p",[e._v("这些代码基本为反射的内容，因为反射在另一篇文章已经详细讲述过，不再重复，运行该Main方法,控制台打印出如下内容：")]),e._v(" "),t("blockquote",[t("p",[e._v("name:forezp   age:12")]),e._v(" "),t("p",[e._v("name:miya   age:10")])]),e._v(" "),t("h2",{attrs:{id:"案例实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例实战"}},[e._v("#")]),e._v(" 案例实战")]),e._v(" "),t("p",[e._v("有了上述的讲解，你可能对注解有所了解，但是对注解的具体应用并不是很深刻。现在以一个案例来详细讲述。")]),e._v(" "),t("p",[e._v("大家都对ORM框架Mybitis都非常的熟悉，在这个框架中用了大量的注解。现在模仿这个框架，通过自定义注解，来解析sql 的查询语句。实现过程大概如下：")]),e._v(" "),t("ul",[t("li",[e._v("定义@Table @Colum注解")]),e._v(" "),t("li",[e._v("定义一个实体User，定义一些基本的字段，并用注解修饰")]),e._v(" "),t("li",[e._v("用User类new对象，给对象的某些字段赋值")]),e._v(" "),t("li",[e._v("通过反射和注解来生成sql 的查询语句")])]),e._v(" "),t("p",[e._v("首先定义个一个Table注解，它的作用范围为类，代码如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.TYPE)\n@Documented\n@Inherited\npublic @interface Table {\n    String value() default "";\n}\n\n')])])]),t("p",[e._v("定义一个Column注解，作用范围为字段，代码如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("@Target(ElementType.FIELD)\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Inherited\npublic @interface Column {\n    String value();\n}\n\n")])])]),t("p",[e._v("定义一个User类，在该类的加上@Table注解，在具体的字段上 @Column注解，代码如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@Table("user")\npublic class User {\n    @Column("id")\n    private int id;\n    @Column("name")\n    private String name;\n    @Column("age")\n    private int age;\n    @Column("address")\n    private String address;\n    ..//省略getter setter\n   }\n')])])]),t("p",[e._v("写一个生成sql语句的类，它是通过反射来获取表名、字段名，加上判断实体对象的字段值来生成 查询的 sql 语句的。代码如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class GenUserSql {\n\n    public static void main(String[] args) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException {\n        User u1 = new User();\n        User u2 = new User();\n        u1.setId(1);\n        u2.setName("forezp");\n        genSql(u2);\n        genSql(u1);\n    }\n\n    private static void genSql(User user) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {\n        Class c = user.getClass();\n        StringBuilder stringBuilder = new StringBuilder();\n        stringBuilder.append("select * from ");\n        if (c.isAnnotationPresent(Table.class)) {\n            Table table = (Table) c.getAnnotation(Table.class);\n            String tableName = table.value();\n            stringBuilder.append(tableName).append(" where 1=1 and ");\n        }\n        Field[] fields = c.getDeclaredFields();\n        for (Field field : fields) {\n            String columnName;\n            if (field.isAnnotationPresent(Column.class)) {\n                Column column = field.getAnnotation(Column.class);\n                columnName = column.value();\n            } else {\n                continue;\n            }\n            String fieldName = field.getName();\n            String getMethodName = "get" + fieldName.substring(0, 1).toUpperCase() + fieldName.substring(1);\n                       Method method = c.getMethod(getMethodName);\n            Object fieldValue = method.invoke(user);\n            if (fieldValue == null || ((fieldValue instanceof Integer) && (Integer) fieldValue == 0)) {\n                continue;\n            }\n            if (fieldValue instanceof Integer) {\n                stringBuilder.append(columnName + "=" + fieldValue);\n            }\n            if (fieldValue instanceof String) {\n                stringBuilder.append(columnName + "=" + "\'" + fieldValue + "\'");\n            }\n\n        }\n        System.out.println(stringBuilder.toString());\n\n    }\n}\n\n')])])]),t("p",[e._v("运行程序，控制台打印如下：")]),e._v(" "),t("blockquote",[t("p",[e._v("select * from user where 1=1 and name='forezp'")])]),e._v(" "),t("p",[e._v("select * from user where 1=1 and id=1")]),e._v(" "),t("blockquote"),e._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("p",[e._v("http://www.cnblogs.com/peida/archive/2013/04/24/3036689.html")]),e._v(" "),t("p",[e._v("慕课网视频")]),e._v(" "),t("h2",{attrs:{id:"源码下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源码下载"}},[e._v("#")]),e._v(" 源码下载")]),e._v(" "),t("p",[e._v("https://github.com/forezp/Java-study")])])}),[],!1,null,null,null);t.default=s.exports}}]);