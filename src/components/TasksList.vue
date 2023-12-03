<script>
import { useUserStore } from '../stores/userStore'; // Importando el store de usuarios de Pinia
import * as _dayjs from 'dayjs';
const dayjs = _dayjs;

export default {
    data() {
        return {
            userStore: useUserStore(),
            taskName: '',
            taskDescription: '',
            dueDate: '',
            taskStatus: 'onGoing',
            editingTaskId: null, // Nuevo estado para mantener el ID de la tarea que se está editando
            isEditing: false, // Nuevo estado para saber si estamos en modo de edición
        }
    },
    
    methods:{
      formatDate2(date) {
            return dayjs(date).format('DD MMM');
        },
        formatStatus(status) { // Función para mostrar el string según el status
            if (!status) {
                return 'On Going'
            } else {
                return 'Finished'
            }
        },

        iniciarEdicion(task) {
            this.taskName = task.text;
            this.taskDescription = task.description;
            this.taskStatus = task.completed ? 'finished' : 'onGoing';
            this.dueDate = task.dueDate; // Asegúrate de que esté en el formato adecuado
            this.editingTaskId = task.id; // Guarda el ID de la tarea a editar
            this.isEditing = true;
        },

        agregarOEditarTarea() {
            let date = this.dueDate ? new Date(this.dueDate) : null;

            const taskData = {
                name: this.taskName,
                description: this.taskDescription,
                status: this.taskStatus === 'finished',
                date: date,
            };

            if (this.isEditing) {
                // Llama a la acción del store para editar la tarea
                this.userStore.editTask({ ...taskData, id: this.editingTaskId });
                this.isEditing = false; // Salir del modo de edición
            } else {
                // Llama a la acción del store para agregar la tarea
                this.userStore.addTask(taskData);
            }

            // Restablecer el formulario
            this.taskName = '';
            this.taskDescription = '';
            this.taskStatus = 'onGoing';
            this.dueDate = '';
            this.editingTaskId = null;
        },

        eliminarTarea(taskId) {
        this.userStore.deleteTask(taskId);
    },
    },

    mounted() {
        this.userStore.fetchTasks();
    }
}
</script>



<template>
    <div class=" col-xl-10 task-menu">
          <div>
            <h2>Task Summary</h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="row titulos">
              <div class="col-6 col-xl-3">TASK NAME</div>
              <div class="col-xl-3 text-start">TASK DESCRIPTION</div>
              <div class="col-3 col-xl-2">STATUS</div>
              <div class="col-3 col-xl-2">ACTIONS</div>
            </li>
            <li class="row text-white">
              <div class="col-6 col-xl-3">
                <input type="text" v-model="taskName" placeholder="Task" /> <!-- conectamos el input con variable taskName -->
              </div>
              <div class="col-xl-3 text-start">
                <input type="text" v-model="taskDescription" placeholder="Description" /> <!-- conectamos el input con variable taskDescription -->
              </div>
              <div class="col-3 col-xl-2">
                <select class="select-primary-list" v-model="taskStatus"> <!-- conectamos el select con variable taskStatus -->
                  <option value="onGoing">On Going</option>
                  <option value="finished">Finished</option>
                </select>
              </div>
              <div class="col-xl-3">
                <button class="btn-primary-list" @click="agregarOEditarTarea">Add task</button>
              </div>
            </li>
            <!-- Recorre cada objeto de la colección nombresLista e imprime la tarea -->
            <li
              v-for="task in userStore.tasks"
              class="row text-white task-item" 
              :key="task.id" 
            >
              <div class="col-6 col-xl-3">{{ task.text }}</div>
              <div class="col-xl-3 text-start">{{ task.description }}</div>
              <div class="col-3 col-xl-2" :class="[!task.completed ? 'onGoing' : 'finished']">
                {{ formatStatus(task.completed) }}
              </div>
              <div class="col-3 col-xl-2">
                <svg @click="iniciarEdicion(task)"
                xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" 
                fill="currentColor" 
                class="bi bi-pencil me-4 ms-2" 
                viewBox="0 0 16 16">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
                <svg @click="eliminarTarea(task.id)"
                xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" 
                fill="currentColor" 
                class="bi bi-trash3" 
                viewBox="0 0 16 16">
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
              </div>
            <!-- Formulario de Edición -->
            <div v-if="editingTaskId === task.id" class="edit-form">
            <input type="text" v-model="taskName" placeholder="Task Name" />
            <input type="text" v-model="taskDescription" placeholder="Description" />
            <select v-model="taskStatus">
                <option value="onGoing">On Going</option>
                <option value="finished">Finished</option>
            </select>
            <!-- Añade otros campos si son necesarios -->
            <button @click="agregarOEditarTarea">Edit</button>
        </div>
            </li>
            
          </ul>
        </div>
</template>

<style scoped>
/* Styles list task */
.titulos, h2 {
  color: #ffffff;
  font-weight: 600;
}
li.row {
  margin-top: 20px;
  margin-bottom: 20px;
}
.colorTask {
  color: #CBCEE2;
}
.finished{
  color: #3FDDC0;
}
.onGoing {
  color: #69A5FF;
}
.text-start {
  display: none;
}
input{
  border: 3px solid #3261FF;
  border-radius:4px;
  padding:11px 5px;
  box-shadow:none;
  text-shadow:none;
  outline:none;
}
.btn-primary-list {
  background:#3261FF;
  color: #fff;
  border:none;
  border-radius:4px;
  padding:11px 20px;
  box-shadow:none;
  text-shadow:none;
  outline:none;
}
.btn-primary-list:hover, .btn-primary-list:active {
  background:#214a80;
  outline:none;
}
.select-primary-list {
  background:#3261FF;
  color: #fff;
  border:none;
  border-radius:4px;
  padding:12px 10px 13px 10px;
  box-shadow:none;
  text-shadow:none;
  outline:none;
}
.select-primary-list:hover, .select-primary-list:active {
  background:#214a80;
  outline:none;
}
@media (min-width: 1201px) {
  .text-start {
    display: block;
  }
}
/* / End styles list task */
</style>