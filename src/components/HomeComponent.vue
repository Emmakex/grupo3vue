<script>
import RecentTasks from './RecentTasks.vue';
import CalendarComponent from './CalendarComponent.vue';
import TasksHome from './TasksHome.vue';

export default {
    components: {
    RecentTasks,
    CalendarComponent,
    TasksHome,
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
    <div class="col-xl-7">
      <RecentTasks />
    </div>
    <div class="col-xl-4 px-4 d-none-mobile">
      <CalendarComponent />
    </div>
  </div>
    <TasksHome />
</template>

<style scoped>
@media (max-width: 1280px) {
  .d-none-mobile{
    display: none;
  }
}
</style>
