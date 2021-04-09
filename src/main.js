import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VueScrollTo from 'vue-scrollto'
import Slick from 'vue-slick';
import FontAwesome from '@fortawesome/fontawesome-free'

Vue.use(VueScrollTo)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Slick)
Vue.use(FontAwesome)

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

import "./layout/styles/style.css";

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
