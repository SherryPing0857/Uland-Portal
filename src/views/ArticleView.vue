<template>
  <div class="container py-5" v-if="article">
    <!-- 標題 -->
    <h1 class="mb-3 border-bottom pb-2">{{ article.title }}</h1>

    <!-- 發布日期 -->
    <p class="text-muted mb-4">發布日期: {{ article.date }}</p>

    <!-- 文章內容 -->
    <div class="mb-4">
      <p v-for="(p, index) in article.content" :key="index">{{ p }}</p>
    </div>

    <!-- 影片區塊 -->
    <div class="mb-4" v-if="article.video">
      <div class="ratio ratio-16x9">
        <iframe
          :src="article.video"
          title="影片"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <!-- 附件區塊 -->
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

const route = useRoute();
const article = ref(null);

onMounted(async () => {
  const res = await fetch("/data/Article.json");
  const data = await res.json();
  const id = parseInt(route.params.id || 1); // 默認 id 1
  article.value = data.find(a => a.id === id) || null;
});
</script>
