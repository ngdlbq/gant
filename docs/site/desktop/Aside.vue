<template>
  <aside class="aside">
    <el-menu :default-active="defaultActive" router>
      <el-menu-item v-for="(item, index) in list" :key="index" :index="item.path">
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
    </el-menu>
  </aside>
</template>
<script>
import comps from '../config'
export default {
  data () {
    return {
      defaultActive: ''
    };
  },
  computed: {
    list() {
      comps.unshift({
        path: '/',
        title: '开发指南'
      })
      return comps
    }
  },
  mounted() {
    const path = this.$route.path
    const route = this.list.find(i => i.path === path) || {}
    this.defaultActive = route.path
  }
}
</script>
<style scoped>
.aside {
  height: 100%;
  overflow-y: scroll;
  background-color: #f9fafb;
}
</style>