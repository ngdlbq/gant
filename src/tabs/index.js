import Tabs from './src/index.vue';

/* istanbul ignore next */
Tabs.install = function(Vue) {
  Vue.component(Tabs.name, Tabs);
};

export default Tabs;
