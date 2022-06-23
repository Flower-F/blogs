import { NavbarConfig } from 'vuepress'

export const navbar: NavbarConfig = [
  {
    text: '知识干货',
    children: [
      {
        text: '性能优化',
        link: '/performance/'
      },
      {
        text: '监控',
        link: '/monitor/'
      }
    ]
  },
  {
    text: '读书笔记',
    children: [
      {
        text:'JavaScript 高级程序设计',
        link:'/professional-javascript/'
      },
      {
        text: 'TypeScript 全面进阶指南',
        link: '/typescript-advanced-guide/'
      }
    ]
  },
  {
    text: '杂碎笔记',
    link:'/notes/'
  }
]
