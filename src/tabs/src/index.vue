<template>
  <div class="gant-tabs">
    <nav :class="['gt-tabs_nav']" :style="sticky ? stickyStyle : {}">
      <div class="gt-tabs_item" :class="{active: activePane === item.name}" @click="change(item)" v-for="(item, index) in navList" :key="index">
        <span>{{item.label}}</span>
      </div>
    </nav>
    <div class="gant-tab_content">
      <slot></slot>
    </div>
  </div> 
</template>
<script>
export default {
  name: 'Tabs',
  model: {
    prop: 'activeName',
    event: 'input'
  },
  props: {
    activeName: {
      type: [String, Number],
      default: 0
    },
    cache: Boolean,
    sticky: Boolean,
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      navList: [],
      activePane: this.activeName
    };
  },
  computed: {
    stickyStyle() {
      return {
        position: 'sticky',
        top: this.offsetTop
      };
    }
  },
  methods: {
    resetNavList(paneName, label) {
      const pane = this.navList.find(i => i.name === paneName);
      pane && (pane.label = label)
    },
    change({name, label}) {
      if (name === this.activePane) return;
      this.activePane = name;
      this.$emit('input', name);
      this.$emit('change', name, label);
    },
    getTabs() {
      const tabs = this.$children.filter(i => i.$options.name === 'Pane') || [];
      tabs.forEach((pane, index) => pane.index = index);
      return tabs;
    },
    updateNav() {
      const {navList} = this;
      this.getTabs().forEach(pane => {
        if (!navList.filter(i => i.name === pane.paneName).length) {
          navList.push({
            label: pane.label,
            name: pane.paneName
          });
        }
      });
    }
  }
}
</script>
<style lang="less" scoped>
.gt-tabs_nav {
  display: flex;
  align-items: center;
  height: 40px;
  z-index: 1;
  background: #fff;
  color: #666666;
  font-size: 14px;
}
.gt-tabs_item {
  position: relative;
  flex: 1;
  width: 0;
  line-height: 40px;
  padding: 0 5px;
  text-align: center;
  span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &.active {
    font-size: 16px;
    color: #1A1A1A;
    font-weight: bold;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: url(~assets/img/active.png) center no-repeat;
      background-size: contain;
    }
  }
}
.gant-tab_content {
  margin-top: 10px;
  background: #fff;
  // margin-left: 15px;
  // width: 345px;
}
</style>