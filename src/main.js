// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueCarousel from 'vue-carousel'
import VueAwesomeSniper from 'vue-awesome-swiper'
import 'vuetify/dist/vuetify.min.css'
import 'mdi/css/materialdesignicons.min.css'
import 'swiper/dist/css/swiper.css'
import App from './App'
import router from './router'
Vue.use(Vuetify)
Vue.use(VueCarousel)
Vue.use(VueAwesomeSniper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

