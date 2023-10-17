import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomeView.vue'
import AboutPage from './views/AboutView.vue'
import JobsPage from './views/jobs/jobs.vue'
import JobDetailPage from './views/jobs/jobsDetails.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/about', component: AboutPage },
        { path: '/jobs', component: JobsPage },
        { name: 'jobsDetails', path: '/jobs/:id', component: JobDetailPage, props: true },
    ],
});