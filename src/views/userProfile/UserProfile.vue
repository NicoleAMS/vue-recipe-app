<template>
  <div class="user-profile-page">
    <base-card>
      <h1>User Profile</h1>
      <p>{{ email }}</p>
    </base-card>
  </div>
</template>

<script>
export default {
  computed: {
    email() {
      return this.$store.getters.user.email;
    },
  },
};
</script>

<style lang="scss" scoped>
.user-profile-page {
  margin: 100px 20%;
}
</style>
