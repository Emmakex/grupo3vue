<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
      <button type="button" @click="$router.push('/register')">Register</button>
    </form>
  </div>
</template>

<script>
import { useUserStore } from '../stores/userStore'; // Importando la tienda de usuarios desde Pinia

export default {
  data() {
      return {
          email: '',
          password: ''
      };
  },
  methods: {
      async login() {
          const userStore = useUserStore();
          const isAuthenticated = userStore.loginUser(this.email, this.password);

          if (isAuthenticated) {
              // Si el usuario está autenticado, configure el usuario actual en la tienda.
              userStore.setCurrentUser(this.email);
              localStorage.setItem('authToken', 'your-token-here');
              this.$router.push('/home');
          } else {
              alert('Authentication failed!');
          }
      }
  }
}
</script>

<style scoped>
/* ... Falata estilos ... */
</style>
