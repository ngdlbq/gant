import DateTimePicker from './src/index.vue';

/* istanbul ignore next */
DateTimePicker.install = function(Vue) {
  Vue.component(DateTimePicker.name, DateTimePicker);
};

export default DateTimePicker;
