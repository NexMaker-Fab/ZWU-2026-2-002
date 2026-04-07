import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ZWU-2026-2-002/',
  title: '我的 Fab Academy 作业',
  description: '每周作业记录',
  themeConfig: {
    sidebar: [
      { text: 'Home', link: '/' },
      {
        text: 'Assignments',
        items: [
          { text: 'Week 1', link: '/assignments/week1' },
          { text: 'Week 2', link: '/assignments/week2' },
          { text: 'Week 3', link: '/assignments/week3' },
          { text: 'Week 4', link: '/assignments/week4' },
          { text: 'Week 5', link: '/assignments/week5' },
          { text: 'Week 6', link: '/assignments/week6' },
          { text: 'Week 7', link: '/assignments/week7' },
          { text: 'Week 8', link: '/assignments/week8' },
          { text: 'Week 9', link: '/assignments/week9' },
          { text: 'Week 10', link: '/assignments/week10' }
        ]
      },
      { text: 'Final Project', link: '/final-project' },
      { text: 'About', link: '/about' }
    ]
  }
})