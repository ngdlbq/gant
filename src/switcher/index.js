import Switcher from './src/index.vue';

/* istanbul ignore next */
Switcher.install = function(Vue) {
  Vue.component(Switcher.name, Switcher);
};

export default Switcher;
