import './bootstrap';
import { createApp } from 'vue';
import App from './views/App.vue';
import ui from '@nuxt/ui/vue-plugin';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import { router } from './router';
import { createPinia } from 'pinia';

const pinia = createPinia();
pinia.use(createPersistedState);

const app = createApp(app);

/* router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!store().loggedIn) {
            if (to.path && !to.path.includes('logout')) {
                entryUrl = to.path;
                next({ name: 'login' });
            } else {
                next({ name: 'login' });
            }
        } else {
            if (entryUrl) {
                const url = entryUrl;
                entryUrl = null;

                next(url);
            } else {
                next();
            }
        }
    } else {
        next();
    }
}); */

app.config.globalProperties.$functionProperty= functionName;

app.use(pinia);
app.use(router);
app.use(ui);
app.mount('#app');