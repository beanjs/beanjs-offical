<template>
  <div class="document-wrapper">
    <div class="search-wrapper">
      <form class="search-container" action="javascript:return true">
        <input
          v-model="keyword"
          class="search-key"
          type="search"
          placeholder="请输入关键字"
          @keyup.enter="onSearch"
        />

        <div class="search-icon" @click="onSearch">
          <icon icon="fe:search" />
        </div>
      </form>
    </div>
    <div class="category-wrapper">
      <div
        v-for="(c, i) of categories"
        :key="`category-${i}`"
        class="category-container"
        @click="onQuery(c.query)"
      >
        <icon :icon="icons[c.query.category as string]"></icon>
        <span>{{ c.label }}</span>
      </div>
    </div>
    <div class="content-wrapper">
      <nuxt-link v-for="c of contents" :key="c._path" class="content-container group" :to="c._path">
        <div class="content-title lg:group-hover:text-gray-800">
          <span>{{ c.title }}</span>
          <icon :icon="icons[c.category]"></icon>
        </div>
        <div v-if="c.tags" class="content-tag-wrapper">
          <div v-for="(t, ti) of c.tags" :key="`tag-${ti}`" class="content-tag-container">
            {{ t }}
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ParsedContent, QueryBuilderWhere } from '@nuxt/content/dist/runtime/types'

interface Category {
  label: string
  query: QueryBuilderWhere
}

const inner: Category = {
  label: '内置API',
  query: {
    category: 'inner'
  }
}

const outer: Category = {
  label: '外部模块',
  query: {
    category: 'outer'
  }
}

const chip: Category = {
  label: '芯片支持',
  query: {
    category: 'chip'
  }
}

const activeQuery = useState<QueryBuilderWhere>('activeQuery', () => inner.query)
const categories: Array<Category> = [chip, inner, outer]
const keyword = ref<string>('')
const contents = useState<Array<Pick<ParsedContent, string>>>('contents', () => [])
// const contents = ref<Array<ParsedContent>>([])
const icons = {
  chip: 'mingcute:chip-line',
  outer: 'carbon:join-outer',
  inner: 'carbon:join-inner'
}

const onSearch = async () => {
  if (keyword.value !== '') {
    await onQuery({
      title: { $contains: keyword.value }
    })
  } else {
    await onQuery(chip.query)
  }
}

const onQuery = async (query: QueryBuilderWhere) => {
  if (categories.find(v => v.query === query)) {
    keyword.value = ''
  }

  activeQuery.value = query
  contents.value = await queryContent('beanio')
    .where(query)
    .only(['title', 'category', 'tags', '_path'])
    .find()

  document.documentElement.scrollTop = 0
}

useHead({
  title: 'BeanIO参考文档'
})
onMounted(async () => {
  await onQuery(activeQuery.value)
})
</script>
<style lang="scss" scoped>
.document-wrapper {
  min-height: calc(100vh - 5rem);
  .search-wrapper {
    @apply flex flex-row justify-center pt-4;
    @apply lg:pt-16 lg:px-[10%];
    .search-container {
      @apply flex flex-row items-center justify-center bg-white rounded-full w-full;
      @apply lg:rounded-none;

      input {
        @apply rounded-none focus:outline-none border-0 outline-none;
      }
      .search-key {
        @apply grow px-4 py-2 text-lg;
      }

      .search-icon {
        @apply text-2xl px-4 py-2 cursor-pointer hidden;
        @apply lg:block;
      }
    }
  }

  .category-wrapper {
    @apply flex flex-row justify-center py-8 select-none;
    @apply lg:px-[10%];
    .category-container {
      @apply mx-2 px-4 py-1 bg-white text-sm rounded-full cursor-pointer flex flex-row items-center;
      @apply hover:shadow active:bg-gray-100;
      span{
        @apply pl-1;
      }
    }
  }

  .content-wrapper {
    @apply grid grid-cols-1 gap-4;
    @apply lg:px-[10%] lg:grid-cols-3;

    .content-container {
      @apply bg-white px-4 py-4;
      @apply lg:transition-all lg:duration-300 lg:hover:scale-105 lg:hover:shadow lg:px-8;

      .content-title {
        @apply text-xl font-bold flex flex-row items-center;
        span {
          @apply grow;
        }
      }

      .content-tag-wrapper {
        @apply border-t border-gray-200 py-2 flex flex-row flex-wrap;
        .content-tag-container {
          @apply text-xs border border-gray-200 rounded-full px-2 py-0.5 mx-0.5 my-0.5;
        }
      }
    }
  }
}
</style>
