module.exports = {
    title: 'Hello WEB',
    description: 'VuePress,Personal Blog,web',
    base: '/bar/', // 基础路径
    dest: './dist',
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
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [{
                        text: 'Chinese',
                        link: '/language/chinese/'
                    },
                    {
                        text: 'Japanese',
                        link: '/language/japanese/'
                    }
                ]
            },
            {
                text: 'Languages',
                items: [{
                        text: 'Group1',
                        items: [{
                                text: 'Chinese',
                                link: '/language/chinese/'
                            },
                            {
                                text: 'Japanese',
                                link: '/language/japanese/'
                            }
                        ]
                    },
                    {
                        text: 'Group2',
                        items: [{
                                text: 'Chinese',
                                link: '/language/chinese/'
                            },
                            {
                                text: 'Japanese',
                                link: '/language/japanese/'
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
        sidebar: auto,
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