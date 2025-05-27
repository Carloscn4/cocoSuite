import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import ui from '@nuxt/ui/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        ui({
            ui: {
                colors: {
                    primary: 'teal',
                    cyan: 'cyan',
                }
            },
            theme: {
                colors: [
                    'primary',
                    'secondary',
                    'info',
                    'success',
                    'warning',
                    'error',
                    'cyan',
                ]
            }
        }),
    ],
    server: {
        host: '127.0.0.1',
        port: 5173,
        cors: {
            origin: 'http://127.0.0.1',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type'],
        },
    },
});
