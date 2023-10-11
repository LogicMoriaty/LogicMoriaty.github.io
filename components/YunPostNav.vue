<script lang="ts" setup>
// import YunPostNav from 'valaxy-theme-yun/components/YunPostNav.vue'
// // import Sakura from './sakura.vue'
// // import particles from './particles.js/particles.vue'
// // import './particles.js/particles'
// // import './particles.js/app'
// import { useI18n } from 'vue-i18n'
// import type { Post } from 'valaxy'
// import type { StyleValue } from 'vue'
// import { usePostProperty } from 'valaxy-theme-yun/composables'
import { usePrevNext } from 'valaxy'

const [prev, next] = usePrevNext()

// const props = defineProps<{
//     post: Post
// }>()

// const { t } = useI18n()

// const { icon, styles } = usePostProperty(props.post.type)


</script>




<!-- <template>
    <YunPostNav>
        <YunCard m="y-4 auto" :class="post.cover ? 'post-card-image' : 'post-card'" :style="styles as StyleValue">
            <div class="flex flex-1 of-hidden justify-start items-start post-card-info" w="full">
                <img v-if="post.cover" :src="post.cover" :alt="t('post.cover')" width="320" height="180" w="40%" h="54"
                    class="cover object-cover object-center md:shadow">
            </div>
        </YunCard>
    </YunPostNav>
</template> -->

<template>
    <div class="post-nav">
        <div class="post-nav-item">
            <router-link v-if="prev" class="post-nav-prev" :to="prev.path || ''" :title="prev.title"
                :data-background-image="prev.cover || ''">
                <!-- <div class="blackback"></div> -->
                <img v-if="prev.cover" :src="prev.cover" class="background-image">
                <div class="icon" i-ri-arrow-left-s-line></div>
                <span class="title truncate" text="sm">
                    <h3>{{ prev.title }}</h3>

                </span>
                <!-- <h6>{{ prev.title }}</h6> -->
            </router-link>
        </div>
        <div class="post-nav-item">
            <router-link v-if="next" :to="next.path || ''" :title="next.title" class="post-nav-next"
                :data-background-image="next.cover || ''">
                <img v-if="next.cover" :src="next.cover" class="background-image">
                <span class="title truncate" text="sm">
                    <h3>{{ next.title }}</h3>
                </span>
                <!-- <h6>{{ next.title }}</h6> -->
                <!-- <div class="blackback"></div> -->
                <div class="icon" i-ri-arrow-right-s-line></div>
            </router-link>
        </div>
    </div>
</template>
  
<style lang="scss">
@use 'valaxy/client/styles/mixins/index.scss' as *;

