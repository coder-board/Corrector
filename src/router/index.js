import Vue from 'vue'
import Router from 'vue-router'
import editor from '@/components/editor'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [
  	// {
  	//   path: '/',
   //    name: 'App',
   //    component: App
  	// },
    {
      path: '/editor',
      name: 'editor',
      component: editor
    }
  ]
})
