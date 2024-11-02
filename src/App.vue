<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter(Boolean)
  return paths.map((path, index) => ({
    label: decodeURIComponent(path),
    path: '/' + paths.slice(0, index + 1).join('/')
  }))
})
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>Framework Navigator</q-toolbar-title>
      </q-toolbar>
      <q-breadcrumbs v-if="breadcrumbs.length">
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el
          v-for="crumb in breadcrumbs"
          :key="crumb.path"
          :label="crumb.label"
          :to="crumb.path"
        />
      </q-breadcrumbs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>