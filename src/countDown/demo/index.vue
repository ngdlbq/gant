<template>
  <div>
    <section>
      <p class="mobile-demo-title">基础用法（自动开始倒计时）</p>
      <CountDown :time="time" @finish="finish" autoStart></CountDown>
    </section>
    <section>
      <p class="mobile-demo-title">基础用法</p>
      <CountDown :time="time" @finish="finish"></CountDown>
    </section>
    <section>
      <p class="mobile-demo-title">自定义样式</p>
      <CountDown :time="time" @finish="finish" autoStart>
        <template v-slot="{timeData}">
          <span>{{timeData.hours}}时</span>
          <span>{{timeData.minutes}}分</span>
          <span>{{timeData.seconds}}秒</span>
        </template>
      </CountDown>
    </section>
  </div>


</template>
<script>
export default {
  data () {
    return {
      time: 1000 * 1000
    };
  },
  methods: {
    finish() {
      this.$toast('finish');
    }
  }
}
</script>
<style lang="less" scoped>
span {
  display: inline-flex;
  padding: 10px 20px;
  background-color: #409EFF;
  color: #fff;
}
</style>