<script>
export default {
    data() {
        return {
          nombresLista : [
            {
              name: "Agency landingpage",
              description: "Agency landingpage",
              status: "toDo",
              date: "Nov 30 2021",
            },
            {
              name: "Create website for...",
              description: "Create website for...",
              status: "toDo",
              date: "Nov 30 2021"
            },
            {
              name: "Create website for...",
              description: "Create website for...",
              status: "toDo",
              date: "Nov 30 2021"
            },
            {
              name: "Create website for...",
              description: "Create website for...",
              status: "onGoing",
              date: "Nov 30 2021"
            },
            {
              name: "Create website for...",
              description: "Create website for...",
              status: "finished",
              date: "Nov 30 2021"
            },
          ],
            taskName: '',
            taskDescription: '',
            dueDate: '',
            taskStatus: '',
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
              <div class="col-3 col-xl-2">{{ task.date }}</div>
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