<template>
  <div id="app">
    <Banner msg="Meet & Greet"/>
    <HomePage/>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import HomePage from "./components/HomesPage.vue"

export default {
  name: 'App',
  components: {
    Banner,
    HomePage
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
