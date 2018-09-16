import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '@/router'

Vue.use(Vuex)

const SET_USER = 'SET_USER';
const ADD_NUMBER = 'ADD_NUMBER';
const SET_PRODUCTS = 'SET_PRODUCTS'; 

const state = {
    user: null,
    numbers: [1, 2, 3],
    products: []
}

const getters= {
    getUser(state) {
        return state.user;
    },
    getNumbers(state) {
        return state.numbers;
    },
    productsCount(state) {
        return state.products.length;
    }
}

const mutations= {
    SET_USER(state, payload) {
        state.user = payload;
    },
    ADD_NUMBER(state, payload) {
        state.numbers.push(payload)
    },
    SET_PRODUCTS(state, products) {
        state.products = products;
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
    },
    fetchProducts() {

    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store