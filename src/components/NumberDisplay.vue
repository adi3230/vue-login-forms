<template>
    <div>
        <p>Number displayed</p>
        <h2>{{ getNumbers }}</h2>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'NameDisplay',
    computed: {
        getNumbers() {
            return this.$store.getters.getNumbers;
        }
  }
  
}
</script>

