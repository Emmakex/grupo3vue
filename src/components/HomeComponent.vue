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
            taskName: '',
            taskDescription: '',
            dueDate: '',
            taskStatus: '',
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
  <div class="d-flex">
    <div class="col-xl-7 mt-5">
      <RecentTasks />
    </div>
    <div class="col-xl-4 mt-5 px-4">
      <CalendarComponent />
    </div>
  </div>
    <TasksList />
</template>

<style scoped>

</style>
