<script>
import { useUserStore } from '../stores/userStore'; // Importing the user store from Pinia
import * as _dayjs from 'dayjs';
const dayjs = _dayjs;

export default {
    data() {
        return {
          userStore: useUserStore(), // Llamada a userStore
        }
      },
      
      methods:{
        formatDate2(date) {
            return dayjs(date).format('DD MMM');
        },
        formatStatus (status) { // Función para mostrar el string según el status
          if (!status) {
            return 'On Going'
          }
          else {
            return 'Finished'
          }
        },
        editStatus(task) { // Función para editar el status y poder cambiar de on going a finished desde la pantalla home
            let date = this.dueDate ? new Date(this.dueDate) : null;
            if(!task.completed) { // Si no está completada...
              const taskData = { // Guardamos los valores de text y description y cambiamos el status a true (finished)
                    name: task.text,
                    description: task.description,
                    status: true,
                    date: date,
                };
                this.userStore.editTask({ ...taskData, id: task.id }) // Invocamos la función de editTask en userStore pasándole los datos nuevos y la id de la tarea
            }
        },

      },
      mounted() {
            this.userStore.fetchTasks() // Llamada a la API desde userStore
            
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
            <!-- Recorre cada objeto de la colección nombresLista e imprime la tarea -->
            <li
              v-for="(task, key) in userStore.filtertasksArray5"
              class="row text-white"
              :key="task"
            >
              <div class="col-6 col-xl-3">{{ task.text }}</div>
              <div class="col-xl-3 text-start">{{ task.description }}</div>
              <div class="col-3 col-xl-2" :class="[!task.completed ? 'onGoing' : 'finished']">
                {{ formatStatus(task.completed) }}
              </div>
              <div class="col-3 col-xl-2">

                <!-- Si el estado es on going muestra boton end task, al clickar se invoca a la función pasánsole el parámetro de task -->
                <button @click="editStatus(task)" class="btn-primary-list"
                  v-if="!task.completed"
                  >
                  End Task
              </button>
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
  color: #fff;
  outline:none;
}
@media (min-width: 1201px) {
  .text-start {
    display: block;
  }
}
/* / End styles list task */
</style>