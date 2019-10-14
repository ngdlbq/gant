import BottomNav from './src/index.vue';

/* istanbul ignore next */
BottomNav.install = function(Vue) {
  Vue.component(BottomNav.name, BottomNav);
};

export default BottomNav;
