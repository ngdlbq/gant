<template>
  <PopUp v-model="isShow" position="bottom" round>
    <section class="gant-area">
      <header class="gant-area_header">
        <span class="gant-title-info" v-if="showCancel" @click="cancel">{{cancelText}}</span>
        <span class="gant-title">
          <slot>{{title}}</slot>
        </span>
        <span class="gant-title-info" v-if="showConfirm" @click="confirm">{{confirmText}}</span>
      </header>
      <div class="gant-area_columns">
        <Column v-for="(col, index) in dataList" ref="column"
          :key="index" :col-id="index" :$list="col.data" :value="col.value" @change="change" />
      
        <div class="gant-area_mask" :style="maskStyle"></div>
      </div>
    </section>
  </PopUp>
</template>
<script>
import PopUp from '../../popUp/index.js';
import Column from './item.vue';
export default {
  name: 'Area',
  components: {PopUp, Column},
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: Boolean,
    data: Object,
    title: String,
    confirmText: {
      type: String,
      default: '确认'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    itemHeight: {
      type: Number,
      default: 37
    },
    visibleItemCount: {
      type: Number,
      default: 7
    }
  },
  data () {
    return {
      isShow: this.value,
      // 只存储每列选中的索引
      selected: []
    };
  },
  created() {
    this.initSelected();
  },
  watch: {
    value(val) {
      this.isShow = val;
    },
    isShow(val) {
      this.$emit('input', val)
    }
  },
  computed: {
    colComps() {
      return this.$refs['column'];
    },
    dataKeys() {
      return Object.keys(this.data);
    },
    // [[], {}, {}]
    dataMap() {
      const {data} = this;
      return Object.keys(data).map(i => {
        return data[i];
      });
    },
    dataList() {
      let preCode;
      const {selected, dataMap} = this;
      return selected.map((value, index) => {
        const data = index === 0 ? dataMap[index] : dataMap[index][preCode];
        preCode = data[value].code;
        return {value, data};
      });
    },
    showCancel() {
      return !!this.cancelText;
    },
    showConfirm() {
      return !!this.confirmText;
    },
    maskStyle() {
      const {itemHeight} = this;
      const height = itemHeight * 2;
      return {
        backgroundSize: `100% ${height}px`
      };
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    confirm() {
      this.$emit('confirm', this.getSelected());
    },
    change({column = 0, index = 0}) {
      this.$set(this.selected, column, index);
      this.setColumnSlider(++column);
    },
    // 重置 index(包括index) 之后的所有列
    setColumnSlider(index = 0) {
      const len = this.dataKeys.length;
      for(;index < len; index ++) {
        this.colComps[index].setSlider();
      }
    },
    initSelected() {
      this.selected = Array.from({length: this.dataKeys.length}, () => 0);
    },
    getSelected() {
      const {selected, dataList} = this;
      return selected.map((value, index) => {
        return dataList[index]['data'][value];
      });
    }
  }
}
</script>
<style lang="less" scoped>
.gant-area {
  width: 100%;
  text-align: center;
  background-color: #fff;
}
.gant-area_header {
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
.gant-area_columns {
  position: relative;
  display: flex;
}
.gant-area_mask {
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