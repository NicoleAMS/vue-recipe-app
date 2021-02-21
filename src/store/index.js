import { createStore } from "vuex";
import recipeModule from "./modules/recipes/index.js";
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    recipes: recipeModule,
    auth: authModule
  }
});

export default store;