<template>
  <div id="app">
   
    <!-- <p>count</p>{{this.count}}
    <button @click="countIncrease">add Count</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  computed: {
    count(){
      return this.$store.state.count
    }
  },
  methods: {
    countIncrease(){
      this.$store.commit('countIncrease')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
