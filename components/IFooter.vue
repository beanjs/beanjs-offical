<template>
  <div class="wrapper">
    <div class="footer-wrapper">
      <div class="footer-container">
        <div class="footer-title">
          技术交流
        </div>
        <div class="footer-content">
          <ul>
            <li>1群: 970371698</li>
          </ul>
        </div>
      </div>
      <div class="footer-container">
        <div class="footer-title">
          合作伙伴
        </div>
        <div class="footer-content">
          <ul>
            <li>北京联盛德微电子有限责任公司</li>
          </ul>
        </div>
      </div>
      <div class="footer-container">
        <div class="footer-title">
          特别鸣谢
        </div>
        <div class="footer-content">
          <ul>
            <li>
              <a href="https://www.espruino.com/" target="_blank">espruino</a>
            </li>
            <li>
              <a href="https://nutui.jd.com/3x/#/?from=taro" target="_blank">nutui</a>
            </li>
            <li>
              <a href="https://v3.nuxtjs.org/" target="_blank">nuxtjs</a>
            </li>
            <li>
              <a href="https://tailwindcss.com/" target="_blank">tailwindcss</a>
            </li>
            <li>
              <a href="https://taro.jd.com/" target="_blank">taro</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-beian">
      <span>版本:{{ config.public.version }}</span>
      <span>SHA:{{ config.public.gitsha }}</span>
      <a class="beian" href="https://beian.miit.gov.cn/" target="_blank">黔ICP备19011407号</a>
      <a
        class="beian"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=52011102002495"
      >
        贵公网安备 52011102002495号
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
const config = useRuntimeConfig()
</script>
<style lang="scss" scoped>
.wrapper {
  @apply bg-gray-200 pb-16 text-gray-800 mt-8;
  .footer-wrapper {
    @apply grid grid-cols-1 gap-x-4 gap-y-8 py-8;
    @apply lg:grid-cols-3;
    .footer-container {
      @apply px-8;

      .footer-title {
        @apply text-2xl font-bold pb-4;
      }

      .footer-content {
        @apply text-gray-600;
        ul {
          @apply list-disc list-inside;
        }
      }
    }
  }

  .footer-beian {
    @apply flex flex-col items-center text-sm;
    a {
      @apply text-blue-500;
    }
    span {
      @apply text-gray-600;
    }
  }
}
</style>
