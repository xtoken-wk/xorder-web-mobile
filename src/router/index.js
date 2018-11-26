import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import token from '@/components/TokenEconomy'
import investment from '@/components/InvestmentIntelligence'
import labs from '@/components/XOrderLabs'
import hiring from '@/components/Hiring'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/token',
      name:'token',
      component:token
    },
    {
      path:'/investment',
      name:'investment',
      component:investment
    },
    {
      path:'/labs',
      name:'labs',
      component:labs
    },
    {
      path:'/hiring',
      name:'hiring',
      component:hiring
    }
  ]
})
