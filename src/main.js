import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import { router } from './router'
import AppDate from '@/components/AppDate.vue'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
