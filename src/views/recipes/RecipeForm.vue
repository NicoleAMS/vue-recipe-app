<template>
  <div class="recipe-form-page">
    <h1 v-if="id ===''">Add Recipe</h1>
    <h1 v-else>Edit Recipe</h1>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-content">
          <div class="left">
            <div class="form-group">
              <label for="title" class="form-label">Title</label>
              <input
                type="text"
                class="form-control"
                id="title"
                v-model.trim="title"
              />
            </div>
            <div class="form-group">
              <label for="description" class="form-label">Description</label>
              <textarea
                class="form-control"
                id="description"
                rows="3"
                v-model.trim="description"
              ></textarea>
            </div>
            <div class="form-group">
              <label>Ingredients</label>
              <div class="ingredientList">
                <input
                  type="text"
                  class="form-control"
                  v-for="i in numOfIngredients"
                  :key="i"
                  v-model="ingredients[i - 1]"
                />
              </div>
              <button
                id="addIngredientBtn"
                type="button"
                @click="addIngredient"
              >
                Add Ingredient
              </button>
            </div>
            <div class="form-group">
              <label>Steps</label>
              <div id="stepsList">
                <textarea
                  type="text"
                  rows="3"
                  class="form-control"
                  v-for="i in numOfSteps"
                  :key="i"
                  v-model="steps[i - 1]"
                ></textarea>
              </div>
              <button id="addStepsBtn" type="button" @click="addSteps">
                Add Steps
              </button>
            </div>
          </div>
          <div class="right">
            <div class="form-group">
              <label>Cuisine</label>
              <select class="form-select" v-model="cuisine">
                <option selected value="Chinese">Chinese</option>
                <option value="French">French</option>
                <option value="Italian">Italian</option>
                <option value="Indian">Indian</option>
              </select>
            </div>
            <div class="form-group">
              <label>Category</label>
              <select class="form-select" v-model="category">
                <option selected value="Salad">Salad</option>
                <option value="Soup">Soup</option>
                <option value="Main">Main</option>
                <option value="Dessert">Dessert</option>
              </select>
            </div>
            <div class="form-group">
              <label>Difficulty</label>
              <select class="form-select" v-model="level">
                <option selected value="1">Easy</option>
                <option value="2">Intermediate</option>
                <option value="3">Advanced</option>
              </select>
              <div class="form-group">
                <label for="image" class="form-label">Image URL</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  v-model.trim="image"
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numOfIngredients: 1,
      numOfSteps: 1,
      title: "",
      description: "",
      cuisine: "Chinese",
      category: "Salad",
      level: "1",
      image: '',
      ingredients: [],
      steps: [],
      id: "",
    };
  },
  created() {
    this.id = this.$route.params.id || "";
    if (this.id !== "") {
      this.fillForm();
    }
  },
  methods: {
    addIngredient() {
      this.numOfIngredients++;
    },
    addSteps() {
      this.numOfSteps++;
    },
    fillForm() {
      const recipe = this.$store.getters.recipes.find(
        (recipe) => recipe.id === this.id
      );
      this.title = recipe.title;
      this.description = recipe.description;
      this.ingredients = recipe.ingredients;
      this.steps = recipe.steps;
      this.cuisine = recipe.cuisine;
      this.category = recipe.category;
      this.difficulty = recipe.difficulty;
      this.image = recipe.image;

      this.numOfIngredients = this.ingredients.length;
      this.numOfSteps = this.steps.length;
    },
    submitForm() {
      // validate form
      const recipe = {
        title: this.title,
        description: this.description,
        cuisine: this.cuisine,
        category: this.category,
        difficulty: this.level,
        ingredients: this.ingredients,
        steps: this.steps,
        image: this.image
      };
      if (this.id !== "") {
        recipe.id = this.id;
        this.$store.dispatch("updateRecipe", recipe);
      } else {
        this.$store.dispatch("addRecipe", recipe);
      }
      this.$router.replace("/recipes");
    },
  },
};
</script>

<style lang="scss" scoped>
.recipe-form-page {
  margin: 80px auto;
  width: 80%;
}

.form-content {
  display: flex;
}

.left,
.right {
  width: 50%;
  margin: 20px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus,
select:focus {
  background-color: rgba(207, 33, 55, 0.1);
  outline: none;
  border-color: #cf2137;
}

.form-select,
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.form-select {
  background-image: url("https://www.chessable.com/img/caret.svg");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
}

</style>
