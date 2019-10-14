<template>
<div>
  <br>
  <section>
    <button @click="handle1" class="mobile-demo-btn">基础用法</button>
  </section>
  <br>
  <section>
    <button @click="handle2" class="mobile-demo-btn">自定义配置项</button>
  </section>
</div>
</template>
<script>
export default {
  data () {
    return {
    };
  },
  methods: {
    handle1() {
      this.$toast('this is toast...');
    },
    handle2() {
      this.$toast({
        message: '普通消息是',
        iconImg: '<img src="https://img.gegejia.com/img/e60f29565c6c69a4b84c46b4371a2796.gif" style="width: 50px">',
        className: 'aaa',
        imgWidth: 50,
        imgHeight: 50,
        duration: 2000
      })
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  height: 50px;
  font-size: 16px;
}
</style>