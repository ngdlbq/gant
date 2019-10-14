<template>
  <PopUp v-model="isShow" position="bottom">
    <section class="gant-action-sheet">
      <header class="gant-as_header" v-if="showTitle">
        <slot name="header">{{title}}</slot>
        <span v-if="cancel" class="cancel-icon" @click="hide"></span>
      </header>
      <ul class="gant-as_content">
        <slot>
          <li class="gang-as_item" @click="select(index, item)" v-for="(item, index) in actions" :key="index">{{item}}</li>
        </slot>
      </ul>
      <footer @click="cancelHandle" v-if="showCancelItem" class="gant-as_cancel">{{cancelText}}</footer>
    </section>
  </PopUp>
</template>
<script>
import PopUp from '../../popUp/index';
export default {
  name: 'ActionSheet',
  components: {PopUp},
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: Boolean,
    title: String,
    cancelText: String,
    cancel: Boolean,
    actions: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isShow: this.value
    };
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
    showTitle() {
      return !!this.title;
    },
    showCancelItem() {
      return !!this.cancelText;
    }
  },
  methods: {
    hide() {
      this.$emit('input', false);      
    },
    select(index, item) {
      this.hide();
      this.$emit('select', index, item);
    },
    cancelHandle() {
      this.hide();
      this.$emit('cancel');
    }
  }
}
</script>
<style lang="less" scoped>
.gant-action-sheet {
  margin-bottom: constant(safe-area-inset-bottom);
  background-color: #fff;
}
.gant-as_header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0 15px;
  font-size: 18px;
  color: #333333;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(0deg, #eee 50%, transparent 50%);
  }
}
.cancel-icon {
  position: absolute;
  top: 14px;
  right: 15px;
  width: 22px; 
  height: 22px;
  background-image: url('~assets/img/cancel.png');
  background-size: contain;
}

.gang-as_item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  font-size: 16px;
  &::after {
    content: '';
    height: 1px;
    background-image: linear-gradient(0deg, #eee 50%, transparent 50%);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &:last-child {
    &::after {
      height: 0;
    }
  }
}

.gant-as_cancel {
  line-height: 56px;
  font-size: 16px;
  text-align: center;
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 11px;
    background-color: #F6F6F6;
  } 
}
</style>