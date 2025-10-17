<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="container py-4">
    <router-view />
  </div>
</template>

<style scoped>
</style>
