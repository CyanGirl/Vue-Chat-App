import Vuex from "vuex";
import Vue from "vue"

const state = {
    name:"",
    username:"",
}

const getters = {
    getName : (state) => state.name,
    getUsername : (state) => state.username,
}

const mutations = {
    setName: (state, newname) => {
        state.name=newname
    },
    setUsername: (state,newuser) => {
        state.username = newuser
    }
}

Vue.use(Vuex);
const store  = new Vuex.Store({state,getters,mutations})

export default store