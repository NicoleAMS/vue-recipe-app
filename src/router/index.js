import { createRouter, createWebHistory } from "vue-router";
import RecipesList from "../views/recipes/RecipesList.vue";
import RecipeDetail from "../views/recipes/RecipeDetail.vue";
import RecipeForm from "../views/recipes/RecipeForm.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  { path: "/", redirect: "/recipes" },
  { path: "/recipes", component: RecipesList },
  { path: "/recipes/new", component: RecipeForm },
  {
    path: "/recipes/:id",
    component: RecipeDetail,
    props: true,
    children: [{ path: "edit", component: RecipeForm }],
  },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
