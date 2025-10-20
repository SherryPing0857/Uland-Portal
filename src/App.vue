<script setup>
import { RouterView, useRoute } from "vue-router";
import NavBar from "./components/NavBar.vue";

const route = useRoute();
</script>

<template>
  <header v-if="route.path !== '/'">
    <NavBar />
  </header>

  <div class="container py-4">
    <RouterView />
  </div>
</template>
