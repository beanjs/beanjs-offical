<template>
  <ul class="ul-wrapper">
    <slot />
  </ul>
</template>
<style lang="scss">
.ul-wrapper {
  @apply w-full list-disc list-inside py-4 text-base;
  @apply lg:text-lg;
  ul {
    @apply pl-8 list-outside;
  }
}
</style>
