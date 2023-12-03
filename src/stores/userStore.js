import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [],
        currentUser: null, // Estado para el usuario actual
        tasks: [] // Estado para las tareas
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
                this.tasks = data;
            });
        },
        async addTask(taskData) {
            try {
                const response = await fetch('https://todos-ddy8.onrender.com/users/sonia/todos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: taskData.name,
                description: taskData.description,
                completed: taskData.status === 'finished', // Falta arreglar para ver o editar el estado
                tags: taskData.tags // Falta arreglar para que se una todo
            }),
        });
                if (!response.ok) {
                    throw new Error('Error al agregar tarea');
                }
                const nuevaTarea = await response.json();

                // Agrega la tarea al estado local
                this.tasks.push(nuevaTarea);
            } catch (error) {
                console.error('Error al agregar tarea:', error);
            }
        },
    },
    getters: {
        filtertasksArray() {
            return this.tasks.slice(this.tasks.length - 3)
        },
        filtertasksArray5() {
            return this.tasks.slice(0, 5)
        }
    }
});
