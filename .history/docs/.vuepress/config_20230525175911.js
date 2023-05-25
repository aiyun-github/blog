module.exports = {
    title: 'Hello WEB',
    description: 'VuePress,Personal Blog,web',
    base: '/blog-demo/', // 基础路径
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.svg'
        }], // 设置页签
    ],
    themeConfig: {
        // 导航栏
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: '文档',
                link: '/documents/'
            },
            {
                text: '哈哈哈',
                ariaLabel: 'Language Menu',
                items: [{
                        text: 'Chinese',
                        link: '/web/JavaScript/1.笔记.md'
                    },
                    {
                        text: 'Japanese',
                        link: '/web/Vue/'
                    }
                ]
            },
            {
                text: 'Languages',
                items: [{
                        text: 'Group1',
                        items: [{
                                text: 'Chinese',
                                link: '/web/Vue/'
                            },
                            {
                                text: 'Japanese',
                                link: '/web/Vue/'
                            }
                        ]
                    },
                    {
                        text: 'Group2',
                        items: [{
                                text: 'Chinese',
                                link: '/web/Vue/'
                            },
                            {
                                text: 'Japanese',
                                link: '/web/Vue/'
                            }
                        ]
                    }
                ]
            },
            {
                text: 'GitHub',
                link: 'https://github.com'
            },
        ],
        // 侧边栏
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '/web/JavaScript/',
              collapsable: false, // 不折叠
              children: [
                { title: "条件类型", path: "/handbook/ConditionalTypes" },
                { title: "泛型", path: "/handbook/Generics" }
              ],
            }
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