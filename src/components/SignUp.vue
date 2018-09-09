<template>
    <div class="vueapp-signup">
        <h3>Sign In</h3>
        <div class="vueapp-signup">
            <input class="vueapp-signup__form-field" type="text" placeholder="Email"/><br/>
            <input class="vueapp-signup__form-field" type="text" placeholder="Password"/><br/>
            <button class="vueapp-signup__form-cta">SignUp</button>
        </div>
        <p>If you already have an account? You can <router-link to='/login'>login</router-link> here</p>
    </div>
</template>

<script>
export default {
    name: 'signUp',
    data: function() {
        return {}
    },
    methods: {}
}
</script>
