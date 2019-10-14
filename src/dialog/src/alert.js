

import Vue from 'vue';
import Alert from './alert.vue';

let newInstance;
const AlertInstance = Vue.extend(Alert);

const initInstance = () => {
	newInstance = new AlertInstance();
	document.body.appendChild(newInstance.$mount().$el);
}

export default options => {
	if (!newInstance) {
		initInstance();
	}
	Object.assign(newInstance, options);

	return newInstance.show(() => {
		newInstance = null;
	}).then(confirm => {
		return Promise.resolve(confirm);
	}).catch(cancel => {
		return Promise.reject(cancel)
	})
}
