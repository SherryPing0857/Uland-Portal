<template>
  <div class="container py-4" v-if="newsItem">
    <BackButton class="mb-3" />

    <h2>{{ newsItem.title }}</h2>
    <p class="text-muted">{{ newsItem.date }}</p>
    <hr />
    <p>{{ newsItem.content }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import BackButton from "../components/BackButton.vue"; // 請確認路徑正確

const route = useRoute();
const newsItem = ref(null);

onMounted(async () => {
  const res = await fetch("/data/DepartNews.json");
  const data = await res.json();
  newsItem.value = data.find((n) => n.id === Number(route.params.id));
});
</script>
