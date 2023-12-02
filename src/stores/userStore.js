import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [],
        currentUser: null, // Estado para el usuario actual
        tasks: [] // Estado para el usuario actual
    }),
    actions: {
        registerUser(name, email, role, password) {
            this.users.push({ name, email, role, password });
        },
        loginUser(email, password) {
            const user = this.users.find(user => user.email === email && user.password === password);
            if (user) {
                this.currentUser = user; // Establecer el usuario actual
                return true;
            } else {
                return false;
            }
        },
        setCurrentUser(email) {
            const user = this.users.find(user => user.email === email);
            if (user) {
                this.currentUser = user; // Actualizar el usuario actual
            }
        },
        logoutUser() {
            this.currentUser = null; // Limpiar el usuario actual
        },
        fetchTasks() {
            fetch(`https://todos-ddy8.onrender.com/users/sonia/todos`)
            .then((response) => response.json())
            .then((data) => {
            console.log(data);
            this.tasks = data;
        });
        }
    },
    getters: {
        filtertasksArray(){ // Función para mostrar las tres primeras tareas en Recent Tasks
            return this.tasks.slice (this.tasks.length -3)
        },
        filtertasksArray5(){ // Función para mostrar las tres primeras tareas en Recent Tasks
            return this.tasks.slice (0, 5)
        }
    }
});

