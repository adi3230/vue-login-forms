<template>
    <div id="app" class="hg-vueapp">
        <header class="hg-vueapp-header">
            
        </header>
  
        <aside class="hg-vueapp-sidebar-left">
            
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
export default {
    name: 'VueApp'    
}
</script>
<style lang="scss" scoped>

    .hg-vueapp-content {
        &__image {
            text-align: center;
        }
    }
</style>


