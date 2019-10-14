import Vue from 'vue';
import toast from './toast.vue'
const ToastConstructor = Vue.extend(toast);
const toastPool = [];

const getAnInstance = ()=> {
	if (toastPool.length > 0) {
		const instance = toastPool[0];
		toastPool.splice(0, 1);
		return instance;
	}
	return new ToastConstructor({
		el: document.createElement('div')
	});
};

const returnAnInstance = instance=> {
	if (instance) {
		toastPool.push(instance);
	}
};

const removeDom = event=> {
	if (event.target.parentNode) {
		event.target.parentNode.removeChild(event.target);
	}
};

ToastConstructor.prototype.close = function () {
	this.visible = false;
	this.$el.addEventListener('transitionend', removeDom);
	this.closed = true;
	returnAnInstance(this);
};

const Toast = (options = {})=> {
	const duration = options.duration || 3000

	const instance = getAnInstance();
	instance.closed = false;
	clearTimeout(instance.timer);
	instance.message = typeof options === 'string' ? options : options.message;
	instance.className = options.className || '';
	instance.iconClass = options.iconClass || '';
	instance.iconImg = options.iconImg || '';
	instance.imgWidth = options.imgWidth || '';
	instance.imgHeight = options.imgHeight || '';

	document.body.appendChild(instance.$el);
	Vue.nextTick(function () {
		instance.visible = true;
		instance.$el.removeEventListener('transitionend', removeDom);
		~duration && (instance.timer = setTimeout(function () {
			if (instance.closed) return;
			instance.close();
		}, duration));
	});
	return instance;
};

export default Toast;
