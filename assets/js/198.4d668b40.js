(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{607:function(n,e,r){"use strict";r.r(e);var o=r(0),s=Object(o.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("ol",[e("li",[e("p",[e("em",[e("strong",[n._v("【强制】")])]),n._v(' 前后端交互的API，需要明确协议、域名、路径、请求方法、请求内容、状态码、响\n应体。\n说明：\n1 ） 协议：生产环境必须使用HTTPS。\n2 ） 路径：每一个API需对应一个路径，表示API具体的请求地址：\na） 代表一种资源，只能为名词，推荐使用复数，不能为动词，请求方法已经表达动作意义。\nb） URL路径不能使用大写，单词如果需要分隔，统一使用下划线。\nc） 路径禁止携带表示请求内容类型的后缀，比如".json",".xml"，通过accept头表达即可。\n3 ） 请求方法：对具体操作的定义，常见的请求方法如下：\na） GET：从服务器取出资源。\nb） POST：在服务器新建一个资源。\nc） PUT：在服务器更新资源。\nd） DELETE：从服务器删除资源。\n4 ） 请求内容：URL带的参数必须无敏感信息或符合安全要求；body里带参数时必须设置Content-Type。\n5 ） 响应体：响应体body可放置多种数据类型，由Content-Type头来确定。')])]),n._v(" "),e("li",[e("p",[e("em",[e("strong",[n._v("【强制】")])]),n._v(" 前后端数据列表相关的接口返回，如果为空，则返回空数组[]或空集合{}。\n说明：此条约定有利于数据层面上的协作更加高效，减少前端很多琐碎的null判断。")])]),n._v(" "),e("li",[e("p",[e("em",[e("strong",[n._v("【强制】")])]),n._v(" 服务端发生错误时，返回给前端的响应信息必须包含HTTP状态码，errorCode、\nerrorMessage、用户提示信息四个部分。\n说明：四个部分的涉众对象分别是浏览器、前端开发、错误排查人员、用户。其中输出给用户的提示信息\n要求：简短清晰、提示友好，引导用户进行下一步操作或解释错误原因，提示信息可以包括错误原因、上\n下文环境、推荐操作等。 errorCode：参考 "),e("strong",[n._v("附表 3")]),n._v(" 。errorMessage：简要描述后端出错原因，便于错误排\n查人员快速定位问题，注意不要包含敏感数据信息。\n正例：常见的HTTP状态码如下\n1 ） 200 OK: 表明该请求被成功地完成，所请求的资源发送到客户端。\n2 ） 401 Unauthorized: 请求要求身份验证，常见对于需要登录而用户未登录的情况。\n3 ） 403 Forbidden：服务器拒绝请求，常见于机密信息或复制其它登录用户链接访问服务器的情况。\n4 ） 404 Not Found: 服务器无法取得所请求的网页，请求资源不存在。\n5 ） 500 Internal Server Error: 服务器内部错误。")])]),n._v(" "),e("li",[e("p",[e("em",[e("strong",[n._v("【强制】")])]),n._v(" 在前后端交互的JSON格式数据中，所有的key必须为小写字母开始的\nlowerCamelCase风格，符合英文表达习惯，且表意完整。\n正例：errorCode / errorMessage / assetStatus / menuList / orderList / configFlag\n反例：ERRORCODE / ERROR_CODE / error_message / error-message / errormessage /\nErrorMessage / msg")])]),n._v(" "),e("li",[e("p",[e("em",[e("strong",[n._v("【强制】")])]),n._v(' errorMessage是前后端错误追踪机制的体现，可以在前端输出到type="hidden"\n文字类控件中，或者用户端的日志中，帮助我们快速地定位出问题。')])]),n._v(" "),e("li",[e("p",[e("em",[e("strong",[n._v("【强制】")])]),n._v(" 对于需要使用超大整数的场景，服务端一律使用String字符串类型返回，禁止使用\nLong类型。\n说明：Java服务端如果直接返回Long整型数据给前端，JS会自动转换为Number类型（注：此类型为双\n精度浮点数，表示原理与取值范围等同于Java中的Double）。Long类型能表示的最大值是 2 的 63 次方")])])]),n._v(" "),e("ul",[e("li",[n._v('1 ，在取值范围之内，超过 2 的 53 次方 (9007199254740992)的数值转化为JS的Number时，有些数\n值会有精度损失。扩展说明，在Long取值范围内，任何 2 的指数次整数都是绝对不会存在精度损失的，所\n以说精度损失是一个概率问题。若浮点数尾数位与指数位空间不限，则可以精确表示任何整数，但很不幸，\n双精度浮点数的尾数位只有 52 位。\n反例：通常在订单号或交易号大于等于 16 位，大概率会出现前后端单据不一致的情况，比如，"orderId":\n362909601374617692 ，前端拿到的值却是: 36290960137461766 0 。')])]),n._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[e("em",[e("strong",[n._v("【强制】")])]),n._v(" HTTP请求通过URL传递参数时，不能超过 2048 字节。\n说明：不同浏览器对于URL的最大长度限制略有不同，并且对超出最大长度的处理逻辑也有差异， 2048\n字节是取所有浏览器的最小值。")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("反例：某业务将退货的商品id列表放在URL中作为参数传递，当一次退货商品数量过多时，URL参数超长，\n传递到后端的参数被截断，导致部分商品未能正确退货。\n")])])]),e("ol",{attrs:{start:"8"}},[e("li",[e("em",[e("strong",[n._v("【强制】")])]),n._v(" HTTP请求通过body传递内容时，必须控制长度，超出最大长度后，后端解析会出\n错。\n说明：nginx默认限制是1MB，tomcat默认限制为2MB，当确实有业务需要传较大内容时，可以通过调\n大服务器端的限制。")]),n._v(" "),e("li",[e("em",[e("strong",[n._v("【强制】")])]),n._v(" 在翻页场景中，用户输入参数的小于 1 ，则前端返回第一页参数给后端；后端发现用\n户输入的参数大于总页数，直接返回最后一页。")]),n._v(" "),e("li",[e("em",[e("strong",[n._v("【强制】")])]),n._v(" 服务器内部重定向必须使用forward；外部重定向地址必须使用URL统一代理模块\n生成，否则会因线上采用HTTPS协议而导致浏览器提示“不安全”，并且还会带来URL维护\n不一致的问题。")]),n._v(" "),e("li",[e("strong",[n._v("【推荐】")]),n._v(' 服务器返回信息必须被标记是否可以缓存，如果缓存，客户端可能会重用之前的请求\n结果。\n说明：缓存有利于减少交互次数，减少交互的平均延迟。\n正例：http 1.1中，s-maxage告诉服务器进行缓存，时间单位为秒，用法如下，\nresponse.setHeader("Cache-Control", "s-maxage=" + cacheSeconds);')]),n._v(" "),e("li",[e("strong",[n._v("【推荐】")]),n._v(" 服务端返回的数据，使用JSON格式而非XML。\n说明：尽管HTTP支持使用不同的输出格式，例如纯文本，JSON，CSV，XML，RSS甚至HTML。如果我\n们使用的面向用户的服务，应该选择JSON作为通信中使用的标准数据交换格式，包括请求和响应。此外，\napplication/JSON是一种通用的MIME类型，具有实用、精简、易读的特点。")]),n._v(" "),e("li",[e("strong",[n._v("【推荐】")]),n._v(' 前后端的时间格式统一为"yyyy-MM-dd HH:mm:ss"，统一为GMT。')]),n._v(" "),e("li",[e("em",[n._v("【参考】")]),n._v(" 在接口路径中不要加入版本号，版本控制在HTTP头信息中体现，有利于向前兼容。\n说明：当用户在低版本与高版本之间反复切换工作时，会导致迁移复杂度升高，存在数据错乱风险。")])])])}),[],!1,null,null,null);e.default=s.exports}}]);