<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import PageList from '../components/PageList.vue'

const router = useRouter()
const route = useRoute()
const competencies = ref([
  { id: 1, name: 'Competency 1' },
  { id: 2, name: 'Competency 2' },
  { id: 3, name: 'Competency 3' }
])

const navigateToTKS = (competency: string) => {
  router.push(`${route.path}/${encodeURIComponent(competency)}`)
}
</script>

<template>
  <PageList
    title="Competencies"
    :items="competencies"
    :show-arrows="true"
    :on-item-click="navigateToTKS"
  />
</template>