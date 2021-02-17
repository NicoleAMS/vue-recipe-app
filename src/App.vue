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
    TheHeader 
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #CF2137;
    }
  }
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
