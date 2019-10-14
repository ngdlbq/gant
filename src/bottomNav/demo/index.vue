<template>
  <BottomNav v-model="active" @change="change">
    <BottomNavItem v-for="(item, index) in navItems" :name="item.name" :info="item.info" :key="index" :icon="item.icon" :activeIcon="item.activeIcon">
      {{item.text}}
    </BottomNavItem>
  </BottomNav>
</template>
<script>
const navItems = [
  {
    name: 'shop',
    icon: require('assets/img/test.png'),
    activeIcon: require('assets/img/test2.png'),
    text: '商城'
  },
  {
    name: 'member',
    info: 2,
    icon: require('assets/img/test-p1.png'),
    activeIcon: require('assets/img/test-p2.png'), 
    text: '会员'
  },
  {
    name: 'cart',
    icon: require('assets/img/test-p1.png'),
    activeIcon: require('assets/img/test-p2.png'), 
    text: '购物车'
  },
  {
    name: 'personal',
    icon: require('assets/img/test-p1.png'),
    activeIcon: require('assets/img/test-p2.png'), 
    text: '个人中心'
  }
];
export default {
  data () {
    return {
      active: 'cart'
    };
  },
  computed: {
    navItems() {
      return navItems;
    }
  },
  methods: {
    change(name) {
      this.$toast(name + '');
    }
  }
}
</script>
<style lang="less">
</style>
