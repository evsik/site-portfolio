import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeEng from '../views/HomeEng.vue'
import HomeRu from '../views/HomeRu.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeEng
    },
    {
        path: '/ru',
        name: 'HomeRu',
        component: HomeRu
    },

]

const router = new VueRouter({
    routes
})

export default router
