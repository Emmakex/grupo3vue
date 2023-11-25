// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


import "bootstrap/dist/css/bootstrap.min.css";
import { router } from "./router/router";

import { createApp } from "vue";
import App from "./App.vue";
import './styles.css'

createApp(App).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap.min";