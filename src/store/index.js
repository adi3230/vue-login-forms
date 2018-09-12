import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '@/router'

Vue.use(Vuex)

const state = {
    user: null
}

const getters= {
    getUser(state) {
        return state.user;
    }
}

const mutations= {
    setUser(state, payload) {
        state.user = payload;
    }
}

const actions= {
    userSignUp({ commit }, payload) {
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                    .then((firebaseUser) => {
                        commit('setUser', {email: firebaseUser.user.email});
                        router.push('/helloWorld')
                    })
                    .catch((err) => router.push('/signup'))
    },
    userSignIn({ commit }, payload) {
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                    .then((firebaseUser) => {
                        commit('setUser', {email: firebaseUser.user.email})
                        router.push('/helloWorld')
                    })
                    .catch((err) => console.log(err))
    },
    userSignOut({ commit }) {
        firebase.auth().signOut().then(() => {
            commit('setUser')
            router.replace('login')
        })

    },
    autoSignIn ({commit}, payload) {
        commit('setUser', {email: payload.email})
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store