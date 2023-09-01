import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from "valaxy-addon-waline";
import { addonLightGallery } from 'valaxy-addon-lightgallery';


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
      title: ['Lomori','的','无','聊','小','站'],
      cloud: {
        enable: true,
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
        icon: 'mdi:clipboard-minus-outline',
        color: 'rgb(115, 54, 212)',
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
})
