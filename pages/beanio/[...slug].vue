<template>
  <div class="beanio-wrapper">
    <content-doc v-slot="{ doc }">
      <div class="beanio-title">
        {{ doc.title }}
      </div>
      <content-renderer :value="doc"></content-renderer>
    </content-doc>
  </div>
</template>
<script setup lang="ts">
onMounted(() => {
  document.documentElement.scrollTop = 0
})
</script>
<style lang="scss" scoped>
.beanio-wrapper {
  min-height: calc(100vh - 5rem);
  @apply bg-white px-4 py-8;
  @apply lg:mx-[15%] lg:px-16;
  // @apply flex flex-row justify-center pb-8;
  // @apply lg:pb-24;

  .beanio-title {
    @apply text-4xl text-center  text-gray-800 font-bold;
    @apply lg:hidden;
  }

  .beanio-renderer {
    @apply bg-white;
  }
}
</style>
