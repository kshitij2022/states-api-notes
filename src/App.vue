<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->

      <!-- <Data/> -->
      <h1>App Data</h1>

      <!-- Gettets Starts -->
      <!-- <h3>Completed:{{$store.getters.completedData}}</h3> -->
      <!-- <h3>Completed:{{ computedDoneData }}</h3>
      <h3>Pending:{{ pendingStateData }}</h3> -->
      <h3>Completed:{{ completedData }}</h3>
      <h3>Pending:{{ pendingData }}</h3>
      <!-- Gettets Edns -->
      <DataList />
      <DataForm />
      <!-- <router-view /> -->
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import DataList from "./components/DataList.vue";
import DataForm from "./components/DataForm.vue";
export default {
  data() {
    return {};
  },
  components: {
    // Data,
    DataList,
    DataForm,
  },
  computed: {
    ...mapGetters({
        completedData:"completedData",  
        pendingData:"pendingData"
    }), 

    // computedDoneData() {
    //   return this.$store.getters.completedData;
    // },
    // pendingStateData() {
    //   return this.$store.getters.pendingData;
    // },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
