import Vue from 'vue'
import Router from 'vue-router'
import MyWorkes from '../components/MyWorkes'
import Text from '../components/text'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      component: MyWorkes
    },
    {
      path: '/text',
      component: Text
    }
  ]
})
