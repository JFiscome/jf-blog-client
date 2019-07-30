###  VUE 学习初体验
***
####  前言
>> vue想学很久了，在网上看了很多文章，没有找到适合自己从0开始学习VUE的，于是决定，就从头开始，从零构建VUE项目。

#### 1.1 从vue-cli开始
首先安装 vue-cli:

```Bash
npm安装  npm install -g @vue/cli     

查看版本  vue --version 
```
#### 1.2 新建一个项目

在工作目录下执行以下命令：

```Bash
构建初始项目（new-project）：vue create new-project

cd new-project

npm run sever
```

默认启动项目的端口在：[http://localhost:8080/](http://localhost:8080/)
打开浏览器，应该就可以访问到这个项目了。

***

####  2.2 vue-router配置路由
首先安装依赖

```
npm install vue-router --save

```

新增router.js文件，配置路由目录树

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/hello',
    name: 'hello',
    component: () => import('./components/Hello.vue'),
  },
  {
    path: '/world/:city',
    name: 'world',
    component: () => import('./components/World.vue'),
  },
  {
    path: '*',
    name: '404',
    component: () => import('./views/404.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

```


在main.js中导入该文件，并且挂载到单页面的的#app下

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

```

App.vue文件中需要增加坑位。给这个挂载过来的router-view

```Html
<template>
  <div id="app">
    <!-- router-view 类似插槽一般 -->
    <router-view/>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>
```


