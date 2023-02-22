module.exports = {
    title: '前端',
    description: 'Just playing around',
    configureWebpack: {
        resolve: {
          alias: {
            // 配置别名
            '@': 'docs',
          }
        }
      }
  }