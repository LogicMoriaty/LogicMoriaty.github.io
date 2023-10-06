<script>
import * as particles from './particles'
import particlesJson from './particlesjs-config.json'

export default {
    name: 'particles',
    mounted() {
        // particles是我们设置的id，particlesJson是我们引入的json文件
        particlesJS('particles', particlesJson,);
    },
    // data() {
	// 		return {
				
	// 		};
	// 	}
}
</script>


<template>
    <!-- <div id="particles"></div> -->
    <view>
		<view id="particles"></view>
	</view>
</template>


<!-- 
<div id="particles-js"></div>
<style type="./demo/css/style.css"></style>

<script src="./particles">

</script> -->