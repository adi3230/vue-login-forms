<template>
    <div id="app" class="hg-vueapp">
        <header class="hg-vueapp-header">
            
        </header>
  
        <aside class="hg-vueapp-sidebar-left">

            <div v-if="getUser">
               <ul class="hg-vueapp-sidebar-left__list">
                   <li>
                       <router-link to="/helloWorld" class="hg-vueapp-sidebar-left__list-item">Veevalidate</router-link>
                   </li>
                   <hr/>
                   <li class="hg-vueapp-sidebar-left__list-item">
                       <router-link to="/communication" class="hg-vueapp-sidebar-left__list-item">Props and Vuex</router-link>
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
        margin-top: 2em;
        &__image {
            text-align: center;
        }

        @media only screen and (min-device-width : 768px) { 
            margin-top: 0;
            margin-left: 2em;
        }
    }

    .hg-vueapp-sidebar-left{
        &__list {
            padding-left: 0;
            list-style-type: none;
            &-item {
                text-decoration: none;
            }
            
        }
    }
</style>


