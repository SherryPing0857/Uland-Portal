<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});

const router = useRouter();

const handleView = (doc) => {
  if (!doc.id) return;
  router.push({ name: "DocumentReadOnly", params: { id: doc.id } });
};
</script>

<template>
  <div class="document-list mt-3">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>文件名稱</th>
          <th>類型</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="doc in items" :key="doc.id">
          <td>{{ doc.id }}</td>
          <td>{{ doc.name }}</td>
          <td>{{ doc.type }}</td>
          <td>
            <button class="btn btn-success btn-sm" @click="handleView(doc)">
              檢視
            </button>
          </td>
        </tr>
        <tr v-if="items.length === 0">
          <td colspan="4" class="text-center p-3">沒有公文</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
