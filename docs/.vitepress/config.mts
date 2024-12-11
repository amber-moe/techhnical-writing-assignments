import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "2024 Zhejiang Sci-Tech University technical writing",
  description: "This site is the showcase for Zhejiang Sci-Tech University technical writing assignments in 2024.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://tech.amber-moe.io' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Xiangyang', link: '/202131202042-xiangyang' },

        ]
      },
      {
        text: 'For loop',
        collapsed: true,
        items: [
          { text: 'Sample Work', link: '/for-loop/sample-work' },
          { text: '2023221402023', link: '/for-loop/2023221402023' },
          { text: '2023221402005', link: '/for-loop/fengshuqi-2023221402005-ForLoops' },
          { text: '2023221402021', link: '/for-loop/2023221402021-wyy' },
          { text: 'Liqiumei', link: '/for-loop/Liqiumei-1' },
          { text: '2023221402022', link: '/for-loop/d' },
          { text: '2023221402024', link: '/for-loop/XuJiahui-2023221402024' },


        ]
      },
      {
        text: 'Final work',
        collapsed: true,
        items: [
          { text: 'WeChat', link: '/final/2023221402005-FengShuqi-WeChat'},
          { text: 'Adobe Photoshop Hujingwen', link: '/final/2023221402008-HuJingwen'},
          { text: 'Alibaba Cloud Disk', link: '/final/2023221402009-AlibabaCloudDisk'},
          { text: 'TikTok Wumengyi', link: '/final/2023221402022-WuMengyi'},
          { text: 'Gaode Map', link: '/final/2023221402023-Gaode'},
          { text: 'Adobe Photoshop Zhangchenran', link: '/final/2023221402025zhangchenran'},
          { text: 'TikTok Lynn', link: '/final/TikTok-by-Lynn'},
          { text: 'Damai', link: '/final/Damai'},
          { text: 'Dingtalk', link: '/final/Dingtalk'},
          { text: 'Steam', link: '/final/Hujiaxin'},
          { text: 'Obsidian', link: '/final/LiaoLiqin2023221402011'},
          { text: 'Sharing Moments on Wechat', link: '/final/Liqiumei-2'},
          { text: 'Taobao', link: '/final/Taobao-by-Aki'},
          { text: 'TikTok App User Guide', link: '/final/wangtongyao-final-tiktok'},
          { text: 'QQ', link: '/final/xiangyang-final'},
          { text: 'Microsoft Word Getting Started Guide', link: '/final/XuJiahui-final'},
          { text: 'Baidu Netdisk', link: '/final/Xunyuuuuu'},
          { text: 'PS', link: '/final/2023221402025zhangchenran'},
          { text: 'How to Use WeChat: A Brief Guide', link: '/final/ZHOUPY2023221402032'},
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})
