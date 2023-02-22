module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: "/bar/",
    configureWebpack: {
        resolve: {
          alias: {
            // 配置别名
            '@': 'docs',
            '@vuepress': 'docs/.vuepress',
            '@guide': 'docs/guide',
            '@components': 'docs/.vuepress/components',
            '@public': 'docs/.vuepress/public',
            '@styles': 'docs/.vuepress/styles',
            '@theme': 'docs/.vuepress/theme',
          }
        }
      }
  }