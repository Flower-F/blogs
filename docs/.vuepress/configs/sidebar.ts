import { SidebarConfig } from 'vuepress';

export const sidebar: SidebarConfig = {
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
  '/monitor/': [
    {
      text: '前端监控',
      children: [
        '/monitor/README.md'
      ]
    }
  ],
  '/professional-javascript/': [
    {
      text: 'JavaScript 高级程序设计',
      children: [
        '/professional-javascript/README.md',
        '/professional-javascript/proxy.md',
        '/professional-javascript/scope.md'
      ]
    }
  ],
  '/notes/': [
    {
      text: '杂碎笔记',
      children: [
        '/notes/README.md',
      ]
    }
  ],
  '/typescript-advanced-guide/': [
    {
      text: 'Typescript 全面进阶指南',
      children: [
        '/typescript-advanced-guide/README.md',
        '/typescript-advanced-guide/01.md',
        '/typescript-advanced-guide/02.md',
        '/typescript-advanced-guide/03.md',
        '/typescript-advanced-guide/04.md',
        '/typescript-advanced-guide/05.md',
        '/typescript-advanced-guide/06.md',
        '/typescript-advanced-guide/07.md',
        '/typescript-advanced-guide/08.md',
        '/typescript-advanced-guide/09.md',
        '/typescript-advanced-guide/10.md',
        '/typescript-advanced-guide/11.md',
        '/typescript-advanced-guide/12.md',
        '/typescript-advanced-guide/13.md',
        '/typescript-advanced-guide/14.md',
        '/typescript-advanced-guide/15.md',
        '/typescript-advanced-guide/16.md',
        '/typescript-advanced-guide/17.md'
      ]
    }
  ]
}
