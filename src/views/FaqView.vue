<script setup>
import FilterDropdown from "../components/FilterDropdown.vue";
import Accordion from "../components/Accordion.vue";
</script>

<template>
<header>
  <div class="container py-4">
    <h1>部門指南-常見問題</h1>
    </div>
</header>
  <main>
    <FilterDropdown/>
    <Accordion/>
  </main>
</template>