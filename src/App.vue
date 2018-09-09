<template>
  <div id="app">
    <VueApp/>
  </div>
</template>

<script>
import VueApp from './components/VueApp.vue'

export default {
  name: 'app',
  components: {
    VueApp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*  text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
