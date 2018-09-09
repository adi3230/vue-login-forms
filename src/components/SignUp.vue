<template>
    <div class="vueapp-signup">
        <h3>Sign In</h3>
        <div class="vueapp-signup">
            <input class="vueapp-signup__form-field" v-model="signUpForm.email" type="text" placeholder="Email"/><br/>
            <input class="vueapp-signup__form-field" v-model="signUpForm.password" type="password" placeholder="Password"/><br/>
            <button class="vueapp-signup__form-cta" @click="signUp">SignUp</button>
        </div>
        <p>If you already have an account? You can <router-link to='/login'>login</router-link> here</p>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'signUp',
    data: function() {
        return {
            signUpForm: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        signUp: function() {
            this.$store.dispatch('userSignUp', { email: this.signUpForm.email, password: this.signUpForm.password })
        }
    }
}
</script>
