# InfiniteScroll 无限加载

### 引入
``` javascript
import { InfiniteScroll } from '@lib/gant';

Vue.use(InfiniteScroll)
```

## 代码演示

### 基础用法

```html
<InfiniteScroll v-model="loading" 
  @load="load" :finished="finished" 
  :empty="empty">
  <div class="item" v-for="index in count" :key="index">{{index}}</div>
  <div v-if="empty">
    <p>暂时没有相关记录，快去申请试用商品吧～</p>
  </div>
</InfiniteScroll>
```

```javascript
export default {
  data () {
    return {
      count: 0,
      loading: false,
      finished: false,
      empty: false
    };
  },
  methods: {
    loadMore() {
      this.count += 20;
      this.loading = false;
      if (this.count >= 100) {
        this.finished = true;
      }
    },
    load() {
      timer = setTimeout(() => {
        this.count += 20;
        this.loading = false;
        if (this.count >= 100) {
          this.finished = true;
          clearTimeout(timer);
        }
      }, 1000);
    }
  }
}
```


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 是否处于加载状态，加载过程中不触发load事件 | `boolean` | `false` |
| finished | 是否已加载结束，加载完成后不再触发load事件 | `boolean` | `false` |
| empty | 是否为空 | `boolean` | `false` |
| finished-text | 加载完成后的提示文案 | `string` | `已显示全部内容` |
| offset | 滚动条与底部距离小于 offset 时触发load事件 | `number` | `200px` |


### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| load | 滚动条与底部距离小于 offset 时触发 | - |