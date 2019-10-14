
<template>
  <section class="gant-stepper" >
    <i :class="['gant-minus', minusDisabled ? 'disabled' : '']" @click="minusHandler">-</i>
    <span class="gant-stepper_content">{{value}}</span>
    <i :class="['gant-plus', plusDisabled ? 'disabled' : '']" @click="plusHandler">+</i>
  </section>
</template>
<script>
export default {
  name: 'Stepper',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: Number,
    min: {
      type: Number,
      default: 1
    },
    max: Number,
    disabled: Boolean
  },
  data () {
    return {
    }
  },
  computed: {
    minusDisabled() {
      if (this.disabled) return true;
      const {value, min} = this;
      return value <= min;
    },
    plusDisabled() {
      if (this.disabled) return true;
      const {value, max} = this;
      if (!max) return false;
      return value >= max;
    }
  },
  methods: {
    minusHandler () {
      if (this.disabled) return;
      const {value, min} = this;
      if (value <= min) {
        this.$emit('bottom', value);
        return;
      }
      this.$emit('input', value - 1);
      this.$emit('change', value - 1);
    },
    plusHandler () {
      if (this.disabled) return;
      const {value, max} = this;
      if (value >= max) {
        this.$emit('top', value);
        return;
      }
      this.$emit('input', value + 1);
      this.$emit('change', value + 1);
    }
  }
}
</script>
<style lang="less" scoped>
.gant-stepper {
  display: inline-flex;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  text-align: center;
  font-size: 0;
  height: 34px;
}
.gant-stepper i {
  width: 32px;
  line-height: 32px;
  font-size: 20px;
}

.gant-stepper_content {
  line-height: 33px;
  width: 40px;
  background: #fff;
  color: #000;
  border: none;
  text-align: center;
  font-size:14px;
}
.gant-minus {
  border-right: 1px solid #d9d9d9;
}
.gant-plus {
  border-left: 1px solid #d9d9d9;
}
.gant-stepper .disabled {
  color: #858585;
}
</style>
