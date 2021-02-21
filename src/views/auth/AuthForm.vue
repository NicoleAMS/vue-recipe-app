<template>
  <div class="auth-form-page">
    <h1>Sign up</h1>
    <!-- <h1>Login</h1> -->
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-content">
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model.trim="email"
            />
          </div>
          <div class="form-group">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model.trim="password"
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </base-card>
  </div>
</template>

<style lang="scss" scoped>
.auth-form-page {
  margin: 80px auto;
  width: 40%;
}

label {
  font-weight: bold;
  margin: 0.5rem 0;
  display: block;
}

input,
textarea {
  border: 1px solid #ccc;
  font: inherit;
  display: block;
}

input:focus,
textarea:focus,
select:focus {
  background-color: rgba(207, 33, 55, 0.1);
  outline: none;
  border-color: #cf2137;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

button {
  float: right;
  margin-top: 0.5rem;
}
</style>
