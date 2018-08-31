import Vue from 'vue'
import Router from 'vue-router'

import goods from '@/view/goods'
import goods_edit from '@/view/goods_edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld'
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/goods/edit',
      name: 'goods_edit',
      component: goods_edit
    }
  ]
})
