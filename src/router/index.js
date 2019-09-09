import Vue from 'vue'
import Router from 'vue-router'
import MyWorkes from '../components/MyWorkes'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      component: MyWorkes
    }
  ]
})
