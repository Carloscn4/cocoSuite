import { defineStore } from 'pinia';
import { INITIAL_STATE } from '../constants';
import axios from 'axios';

export const store = defineStore('Name', {
    state: () => ({
        ...INITIAL_STATE,  
    }),
    getters: {
        userId(state) {
            return state.user?.id ?? -1;
        },
    },
    actions: {
        /* User */
        userData(state, payload) {
            if (payload.name) {
                state.userName = payload.name;
            }
            if (payload.email) {
                state.userEmail = payload.email;
            }
            if (payload.avatar) {
                state.userAvatar = payload.avatar;
            }
        },
        async retrieveToken(credentials) {
            try {
                const { data } = await axios.post('login', {
                    username: credentials.username,
                    password: credentials.password,
                });
                this.setRetrieveToken(data.access_token);

                axios.defaults.headers.common[
                    'Authorization'
                ] = `Bearer ${data.access_token}`;

                return { errorToken: null };
            } catch (error) {
                return { accessToken: null, errorToken: error };
            }
        },
        async retrieveUserData() {
            try {
                const { data } = await axios.get('user');
                this.setRetrieveUserData(data.user);

                return { userData: data.user, userError: null };
            } catch (error) {
                return { userData: null, userError: error };
            }
        },
        destroyToken() {
            if (this.loggedIn) {
                return new Promise((resolve, reject) => {
                    axios
                        .post('/logout', '', {
                            headers: {
                                Authorization: 'Bearer ' + this.token,
                            },
                        })
                        .then((response) => {
                            this.setDestroyToken();
                            this.$reset();

                            resolve(response);
                        })
                        .catch((error) => {
                            this.setDestroyToken();

                            reject(error);
                        });
                });
            }
        },
    },
    persist: true,
});