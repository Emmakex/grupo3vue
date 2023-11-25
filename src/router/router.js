import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'



const routes = [
    { path: '/', component: HomeComponent },
    { path: '/calendar', component: ()=> import('../components/CalendarComponent.vue')},
    { path: '/tasklist', component: ()=> import('../components/TasksList.vue')},
    { path: '/login', component: ()=> import('../components/Login.vue')},
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})