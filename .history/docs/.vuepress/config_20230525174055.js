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
        sidebar: [
            '/',
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