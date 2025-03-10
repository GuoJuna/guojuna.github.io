(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{548:function(a,e,t){"use strict";t.r(e);var s=t(0),r=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"from-指定基础镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from-指定基础镜像"}},[a._v("#")]),a._v(" FROM 指定基础镜像")]),a._v(" "),e("p",[a._v("FROM 指令用于指定其后构建新镜像所使用的基础镜像。FROM 指令必是 Dockerfile 文件中的首条命令，启动构建流程后，Docker 将会基于该镜像构建新镜像，FROM 后的命令也会基于这个基础镜像。\nFROM语法格式为：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("FROM <image>\n")])])]),e("p",[a._v("或")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("FROM <image>:<tag>\n")])])]),e("p",[a._v("或")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("FROM <image>:<digest>\n")])])]),e("p",[a._v("通过 FROM 指定的镜像，可以是任何有效的基础镜像。FROM 有以下限制：")]),a._v(" "),e("ul",[e("li",[a._v("FROM 必须 是 Dockerfile 中第一条非注释命令")]),a._v(" "),e("li",[a._v("在一个 Dockerfile 文件中创建多个镜像时，FROM 可以多次出现。只需在每个新命令 FROM 之前，记录提交上次的镜像 ID。")]),a._v(" "),e("li",[a._v("tag 或 digest 是可选的，如果不使用这两个值时，会使用 latest 版本的基础镜像")])]),a._v(" "),e("h2",{attrs:{id:"run-执行命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-执行命令"}},[a._v("#")]),a._v(" RUN 执行命令")]),a._v(" "),e("p",[a._v("在镜像的构建过程中执行特定的命令，并生成一个中间镜像。格式:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('#shell格式\nRUN <command>\n#exec格式\nRUN ["executable", "param1", "param2"]\n')])])]),e("ul",[e("li",[a._v("RUN 命令将在当前 image 中执行任意合法命令并提交执行结果。命令执行提交后，就会自动执行 Dockerfile 中的下一个指令。")]),a._v(" "),e("li",[a._v("层级 RUN 指令和生成提交是符合 Docker 核心理念的做法。它允许像版本控制那样，在任意一个点，对 image 镜像进行定制化构建。")]),a._v(" "),e("li",[a._v("RUN 指令创建的中间镜像会被缓存，并会在下次构建中使用。如果不想使用这些缓存镜像，可以在构建时指定 --no-cache 参数，如：docker build --no-cache。")])]),a._v(" "),e("h2",{attrs:{id:"copy-复制文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copy-复制文件"}},[a._v("#")]),a._v(" COPY 复制文件")]),a._v(" "),e("p",[a._v("格式：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('COPY <源路径>... <目标路径>\nCOPY ["<源路径1>",... "<目标路径>"]\n')])])]),e("p",[a._v("和 RUN 指令一样，也有两种格式，一种类似于命令行，一种类似于函数调用。COPY 指令将从构建上下文目录中 <源路径> 的文件/目录复制到新的一层的镜像内的<目标路径>位置")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("COPY package.json /usr/src/app/\n")])])]),e("p",[a._v("<源路径>可以是多个，甚至可以是通配符，其通配符规则要满足 Go 的 filepath.Match 规则，如：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("COPY hom* /mydir/\nCOPY hom?.txt /mydir/\n")])])]),e("h2",{attrs:{id:"add-更高级的复制文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-更高级的复制文件"}},[a._v("#")]),a._v(" ADD 更高级的复制文件")]),a._v(" "),e("p",[a._v("ADD 指令和 COPY 的格式和性质基本一致。但是在 COPY 基础上增加了一些功能。比如<源路径>可以是一个 URL，这种情况下，Docker 引擎会试图去下载这个链接的文件放到<目标路径>去\n在构建镜像时，复制上下文中的文件到镜像内，格式：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('ADD <源路径>... <目标路径>\nADD ["<源路径>",... "<目标路径>"]\n')])])]),e("h2",{attrs:{id:"env-设置环境变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#env-设置环境变量"}},[a._v("#")]),a._v(" ENV 设置环境变量")]),a._v(" "),e("p",[a._v("格式有两种：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ENV <key> <value>\nENV <key1>=<value1> <key2>=<value2>...\n")])])]),e("p",[a._v("示例")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('ENV VERSION=1.0 DEBUG=on \\\n    NAME="Happy Feet"\n')])])]),e("p",[a._v("这个例子中演示了如何换行，以及对含有空格的值用双引号括起来的办法，这和 Shell 下的行为是一致的。")]),a._v(" "),e("h2",{attrs:{id:"expose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expose"}},[a._v("#")]),a._v(" EXPOSE")]),a._v(" "),e("p",[a._v("为构建的镜像设置监听端口，使容器在运行时监听。格式：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("EXPOSE <port> [<port>...]\n")])])]),e("p",[a._v("EXPOSE 指令并不会让容器监听 host 的端口，如果需要，需要在 docker run 时使用 -p、-P 参数来发布容器端口到 host 的某个端口上。")]),a._v(" "),e("h2",{attrs:{id:"volume-定义匿名卷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volume-定义匿名卷"}},[a._v("#")]),a._v(" VOLUME 定义匿名卷")]),a._v(" "),e("p",[a._v("VOLUME用于创建挂载点，即向基于所构建镜像创始的容器添加卷：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('VOLUME ["/data"]\n')])])]),e("p",[a._v("一个卷可以存在于一个或多个容器的指定目录，该目录可以绕过联合文件系统，并具有以下功能：")]),a._v(" "),e("p",[a._v("卷可以容器间共享和重用\n容器并不一定要和其它容器共享卷\n修改卷后会立即生效\n对卷的修改不会对镜像产生影响\n卷会一直存在，直到没有任何容器在使用它\nVOLUME 让我们可以将源代码、数据或其它内容添加到镜像中，而又不并提交到镜像中，并使我们可以多个容器间共享这些内容。")]),a._v(" "),e("h2",{attrs:{id:"workdir-指定工作目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#workdir-指定工作目录"}},[a._v("#")]),a._v(" WORKDIR 指定工作目录")]),a._v(" "),e("p",[a._v("WORKDIR用于在容器内设置一个工作目录：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("WORKDIR /path/to/workdir\n")])])]),e("p",[a._v("通过WORKDIR设置工作目录后，Dockerfile 中其后的命令 RUN、CMD、ENTRYPOINT、ADD、COPY 等命令都会在该目录下执行。\n如，使用WORKDIR设置工作目录：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("WORKDIR /a\nWORKDIR b\nWORKDIR c\nRUN pwd\n")])])]),e("p",[a._v("在以上示例中，pwd 最终将会在 /a/b/c 目录中执行。在使用 docker run 运行容器时，可以通过-w参数覆盖构建时所设置的工作目录。")])])}),[],!1,null,null,null);e.default=r.exports}}]);