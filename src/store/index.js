import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '@/router'

import shop from '@/api/products'

Vue.use(Vuex)

const SET_USER = 'SET_USER';
const ADD_NUMBER = 'ADD_NUMBER';
const SET_PRODUCTS = 'SET_PRODUCTS';
const PUSH_PRODUCT_TO_CART = 'PUSH_PRODUCT_TO_CART';
const INCREMENT_ITEM_QTY = 'INCREMENT_ITEM_QTY';
const DECREMENT_ITEM_QTY = 'DECREMENT_ITEM_QTY';

const state = {
    user: null,
    numbers: [1, 2, 3],
	products: [],
	cart: []
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
    },
    availableProducts(state) {
        return state.products.filter(product => product.inventory > 0)
    },
    getCartProducts(state) {
        return state.cart.map(cartItem => {
            const product = state.products.find(product => product.id === cartItem.id)

            return {
                title: product.title,
                price: product.price,
                quantity: cartItem.quantity
            }
        })
    },
    getCartTotal(state, getters) {
        let total = 0;
        getters.getCartProducts.forEach(product => {
            total += product.price * product.quantity
        })

        return total
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
	},
	PUSH_PRODUCT_TO_CART(state, productId) {
		state.cart.push({
			id: productId,
			quantity: 1
		})
	},
	INCREMENT_ITEM_QTY(state, cartItem) {
		cartItem.quantity++
	},
	DECREMENT_ITEM_QTY(state, product) {
		product.inventory--
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
    fetchProducts({ commit }) {
        return new Promise((resolve, reject) => {
             // make the call
            // call SET_PRODUCTS mutation
            shop.getProducts(products => {
                commit('SET_PRODUCTS', products)
                resolve()
            })
        })
	},
	addToCart({ commit , state }, product) {
		if(product.inventory > 0) {
			const cartItem = state.cart.find(item => item.id === product.id)
			if(!cartItem) {
				commit('PUSH_PRODUCT_TO_CART', product.id)
			} else {
				commit('INCREMENT_ITEM_QTY', cartItem)
	
			}
			commit('DECREMENT_ITEM_QTY', product)
		}
		

	}
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store