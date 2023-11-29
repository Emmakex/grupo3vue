<script>
export default {
    data() {
        return {
          nombresLista: [
            {
              name: "Agency landingpage",
              description: "Agency landingpage",
              status: "toDo",
              date: new Date()
            },
            {
              name: "Create website for...",
              description: "Create website for...",
              status: "onGoing",
              date: new Date()
            },
            {
              name: "Create website for...",
              description: "Create website for...",
              status: "finished",
              date: new Date()
            },
          ],
          taskName: '',
          taskDescription: '',
          dueDate: '',
          taskStatus: 'toDo',
        }
      },
      computed :{
        filtertasksArray(){ // Función para mostrar las tres primeras tareas en Recent Tasks
          return this.nombresLista.slice (0,3)
        }
      },

      methods:{
          formatStatus (status) { // Función para mostrar el string según el status
            if (status === "onGoing") {
              return 'On Going'
            }
            else if (status === "finished") {
              return 'Finished'
            }
            else if (status === "toDo") {
              return 'To Do'
            }
          },
          formatDate(date) {
            if(date == null){ // Si el usuario no ingresó fecha, devolvemos 'Sin Fecha'
              return 'Sin Fecha'
            } else { // Si el usuario ingresó fecha, la convertimos a formato '30 nov 2023'
              const options = {month: 'short', day: 'numeric', year: 'numeric' }

              return date.toLocaleDateString("es-ES", options)
            }
          },
          agregarTarea() { // Agrega la tarea a la colección y resetea el formulario
            let date = null
            
            if(this.dueDate) { // si hay una fecha, la convertimos a tipo Date
              date = new Date(this.dueDate)
            }

            this.nombresLista.push({
              name: this.taskName,
              description: this.taskDescription,
              status: this.taskStatus,
              date: date,
            })

            this.taskName = ''
            this.taskDescription = ''
            this.taskStatus = 'toDo'
            this.dueDate = ''
          }
      },
}
</script>

<template>
    <div class=" col-xl-10 task-menu">
          <div>
            <h2>Task Summary</h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="row titulos">
              <div class="col-6 col-xl-4">TASK NAME</div>
              <div class="col-xl-4 text-start">TASK DESCRIPTION</div>
              <div class="col-3 col-xl-2">STATUS</div>
              <div class="col-3 col-xl-2">DUE DATE</div>
            </li>
            <li
              v-for="(task, key) in nombresLista"
              class="row text-white"
              :key="task"
            >
              <div class="col-6 col-xl-4">{{ task.name }}</div>
              <div class="col-xl-4 text-start">{{ task.description }}</div>
              <div class="col-3 col-xl-2" :class="task.status">
                {{ formatStatus(task.status) }}
              </div>
              <div class="col-3 col-xl-2">{{ formatDate(task.date) }}</div>
            </li>
            <li class="row text-white">
              <div class="col-6 col-xl-4">
                <input type="text" v-model="taskName" placeholder="Tarea" /> <!-- conectamos el input con variable -->
              </div>
              <div class="col-xl-4 text-start">
                <input type="text" v-model="taskDescription" placeholder="Descripción" />
              </div>
              <div class="col-3 col-xl-2">
                <select v-model="taskStatus">
                  <option value="toDo">To Do</option>
                  <option value="onGoing">On Going</option>
                  <option value="finished">Finished</option>
                </select>
              </div>
              <div class="col-3 col-xl-2">
                <input type="date" v-model="dueDate" />
              </div>
            </li>
            <button v-on:click="agregarTarea">Agregar</button>
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
.toDo {
  color: #3FDDC0;
}
.onGoing {
  color: #69A5FF;
}
.finished {
  color: #FF84BF;
}
.text-start {
  display: none;
}

@media (min-width: 1201px) {
  .text-start {
    display: block;
  }
}
/* / End styles list task */
</style>