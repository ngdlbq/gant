<style lang="less" scoped>
    .gant-toast {
        position: fixed;
        z-index: 999999;
        background: rgba(0, 0, 0, 0.6957);
        border-radius: 4px;
        padding: 11px 42px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        .gant-toast-text {
            display: block;
            text-align: center;
            font-size: 16px;
            font-family: PingFangSC;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 22px;
        }
        .gant-toast-icon{
            display: flex;
            justify-content: center;
            img{
                width: 36PX;
                height: 36PX;
            }

        }

    }

    .gant-toast-pop-enter, .gant-toast-pop-leave-active {
        opacity: 0
    }
</style>
<template>
    <transition name="gant-toast-pop">
        <div class="gant-toast" v-show="visible" :class="className" :style="{ 'padding': iconClass === '' ? '10px' : '17px' }">
            <i class="gant-toast-icon" :class="iconClass" v-if="iconClass !== ''">
                <img src="~assets/img/toast_right.png" v-if="iconClass === 'right'" alt="" :style="{'width': `${imgWidth !== 36 ? imgWidth: 36}PX`,'height': `${imgHeight !== 36 ? imgHeight: 36}PX`}">
            </i>
            <i class="gant-toast-icon"  v-if="iconImg !== ''" v-html="iconImg">
            </i>
            <span class="gant-toast-text" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{ message}}</span>
        </div>
    </transition>
</template>


<script type="text/babel">
	export default {
		props: {
			message: String,
			className: {
				type: String,
				default: ''
			},
			iconClass: {
				type: String,
				default: ''
			},
			iconImg: {
				type: String,
				default: ''
			},
			imgWidth: {
                type: Number,
                default: 36
			},
			imgHeight: {
				type: Number,
				default: 36
			}
		},
		data() {
			return {
				visible: false
			};
		},
		created() {

		},
		computed: {}
	};
</script>