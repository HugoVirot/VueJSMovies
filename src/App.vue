<template>
  <div id="app">
    <Header />
    <div v-if="$route.path == '/'">
        <h1 class="pt-5 font-weight-light">Vos films préférés sont sur VueJS Movies !</h1>
      <MoviesList :movies="movies" :loading="loading" :errored="errored" />
    </div>

    <div v-else>
      <h1 class="p-5">{{ $route.path }}</h1>
      <router-view :key="$route.fullPath"></router-view>
    </div>

    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import MoviesList from "./components/MoviesList.vue";
import axios from "axios";

Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

export default {
  name: "App",
  components: {
    Header,
    MoviesList,
    Footer,
  },
  data() {
    return {
      movies: [],
      loading: true,
      errored: false,
    };
  },
  methods: {
    getAllMovies(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie/?api_key=3ea8988340d4ed715d28b9978346c29e&sort_by=popularity.desc&page=1"
        )
        .then(function (response) {
          component.movies = response.data.results;
          console.log(component.movies);
          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie/?api_key=3ea8988340d4ed715d28b9978346c29e&sort_by=popularity.desc&page=2"
            )
            .then(function (response) {
              component.loading = false;
              response.data.results.forEach(function (movie) {
                component.movies.push(movie);
              });
              console.log(component.movies);
            })
            .catch(function () {
              component.errored = true;
            });
        })
        .catch(function () {
          component.errored = true;
        });
    },
  },
  created() {
    this.getAllMovies(this);
  },
};
</script>

<style>
#app {
  font-family: 'Segoe UI', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
