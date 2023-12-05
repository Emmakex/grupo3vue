import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [],
        currentUser: null, // Estado para el usuario actual
        tasks: [] // Estado para las tareas
    }),
    actions: {
        // función para registrar usuario
        registerUser(name, email, role, password) {
            this.users.push({ name, email, role, password }); // guarda en el array users el nuevo objeto
        },
        // Función para loguear
        loginUser(email, password) { // Recibe por párametro el email y el password
            const user = this.users.find(user => user.email === email && user.password === password); // Si coincide el usuario y el password con el guardado
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
        // Llamada a la API
        fetchTasks() {
            fetch(`https://todos-ddy8.onrender.com/users/sonia/todos`)
            .then((response) => response.json())
            .then((data) => {
                this.tasks = data;
            });
        },
        // Función para añadir tarea nueva
        async addTask(taskData) { // recibe por parámetro el objeto con la nueva tarea
            try { // Llama a la API para pasarle la nueva tarea
                const response = await fetch('https://todos-ddy8.onrender.com/users/sonia/todos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        text: taskData.name,
                        description: taskData.description,
                        completed: taskData.status,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Error al agregar tarea');
                }
                const nuevaTarea = await response.json();
                this.tasks.push(nuevaTarea);
            } catch (error) {
                console.error('Error al agregar tarea:', error);
            }
        },
        // Función para editar tarea
        async editTask(taskData) { // Se llama a la función pasando los nuevos párametros
            try {
                // Llamada a la API con el id de la tarea a editar
                const response = await fetch(`https://todos-ddy8.onrender.com/users/sonia/todos/${taskData.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        text: taskData.name,
                        description: taskData.description,
                        completed: taskData.status,
                        // Se puede agregar tags si son necesarios
                    }),
                });

                if (!response.ok) {
                    throw new Error('Error al editar tarea');
                }

                const tareaEditada = await response.json();
                const index = this.tasks.findIndex(t => t.id === tareaEditada.id);
                if (index !== -1) {
                    this.tasks[index] = tareaEditada;
                }
            } catch (error) {
                console.error('Error al editar tarea:', error);
            }
        },
        // Función patra eliminar tarea
        async deleteTask(taskId) { // Se le pasa el id de la tarea a eliminar
            try {
                // Se llama a la API con el id pasado para eliminar la tarea
                const response = await fetch(`https://todos-ddy8.onrender.com/users/sonia/todos/${taskId}`, {
                    method: 'DELETE',
                });
    
                if (!response.ok) {
                    throw new Error('Error al eliminar tarea');
                }
    
                // Eliminar la tarea del estado local
                this.tasks = this.tasks.filter(task => task.id !== taskId);
            } catch (error) {
                console.error('Error al eliminar tarea:', error);
            }
        },
    },
    getters: {
        // Función para filtrar el array de tareas y coger las tre últimas y mostrarlo en recent tasks
        filtertasksArray() {
            return this.tasks.slice(this.tasks.length - 3);
        },
        //  Función para filtrar el array de tareas y coger las 5 primeras para mostrar en home
        filtertasksArray5() {
            return this.tasks.slice(0, 5);
        }
    }
});
