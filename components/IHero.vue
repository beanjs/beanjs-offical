<template>
  <div class="hero-wrapper">
    <div class="hero-title">
      {{ props.title }}
    </div>
    <slot />
  </div>
</template>
<script setup lang="ts">
interface IHeroProps {
  title: string
}

const props = defineProps<IHeroProps>()
</script>
<style lang="scss" scoped>
.hero-wrapper {
  @apply pb-8;
  @apply lg:pb-16;
  .hero-title {
    @apply text-center text-4xl py-8 font-bold;
  }
}
</style>
