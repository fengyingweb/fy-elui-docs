module.exports = {
  '/guide/': [
    '',
    'quickStart',
    'styleGuide',
    {
      title: '基础组件',   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      children: [
        'components/base/button',
        'components/base/cell',
        'components/base/icon',
        'components/base/layout',
        'components/base/popup',
        'components/base/style'
      ]
    },
    {
      title: '表单组件',   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      children: [
        'components/form/checkbox',
        'components/form/datetimePicker',
        'components/form/field',
        'components/form/numberKeyboard',
        'components/form/passwordInput',
        'components/form/picker',
        'components/form/radio',
        'components/form/rate',
        'components/form/search',
        'components/form/slider',
        'components/form/stepper',
        'components/form/switch',
        'components/form/switchCell',
        'components/form/uploader'
      ]
    },
    {
      title: '反馈组件',
      collapsable: true,
      children: [
        'components/feedback/actionSheet',
        'components/feedback/dialog',
        'components/feedback/loading',
        'components/feedback/notify',
        'components/feedback/pullRefresh',
        'components/feedback/swipeCell',
        'components/feedback/toast'
      ]
    },
    {
      title: '展示组件',
      collapsable: true,
      children: [
        'components/show/circle',
        'components/show/collapse',
        'components/show/lazyload',
        'components/show/list',
        'components/show/noticeBar',
        'components/show/progress',
        'components/show/steps',
        'components/show/swipe',
        'components/show/scroller',
        'components/show/tag',
        'components/show/qrcode'
      ]
    },
    {
      title: '导航组件',
      collapsable: true,
      children: [
        'components/nav/indexBar',
        'components/nav/navBar',
        'components/nav/pagination',
        'components/nav/sidebar',
        'components/nav/tab',
        'components/nav/tabbar',
        'components/nav/treeSelect'
      ]
    },
    {
      title: '业务组件',
      collapsable: true,
      children: [
        'components/service/addressEdit',
        'components/service/area'
      ]
    },
    'charts',
    'axios'
  ]
}
