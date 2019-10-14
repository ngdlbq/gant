<style lang="less" scoped>
    /*.gant-indicator {*/
        /*position: fixed;*/
        /*background: rgba(0, 0, 0, 1);*/
        /*border-radius: 4px;*/
        /*opacity: 0.6957;*/
        /*padding: 12px 20px;*/
        /*left: 50%;*/
        /*top: 50%;*/
        /*transform: translate(-50%, -50%);*/
        /*.gant-toast-text {*/
            /*display: block;*/
            /*text-align: center;*/
            /*font-size: 16px;*/
            /*font-family: PingFangSC;*/
            /*font-weight: 400;*/
            /*color: rgba(255, 255, 255, 1);*/
            /*line-height: 22px;*/
        /*}*/
        /*.gant-toast-icon {*/
            /*display: flex;*/
            /*justify-content: center;*/

            /*img {*/
                /*width: 36PX;*/
                /*height: 36PX;*/
            /*}*/
        /*}*/
    /*}*/




    .gant-indicator{

        .gant-indicator-mask{
            width: 100%;
            height: 100vh;
            background-color: transparent;
            position: fixed;
            left: 0;
            top: 0;
            z-index: 999999;
        }
        .gant-indicator-wrapper{
            position: fixed;
            background: rgba(0, 0, 0, 1);
            border-radius: 8px;
            opacity: 0.6957;
            padding: 12px 20px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            min-height: 90px;
            min-width: 90px;
            box-sizing: border-box;
            .gant-indicator-text {
                display: block;
                text-align: center;
                font-size: 16px;
                font-family: PingFangSC;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                line-height: 22px;
                margin-top: 16px;
            }
        }
    }




    .gant-indicator-enter-active, .gant-indicator-leave-active{
        transition: all .25s ease-in-out;
    }
    .gant-indicator-enter,
    .gant-indicator-leave-active {
        opacity: 0;
    }
</style>
<template>
    <transition name="gant-indicator">
        <div class="gant-indicator" v-show="visible">
            <div class="gant-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
                <lottie :options="defaultOptions" :height="14" :width="52"/>
                <span class="gant-indicator-text" v-show="text">{{ text }}</span>
            </div>
            <div class="gant-indicator-mask" @touchmove.stop.prevent></div>
        </div>
    </transition>
</template>


<script type="text/babel">
	import Lottie from 'vue-lottie'
	import * as animationData from '../../../assets/loading/loadingwhite.json'
	export default {
		data() {
			return {
				visible: false,
				defaultOptions: { animationData: animationData }
			};
		},
		components: {
			Lottie
		},
		props: {
			text: {
				type: String,
				default: ''
			}
		}
	};
</script>
