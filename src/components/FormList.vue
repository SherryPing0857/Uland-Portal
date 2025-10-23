<template>
  <ul class="list-group position-relative">
    <li
      v-for="item in items"
      :key="item.id"
      class="list-group-item d-flex align-items-start flex-wrap position-relative"
    >
      <span class="file-name">{{ item.name }}</span>

      <a
        :href="item.link"
        target="_blank"
        class="btn btn-outline-primary file-btn text-center"
      >
        {{ item.fileType || getFileType(item.link) }}
      </a>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});

const getFileType = (link) => {
  if (!link) return "";
  let match = link.match(/format=([a-zA-Z0-9]+)/);
  if (match) return `.${match[1].toUpperCase()}`;
  match = link.match(/\.([a-zA-Z0-9]+)(?:$|\?|#)/);
  return match ? `.${match[1].toUpperCase()}` : "";
};
</script>

<style scoped>
.list-group-item {
  padding: 0.5rem 0.75rem;
  position: relative;
  transition: background-color 0.2s ease-in-out;
}

.list-group-item:hover {
  background-color: #f1f1f1;
}

.file-name {
  flex: 1 1 auto;
  white-space: normal;
  word-break: break-word;
  text-align: left;
  margin-right: 0.5rem;
}

.file-btn {
  flex-shrink: 0;
  margin-left: auto;
  width: 90px;
  text-decoration: none;
  font-size: 0.85rem;
  padding: 0.25rem 0.5rem;
}

/* hover 改色效果 */
.file-btn:hover {
  background-color: #0d6efd;
  color: white;
}

@media (max-width: 575px) {
  .list-group-item {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 2.5rem; /* 為按鈕預留空間 */
  }

  .file-btn {
    position: absolute;
    bottom: 0.5rem;
    right: 0.75rem;
    margin-left: 0;
  }
}
</style>
