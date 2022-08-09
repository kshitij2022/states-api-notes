<template>
  <div>
    <input type="text" v-model="newDataItem" />
    <button @click="addNewDataItem()">Submit</button>
  </div>
</template>

<script>
export default {
  name: "DataForm",
  data() {
    return {
      newDataItem: "",
    };
  },
  methods: {
    addNewDataItem() {
      this.$store.dispatch("addNewData", this.newDataItem);
      this.newDataItem = "";
    },
  },
};
</script>

<style>
</style>