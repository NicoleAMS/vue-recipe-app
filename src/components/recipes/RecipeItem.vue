<template>
  <li>
    <base-card mode="recipe">
      <div>
        <img :src="url" :alt="title" />
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ["url", "title", "description"],
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
</style>
