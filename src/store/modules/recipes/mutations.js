export default {
  addRecipe(state, payload) {
    state.recipes.push(payload);
  },
  loadRecipes(state, payload) {
    state.recipes = payload;
  },
  loadRecipe(state, payload) {
    state.activeRecipe = payload;
  },
  updateRecipe(state, payload) {
    state.recipes.map((rec) => {
      if (rec.id === payload.id) {
        rec = payload.recipe;
      }
    });
  },
  deleteRecipe(state, payload) {
    const index = state.recipes.findIndex(recipe => recipe.id === payload);
    state.recipes.splice(index, 1);
  }
};
