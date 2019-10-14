<template>
  <div>
    <section>
      <p class="mobile-demo-title">基础用法</p>
      <Area title="地址选择" :data="areaData1" v-model="showPicker1" @cancel="cancel" @confirm="confirm" />
      <button @click="showPicker1 = true" class="mobile-demo-btn">地址选择器</button>
    </section>
    <section>
      <p class="mobile-demo-title">展示省市</p>
      <Area title="我是标题" :data="areaData2" v-model="showPicker2" @cancel="cancel" @confirm="confirm" />
      <button @click="showPicker2 = true" class="mobile-demo-btn">地址选择器</button>
    </section>
  </div>
</template>
<script>
import areaData from './areaData.js';
export default {
  data () {
    return {
      showPicker1: false,
      showPicker2: false
    };
  },
  computed: {
    areaData1() {
      return areaData.areaInfo
    },
    areaData2() {
      const {provsData, citysData} = areaData.areaInfo
      return {provsData, citysData}
    },
  },
  methods: {
    cancel() {
      this.showPicker1 = false;
      this.showPicker2 = false;
      this.$toast('取消');
    },
    confirm(items) {
      this.showPicker1 = false;
      this.showPicker2 = false;
      this.$toast(JSON.stringify(items))
    }
  }
}
</script>
<style lang="less">
</style>