import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import Experience from '../pages/Experience.vue';
import Stack from '../pages/Stack.vue'
import Contact from '../pages/Contact.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/experience', name: 'Experience', component: Experience },
   { path: '/stack', name: 'Stack', component: Stack },
    { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
