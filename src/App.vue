<script>
import NavHeader from './components/NavHeader.vue';
import MenuLeft from './components/MenuLeft.vue';

export default {
  components: {
    NavHeader,
    MenuLeft,
  }
}

</script>

<template>
  <header>
    <NavHeader />
  </header>
  <main>
    <div class="container row">
      <!--section left -->
      <section class="col-3 col-lg-2">
        <MenuLeft />
      </section>
      <!-- /Section left -->
      <!-- Section right -->
      <section
        class="col-9 col-lg-10 center-section row justify-content-center">
        <router-view />
      </section>
      <!-- / Section right -->
    </div>
  </main>
</template>

<style scoped>
  .container {
    max-width: inherit;
  }
</style>