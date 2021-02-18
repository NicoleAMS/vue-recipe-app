<template>
  <div class="card" :class="mode">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 20px;
}

.recipe {
  width: 30vw;
  min-width: 300px;
  max-width: 500px;
  justify-content: left;
}

.recipe:hover {
  background-color:  #cf2137;
  color: #fff;
  cursor: pointer;
}

.red {
  border: none;
  background-color: rgba(207,33,55, 0.3);
}
</style>
