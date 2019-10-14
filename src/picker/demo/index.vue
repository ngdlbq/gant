<template>
  <div>
    <section>
      <p class="mobile-demo-title">通用选择器</p>
      <Picker title="选择借多久" v-model="show1" :data="areas" :columns="2" @cancel="cancel" @confirm="confirm"></Picker>
      <button @click="show1 = true" class="mobile-demo-btn">通用选择器</button>
    </section>

    <section>
      <p class="mobile-demo-title">给定默认值</p>
      <Picker title="选择借多久" v-model="show2" :defaultActive="[2, 22]" :data="areas" :columns="2" @cancel="cancel" @confirm="confirm"></Picker>
      <button @click="show2 = true" class="mobile-demo-btn">给定默认值</button>
    </section>
  </div>

</template>
<script>
const areas = [
  {
    value: 1, label: '1',
    children: [
      {value: 11, label: '11'}
    ]
  },
  {
    value: 2, label: '2',
    children: [
      {value: 22, label: '22'}
    ]
  },
  {
    value: 3, label: '3',
    children: [
      {value: 33, label: '33'}
    ]
  }
];
export default {
  data () {
    return {
      show1: false,
      show2: false
    };
  },
  computed: {
    areas() {
      return areas;
    }
  },
  methods: {
    cancel() {
      this.show1 = false;
      this.show2 = false;
    },
    confirm(items) {
      this.show1 = false;
      this.show2 = false;
      this.$toast(JSON.stringify(items))
    }
  }
}
</script>
<style lang="less" scoped>
</style>