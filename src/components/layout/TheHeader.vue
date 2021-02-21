<template>
  <header>
    <nav>
      <router-link to="/" class="logo-link"
        ><img class="logo" :src="siteLogo" alt=""
      /></router-link>
      <ul>
        <li>
          <router-link to="/recipes">Recipes</router-link>
        </li>
        <li>
          <router-link to="/signup">Signup</router-link>
        </li>
        <li>
          <router-link to="/recipes/new">Add Recipe</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import image from "@/assets/recipe.png";

export default {
  computed: {
    siteLogo() {
      return image;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 100px;
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    width: 90%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo,
  .logo-link {
    height: 80px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      margin: 0 0.5rem;
    }

    a {
      font-weight: bold;
      color: white;
      text-decoration: none;
      display: inline-block;
      padding: 0.75rem 1.5rem;
      border: 1px solid transparent;
    }

    a:active,
    a:hover,
    a.router-link-active {
      border: 1px solid #cf2137;
    }
  }
}
</style>
