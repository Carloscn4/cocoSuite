import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';


export default defineConfig([
    { files: ['**/*.{js,mjs,cjs,vue}'], plugins: { js }, extends: ['js/recommended'] },
    { files: ['**/*.{js,mjs,cjs,vue}'], languageOptions: { globals: globals.browser, sourceType: 'script' } },
    ...pluginVue.configs['flat/recommended'],
    {
        rules: {
            indent: ['error', 4, { SwitchCase: 1 }],
            'vue/html-indent': ['error', 4],
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: 4,
                    multiline: {
                        max: 1,
                    },
                },
            ],
            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        void: 'always',
                        normal: 'never',
                        component: 'always',
                    },
                    svg: 'always',
                    math: 'always',
                },
            ],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'no-constant-binary-expression': 'off'
        },
    }
]);