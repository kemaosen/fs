const nav = require("./nav")
module.exports = {
  base:'/fs/',
  title: 'Kms',
  description: '一个UI框架',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  // 配置webpack别名
  configureWebpack: {
    resolve: {
      alias: {
        '@': 'path/to/some/dir'
      }
    }
  },
  themeConfig: {
    nav,
    // logo: '/assets/img/logo.png',// 设置logo
    lastUpdated: 'Last Updated',// 显示最后更新时间
    nextLinks: true,// 推荐下一篇
    prevLinks: true,// 推荐上一篇
    
    repo: 'vuejs/vuepress',// github 连接
    repoLabel: '查看源码',// 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为项目名称
    docsBranch: 'master',// 设置文档放仓库分支
    docsDir: 'docs',    // 设置文档根目录
    
    smoothScroll: true,    // 页面滚动效果nrm
  },
  plugins: ['permalink-pinyin', ['autobar', {'pinyinNav': true}]],
  // plugins: ['autobar']
}
