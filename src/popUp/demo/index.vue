<template>
  <div>
    <section>
      <p class="mobile-demo-title">通用弹框</p>
      <PopUp v-model="show1" round>
        <p style="padding: 20px">hei, i'm here</p>
      </PopUp>
      <button @click="show1 = true" class="mobile-demo-btn">通用弹框</button>
    </section>
    <section>
      <p class="mobile-demo-title">弹出位置</p>
      <PopUp v-model="show2" round position="top">
        <p style="padding: 20px">hei, i'm here</p>
      </PopUp>
      <button @click="show2 = true" class="mobile-demo-btn">顶部弹出</button>
    </section>
    <section>
      <p class="mobile-demo-title">弹出位置</p>
      <PopUp v-model="show3" round position="bottom">
        <p style="padding: 20px">hei, i'm here</p>
      </PopUp>
      <button @click="show3 = true" class="mobile-demo-btn">底部弹出</button>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show1: false,
      show2: false,
      show3: false
    };
  },
  computed: {},
  methods: {
  }
}
</script>
<style lang="less">
</style>