import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/reset.css' // 初始化样式
// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';


import ljsui from 'ljs-ui'
Vue.use(ljsui)

// import { AlertTip } from 'ljs-ui'
// Vue.component(AlertTip.name, AlertTip)

Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
