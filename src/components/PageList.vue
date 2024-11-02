<script setup lang="ts">
import ListItem from './ListItem.vue'

interface Props {
  title: string
  items: Array<{ id: number; name: string }>
  showArrows?: boolean
  onItemClick?: (name: string) => void
}

defineProps<Props>()
</script>

<template>
  <q-page padding>
    <h4>{{ title }}</h4>
    <q-list bordered separator>
      <ListItem
        v-for="item in items"
        :key="item.id"
        :name="item.name"
        :show-arrow="showArrows"
        :onClick="onItemClick ? () => onItemClick(item.name) : undefined"
      />
    </q-list>
  </q-page>
</template>