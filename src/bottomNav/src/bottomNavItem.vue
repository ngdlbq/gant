<template>
  <span class="gant-bn-item" :style="{color: activeColor}" @click="change">
    <i v-if="showIcon" class="gant-item-icon" :style="iconStyle" :class="{info: hasInfo}" :data-info="info"></i>
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: 'BottomNavItem',
  props: ['name', 'icon', 'activeIcon', 'info'],
  data () {
    return {
      active: false
    };
  },
  computed: {
    hasInfo() {
      return !!(+this.info);
    },
    activeColor() {
      const {active} = this;
      return active ? this.$parent.activeColor : ''; 
    },
    iconStyle() {
      const {active, icon, activeIcon} = this;
      if (active) {
        return {
          backgroundImage: `url(${activeIcon})`,
          backgroundSize: 'contain'
        }
      }
      return {
        backgroundImage: `url(${icon})`,
        backgroundSize: 'contain'
      };
    },
    showIcon() {
      const {icon, activeIcon} = this;
      return icon && activeIcon;
    }
  },
  methods: {
    updateNav() {
      this.$parent.updateNav();
    },
    change() {
      if (this.active) return;
      this.$parent.change(this.$itemName);
    }
  },
  mounted() {
    // this.updateNav();
  }
}
</script>
<style lang="less" scoped>
.gant-bn-item {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 0;
  flex: 1;
  line-height: 1;
  padding: 0 5px;
  text-align: center;
  &.active {
    color: #1A1A1A;
  }
}
.gant-item-icon {
  position: relative;
  margin: 0 auto;
  width: 26px;
  height: 26px;
}
.info {
  &::after {
    content: attr(data-info);
    position: absolute;
    padding: 2px;
    top: 2px;
    left: 55%;
    width: 14px;
    height: 14px;
    line-height: 14px;
    font-size: 12px;
    text-align: center;
    border-radius: 50%;
    background:rgba(241,0,45,1);
    color: #fff;
  }
}
</style>