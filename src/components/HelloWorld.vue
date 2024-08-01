<script setup lang="ts">

defineProps<{ msg: string }>()

</script>

<template>
  <h2>{{ msg }}</h2>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
