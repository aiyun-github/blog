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
                items: [
                    {
                        text: '框架文档',
                        items: [{
                                text: 'React',
                                link: 'https://zh-hans.react.dev/'
                            },
                            {
                                text: 'Vue3',
                                link: 'https://cn.vuejs.org/'
                            }
                        ]
                    },
                    {
                        text: '文档教程',
                        items: [{
                                text: 'ES6 入门教程',
                                link: 'https://es6.ruanyifeng.com/'
                            },
                            {
                                text: 'Git 中文手册',
                                link: 'https://git-scm.com/book/zh/v2'
                            }
                        ]
                    },
                    {
                        text: '配置相关',
                        items: [{
                                text: 'ESLint',
                                link: 'https://zh-hans.eslint.org/'
                            },
                            {
                                text: 'Babel',
                                link: 'https://www.babeljs.cn/'
                            },
                        ]
                    },
                    {
                        text: '配置相关',
                        items: [{
                                text: 'ESLint',
                                link: 'https://zh-hans.eslint.org/'
                            },
                            {
                                text: 'Babel',
                                link: 'https://www.babeljs.cn/'
                            },
                        ]
                    },
                    {
                        text: 'UI组件',
                        items: [{
                                text: 'Ant Design React',
                                link: 'https://ant.design/index-cn'
                            },
                            {
                                text: 'Ant Design Vue',
                                link: 'https://www.antdv.com/components/overview'
                            },
                        ]
                    }
                ]
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
              path: '/web/JavaScript/1.笔记',
              collapsable: false, // 不折叠
              children: [
                { title: "条件类型", path: "/web/JavaScript/1.笔记" },
                { title: "泛型", path: "/web/JavaScript/1.笔记" }
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