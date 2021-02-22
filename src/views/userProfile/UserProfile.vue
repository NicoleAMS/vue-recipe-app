<template>
  <div class="user-profile-page">
    <base-card>
      <h1>User Profile</h1>
      <p>{{ email }}</p>
      <button><router-link :to="newRecipeUrl">Add Recipe</router-link></button>
    </base-card>
  </div>
  <div>
    <h2>My Recipes</h2>
    <ul v-if="hasRecipes">
      <recipe-item
        v-for="recipe in myRecipes"
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
    email() {
      return this.$store.getters.user ? this.$store.getters.user.email : '';
    },
    hasRecipes() {
      return this.$store.getters.hasRecipes;
    },
    myRecipes() {
      const userId = this.$route.params.id;
      return this.$store.getters.recipes.filter((recipe) => recipe.userId === userId);
    },
    newRecipeUrl() {
      return `/users/${this.$route.params.id}/recipes/new`;
    }
  },
  created() {
    this.loadRecipes();
  },
  methods: {
    async loadRecipes() {
      try {
        await this.$store.dispatch("getRecipes");
      } catch (error) {
        console.log(
          this.error || "Something went wrong while loading your recipes"
        );
      }
    },
  },
  beforeRouteEnter(to, _, next) {
    const userId = localStorage.getItem("userId");
    if (to.params.id !== userId) {
      next("/recipes");
    } else {
      next();
    }
  },
};
</script>

<style lang="scss" scoped>
.user-profile-page {
  margin: 100px 5%;
}

h2 {
  text-align: center;
}

button {
  width: fit-content;
}

ul {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
