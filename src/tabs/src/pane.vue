<template>
  <div class="gant-pane" v-if="shouldRender" v-show="show">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Pane',
  props: ['name', 'label'],
  data () {
    return {
      loaded: false,
      index: null
    };
  },
  computed: {
    shouldRender() {
      const {cache, loaded, show} = this;
      return (cache && loaded) || show;
    },
    cache() {
      return this.$parent.cache;
    },
    activePane() {
      return this.$parent.activePane;
    },
    show() {
      const r = (this.name === this.activePane || this.index === this.activePane);
       r && this.hasLoaded();
      return r;
    },
    paneName() {
      return this.name || this.index;
    }
  },
  watch: {
    label(val, oldVal) {
      if (val === oldVal) return;
      this.$parent.resetNavList(this.paneName, val);
    }
  },
  methods: {
    hasLoaded() {
      this.loaded = true;
    },
    updateNav() {
      this.$parent.updateNav();
    }
  },
  mounted() {
    this.updateNav();
  }
}
</script>
<style lang="less" scoped>
  .gant-pane {
    position: relative;
  }
</style>