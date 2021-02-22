export default {
  async addRecipe(context, payload) {
    const recipe = {
      title: payload.title,
      description: payload.description,
      category: payload.category,
      cuisine: payload.cuisine,
      difficulty: payload.difficulty,
      ingredients: payload.ingredients,
      steps: payload.steps,
      image: payload.image,
      userId: payload.userId,
    };

    const response = await fetch(
      `https://vue-recipe-app-f7902-default-rtdb.europe-west1.firebasedatabase.app/recipes.json`,
      {
        method: "POST",
        body: JSON.stringify(recipe),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to save recipe");
      throw error;
    }

    context.commit("addRecipe", recipe);
  },
  async updateRecipe(context, payload) {
    const recipe = {
      title: payload.title,
      description: payload.description,
      category: payload.category,
      cuisine: payload.cuisine,
      difficulty: payload.difficulty,
      ingredients: payload.ingredients,
      steps: payload.steps,
      image: payload.image,
      userId: payload.userId,
    };

    const response = await fetch(
      `https://vue-recipe-app-f7902-default-rtdb.europe-west1.firebasedatabase.app/recipes/${payload.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(recipe),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to save recipe");
      throw error;
    }

    context.commit("updateRecipe", { recipe: recipe, id: payload.id });
  },
  async getRecipes(context) {
    const response = await fetch(
      `https://vue-recipe-app-f7902-default-rtdb.europe-west1.firebasedatabase.app/recipes.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to load recipes");
      throw error;
    }

    const recipes = [];
    for (const key in responseData) {
      const recipe = {
        id: key,
        title: responseData[key].title,
        description: responseData[key].description,
        cuisine: responseData[key].cuisine,
        category: responseData[key].category,
        difficulty: responseData[key].difficulty,
        ingredients: responseData[key].ingredients,
        steps: responseData[key].steps,
        image: responseData[key].image,
        userId: responseData[key].userId,
      };
      recipes.push(recipe);
    }
    context.commit("loadRecipes", recipes);
  },
  async getRecipe(context, payload) {
    const response = await fetch(
      `https://vue-recipe-app-f7902-default-rtdb.europe-west1.firebasedatabase.app/recipes/${payload}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to load recipes");
      throw error;
    }

    context.commit("loadRecipe", responseData);
  },
  async deleteRecipe(context, payload) {
    const response = await fetch(
      `https://vue-recipe-app-f7902-default-rtdb.europe-west1.firebasedatabase.app/recipes/${payload}.json`,
      {
        method: "DELETE",
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to load recipes");
      throw error;
    }
    context.commit("deleteRecipe", payload);
  },
};
