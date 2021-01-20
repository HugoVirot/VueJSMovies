<template>
  <div>
    <h1 class="pt-5 font-weight-light">Films les mieux notés</h1>
    <Top50MoviesList :movies="movies" :loading="loading" :errored="errored" />
  </div>
</template>

<script>
import Top50MoviesList from "./Top50MoviesList.vue";
import axios from "axios";

export default {
  name: "LastMovies",
  components: {
    Top50MoviesList,
  },
  data() {
    return {
      movies: [],
      loading: true,
      errored: false,
    };
  },
  methods: {
    getTopRatedMovies(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie/?api_key=3ea8988340d4ed715d28b9978346c29e&sort_by=vote_count.desc&page=1"
        )
        .then(function (response) {
          component.movies = response.data.results;
          console.log(component.movies);
          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie/?api_key=3ea8988340d4ed715d28b9978346c29e&sort_by=vote_count.desc&page=2"
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
    this.getTopRatedMovies(this);
  },
};
</script>

<style>
</style>
