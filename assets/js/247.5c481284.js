(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{724:function(n,t,e){"use strict";e.r(t);var L=e(0),l=Object(L.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("ol",[t("li",[t("p",[t("em",[t("strong",[n._v("【强制】")])]),n._v(" 不要使用count(列名)或count(常量)来替代count("),t("em",[n._v(")，count(")]),n._v(")是SQL92定义的标\n准统计行数的语法，跟数据库无关，跟NULL和非NULL无关。\n说明：count(*)会统计值为NULL的行，而count(列名)不会统计此列为NULL值的行。")])]),n._v(" "),t("li",[t("p",[t("em",[t("strong",[n._v("【强制】")])]),n._v(" count(distinct col) 计算该列除NULL之外的不重复行数，注意 count(distinct col1,\ncol2) 如果其中一列全为NULL，那么即使另一列有不同的值，也返回为 0 。")])]),n._v(" "),t("li",[t("p",[t("em",[t("strong",[n._v("【强制】")])]),n._v(" 当某一列的值全是NULL时，count(col)的返回结果为 0 ，但sum(col)的返回结果为\nNULL，因此使用sum()时需注意NPE问题。\n正例：可以使用如下方式来避免sum的NPE问题：SELECT IFNULL(SUM(column), 0) FROM table;")])]),n._v(" "),t("li",[t("p",[t("em",[t("strong",[n._v("【强制】")])]),n._v(" 使用ISNULL()来判断是否为NULL值。\n说明：NULL与任何值的直接比较都为NULL。\n1 ） NULL<>NULL的返回结果是NULL，而不是false。\n2 ） NULL=NULL的返回结果是NULL，而不是true。\n3 ） NULL<>1的返回结果是NULL，而不是true。\n反例：在SQL语句中，如果在null前换行，影响可读性。select * from table where column1 is null and\ncolumn3 is not null; 而"),t("code",[n._v("ISNULL(column)")]),n._v("是一个整体，简洁易懂。从性能数据上分析，"),t("code",[n._v("ISNULL(column)")]),n._v("\n执行效率更快一些。")])]),n._v(" "),t("li",[t("p",[t("em",[t("strong",[n._v("【强制】")])]),n._v(" 代码中写分页查询逻辑时，若count为 0 应直接返回，避免执行后面的分页语句。")])]),n._v(" "),t("li",[t("p",[t("em",[t("strong",[n._v("【强制】")])]),n._v(" 不得使用外键与级联，一切外键概念必须在应用层解决。\n说明：（概念解释）学生表中的student_id是主键，那么成绩表中的student_id则为外键。如果更新学\n生表中的student_id，同时触发成绩表中的student_id更新，即为级联更新。外键与级联更新适用于单机\n低并发，不适合分布式、高并发集群；级联更新是强阻塞，存在数据库更新风暴的风险；外键影响数据库\n的插入速度。")])]),n._v(" "),t("li",[t("p",[t("em",[t("strong",[n._v("【强制】")])]),n._v(" 禁止使用存储过程，存储过程难以调试和扩展，更没有移植性。")])]),n._v(" "),t("li",[t("p",[t("em",[t("strong",[n._v("【强制】")])]),n._v(" 数据订正（特别是删除或修改记录操作）时，要先select，避免出现误删除，确认无\n误才能执行更新语句。")])]),n._v(" "),t("li",[t("p",[t("em",[t("strong",[n._v("【强制】")])]),n._v(" 对于数据库中表记录的查询和变更，只要涉及多个表，都需要在列名前加表的别名（或\n表名）进行限定。\n说明：对多表进行查询记录、更新记录、删除记录时，如果对操作列没有限定表的别名（或表名），并且\n操作列在多个表中存在时，就会抛异常。\n正例：select t1.name from table_first as t1 , table_second as t2 where t1.id=t2.id;\n反例：在某业务中，由于多表关联查询语句没有加表的别名（或表名）的限制，正常运行两年后，最近在\n某个表中增加一个同名字段，在预发布环境做数据库变更后，线上查询语句出现出 1052 异常：Column\n'name' in field list is ambiguous。")])]),n._v(" "),t("li",[t("p",[t("strong",[n._v("【推荐】")]),n._v(" SQL语句中表的别名前加as，并且以t1、t2、t3、...的顺序依次命名。\n说明： 1 ）别名可以是表的简称，或者是依照表在SQL语句中出现的顺序，以t1、t2、t3的方式命名。 2 ）\n别名前加as使别名更容易识别。\n正例：select t1.name from table_first as t1, table_second as t2 where t1.id=t2.id;")])]),n._v(" "),t("li",[t("p",[t("strong",[n._v("【推荐】")]),n._v(" in操作能避免则避免，若实在避免不了，需要仔细评估in后边的集合元素数量，控\n制在 1000 个之内。")])]),n._v(" "),t("li",[t("p",[n._v('【参考】因国际化需要，所有的字符存储与表示，均采用utf 8 字符集，那么字符计数方法需\n要注意。\n说明：\nSELECT LENGTH("轻松工作")； 返回为 12\nSELECT CHARACTER_LENGTH("轻松工作")； 返回为 4\n如果需要存储表情，那么选择utf 8 mb4来进行存储，注意它与utf 8 编码的区别。')])]),n._v(" "),t("li",[t("p",[t("em",[n._v("【参考】")]),n._v(" TRUNCATE TABLE 比 DELETE 速度快，且使用的系统和事务日志资源少，但TRUNCATE\n无事务且不触发trigger，有可能造成事故，故不建议在开发代码中使用此语句。\n说明：TRUNCATE TABLE 在功能上与不带 WHERE 子句的 DELETE 语句相同。")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);