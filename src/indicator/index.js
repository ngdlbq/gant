import Indicator from './src/index.js';




/* istanbul ignore next */
Indicator.install = function(Vue) {
	Vue.$indicator = Vue.prototype.$indicator = Indicator;
};

export default Indicator;


