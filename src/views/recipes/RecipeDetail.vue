<template>
  <div class="recipe-page">
    <base-card v-if="recipe">
      <img :src="image" :alt="title" />
      <div class="intro">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
      <main>
        <div class="left">
          <div class="ingredients">
            <h2>Ingredients</h2>
            <ul v-if="ingredients">
              <li v-for="ingr in ingredients" :key="ingr">
                <input type="checkbox" name="ingredient" id="ingredient" />
                <label for="ingredient"> {{ ingr }}</label>
              </li>
            </ul>
          </div>
          <div class="steps">
            <h2>Steps</h2>
            <ul v-if="steps">
              <li v-for="(step, index) in steps" :key="step">
                <input type="checkbox" name="step" id="step" />
                <label for="step"
                  ><strong>Step {{ index + 1 }}</strong
                  >: {{ step }}</label
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <base-card mode="red">
            <h3>Details</h3>
            <ul>
              <li>Cuisine: {{ recipe.cuisine }}</li>
              <li>Category: {{ recipe.category }}</li>
              <li>Difficulty: {{ recipe.difficulty }}</li>
            </ul>
          </base-card>
          <!-- <button>
            <router-link :to="updateLink">Edit recipe</router-link>
          </button> -->
        </div>
      </main>
    </base-card>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],
  created() {
    // this.recipe = this.$store.getters.recipes.find((r) => r.id === this.id);
    this.loadRecipe();
  },
  methods: {
    async loadRecipe() {
      try {
        await this.$store.dispatch("getRecipe", this.id);
      } catch (error) {
        console.log(this.error || "Something went wrong while loading this recipe");
      }
    },
  },
  computed: {
    recipe() {
      return this.$store.getters.activeRecipe;
    },
    title() {
      return this.recipe.title;
    },
    image() {
      return this.recipe.image;
    },
    description() {
      return this.recipe.description;
    },
    ingredients() {
      return this.recipe.ingredients;
    },
    steps() {
      return this.recipe.steps;
    },
    updateLink() {
      return `/recipes/${this.id}/edit`;
    },
  },
};
</script>

<style lang="scss" scoped>
.recipe-page {
  margin: 80px auto;
  width: 80%;
}

img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.intro {
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  width: 90%;
  margin: 0 auto 50px;
}

main {
  display: flex;
}

.left {
  width: 75%;
  padding: 10px;
  text-align: left;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;

  .ingredients,
  .steps {
    width: 50%;
    margin: 0 20px;
  }
}

.right {
  width: 25%;
  padding: 10px;
  text-align: left;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
  margin-bottom: 10px;
}

input {
  margin-right: 10px;
}

button {
  margin-top: 20px;
}
</style>
