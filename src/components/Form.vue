<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            description: ''
        };
    },
    methods: {
        submit() {
            this.$router.push('/'); //Hacer que envie mail y se redireccione a otro sitio 
        }
    }
}
</script>

<template>
  <div class="col-xl-12 text-center">
      <h2 class="text-white mb-4">Contact for incidents</h2>
      <form @submit.prevent="submit" class="login-dark text-white center">
        <div class="text-left mb-2">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" required class="form-control">
        </div>
        <div class="text-left mb-2">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required class="form-control">
        </div>
        <div class="text-left mb-2">
          <label for="description">Description</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Enviar</button>
      </form>
  </div>
</template>

<style scoped>
.login-dark{
  max-width:600px;
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