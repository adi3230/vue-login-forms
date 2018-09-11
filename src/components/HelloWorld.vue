<template>
  <div class="hello">
    <contact-forms/>
    <button class="hello-world__cta" @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase';
import ContactForms from '@/components/ContactForms.vue';

export default {
  name: 'HelloWorld',
  components: {
      ContactForms
  },
  props: {
    msg: String
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => this.$router.replace('login'))

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
