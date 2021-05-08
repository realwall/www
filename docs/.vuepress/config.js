module.exports = {
  base: '/blog/',
  title: '学不可以已',
  description: '随便写点什么',
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/realwall' },
    ],
    sidebar: [
      {
        title: '前端',   // 必要的
        // path: '/js/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/js/throttle'
        ]
      },
      {
        title: 'Linux',
        // path: '/linux/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [
          '/linux/chattr',
          '/linux/string'
        ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
  }
}
