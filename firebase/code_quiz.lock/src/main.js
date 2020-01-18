// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Vuetify from './plugins/vuetify'
import App from './App'
import vuetify from './plugins/vuetify';

Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  Vuetify,
  template: '<App/>',
  vuetify,
  render: h => h(App)
}).$mount('#app')