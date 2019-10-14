<template>
  <transition name="jant-popup">
    <div class="jant-popup" :class="`jant-popup_${position}`" v-show="value" @click.self="hide">
      <transition :name="`popup-${position}`">
        <section class="jant-popup_wrapper" :class="[roundClass]" v-if="loaded || value" v-show="value">
          <slot>
            <div class="jant-popup_content">hei, i'm here</div>
          </slot>
        </section>
      </transition>
  </div>
  </transition>
</template>
<script>
const BODY = document.body;
const to = scrollTop =>{
	document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
};
const getScrollTop = () => {
	return document.body.scrollTop || document.documentElement.scrollTop;
};
const roundMap = {
  top: 'jant-popup_bround',
  center: 'jant-popup_cround',
  bottom: 'jant-popup_tround'
};
export default {
  name: 'PopUp',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    position: {
      type: String, 
      default: 'center'
    },
    value: Boolean,
    round: Boolean,
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      scrollTop: 0,
      loaded: false
    };
  },
  watch: {
		value(val) {
			if (!val) {
				BODY.classList.remove('has-scroll');
				to(this.scrollTop);
				return;
			}
			this.scrollTop = getScrollTop();
			BODY.classList.add('has-scroll');
      document.body.style.top = `-${this.scrollTop}px`;

      this.loaded = true;
		}
  },
  computed: {
    roundClass() {
      const {round} = this;
      if (!round) return '';
      return roundMap[this.position];
    }
  },
  methods: {
    hide() {
      this.closeOnClickOverlay && this.$emit('input', false);
    }
  }
}
</script>
<style lang="less" scoped>
.jant-popup-enter-active {
  transition: opacity .2s;
}
.jant-popup-leave-active {
  transition: opacity .5s;
}
.jant-popup-enter, .jant-popup-leave-to {
  opacity: 0;
}
.popup-bottom-enter-active, .popup-bottom-leave-active {
  transition: all .5s ease;
}
.popup-bottom-enter, .popup-bottom-leave-to {
  transform: translate3d(0, 120%, 0);
}
.popup-top-enter-active, .popup-top-leave-active {
  transition: all .5s ease;
}
.popup-top-enter, .popup-top-leave-to {
  transform: translate3d(0, -120%, 0);
}
.popup-center-enter-active, .popup-center-leave-active {
  transition: all .5s ease;
}
.popup-center-enter, .popup-center-leave-to {
  opacity: 0;
}

.jant-popup {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 999999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
}
.jant-popup_wrapper {
  // height: 240px;
  // width: 270px;
  background: #fff;
}
.jant-popup_bround {
  border-radius:0 0 4px 4px;
}
.jant-popup_cround {
  border-radius: 4px;
}
.jant-popup_tround {
  border-radius: 4px 4px 0 0;
}

.jant-popup_bottom {
  align-items: flex-end;
  .jant-popup_wrapper {
    width: 100%;
  }
}
.jant-popup_top {
  align-items: flex-start;
  .jant-popup_wrapper {
    width: 100%;
  }
}
.jant-popup_content {
  width: 100px;
  height: 100px;
}
</style>
<style lang="less">
body.has-scroll {
	position: fixed;
	width: 100%;
}
</style>