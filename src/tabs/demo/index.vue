<template>
<div>
  <section>
    <p class="mobile-demo-title">基础用法</p>
    <Tabs v-model="activeName" sticky @change="change">
      <Pane label="标签一"><div class="content">标签一</div></Pane>
      <Pane label="标签二"><div class="content">标签二</div></Pane>
      <Pane label="标签三"><div class="content">标签三</div></Pane>
      <Pane label="标签四"><div class="content">标签四</div></Pane>
    </Tabs>
  </section>
  <br>
  <section>
    <p class="mobile-demo-title">缓存曝光过的标签页内容</p>
    <Tabs v-model="activeName" cache sticky @change="change">
      <Pane label="标签一"><div class="content">标签一</div></Pane>
      <Pane label="标签二"><div class="content">标签二</div></Pane>
      <Pane label="标签三"><div class="content">标签三</div></Pane>
      <Pane label="标签四"><div class="content">标签四</div></Pane>
    </Tabs>
  </section>
  <br>
  <section> 
    <p class="mobile-demo-title">通过名称匹配</p>
    <Tabs v-model="activeName1" cache sticky @change="change">
      <Pane name="one" label="标签一"><div class="content">标签一</div></Pane>
      <Pane name="two" label="标签二"><div class="content">标签二</div></Pane>
      <Pane name="three" label="标签三"><div class="content">标签三</div></Pane>
      <Pane name="four" label="标签四"><div class="content">标签四</div></Pane>
    </Tabs>
  </section>

</div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 2,
      activeName1: 'two'
    };
  },
  computed: {},
  methods: {
    change(name, label) {
      console.log('activeName', this.activeName, name, label); 
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