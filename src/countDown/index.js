import CountDown from './src/index.vue';

/* istanbul ignore next */
CountDown.install = function(Vue) {
  Vue.component(CountDown.name, CountDown);
};

export default CountDown;
