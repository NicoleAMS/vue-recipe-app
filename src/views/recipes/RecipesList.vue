<template>
  <div class="recipes-page">
    <h1>Recipes</h1>
    <ul v-if="hasRecipes">
      <recipe-item
        v-for="recipe in recipes"
        :key="recipe.id"
        :id="recipe.id"
        :title="recipe.title"
        :description="recipe.description"
        :url="recipe.image"
      >
      </recipe-item>
    </ul>
  </div>
</template>

<script>
import RecipeItem from "@/components/recipes/RecipeItem.vue";

export default {
  components: {
    RecipeItem,
  },
  computed: {
    recipes() {
      return this.$store.getters.recipes;
    },
    hasRecipes() {
      return this.$store.getters.hasRecipes;
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

h1 {
  text-align: center;
}
</style>
