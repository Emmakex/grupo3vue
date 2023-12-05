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
          const userStore = useUserStore(); // Llamamos a la función de userstore
          const isAuthenticated = userStore.loginUser(this.email, this.password); // Llamamos a la función que comprobará el login

          if (isAuthenticated) { // Si el usuario se ha identificado bien (true)
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
    <div class="text-center">
      <img src="/logo.svg" alt="Go For It" class="logo" />
      <div class="login-dark">
        <form @submit.prevent="login">
          <div class="text-left mb-2">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required class="form-control">
          </div>
          <div class="text-left mb-2">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required class="form-control">
          </div>
          <button type="submit" class="btn btn-primary btn-block">Login</button>
          <p class="q-register">Haven't you registered yet? <a @click="$router.push('/register')" class="register-link"> Register</a></p>
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
.login-dark{
  max-width:330px;
  width:90%;
  background-color:#262B3E;
  padding:40px;
  border-radius:4px;
  top:50%;
  left:50%;
  color:#fff;
  box-shadow:3px 3px 4px rgba(0,0,0,0.2);
  margin: auto;
}
.login-dark .form-control {
  background:none;
  border:none;
  border-bottom:1px solid #434a52;
  border-radius:0;
  box-shadow:none;
  outline:none;
  color:inherit;
}
.login-dark .btn-primary {
  background:#3261FF;
  border:none;
  border-radius:4px;
  padding:11px 75px;
  box-shadow:none;
  margin-top:26px;
  text-shadow:none;
  outline:none;
}
.login-dark form .btn-primary:hover, .login-dark form .btn-primary:active {
  background:#214a80;
  outline:none;
}
.login-dark form .forgot {
  display:block;
  text-align:center;
  font-size:12px;
  color:#6f7a85;
  opacity:0.9;
  text-decoration:none;
}
.login-dark form .forgot:hover, .login-dark form .forgot:active {
  opacity:1;
  text-decoration:none;
}
.login-dark .btn-primary:active {
  transform:translateY(1px);
}
.logo{
  width: 11em;
  margin: 5em auto 3em auto;
}
.text-center{
  text-align: center;
}
.text-left{
  text-align: left;
}
.mb-2{
  margin-top: 2em;
}
.q-register{
  font-size: 0.9em;
  color: #f4f4f4;
  display: flex;
  margin-top: 2em;
}
.register-link{
  font-size: 0.9em;
  text-decoration: underline;
  text-underline-offset: 6px;
  color: #fff;
  margin-left: 0.2em;
  font-style: oblique;
  &:hover{
    color: #3261FF;
  }
}
</style>

<!-- Imagen de <a href="https://pixabay.com/es/users/peggy_marco-1553824/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1834100">Peggy und Marco Lachmann-Anke</a> en <a href="https://pixabay.com/es//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1834100">Pixabay</a> -->
