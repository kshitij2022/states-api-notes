<template>
  <div>
    <Data v-for="(data,index) in datas" :key="index" :datastored="data" />
    <h1>This is from Data List</h1>
  </div>
</template>

<script>
import Data from "./Data.vue";
export default {
  components: {
    Data,
  },
  computed:{
    datas(){
        return this.$store.state.datas;
    }
  }
};
</script>

<style>
</style>