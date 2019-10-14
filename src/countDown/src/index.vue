<template>
  <p class="gant-count-down">
    <slot :timeData="timeData">{{count}}</slot>
  </p>
</template>
<script>
import {getDuration, formateTime} from '../utils.js';
export default {
  name: 'CountDown',
  props: {
    time: [String, Number],
    autoStart: Boolean,
    formate: {
      type: String,
      default: 'HH:mm:ss'
    }
  },
  data() {
    return {
      $interval: null,
      leftMillSec: this.time
    };
  },
  watch: {
    time(val) {
      this.clear();
      this.leftMillSec = val;
      this.autoStart && this.start();
    }
  },
  computed: {
    count() {
      const {leftMillSec, formate} = this;
      if (leftMillSec < 0) {
        this.$emit('finish');
        this.clear();
        return;
      }
      return formateTime(formate, this.timeData);
    },
    timeData() {
      // {days, hours, minutes, seconds}
      return getDuration(this.leftMillSec);
    }
  },
  destroyed() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this.$interval);
    },
    start() {
      this.$interval = setInterval(() => {
        this.leftMillSec -= 1000;
      }, 1000);
    }
  },
  mounted() {
    this.clear();
    this.autoStart && this.start();
  }
};
</script>
<style lang="less" scoped>
.gant-count-down {}
</style>
