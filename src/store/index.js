import { createStore } from "vuex";
import recipeModule from "./modules/recipes/index.js";

const store = createStore({
  modules: {
    recipes: recipeModule
  }
});

export default store;