<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const docId = route.params.id; // 文件 id

// 文件資料，包含 link 或 content
const documentData = ref({ name: "載入中...", link: "", content: "" });

// 禁止右鍵、文字選取、Ctrl+P/S/C
const preventDefault = (e) => e.preventDefault();
const preventCtrlKeys = (e) => {
  if (e.ctrlKey && ["p", "s", "c"].includes(e.key.toLowerCase())) e.preventDefault();
};

onMounted(async () => {
  try {
    const res = await fetch("/data/DocumentList.json");
    const docs = await res.json();
    const doc = docs.find(d => d.id == docId);
    if (doc) documentData.value = doc;
    else documentData.value = { name: "未知文件", link: "", content: "" };
  } catch (err) {
    console.error("載入文件失敗", err);
    documentData.value = { name: "錯誤", link: "", content: "" };
  }

  document.addEventListener("contextmenu", preventDefault);
  document.addEventListener("selectstart", preventDefault);
  document.addEventListener("keydown", preventCtrlKeys);
});

onBeforeUnmount(() => {
  document.removeEventListener("contextmenu", preventDefault);
  document.removeEventListener("selectstart", preventDefault);
  document.removeEventListener("keydown", preventCtrlKeys);
});

const goBack = () => {
  if (window.history.length > 1) window.history.back();
  else router.push("/news");
};
</script>

<template>
  <div class="container py-4">
    <button class="btn btn-outline-primary mb-3" @click="goBack">
      ← 返回上一頁
    </button>

    <h1>{{ documentData.name }}（唯讀）</h1>

    <!-- 如果有圖片 link -->
    <div class="image-container mt-3" v-if="documentData.link">
      <img
        :src="documentData.link"
        alt="文件預覽"
        style="max-width:100%; height:auto; user-select:none;"
      />
    </div>

    <!-- 沒有圖片就顯示 content -->
    <div v-else class="text-muted mt-3">
      {{ documentData.content || "此文件尚無預覽內容。" }}
    </div>
  </div>
</template>

<style scoped>
.image-container {
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  overflow: hidden;
  padding: 0.5rem;
}
</style>
