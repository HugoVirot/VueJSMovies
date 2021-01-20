<template>
<div>
  <h1 class="pt-5 font-weight-light">Films français</h1>
  <MoviesList :movies="movies" :loading="loading" :errored="errored" />
</div>
</template>

<script>

import MoviesList from "./MoviesList.vue";
import axios from "axios";


export default {
  name: "FrenchMovies",
  components: {
    MoviesList
  },
  data() {
    return {
      movies: [],
      loading: true,
      errored: false,
    };
  },
  methods: {
    getFrenchMovies(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie/?api_key=3ea8988340d4ed715d28b9978346c29e&with_original_language=fr&page=1"
        )
        .then(function (response) {
          component.movies = response.data.results;
          console.log(component.movies);
          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie/?api_key=3ea8988340d4ed715d28b9978346c29e&with_original_language=fr&page=2"
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
    this.getFrenchMovies(this);
  },
};
</script>

<style>
</style>
