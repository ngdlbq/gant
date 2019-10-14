# BottomNav 底部导航

### 引入
``` javascript
import { BottomNav, BottomNavItem } from '@lib/gant';

Vue.use(BottomNav).use(BottomNavItem)
```

## 代码演示

### 基础用法

```html
<BottomNav v-model="active" @change="change">
  <BottomNavItem 
    v-for="(item, index) in navItems" 
    :info="item.info" :key="index" 
    :icon="item.icon" :activeIcon="item.activeIcon">
    {{item.text}}
  </BottomNavItem>
</BottomNav>
```

```javascript
export default {
  data () {
    return {
      active: 1
    };
  },
  computed: {
    navItems() {
      return [
        {
          name: 'shop',
          icon: require('assets/img/test.png'),
          activeIcon: require('assets/img/test2.png'), 
          text: '商城'
        },
        {
          name: 'member', 
          info: 2,
          icon: require('assets/img/test-p1.png'),
          activeIcon: require('assets/img/test-p2.png'), 
          text: '会员'
        },
        {
          name: 'cart',
          icon: require('assets/img/test-p1.png'),
          activeIcon: require('assets/img/test-p2.png'), 
          text: '购物车'
        },
        {
          name: 'personal', 
          icon: require('assets/img/test-p1.png'),
          activeIcon: require('assets/img/test-p2.png'), 
          text: '个人中心'
        }
      ]
    }
  },
  methods: {
    change() {
      console.log(this.active);
    }
  }
}
```

### 通过名称匹配

```html
<BottomNav v-model="active" @change="change">
  <BottomNavItem :name="item.name" 
    v-for="(item, index) in navItems" 
    :info="item.info" :key="index" 
    :icon="item.icon" :activeIcon="item.activeIcon">
    {{item.text}}
  </BottomNavItem>
</BottomNav>
```

```javascript
export default {
  data () {
    return {
      active: 'member'
    };
  }
}
```

## API

### BottomNav Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 当前选中标签的名称或索引值 | `string | number` | `-` |
| z-index | 元素 z-index | `string | number` | `99` |
| active-color | 选中标签的颜色 | `string` | `#1A1A1A` |


### BottomNav Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 切换标签时触发 | active: 当前选中标签的名称或索引值 |


### BottomNavItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 标签名称，作为匹配的标识符	 | `string | number` | `-` |
| icon | 图标链接	| `string` | `-` |
| activeIcon | 选中时的图标链接 | `string` | `-` |
| info | 图标右上角徽标的内容	 | `-` | `-` |