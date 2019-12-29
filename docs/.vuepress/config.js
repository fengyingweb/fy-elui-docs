const ip = require('ip');
const sidebar = require('./sidebar');

module.exports = {
  title: 'fy-elui', // 网页标题
  description: '基于vue的轻量级移动UI组件库', // 网页描述
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }]
  ],
  host: ip.address(),
  port: 8081,
  // 主题配置
  themeConfig: {
    logo: '/img/logo.png', // 导航栏logo
    lastUpdated: 'Last Updated', // 最后更新时间
    editLinks: true, // 默认是 false, 设置为 true 来启用
    editLinkText: 'Welcome to fy-elui, 帮助我们改善此页面！', // 默认为 "Edit this page"
    smoothScroll: true, // 页面滚动
    nav: [ // 导航栏
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { 
        text: '了解更多',
        items: [
          { text: 'vuepress', link: 'https://www.vuepress.cn/'},
          { text: 'vue', link: 'https://cn.vuejs.org/'},
          { text: 'vant', link: 'https://youzan.github.io/vant/#/zh-CN/home'}
        ]
      },
      { text: 'GitHub', link: 'https://github.com/fengyingweb/fyel-ui' },
    ],
    sidebarDepth: 0, // 嵌套的标题链接, 默认的深度是 1, 设置成 0 将会禁用标题（headers）链接，同时，最大的深度为 2
    sidebar
  }
}
