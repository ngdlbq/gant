# ActionSheet 上拉菜单

### 引入
``` javascript
import { ActionSheet } from '@lib/gant';

Vue.use(ActionSheet);
```

## 代码演示

### 基础用法

```html
<ActionSheet v-model="show" @select="onSelect" 
  :actions="actions" title="标题">
</ActionSheet>
```

```javascript
export default {
  data () {
    return {
      show: false
    };
  },
  computed: {
    actions() {
      return ['选项1', '选项2', '选项3', '选项4'];
    }
  },
  methods: {
    handle() {
      this.show = true;
    },
    onSelect(index, item) {
      console.log(index, item);
    }
  }
}
```

### 展示取消按钮

```html
<ActionSheet v-model="show"  
  @select="onSelect" :actions="actions" 
  title="标题" cancel-text="取消" 
  cancel @cancel="cancel">
</ActionSheet>
```

### 自定义内容

```html
<ActionSheet v-model="show" title="自定义标题">
  <img src="https://img.gegejia.com/img/9e21e376fbbb5882915fff698fc8c87b.jpg">
</ActionSheet>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 显示隐藏 | `Boolean` | `false` |
| title | 标题 | `string` | - |
| cancel-text | 底部取消按钮文字 | `string` | - |
| cancel | 是否显示右上角的取消icon | `Boolean` | `false` |
| actions | 菜单选项 | `Array` | `[]` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| select | 选中选项时触发 | index: 选择对应的索引, item: 选项对应的对象 |
| cancel | 取消按钮点击时触发 | - |

### Slots

| 插槽名称 | 说明 |
|------|------|
| default | 自定义内容, 此时 select 事件将失效，需手动绑定 |
| header | 自定义头 |

### Action 数据结构

`Props`中的`actions`为一个字符串数组, 数组中的每一项配置每一列, 如
```javascript
['选项1', '选项2', '选项3', '选项4']
```



