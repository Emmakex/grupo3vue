<script>
// Importamos los componentes
import RecentTasks from './RecentTasks.vue';
import CalendarComponent from './CalendarComponent.vue';
import TasksHome from './TasksHome.vue';

export default {
    components: {
      // agregamos los componentes que hemos importado y llamaremos en el template
      RecentTasks,
      CalendarComponent,
      TasksHome,
  },
}
</script>

<template>
  <div class="d-flex">
    <div class="col-xxl-7 col-xl-8 col-lg-12">
      <RecentTasks />
    </div>
    <div class="col-xl-4 d-none-mobile">
      <CalendarComponent />
    </div>
  </div>
    <TasksHome />
</template>

<style scoped>
@media (max-width: 1199px) {
  .d-none-mobile{
    display: none;
  }
}
</style>
