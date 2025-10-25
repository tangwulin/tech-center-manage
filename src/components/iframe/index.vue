<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  url: {
    type: String,
    required: true
  }
})

const loading = ref(true)
</script>

<template>
  <div v-loading="loading" class="size-full">
    <iframe :src="url" class="size-full border-none overflow-hidden" @load="loading = false" />
  </div>
</template>
