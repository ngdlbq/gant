# Picker 选择器

### 引入
``` javascript
import { Picker } from '@lib/gant';

Vue.use(Picker);
```

## 代码演示

### 基础用法

```html
<Picker title="选择借多久" v-model="show" 
  :data="pickerData" :columns="2" 
  @cancel="cancel" @confirm="confirm">
</Picker>
```

```javascript
const pickerData = [
  {
    value: 1, 
    label: '我是1',
    children: [
      {value: 11, label: '我是11'}
    ]
  },
  {
    value: 2, 
    label: '我是2',
    children: [
      {value: 22, label: '我是22'}
    ]
  },
  {
    value: 3, 
    label: '我是3',
    children: [
      {value: 33, label: '我是33'}
    ]
  }
];
export default {
  data () {
    return {
      show: false
    };
  },
  computed: {
    pickerData() {
      return pickerData;
    }
  },
  methods: {
    cancel() {
      this.show = false;
    },
    confirm(items) {
      this.show = false;
      this.$toast(JSON.stringify(items))
    }
  }
}
```

### 给定默认值

```html
<Picker title="选择借多久" v-model="show" 
  :defaultActive="[2, 22]" :data="pickerData" 
  :columns="2" @cancel="cancel" 
  @confirm="confirm">
</Picker>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 显示隐藏 | `boolean` | `false` |
| title | 标题 | `string` | - |
| data | 数据，格式见上方 | `array` | - |
| columns | 显示的列数 | `number` | `3` |
| confirmText | 确定按钮文字 | `string` | `确认` |
| cancelText | 取消按钮文字 | `string` | `取消` |
| defaultActive | 默认选项 | `array` | `[]` |
| itemHeight | 选项高度 | `number` | `37px` |
| visibleItemCount | 可见的选项个数 | `number` | `5` |


### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| confirm | 确定时的回调 | 一个数组参数，具体格式看下方数据格式章节 |
| cancel | 取消时的回调 | - |



### 点击完成时返回的数据格式

confirm 回调事件入参为一个数组，数组内包含 columns 个数据，每个数据对应一列选项中被选中的数据, 具体格式如下：
```javascript
[
  {
    value: 1,
    label: '我是1'
  },
  {
    value: 11,
    label: '我是11'
  }
]
```



