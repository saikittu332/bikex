import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
Vue.use(VueRouter)
const router = new VueRouter({
  routes:Routes
})

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
