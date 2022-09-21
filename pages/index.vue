<template>
  <div class="index-wrapper">
    <div class="banner-wrapper">
      <div class="banner-container">
        <div class="banner-title">
          <span>Bean</span>
          <span class="text-red-600">IO</span>
        </div>
        <div class="banner-keyword-wrapper">
          <div class="banner-keyword-container">
            <span>免费</span>
          </div>
          <div class="banner-keyword-container">
            <span>简单</span>
          </div>
          <div class="banner-keyword-container">
            <span>低代码</span>
          </div>
        </div>
        <div class="banner-content">
          <span>BeanIO是一款可用于少儿编程、智能家电、远程控制等领域的产品。</span>
        </div>
        <div class="banner-button-wrapper">
          <nuxt-link
            class="banner-button-conrainer"
            to="https://space.bilibili.com/396851911/channel/seriesdetail?sid=2640351"
            target="_blank"
          >
            <span>开始使用</span>
          </nuxt-link>
          <nuxt-link to="/beanio/document" class="banner-button-conrainer">
            <span>参考文档</span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <i-hero title="诞生之路">
      <div class="history-wrapper">
        <div class="history-container">
          <div class="history-title">
            <span>启蒙</span>
          </div>
          <div class="history-content">
            <span>
              大约是在 2018
              年的时候，我当时萌生了远程控制家电（尤其是灯光）的想法，急需寻找一款免费使用、上手简单、可定制化移动端界面的物联网平台。于是开启了在网络的海洋里寻找解决方案的艰苦之旅。期间接触过很多国内外的产品但是都不能完全满足我当时需求，直到在偶然的情况下看到了
              <a href="https://blynk.io/" target="_blank">Blynk</a>
              ，再进一步了解该产品以后我被其深深惊艳到了。于是使用 Blynk+Espruino
              的方案开启了第一次远程控制家电的改造之旅。
            </span>
          </div>
        </div>
        <div class="history-container">
          <div class="history-title">
            <span>裂变</span>
          </div>
          <div class="history-content">
            <span>
              不久之后，伴随着第一阶段目标的达成，我也开始着手思考怎么让家人能够使用该成果。在这个过程中
              Blynk 的缺陷也开始暴露了出来，例如：
              <strong>APP下载</strong>
              、
              <strong>账号注册</strong>
              ，这些在年轻人看来都是很简单、很容易完成的事。但是在年长老人看来就是很复杂、很困难的事。于是就开始萌生了自己开发一套产品的想法。
            </span>
          </div>
        </div>
        <div class="history-container">
          <div class="history-title">
            <span>诞生</span>
          </div>
          <div class="history-content">
            <span>
              再确定要走自己研发产品这条路以后，那这个产品的定位与特色就是首要考虑的事情了。使用微信小程序作为入口就能容易的解决
              <strong>APP下载</strong>
              、
              <strong>账号的注册</strong>
              、
              <strong>定制化界面</strong>
              等用户层面临的问题了。但是对于硬件层的
              <strong>上手简单</strong>
              却让我思考了很久，究竟是像众多平台一样提供各种编程语言的库，还是说高度集成到 Espruino
              中。直到某次宵夜闲聊让我恍然顿悟当场敲定小程序+Espruino 的技术路线。
            </span>
          </div>
        </div>
      </div>
    </i-hero>
    <i-hero title="核心优势">
      <div class="advantage-wrapper">
        <div class="advantage-container">
          <div class="advantage-title">
            <span>JavaScript</span>
          </div>
          <div class="advantage-content">
            JavaScript（下文简称：JS）是一种面向对象、面向过程、弱类型的脚本语言。从 1995
            年诞生至今，JS 从只能运行在 Web 端到目前可运行与 Web 端、PC
            端、移动端、服务器端、嵌入式端、单片机端得到了飞跃式的发展，一举荣升成为目前使用最为广泛的编程语言。如果您会使用
            JS，那您将会在 5 分钟内学会 BeanIO 硬件层程序的开发。
          </div>
        </div>
        <div class="advantage-container">
          <div class="advantage-title">
            <span>开发工具</span>
          </div>
          <div class="advantage-content">
            推荐您是使用
            <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
            进行 BeanIO 硬件层程序的开发，您可以通过搜索并安装
            <a href="https://marketplace.visualstudio.com/items?itemName=beanio.beanio-vscode">
              beanio插件
            </a>
            获得更好的开发体验，不仅如此 beanio
            插件内置最新固件烧录功能，尽最大可能减少您在开发中不同工具的使用。未来还将增加
            <a href="https://developers.google.cn/blockly/">blokly</a>
            功能，进一步完善对低年龄段用户的支持。
          </div>
        </div>
        <div class="advantage-container">
          <div class="advantage-title">
            <span>极简交付</span>
          </div>
          <div class="advantage-content">
            为提高项目的交付体验，BeanIO 提供了项目
            <strong>分享</strong>
            的方式，您只需要让目标用户扫描您的项目分享二维码就能让目标用户使用您的项目，从而达到极简交付的目的。此外
            BeanIO 提供项目成员管理功能，让您能更好的对项目成员进行管理。
          </div>
        </div>
        <div class="advantage-container">
          <div class="advantage-title">
            <span>定制化界面</span>
          </div>
          <div class="advantage-content">
            BeanIO
            用户层内置界面定制引擎，您可以通过拖拽的方式完成用户界面的定制化适配不同项目的需求，大大提高研发效率，减少研发成本。并且通过简单的参数设置就能与
            BeanIO
            硬件层进行数据通信。如果您有新的控件需求，您可以通过交流群联系我，我将尽我最大的努力满足您的需求。
          </div>
        </div>
      </div>
    </i-hero>
  </div>
