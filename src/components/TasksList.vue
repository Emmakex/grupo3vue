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
            taskNameEdit: '',
            taskDescriptionEdit: '',
            taskStatusEdit: 'onGoing',
            editingTaskId: null, // Nuevo estado para mantener el ID de la tarea que se está editando
            isEditing: false, // Nuevo estado para saber si estamos en modo de edición
        }
    },
    
    methods:{
      // Función para el formato de fecha
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
        // Función para poder editar tarea, rellena los campos del formulario con los que tiene la tarea
        iniciarEdicion(task) {
            this.taskNameEdit = task.text;
            this.taskDescriptionEdit = task.description;
            this.taskStatusEdit = task.completed ? 'finished' : 'onGoing';
            this.dueDate = task.dueDate; 
            this.editingTaskId = task.id; // Guarda el ID de la tarea a editar
            this.isEditing = true;
        },
        // Función para agregar o editar tarea
        agregarOEditarTarea() {
            let date = this.dueDate ? new Date(this.dueDate) : null;

            
            if (this.isEditing) { // Si está en modo edición...
              const taskData = { // Creará el objeto con los nuevos datos...
                  name: this.taskNameEdit,
                  description: this.taskDescriptionEdit,
                  status: this.taskStatusEdit === 'finished' ? true : false,
                  date: date,
              };
                // ... Llama a la acción del store para editar la tarea pasando el objeto con los nuevos valores
                this.userStore.editTask({ ...taskData, id: this.editingTaskId });
                this.isEditing = false; // Salir del modo de edición
            } else { // Si no...
              const taskData = {
                  name: this.taskName, 
                  description: this.taskDescription,
                  status: this.taskStatus === 'finished' ? true : false,
                  date: date,
              };
                // Llama a la acción del store para agregar la tarea
                this.userStore.addTask(taskData);
            }

            // Restablecer el formulario
            this.taskName = '';
            this.taskDescription = '';
            this.taskStatus = 'onGoing';
            this.taskNameEdit = '';
            this.taskDescriptionEdit = '';
            this.taskStatusEdit = 'onGoing';
            this.dueDate = '';
            this.editingTaskId = null;
        },
        
        iniciarEdicion(task) {
    if (this.editingTaskId === task.id && this.isEditing) {
        // Si la tarea ya está en edición, oculta el formulario
        this.isEditing = false;
        this.editingTaskId = null;
    } else {
        // Si no, muestra el formulario con los datos de la tarea seleccionada
        this.taskNameEdit = task.text;
        this.taskDescriptionEdit = task.description;
        this.taskStatusEdit = task.completed ? 'finished' : 'onGoing';
        this.dueDate = task.dueDate;
        this.editingTaskId = task.id;
        this.isEditing = true;
    }
},

        // Función para eliminar tarea
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
  <div class=" col-xl-12 task-menu">
    <div>
      <h2>Task List</h2>
    </div>
    <ul class="list-group list-group-flush">
      <!-- Añadir tarea -->
      <li class="col text-white edit mt-4">
        <div class="col-6 col-xl-4 mb-3">
          <input type="text" v-model="taskName" placeholder="Task" /> <!-- conectamos el input con variable taskName -->
        </div>
        <div class="col-xl-4 text-start mb-3">
          <input type="text" v-model="taskDescription" placeholder="Description" /> <!-- conectamos el input con variable taskDescription -->
        </div>
        <div class="col-3 col-xl-2 mb-3">
          <select class="select-primary-list" v-model="taskStatus"> <!-- conectamos el select con variable taskStatus -->
            <option value="onGoing">On Going</option>
            <option value="finished">Finished</option>
          </select>
        </div>
        <div class="col-3 col-xl-2 mb-3">
          <button class="btn-primary-list" @click="agregarOEditarTarea">Add task</button>
        </div>
      </li>
      <li class="row titulos">
        <div class="col-6 col-xl-4">TASK NAME</div>
        <div class="col-xl-4 text-start">TASK DESCRIPTION</div>
        <div class="col-3 col-xl-2">STATUS</div>
        <div class="col-3 col-xl-2">ACTIONS</div>
      </li>
      <!-- Recorre cada objeto de la colección nombresLista e imprime la tarea -->
      <li
        v-for="task in userStore.tasks"
        class="row text-white task-item" 
        :key="task.id" 
      >
        <div class="col-6 col-xl-4">{{ task.text }}</div>
        <div class="col-xl-4 text-start">{{ task.description }}</div>
        <div class="col-3 col-xl-2" :class="[!task.completed ? 'onGoing' : 'finished']">
          {{ formatStatus(task.completed) }}
        </div>
        <div class="col-3 col-xl-2 editDelete">
          <div class="col-xl-4">
            <svg @click="iniciarEdicion(task)"
            xmlns="http://www.w3.org/2000/svg" 
            width="16" height="16" 
            fill="currentColor" 
            class="bi bi-pencil me-4 ms-2" 
            viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
          </div>
          <div class="col-xl-4">
            <svg @click="eliminarTarea(task.id)"
            xmlns="http://www.w3.org/2000/svg" 
            width="16" height="16" 
            fill="currentColor" 
            class="bi bi-trash3" 
            viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
          </div>
        </div>
        <!-- Formulario de Edición -->
        <ul>
          <li v-if="editingTaskId === task.id" class="edit-form row mt-4">
            <div class="col-6 col-xl-4">
              <input class="text-white" type="text" v-model="taskNameEdit" placeholder="Task Name" />
            </div>
            <div class="col-xl-4 text-start">
              <textarea class="text-white" v-model="taskDescriptionEdit" placeholder="Description"></textarea>
            </div>
            <div class="col-3 col-xl-2">
              <select class="select-primary-list" v-model="taskStatusEdit">
                  <option value="onGoing">On Going</option>
                  <option value="finished">Finished</option>
              </select>
            </div>
              <!-- Añade otros campos si son necesarios -->
            <div class="col-3 col-xl-2">
              <button class="btn-primary-list" @click="agregarOEditarTarea">Edit</button>
            </div>
          </li>
        </ul>
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

.edit .text-start {
  display: block;
}

.edit button, .edit select {
  width: 150px;
}

.editDelete {
  display: flex;
  flex-direction: row;
}
.text-start {
  display: none;
}
input, textarea{
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
@media (min-width: 769px) {
  .edit {
    display: flex;
    flex-direction: row;
  }

  .edit div {
    margin-right: 20px;
    margin-left: -10px;
  }

  .edit select {
    margin-left: -5px;
  }
  .edit button {
    margin-left: -30px;
  }
}
@media (min-width: 1201px) {
  .text-start {
    display: block;
  }
}
/* / End styles list task */
</style>