module.exports = [
  {
    title: '介绍',   // 必要的
    path: '/intro',      // 可选的, 应该是一个绝对路径
    collapsable: true, // 可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
  },
  {
    title: '安装',   // 必要的
    path: '/install',      // 可选的, 应该是一个绝对路径
    collapsable: true, // 可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      '/install/one'
    ]
  },
  {
    title: '组件介绍',   // 必要的
    path: '/components',      // 可选的, 应该是一个绝对路径
    collapsable: true, // 可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      '/'
    ]
  },
]
