import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueWindow from '@hscmap/vue-window'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueWindow)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
