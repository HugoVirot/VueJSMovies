import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  methods: {
    getAllMovies(component) {
      axios
        .get("https://api.themoviedb.org/3/discover/movie/?api_key=3ea8988340d4ed715d28b9978346c29e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
        .then(function (response) {
          component.loading = false;                  
          component.movies = response.data.results;   
          console.log("requête ok !");
          console.log(component.movies)
        })
        .catch(function () {
          this.errored = true;
        });
    },
    getMovies2(component) {
      axios
        .get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc?api_key=3ea8988340d4ed715d28b9978346c29e")
        .then(function (response) {
          component.loading = false;                  
          component.movies = response.data.results;  
          console.log("requête ok !");
          console.log(component.movies)
        })
        .catch(function () {
          
          this.errored = true;
        });
    },
  }
}).$mount('#app')
