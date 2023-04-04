import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bad Website Compendium",
  description: "It's just bad websites, yo",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
    markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true,

    // adjust how header anchors are generated,
    // useful for integrating with tools that use different conventions
    anchors: {
      slugify(str) {
        return encodeURIComponent(str)
      }
    }
  }
  }
})
