<template>
  <b-card id="movie" class="m-auto rounded p-5 justify-content-center">
    <h1 class="p-3">
      <b>{{ movie.original_title }}</b>
    </h1>
    <h5 class="font-italic p-2 mb-3">"{{ movie.tagline }}"</h5>
    <img
      class="m-auto"
      v-bind:src="preUrl + movie.poster_path"
      alt="moviePoster"
    />
    <p>
      Sortie : <b>{{ movie.release_date }}</b>
    </p>
    <p>
      Note moyenne : <b>{{ movie.vote_average }}</b> (
      {{ movie.vote_count }} votes )
    </p>
    <p>
      Langue originale : <b>{{ movie.original_language }}</b>
    </p>
    <p>
      Titre original : <b>{{ movie.original_title }}</b>
    </p>
    <div>
      Résumé : <b>{{ movie.overview }}</b>
    </div>
  </b-card>
</template>

<script>
import axios from "axios";

export default {
  name: "MovieDetails",
  data() {
    return {
      id: this.$route.params.id,
      movie: null,
      preUrl: "https://image.tmdb.org/t/p/original/",
      loading: true,
      errored: false,
    };
  },
  methods: {
    getMovieById(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            component.id +
            "?api_key=3ea8988340d4ed715d28b9978346c29e"
        )
        .then(function (response) {
          component.loading = false;
          console.log(component.id);
          console.log(response.data);
          component.movie = response.data;
          console.log(component.movie);
        })
        .catch(function () {
          component.errored = true;
        });
    },
  },
  created() {
    this.getMovieById(this);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#link {
  text-decoration: none;
  color: inherit;
}
#movie {
  width: 70vw;
  max-width: 600px;
}

#movie img {
  width: 50vw;
  max-width: 400px;
}
</style>
