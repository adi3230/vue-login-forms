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
            this.$store.dispatch('userSignIn', { email: this.loginForm.email, password: this.loginForm.password })
        }
    }
}
</script>
