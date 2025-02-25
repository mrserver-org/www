import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MrServer",
  description: "Maximize your server.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Basic',
        items: [
          { text: 'Installing MrServer', link: '/install-mrserver' },
        ]
      },
      {
        text: 'Creating an app',
        items: [
          { text: 'Showing a window', link: '/api/show-window' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mrserver-org' }
    ]
  }
})