.post-nav {
    display: flex;
    // justify-content: space-between;
    // align-items: center;
    height: 10rem;
    overflow: hidden;
    margin-top: 1rem;
    margin-bottom: 1rem;
    


    // height: 675px;
    // width: 100%;
    // position: absolute;
    // left: 0;
    // top: 0;



    &-item {
        width: 100%;
        // display: inline-flex;
        display: flex;
        // justify-content: center;
        // align-items: center;

        // color: var(--va-c-primary);

        // outline: none;
        // font-size: 1.5rem;


        // font-weight: bold;
        // text-transform: uppercase;
        // height: 10rem;
        // transition: 0.4s;
        transition: all 0.6s, filter 375ms ease-in 0.2s;

        // a {

        //     // display: flex;
        //     // flex-direction: column;
        //     // height: 100%;
        //     // color: var(--header-text-color);
        //     // padding: 1.25rem 2.5rem;
        //     // background-size: cover;
        //     // position: relative;

        //     // &:hover {
        //     //     // background-color: rgba(var(--va-c-primary-rgb), 0.1);
        //     //     box-shadow: 0 0 15px rgba(black, 0.1);
        //     //     opacity: .4;
        //     // }

        //     // background: linear-gradient(135deg, #434343, #000);
        //     // opacity: .5;

        //     // &::before {
        //     //     content: "";
        //     //     position: absolute;
        //     //     width: 100%;
        //     //     height: 100%;
        //     //     background: linear-gradient(135deg, #434343, #000);
        //     //     opacity: .1;
        //     //     // the-transition();
        //     //     z-index: -1;
        //     //     top: 0;
        //     //     left: 0;
        //     // }



        //     // &:hover {
        //     //     // background-color: rgba(var(--va-c-primary-rgb), 0.1);
        //     //     box-shadow: 0 0 15px rgba(black, 0.1);
        //     //     opacity: .4;

        //     //     &::before {
        //     //         content: "";
        //     //         position: absolute;
        //     //         width: 100%;
        //     //         height: 100%;
        //     //         background: linear-gradient(135deg, #434343, #000);
        //     //         opacity: .5;
        //     //         // the-transition();
        //     //         z-index: -1;
        //     //         top: 0;
        //     //         left: 0;
        //     //         // opacity: .4;
        //     //     }

        // }
    }

    &-prev {

        // padding: 0 0.6rem 0 0.1rem;
        justify-content: flex-start;

        // flex-wrap: wrap;
        span,
        h3 {
            // align-self: flex-start;
            display: flex;
            flex-wrap: wrap;
            align-self: center;
            font-size: large;
            font-family: 'Times New Roman', Times, sans-serif;
            font-weight: bold;
            color: aliceblue;
            // word-wrap: break-word;
            // word-break: break-all;
        }
    }

    &-next {

        // padding: 0 0.1rem 0 0.6rem;
        justify-content: flex-end;

        span,
        h3 {
            // align-self: flex-end;
            display: flex;
            align-self: center;
            text-align: right;
            font-size: large;
            font-family: 'Times New Roman', Times, sans-serif;
            font-weight: bold;
            color: aliceblue;
        }
    }

    &-prev,
    &-next {
        display: inline-flex;
        align-items: center;
        overflow: hidden;

        background: rgb(0, 0, 0);
        z-index: 10;





        // height: 3rem;

        // font-size: 1rem;

        .title {
            overflow: hidden;
            max-width: 15rem;
            position: absolute;
            /*绝对布局*/
            z-index: 1;
            /*置于上层*/
            // display: flex;
            flex-direction: column;
            // height: 100%;
            // // color: var(--header-text-color);
            // padding: 1.25rem 2.5rem;
            background-size: cover;
            // // position: relative;
            // flex: 1;
            // overflow: hidden;
            // word-wrap: break-word;
            // word-break: break-all;
            // border-right: 1px solid #323232;
            // font-size: 12px;
            // display: flex;
            // align-items: center;
            // justify-content: center;
            

        }

        .icon {
            width: 1.2rem;
            height: 1.2rem;
            // width: 12rem;
            // height: 12rem;
        }

        .background-image {
            // overflow: hidden;
            // height: 20rem;
            position: relative;
            /*相对布局*/
            z-index: -1;
            /*置于底层*/
            opacity: 0.4;
            transition: all 0.6s, filter 375ms ease-in 0.2s;

            &:hover {
                // background-color: rgba(var(--va-c-primary-rgb), 0.1);
                box-shadow: 0 0 15px rgba(black, 0.1);
                opacity: 0.8;
                transform: scale(1.1);

            }



            // &::before {
            //     // content: "";
            //     position: relative;
            //     // width: 100%;
            //     // height: 100%;
            //     background: linear-gradient(135deg, #434343, #000);
            //     opacity: .5;
            //     // the-transition();
            //     // z-index: 100;
            //     // top: 0;
            //     // left: 0;
            // }

            // &:hover {
            //     // background-color: rgba(var(--va-c-primary-rgb), 0.1);
            //     box-shadow: 0 0 15px rgba(black, 0.1);

            // //     &::before {
            // //         opacity: .4;
            // //     }
            // }

        }

        .blackback {
            background: rgb(0, 0, 0);
            // height: 675px;
            // width: 100%;
            position: absolute;
            // left: 0;
            // top: 0;
            z-index: 10;
        }
    }
}

@include desktop {
    .post-nav {

        &-prev,
        &-next {
            .title {
                max-width: 28rem;
            }
        }
    }
}

@include mobile {
    .post-nav {
        flex-direction: column;
        height: 20rem;
        overflow: hidden;
        margin-top: 1rem;
        margin-bottom: 1rem;

        &-prev,
        &-next {
            .title {
                max-width: 28rem;
            }
        }
    }
}
</style>
  