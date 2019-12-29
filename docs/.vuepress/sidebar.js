module.exports = {
  '/guide/': [
    '',
    'quickStart',
    'styleGuide',
    {
      title: '基础组件',   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      children: [
        'components/base/button'
      ]
    },
    {
      title: '表单组件',   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      children: [
        'components/form/checkbox'
      ]
    },
  ]
}
