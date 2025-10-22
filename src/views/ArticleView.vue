<template>
  <div class="container py-5" v-if="article">
    <BackButton class="mb-3" />

    <h1 class="mb-3 border-bottom pb-2">{{ article.title }}</h1>

    <p class="text-muted mb-4">發布日期: {{ article.date }}</p>

    <div class="mb-4">
      <p v-for="(p, index) in article.content" :key="index">{{ p }}</p>
    </div>
    <div class="mb-4" v-if="article.video">
      <div class="ratio ratio-16x9">
        <iframe :src="article.video" title="影片" allowfullscreen></iframe>
      </div>
    </div>
    <div class="mb-4 border-top pt-3" v-if="article.attachments.length">
      <h5>附件下載</h5>
      <ul class="list-unstyled mb-0">
        <li v-for="(file, index) in article.attachments" :key="index">
          <a :href="file.url" class="link-primary">{{ file.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import BackButton from "../components/BackButton.vue"; // 引入返回元件

const route = useRoute();
const article = ref(null);

onMounted(async () => {
  const res = await fetch("/data/Article.json");
  const data = await res.json();
  const id = parseInt(route.params.id || 1); // 默認 id 1
  article.value = data.find((a) => a.id === id) || null;
});
</script>
