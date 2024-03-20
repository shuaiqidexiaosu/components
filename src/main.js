import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import '@/public/public.css'

import App from './App.vue'
import router from './router'

import 'animate.css'

import store from '@/stores/index'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.vue';
Vue.component('Breadcrumb', Breadcrumb)
Vue.use(PiniaVuePlugin)
Vue.use(ElementUI)
new Vue({
  store,
  router,
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount('#app')
