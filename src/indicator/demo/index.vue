<template>
  <div>
    <section>
      <p class="mobile-demo-title">基础用法</p>
      <button @click="open" class="mobile-demo-btn">open</button>
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
    open() {
      this.$indicator.open();
      setTimeout(() => {
        this.$indicator.close();        
      }, 2000);
    }
  }
}
</script>
<style lang="less">
</style>