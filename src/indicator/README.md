# Indicator

### 引入
``` javascript
import { Indicator } from '@lib/gant';

Vue.use(Indicator)
```

## 代码演示

### 基础用法

```html
<button @click="open">open</button>
```

```javascript
export default {
  data () {
    return {
    
    };
  },
  methods: {
    open() {
      this.$indicator.open();
    },
    close() {
      this.$indicator.close();
    }
  }
}
```

## API
### Options
| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| text | indicator text | `string` | `-`|
| spinnerType | spinner type | 'snake', 'fading-circle', 'double-bounce', 'triple-bounce' | 'snake' |