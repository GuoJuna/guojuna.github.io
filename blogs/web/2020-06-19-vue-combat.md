---
layout: post
title: Vue 项目实战
date: 2018-02-02 
categories: vue
tags: 
    - vue
excerpt: Vue项目实战
---

## 初始化
#### 1.初始化项目
```shell script
vue create vue-demo
#or
vue ui
```

![image-20200619111548717](https://gitee.com/guojun49/images/raw/master/blog-img/2020/06/20200619111555.png)

#### 2.优化目录结构

![image-20200619111726409](C:\Users\Guojun\AppData\Roaming\Typora\typora-user-images\image-20200619111726409.png)

#### 3.添加vue.config.js文件

```
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
```

#### 4. 添加插件

```
vue add eslint
```

