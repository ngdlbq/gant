# DateTimePicker 时间选择

### 引入
``` javascript
import { DateTimePicker } from '@lib/gant';

Vue.use(DateTimePicker)
```

## 代码演示

### 基础用法（选择年月日）

```html
<DateTimePicker v-model="showPicker" @cancel="cancel" @confirm="confirm" />
```

```javascript
export default {
  data () {
    return {
      showPicker: false      
    };
  },
  methods: {
    cancel() {
      this.showPicker = false;
    },
    confirm(items) {
      this.showPicker = false;
      console.log('确认', items);
    }
  }
}
```

### 指定日期范围（选择年月）

```html
<DateTimePicker v-model="showPicker2" type="year-month"
  @confirm="confirm" @cancel="cancel"
  :startDate="new Date('2000-1-1')" :endDate="new Date()" />
```

### 选项文案格式化
```html
<DateTimePicker v-model="showPicker2" type="year-month"
  @confirm="confirm" @cancel="cancel" :formatter="formatter"
  :startDate="new Date('2000-1-1')" :endDate="new Date()" />
```

```javascript
export default {
  data () {
    return {
      showPicker: false      
    };
  },
  methods: {
    cancel() {
      this.showPicker = false;
    },
    confirm(items) {
      this.showPicker = false;
      console.log('确认', items);
    },
    formatter(type, value) {
      return type === 'year' ? `${value}年` : 
        (type === 'month' ? `${value}月` : `${value}日`);
    }
  }
}
```


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 显示隐藏	 | `boolean` | `false` |
| type | 类型，目前仅支持date、year-month | `string` | `date` |
| title | 标题	 | `string` | `日期选择` |
| startDate | 日期的最小可选值 | `Date` | `1980年1月1日` |
| endDate | 日期的最大可选值 | `Date` | `今天` |
| formatter | 选项格式化函数 | `(type, value) => value` | `-` |



### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| confirm | 确定时的回调 | 一个数组参数 |
| cancel | 取消时的回调	| - |
日期选择器是基于 Picker 选择器封装，所以事件回调参数同 Picker 选择器