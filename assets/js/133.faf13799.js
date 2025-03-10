(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{609:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"需求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[t._v("#")]),t._v(" 需求")]),t._v(" "),e("p",[t._v("A邀请B  B邀请C C邀请D D邀请E 无限邀请层级\n想根据A查出 BCD\n根据B 查出CD\n根据C 查出D")]),t._v(" "),e("h2",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("邻接表:依赖父节点")])]),t._v(" "),e("li",[e("p",[t._v("路径枚举")])]),t._v(" "),e("li",[e("p",[t._v("嵌套集")])]),t._v(" "),e("li",[e("p",[t._v("闭包表")])])]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("最后选择领接表的方案")]),t._v(" "),e("ul",[e("li",[t._v("表数量少")]),t._v(" "),e("li",[t._v("表设计简单")])]),t._v(" "),e("h3",{attrs:{id:"创建表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建表"}},[t._v("#")]),t._v(" 创建表")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("CREATE TABLE `sp_member_relation` (\n  `p_open_id` varchar(50) NOT NULL COMMENT '邀请人openId',\n  `p_tel` varchar(11) DEFAULT NULL COMMENT '邀请人电话',\n  `open_id` varchar(50) NOT NULL COMMENT '被邀请人openId',\n  `tel` varchar(11) DEFAULT NULL COMMENT '被邀请人tel',\n  `create_time` datetime DEFAULT NULL COMMENT '创建时间',\n  PRIMARY KEY (`p_open_id`,`open_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='会员关系';\n")])])]),e("h3",{attrs:{id:"获取所有子节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取所有子节点"}},[t._v("#")]),t._v(" 获取所有子节点")]),t._v(" "),e("p",[t._v("创建mysql 函数获取所有子节点")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("DELIMITER $$\nUSE `pv_web2`$$\n\nDROP FUNCTION\nIF EXISTS `getChildList`$$\n\nCREATE DEFINER = `root`@`%` FUNCTION `getChildList` (rootId VARCHAR(50)) RETURNS VARCHAR (4000) CHARSET utf8\nBEGIN\n\tDECLARE\n\t\tsChildList VARCHAR (4000) ; DECLARE\n\t\t\tsChildTemp VARCHAR (4000) ;\n\t\tSET sChildTemp = rootId;\n\t\tWHILE sChildTemp IS NOT NULL DO\n\n\t\tIF (sChildList IS NOT NULL) THEN\n\n\t\tSET sChildList = CONCAT(sChildList, ',', sChildTemp) ;\n\t\tELSE\n\n\t\tSET sChildList = CONCAT(sChildTemp) ;\n\t\tEND\n\t\tIF ; SELECT\n\t\t\tGROUP_CONCAT(open_id) INTO sChildTemp\n\t\tFROM\n\t\t\tsp_member_relation\n\t\tWHERE\n\t\t\tFIND_IN_SET(p_open_id, sChildTemp) > 0 ;\n\t\tEND\n\t\tWHILE ; RETURN sChildList ; END$$\n\nDELIMITER ;\n")])])]),e("p",[t._v("使用函数")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from sp_member_relation where FIND_IN_SET(p_open_id, getChildList(#{openId,jdbcType=VARCHAR}))\n")])])]),e("h3",{attrs:{id:"获取所有父节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取所有父节点"}},[t._v("#")]),t._v(" 获取所有父节点")]),t._v(" "),e("p",[t._v("创建函数")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("DELIMITER $$\nUSE `pv_web2`$$\n\nDROP FUNCTION\nIF EXISTS `getSupList`$$\n\nCREATE DEFINER = `root`@`%` FUNCTION `getSupList` (rootId VARCHAR(50)) RETURNS VARCHAR (4000) CHARSET utf8\nBEGIN\n\tDECLARE\n\t\tsChildList VARCHAR (4000) ; DECLARE\n\t\t\tsChildTemp VARCHAR (4000) ;\n\t\tSET sChildTemp = rootId;\n\t\tWHILE sChildTemp IS NOT NULL DO\n\n\t\tIF (sChildList IS NOT NULL) THEN\n\n\t\tSET sChildList = CONCAT(sChildList, ',', sChildTemp) ;\n\t\tELSE\n\n\t\tSET sChildList = CONCAT(sChildTemp) ;\n\t\tEND\n\t\tIF ; SELECT\n\t\t\tGROUP_CONCAT(p_open_id) INTO sChildTemp\n\t\tFROM\n\t\t\tsp_member_relation\n\t\tWHERE\n\t\t\tFIND_IN_SET(open_id, sChildTemp) > 0 ;\n\t\tEND\n\t\tWHILE ; RETURN sChildList ; END$$\n\nDELIMITER ;\n")])])]),e("p",[t._v("使用函数")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('select * from sp_member_relation where FIND_IN_SET(open_id, getSupList("44"));\n')])])]),e("h2",{attrs:{id:"问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),e("ul",[e("li",[t._v("如果数据链成环,会产出死循环问题")]),t._v(" "),e("li",[t._v("导入阿里云会提示"),e("strong",[t._v("Access denied; you need (at least one of) the SUPER privilege(s) for this operation")]),t._v(" 阿里云这边不支持 这样的操作 把代码"),e("strong",[t._v("DEFINER=root@%")]),t._v(" 去掉之后，重新导入。")])]),t._v(" "),e("blockquote",[e("p",[t._v("https://blog.csdn.net/sinat_33261247/article/details/91492396")])]),t._v(" "),e("ul",[e("li",[t._v("会缺少数据 group_concat_max_len默认1024")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SET GLOBAL group_concat_max_len = 400000\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);