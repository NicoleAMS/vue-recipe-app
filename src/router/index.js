import { createRouter, createWebHistory } from "vue-router";
import RecipesList from "../views/recipes/RecipesList.vue";
import RecipeDetail from "../views/recipes/RecipeDetail.vue";
import RecipeForm from "../views/recipes/RecipeForm.vue";
import AuthForm from "../views/auth/AuthForm.vue";
import UserProfile from "../views/userProfile/UserProfile.vue";
import NotFound from "../views/NotFound.vue";
import store from "../store";

const routes = [
  { path: "/", redirect: "/recipes" },
  { path: "/recipes", component: RecipesList },
  { path: "/recipes/new", component: RecipeForm },
  {
    path: "/recipes/:id",
    component: RecipeDetail,
    props: true,
    // children: [{ path: "edit", component: RecipeForm }],
  },
  { path: "/auth", component: AuthForm },
  {
    path: "/users/:id",
    component: UserProfile,
    meta: { requiresAuth: true },
  },
  {
    path: "/users/:userid/recipes/:id/edit",
    component: RecipeForm,
    props: true,
  },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(function(to, from, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else {
    next();
  }
});

export default router;
