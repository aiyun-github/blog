module.exports = {
    title: '前端',
    description: 'Just playing around',
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
            '@theme': 'docs/.vuepress/theme',
          }
        }
      }
  }