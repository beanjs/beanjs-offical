<template>
  <blockquote class="blockquote-wrapper">
    <slot />
  </blockquote>
</template>
<style lang="scss">
.blockquote-wrapper {
  @apply border-l-2 border-gray-600 w-full px-2 my-4;
  p {
    @apply indent-0 first:pt-0 last:pb-0 text-sm;
    @apply lg:text-base;
  }
}
</style>
