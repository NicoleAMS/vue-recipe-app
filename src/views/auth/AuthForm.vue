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
        <p v-if="!formIsValid">
          Please enter a valid email address and password. Passwords need to
          have at least 6 characters.
        </p>
        <button type="submit">{{ submitBtnText }}</button>
        <button type="button" class="reverse-btn" @click="changeMode">
          {{ changeModeBtnText }}
        </button>
        <p v-if="!!error">{{ error }}</p>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "signup",
      error: null
    };
  },
  computed: {
    submitBtnText() {
      return this.mode === "signup" ? "Signup" : "Login";
    },
    changeModeBtnText() {
      return this.mode === "signup" ? "Login instead" : "Signup instead";
    },
  },
  methods: {
    async submitForm() {
      this.validateForm();
      if (this.formIsValid) {
        const payload = {
          email: this.email,
          password: this.password,
          mode: this.mode,
        };
        try {
          await this.$store.dispatch("auth", payload);
          this.$router.replace('/recipes');
        } catch(error) {
          this.error = error.message || `Failed to ${this.mode}`;
        }
      }
    },
    changeMode() {
      return this.mode === "signup"
        ? (this.mode = "login")
        : (this.mode = "signup");
    },
    validateForm() {
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        !this.email.includes(".") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
      } else {
        this.formIsValid = true;
      }
    },
  },
};
</script>

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

.reverse-btn {
  color: #cf2137;
  background-color: white;
  margin-right: 0.5rem;
}
</style>
