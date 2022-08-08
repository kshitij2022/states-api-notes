<template>
  <div style="width:250px; margin:5px auto;">
    <div style="display:flex; justify-content:space-between;">
      <span :class="{completed:datastored.done}">{{ datastored.title }}</span>
    <button @click="deleteData">Delete</button>
  </div>
  </div>
</template>

<script>
export default {
  props: ["datastored"],
  methods:{
    deleteData(){
      this.$store.dispatch('deleteData', this.datastored)
    }
  }
};
</script>

<style scoped>
.completed{
  text-decoration: line-through;
}
</style>