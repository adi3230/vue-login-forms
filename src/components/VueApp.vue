<template>
    <div id="app" class="hg-vueapp">
        <header class="hg-vueapp-header">
            
        </header>
  
        <aside class="hg-vueapp-sidebar-left">
            {{getUser}}
            <div v-if="getUser">
               <ul>
                   <li>
                       <router-link to="/helloWorld">HelloWorld</router-link>
                   </li>
               </ul>
            </div>
            
        </aside>

        <article class="hg-vueapp-content">
            <router-view/>
        </article>

        <aside class="hg-vueapp-sidebar-right">
            
        </aside>

        <footer class="hg-vueapp-footer">
            
        </footer>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'VueApp',
    computed: {
        ...mapGetters([
            'getUser',
        ]),
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


