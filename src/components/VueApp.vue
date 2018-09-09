<template>
    <div class="hg-vueapp">
        <header class="hg-vueapp-header">
            Header
        </header>
  
        <aside class="hg-vueapp-sidebar-left">
            Left Sidebar
        </aside>

        <article class="hg-vueapp-content">
            <div class="hg-vueapp-content__image"><img alt="Vue logo" src="../assets/logo.png"></div>
            <router-view/>
        </article>

        <aside class="hg-vueapp-sidebar-right">
            Right Sidebar
        </aside>

        <footer class="hg-vueapp-footer">
            Footer
        </footer>
    </div>
    
</template>

<script>
import Login from '@/components/Login.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'VueApp',
    components: {
        Login,
        HelloWorld
    }
    
}
</script>
<style lang="scss" scoped>

    .hg-vueapp-content {
        &__image {
            text-align: center;
        }
    }
</style>


