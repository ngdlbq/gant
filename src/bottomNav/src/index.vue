<template>
  <nav class="gant-bottom-nav" :style="{zIndex}">
    <slot></slot>
  </nav>
</template>
<script>
// let cacheNav = [];
export default {
  name: 'BottomNav',
  model: {
    prop: 'activeName',
    event: 'input'
  },
  props: {
    zIndex: {
      type: [String, Number],
      default: 99
    },
    activeName: {
      type: [String, Number],
      default: 0
    },
    activeColor: {
      type: String,
      default: '#1A1A1A'
    }
  },
  data () {
    return {
    };
  },
  computed: {},
  watch: {
    activeName(val, oldVal) {
      if (val === oldVal) return;
      this.updateNav();
    }
  },
  methods: {
    updateNav() {
      const {activeName} = this;
      const items = this.getItems();
      items.forEach((item, index) => {
        item.$itemName = item.name || index;
        item.active = item.$itemName === activeName;
      });
    },
    getItems() {
      // if (cacheNav.length) return cacheNav;
      // const r = this.$children.filter(i => i.$options.name === 'BottomNavItem') || [];
      // cacheNav = cacheNav.concat(r);
      // return cacheNav;

      return this.$children.filter(i => i.$options.name === 'BottomNavItem') || [];
    },
    change(name) {
      this.$emit('input', name);
      this.$emit('change', name);
    }
  },
  mounted() {
    this.updateNav();
  }
}
</script>
<style lang="less" scoped>
.gant-bottom-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  font-size: 10px;
  color: #858585;
}
</style>