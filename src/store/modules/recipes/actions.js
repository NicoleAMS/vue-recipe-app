export default {
  addRecipe(context, payload) {
    const recipe = {
      id: `r${context.getters.recipes.length + 1}`,
      title: payload.title,
      description: payload.description,
      category: payload.category,
      cuisine: payload.cuisine,
      difficulty: payload.difficulty,
      ingredients: payload.ingredients,
      steps: payload.steps,
      image: `https://source.unsplash.com/300x200/?${payload.title}`,
    };

    context.commit("addRecipe", recipe);
  },
};
