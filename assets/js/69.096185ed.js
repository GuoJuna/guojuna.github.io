(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{547:function(e,a,t){"use strict";t.r(a);var r=t(0),s=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"docker-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-简介"}},[e._v("#")]),e._v(" Docker 简介")]),e._v(" "),a("p",[e._v("Docker 是世界领先的软件容器平台。开发人员利用 Docker 可以消除协作编码时“在我的机器上可正常工作”的问题。运维人员利用 Docker 可以在隔离容器中并行运行和管理应用，获得更好的计算密度。企业利用 Docker 可以构建敏捷的软件交付管道，以更快的速度、更高的安全性和可靠的信誉为 Linux 和 Windows Server 应用发布新功能。")]),e._v(" "),a("h2",{attrs:{id:"docker安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[e._v("#")]),e._v(" Docker安装")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#查看系统信息 centos\ncat /etc/redhat-release\n")])])]),a("h3",{attrs:{id:"centos-7-使用yum进行安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-7-使用yum进行安装"}},[e._v("#")]),e._v(" CentOS 7 (使用yum进行安装)")]),e._v(" "),a("ol",[a("li",[e._v("删除旧版本")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo yum remove docker \\\n                  docker-client \\\n                  docker-client-latest \\\n                  docker-common \\\n                  docker-latest \\\n                  docker-latest-logrotate \\\n                  docker-logrotate \\\n                  docker-engine\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("安装存储库拓展包和设定存储库")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo yum install -y yum-utils\n\nsudo yum-config-manager \\\n    --add-repo \\\n    https://download.docker.com/linux/centos/docker-ce.repo\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("安装三个包 其中，docker-ce 是docker 的程序包；docker-ce-cli 是 docker 的工具包；containerd.io 是系统和 docker 的 api 的守护进程")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo yum install docker-ce docker-ce-cli containerd.io\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("启动docker")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo systemctl start docker\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("设置开机自启动")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo systemctl enable docker\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("配置镜像加速器")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('sudo mkdir -p /etc/docker\nsudo tee /etc/docker/daemon.json <<-\'EOF\'\n{\n  "registry-mirrors": ["https://dkcvnb0h.mirror.aliyuncs.com"]\n}\nEOF\nsudo systemctl daemon-reload\nsudo systemctl restart docker\n')])])]),a("ol",{attrs:{start:"7"}},[a("li",[e._v("验证docker")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker version\n")])])]),a("h2",{attrs:{id:"docker-hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-hello-world"}},[e._v("#")]),e._v(" Docker Hello world")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 1.拉取Hello world镜像\ndocker pull library/hello-world\n\n# 2.查看Hello world\ndocker images\n\n# 3.运行Hello world\ndocker run hello-world\n")])])]),a("h2",{attrs:{id:"docker-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-常用命令"}},[e._v("#")]),e._v(" Docker 常用命令")]),e._v(" "),a("h4",{attrs:{id:"镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像"}},[e._v("#")]),e._v(" 镜像")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 搜索镜像\ndocker search <image> # 在 docker index 中搜索 image\n# 下载镜像\ndocker pull <image> # 从 docker registry server 中下拉 image\n# 查看镜像\ndocker images： #列出 images\ndocker images -a #列出所有的 images（包含历史）\ndocker rmi <image ID>： #删除一个或多个 image\n")])])]),a("h4",{attrs:{id:"容器的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器的使用"}},[e._v("#")]),e._v(" 容器的使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 使用镜像创建容器\ndocker run -itd --name centos_aways --restart=always centos\n#创建一个名称 centos_aways 的容器，自动重启\n# --restart 参数：always 始终重启；on-failure 退出状态非 0 时重启；默认为，no 不重\n\n#查看容器\ndocker ps ：列出当前所有正在运行的 container\ndocker ps -l ：列出最近一次启动的 container\ndocker ps -a ：列出所有的 container（包含历史，即运行过的 container）\ndocker ps -q ：列出最近一次运行的 container ID\n\n# 再次启动容器\ndocker start/stop/restart <container> #：开启/停止/重启 container\ndocker start [container_id] #：再次运行某个 container （包括历史 container）\n#进入正在运行的 docker 容器\ndocker exec -it [container_id] /bin/bash\n\n# 删除容器\ndocker rm <container...> #：删除一个或多个 container\ndocker rm `docker ps -aq` #：删除所有的 container\ndocker ps -aq | xargs docker rm #：同上, 删除所有的 container\n创建容器基础的命令格式\n\n")])])]),a("h4",{attrs:{id:"其他命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他命令"}},[e._v("#")]),e._v(" 其他命令")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#给镜像添加一一个软链接并改名和标签:\ndocker tag [oldname:tag] [newname:tag]\n\n#容器和宿主机之间文件复制\ndocker cp [文件目录容器 ID:内部路径]\ndocker cp [容器 ID:内部路径文件目录\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);