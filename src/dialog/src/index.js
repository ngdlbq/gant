import Vue from 'vue';
import Confirm from './confirm.vue';
import Alert from './alert.vue';

let newInstance = {};
const ConfirmInstance = Vue.extend(Confirm);
const AlertInstance = Vue.extend(Alert);

const initInstance = type => {
  newInstance[type] = type === 'alert' ? new AlertInstance() : new ConfirmInstance();
	document.body.appendChild(newInstance[type].$mount().$el);
}

const create = (options, type) => {
	if (!newInstance[type]) {
		initInstance(type);
	}
	Object.assign(newInstance[type], options);

	return newInstance[type].show(() => {
		newInstance = {};
	}).then(confirm => {
		return Promise.resolve(confirm);
	}).catch(cancel => {
		return Promise.reject(cancel)
	})
}

export default {
  alert(options) {
    return create(options, 'alert');
  },
  confirm(options) {
    return create(options, 'confirm');
	}
}

