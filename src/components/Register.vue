
<script>
import { useUserStore } from '../stores/userStore'; // Importing the user store from Pinia

export default {
    data() {
        return {
            name: '',
            email: '',
            role: '',
            password: ''
        };
    },
    methods: {
        register() {
            const userStore = useUserStore();
            userStore.registerUser(this.name, this.email, this.role, this.password);
            // Redirect to login page after registration
            this.$router.push('/');
        }
    }
}
</script>

<template>
  <div class="register-container">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="role">Role:</label>
        <input type="text" id="role" v-model="role" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<style scoped>
  /* falta estilos */
  .register-container {
    /* falta estilos */
  }
</style>
