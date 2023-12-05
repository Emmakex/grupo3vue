
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
            const userStore = useUserStore(); // Llamada a userStore
            userStore.registerUser(this.name, this.email, this.role, this.password); // Invoca la función de registro pasando los datos introducidos por el usuario
            // Redirige a login después del registro
            this.$router.push('/');
        }
    }
}
</script>

<template>
  <div class="text-center">
    <img src="/logo.svg" alt="Go For It" class="logo" />
    <div class="login-dark">
      <form @submit.prevent="register">
        <div class="text-left mb-2">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" required class="form-control">
        </div>
        <div class="text-left mb-2">
          <label for="role">Role</label>
          <input type="text" id="role" v-model="role" required class="form-control">
        </div>
        <div class="text-left mb-2">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required class="form-control">
        </div>
        <div class="text-left mb-2">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required class="form-control">
        </div>
        <button type="submit" class="btn btn-primary btn-block">Register</button>
      </form>
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
</style>
