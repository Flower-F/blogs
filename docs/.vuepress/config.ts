import { defineUserConfig, defaultTheme } from 'vuepress';
import { head, navbar, sidebar } from './configs';

export default defineUserConfig({
  base: '/',
  head,
  lang: 'zh-CN',
  title: '我的博客',
  description: 'Flower F 的前端博客',
  theme: defaultTheme({
    logo: '/images/hero.png',
    docsDir: 'docs',
    repo: 'https://github.com/Flower-F/blogs',
    docsBranch: 'main',
    editLinkPattern: ':repo/edit/:branch/:path',
    sidebar,
    sidebarDepth: 1,
    navbar,
    selectLanguageName: '简体中文',
    selectLanguageText: '选择语言',
    selectLanguageAriaLabel: '选择语言',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    openInNewWindow: '在新窗口打开',
    toggleDarkMode: '切换夜间模式',
    toggleSidebar: '切换侧边栏'
  })
});
