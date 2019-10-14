<template>
  <p class="gant-loading" :style="{color}">
    <svg id="load" x="0px" y="0px" viewBox="0 0 150 150" :style="loadingStyle">
      <circle id="loading-inner" :style="{stroke: color}" cx="75" cy="75" r="60"/>
    </svg>
    <i v-if="showText" :style="textStyle">&nbsp;{{text}}</i>
  </p>
</template>
<script>
export default {
  name: 'Loading',
  props: {
    size: [Number, String],
    textSize: [Number, String],
    color: String,
    text: {
      type: String,
      default: '加载中...'
    }
  },
  data () {
    return {
    };
  },
  computed: {
    showText() {
      return !!this.text;
    },
    textStyle() {
      const {textSize: fontSize} = this;
      return fontSize ? {fontSize: `${fontSize}px`} : {};
    },
    loadingStyle() {
      const {size: width} = this;
      return width ? {width: `${width}px`} : {};
    }
  }
}
</script>
<style lang="less" scoped>
@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loading-circle {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -600;
  }
}
.gant-loading {
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  text-align: center;
  color: #999999;
  letter-spacing: 0;
}
#load {
  width: 25px;
  animation: loading 3s linear infinite;
}
#loading-inner {
  stroke: #999999;
  stroke-width: 8px;
  stroke-dashoffset: 0;
  stroke-dasharray: 300;
  stroke-miterlimit: 10;
  stroke-linecap: round;
  animation: loading-circle 2s linear infinite;
  fill: transparent;
}
</style>