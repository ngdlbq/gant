# Toast 轻提示

### 引入

``` javascript
import { Toast } from '@lib/gant';
Vue.use(Toast)
```

## 代码演示

### 基础用法

```html
<button @click="handle1" class="mobile-demo-btn">基础用法</button>
```

```javascript
export default {
  data () {
    return {
    };
  },
  methods: {
    handle() {
      this.$toast('this is toast...');
    }
  }
}
```

### 高级用法

```html
<button @click="handle" class="mobile-demo-btn">高级用法</button>
```

```javascript
export default {
  data () {
    return {
    };
  },
  methods: {
    handle() {
      this.$toast({
        message: '普通消息是',
        iconImg: '<img src="https://img.gegejia.com/img/demo.png">',
        className: 'aaa',
        imgWidth: 50,
        imgHeight: 50,
        duration: 2000
      });
    }
  }
}
```
Toast 是个函数，引用后可直接调用。同时，也已经被挂载到 Vue 的原型上，
Vue.$toast = Vue.prototype.$toast = Toast。我们建议以 this.$toast 的方式调用。


