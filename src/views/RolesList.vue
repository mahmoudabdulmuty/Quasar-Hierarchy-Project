<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import PageList from '../components/PageList.vue'

const router = useRouter()
const route = useRoute()
const roles = ref([
  { id: 1, name: 'Role 1' },
  { id: 2, name: 'Role 2' },
  { id: 3, name: 'Role 3' }
])

const navigateToCompetencies = (role: string) => {
  router.push(`${route.path}/${encodeURIComponent(role)}`)
}
</script>

<template>
  <PageList
    title="Roles"
    :items="roles"
    :show-arrows="true"
    :on-item-click="navigateToCompetencies"
  />
</template>