</template>
<script setup lang="ts">
import IHero from '@/components/IHero.vue'
useHead({
  title: 'BeanJS物联云'
})
</script>
<style lang="scss" scoped>
.index-wrapper {
  @apply h-full;
  .banner-wrapper {
    background-image: url('/01.jpg');
    @apply bg-center flex flex-col items-center select-none pt-28 pb-12 mb-4;
    @apply lg:pt-40 lg:pb-36 lg:mb-8;

    .banner-container {
      @apply text-white;
      .banner-title {
        @apply text-8xl text-center animate-bounce;
      }

      .banner-keyword-wrapper {
        @apply flex flex-row justify-center text-4xl;
        .banner-keyword-container {
          @apply px-4 py-2;
        }
      }

      .banner-content {
        @apply text-2xl text-center select-text py-4;
      }

      .banner-button-wrapper {
        @apply flex flex-row justify-center flex-wrap px-8;
        .banner-button-conrainer {
          @apply w-full mx-8 my-4 px-16 py-4;
          @apply text-center text-gray-800 bg-white rounded-full border border-white transition-all cursor-pointer;
          @apply lg:w-auto lg:my-16 lg:hover:bg-gray-800 lg:hover:text-white lg:duration-300 active:bg-gray-100;
        }
      }
    }
  }

  .history-wrapper {
    @apply w-full grid grid-cols-1 gap-y-4;
    @apply lg:grid-cols-3 lg:gap-x-8;
    .history-container {
      @apply px-8 py-4 rounded-xl bg-white;
      @apply lg:transition-all lg:duration-300 lg:hover:scale-105 lg:hover:shadow;
      .history-title {
        @apply text-center text-xl font-bold py-4;
      }
      .history-content {
        @apply indent-10 text-justify;

        a {
          @apply text-blue-500;
        }
      }
    }
  }

  .advantage-wrapper {
    @apply w-full grid grid-cols-1 gap-y-4;
    @apply lg:grid-cols-4 lg:gap-x-8;
    .advantage-container {
      @apply px-8 py-4 rounded-xl bg-white;
      @apply lg:transition-all lg:duration-300 lg:hover:scale-105 lg:hover:shadow;
      .advantage-title {
        @apply text-center text-xl font-bold py-4;
      }
      .advantage-content {
        @apply indent-10 text-justify;

        a {
          @apply text-blue-500;
        }
      }
    }
  }
}
</style>
