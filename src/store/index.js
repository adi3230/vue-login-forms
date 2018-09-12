import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '@/router'

Vue.use(Vuex)

const SET_USER = "SET_USER";
const ADD_NUMBER = "ADD_NUMBER";

const state = {
    user: null,
    numbers: [1, 2, 3]
}

const getters= {
    getUser(state) {
        return state.user;
    },
    getNumbers(state) {
        return state.numbers
    }
}

const mutations= {
    SET_USER(state, payload) {
        state.user = payload;
    },
    ADD_NUMBER(state, payload) {
        state.numbers.push(payload)
    }
}

const actions= {
    userSignUp({ commit }, payload) {
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                    .then((firebaseUser) => {
                        commit(SET_USER, {email: firebaseUser.user.email});
                        router.push('/helloWorld')
                    })
                    .catch((err) => router.push('/signup'))
    },
    userSignIn({ commit }, payload) {
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                    .then((firebaseUser) => {
                        commit(SET_USER, {email: firebaseUser.user.email})
                        router.push('/helloWorld')
                    })
                    .catch((err) => console.log(err))
    },
    userSignOut({ commit }) {
        firebase.auth().signOut().then(() => {
            commit(SET_USER)
            router.replace('login')
        })
    },
    autoSignIn ({commit}, payload) {
        commit(SET_USER, {email: payload.email})
    },
    addNumber({ commit }, payload) {
        commit(ADD_NUMBER, payload)
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store