<template>
  <div>
    <section>
      <p class="mobile-demo-title">基础用法</p>
      <Switcher v-model="status1" @change="change"></Switcher>
    </section>
    <section>
      <p class="mobile-demo-title">禁用状态</p>
      <Switcher v-model="status2" @change="change" disabled></Switcher>
    </section>
    <section>
      <p class="mobile-demo-title">自定义颜色</p>
      <Switcher v-model="status3" @change="change" activeColor="blue" inactive-color="green"></Switcher>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      status1: true,
      status2: true,
      status3: true
    };
  },
  computed: {},
  methods: {
    change(v) {
      console.log('status', v);
    }
  }
}
</script>