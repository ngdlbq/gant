import Field from './src/index.vue';

/* istanbul ignore next */
Field.install = function(Vue) {
  Vue.component(Field.name, Field);
};

export default Field;
