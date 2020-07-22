---
layout: post
title: 使用vuepress创建博客
date: 2020-06-11
categories: vue
tags: 
    - vuepress
excerpt: 使用vuepress创建博客
---



## 快速上手

1. 创建并进入一个新目录

   ```sh
   mkdir blog-vue && cd blog-vue
   ```

2. 使用你喜欢的包管理器进行初始化

   ```sh
   yarn init # npm init
   ```

   ![image-20200716142433430](https://gitee.com/guojun49/images/raw/master/blog-img/2020/07/20200716143842.png)

3. 将 VuePress 安装为本地依赖

   ```sh
   yarn add -D vuepress # npm install -D vuepress
   ```

4. 创建你的第一篇文档

   ```sh
   mkdir docs && echo '# Hello VuePress' > docs/README.md
   ```

5. 在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)

   ```
   {
     "scripts": {
       "docs:dev": "vuepress dev docs",
       "docs:build": "vuepress build docs"
     }
   }
   ```

6. 在本地启动服务器

   ```sh
   yarn docs:dev # npm run docs:dev
   ```

   VuePress 会在 [http://localhost:8080](http://localhost:8080/) 启动一个热重载的开发服务器。
   
7. 创建目录结构

   ![image-20200716145724569](https://gitee.com/guojun49/images/raw/master/blog-img/2020/07/20200716145724.png)

8. 安装主题(https://vuepress-theme-reco.recoluan.com/views/1.x/)

   - 安装

   ```sh
   npm install vuepress-theme-reco --save-dev
   
   # or
   
   yarn add vuepress-theme-reco
   ```

   - 引用并添加博客配置

   ```js
   // .vuepress/config.js
   
   module.exports = {
     theme: 'reco',
     themeConfig: {
        // 博客配置
       blogConfig: {
         category: {
           location: 2,     // 在导航栏菜单中所占的位置，默认2
           text: 'Category' // 默认文案 “分类”
         },
         tag: {
           location: 3,     // 在导航栏菜单中所占的位置，默认3
           text: 'Tag'      // 默认文案 “标签”
         }
       }
     }
   } 
   ```

## 直接使用[vuepress-theme-reco](https://github.com/vuepress-reco/vuepress-theme-reco)
```shell script
npm install @vuepress-reco/theme-cli -g

theme-cli init
```


   