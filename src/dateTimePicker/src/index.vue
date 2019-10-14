<template>
  <Picker :title="title" v-model="show" :data="dateData" :columns="columns" @cancel="cancel" @confirm="confirm"></Picker>
</template>
<script>
import Picker from '../../picker/index.js';
import {generate} from '../utils.js';

export default {
  name: 'DateTimePicker',
  components: {Picker},
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: Boolean,
    title: {
      type: String,
      default: '日期选择'
    },
    // 目前仅支持 date年月日、year-month年月、
    type: {
      type: String,
      default: 'date'
    },
    startDate: {
      type: Date,
      default: () => new Date('1980-1-1')
    },
    endDate: {
      type: Date,
      default: () => new Date()
    },
    // 选项格式化函数 (type, value) => value
    formatter: Function
  },
  data() {
    return {
      show: this.value
    };
  },
  computed: {
    columns() {
      return this.type === 'date' ? 3 : 2; 
    },
    dateData() {
      const {startDate, endDate, type, formatter} = this
      return generate(startDate, endDate, type, formatter);
    }
  },
  watch: {
    value(val) {
      this.show = val;
    },
    show(val) {
      this.$emit('input', val);
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    confirm(items) {
      this.$emit('confirm', items);
    }
  }
}
</script>
<style lang="less" scoped>
</style>