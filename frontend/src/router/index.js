import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'About',
            component: AboutView,
        },
        {
            path: '/NotFound',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/NotFound',
        },
    ]
});

export default router;