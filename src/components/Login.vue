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

<template>
  <div class="row align-items-center">
    <div class="col-xl-2">
      <img src="../../dist/assets/logoInicio-removebg-preview.png" alt="Icono inicio sesión">
    </div>
    <div class="col-xl-10">
      <div class="notepaper">
        <h2>¡Hello!</h2>
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
    </div>
  </div>
</template>

<style scoped>

img {
  width: 300px;
}

@media (min-width: 1201px) {
  img {
    width: 600px;
  }
}
/*
 * Copyright (c) 2012-2013 Thibaut Courouble
 * http://www.cssflow.com
 * Licensed under the MIT License
 *
 * Sass/SCSS source: https://goo.gl/8hncj
 * PSD by Liam McCabe: https://goo.gl/md3Dj
 */


.notepaper {
  position: relative;
  margin: 30px auto;
  padding: 29px 20px 20px 45px;
  width: 300px;
  height: 320px;
  line-height: 30px;
  color: #6a5f49;
  text-shadow: 0 1px 1px white;
  background-color: #f2f6c1;
  background-image: -webkit-radial-gradient(center, cover, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.1) 90%), -webkit-repeating-linear-gradient(top, transparent 0%, transparent 29px, rgba(239, 207, 173, 0.7) 29px, rgba(239, 207, 173, 0.7) 30px);
  background-image: -moz-radial-gradient(center, cover, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.1) 90%), -moz-repeating-linear-gradient(top, transparent 0%, transparent 29px, rgba(239, 207, 173, 0.7) 29px, rgba(239, 207, 173, 0.7) 30px);
  background-image: -o-radial-gradient(center, cover, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.1) 90%), -o-repeating-linear-gradient(top, transparent 0%, transparent 29px, rgba(239, 207, 173, 0.7) 29px, rgba(239, 207, 173, 0.7) 30px);
  border: 1px solid #c3baaa;
  border-color: rgba(195, 186, 170, 0.9);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: inset 0 1px rgba(255, 255, 255, 0.5), inset 0 0 5px #d8e071, 0 0 1px rgba(0, 0, 0, 0.1), 0 2px rgba(0, 0, 0, 0.02);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.5), inset 0 0 5px #d8e071, 0 0 1px rgba(0, 0, 0, 0.1), 0 2px rgba(0, 0, 0, 0.02);
}

.notepaper:before, .notepaper:after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
}

.notepaper:before {
  left: 28px;
  width: 2px;
  border: solid #efcfad;
  border-color: rgba(239, 207, 173, 0.9);
  border-width: 0 1px;
}

.notepaper:after {
  z-index: -1;
  left: 0;
  right: 0;
  background: rgba(242, 246, 193, 0.9);
  border: 1px solid rgba(170, 157, 134, 0.7);
  -webkit-transform: rotate(2deg);
  -moz-transform: rotate(2deg);
  -ms-transform: rotate(2deg);
  -o-transform: rotate(2deg);
  transform: rotate(2deg);
}

label {
  font-weight: bold;
  margin-top: 5px;
}
input {
  border: 0;
  padding: 5px;
  box-shadow: 5px 5px 5px #6a5f49fb;
}

button {
  width: 90px;
  margin-top: 30px;
  margin-right: 20px;
  border-radius: 5px;
}

</style>

<!-- Imagen de <a href="https://pixabay.com/es/users/peggy_marco-1553824/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1834100">Peggy und Marco Lachmann-Anke</a> en <a href="https://pixabay.com/es//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1834100">Pixabay</a> -->
