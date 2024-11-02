<script setup lang="ts">
interface Props {
  name: string
  showArrow?: boolean
  onClick?: () => void
}

defineProps<Props>()
</script>

<template>
  <q-item clickable v-ripple @click="onClick">
    <q-item-section>{{ name }}</q-item-section>
    <q-item-section v-if="showArrow" side>
      <q-icon name="chevron_right" />
    </q-item-section>
  </q-item>
</template>