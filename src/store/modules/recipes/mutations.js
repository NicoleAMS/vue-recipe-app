export default {
  addRecipe(state, payload) {
    state.recipes.push(payload);
  },
  loadRecipes(state, payload) {
    state.recipes = payload;
  }
};
