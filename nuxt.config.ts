import { defineNuxtConfig } from 'nuxt/config'
import getRepoInfo from 'git-repo-info'

const info = getRepoInfo()

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0'
        },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      version: require('./package.json').version,
      gitsha: info.sha.substring(0, 8)
    }
  },
  content: {
    highlight: {
      theme: 'github-light'
    }
  }
})
