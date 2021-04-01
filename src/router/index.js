import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeEng from '../views/HomeEng.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeEng
    },
]

const router = new VueRouter({
    routes
})

export default router
