import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WRR from '@/components/WorkResultReport'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 作業実績報告書
    {
      path: '/WorkResultReport',
      name: 'WRR',
      component: WRR
    }
  ]
})
