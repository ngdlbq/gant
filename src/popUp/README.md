# PopUp 弹出层

### 引入
``` javascript
import { PopUp } from '@lib/gant';

Vue.use(PopUp)
```

## 代码演示

### 基础用法（中间弹出）

```html
<PopUp v-model="show" round>
  <p>hei, i'm here</p>
</PopUp>
```

```javascript
export default {
  data () {
    return {
      show: false
    };
  }
}
```

### 弹出位置（顶部弹出）

```html
<PopUp v-model="show" position="top" round>
  <p>hei, i'm here</p>
</PopUp>
```

### 弹出位置（底部弹出）

```html
<PopUp v-model="show1" position="bottom" round>
  <p>hei, i'm here</p>
</PopUp>
```


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 显示隐藏 | `boolean` | `false` |
| position | 弹出位置，可选值为 top、center、bottom | `string` | `center` |
| round | 是否显示圆角 | `boolean` | `false` |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | `boolean` | `false` |

### Slots

| 插槽名称 | 说明 |
|------|------|
| default | 自定义内容 |