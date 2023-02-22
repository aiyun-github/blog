module.exports = {
    title: `${<img src='/favicon.svg'/>}Hello WEB`,
    description: 'VuePress,Personal Blog,web',
    base: '/bar/', // 基础路径
    dest: './dist',
    logo: '/favicon.svg',
    author: '',
    authorAvatar: '',
    startYear: 2023,
    head: [
        ['link', { rel: 'icon', href: '/favicon.svg' }] // 设置页签
        ['meta', { name: 'description', content: '前端博客、前端日常' }]
    
    ],
    theme: 'reco', // 主题
    themeConfig: { // 主题配置信息
        type: 'blog',
        nav: [ // 导航栏
          {
            text: '首页',
            link: '/',
            icon: ''
          },
          {
            text: '架构',
            icon: '',
            items: [
              {
                text: '',
                link: ''
              },
            ]
          },
        ],
        blogConfig: { // 导航栏的配置信息
            category: {
              location: 2,
              text: "文章分类"
            },
            tag: {
              location: 3,
              text: "标签"
            }
        },
        valineConfig: {     // valine 评论功能配置信息
            appId: 'muS0Qm152twfYLYbnpH3Bd4F-gzGzoHsz',// your appId
            appKey: 'Kz9WuHs6w0P8mIgUWGHoBKDb', // your appKey
            placeholder: '尽情留下你想说的话吧',     // 评论框占位符
            avatar: 'wavatar',      // 评论用户的头像类型
            highlight: true,      // 代码高亮
            recordIP: true,    // 记录评论者的IP
        },
    },
    sidebar: { // 侧边栏
        '/docs/theme-reco/': [
          '',    // 空字符串对应的是 README.md
          theme,  // 对应 theme.md
          plugin,  // 对应plugin.md
          api    // 对应api.md
        ]
    },
    friendLink: [ // 友链
        {
          title: "电子书",
          desc: "",
          email: "478231309@qq.com",
          link: "链接"
        },
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