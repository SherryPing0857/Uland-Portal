<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const forms = ref([]); 

onMounted(async () => {
  try {
    const res = await fetch("/data/FormList.json"); // public 下的路徑從根目錄開始
    if (!res.ok) throw new Error("無法載入表單清單");
    forms.value = await res.json();
  } catch (err) {
    console.error(err);
  }
});

const handleClick = (form) => {
  if (form.type === "view") {
    router.push({ name: "FormReadOnly", params: { id: form.id } });
  } else if (form.type === "download") {
    const link = document.createElement("a");
    link.href = form.link;
    link.download = form.name;
    link.click();
  }
};
</script>
<template>
  <ul class="list-group">
    <li
      v-for="form in forms"
      :key="form.id"
      class="list-group-item d-flex justify-content-between align-items-center form-item"
    >
      {{ form.name }}
      <button
        class="btn"
        :class="form.type === 'view' ? 'btn-success' : 'btn-primary'"
        @click="handleClick(form)"
      >
        {{ form.type === 'view' ? '檢視' : '下載' }}
      </button>
    </li>
  </ul>
</template>

<style scoped>
.form-item:hover {
  background: #f1f1f1;
  color: #000;
}

.btn-primary {
  background-color: #0d6efd;
  color: white;
}

.btn-primary:hover {
  background-color: #0b5ed7;
}

.btn-success {
  background-color: #198754;
  color: white;
}

.btn-success:hover {
  background-color: #157347;
}
</style>

