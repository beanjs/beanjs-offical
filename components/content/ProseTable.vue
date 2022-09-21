<template>
  <div class="table-wrapper">
    <table class="table-container">
      <slot />
    </table>
  </div>
</template>
<style lang="scss">
.table-wrapper {
  @apply w-full overflow-auto py-4;
  .table-container {
    @apply w-full text-base border-collapse table-auto;
    @apply lg:text-lg;
  }
}
</style>
