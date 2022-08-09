<template>
  <div style="width:250px; margin:5px auto;">
    <div style="display:flex; justify-content:space-between;">
      <span :class="{completed:datastored.done}" @click="toggleData(datastored)">{{ datastored.title }}</span>
    <button @click="deleteData(datastored)">Delete</button>
  </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ["datastored"],
  methods:{
    ...mapActions({
      deleteData:'deleteData',
      toggleData:'toggleData'
    }),

    // deleteData(){
    //   this.$store.dispatch('deleteData', this.datastored)
    // },
    // toggleDataStatus(){
    //   this.$store.dispatch('toggleData',this.datastored)
    // }
  }
};
</script>

<style scoped>
.completed{
  text-decoration: line-through;
}
</style>