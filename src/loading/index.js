import Loading from './src/index.vue';

/* istanbul ignore next */
Loading.install = function(Vue) {
  Vue.component(Loading.name, Loading);
};

export default Loading;
