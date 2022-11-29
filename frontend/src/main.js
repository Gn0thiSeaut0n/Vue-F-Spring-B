import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$store = store;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
