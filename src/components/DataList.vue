<template>
  <div>
    <Data v-for="(data, index) in datas" :key="index" :datastored="data" />
    <h1>This is from Data List</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Data from "./Data.vue";
export default {
  components: {
    Data,
  },
  computed: {
    // datas(){
    //     return this.$store.state.datas;
    // }

    // in the place of this we can use spread operator mapState which is written below
    // enter which states you wanted to map
    // so i want datas state so i will write like this

    ...mapState({
      datas: "datas",
    }),
  },
};
</script>

<style>
</style>