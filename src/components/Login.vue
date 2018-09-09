<template>
    <div class="vueapp-login">
        <h3>Login</h3>
        <div class="vueapp-login__form">
            <input class="vueapp-login__form-field" v-model="loginForm.email" type="text" placeholder="Email"/><br/>
            <input class="vueapp-login__form-field" v-model="loginForm.password" type="password" placeholder="Password"/><br/>
            <button class="vueapp-login__form-cta" @click="login">Login</button>
        </div>
        <p>You don't have a account? You can <router-link to="/signup">create one</router-link> </p>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'login',
    data: function() {
        return {
            loginForm: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password)
                    .then((user) => {this.$router.replace('helloWorld')})
                    .catch((err) => console.log(err))
        
        }
    }
}
</script>
