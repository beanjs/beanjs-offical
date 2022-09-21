<template>
  <p class="p-wrapper">
    <slot></slot>
  </p>
</template>
<style lang="scss">
.p-wrapper {
  @apply text-base text-left py-2 w-full first:pt-4 last:pb-4;
  @apply lg:text-lg;

  a{
    @apply text-blue-500;
  }
}
</style>
