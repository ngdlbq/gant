<template>
<div>
  <section>
    <p class="mobile-demo-title">基础用法</p>
    <Stepper :min="1" :max="5" v-model="count1" @change="change" @top="toTop" @bottom="toBottom"></Stepper>    
  </section>
  <section>
    <p class="mobile-demo-title">禁用</p>
    <Stepper disabled :min="1" :max="5" v-model="count2" @change="change" @top="toTop" @bottom="toBottom"></Stepper>    
  </section>
</div>

</template>
<script>
export default {
  data () {
    return {
      count1: 1,
      count2: 3
    };
  },
  methods: {
    toTop(v) {
      this.$toast(`最多只能买${v}个`)
    },
    toBottom(v) {
      this.$toast(`最少只能买${v}个`)
    }
  }
}
</script>
<style lang="less">
</style>