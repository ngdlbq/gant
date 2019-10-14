# Tabs 标签页

### 引入
``` javascript
import { Tabs, Pane } from '@lib/gant';

Vue.use(Tabs).use(Pane)
```

## 代码演示

### 基础用法

```html
<Tabs v-model="activeName" sticky @change="change">
  <Pane label="标签一">1</Pane>
  <Pane label="标签二">2</Pane>
  <Pane label="标签三">3</Pane>
  <Pane label="标签四">4</Pane>
</Tabs>
```

```javascript
export default {
  data () {
    return {
      activeName: 2
    };
  },
  methods: {
    change(name, label) {
      console.log(name, label);
    }
  }
}
```

### 缓存曝光过的标签页内容

```html
<Tabs v-model="activeName" cache sticky @change="change">
  <Pane label="标签一">1</Pane>
  <Pane label="标签二">2</Pane>
  <Pane label="标签三">3</Pane>
  <Pane label="标签四">4</Pane>
</Tabs>
```

### 通过名称匹配

```html
<Tabs v-model="activeName" cache sticky @change="change">
  <Pane name="one" label="标签一">1</Pane>
  <Pane name="two" label="标签二">2</Pane>
  <Pane name="three" label="标签三">3</Pane>
  <Pane name="four" label="标签四">4</Pane>
</Tabs>
```


## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 绑定当前选中标签的标识符 | `string | number` | `0` |
| cache | 是否缓存曝光过的标签页内容 | `boolean` | `false` |
| sticky | 是否使用粘性定位布局	 | `boolean` | `false` |
| offset-top | 粘性定位布局下与顶部的最小距离，单位 px	 | `number` | `0` |


### Tabs Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 开关状态切换回调 | checked: 是否选中开关 |


### Pane Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 标签名称，作为匹配的标识符 | `string | number` | `-` |
| label | 标题 | `string` | `-` |
