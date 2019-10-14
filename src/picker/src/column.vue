<template>
  <div class="gant-picker_wrapper">
    <swiper :options="swiperOption" :style="contentStyle" class="gant-picker_content" ref="swiper">
      <swiper-slide v-for="item in curData" :key="item.value" :style="itemStyle">
        <slot>
          <div>{{item.label}}</div>          
        </slot>
      </swiper-slide>
    </swiper>
    <div class="gant-picker_active" :style="itemStyle"></div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
const INIT_CONFIG = {
  direction : 'vertical',
  centeredSlides : true,
  slideToClickedSlide: true,
  slidesPerView: 'auto'
};
export default {
  name: 'Column',
  components: {swiper, swiperSlide},
  props: {
    initialSlide: {
      type: [String, Number],
      default: 0
    },
    $dataList: Array
  },
  data () {
    const self = this;
    const {initialSlide} = this;
    return {
      activeIndex: initialSlide,
      swiperOption: {
        ...INIT_CONFIG,
        on: {
          slideChange: function () {
            self.slideChange(this.activeIndex);
          }
        }
      }
    };
  },
  computed: {
    columnIndex() {
      return +this.$attrs['col-id'];
    },
    swiper() {
      return this.$refs.swiper.swiper;
    },
    // 此处可能存在风险
    // data() {
    //   return this.$attrs['data'];
    // },
    curData() {
      const {columnIndex, $dataList: data} = this;
      if (columnIndex === 0) return data;
      let colData = data[this.$parent.$parent.seleced[0] || 0].children || [];
      for(let i = 1; i < columnIndex; i ++) {
        const index = this.$parent.$parent.seleced[i] || 0;
        colData = colData[index];
        colData = colData.children || [];
      }
      return colData || [];
    },
    contentStyle() {
      const {itemHeight, visibleItemCount} = this.$parent.$parent;
      const height = itemHeight * visibleItemCount;
      return {
        height: `${height}px`,
        lineHeight: `${itemHeight}px`
      };
    },
    itemStyle() {
      const {itemHeight} = this.$parent.$parent;
      return {
        height: `${itemHeight}px !important`,
        lineHeight: `${itemHeight}px`
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setSlider(this.initialSlide);
    })
  },
  methods: {
    setSlider(index = 0) {
      this.activeIndex = index;
      this.swiper.slideTo(index, 200, false);
    },
    slideChange(index) {
      this.activeIndex = index;
      const {columnIndex: column} = this;
      this.$emit('change', {column, index});
    }
  }
}
</script>
<style lang="less" scoped>
.gant-picker_wrapper {
  position: relative;
  width: 0;
  flex: 1;
}
.gant-picker_content {
  position: relative;
  height: 38px * 5;
  line-height: 38px;
  font-size: 16px;
  color: #666666;
}
.gant-picker_mask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4));
  background-repeat: no-repeat;
  background-position: top, bottom;
  backface-visibility: hidden;
  pointer-events: none;
  background-size: 100% 72px;
}
.gant-picker_active {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 38px;
  transform: translateY(-50% - 4px);
  background: #F6F6F6;
  &::after {
    content: '';
    display: block;
    height: 100%;
    background:
    linear-gradient(#E0E0E0 50%, transparent 50%) top / 100% 1px no-repeat,
    linear-gradient(0, #E0E0E0 50%, transparent 50%) bottom / 100% 1px no-repeat;
  }
}
.swiper-slide {
  height: 38px !important;
  line-height: 38px;
  font-size: 16px;
}
.swiper-slide-active{
  color: rgb(12, 11, 11);
}
</style>