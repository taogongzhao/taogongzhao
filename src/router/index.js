import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/Demo'
import Demo2 from '@/components/Demo2'
 import Demo4 from '@/components/Demo4'
import Demo5 from '@/components/Demo5'

import home from '@/components/home'
import Category from '@/components/category/Category'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },   
     {
      path: '/',
      name: 'Demo',
      component: Demo
    },  {
      path: '/Demo2',
      name: 'Demo2',
      component: Demo2
    },  
    {
      path: '/Demo4',
      name: 'Demo4',
      component: Demo4
    },{
      path: '/Demo5',
      name: 'Demo5',
      component: Demo5
    },{
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/Category',
      name: 'Category',
      component: Category
    },
  ]
})
