import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        ispc: true
    },
    mutations: {
        increment (state, data) {
            this.state.ispc = data
        }
    }
});
export default store;
