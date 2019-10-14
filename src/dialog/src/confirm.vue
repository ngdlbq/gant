
<style scoped lang="less">
.main-container-mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0, 0.6);
    z-index: 10002222;
    display: flex;
    align-items: center;
    justify-content: center;
    .content{
        border-radius: 4px;
        background: #fff;
        width: 270px;
        animation: confirm-zoom 0.3s;
    }
    .top{
        font-size: 14px;
        padding: 0 15px;
        color: #333;
        height: 76px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .bottom{
        height: 48px;
        // border-top: .5PX solid #d8d8d8;
        position: relative;
        display: flex;
        &::after{
            content: '';
            height: 1PX;
            background: #D8D8D8;
            transform: scaleY(.5);
            transform-origin: left top;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
        }
        .left{
            line-height: 48px;
            text-align: center;
            width: 50%;
            height: 100%;
            box-sizing: border-box;
            position: relative;
            font-size: 18px;
            &::after{
                content: '';
                width: 1PX;
                background: #D8D8D8;
                transform: scaleX(.5);
                transform-origin: left bottom;
                position: absolute;
                bottom: 0;
                top: 0;
                right: 0;
            }

        }
        .right{
            line-height: 48px;
            text-align: center;
            width: 50%;
            height: 100%;
            font-size: 18px;
            font-weight: 500;
        }
    }
}
.fade-enter-active, .fade-leave-active{
    transition: all .25s ease-in-out;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
@keyframes confirm-zoom {
    0% {transform: scale(0);}
    100% {transform: scale(1);}
}
</style>
<template>
    <transition name="fade">
        <div class="main-container-mask"   @touchmove="scroll($event)"  v-show="showFlag">
            <div class="content">
                <div class="top">
                    <div v-html="message"></div>
                </div>
                <div class="bottom">
                    <div class="left" @click="cancel" :style='{color: cancelColor}'>{{cancelBtnText}}</div>
                    <div class="right" @click="confirm" :style='{color: confirmColor}'>{{confirmBtnText}}</div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
	export default {
		data() {
			return {
                showFlag: false
			};
		},
        props: {
			message: String,
            confirmBtnText: {
                type: String,
                default: '确定'
            },
            confirmColor: {
                type: String,
                default: '#1A1A1A'
            },
            cancelBtnText: {
                type: String,
                default: '取消'
            },
            cancelColor: {
                type: String,
                default: '#999999'
            }
        },
		methods: {
			scroll(e) {
				e.preventDefault()
			},
			show(cb) {
				this.showFlag = true;
				typeof cb === 'function' && cb.call(this, this);
				return new Promise((resolve, reject) => {
					this.$reject = reject;
					this.$resolve = resolve;
				});
			},
			cancel() {
				this.$reject('cancel');
				this.hide();
			},
			confirm() {
				this.$resolve('confirm');
				this.hide();
			},
			hide() {
				this.showFlag = false;
				document.body.removeChild(this.$el);
				this.$destroy();
			}
		}
	};
</script>


