<script lang="ts">
import { defineComponent } from '#imports'
export default defineComponent({
  props: {
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array as () => number[],
      default: () => []
    }
  }
})
</script>

<template>
  <div class="code-wrapper">
    <slot />
  </div>
</template>

<style lang="scss">
.code-wrapper {
  @apply py-4 px-4 bg-gray-200 w-full overflow-auto mt-4;
  pre,
  code,
  .line {
    display: block;
    min-height: 1rem;
  }
}
</style>
