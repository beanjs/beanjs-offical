<template>
  <div class="app-wrapper">
    <nuxt-layout class="app-container" />
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount } from '#imports'

onBeforeMount(() => {
  // fix ios platform active: not working
  document.body.addEventListener('touchstart', function () {}) // @ts-ignore
})
</script>
<style scoped lang="scss">
.app-wrapper {
  @apply min-h-screen font-mono text-gray-600 bg-gray-100;
  .app-container {
    @apply container min-h-screen mx-auto px-2;
  }
}
</style>
