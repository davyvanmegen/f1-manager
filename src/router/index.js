import { createRouter, createWebHashHistory } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import F1 from '../components/F1.vue'

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/f1', component: F1 },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router;