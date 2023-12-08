// Importamos los componentes
import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue';
import TasksList from '../components/TasksList.vue';
import CalendarComponent from '../components/CalendarComponent.vue';
import Form from '../components/Form.vue';
import SearchResults from '../components/SearchResults.vue';

// Constante para guardar las rutas
const routes = [
    { path: '/', component: Login },
    { path: '/home', component: HomeComponent, meta: { requiresAuth: true }},
    { path: '/register', component: Register },
    { path: '/taskslist', component: TasksList },
    { path: '/calendar', component: CalendarComponent },
    { path: '/form', component: Form },
    { path: '/search', component: SearchResults},
    // ... otras rutas
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
  // Verificación de autenticación real basada en authToken en localStorage
  const isAuthenticated = localStorage.getItem('authToken');

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
