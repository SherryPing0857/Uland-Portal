<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  items: Array,
});

const router = useRouter();

const handleView = (doc) => {
  if (!doc.id) return;
  router.push({ name: "DocumentReadOnly", params: { id: doc.id } });
};
</script>

<template>
  <div class="table-responsive" v-if="items && items.length">
    <table class="table table-striped table-hover align-middle">
      <thead class="table-primary">
        <tr>
          <th>文件名稱</th>
          <th>更新日期</th>
          <th>發布部門</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="doc in items" :key="doc.id">
          <td class="text-break">{{ doc.name }}</td>
          <td>{{ doc.date }}</td>
          <td>{{ doc.department }}</td>
          <td>
            <button class="btn btn-success btn-sm" @click="handleView(doc)">檢視</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <p v-else class="text-center text-muted py-3">沒有公文</p>
</template>

<style scoped>
.table-responsive {
  margin-top: 1rem;
}

/* 長文字自動換行 */
.text-break {
  word-break: break-word;
}
</style>
