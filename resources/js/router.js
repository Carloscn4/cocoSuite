import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        /* Login */
        path: "/login",
        name: "login",
        component: () => import("./views/LoginView.vue"),
        /* beforeEnter: (to, from, next) => {
            if (!store().loggedIn) {
                next();
            } else {
                next ({ name: 'dashboard' });
            }
        } */
    },
    {
        // LandinPage
        path: "/",
        name: "landing",
        component: () => import("./views/landing/LandingPage.vue"),
    },
    {
        // Dashboard
        path: "/dashboard",
        name: "dashboard",
        component: () => import("./views/DashboardView.vue"),
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            const navbarHeight = 80;
            return { el: to.hash, top: navbarHeight, behavior: "smooth" };
        } else {
            return { top: 0, behavior: "smooth" };
        }
    },
});
