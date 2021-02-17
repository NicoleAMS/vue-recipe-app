<template>
  <div class="recipes-page">
    <h1>Recipes</h1>
    <ul v-if="hasRecipes">
      <li v-for="recipe in recipes" :key="recipe.id">
        {{ recipe.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    recipes() {
      return this.$store.getters.recipes;
    },
    hasRecipes() {
      return this.$store.getters.hasRecipes;
    }
  }
}
</script>

