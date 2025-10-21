<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const formId = route.params.id;

const form = ref({ name: "載入中...", content: "" });

// 事件處理函數
const preventDefault = (e) => e.preventDefault();
const preventCtrlKeys = (e) => {
  if (e.ctrlKey && ["p", "s", "c"].includes(e.key.toLowerCase())) e.preventDefault();
};

onMounted(async () => {
  try {
    const res = await fetch("/data/FormDetail.json");
    const formsData = await res.json();
    form.value = formsData[formId] || { name: "未知表單", content: "" };
  } catch (err) {
    console.error("載入表單失敗", err);
    form.value = { name: "錯誤", content: "無法取得資料" };
  }

  // 禁止右鍵、文字選取、Ctrl+P/S/C
  document.addEventListener("contextmenu", preventDefault);
  document.addEventListener("selectstart", preventDefault);
  document.addEventListener("keydown", preventCtrlKeys);
});

onBeforeUnmount(() => {
  document.removeEventListener("contextmenu", preventDefault);
  document.removeEventListener("selectstart", preventDefault);
  document.removeEventListener("keydown", preventCtrlKeys);
});

// 返回上一頁
const goBack = () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    router.push("/news"); // 沒有上一頁時導回首頁
  }
};
</script>

<template>
  <div class="container py-4">
    <button class="btn btn-outline-primary mb-3" @click="goBack">
      ← 返回上一頁
    </button>

    <h1>{{ form.name }}（唯讀）</h1>
    <div class="form-content mt-3">
      {{ form.content }}
    </div>
  </div>
</template>

<style scoped>
.form-content {
  border-top: 1px solid #dbdbdbff; 
  padding-top: 1rem;
  white-space: pre-wrap;
  user-select: none; /* 禁止文字選取 */
}
</style>
