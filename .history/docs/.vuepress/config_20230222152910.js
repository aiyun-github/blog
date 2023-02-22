module.exports = {
    title: 'Hello WEB',
    description: 'VuePress,Personal Blog,web',
    base: "/bar/", // 基础路径
    head: [ // 设置页签
        ['link', { rel: 'icon', href: '/docs/.vuepress/public/favicon.svg' }]
      ],
    markdown: { // 配置代码行号
        lineNumbers: true
    },
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