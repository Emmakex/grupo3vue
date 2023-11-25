<script>
import RecentTasks from './RecentTasks.vue';
import CalendarComponent from './CalendarComponent.vue';
import TasksList from './TasksList.vue';

export default {
    components: {
    RecentTasks,
    CalendarComponent,
    TasksList,
},
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
        addTasks(){ 
          const newTask = {taskName, taskDescription, dueDate, taskStatus}
          this.nombresLista.push(newTask)
        }
      }
}
</script>

<template>
  <div class="col-xl-7 mt-5">
    <RecentTasks :array="filtertasksArray" />
  </div>
  <div class="col-md-12 col-xl-5 container mt-5 px-4">
    <CalendarComponent />
  </div>
    <TasksList />
</template>

<style scoped>

</style>
