<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'
// import particles from './particles.js/particles.vue'
// import './particles.js/particles'
// import './particles.js/app'

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
// useScriptTag('/particles.js/particles.js')
// useScriptTag('/particles.js/app.js')


</script>




<template>
    <!-- <script src = ./particles.js/particles.js></script>
    <script src = ./particles.js/app.js></script> -->
    <YunFooter>
        <!-- 自定义页脚内容 -->
        <div>本站总访问量 <span id="busuanzi_value_site_pv" /> 次</div>
        <div>本站访客数 <span id="busuanzi_value_site_uv" /> 人次</div>
    </YunFooter>
    <view>
        <!-- <particles></particles> -->
    </view>
    <!-- <div id="particles-js"></div> -->
</template>
