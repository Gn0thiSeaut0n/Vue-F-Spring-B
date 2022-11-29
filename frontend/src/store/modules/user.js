import axios from "axios";

axios.defaults.baseURL = "http://localhost:8081"

export  default {
    namespaced: true,
    state: {
        userId: '',
        token: ''
    },

    mutations: {
        setUserId(state, userId) {
            state.userId = userId;
        },
        setToken(state, token) {
            state.token = token;
        },
        reset(state) {
            state.userId = '';
            state.token = '';
        }
    },

    actions: {
        async doLogin({ commit }, info) {

            let result = false;

            commit('setUserId', info.userId);
            await axios.post('/login',
                {
                    userId: info.userId,
                    userPw: info.userPw
                }, {
                    headers: {
                        "Content-Type": `application/json`,
                        "LbCookie": document.cookie
                    }
                })
                .then((response) => {
                    result = response.data;
                })
                .catch(() => {
                    console.log('failed');
                });

            return new Promise((resolve, reject) => {
               if(result)
                   resolve();
               else
                   reject();
            });
        },
        doLogout({ commit }) {
            commit('reset');
        },
    },

    getters: {
        isLogin(state) {
            return state.token === '' ? false : true;
        }
    }
}