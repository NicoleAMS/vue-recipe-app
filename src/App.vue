<template>
  <the-header></the-header>
  <!-- <div id="nav">
    <router-link to="/recipes">Recipes</router-link> |
    <router-link to="/recipes/10">Recipe Details</router-link>
  </div> -->
  <router-view />
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  created() {
    this.$store.dispatch('autoLogin');
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

a {
  text-decoration: none;
  color: white;
}

button {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #cf2137;
  border: 1px solid #cf2137;
  color: white;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 15px;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #2c3e50;
  border-color: #2c3e50;
}
</style>
