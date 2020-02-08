// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from '@/plugins/vuetify'
import App from '@/App.vue'

import top from '@/components/top'
import select_level from '@/components/select_level'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/',      component: top },
  { path: '/select_level', component: select_level }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  Vuetify,
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')