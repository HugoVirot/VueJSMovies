<template>
  <div id="app">
    <Header />
    <img alt="Vue logo" src="./assets/logo.jpg" />
    <MoviesList msg="Welcome to VueJSMovies" />
  </div>
</template>

<script>
import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import MoviesList from './components/MoviesList.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    MoviesList
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
