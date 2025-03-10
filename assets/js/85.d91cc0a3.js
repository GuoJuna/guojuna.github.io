(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{562:function(t,a,n){"use strict";n.r(a);var _=n(0),s=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一-计算机基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-计算机基础"}},[t._v("#")]),t._v(" 一.计算机基础")]),t._v(" "),a("h3",{attrs:{id:"_1-1-0和1的世界"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-0和1的世界"}},[t._v("#")]),t._v(" 1.1 0和1的世界")]),t._v(" "),a("h4",{attrs:{id:"原码-反码-补码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原码-反码-补码"}},[t._v("#")]),t._v(" 原码,反码,补码")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("原码\n原码就是符号位加上真值的绝对值, 即用第一位表示符号, 其余位表示值.")]),t._v(" "),a("li",[t._v("反码\n反码的表示方法是:\n正数的反码是其本身\n负数的反码是在其原码的基础上, 符号位不变，其余各个位取反.")]),t._v(" "),a("li",[t._v("补码\n补码的表示方法是:\n正数的补码就是其本身\n负数的补码是在其原码的基础上, 符号位不变, 其余各位取反, 最后+1. (即在反码的基础上+1)")])])]),t._v(" "),a("h4",{attrs:{id:"为什么出现反码-补码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么出现反码-补码"}},[t._v("#")]),t._v(" 为什么出现反码,补码")]),t._v(" "),a("blockquote",[a("p",[t._v("将符号位参与运算, 并且只保留加法的方法. 首先来看原码:\n计算十进制的表达式: 1-1=0\n1 - 1 = 1 + (-1) = [00000001]原 + [10000001]原 = [10000010]原 = -2")])]),t._v(" "),a("blockquote",[a("p",[t._v('为了解决原码做减法的问题, 出现了反码:\n计算十进制的表达式: 1-1=0\n1 - 1 = 1 + (-1) = [0000 0001]原 + [1000 0001]原= [0000 0001]反 + [1111 1110]反 = [1111 1111]反 = [1000 0000]原 = -0\n发现用反码计算减法, 结果的真值部分是正确的. 而唯一的问题其实就出现在"0"这个特殊的数值上. 虽然人们理解上+0和-0是一样的, 但是0带符号是没有任何意义的. 而且会有[0000 0000]原和[1000 0000]原两个编码表示0.')])]),t._v(" "),a("blockquote",[a("p",[t._v("补码的出现, 解决了0的符号以及两个编码的问题:\n1-1 = 1 + (-1) = [0000 0001]原 + [1000 0001]原 = [0000 0001]补 + [1111 1111]补 = [0000 0000]补=[0000 0000]原")])]),t._v(" "),a("h4",{attrs:{id:"位运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位运算"}},[t._v("#")]),t._v(" 位运算")]),t._v(" "),a("blockquote",[a("p",[t._v("<<左移 >>右移   >>>无符号右移\n在左移＜＜与右移＞＞两种运算中，符号位均参与移动，除负数往右移动，高位补l 之外，其他情况均在空位处补0")])]),t._v(" "),a("blockquote",[a("p",[t._v("左移运算由于符号位参与向左移动，在移动后的结果中，最左位可能是1 或者0,\n即正数向左移动的结果可能是正，也可能是负，负数向左移动的结果同样可能是正，\n也可能是负")])]),t._v(" "),a("blockquote",[a("p",[t._v("对于三个大于号的＞＞〉无符号向右移动（注意不存在＜＜＜无符号向左移动的运\n算方式），当向右移动时，正负数高位均补0 ，正数不断向右移动的最小值是0 ，而\n负数不断向右移动的最小值是l")])]),t._v(" "),a("blockquote",[a("p",[t._v("为何负数不断地无符号向右移动的最小值是l 呢？在实际编程中，位移运算仅作\n用于整型（32 位）和长整型（64 位）数上，假如在整型数上移动的位数是32 位，无\n论是否带符号位以及移动方向，均为本身。因为移动的位数是个mod 32 的结果，\n即35 >> 1 与3 5 »33 是一样的结果")])]),t._v(" "),a("h3",{attrs:{id:"_1-2-浮点数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-浮点数"}},[t._v("#")]),t._v(" 1.2 浮点数")]),t._v(" "),a("blockquote",[a("p",[t._v('从数字时间的科学计数法映射到计算机世界的浮点数是,数值从十进制改为二进制,还要考虑内存硬件设备的实现方式.在规格化表示上存在差异,称谓有所改变,指数称为"阶码",有效数字称为"尾数",所以用户存储符号,阶码,尾数的二进制位分别称为符号位,阶码位,尾数位.')]),t._v(" "),a("ol",[a("li",[t._v("符号位\n在最高二进制位上分配l 位表示浮点数的符号，0 表示正数，1 表示负数。")]),t._v(" "),a("li",[t._v("阶码位\n在符号位右侧分配8 位用来存储指数，")]),t._v(" "),a("li",[t._v("尾数位\n最右侧分配连续的23 位用来存储有效数字，")])])]),t._v(" "),a("blockquote",[a("p",[t._v("加减运算\n在数学中，进行两个小数的加减运算时，首先要将小数点对齐，然后同位数进行\n加减运算。对两个采用科学计数法表示的数做加减法运算时，为了让小数点对齐就需\n要确保指数一样。当小数点对齐后，再将有效数字按照正常的数进行加减运算。")])]),t._v(" "),a("blockquote",[a("p",[t._v("在要求绝对精确表示的业务场景下，比如金融行业的货币表示，推荐使用整型存\n储其最小单位的值，展示时可以转换成该货币的常用单位，比如人民币使用分存储，\n美元使用美分存储。在要求精确表示小数点n 位的业务场景下，比如圆周率要求存储\n小数点后1000 位数字，使用单精度和双精度浮点数类型保存是难以做到的，这时推\n荐采用数组保存小数部分的数据。在比较浮点数时，由于存在误差，往往会出现意料\n之外的结果，所以禁止通过判断两个浮点数是否相等来控制某些业务流程。在数据库\n中保存小数时，推荐使用decimal 类型，禁止使用float 类型和double 类型。因为这\n两种类型在存储的时候，存在精度损失的问题。")])]),t._v(" "),a("h3",{attrs:{id:"_1-3-字符集与乱码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-字符集与乱码"}},[t._v("#")]),t._v(" 1.3 字符集与乱码")]),t._v(" "),a("blockquote",[a("p",[t._v('在ASCII 码中，有两个特殊的控制字符10 和13 ，前者是LF 即“\\n ”，后者是\nCR 即V”，在编码过程中，代码的换行虽然是默认不可见的，但在不同的操｛乍系统中’\n表示方式是不样的。在UNIX 系统中，换行使用换行符“＼n,在window系统中,\n换行使用＂\\r\\n;在旧版macOS中,换行符使用回车符"/r",在新版macOS中使用\n与UNIX 系统丰目同的换行方式。前编码环境使用换行方式是LF ,\n这也是推荐的换行方式，避免出现源码在不同操作系统中换行显示不同的情况。')])]),t._v(" "),a("h3",{attrs:{id:"_1-4-cpu与内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-cpu与内存"}},[t._v("#")]),t._v(" 1.4 CPU与内存")]),t._v(" "),a("blockquote",[a("p",[t._v("CPU ( Central Processing Unit ）是一块超大规模的集成电路板，是计算机的核心\n部件，承载着计算机的主要运算和控制功能，是计算机指令的最终解释模块和执行模\n块。硬件包括基板、核心、针脚，基板用来固定核心和针脚，针脚通过基板上的基座\n连接电路信号，CPU 核心的工艺极度精密，达到10 纳米级别。CPU 的内部结\n构如图 所示。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190802111819801.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("blockquote",[a("p",[t._v("内存物理结构由内存芯片、电路板、控制芯片、相关支持模块等组成，内\n存芯片结构比较简单，核心是存储单元，支持模块是地址译码器和读写控制器，如图所示。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190802112009711.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),t._v(" "),a("h3",{attrs:{id:"_1-5-tcp-ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-tcp-ip"}},[t._v("#")]),t._v(" 1.5 TCP/IP")]),t._v(" "),a("blockquote",[a("p",[t._v("TCP/IP ( Transmission Control Protocol I Internet Protocol ）中文译为传输控制协\n议／因特网互联协议，这个大家族里的其他知名协议还有HTTP, HTT陀、FTP、\nSMTP、UDP, ARP、PPP、IEEE 802.x 等。TCP/IP 是当前流行的网络传输协议框架，\n从严格意义上讲它是一个协议族，因为TCP, IP 是其中最为核心的协议，所以就把\n该协议族称为TCP/IP\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190802112224762.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),t._v(" "),a("blockquote",[a("p",[t._v("IP协议\nIP是面向无连接、无状态的，没有额外的机制保证发送的包是否有序到达。IP\n首先规定出IP 地址格式，该地址相当于在逻辑意义上进行了网段的划分，给每台计\n算机额外设置了一个唯一的详细地址。既然链路层可以通过唯一的MAC 地址找到机\n器，为什么还需要通过唯的IP 地址再来标识呢？简单地说，在世界范围内，不可\n能通过广播的方式，从数以千万计的计算机里找到目标MAC 地址的计算机而不超时。")])]),t._v(" "),a("blockquote",[a("p",[t._v("连接池\n在客户端与服务端之间可以事先创建若干连接并提\n前放置在连接池中，需要时可以从连接池直接获取，数据传输完成后，将连接归还至\n连接池中，从而减少频繁创建和释放连接所造成的开销。例如，RPC 服务集群的注册\n中心与服务提供方、消费方之间，消息服务集群的缓存服务器和消费者服务器之间，\n应用后台服务器和数据库之间，都会使用连接池来提升性能。")])]),t._v(" "),a("h3",{attrs:{id:"_1-6-信息安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-信息安全"}},[t._v("#")]),t._v(" 1.6 信息安全")]),t._v(" "),a("blockquote",[a("p",[t._v("黑客与与安全\n现代黑客攻击的特点是分布式、高流量、深度匿名\n互联网企业都要建立一\n套完整的信息安全体系，遵循CIA 原则，即保密性（Confidentiality ) ，完整性（Integrity ),可用性（Availability ）")]),t._v(" "),a("ul",[a("li",[t._v("保密性。对需要保护的数据（比如用户的私人信息等）进行保密操作，无论\n是存储还是传输，都要保证用户数据及相关资源的安全。比如，在存储文件\n时会进行加密，在数据传输中也会通过各种编码方式对数据进行加密等。")]),t._v(" "),a("li",[t._v("完整性。访问的数据需要是完整的，而不是缺失的或者被篡改的，不然用户\n访问的数据就是不正确的。比如，在商场看中一个型号为NB 的手机，但售\n货员在包装的时候被其他人换成了更便宜的型号为LB 的于机，这就是我们\n所说的资源被替换了，也就是不满足完整性的地方。在实际编写代码中，一\n定要保证数据的完整性，通常的做法是对数据进行签名和校验（比如MDS\n和数字签名等）。")]),t._v(" "),a("li",[t._v("可用性。服务需要是可用的。如果连服务都不可用，也就没有安全这－说了。\n比如还是去商场买东西，如果有人恶意破坏商场，故意雇用大量水军在商场\n的收银台排队，既不结账也不走，导致其他人无法付款，这就是服务已经不\n可用的表现。这个例子和常见的服务拒绝（Dos ）攻击十分相似。对于这种情况，\n通常使用访问控制、限流等手段解决。")])])]),t._v(" "),a("blockquote",[a("p",[t._v("SQL注入\n( I ）过滤异户输入参＆中的阿弥字符，从而降低被SQL ,t入的风险。\n( 2 ）禁止通过字符南拼撞的SQL i吾旬，严恪使用参数绑定传人的SQL 参数c\n( 3 ）合理使月数据库击可框豆、提供的防左入机制。")])]),t._v(" "),a("blockquote",[a("p",[t._v("XSS\nXSS 跨站脚本攻击，即\nCross-Site Scripting ，为了不幸日前端开发中层叠样式表（css ）的名字冲突，简称为\nXSSa XSS 是指黑客通过技术手段，向正常用户请求的HTML 页面中插入恶意脚本，\n从而可以执行任意脚本。\n在防范xss 上，主要通过对用户输入数据做过滤或者转义。比如Java 开发人\n员可以使用Jsoup 框架对用户输入字符串做xss 过滤，或者使用框架提供的工具\n类对用户输入的字符串做HTML 转义，例如Spring 框架提供的HtmlUtils 。前端在\n浏览器展示数据时，也需要使用安全的API 展示数据，比如使用innerText 而不是\ninnerHTML 。所以需要前、后端开发人员一同配合才能有效防范xss 漏洞。")])]),t._v(" "),a("blockquote",[a("p",[t._v("CSRF\n跨站请求伪造（Cross-Site Request Forgery ），简称CSRF ，也被称为One-click\nAttack , !l.D 在用户并不知惰的情况下，冒充用户发起请求，在当前已经登录的Web 应\n用程序上执行恶意操作，如恶意发帖、修改密码、发邮件等。\nxss 是在正常用户请求的HTML 页面中执行了黑客提供的恶意代码，\ncs 盯是黑客直接盗用用户浏览器中的登录信息，冒充用户去执行黑客指定的操作。\nxss 问题出在用户数据没有过滤、转义l cs 盯问题出在HTTP 接口没有防范不受信\n任的调用。\n防范CSRF 漏洞主要通过以下方式，\n( I ) CSRF Token 验证，利用浏览器的同源限制，在HTTP 接口执行前验证页面\n或者Cookie 中设置的Token ，只有验证通过才继续执行请求。\n( 2 ）人机交互，比如在调用上述网上银行转账接口时校验短信验证码。")])]),t._v(" "),a("blockquote",[a("p",[t._v("HTTPS\n( I ）浏览器向服务器发送请求，请求中包括浏览器支持的协议，并附带一个随\n机数。\n( 2 ）服务器收到请求后，选择某种非对称加密算法，把数字证书签有公钥、身\n份信息发送给浏览器，同时也附带一个随机数。\n( 3 ）浏览器收到后、验证证书的真实性，用服务器的公铝发送握手信息给服务器。\n( 4 ）服务器解密后，使用主前的随机数计算出，个对称加密的密钥，以此作为\n加密信息并发送。\n( 5 ）后续所有的信息发送都是以对称加密方式进行的。")])]),t._v(" "),a("h2",{attrs:{id:"二-面向对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-面向对象"}},[t._v("#")]),t._v(" 二.面向对象")]),t._v(" "),a("h3",{attrs:{id:"_2-1-oop理念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-oop理念"}},[t._v("#")]),t._v(" 2.1 OOP理念")]),t._v(" "),a("blockquote",[a("p",[t._v("面向过程让计算机有步骤地顺次做件事情，是种过程化的叙事思维。但是在\n大型软件开发过程中，发现用面向过程语言开发，软件维护、软件复用存在着巨大的\n困难，代码开发变成了记流水账，久而久之就成为“面条”代码，模块之间互相辑合，\n流程互相穿插，往往牵发而动全身。面向对象提出一种计算机世界里解决复杂软件\n工程的方法论，拆解问题复杂度，从人类思维角度提出解决问题的步骤和方案。")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-初识java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-初识java"}},[t._v("#")]),t._v(" 2.2 初识Java")]),t._v(" "),a("blockquote",[a("p",[t._v("Java 语言拥有跨平台、分布式、多线程、健壮性等主要特点，是当下比较主流的\n高级编程语言。它的类库相当丰富、功能强大、简单易用，对开发者相当友好，不仅\n吸收了C＋＋的优点，还摒弃了其难以掌控的多继承、指针等概念。Java 比较好地实\n现了面向对象理论，允许开发工程师以优雅的思维方式处理复杂的编程场景。")])]),t._v(" "),a("h3",{attrs:{id:"_2-3-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-类"}},[t._v("#")]),t._v(" 2.3 类")]),t._v(" "),a("blockquote",[a("p",[t._v("类的定义\n类的定义由访问级别、类型、类名、是否抽象、是否静态、泛型标识、继承或实\n现关键字、父类或接口名称等组成。类的访问级别有public 和无访问控制符，类型分\n为class 、interface 、en um 。")])]),t._v(" "),a("blockquote",[a("p",[t._v("接口与抽象类\n正如面向对象四大特性（抽象、封装、继承、多态）所述，定义类的过程就是抽\n象和封装的过程，而接口与抽象类则是对实体类进行更高层次的抽象，仅定义公共行\n为和特征。接口与抽象类的共同点是都不能被实例化，但可以定义引用变量指向实例对象\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190802114751166.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),t._v(" "),a("blockquote",[a("p",[t._v("内部类\n在个.Java 源文件中，只能定义一个类名与文件名完全致的公开类，使用\npublic class 关键字来修饰。但在面向对象语言中1 任何一个类都可以在内部定义另外\n一个类，前者为外部类，后者为内部类。内部类本身就是类的一个属性，与其他属性\n定义方式一致。")]),t._v(" "),a("ul",[a("li",[t._v("静态内部类，如static class StaticinnerC!ass {} ;")]),t._v(" "),a("li",[t._v("成员内部类，如：private class InstancelnnerC!ass {} ;")]),t._v(" "),a("li",[t._v("局部内部类，定义在方法或者表达式内部，")]),t._v(" "),a("li",[t._v("匿名内部类，如：(new Thread(){} ).start（）。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190802115000359.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190802115007497.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])])]),t._v(" "),a("blockquote",[a("p",[t._v("访问权限控制\n面向对象的核心思想之一就是封装，只把有限的方法和成员公开给别人，这也是\n迪米特法则的内在要求，使外部调用方对方法体内的实现细节知道得尽可能少\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190802115118335.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n在定义类时，推荐访问控制级别从严处理．\n( I ）如果不允许外部直接通过new 创建对象，构造方法必须是pnvale 。\n( 2 ）工具类不允许有p u b l ic 或default 构造方法。\n( 3 ）类非s t a t ic 成员变雪并且与子类共享，必须是protected 。\n( 4 ）类非stat i c 成员变量并且仅在本类使用，必须是private 。\n( 5 ）类stat i c 成员变量如果仅在东类使用，必须是private o\n( 6 ）若是stat i c 成员变量，必须考虑是否为final o\n( 7 ）类成员方法只供类内部调用，必须是private 。\n( 8 ）类成员方法只对继承类公开，那么限制为protected")])]),t._v(" "),a("blockquote",[a("p",[t._v("this与super\n对象实例化时，至少有条从本类出发抵达0 均ect 的通路，而打通这条路的两\n个主要工兵就是thi s 和s uper\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019080211533942.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n类关系\n有关系的\n情况下，包括如下5 种类型，")]),t._v(" "),a("ul",[a("li",[t._v("［继承］extends (is-a ）。")]),t._v(" "),a("li",[t._v("［实现］implements (can-do）。")]),t._v(" "),a("li",[t._v("［组合］类是成员变量（contai ns - a ）。")]),t._v(" "),a("li",[t._v("｛聚合｝类是成员变量（has-a）。")]),t._v(" "),a("li",[t._v("［依赖］import 类（use-a ）\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019080211553691.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])])]),t._v(" "),a("blockquote",[a("p",[t._v("序列化\n( I ) Java 原生序列化\nJava 类通过实现Serializable 接口来实现该类对象的序列化，\n这个接口非常特殊，没有任何方法，只起标识作用。Java 序列化保留了对象类的元数\n据（如类、成员变量、继承类信息等），以及对象数据等，兼容性最好，但不支持跨\n语言，而且性能一般")])]),t._v(" "),a("blockquote",[a("p",[t._v("实现Seri alizable 接口的类建议设置seria!VersionUID 字段值，如果不设置，那么\n每次运行时，编译器会根据类的内部实现，包括类名、接口名、方法和属性等来自\n动生成seria!Version UID 。如果类的源代码有修改，那么重新编译后seria!VersionUID\n的取值可能会发生变化。因此实现Serializable 接口的类一定要显式地定义\nseria!Version UID 属性值。修改类时需要根据兼容性决定是否修改serialVersionUID 值")]),t._v(" "),a("ul",[a("li",[t._v("如果是兼容升级，请不要修改seria!VersionUID 字段，避免反序列化失败。")]),t._v(" "),a("li",[t._v("如果是不兼容升级，需要修改serialVersionUID 值，避免反序列化混乱。")])]),t._v(" "),a("p",[t._v("使用Java 原生序列化需注意，Java 反序歹lj化时不会调用类的无参构造方法，而\n是调用native 方法将成员变量赋值为对应类型的初始值。基于性能及兼容性考虑，不\n推荐使用Java 原生序列化")])]),t._v(" "),a("blockquote",[a("p",[t._v("( 2 ) Hessian 序列化。\nHessian 序列化是一种支持动态类型、跨语言、基于对象\n传输的网络协议。Java 对象序列化的二进制流可以被其他语言（如C＋＋、Python ）反\n序列化。Hessian 协议具有如下特性．")]),t._v(" "),a("ul",[a("li",[t._v("自描述序列化类型。不依赖外部描述文件或接口定义，用一个字节表示常用基础类型，极大缩短二进制流。")]),t._v(" "),a("li",[t._v("语言无关，支持脚本语言。")]),t._v(" "),a("li",[t._v("协议简单，比Java 原生序列化高效。")])]),t._v(" "),a("p",[t._v("相比Hessian 1.0, Hessian 2.0 中增加了压缩编码，其序列化二进制流大小是Java\n序列化的50% ，序列化耗时是Java 序列化的30 % ，反序列化耗时是Java 反序列化的\n20%")]),t._v(" "),a("p",[t._v("Hessian 会把复杂对象所有属性存储在一个Map 申进行序列化。所以在父类、子\n类存在同名成员变量的情况下，Hessian 序列化时，先序列化子类，然后序列化父类，\n因此反序列化结果会导致子类同名成员变量被父类的值覆盖。")])]),t._v(" "),a("blockquote",[a("p",[t._v("3 ) JSON 序列化\nJSON ( JavaScript Object Notation ）是一种轻量级的数据交\n换格式。JSON 序列化就是将数据对象转换为JSON 字符串。在序列化过程中抛弃了\n类型信息，所以反序列化时只有提供类型信息才能准确地反序列化。相比前两种方式，\nJSON 可读性比较好，方便调试")])]),t._v(" "),a("h3",{attrs:{id:"_2-4-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-方法"}},[t._v("#")]),t._v(" 2.4 方法")]),t._v(" "),a("blockquote",[a("p",[t._v("方法签名\n方法签名包括方法名称和参数列表，是NM 标识方法的唯一索引，不包括返回值，\n更加不包括访问权限控制符、异常类型等。")])]),t._v(" "),a("blockquote",[a("p",[t._v("参数\n方法签名包括方法名称和参数列表，是NM 标识方法的唯一索引，不包括返回值，\n更加不包括访问权限控制符、异常类型等。\n无论是对于基本数据类型，还是引用变量，Java 中的参数传递都是值\n复制的传递过程。对于引用变量，复制指向对象的首地址，双方都可以通过自己的引\n用变量修改指向对象的相关属性。")])]),t._v(" "),a("blockquote",[a("p",[t._v("构造方法\n构造方法（Constructor ）是方法名与类名相同的特殊方法，在新建对象时调用，\n可以通过不同的构造方法实现不同方式的对象初始化，它有如下特征，\n( I ）构造1J 沽名称必示与吴兵相同。\n( 2 ）均圭方江主二没有返国类在二呐，即使是void tli，－怀能有z 它返回对象的地址，\n并赋值给引用变量。\n( 3 ）枯l z 丁、－t: 吉~ ~t~ .. ,’ .(..' T 市被ff 弓. -.T 'i「妒土I'\" 调用途径有三种\n一是通过new 关键字，二是在子类的构造方法中通过super 调用父类的构造方法，三\n是通过反射方式获取并使用。\n( 4 ）吴王飞jj fo~ ＋「J 认－~ .＿送去均王元、去但是如果显式定义了有参构造方法，\n则此无参构造方法就会被覆盖，如果依然想拥有，就需要进行显式定义。\n( 5 ）均生于1 、主以和平外部无法使用私有构造方法创建对象。")])]),t._v(" "),a("blockquote",[a("p",[t._v("类内方法\n除构造方法外，类中还可以有三类方法实例方法、\n静态方法、静态代码块。")])]),t._v(" "),a("blockquote",[a("p",[t._v("getter与setter\n在实例方法中有类特殊的方法，即ge忧er 与se忧er 方法，它们一般不包含任何\n业务逻辑，仅仅是为类成员属性提供读取和修改的方法，这样设计有两点好处I\n（！）满足面向对象语言封装的特’生。尽可能将类中的属性定义为private ，针对\n属性值的访问与修改需要使用相应的getter 与se位er 方法，而不是直接对public 的属\n性进行读取和修改。\n( 2 ）有利于统一控制。虽然直接对属性进行读取、修改的方式和使用相应的\ngetter 与se忧er 方法在效果上是一样的，但是前者难以应对业务的变化。")])]),t._v(" "),a("blockquote",[a("p",[t._v("同步与异步\n同步调用是因刚性调用，是阻塞式操作，必须等待调用方法体执行结束。而异步调\n用是柔性调用，是非阻塞式操作，在执行过程中，如调用其他方法，自己可以继续执\n行而不被阻塞等待方法调用完毕。")])]),t._v(" "),a("blockquote",[a("p",[t._v("覆写\n多态中的overri de ，本书翻译成覆写。如果翻译成重写，那么与重构意思过于\n接近；如果翻译成覆盖，那么少了“写”这个核心动词。\n方法的覆写可以总结成容易记忆的口诀“一大两小两同”。")]),t._v(" "),a("ul",[a("li",[t._v("一大子类的方法访问权限控制符只能相同或变大。")]),t._v(" "),a("li",[t._v("两小，抛出异常和返回值只能变小，能够转型成父类对象。子类的返回值、\n抛出异常类型必须与父类的返回值、抛出异常类型存在继承关系。")]),t._v(" "),a("li",[t._v("两同i 方法名和参数必须完全相同。")])])]),t._v(" "),a("blockquote",[a("p",[t._v("重载\n在同一个类中，如果多个方法有相同的名字、不同的参数，即称为重载，比如一\n个类中有多个构造方法。JVM在重载方法中，选择合适的目标方法的顺\n序如下")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190802120719369.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("blockquote",[a("p",[t._v("泛型\n泛型的本质是类型参数化，解决不确定具体对象类型的问题。在面向对象编程语\n言中，允许程序员在强类型校验下定义某些可变部分，以达到代码复用的目的。")]),t._v(" "),a("ul",[a("li",[t._v("尖捂号里的每个元素都指代一种未知类型。")]),t._v(" "),a("li",[t._v("尖括号的位置非常讲究,必须在类目之后或方法返回值之前")]),t._v(" "),a("li",[t._v("泛型在定义处只具备执行Object方法的能力")]),t._v(" "),a("li",[t._v("对于编译之后的字节码指令,其实没有这些花头花脑的方法签名,充分说明泛型只是一种编写代码时的语法检查")])])]),t._v(" "),a("blockquote",[a("p",[t._v("数据类型\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190802121129306.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190802121156691.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("blockquote",[a("p",[t._v('I ）对象头（Object !leader )\n对象头占用12 个字节，存储内容包括对象标记（markOop ）和类元信息（klassOop ）。\n对象标记存储对象本身运行时的数据，如哈希码、GC 标记、锁信息、线程关联信息等，\n这部分数据在64 位NM 上占用8 个字节，称为"Mark word",为了存储更多的状\n态言息,对象标记的存储恪式是非固定的（具休与JVM 的实现有关）。类元信患、存\n储的是对象指向它的类元数据（即Kl ass ）的首地址’占用4 个字节，与refvar 开销一致。\n( 2 ）实例数据（Instance Data )\n存储本类对象的实例成员变量和所有可见的父类成员变量。如Integer 的实例\n成员只有一个private int value ，占用4 个字节，所以加上对象头为16 个字节1 再\n如，上述示例代码的R巳fObjDemo 对象大小为48 个字节，一个子类RefObjSon 继承\nRefObjDemo ，即使子类内部是空的，n ew RefObjSon 的对象也是占用48 个字节。\n( 3 ）对齐填充（Padding )\n对象的存储空间分配单位是8 个字节，如果一个占用大小为16 个字节的对象，\n增加一个成员变量byte 类型，此时需要占用17 个字节，但是也会分配24 个字节进\n行对齐填充操作。')])]),t._v(" "),a("blockquote",[a("p",[t._v("包装类型\n( I ) 所有的POJO 类属性必须使用包装数据类型\n( 2 ) RPC 方法的返回值和参数必须使用包装数据类型。\n( 3 ）所有的局部变量推荐使用基本数据类型。")])]),t._v(" "),a("blockquote",[a("p",[t._v("字符串\n字符串相关类型主要有三种String 、Strin gBuild 町、Strin gBuffer 。String 是只读\n字符串，典型的immutabl e 对象，对它的任何改动，其实都是创建一个新对象，再把\n引用指向该对象。Strin g 对象赋值操作后，会在常量池中进行缓存，如果下次申请创\n建对象时，缓存中已经存在，贝lj直接返回相应引用给创建者。而StringBuffer 贝lj 可以\n在原对象上进行修改，是线程安全的。JDK5 号｜入的Str i ngBuilder 与StringBuffer 均继\n承自AbstractStringBui Ider ，两个子类的很多方法都是通过飞uper . 方法。”的方式调\n用抽象父类中的方法，此抽象类在内部与String 一样，也是以字符数组的形式存储字\n符串的。StringBuilder 是非线程安全的，把是否需要进行多线程加锁交给工程师决定，\n操作效率比StringBuffer 高。线程安全的对象先产生是因为计算机的发展总是从单线\n程到多线程，从单机到分布式。")])]),t._v(" "),a("h2",{attrs:{id:"三-代码风格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-代码风格"}},[t._v("#")]),t._v(" 三.代码风格")]),t._v(" "),a("h3",{attrs:{id:"_3-1-命名规约"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-命名规约"}},[t._v("#")]),t._v(" 3.1 命名规约")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("包名统使用小写，点分隔符之间有且仅有个自然语义的英语单词。包名\n统一使用单数形式，但是类名如果有复数含义，则可以使用复数形式。")]),t._v(" "),a("li",[t._v("抽象类命名使用Abstract 或Base 开头；异常类命名使用Exception 结尾，测\n试类命名以它要测试的类名开始，以Test 结尾。")]),t._v(" "),a("li",[t._v("类型与中括号紧挨相连来定义数组。")]),t._v(" "),a("li",[t._v("枚举类名带上Enum 后缀，枚举成员名称需要全大写，单词间用下画线隔开")])])]),t._v(" "),a("h4",{attrs:{id:"_3-1-1-常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-常量"}},[t._v("#")]),t._v(" 3.1.1 常量")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("采用字母全部大写、单词之间加下画线的方式。而局部常量采用小驼峰形式即可。")]),t._v(" "),a("li",[t._v("避免魔法值,几乎是固定不变的全局常量采用枚举,普通常量采用不能实例化的抽象类")])])]),t._v(" "),a("h4",{attrs:{id:"_3-1-2-变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-变量"}},[t._v("#")]),t._v(" 3.1.2 变量")]),t._v(" "),a("blockquote",[a("p",[t._v("变量的命名需要满足小驼峰格式，命名体现业务含义即可。存在一种特殊情况，在定义类成员变量时，特别是在POJO 类中，针对布尔类型的变量，命名不要加is 前缀，否则部分框架解析会引起序列化错误。")])]),t._v(" "),a("h3",{attrs:{id:"_3-2-代码展示风格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-代码展示风格"}},[t._v("#")]),t._v(" 3.2 代码展示风格")]),t._v(" "),a("h4",{attrs:{id:"_3-2-1-缩进-空格与空行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-缩进-空格与空行"}},[t._v("#")]),t._v(" 3.2.1 缩进,空格与空行")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("缩进\n采用4 个空恪的缩进方式")]),t._v(" "),a("li",[t._v("空格\n( I ）任何二目,三目运算符的左右两边都必须加一个空格.\n( 2 ）注释的双斜线与注释内容之间有且仅有一个空恪。\n( 3 ）方法参数在定义和传入时，多个参数逗号后面必须加空格。\n( 4 ）没有必要增加若干空格使变量的赋值等号与上一行对应的位置的等号对齐\n( 5 ）如果大括号内为空,则可以简写成{}即可, 大括号中间无需换行和空格\n( 6 ）左右小括号与括号内部的相邻字符之间不要出现空格.\n( 7 )  左大括号前需要加空格")]),t._v(" "),a("li",[t._v("空行\n空行用来分隔功能相似、逻辑内聚、意思相近的代码片段，使得程序布局更加清\n晰")])])]),t._v(" "),a("h4",{attrs:{id:"_3-2-2-换行与高度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-换行与高度"}},[t._v("#")]),t._v(" 3.2.2 换行与高度")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("换行\n约定单行字符数不超过120 个，超出则需要换行，换行时遵循如下原则:\n( I ）第二行相对第一行缩进4个空格,从第三行开始,不再继续缩进，参考示例。\n( 2 ）运算符与下文一起换行。\n( 3 ）方法调用的点符号与下文一起换行。\n( 4 ）方法调用中的多个参数需要换行时，在逗号后换行。\n( 5 ）在括号前不要换行。")]),t._v(" "),a("li",[t._v("方法行数限制\n约定单个方法的总行数不超过80 行")])])]),t._v(" "),a("h4",{attrs:{id:"_3-2-3-控制语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-控制语句"}},[t._v("#")]),t._v(" 3.2.3 控制语句")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("在if,else,for,while,do-while等语句中必须使用大括号.")]),t._v(" "),a("li",[t._v("在条件表达式中不允许有赋值操作,也不允许在判断表达式中出现复杂的逻辑组合.")]),t._v(" "),a("li",[t._v("多级嵌套不能超过三层,对于超过3层的可采用卫语句, 策略模式, 状态模式")]),t._v(" "),a("li",[t._v("避免采用取反逻辑运算符")])])]),t._v(" "),a("h2",{attrs:{id:"四-走进jvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-走进jvm"}},[t._v("#")]),t._v(" 四 走进JVM")]),t._v(" "),a("h3",{attrs:{id:"_4-1-字节码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-字节码"}},[t._v("#")]),t._v(" 4.1 字节码")]),t._v(" "),a("blockquote",[a("p",[t._v("Java 所有的指令有200 个左右，一个字节（8 位）可以存\n储256 种不同的指令信息，一个这样的字节称为字节码（Bytecode ）。在代码的执行\n过程中，NM 将字节码解释执行，屏蔽对底层操作系统的依赖l NM 也可以将字节\n码编译执行，如果是热点代码，会通过刀T 动态地编译为机器码，提高执行效率")])]),t._v(" "),a("h3",{attrs:{id:"_4-2-类加载过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-类加载过程"}},[t._v("#")]),t._v(" 4.2 类加载过程")]),t._v(" "),a("blockquote",[a("p",[t._v("第一步，Load 阶段读取类文件产生二进制流，并转化为特定的数据结构，初步\n校验cafe babe 魔法数、常量池、文件长度、是否有父类等，然后创建对应类的Java.\nJang.Class 实例。\n第二步，Link 阶段包括验证、准备、解析三个步骤。验证是更详细的校验，比\n如final 是否合规、类型是否正确、静态变量是否合理等i 准备阶段是为静态变量分\n配内存，并设定默认值，解析类和方法确保类与类之间的相互引用正确性，完成内存\n结构布局。\n第三步，Init 阶段执行类构造器＜clinit> 方法，如果赋值运算是通过其他类的静\n态方法来完成的，那么会马上解析另外个类，在虚拟机枪中执行完毕后通过返回值\n进行赋值。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191021184455798.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191021184529957.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),t._v(" "),a("h3",{attrs:{id:"_4-3-内存布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-内存布局"}},[t._v("#")]),t._v(" 4.3 内存布局")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191021184615718.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("Heap(堆区)\nHeap 是OOM 故障最主要的发源地，它存储着几乎所有的实例对象，堆由垃圾\n收集器自动回收，堆区由各子线程共享使用。通常情况下，它占用的空间是所有内存\n区域中最大的，但如果无节制地创建大量对象，也窑易消耗完所有的空间。堆的内存\n空间既可以固定大小，也可以在运行时动态地调整，通过如下参数设定初始值和最大\n值，比如－Xms256M -Xmxl024M ，其中－X 表示它是JVM 运行参数，ms 是memory\nstart 的简称，mx 是memory max 的简称，分别代表最小堆窑量和最大堆窑量。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191021184812710.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("li",[t._v("Metaspace (元空间\n早在JDK8版本中，无空间的前身Perm 区已经被淘汰。在JDK7 及之前的版本中，只有Hotspot\n才有Perm 区，译为永久代，它在启动时固定大小，很难进行调优，并且FGC 时会移\n动类无信息。在某些场景下，如果动态加载类过多，容易产生Perm 区的OOM 。\n区别于永久代，元空间在本地内存中分配。在JDK8 里，Perm 区中的所有内容\n中字符串常量移至堆内存，其他内容包括类元信息、字段、静态属性、方法、常量等\n都移动至无空间内，比如图4-10 中的0均ect 类元信息、静态属性System.out 、整型\n常量10000000 等。图4-10 中显示在常量池中的Strir 毡，其实际对象是被保存在堆内\n存中的。")])])]),t._v(" "),a("blockquote",[a("ol",{attrs:{start:"3"}},[a("li",[t._v("JVM Stack ( 虚拟机栈）\n栈（Stack ）是－个先进后出的数据结构，就像子弹的弹夹，最后压入的子弹先发射，\n压在底部的子弹最后发射，撞针只能访问位于顶部的那一颗子弹。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191021185109370.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])])]),t._v(" "),a("blockquote",[a("ol",{attrs:{start:"4"}},[a("li",[t._v("Native Method Stacks （本地方法栈）\n本地方法栈（Native Method Stack ）在JVM 内存布局中，也是结程对象私有的，\n但是虚拟机栈“主内”，而本地方法栈“主外”。")])])]),t._v(" "),a("blockquote",[a("ol",{attrs:{start:"5"}},[a("li",[t._v("Program Counter Register （程序计数寄存器）\n每个线程在创建后，都会产生自己的程序计数器和枝帧，程序计数器用来存放执行指令的偏移量和行号指示器等，线程执行或恢复都要依赖程序计数器。程序计数器在各个线程之间互不影响，此区域也不会发生内存溢出异常。")])])]),t._v(" "),a("blockquote",[a("p",[t._v("最后，从线程共享的角度来看，堆和元空间是所有线程共享的，而虚拟机枝、本\n地方法枝、程序计数器是线程内部私有的，从这个角度看下Java 内存结构，如图4-12\n所示。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191021185401437.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),t._v(" "),a("h3",{attrs:{id:"_4-4-对象实例化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-对象实例化"}},[t._v("#")]),t._v(" 4.4 对象实例化")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191021185431259.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("h3",{attrs:{id:"_4-5-垃圾回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-垃圾回收"}},[t._v("#")]),t._v(" 4.5 垃圾回收")]),t._v(" "),a("blockquote",[a("p",[t._v("Java 会对内存进行自动分配与回收管理，使上层业务更加安全，方便地使用内存\n实现程序逻辑。在不同的口爪4 实现及不同的回收机制中，堆内存的划分方式是不一\n样的,垃圾回收的主要目的是清除不再使用的对象，自动释放内存。")])]),t._v(" "),a("h2",{attrs:{id:"异常与日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常与日志"}},[t._v("#")]),t._v(" 异常与日志")]),t._v(" "),a("h3",{attrs:{id:"_5-1-异常分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-异常分类"}},[t._v("#")]),t._v(" 5.1 异常分类")]),t._v(" "),a("blockquote",[a("p",[t._v("JDK 中定义了套完整的异常机制，所有异常都是Throwable 的子类，分\n为Error （致命异常）和Exception （非致命异常）。Error 是一种非常特殊的异\n常类型，它的出现标识着系统发生了不可控的错误，例如StackOverflowError 、\nOutO岛1 emoryEηor 。针对此类错误，程序无法处理，只能人工介入。Exception 又分\n为ch ecked 异常（受检异常）和unchecked 异常（非受检异常）。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191021191537986.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2VxcXRr,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),t._v(" "),a("h3",{attrs:{id:"_5-2-try-代码块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-try-代码块"}},[t._v("#")]),t._v(" 5.2 try 代码块")]),t._v(" "),a("blockquote",[a("p",[t._v("try-catch-finally 是处理程序异常的三部曲。当存在try 时，可以只有catch 代码块，\n也可以只有finally 代码块，就是不能单独只有try 这个光杆司令。")])]),t._v(" "),a("h3",{attrs:{id:"_5-3-异常的接与抛"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-异常的接与抛"}},[t._v("#")]),t._v(" 5.3 异常的接与抛")]),t._v(" "),a("blockquote",[a("p",[t._v("契约式编程理念就完全处于防御式编程理念的下风，\n所以我们推荐方法的返回值可以为null ，不强制返回空集合或者空对象等，但是必须\n添加注释充分说明什么情况下会返回null 值。防止NP E 定是调用方的责任，需要\n调用方进行事先判断。")])]),t._v(" "),a("h3",{attrs:{id:"_5-4-日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-日志"}},[t._v("#")]),t._v(" 5.4 日志")]),t._v(" "),a("blockquote",[a("p",[t._v("记录应用系统曰志主要有三个原因记录操作轨迹、监控系统运行状况、\n回溯系统故障。")])]),t._v(" "),a("h4",{attrs:{id:"_5-4-1-日志规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-1-日志规范"}},[t._v("#")]),t._v(" 5.4.1 日志规范")]),t._v(" "),a("blockquote",[a("p",[t._v("应用中的扩展日志命名方式应该有统－\n的约定，通过命名能直观明了地表明当前日志文件是什么功能，如监控、访问日志\n等。推荐的日志文件命名方式为appName_logType logName.log 。其中，log Type 为\n日志类型，推荐分类有stats 、monitor 、visit 等，logNam e 为日志描述。这种命名的\n好处是通过文件名就可以知道曰志文件属于什么应用，什么类型，什么目的，也有利\n于归类查找。例如，mppserv er 应用中单独监控时区转换异常的日志文件名定义为\nmppserver "),a("em",[t._v("monitor")]),t._v(" timeZoneConvert.log 。")])]),t._v(" "),a("blockquote",[a("p",[t._v("代码规约推荐曰志文件至少保存1 5 天，可以根据日志文件的重要程度、\n文件大小及磁盘空间再自行延长保存时间。")])]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("预先判断曰志级别")]),t._v(" "),a("li",[t._v("避免无效日志打印")]),t._v(" "),a("li",[t._v("区别对待错误日志")]),t._v(" "),a("li",[t._v("保证记录内容完整")])])]),t._v(" "),a("h4",{attrs:{id:"_5-4-2-日志框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-2-日志框架"}},[t._v("#")]),t._v(" 5.4.2 日志框架")]),t._v(" "),a("blockquote",[a("p",[t._v("日志框架分为三大部分，包括日志门面、曰志适配器、日志库。")])]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("日志门面\n门面设计模式是面向对象设计模式中的一种，日志框架采用的就是这种模式，类\n似JDB C 的设计理念。它只提供一套接口规范，自身不负责日志功能的实现，目的是\n让使用者不需要关注底层具体是哪个日志库来负责日志打印及具体的使用细节等。目\n前用得最为广泛的曰志门面有两种slf4j 和commons -logging 。")]),t._v(" "),a("li",[t._v("日志库\n它具体实现了日志的相关功能，主流的日志库有三个，分别是log4j 、log -jdk 、\nlogback 。最早Java 要想记录曰志只能通过System.out 或System.err 来完成，非常不方便。\nlog4j 就是为了解决这一问题而提出的，它是最早诞生的曰志库。接着JD K 也在1 .4 版\n本引入了一个日志库Java. util.logging. Logger.，简称log-dk。这样市面上就出现两种日志\n功能的实现，开发者在使用时需要关注所使用的日志库的具体细节。logback 是最晚出\n现的，它与log4j 出自同一个作者，是log4j的升级版且本身就实现了slf4j的接口。")]),t._v(" "),a("li",[t._v("日志适配器\n曰志适配器分两种场景\n( I ）日志门面适配器，因为slf4j规范是后来提出的此之前的日志库是没有\n实现slf4j的接口的，例如log4j ；所以在工程里要想使用slf4j +log4j 的模式，就额\n外需要个适配器（slf4j-log4j12 来解决接口不兼容的问题。\n( 2 ）日志库适配器，在一些老的工程里，一开始为了开发简单而直接使用了日志库API来完成曰志打印，随着时间的推移想将原来直接调用日志库的模式改为业界标准的门面模式（例如slf4j +logback 组合），但老工程代码里打印曰志的地方太多，难以改动，所以需要个运队器来完成从旧日志库的API 到slf4j 的路由，这样在不改动原有代码的情况l、也能使用slf4j叫来统一管理曰志，而日后续自由替换具体日志库也不成可题。")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);