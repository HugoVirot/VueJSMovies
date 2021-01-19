<template>
  <header class="bg-light">
    <img class="pt-3" alt="banner" src="../assets/banner.jpg" style="width: 70vw">
    <h1 class="p-5" id="title">VUE JS MOVIES</h1>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">

        <b-navbar-brand href="#">
          <router-link to="/" class="link p-5">VueJS Movies
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>

            <b-nav-item>
              <router-link to="/FrenchMovies" class="link p-5">Films français</router-link>
            </b-nav-item>

            <b-nav-item>
              <router-link to="/AmericanMovies" class="link p-5">Films américains</router-link>
            </b-nav-item>

            <b-nav-item>
              <router-link to="/FrenchMovies" class="link p-5">Top 50 : les mieux notés</router-link>
            </b-nav-item>

            <b-nav-item>
              <router-link to="/LastMovies" class="link p-5">Films de 2020</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  margin-top: -60px;
}

#title {
  letter-spacing: 4vw
}

.link {
  text-decoration: none;
  color : inherit
}
</style>