<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import NavHeader from './components/NavHeader.vue';
import MenuLeft from './components/MenuLeft.vue';

export default {
  data() {
    return {
      contacts: [],
    }
  },
  components: {
    NavHeader,
    MenuLeft,
  },
  setup() {
    const route = useRoute();

    // Comprobar si la ruta actual es Login o Register
    const isLoginOrRegister = computed(() => {
      return route.path === '/' || route.path === '/register';
    });

    return { isLoginOrRegister };
  },
  
};
</script>

<template>
  <div>
    <!-- Renderizar NavHeader y MenuLeft solo si la ruta no es Login o Register -->
    <header v-if="!isLoginOrRegister">
      <NavHeader />
    </header>
    <main>
      <div class="container row">
        <!-- Renderizar MenuLeft solo si la ruta no es Login o Register -->
        <section class="col-3 col-lg-2" v-if="!isLoginOrRegister">
          <MenuLeft />
        </section>
        <!-- Sección principal -->
        <section class="col-9 col-lg-10 center">
          <router-view />
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
  .container {
    max-width: inherit;
  }
</style>