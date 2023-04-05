(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{580:function(e,o,t){"use strict";t.r(o);var s=t(0),n=Object(s.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"一、github-actions-是什么"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#一、github-actions-是什么"}},[e._v("#")]),e._v(" 一、GitHub Actions 是什么？")]),e._v(" "),o("p",[e._v("大家知道，持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub\n把这些操作就称为 actions。")]),e._v(" "),o("p",[e._v("很多操作在不同项目里面是类似的，完全可以共享。GitHub\n注意到了这一点，想出了一个很妙的点子，允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。")]),e._v(" "),o("p",[e._v("如果你需要某个 action，不必自己写复杂的脚本，直接引用他人写好的 action\n即可，整个持续集成过程，就变成了一个 actions 的组合。这就是 GitHub\nActions 最特别的地方。")]),e._v(" "),o("p",[e._v("GitHub\n做了一个"),o("a",{attrs:{href:"https://github.com/marketplace?type=actions",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方市场"),o("OutboundLink")],1),e._v("，可以搜索到他人提交的\nactions。另外，还有一个 "),o("a",{attrs:{href:"https://github.com/sdras/awesome-actions",target:"_blank",rel:"noopener noreferrer"}},[e._v("awesome\nactions"),o("OutboundLink")],1),e._v("\n的仓库，也可以找到不少 action。")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://gj-blog.oss-cn-hangzhou.aliyuncs.com/blog-img/2020/07/20200723105253.png",alt:"image-20200723105246340"}})]),e._v(" "),o("p",[e._v("上面说了，每个 action\n就是一个独立脚本，因此可以做成代码仓库，使用"),o("code",[e._v("userName/repoName")]),e._v("的语法引用\naction。比如，"),o("code",[e._v("actions/setup-node")]),e._v("就表示"),o("code",[e._v("github.com/actions/setup-node")]),e._v("这个"),o("a",{attrs:{href:"https://github.com/actions/setup-node",target:"_blank",rel:"noopener noreferrer"}},[e._v("仓库"),o("OutboundLink")],1),e._v("，它代表一个\naction，作用是安装 Node.js。事实上，GitHub 官方的 actions 都放在\n"),o("a",{attrs:{href:"https://github.com/actions",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com/actions"),o("OutboundLink")],1),e._v(" 里面。")]),e._v(" "),o("p",[e._v("既然 actions 是代码仓库，当然就有版本的概念，用户可以引用某个具体版本的\naction。下面都是合法的 action 引用，用的就是 Git\n的指针概念，详见"),o("a",{attrs:{href:"https://help.github.com/en/articles/about-actions#versioning-your-action",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),o("OutboundLink")],1),e._v("。")]),e._v(" "),o("blockquote",[o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("actions/setup-node@74bc508 "),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 指向一个 commit")]),e._v("\nactions/setup-node@v1.0    "),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 指向一个标签")]),e._v("\nactions/setup-node@master  "),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 指向一个分支")]),e._v("\n")])])])]),e._v(" "),o("h2",{attrs:{id:"二、基本概念"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#二、基本概念"}},[e._v("#")]),e._v(" 二、基本概念")]),e._v(" "),o("p",[e._v("GitHub Actions 有一些自己的术语。")]),e._v(" "),o("p",[e._v("（1）"),o("strong",[e._v("workflow")]),e._v(" （工作流程）：持续集成一次运行的过程，就是一个\nworkflow。")]),e._v(" "),o("p",[e._v("（2）"),o("strong",[e._v("job")]),e._v(" （任务）：一个 workflow 由一个或多个 jobs\n构成，含义是一次持续集成的运行，可以完成多个任务。")]),e._v(" "),o("p",[e._v("（3）"),o("strong",[e._v("step")]),e._v("（步骤）：每个 job 由多个 step 构成，一步步完成。")]),e._v(" "),o("p",[e._v("（4）"),o("strong",[e._v("action")]),e._v(" （动作）：每个 step\n可以依次执行一个或多个命令（action）。")]),e._v(" "),o("h2",{attrs:{id:"三、workflow-文件"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#三、workflow-文件"}},[e._v("#")]),e._v(" 三、workflow 文件")]),e._v(" "),o("p",[e._v("GitHub Actions 的配置文件叫做 workflow\n文件，存放在代码仓库的"),o("code",[e._v(".github/workflows")]),e._v("目录。")]),e._v(" "),o("p",[e._v("workflow 文件采用 "),o("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/07/yaml.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("YAML\n格式"),o("OutboundLink")],1),e._v("，文件名可以任意取，但是后缀名统一为"),o("code",[e._v(".yml")]),e._v("，比如"),o("code",[e._v("foo.yml")]),e._v("。一个库可以有多个\nworkflow 文件。GitHub\n只要发现"),o("code",[e._v(".github/workflows")]),e._v("目录里面有"),o("code",[e._v(".yml")]),e._v("文件，就会自动运行该文件。")]),e._v(" "),o("p",[e._v("workflow\n文件的配置字段非常多，详见"),o("a",{attrs:{href:"https://help.github.com/en/articles/workflow-syntax-for-github-actions",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),o("OutboundLink")],1),e._v("。下面是一些基本字段。")]),e._v(" "),o("p",[o("strong",[e._v("（1）"),o("code",[e._v("name")])])]),e._v(" "),o("p",[o("code",[e._v("name")]),e._v("字段是 workflow 的名称。如果省略该字段，默认为当前 workflow\n的文件名。")]),e._v(" "),o("blockquote",[o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("name: GitHub Actions Demo\n")])])])]),e._v(" "),o("p",[o("strong",[e._v("（2）"),o("code",[e._v("on")])])]),e._v(" "),o("p",[o("code",[e._v("on")]),e._v("字段指定触发 workflow 的条件，通常是某些事件。")]),e._v(" "),o("blockquote",[o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("on: push\n")])])])]),e._v(" "),o("p",[e._v("上面代码指定，"),o("code",[e._v("push")]),e._v("事件触发 workflow。")]),e._v(" "),o("p",[o("code",[e._v("on")]),e._v("字段也可以是事件的数组。")]),e._v(" "),o("blockquote",[o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("on: "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("push, pull_request"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])])]),e._v(" "),o("p",[e._v("上面代码指定，"),o("code",[e._v("push")]),e._v("事件或"),o("code",[e._v("pull_request")]),e._v("事件都可以触发 workflow。")]),e._v(" "),o("p",[e._v("完整的事件列表，请查看"),o("a",{attrs:{href:"https://help.github.com/en/articles/events-that-trigger-workflows",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),o("OutboundLink")],1),e._v("。除了代码库事件，GitHub\nActions 也支持外部事件触发，或者定时运行。")]),e._v(" "),o("p",[o("strong",[e._v("（3）"),o("code",[e._v("on.<push|pull_request>.<tags|branches>")])])]),e._v(" "),o("p",[e._v("指定触发事件时，可以限定分支或标签。")]),e._v(" "),o("blockquote",[o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("on:\n  push:\n    branches:    \n      - master\n")])])])]),e._v(" "),o("p",[e._v("上面代码指定，只有"),o("code",[e._v("master")]),e._v("分支发生"),o("code",[e._v("push")]),e._v("事件时，才会触发 workflow。")]),e._v(" "),o("p",[o("strong",[e._v("（4）"),o("code",[e._v("jobs.<job_id>.name")])])]),e._v(" "),o("p",[e._v("workflow 文件的主体是"),o("code",[e._v("jobs")]),e._v("字段，表示要执行的一项或多项任务。")]),e._v(" "),o("p",[o("code",[e._v("jobs")]),e._v("字段里面，需要写出每一项任务的"),o("code",[e._v("job_id")]),e._v("，具体名称自定义。"),o("code",[e._v("job_id")]),e._v("里面的"),o("code",[e._v("name")]),e._v("字段是任务的说明。")]),e._v(" "),o("blockquote",[o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("jobs:\n  my_first_job:\n    name: My first job\n  my_second_job:\n    name: My second job\n")])])])]),e._v(" "),o("p",[e._v("上面代码的"),o("code",[e._v("jobs")]),e._v("字段包含两项任务，"),o("code",[e._v("job_id")]),e._v("分别是"),o("code",[e._v("my_first_job")]),e._v("和"),o("code",[e._v("my_second_job")]),e._v("。")]),e._v(" "),o("p",[o("strong",[e._v("（5）"),o("code",[e._v("jobs.<job_id>.needs")])])]),e._v(" "),o("p",[o("code",[e._v("needs")]),e._v("字段指定当前任务的依赖关系，即运行顺序。")]),e._v(" "),o("blockquote",[o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("jobs:\n  job1:\n  job2:\n    needs: job1\n  job3:\n    needs: "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("job1, job2"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])])]),e._v(" "),o("p",[e._v("上面代码中，"),o("code",[e._v("job1")]),e._v("必须先于"),o("code",[e._v("job2")]),e._v("完成，而"),o("code",[e._v("job3")]),e._v("等待"),o("code",[e._v("job1")]),e._v("和"),o("code",[e._v("job2")]),e._v("的完成才能运行。因此，这个\nworkflow 的运行顺序依次为："),o("code",[e._v("job1")]),e._v("、"),o("code",[e._v("job2")]),e._v("、"),o("code",[e._v("job3")]),e._v("。")]),e._v(" "),o("p",[o("strong",[e._v("（6）"),o("code",[e._v("jobs.<job_id>.runs-on")])])]),e._v(" "),o("p",[o("code",[e._v("runs-on")]),e._v("字段指定运行所需要的虚拟机环境。它是必填字段。目前可用的虚拟机如下。")]),e._v(" "),o("blockquote",[o("ul",[o("li",[o("code",[e._v("ubuntu-latest")]),e._v("，"),o("code",[e._v("ubuntu-18.04")]),e._v("或"),o("code",[e._v("ubuntu-16.04")])]),e._v(" "),o("li",[o("code",[e._v("windows-latest")]),e._v("，"),o("code",[e._v("windows-2019")]),e._v("或"),o("code",[e._v("windows-2016")])]),e._v(" "),o("li",[o("code",[e._v("macOS-latest")]),e._v("或"),o("code",[e._v("macOS-10.14")])])])]),e._v(" "),o("p",[e._v("下面代码指定虚拟机环境为"),o("code",[e._v("ubuntu-18.04")]),e._v("。")]),e._v(" "),o("blockquote",[o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("runs-on: ubuntu-18.04\n")])])])]),e._v(" "),o("p",[o("strong",[e._v("（7）"),o("code",[e._v("jobs.<job_id>.steps")])])]),e._v(" "),o("p",[o("code",[e._v("steps")]),e._v("字段指定每个 Job\n的运行步骤，可以包含一个或多个步骤。每个步骤都可以指定以下三个字段。")]),e._v(" "),o("blockquote",[o("ul",[o("li",[o("code",[e._v("jobs.<job_id>.steps.name")]),e._v("：步骤名称。")]),e._v(" "),o("li",[o("code",[e._v("jobs.<job_id>.steps.run")]),e._v("：该步骤运行的命令或者 action。")]),e._v(" "),o("li",[o("code",[e._v("jobs.<job_id>.steps.env")]),e._v("：该步骤所需的环境变量。")])])]),e._v(" "),o("p",[e._v("下面是一个完整的 workflow 文件的范例。")]),e._v(" "),o("blockquote",[o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("name: Greeting from Mona\non: push\n\njobs:\n  my-job:\n    name: My Job\n    runs-on: ubuntu-latest\n    steps:\n    - name: Print a greeting\n      env:\n        MY_VAR: Hi there"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" My name is\n        FIRST_NAME: Mona\n        MIDDLE_NAME: The\n        LAST_NAME: Octocat\n      run: "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n        "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$MY_VAR")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$FIRST_NAME")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$MIDDLE_NAME")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$LAST_NAME")]),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])])]),e._v(" "),o("p",[e._v("上面代码中，"),o("code",[e._v("steps")]),e._v("字段只包括一个步骤。该步骤先注入四个环境变量，然后执行一条\nBash 命令。")]),e._v(" "),o("h2",{attrs:{id:"四、参考"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#四、参考"}},[e._v("#")]),e._v(" 四、参考")]),e._v(" "),o("p",[e._v("http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html")])])}),[],!1,null,null,null);o.default=n.exports}}]);