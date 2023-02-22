module.exports = {
    title: `${<img src='/favicon.svg'/>}Hello WEB`,
    description: 'VuePress,Personal Blog,web',
    base: "/bar/", // 基础路径
    dest: "./dist",
    head: [ // 设置页签
        ['link', { rel: 'icon', href: '/favicon.svg' }]
      ],
    themeConfig: {
        nav: [
          {
            text: "首页",
            link: "/",
            icon: ""
          },
          {
            text: "架构",
            icon: "",
            items: [
              {
                text: "",
                link: ""
              },
            ]
          },
        ]
    },
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