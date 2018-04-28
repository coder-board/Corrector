import Vue from 'vue'
import Router from 'vue-router'
import editor from '@/components/editor'
import home from '@/components/home'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  	  path: '/',
      name: 'home',
      component: home
  	},
    {
      path: '/editor',
      name: 'editor',
      component: editor
    }
  ]
})
