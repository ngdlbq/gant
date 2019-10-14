# Switcher 开发

### 引入
``` javascript
import { Switcher } from '@lib/gant';

Vue.use(Switcher)
```

## 代码演示

### 基础用法

```html
<Switcher v-model="status1" @change="change"></Switcher>
```

```javascript
export default {
  data () {
    return {
      status1: true,
      status2: true,
      status3: true
    };
  },
  methods: {
    change(v) {
      console.log('status', v);
    }
  }
}
```

### 禁用状态

```html
<Switcher disabled v-model="status1" @change="change"></Switcher>
```

### 自定义颜色

```html
<Switcher v-model="status1" @change="change"
  activeColor="blue" inactiveColor="green">
</Switcher>
```


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 开关选中状态 | `boolean` | `false` |
| disabled | 是否为禁用状态		 | `boolean` | `false` |
| active-color | 打开时的背景色	 | `string` | `#f00` |
| inactive-color | 关闭时的背景色	 | `string` | `#fff` |


### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 开关状态切换回调 | checked: 是否选中开关 |
