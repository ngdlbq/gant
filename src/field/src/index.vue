<template>
  <section class="gant-field">
    <div class="gant-field_wrapper">
      <slot name="label">
        <span class="gant-field_label" v-if="label">{{label}}</span>
      </slot>
      <div class="gant-field_content">
        <slot name="input">
          <input v-if="maxlength" :disabled="disabled" :maxlength="maxlength" :type="type" @change="onChange" ref="input" :value="value" :placeholder="placeholder">
          <input v-else :type="type" :disabled="disabled" @change="onChange" ref="input" :value="value" :placeholder="placeholder">
        </slot>
      </div>
      <slot></slot>
    </div>
  </section>
</template>
<script>
import Validate from '../utils.js'
export default {
  name: 'Field',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: [String, Number],
    label: [String, Number],
    placeholder: [String, Number],
    required: Boolean,
    valid: Boolean,
    disabled: Boolean
  },
  data () {
    return {
    };
  },
  computed: {
    type() {
      return this.$attrs.type || 'text'
    },
    maxlength() {
      return +this.$attrs.maxlength
    }
  },
  methods: {
    validate() {
      const {type, value} = this
      Validate[type] && this.$emit('update:valid', Validate[type](value))
    },
    onChange(e) {
      const value = e.target.value
      const v = value.trim()
      this.$emit('input', v)
      if (this.required && !v) {
        this.$emit('update:valid', false)
      } else {
        this.validate()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.gant-field {
  position: relative;
  background-color: #fff;
  padding: 0 15px;
}
.gant-field_wrapper {
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 0;
  // overflow: hidden;
  color: #1a1a1a;
  font-size: 15px;
  line-height: 21px;
}
.gant-field_label {
  width: 78px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.gant-field_content {
  flex: 1;
  // padding-right: 22px;
}
input {
  font-size: 14px;
  color: #1a1a1a;
  line-height: 20px;
  width: 100%;
  height: 100%;
}
</style>