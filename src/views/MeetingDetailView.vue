<template>
  <div class="container py-4" v-if="record">
    <button class="btn btn-outline-primary mb-3" @click="goBack">
      ← 返回上一頁
    </button>

    <h2>{{ record.title }}</h2>
    <p class="text-muted">{{ record.date }}</p>
    <hr />
    <p>{{ record.content }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const record = ref(null);

onMounted(async () => {
  const res = await fetch("/data/MeetingRecords.json");
  const data = await res.json();
  record.value = data.find((m) => m.id === Number(route.params.id));
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
