(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{673:function(t,a,o){"use strict";o.r(a);var n=o(0),s=Object(n.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h2",{attrs:{id:"tomcat重启脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tomcat重启脚本"}},[this._v("#")]),this._v(" tomcat重启脚本")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("#! /bin/bash\n#这里配置tomcat的根路径\ntomcat_home=/usr/local/tomcat-9090\nSHUTDOWN=$tomcat_home/bin/shutdown.sh\necho \"Close $tomcat_home\"\n#$SHUTDOWN\n#杀掉tomcat进程\nps -ef |grep tomcat |grep $tomcat_home |grep -v 'grep'|awk '{print $2}' | xargs kill -9\n#删除日志文件，如果你不想删除可以不要下面一行\n#rm  $tomcat_home/logs/* -rf\n#删除tomcat的临时目录\n#rm  $tomcat_home/work/* -rf\n#暂停5s\nsleep 5\necho \"Start $tomcat_home\"\n#跳转到tomcat/bin路径\ncd $tomcat_home/bin/\n#执行启动tomcat命令\n./startup.sh\n#查看tomcat日志\n#tail -f $tomcat_home/logs/catalina.out\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);