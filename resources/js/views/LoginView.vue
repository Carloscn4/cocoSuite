<template>
    <div class="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
        <UPageCard class="w-full max-w-md">
            <UAuthForm
                :schema="state"
                title="Login"
                description=""
                icon="i-lucide-user"
                :fields="fields"
                @submit="login"
            />
        </UPageCard>
    </div>
</template>
<script>
import { store } from '../storage/store';

export default {
    data() {
        return {
            isLoading: false,
            state: {
                username: null,
                password: null,
            },
            error: null,
            show: false,
        };
    },
    computed: {
        fields() {
            return [{
                name: 'email',
                type: 'text',
                label: 'Email/User',
                placeholder: 'Enter your email or username',
                required: true
            }, {
                name: 'password',
                label: 'Password',
                type: 'password',
                placeholder: 'Enter your password'
            }, {
                name: 'remember',
                label: 'Remember me',
                type: 'checkbox'
            }];
        }
    },
    methods: {
        async login() {
            this.isLoading = true;

            const params = { username: this.state.username, password: this.state.password };

            const { errorToken } = await store().retrieveToken(params);

            if (errorToken) {
                this.error =
                    errorToken?.response?.data ??
                    'Error in the connection with the database.';

                this.isLoading = false;
                return;
            } else {
                const { userError } = await store().retrieveUserData();

                if (userError) {
                    this.error =
                        userError?.response?.data ??
                        'Error in the connection with the database.';

                    await store().destroyToken();

                    this.isLoading = false;
                    return;
                }
            }

            this.isLoading = false;
            this.$router.push({ name: 'dashboard' }).catch(() => {});
        },
        setLowerCase(value) {
            this.state.username = value.toString().toLowerCase();
        },
    },
};
</script>