<template>
  <div>
    <input v-model="numberInput" type="number" />
    <button @click="incrementNumber(numberInput)">
        Add new button
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "NumberSubmit",
  data: function() {
      return {
          numberInput: 0
      }
  },
  ...mapActions(['addNumber']),
  methods: {
    incrementNumber(numberInput) {
      this.$store.dispatch("addNumber", Number(numberInput));
    }
    
  }
};
</script>