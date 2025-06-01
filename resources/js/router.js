import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        /* Login */
        path: '/login',
        name: 'login',
        component: () => import('./views/LoginView.vue'),
        /* beforeEnter: (to, from, next) => {
            if (!store().loggedIn) {
                next();
            } else {
                next ({ name: 'dashboard' });
            }
        } */
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});