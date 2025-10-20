<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const record = ref(null);

onMounted(async () => {
  const res = await fetch("/data/MeetingRecords.json");
  const data = await res.json();
  record.value = data.find((m) => m.id === Number(route.params.id));
});
</script>

<template>
  <div class="container py-4" v-if="record">
    <h2>{{ record.title }}</h2>
    <p class="text-muted">{{ record.date }}</p>
    <hr />
    <p>{{ record.content }}</p>
  </div>
</template>
