<template>
  <h3 class="h3-wrapper">
    <slot></slot>
  </h3>
</template>
<style lang="scss" scoped>
.h3-wrapper {
  @apply text-xl font-bold text-gray-800 border-b border-gray-200 pt-8 break-words;
  @apply lg:text-2xl;
}
</style>
