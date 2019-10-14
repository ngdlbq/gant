<template>
  <div>
    <section>
      <p class="mobile-demo-title">基础用法</p>
      <ActionSheet v-model="show1" @select="onSelect" :actions="actions" title="标题" />
      <button @click="show1 = true" class="mobile-demo-btn">上拉菜单</button>
    </section>

    <section>
      <p class="mobile-demo-title">展示取消按钮</p>
      <ActionSheet v-model="show2" @select="onSelect" :actions="actions" title="标题" cancel @cancel="cancel" cancel-text="取消" />
      <button @click="show2 = true" class="mobile-demo-btn">上拉菜单</button>
    </section>

    <section>
      <p class="mobile-demo-title">自定义内容</p>
      <ActionSheet v-model="show3" title="自定义标题">
        <img src="https://img.gegejia.com/img/9e21e376fbbb5882915fff698fc8c87b.jpg" alt="">
      </ActionSheet>
      <button @click="show3 = true" class="mobile-demo-btn">上拉菜单</button>
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
  computed: {
    actions() {
      return ['选项1', '选项2', '选项3', '选项4'];
    }
  },
  methods: {
    onSelect(index, item) {
      this.$toast(`index: ${index}, item: ${item}`);
    },
    cancel() {
      this.$toast('cancel');
    }
  }
}
</script>
<style lang="less">
</style>