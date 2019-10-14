import PopUp from './src/index.vue';

/* istanbul ignore next */
PopUp.install = function(Vue) {
  Vue.component(PopUp.name, PopUp);
};

export default PopUp;
