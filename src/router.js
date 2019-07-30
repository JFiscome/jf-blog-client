import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'hello world',
    component: HelloWorld,
    children: [
      {
        path: '/userone',
        name: 'userone',
        component: () => import('./views/user/UserOne.vue')
      },
      {
        path: '/usertwo',
        name: 'usertwo',
        component: () => import('./views/user/UserTwo.vue')
      },
    ]
  },
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

