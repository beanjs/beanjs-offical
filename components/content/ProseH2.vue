<template>
  <h2 class="h2-wrapper">
    <slot></slot>
  </h2>
</template>
<style lang="scss" scoped>
.h2-wrapper {
  @apply text-2xl font-bold text-gray-800 border-b border-gray-200 w-full pt-8 pb-2;
  @apply lg:text-4xl;
}
</style>
