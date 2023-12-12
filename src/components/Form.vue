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
  <div class="row">
    <div class="col-12 col-md-7">
        <h2 class="text-white mb-2 text-center">Contact for incidents</h2>
        <h4 class="mb-4 text-center">Fill up form bellow to send us a message.</h4>
        <form @submit.prevent="submit" class="login-dark text-white">
          <div class="text-left mb-2">
            <label for="name" class="mb-1">Name</label>
            <input type="text" id="name" v-model="name" required>
          </div>
          <div class="text-left mb-2">
            <label for="email" class="mb-1">Email</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="text-left mb-4">
            <label for="description" class="mb-1">Description</label>
            <textarea id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block mb-5">Enviar</button>
        </form>
    </div>
    <div class="col-12 col-md-4 offset-md-1 col-lg-3 offset-lg-2 d-flex justify-content-center direction-c">
        <div class="text-white d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill me-3" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg>
          <span>Barcelona</span>
        </div>
        <div class="text-white d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill me-3" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
          <a href="tel:932902400" class="link-style">932 902 400</a>
        </div>
        <div class="text-white d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill me-3" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
          </svg>
          <a href="mailto:secre@salleurl.edu" class="link-style">secre@salleurl.edu</a>
        </div>
        <div class="text-white d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github me-3" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>
          <a href="https://github.com/Emmakex/grupo3vue" target="_blank" class="link-style">Git hub Grupo 3</a>
        </div>
    </div>
  </div>
</template>

<style scoped>
h4{
  color: #9FA8C7;
  font-size: 1.1em;
}
.direction-c{
    flex-direction: column;
}
.link-style{
  text-decoration: none;
  color: #fff;
}
.link-style:hover{
  color: #9FA8C7;
}
.login-dark{
  top:50%;
  left:50%;
  color:#fff;
  box-shadow:3px 3px 4px rgba(0,0,0,0.2);
  margin: auto;
}
.login-dark .btn-primary {
  background:#3261FF;
  border:none;
  border-radius:4px;
  box-shadow:none;
  margin-top:26px;
  text-shadow:none;
  outline:none;
  display: flex;
  justify-content: center;
  width: 100%;
}
.btn-primary:hover {
  background:#214a80;
  outline:none;
}
input, textarea{
  color: #ffffff;
  border: 3px solid #3261FF;
  border-radius:4px;
  padding:8px 5px;
  box-shadow:none;
  text-shadow:none;
  outline:none;
  width: 100%;
  background-color: #181A21;
}
textarea{
  height: 7em;
}
</style>