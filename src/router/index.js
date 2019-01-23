import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: 'info',
          name: 'Info',
          component: resolve => {
            require(['@/components/info'], resolve)
          }
        },
        {
          path: 'about',
          name: 'About',
          component: resolve => {
            require(['@/components/about'], resolve)
          }
        }
      ]
    },
    {
      path: '/list',
      name: 'List',
      component: resolve => {
        require(['@/components/list'], resolve)
      }
    }
  ]
})
