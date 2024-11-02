<script setup lang="ts">
import { ref } from 'vue'
import PageList from '../components/PageList.vue'

const tksList = ref([
  { id: 1, name: 'TKS 1' },
  { id: 2, name: 'TKS 2' },
  { id: 3, name: 'TKS 3' }
])
</script>

<template>
  <PageList
    title="TKS List"
    :items="tksList"
    :show-arrows="false"
  />
</template>