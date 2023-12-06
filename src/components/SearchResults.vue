<script>
import { computed, ref } from 'vue';
import { useUserStore } from '../stores/userStore'; // Asegúrate de importar correctamente tu store

export default {
    data() {
        return {
            userStore: useUserStore(),
        }
    },
  name: 'SearchResults',
  setup() {
    const userStore = useUserStore();
    const searchTerm = ref('');

    const filteredTasks = computed(() => {
      return userStore.tasks.filter(task =>
        task.text.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    return {
      searchTerm,
      filteredTasks
    };
  },
    mounted() {
        this.userStore.fetchTasks();
    }


};
</script>
<template>
    <div>
      <!-- Campo de búsqueda -->
      <input type="text" v-model="searchTerm" placeholder="Buscar tarea...">
  
      <!-- Lista de tareas filtradas -->
      <ul>
        <li v-for="task in filteredTasks" :key="task.id">
          {{ task.text }}
        </li>
      </ul>
    </div>
  </template>


  
