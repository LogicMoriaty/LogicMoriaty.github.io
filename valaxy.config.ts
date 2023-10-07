import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from "valaxy-addon-waline";
import { addonLightGallery } from 'valaxy-addon-lightgallery';
import { addonComponents } from 'valaxy-addon-components';
// import particlesJS from 'particles.js'
// import app from './app.js'



// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: ['Lomori','的','秘','密','小','站'],
      cloud: {
        enable: true,
      },
    },

    // 主题颜色
    colors: {
      primary: "#141dce", 
    },

    // 鼠标点击特效
    fireworks: {
      enable: true,
      //colors: ['#fef7f1', '#fed1d8', '#bdd8d6']
    },

    // 网页背景
    bg_image: {
      enable: true,
      url: "https://cdn.jsdelivr.net/gh/LogicMoriaty/source/day/107236405_p2.webp",	// 白日模式背景
      dark: "https://cdn.jsdelivr.net/gh/LogicMoriaty/source/night/112094960_p0_master1200.webp",	// 夜间模式背景
    //   这个是透明度
      opacity: 0.6,
    },

    // 首页中二语句（嘿嘿，这个是搬运另一个博主的）
    say: {
      enable: true,
      api: "https://el-bot-api.vercel.app/api/words/young",
      hitokoto: {
        enable: true,
        api: "https://v1.hitokoto.cn/?c=k&c=d&c=i",
      },
    },

    pages: [
      /* {
        name: '我的小伙伴们',
        url: '/links/',
        //icon: 'i-ri-genderless-line',
        icon:'ci:users',
        color: 'dodgerblue',
      }, */
      {
        name: '留言板',
        url: '/comments/',
        icon: 'i-ri-clipboard-line',
        color: '#4321ee',
      },
      {
        name: '相册',
        url: '/albums/',
        icon: 'i-ri-gallery-line',
        color: '#43abee',
      },
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-open-arm-line',
        color: '#4bbea4',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2023,
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
    },

  },

  unocss: { safelist },
  // 评论插件功能，插件想要对应添加
  addons: [
  
    addonWaline({
      comment: true,
      pageview: true,
      serverURL: "https://comment.logicmoriaty.top",		// Waline服务链接
      locale: {
        placeholder: "填写qq邮箱或点击登录，可以展示个人头像",
      },
      emoji: [
        "https://jsd.onmicrosoft.cn/gh/walinejs/emojis@latest/bmoji/",
        "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/weibo/",
        "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/qq/",
        "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/tieba/",
      ],
    }),
    // 注意注意，这个是相册功能
    addonLightGallery(),
    addonComponents(),
    // app(),
  ],


})
