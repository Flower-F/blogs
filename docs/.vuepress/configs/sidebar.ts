import { SidebarConfig } from 'vuepress'

const sidebar: SidebarConfig = {
  '/performance/': [
    {
      text: '前端性能优化',
      children: [
        '/performance/README.md',
        '/performance/test-father.md',
        '/performance/test-sibling.md'
      ]
    }
  ],
  '/monitor': [
    {
      text: '前端监控',
      children: [
        '/monitor/README.md'
      ]
    }
  ]
}

export default sidebar
