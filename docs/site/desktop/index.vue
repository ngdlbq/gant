<template>
  <div class="gant-page">
    <header class="header">
      GANT INTRODUCE
      <a class="code-source" target="_blank" href="http://gitlab.ops.yangege.cn/fe-gnpm/gant"></a>
    </header>
    <el-row>
      <el-col :span="4" class="col-wrapper"><Aside></Aside></el-col>
      <el-col :span="13" class="col-wrapper comp-content">
        <router-view/>
      </el-col>
      <el-col :span="7" class="col-wrapper">
        <div class="simulator-result">
          <iframe :src="src" frameborder="0" class="ifrmame"></iframe>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Aside from './Aside'
const {pathname, origin} = location

export default {
  components: {Aside},
  data() {
    return {
      src: ''
    }
  },
  watch: {
    '$route'(to) {
      this.toggle(to.path)
    }
  },
  methods: {
    toggle(path) {
      this.src = `${origin}${pathname}mobile.html#${path}`
    }
  },
  mounted() {
    this.toggle(this.$route.path)
  }
}
</script>
<style scoped lang="less">
.gant-page {
  height: 100vh;
  background-color: #f0f3f6;
}
.header {
  display: flex;
  align-items: center;
	line-height: 60px;
  background-color: #001938;
  color: #fff;
  font-size: 20px;
  text-indent: 20px;
  &::before {
    content: '';
    width: 40px;
    height: 40px;
    margin: 0 20px 0 10px;
    background: url(../../assets/img/avatar.png) no-repeat;
    background-size: contain;
  }
}

.code-source {
  width: 30px;
  height: 30px;
  margin-left: 76vw;
  transition: all .2s ease;
  background: url(../../assets/img/gitlab.png) no-repeat;
  background-size: contain;
  &:hover {
    cursor: pointer;
    transform: scale(1.3);
  }
}


.col-wrapper {
  overflow: scroll;
  height: calc(100vh - 60px);
}
.comp-content {
  box-sizing: border-box;
  padding: 20px;
}
.simulator-result {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  width: 375px;
  height: 667px;
  background: #fff;
  box-shadow: 0 8px 12px #ebedf0;
}
.ifrmame {
  width: 100%;
  height: 100%;
}

</style>