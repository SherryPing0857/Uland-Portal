<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const newsItem = ref(null);

onMounted(async () => {
  const res = await fetch("/data/DepartNews.json");
  const data = await res.json();
  newsItem.value = data.find((n) => n.id === Number(route.params.id));
});

// 返回上一頁
const goBack = () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    router.push("/news"); // 沒有上一頁時回首頁
  }
};
</script>

<template>
  <div class="container py-4" v-if="newsItem">
    <button class="btn btn-outline-primary mb-3" @click="goBack">
      ← 返回上一頁
    </button>

    <h2>{{ newsItem.title }}</h2>
    <p class="text-muted">{{ newsItem.date }}</p>
    <hr />
    <p>{{ newsItem.content }}</p>
  </div>
</template>
