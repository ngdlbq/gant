# Stepper 计数器

### 引入
``` javascript
import { Stepper } from '@lib/gant';

Vue.use(Stepper)
```

## 代码演示

### 基础用法

```html
<Stepper :min="1" :max="5" 
  v-model="count1" @change="change" 
  @top="toTop" @bottom="toBottom">
</Stepper>    
```

```javascript
export default {
  data () {
    return {
      count1: 1,
      count2: 3
    };
  },
  methods: {
    change(v) {
      // console.log('change', v);
    },
    toTop(v) {
      this.$toast(`最多只能买${v}个`)
    },
    toBottom(v) {
      this.$toast(`最少只能买${v}个`)
    }
  }
}
```

### 禁用

```html
<Stepper disabled :min="1" :max="5" 
  v-model="count2" @change="change" 
  @top="toTop" @bottom="toBottom">
</Stepper>    
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 当前输入值	 | `number` | `-` |
| min | 最小值	 | `number` | `1` |
| max | 最大值 | `number` | `-` |
| disabled | 是否禁用计数器 | `boolean` | `false` |


### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
| top | 当绑定值到最大值时触发的事件	 | max |
| bottom | 当绑定值到最小值时触发的事件	 | min |