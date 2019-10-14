<template>
  <div class="gant-infinite-scroll"> 
    <slot></slot>
    <div class="gant-detector" ref="detector"></div>
    <Loading v-show="loading"></Loading>
    <p class="gant-bottom" v-if="showFinishedText">{{finishedText}}</p>
  </div>
</template>
<script>
import Loading from '../../loading/index.js';
import {getScrollContainer, throttle, isHidden} from '../utils.js';
export default {
  name: 'InfiniteScroll',
  components: {Loading},
  model: {
    prop: 'loading',
    event: 'input'
  },
  props: {
    loading: Boolean,
    finished: Boolean,
    empty: Boolean,
    finishedText: {
      type: String,
      default: '已显示全部内容'
    },
    offset: {
      type: Number,
      default: 200
    }
  },
  data () {
    return {
    };
  },
  computed: {
    showFinishedText() {
      const {empty, finished} = this;
      return finished && !empty;
    },
    scrollHandle() {
      return throttle(this.check);
    }
  },
  mounted() {
    this.cache();
    this.binding();
    this.$nextTick(this.check);
  },
  watch: {
    loading() {
      this.$nextTick(this.check);
    },
    finished() {
      this.$nextTick(this.check);
    }
  },
  destroyed() {
    const {$scrollContainer, scrollHandle} = this;
    if ($scrollContainer) {
      $scrollContainer.removeEventListener('scroll', scrollHandle);
    }
  },
  methods: {
    cache() {
      this.$scrollContainer = getScrollContainer(this.$el);
      this.$detector = this.$refs.detector;
    },
    binding() {
      this.$scrollContainer.addEventListener('scroll', this.scrollHandle, false);
    },
    check() {
      if (this.loading || this.finished) return;
      if (isHidden(this.$el)) return;

      const {$detector, $scrollContainer, offset} = this;
      const detectorRect = $detector.getBoundingClientRect();

      let scrollContainerReReact;
      if ($scrollContainer.getBoundingClientRect) {
        scrollContainerReReact = $scrollContainer.getBoundingClientRect();
      } else {
        scrollContainerReReact = {bottom: innerHeight};
      }

      const isReachEdge = detectorRect.bottom - scrollContainerReReact.bottom <= offset;
      if (isReachEdge) {
        this.$emit('input', true);
        this.$emit('load');
      }
    }
  }
}
</script>
<style lang="less" scoped>
.gant-detector {
  height: 0;
}
.gant-bottom {
  padding: 10px 0;
  text-align: center;
  color: #999999;
  letter-spacing: 0;
}
</style>