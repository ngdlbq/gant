<template>
  <Tabs v-model="activeName" sticky>
    <Pane label="标签一">
      <InfiniteScroll v-model="loading" @load="load" :finished="finished" :empty="empty">
        <div class="item" v-for="index in count" :key="index">{{index}}</div>
        <div v-if="empty">
          <p>暂时没有相关记录，快去申请试用商品吧～</p>
        </div>
      </InfiniteScroll>
    </Pane>
    <Pane label="标签二">
      2
    </Pane>
  </Tabs>
</template>
<script>
let timer = null;
export default {
  data () {
    return {
      activeName: 0,
      count: 0,
      loading: false,
      finished: false,
      empty: false
    };
  },
  created() {
  },
  mounted() {
  },
  computed: {},
  methods: {
    loadMore() {
      this.count += 20;
      this.loading = false;
      if (this.count >= 100) {
        this.finished = true;
      }
    },
    load() {
      timer = setTimeout(() => {
        this.count += 20;
        this.loading = false;
        if (this.count >= 100) {
          this.finished = true;
          clearTimeout(timer);
        }
      }, 1000);
    }
  }
}
</script>
<style lang="less" scoped>
.item {
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #eee;
}
</style>