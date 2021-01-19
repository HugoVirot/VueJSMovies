<template>
  <b-card id="movie" class="rounded">
    <b-card-text>
    <p><b>{{ original_title }}</b></p>
    <p><img v-bind:src="preUrl + poster_path" alt="moviePoster"><p>
    <p>Sortie : <b>{{ release_date }}</b></p>
    <p>Note moyenne : <b>{{ vote_average }}</b></p>
    <p>Résumé : <b>{{ overview }}</b></p>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "Movie",
  props: ["id", "original_title", "release_date", "vote_average", "overview", "poster_path"],
  data() {
    return {
      preUrl : "https://image.tmdb.org/t/p/original/"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#movie {
  max-width: 20rem
}

#movie img {
  width: 25vw;
  max-width: 17rem;
}
</style>
