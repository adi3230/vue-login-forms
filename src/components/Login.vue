<template>
    <div class="vueapp-login">
        <h3>Sign In</h3>
        <div class="vueapp-login__form">
            <input class="vueapp-login__form-field" type="text" placeholder="Email"/><br/>
            <input class="vueapp-login__form-field" type="text" placeholder="Password"/><br/>
            <button class="vueapp-login__form-cta" @click="login">Login</button>
        </div>
        <p>You don't have a account? You can <router-link to="/signup">create one</router-link> </p>
    </div>
</template>

<script>
export default {
    name: 'login',
    data: function() {
        return {}
    },
    methods: {
        login: function() {
            this.$router.replace('helloWorld');
        }
    }
}
</script>
