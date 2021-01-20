<template>
  <div class="container pb-5">
    <button class="btn btn-dark m-1" v-on:click="sortByTitle()">Trier par titre</button>
    <button class="btn btn-dark m-1" v-on:click="sortByDate()">Trier par date de sortie</button>
    <button class="btn btn-dark m-1" v-on:click="sortByRating()">Trier par note</button>
  </div>
</template>

<script>
export default {
  name: "SortButtons",
  props: ["movies"],
  data() {
      return {
          sortedByTitle: false,
          sortedByDate: false,
          sortedByRating: false
      }
  },
  methods: {
      sortByTitle() {
          if (!this.sortedByTitle) {

          this.sortedByTitle = true;

          return this.movies.sort((a, b) => {
              if (a.original_title < b.original_title) return -1;
              return a.original_title > b.original_title ? 1 : 0;
          })

          } else {

          this.sortedByTitle = false;

          this.movies.sort((a, b) => {
          if (a.original_title > b.original_title) return -1;
          return a.original_title < b.original_title ? 1 : 0;
        })
        }
    },
          sortByDate() {
          if (!this.sortedByDate) {

          this.sortedByDate = true;

          return this.movies.sort((a, b) => {
              if (a.release_date < b.release_date) return -1;
              return a.release_date > b.release_date ? 1 : 0;
          })

          } else {

          this.sortedByDate = false;

          this.movies.sort((a, b) => {
          if (a.release_date > b.release_date) return -1;
          return a.release_date < b.release_date ? 1 : 0;
        })
        }
    },
          sortByRating() {
          if (!this.sortedByRating) {

          this.sortedByRating = true;

          return this.movies.sort((a, b) => {
              if (a.vote_average < b.vote_average) return -1;
              return a.vote_average > b.vote_average ? 1 : 0;
          })

          } else {

          this.sortedByRating = false;

          this.movies.sort((a, b) => {
          if (a.vote_average > b.vote_average) return -1;
          return a.vote_average < b.vote_average ? 1 : 0;
        })
        }
    },
  },
};
</script>
