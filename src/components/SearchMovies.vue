<template>
  <div class="search p-5">
    <h1 class="p-5">Rechercher un film</h1>
    <input class="mb-5" type="text" v-model="query" @keyup="getResult(query)" />
    <div class=" row p-3 justify-content-center" v-for="result in results" :key="result.id">
      <Movie
        :original_title="result.original_title"
        :poster_path="result.poster_path"
        :release_date="result.release_date"
        :vote_average="result.vote_average"
        :overview="result.overview"
      />
    </div>
  </div>
</template>


<script>
import Movie from "./Movie.vue";
import axios from "axios";
export default {
  name: "search",
  components: { Movie },
  data() {
    return {
      query: "",
      results: "",
    };
  },
  methods: {
    getResult(query) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=3ea8988340d4ed715d28b9978346c29e&query=" +
            query
        )
        .then((response) => {
          this.results = response.data.results;
        });
      console.log(this.results);
    },
  },
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