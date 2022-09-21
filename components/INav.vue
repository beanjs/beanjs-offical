<template>
  <header class="header-wrapper">
    <div class="header-title">
      <span class="text-gray-800">Bean</span>
      <span class="text-red-600">JS</span>
    </div>
    <div class="header-menu-wrapper">
      <div class="header-menu-more" @click="visible = !visible">
        <icon icon="gg:details-more" />
      </div>
      <div class="header-menu-container" :class="{ 'h-0': !visible, 'h-auto': visible }">
        <nuxt-link
          v-for="(m, i) of menus"
          :key="i"
          :to="m.url"
          :target="m.target"
          prefetch
          class="header-menu-item group"
        >
          <div class="header-menu-label lg:group-hover:text-gray-800">
            {{ m.label }}
          </div>
          <div class="header-menu-underline lg:group-hover:bg-gray-800 group-hover:scale-y-100" />
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
interface MenuItem {
  label: string
  url: string | { path: string }
  target?: string
}

const visible = ref<boolean>(false)
const menus: Array<MenuItem> = [
  { label: 'BeanIO', url: { path: '/' } },
  { label: 'Github', target: '_blank', url: 'https://github.com/beanjs' },
  { label: '店铺', target: '_blank', url: 'https://beanjs.taobao.com' }
]
</script>

<style scoped lang="scss">
.header-wrapper {
  @apply h-20 z-50 sticky top-0 flex flex-row items-center justify-between bg-gray-100 select-none;

  .header-title {
    @apply font-bold text-4xl;
    @apply lg:text-6xl;
  }

  .header-menu-wrapper {
    @apply flex flex-row justify-end;

    .header-menu-more {
      @apply text-3xl h-full px-4 py-4 active:bg-gray-200 text-gray-800;
      @apply lg:hidden;
    }
    .header-menu-container {
      @apply absolute top-20 w-full bg-gray-100 overflow-hidden;
      @apply lg:relative lg:h-auto lg:top-0 lg:flex lg:flex-row lg:bg-transparent;

      .header-menu-item {
        @apply block px-4 py-2 cursor-pointer text-lg active:bg-gray-200 first:border-t border-b border-gray-200 text-gray-800;
        @apply lg:text-xl lg:border-transparent lg:text-gray-600;
        .header-menu-label {
          @apply transition-all duration-300;
        }
        .header-menu-underline {
          @apply h-1 w-full transition-all duration-300 hidden;
          @apply lg:block;
        }
      }
    }
  }
}
</style>
