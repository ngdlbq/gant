<template>
  <section :class="['gant-switch', value ? 'gant-switch_on' : 'gant-switch_off', disabled ? 'gant-switch_disabled' : null]" :style="value ? onColor : offColor" @click="toggle">
    <span class="gant-switch_node"></span>
  </section>
</template>
<script>
export default {
  name: 'Switcher',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: Boolean,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String
  },
  computed: {
    onColor() {
      const {activeColor} = this;
      if (!activeColor) return {};
      return {
          backgroundColor: activeColor,
          borderColor: activeColor
      };
    },
    offColor() {
      const {inactiveColor} = this;
      if (!inactiveColor) return {};
      return {
        backgroundColor: inactiveColor
      };
    }
  },  
  data () {
    return {
    };
  },
  methods: {
    toggle() {
      if (this.disabled) return
      this.$emit('input', !this.value);
      this.$emit('change', !this.value);
    }
  }
}
</script>
<style lang="less" scoped>
.gant-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 30px;
  border: 1px solid #E0E0E0;
  border-radius: 25px;
  background-color: #fff;
  transition: all .3s ease;
}
.gant-switch_node {
  position: absolute;
  left: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);
  transition: all .3s ease;
}
.gant-switch_on {
  background-color: red;
  border-color: red;
  .gant-switch_node {
    left: 100%;
    transform: translateX(-100%);
  }
}
.gant-switch_disabled {
  opacity: .5;
}
</style>