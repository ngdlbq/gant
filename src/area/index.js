import Area from './src/index.vue';

/* istanbul ignore next */
Area.install = function(Vue) {
  Vue.component(Area.name, Area);
};

export default Area;
