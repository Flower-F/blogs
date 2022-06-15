import { NavbarConfig } from 'vuepress'

// const navbar: NavbarConfig = [
  // {
  //   text: '性能优化',
  //   link: '/performance/'
  // },
  // {
  //   text: '监控',
  //   link: '/monitor/'
  // }
// ]

const navbar: NavbarConfig = [
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
      }
    ]
  }
]

export default navbar
