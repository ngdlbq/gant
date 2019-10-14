<template>
  <div>
    <section>
      <p class="mobile-demo-title">基础用法（选择年月日）</p>
      <DateTimePicker v-model="showPicker1" @cancel="cancel" @confirm="confirm" />
      <button @click="showPicker1 = true" class="mobile-demo-btn">日期选择</button>
    </section>

    <section>
      <p class="mobile-demo-title">指定日期范围（选择年月）</p>
      <DateTimePicker v-model="showPicker2" @cancel="cancel" @confirm="confirm"
      :startDate="new Date('2000-1-1')" :endDate="new Date()" type="year-month" />
      <button @click="showPicker2 = true" class="mobile-demo-btn">日期选择</button>
    </section>

    <section>
      <p class="mobile-demo-title">选项文案格式化</p>
      <DateTimePicker v-model="showPicker3" @cancel="cancel" @confirm="confirm"
      :startDate="new Date('2000-1-1')" :endDate="new Date()" type="year-month"
      :formatter="formatter" />
      <button @click="showPicker3 = true" class="mobile-demo-btn">日期选择</button>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showPicker1: false,
      showPicker2: false,
      showPicker3: false
    };
  },
  computed: {

  },
  methods: {
    formatter(type, value) {
      return type === 'year' ? `${value}年` : (type === 'month' ? `${value}月` : `${value}日`);
    },
    cancel() {
      this.showPicker1 = false;
      this.showPicker2 = false;
      this.showPicker3 = false;
    },
    confirm(items) {
      this.showPicker1 = false;
      this.showPicker2 = false;
      this.showPicker3 = false;
      this.$toast(JSON.stringify(items));
    }
  }
}
</script>
<style lang="less">
</style>