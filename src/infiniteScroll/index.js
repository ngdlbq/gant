import InfiniteScroll from './src/index.vue';

/* istanbul ignore next */
InfiniteScroll.install = function(Vue) {
  Vue.component(InfiniteScroll.name, InfiniteScroll);
};

export default InfiniteScroll;
