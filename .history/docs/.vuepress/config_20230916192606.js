module.exports = {
    title: 'Hello WEB',
    description: 'VuePress,Personal Blog,web',
    base: '/', // 基础路径
    // theme: 'reco', // 主题
    locales: {
        '/': {
          lang: 'zh-CN', // 
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/favicon.svg' }], // 设置页签
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    themeConfig: {
        // 导航栏
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: '笔记',
                link: '/web/basic/JS/1',
            },
            // 文档
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
                                text: 'Vue',
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
                        text: '部署相关',
                        items: [
                            {
                                text: 'GitHub Actions文档',
                                link: 'https://docs.github.com/zh/actions'
                            },
                            {
                                text: 'Docker',
                                link: 'https://docs.docker.com/get-started/'
                            },
                            {
                                text: 'Nginx中文文档',
                                link: 'https://blog.redis.com.cn/doc/index.html'
                            },
                            {
                                text: 'Jenkins',
                                link: 'https://www.jenkins.io/zh/doc/'
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
                text: 'GitHub',
                link: 'https://github.com/aiyun-github'
            },
        ],
        // 侧边栏
        sidebar: [
            {
                title: "基础",
                path: '/web/basic/JS/1',
                collapsable: true, // 是否折叠
                children: [
                  { title: "JS", path: "/web/basic/JS/1" },
                ],
            },
            {
                title: '算法',
                path: '/web/arithmetic/数据结构与算法',
                collapsable: true,
                children: [
                    { title: "数据结构与算法-笔记", path: "/web/arithmetic/数据结构与算法.md" },
                    { title: "图解算法数据结构-笔记", path: "/web/arithmetic/《图解算法数据结构》笔记.md" },
                ]
            },
            {
                title: "踩坑",
                path: '/web/problem/踩坑2021',
                collapsable: true,
                children: [
                  { title: "踩坑2021", path: '/web/problem/踩坑2021.md' },
                  { title: "踩坑2022", path: '/web/problem/踩坑2022.md' },
                  { title: "踩坑2023", path: '/web/problem/踩坑2023.md' },
                ],
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