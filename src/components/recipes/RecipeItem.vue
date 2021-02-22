<template>
  <li>
    <router-link :to="recipeUrl">
      <base-card mode="recipe">
        <div>
          <img :src="url" :alt="title" />
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
      </base-card>
    </router-link>
    <div v-if="editable">
      <button><router-link :to="editUrl">Edit Recipe</router-link></button>
      <button @click="deleteRecipe">Delete Recipe</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "url", "title", "description"],
  computed: {
    recipeUrl() {
      return `/recipes/${this.id}`;
    },
    editUrl() {
      return `/users/${this.$route.params.id}/recipes/${this.id}/edit`;
    }
  },
  data() {
    return {
      editable: false
    }
  },
  created() {
    return this.$route.params.id !== undefined ? this.editable = true : this.editable = false;
  },
  methods: {
    deleteRecipe() {
      this.$store.dispatch('deleteRecipe', this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
  margin: 10px;
}

img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

button {
  margin: 20px 20px 20px 0;

  a {
    color: white;
  }
}
</style>
