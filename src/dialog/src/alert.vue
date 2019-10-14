
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
    .title {
        line-height: 22px;
        margin-bottom: 9px;
        font-size: 18px;
        text-align: center;
        font-weight: 500;
    }
    .top{
        font-size: 14px;
        padding: 25px 15px 15px;
        color: #333;
        text-align: center;
    }
    .bottom{
        position: relative;
        line-height: 48px;
        display: flex;
        justify-content: center;
        font-size: 18px;
        font-weight: 500;
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
                    <div class="title" v-if="showTitle" :style='{color: titleColor}'>{{title}}</div>
                    <div v-html="message"></div>
                </div>
                <div class="bottom" @click="confirm" :style='{color: confirmColor}'>
                    {{confirmBtnText}}
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
            title: String,
            titleColor: {
                type: String,
                default: '#1A1A1A'
            },
			message: String,
            confirmBtnText: {
                type: String,
                default: '确定'
            },
            confirmColor: {
                type: String,
                default: '#1A1A1A'
            }
        },
        computed: {
            showTitle() {
                return !!this.title
            }
        },
		methods: {
			scroll(e) {
				e.preventDefault()
			},
			show(cb) {
				this.showFlag = true;
				typeof cb === 'function' && cb.call(this, this);
				return new Promise(resolve => {
					this.$resolve = resolve;
				});
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


