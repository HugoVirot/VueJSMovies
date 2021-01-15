<template>
  <div class="hello">
    <h1 class="p-5">{{ msg }}</h1>

    <section v-if="errored">
      <!--message d'erreur si échec-->
      <p class="text-danger">Echec de la requête. Veuillez réessayer.</p>
    </section>

    <section v-else>
      <!--message de chargement en attendant-->
      <div v-if="loading">Chargement...</div>

      <!--ensuite, affichage de la liste des films-->
      <div v-else>
        <ul>
          <li class="list-unstyled" v-for="movie in movies" :key="movie.id">
            <Movie
              :original_title="movie.original_title"
              :poster_path="movie.poster_path"
              :release_date="movie.release_date"
              :vote_average="movie.vote_average"
              :overview="movie.overview"
            />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Movie from "./Movie.vue";
import axios from "axios";

export default {
  name: "MoviesList",
  components: {
    Movie,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      movies: [],
      loading: true,
      errored: false,
    };
  },
  methods: {
    getMovies(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie/?api_key=3ea8988340d4ed715d28b9978346c29e&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        )
        .then(function (response) {
          component.loading = false;
          component.movies = response.data.results;
          console.log(component.movies);
        })
        .catch(function () {
          component.errored = true;
        });
    },
  },
  created() {
    this.getMovies(this)
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
