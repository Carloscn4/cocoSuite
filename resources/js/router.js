import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        /* Dashboard */
        path: '',
        name: '',
        components: () => import(''),
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});