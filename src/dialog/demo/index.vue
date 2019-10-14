<template>
  <div>
    <section>
      <p class="mobile-demo-title">alert 弹框</p>
      <button @click="open1(true)" class="mobile-demo-btn">有标题</button>
      <button @click="open1(false)" class="mobile-demo-btn">无标题</button>
    </section>
    <section>
      <p class="mobile-demo-title">confirm 弹框</p>
      <button @click="open2" class="mobile-demo-btn">confirm 弹框</button>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
    };
  },
  computed: {},
  methods: {
    open1(flag) {
      this.$dialog.alert({
        title: flag ? '试用规则' : '',
        message: '领取商品后需在12天内上传试用报告，否则无法申请下份试用',
        confirmBtnText: '我知道了',
        confirmColor: '#1A1A1A'
      }).then(res => this.$toast(res))
    },
    open2() {
      this.$dialog.confirm({
        message: '<p>确定要放弃支付吗?</p>',
        confirmBtnText: '继续支付',
        cancelBtnText: '放弃支付'
      }).then(res => this.$toast(res))
        .catch(res => this.$toast(res))
    }
  }
}
</script>
<style lang="less">
</style>