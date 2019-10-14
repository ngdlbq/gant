<template>
<PopUp v-model="isShow" position="bottom" round>
  <section class="gant-picker">
    <header class="gant-picker_header">
      <span class="gant-title-info" v-if="showCancel" @click="cancel">{{cancelText}}</span>
      <span class="gant-title">
        <slot>{{title}}</slot>
      </span>
      <span class="gant-title-info" v-if="showConfirm" @click="confirm">{{confirmText}}</span>
    </header>
    <div class="gant-picker_columns">
      <Column v-for="(item, index) in colLen" ref="column"
        :key="index" :col-id="index" :$dataList="data" :initialSlide="seleced[index]" @change="change" />
    
      <div class="gant-picker_mask" :style="maskStyle"></div>
    </div>
  </section>
</PopUp>
</template>
<script>
import Column from './column.vue';
import PopUp from '../../popUp/index.js';
export default {
  name: 'Picker',
  components: {PopUp, Column},
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: Boolean,
    title: String,
    data: Array,
    columns: {
      type: Number,
      default: 3
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    defaultActive: {
      type: Array,
      default: () => []
    },
    itemHeight: {
      type: Number,
      default: 37
    },
    visibleItemCount: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      isShow: this.value,
      // 只存储索引
      seleced: this.getIndex()
    };
  },
  computed: {
    colLen() { 
      return Array.from({length: this.columns}, () => 0);
    },
    showCancel() {
      return !!this.cancelText;
    },
    showConfirm() {
      return !!this.confirmText;
    },
    colComps() {
      return this.$refs['column'];
    },
    maskStyle() {
      const {itemHeight} = this;
      const height = itemHeight * 2 - 4;
      return {
        backgroundSize: `100% ${height}px`
      };
    }
  },
  watch: {
    value(val) {
      this.isShow = val;
    },
    isShow(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    change({column = 0, index = 0}) {
      this.$set(this.seleced, column, index);
      this.setColumnSlider(++column);
    },
    // 重置 index(包括index) 之后的所有列
    setColumnSlider(index = 0) {
      const {columns} = this;
      for(;index < columns; index ++) {
        this.colComps[index].setSlider();
      }
    },
    cancel() {
      this.$emit('cancel');
    },
    confirm() {
      this.$emit('confirm', this.getSelected());
    },
    slideChange(index) {
      this.activeIndex = index;
    },
    getIndex() {
      const {defaultActive} = this;
      if (!defaultActive.length) return Array.from({length: this.columns}, () => 0);

      let {data} = this;
      const res = [];
      for(let i = 0, len = defaultActive.length; i < len; i ++) {
        const item = defaultActive[i];
        data = data.filter((col, index) => {
          if (col.value === item) {
            res.push(index);
            return true;
          }
          return false;
        });
        if (!data.length) {
          throw new Error('please checkout defaultActive again');
        }
        data = data[0].children || [];
      }
      return res;
    },
    getSelected() {
      const res = [];
      let colData = this.data;
      this.seleced.forEach((item, index) => {
        if (index === 0) {
          colData = colData[item] || {};
          res.push({
            label: colData.label,
            value: colData.value
          });
        } else {
          colData = colData.children || [];
          colData = colData[item] || {};
          res.push({
            label: colData.label,
            value: colData.value
          });
        }
      });
      return res;
    }
  }
}
</script>
<style lang="less" scoped>
.gant-picker {
  width: 100%;
  text-align: center;
  background-color: #fff;
}
.gant-picker_header {
  position: relative;
  display: flex;
  line-height: 50px;
  font-size: 18px;
  color: #333333;
  border-radius: 4px 4px 0px 0px;
  background: linear-gradient(0, #E0E0E0 50%, transparent 50%) bottom / 100% 1px no-repeat;
}
.gant-title {
  flex: 1;
}
.gant-title-info {
  width: 20%;
  font-size: 14px;
  color: #1989fa;
}
.gant-picker_columns {
  position: relative;
  display: flex;
}
.gant-picker_mask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4));
  background-repeat: no-repeat;
  background-position: top, bottom;
  backface-visibility: hidden;
  pointer-events: none;
  // background-size: 100% 72px;
}
</style>