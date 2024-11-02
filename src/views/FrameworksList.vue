<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PageList from '../components/PageList.vue'

const router = useRouter()
const frameworks = ref([
  { id: 1, name: 'Framework 1' },
  { id: 2, name: 'Framework 2' },
  { id: 3, name: 'Framework 3' }
])

const navigateToRoles = (framework: string) => {
  router.push(`/${encodeURIComponent(framework)}`)
}
</script>

<template>
  <PageList
    title="Frameworks"
    :items="frameworks"
    :show-arrows="true"
    :on-item-click="navigateToRoles"
  />
</template>