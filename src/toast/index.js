import Toast from './src/toast.js';




/* istanbul ignore next */
Toast.install = function(Vue) {
	Vue.$toast = Vue.prototype.$toast = Toast;
};

export default Toast;


